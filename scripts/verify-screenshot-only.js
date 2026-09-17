const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const { initVFS } = require('../src/kernel/vfs');
const { setupIPC } = require('../src/kernel/ipc');

app.commandLine.appendSwitch('enable-features', 'OverlayScrollbar');

let mainWindow;

app.whenReady().then(async () => {
  const dbPath = path.join(app.getPath('userData'), 'aliceos_verify_macos.db');
  initVFS(dbPath);
  
  mainWindow = new BrowserWindow({
    width: 1366,
    height: 850,
    frame: false,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, '../src/desktop/preload.js'),
      contextIsolated: true,
      nodeIntegration: false,
      webviewTag: true
    }
  });

  setupIPC(ipcMain, mainWindow);
  await mainWindow.loadFile(path.join(__dirname, '../src/desktop/index.html'));

  // Wait for initial load
  await new Promise(r => setTimeout(r, 1500));

  // Bypass boot & lock screen completely
  await mainWindow.webContents.executeJavaScript(`
    const boot = document.getElementById('boot-screen');
    if (boot) boot.remove();
    const lock = document.getElementById('login-screen');
    if (lock) lock.remove();
    const di = document.getElementById('dynamic-island');
    if (di) { di.style.visibility = ''; di.style.opacity = '1'; di.style.pointerEvents = ''; }
    if (typeof refreshDesktop === 'function') refreshDesktop();
  `);

  await new Promise(r => setTimeout(r, 1500));

  // Open Screenshot Utility Bar
  await mainWindow.webContents.executeJavaScript(`
    if (typeof openScreenshotUtilityBar === 'function') {
      openScreenshotUtilityBar();
    }
    const bar = document.getElementById('screenshot-bar-hud');
    if (bar) {
      bar.style.display = 'flex';
      bar.style.opacity = '1';
      bar.style.animation = 'none';
    }
  `);

  await new Promise(r => setTimeout(r, 800));

  const scratchDir = path.join(__dirname, '../scratch');
  const ssBarImg = await mainWindow.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-screenshot-bar.png'), ssBarImg.toPNG());
  console.log('Successfully saved verify-screenshot-bar.png');

  app.quit();
});
