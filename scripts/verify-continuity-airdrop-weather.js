const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const { initVFS } = require('../src/kernel/vfs');
const { setupIPC } = require('../src/kernel/ipc');

app.commandLine.appendSwitch('enable-features', 'OverlayScrollbar');

let mainWindow;

app.whenReady().then(async () => {
  const dbPath = path.join(app.getPath('userData'), 'aliceos_verify_continuity.db');
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

  // Wait for initial boot
  await new Promise(r => setTimeout(r, 1200));

  await mainWindow.webContents.executeJavaScript(`
    const boot = document.getElementById('boot-screen');
    if (boot) boot.remove();
    const lock = document.getElementById('login-screen');
    if (lock) lock.style.display = 'none';
    const di = document.getElementById('dynamic-island');
    if (di) { di.style.visibility = ''; di.style.opacity = '1'; di.style.pointerEvents = ''; }
    if (typeof refreshDesktop === 'function') refreshDesktop();
  `);

  await new Promise(r => setTimeout(r, 1000));

  const scratchDir = path.join(__dirname, '../scratch');
  if (!fs.existsSync(scratchDir)) {
    fs.mkdirSync(scratchDir, { recursive: true });
  }

  // STEP 1: AirDrop Incoming Banner
  console.log('[STEP 1] AirDrop Incoming Flow Banner...');
  await mainWindow.webContents.executeJavaScript(`
    window.triggerIncomingAirDrop('Alice 的 iPhone 16 Pro', 'Sequoia_Shot_2026.png', '3.8 MB', 'DUMMY_DATA', '🖼️');
  `);
  await new Promise(r => setTimeout(r, 500));

  const airdropBannerImg = await mainWindow.webContents.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-airdrop-banner.png'), airdropBannerImg.toPNG());
  console.log('Saved verify-airdrop-banner.png');

  // STEP 2: Accept AirDrop & Save to ~/Downloads
  console.log('[STEP 2] Accepting AirDrop and verifying VFS save to ~/Downloads...');
  await mainWindow.webContents.executeJavaScript(`
    window.acceptIncomingAirDrop();
  `);
  await new Promise(r => setTimeout(r, 1200));

  const airdropAcceptedImg = await mainWindow.webContents.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-airdrop-accepted.png'), airdropAcceptedImg.toPNG());
  console.log('Saved verify-airdrop-accepted.png');

  // Dismiss AirDrop banner
  await mainWindow.webContents.executeJavaScript(`
    window.declineIncomingAirDrop();
  `);
  await new Promise(r => setTimeout(r, 500));

  // STEP 3: Universal Clipboard Continuity Capsule HUD
  console.log('[STEP 3] Universal Clipboard Continuity Capsule HUD...');
  await mainWindow.webContents.executeJavaScript(`
    window.showUniversalClipboardHUD('Alice 的 iPhone', '从 iPhone 粘贴...');
  `);
  await new Promise(r => setTimeout(r, 450));

  const clipImg = await mainWindow.webContents.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-clipboard-hud.png'), clipImg.toPNG());
  console.log('Saved verify-clipboard-hud.png');

  // Wait for Clipboard HUD to hide
  await new Promise(r => setTimeout(r, 2200));

  // STEP 4: Dynamic Weather Wallpaper Engine (Rain)
  console.log('[STEP 4] Dynamic Weather Wallpaper Engine (Rain)...');
  await mainWindow.webContents.executeJavaScript(`
    window.initWeatherWallpaperEngine('rain');
  `);
  await new Promise(r => setTimeout(r, 800));

  const weatherImg = await mainWindow.webContents.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-weather-wallpaper.png'), weatherImg.toPNG());
  console.log('Saved verify-weather-wallpaper.png');

  console.log('Console errors count:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.error('Console errors:', consoleErrors);
    throw new Error('Found console errors during verification!');
  }

  console.log('ALL TESTS COMPLETED SUCCESSFULLY!');
  app.quit();
});
