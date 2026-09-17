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

  const consoleErrors = [];
  mainWindow.webContents.on('console-message', (e, level, message) => {
    if (level === 3) consoleErrors.push(message);
  });

  // Wait for initial load
  await new Promise(r => setTimeout(r, 1000));

  // Bypass boot & lock screen completely
  await mainWindow.webContents.executeJavaScript(`
    const boot = document.getElementById('boot-screen');
    if (boot) boot.remove();
    const lock = document.getElementById('login-screen');
    if (lock) lock.remove();
    const di = document.getElementById('dynamic-island');
    if (di) { di.style.visibility = ''; di.style.opacity = '1'; di.style.pointerEvents = ''; }
    
    // Disable nc-panel transition delay for headless capture
    const style = document.createElement('style');
    style.id = 'disable-transitions';
    style.innerHTML = '.nc-panel { transition: none !important; }';
    document.head.appendChild(style);

    if (typeof refreshDesktop === 'function') refreshDesktop();
  `);

  // Allow desktop, dock, widgets to settle
  await new Promise(r => setTimeout(r, 2000));

  const scratchDir = path.join(__dirname, '../scratch');
  if (!fs.existsSync(scratchDir)) {
    fs.mkdirSync(scratchDir, { recursive: true });
  }

  // TEST 1: Open Screenshot Utility Bar
  console.log('[TEST 1] Opening Screen Capture Utility Bar (⌘⇧5)...');
  const ssStatus = await mainWindow.webContents.executeJavaScript(`
    (() => {
      if (typeof openScreenshotUtilityBar !== 'function') return { ok: false, err: 'no openScreenshotUtilityBar' };
      openScreenshotUtilityBar();
      const bar = document.getElementById('screenshot-bar-hud');
      const crop = document.getElementById('screenshot-crop-box');
      return {
        ok: true,
        barDisplay: bar ? getComputedStyle(bar).display : null,
        cropDisplay: crop ? getComputedStyle(crop).display : null
      };
    })()
  `);
  console.log('SS Status:', ssStatus);
  await new Promise(r => setTimeout(r, 600));

  const ssBarImg = await mainWindow.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-screenshot-bar.png'), ssBarImg.toPNG());
  console.log('Saved verify-screenshot-bar.png');

  // TEST 2: Close Screenshot Bar & Open Notification Center
  console.log('[TEST 2] Closing Screenshot Bar and Opening Notification Center...');
  const ncStatus = await mainWindow.webContents.executeJavaScript(`
    (() => {
      if (typeof closeScreenshotUtilityBar === 'function') {
        closeScreenshotUtilityBar();
      }
      if (typeof showNotification === 'function') {
        showNotification('隔空投送', '来自 “Tim Cook 的 iPhone” 的照片已接收', 'AirDrop');
        showNotification('备忘录', '已同步 iCloud 备忘录：macOS Sequoia 1:1', 'Notes');
      }
      if (typeof toggleNotificationCenter === 'function') {
        toggleNotificationCenter();
      }
      const bar = document.getElementById('screenshot-bar-hud');
      const crop = document.getElementById('screenshot-crop-box');
      const nc = document.getElementById('nc-panel');
      return {
        barDisplayAfterClose: bar ? getComputedStyle(bar).display : null,
        cropDisplayAfterClose: crop ? getComputedStyle(crop).display : null,
        ncOpen: nc ? nc.classList.contains('open') : false,
        ncCardsCount: document.querySelectorAll('.nc-card').length
      };
    })()
  `);
  console.log('NC Status:', ncStatus);
  await new Promise(r => setTimeout(r, 600));

  const ncImg = await mainWindow.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-notification-center.png'), ncImg.toPNG());
  console.log('Saved verify-notification-center.png');

  if (consoleErrors.length > 0) {
    console.error('Console errors encountered:', consoleErrors);
  } else {
    console.log('SUCCESS: No console errors!');
  }

  app.quit();
});
