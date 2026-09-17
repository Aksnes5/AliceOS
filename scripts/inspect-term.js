const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const { initVFS } = require('../src/kernel/vfs');
const { setupIPC } = require('../src/kernel/ipc');

app.whenReady().then(async () => {
  initVFS(path.join(app.getPath('userData'), 'inspect_term.db'));
  const win = new BrowserWindow({ width: 1366, height: 850, frame: false, show: false, webPreferences: { preload: path.join(__dirname, '../src/desktop/preload.js') } });
  setupIPC(ipcMain, win);
  await win.loadFile(path.join(__dirname, '../src/desktop/index.html'));

  await new Promise(r => setTimeout(r, 1000));
  await win.webContents.executeJavaScript(`
    const boot = document.getElementById('boot-screen'); if (boot) boot.remove();
    const lock = document.getElementById('login-screen'); if (lock) lock.remove();
    if (typeof refreshDesktop === 'function') refreshDesktop();
  `);
  await new Promise(r => setTimeout(r, 1000));

  const info = await win.webContents.executeJavaScript(`
    (async () => {
      await launchTerminal();
      await new Promise(r => setTimeout(r, 500));
      applyTiling('left');
      await new Promise(r => setTimeout(r, 400));
      
      const el = document.elementFromPoint(100, 200);
      return {
        topTag: el ? el.tagName : null,
        topId: el ? el.id : null,
        topClass: el ? el.className : null
      };
    })()
  `);
  console.log('TOP ELEMENT AT (100, 200):', info);

  await new Promise(r => setTimeout(r, 400));
  const img = await win.capturePage();
  fs.writeFileSync(path.join(__dirname, '../scratch/inspect-term.png'), img.toPNG());
  console.log('Saved inspect-term.png');
  app.quit();
});
