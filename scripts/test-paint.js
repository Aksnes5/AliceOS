const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const { initVFS } = require('../src/kernel/vfs');
const { setupIPC } = require('../src/kernel/ipc');

app.commandLine.appendSwitch('disable-gpu');

app.whenReady().then(async () => {
  initVFS(path.join(app.getPath('userData'), 'test_paint.db'));
  const win = new BrowserWindow({
    width: 1366,
    height: 850,
    frame: false,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, '../src/desktop/preload.js'),
      offscreen: false
    }
  });

  setupIPC(ipcMain, win);
  await win.loadFile(path.join(__dirname, '../src/desktop/index.html'));

  await new Promise(r => setTimeout(r, 1000));
  await win.webContents.executeJavaScript(`
    const boot = document.getElementById('boot-screen'); if (boot) boot.remove();
    const lock = document.getElementById('login-screen'); if (lock) lock.remove();
    if (typeof refreshDesktop === 'function') refreshDesktop();
  `);
  await new Promise(r => setTimeout(r, 1000));

  await win.webContents.executeJavaScript(`
    (async () => {
      await launchTerminal();
      await new Promise(r => setTimeout(r, 600));
      applyTiling('left');
      await new Promise(r => setTimeout(r, 200));
    })()
  `);

  await new Promise(r => setTimeout(r, 600));
  const img = await win.webContents.capturePage();
  fs.writeFileSync(path.join(__dirname, '../scratch/test-paint.png'), img.toPNG());
  console.log('Saved test-paint.png');
  app.quit();
});
