const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const { initVFS } = require('../src/kernel/vfs');
const { setupIPC } = require('../src/kernel/ipc');

app.whenReady().then(async () => {
  initVFS(path.join(app.getPath('userData'), 'aliceos_verify_vfs.db'));
  
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    frame: false,
    show: true,
    webPreferences: {
      preload: path.join(__dirname, '../src/desktop/preload.js'),
      contextIsolated: true,
      nodeIntegration: false,
      webviewTag: true
    }
  });

  setupIPC(ipcMain, win);
  await win.loadFile(path.join(__dirname, '../src/desktop/index.html'));
  await new Promise(r => setTimeout(r, 2000));

  await win.webContents.executeJavaScript(`
    (() => {
      const boot = document.getElementById('boot-screen');
      if (boot) boot.remove();
      const lock = document.getElementById('lock-screen');
      if (lock) lock.remove();
    })()
  `);

  await new Promise(r => setTimeout(r, 500));

  // Run emptyTrash
  await win.webContents.executeJavaScript(`
    (async () => {
      await emptyTrash();
    })()
  `);

  await new Promise(r => setTimeout(r, 800));

  const isTrashFull = await win.webContents.executeJavaScript(`
    (() => document.getElementById('dock-trash').classList.contains('has-items'))()
  `);
  console.log('Dock Trash has-items after emptyTrash():', isTrashFull);

  const pageAfterEmpty = await win.capturePage();
  fs.writeFileSync('scratch/desktop-after-empty.png', pageAfterEmpty.toPNG());
  console.log('Saved scratch/desktop-after-empty.png');

  app.quit();
});
