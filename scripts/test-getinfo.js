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

  win.webContents.on('console-message', (event, level, message, line, sourceId) => {
    console.log(`[Renderer Console] ${message} (line ${line})`);
  });

  setupIPC(ipcMain, win);
  await win.loadFile(path.join(__dirname, '../src/desktop/index.html'));
  await new Promise(r => setTimeout(r, 2000));

  // Bypass boot & lock screen
  const res = await win.webContents.executeJavaScript(`
    try {
      const boot = document.getElementById('boot-screen');
      if (boot) boot.remove();
      const lock = document.getElementById('lock-screen');
      if (lock) lock.remove();
      return { success: true };
    } catch(e) {
      return { error: e.message, stack: e.stack };
    }
  `);
  console.log('Bypass result:', res);

  // Check showGetInfo
  const getInfoRes = await win.webContents.executeJavaScript(`
    try {
      showGetInfo({
        name: 'Report_2026.pdf',
        path: '/Users/alice/Documents/Report_2026.pdf',
        size: 245760,
        isDirectory: false
      });
      return { success: true };
    } catch(e) {
      return { error: e.message, stack: e.stack };
    }
  `);
  console.log('getInfoRes:', getInfoRes);

  await new Promise(r => setTimeout(r, 800));

  const page = await win.capturePage();
  fs.writeFileSync('scratch/test-getinfo-live.png', page.toPNG());
  console.log('Saved scratch/test-getinfo-live.png');

  app.quit();
});
