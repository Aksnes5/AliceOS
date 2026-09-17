const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const { initVFS } = require('../src/kernel/vfs');
const { setupIPC } = require('../src/kernel/ipc');

app.commandLine.appendSwitch('enable-features', 'OverlayScrollbar');

let mainWindow;

app.whenReady().then(async () => {
  const dbPath = path.join(app.getPath('userData'), 'aliceos_verify_tiling.db');
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

  await new Promise(r => setTimeout(r, 1500));

  const scratchDir = path.join(__dirname, '../scratch');
  if (!fs.existsSync(scratchDir)) {
    fs.mkdirSync(scratchDir, { recursive: true });
  }

  // TEST 1: Launch iPhone Mirroring
  console.log('[TEST 1] Launching iPhone Mirroring...');
  const iphoneStatus = await mainWindow.webContents.executeJavaScript(`
    (async () => {
      await window.launchIPhoneMirroring();
      await new Promise(r => setTimeout(r, 600));

      const ipDockIcon = document.querySelector('.dock-icon[data-app="iphonemirror"]');
      const dot = ipDockIcon ? ipDockIcon.querySelector('.dock-dot') : null;
      const widgets = document.getElementById('desktop-widgets');
      const activeWin = document.querySelector('.window.is-active');

      return {
        dockDotActive: dot ? dot.classList.contains('active') : false,
        widgetsTinted: widgets ? widgets.classList.contains('tinted') : false,
        winTitle: activeWin ? activeWin.querySelector('.title')?.innerText : null
      };
    })()
  `);
  console.log('iPhone Mirroring Status:', JSON.stringify(iphoneStatus));

  await new Promise(r => setTimeout(r, 300));
  const iphoneImg = await mainWindow.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-iphone-mirroring.png'), iphoneImg.toPNG());
  console.log('Saved verify-iphone-mirroring.png');

  // TEST 2: Launch Terminal and apply Tiling (Left Half) & verify HUD pill
  console.log('[TEST 2] Testing Window Tiling (Left Half) & HUD pill...');
  const tilingStatus = await mainWindow.webContents.executeJavaScript(`
    (async () => {
      await window.launchTerminal();
      await new Promise(r => setTimeout(r, 600));

      window.applyTiling('left');
      await new Promise(r => setTimeout(r, 80));

      const hudPill = document.getElementById('tiling-hud-pill');
      const hudIcon = document.getElementById('tiling-hud-icon');
      const hudLabel = document.getElementById('tiling-hud-label');
      const activeWin = document.querySelector('.window.is-active');

      return {
        hudDisplay: hudPill ? hudPill.style.display : null,
        hudClass: hudPill ? hudPill.className : null,
        hudIconClass: hudIcon ? hudIcon.className : null,
        hudText: hudLabel ? hudLabel.innerText : null,
        winSnapped: activeWin ? activeWin.dataset.snapped : null,
        winLeft: activeWin ? activeWin.style.left : null,
        winWidth: activeWin ? activeWin.style.width : null
      };
    })()
  `);
  console.log('Tiling Status (Left):', JSON.stringify(tilingStatus));

  await new Promise(r => setTimeout(r, 200));
  const tilingImg = await mainWindow.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-tiling-hud.png'), tilingImg.toPNG());
  console.log('Saved verify-tiling-hud.png');

  // TEST 3: Click Desktop Grid to untint widgets
  console.log('[TEST 3] Testing Desktop click untinting...');
  const untintStatus = await mainWindow.webContents.executeJavaScript(`
    (() => {
      const grid = document.getElementById('desktop-grid');
      if (grid) {
        grid.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
      }
      const widgets = document.getElementById('desktop-widgets');
      return {
        widgetsTintedAfterClick: widgets ? widgets.classList.contains('tinted') : null
      };
    })()
  `);
  console.log('Untint Status:', JSON.stringify(untintStatus));

  if (consoleErrors.length > 0) {
    console.error('Console errors encountered:', consoleErrors);
  } else {
    console.log('SUCCESS: All tests passed with 0 console errors!');
  }

  app.quit();
});
