const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { initVFS } = require('../src/kernel/vfs');
const { setupIPC } = require('../src/kernel/ipc');

app.whenReady().then(async () => {
  initVFS(path.join(app.getPath('userData'), 'inspect_desk.db'));
  const win = new BrowserWindow({ width: 1366, height: 850, frame: false, show: false, webPreferences: { preload: path.join(__dirname, '../src/desktop/preload.js') } });
  setupIPC(ipcMain, win);
  await win.loadFile(path.join(__dirname, '../src/desktop/index.html'));

  await new Promise(r => setTimeout(r, 1000));
  const info = await win.webContents.executeJavaScript(`
    (() => {
      const d = document.getElementById('desktop');
      const dr = d.getBoundingClientRect();
      const bodyChildren = Array.from(document.body.children).map(c => {
        const r = c.getBoundingClientRect();
        return { tag: c.tagName, id: c.id, cls: c.className, h: r.height, top: r.top };
      }).filter(c => c.h > 0);
      return { desktopRect: { x: dr.x, y: dr.y, w: dr.width, h: dr.height }, bodyChildren };
    })()
  `);
  console.log('DESKTOP RECT:', JSON.stringify(info, null, 2));
  app.quit();
});
