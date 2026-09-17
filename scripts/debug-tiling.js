const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const { initVFS } = require('../src/kernel/vfs');
const { setupIPC } = require('../src/kernel/ipc');

let mainWindow;

app.whenReady().then(async () => {
  initVFS(path.join(app.getPath('userData'), 'aliceos_debug_tiling.db'));
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

  await new Promise(r => setTimeout(r, 1000));
  await mainWindow.webContents.executeJavaScript(`
    const boot = document.getElementById('boot-screen');
    if (boot) boot.remove();
    const lock = document.getElementById('login-screen');
    if (lock) lock.remove();
    const di = document.getElementById('dynamic-island');
    if (di) { di.style.visibility = ''; di.style.opacity = '1'; di.style.pointerEvents = ''; }
    if (typeof refreshDesktop === 'function') refreshDesktop();
  `);
  await new Promise(r => setTimeout(r, 1000));

  const res = await mainWindow.webContents.executeJavaScript(`
    (async () => {
      await launchTerminal();
      await new Promise(r => setTimeout(r, 800));
      const termWin = document.querySelector('.window');
      applyTiling('left');
      
      // Wait for HUD pill animation to trigger
      await new Promise(r => setTimeout(r, 100));

      const hud = document.getElementById('tiling-hud-pill');

      return {
        termStyle: termWin ? termWin.style.cssText : null,
        hudStyle: hud ? hud.style.cssText : null,
        hudClass: hud ? hud.className : null,
        hudOpacity: hud ? getComputedStyle(hud).opacity : null
      };
    })()
  `);
  console.log('DEBUG TILING DETAILS:', JSON.stringify(res, null, 2));

  await new Promise(r => setTimeout(r, 200));
  const img = await mainWindow.capturePage();
  fs.writeFileSync(path.join(__dirname, '../scratch/debug-tiling.png'), img.toPNG());

  app.quit();
});
