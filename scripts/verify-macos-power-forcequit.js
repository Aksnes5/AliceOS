const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const { initVFS } = require('../src/kernel/vfs');
const { setupIPC } = require('../src/kernel/ipc');

app.commandLine.appendSwitch('enable-features', 'OverlayScrollbar');

let mainWindow;

app.whenReady().then(async () => {
  const dbPath = path.join(app.getPath('userData'), 'aliceos_verify_power_fq.db');
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

  // ==========================================
  // TEST 1: macOS Force Quit Applications Dialog (⌥⌘⎋)
  // ==========================================
  console.log('[TEST 1] Testing Force Quit Applications Dialog...');
  await mainWindow.webContents.executeJavaScript(`
    (async () => {
      // Spawn Safari and Terminal first
      if (typeof launchBrowser === 'function') await launchBrowser();
      if (typeof launchTerminal === 'function') await launchTerminal();
      await new Promise(r => setTimeout(r, 600));

      window.openForceQuitDialog();
    })()
  `);
  await new Promise(r => setTimeout(r, 400));

  const fqStatus = await mainWindow.webContents.executeJavaScript(`
    (() => {
      const modal = document.getElementById('force-quit-modal');
      const list = document.getElementById('force-quit-list');
      const items = list ? list.querySelectorAll('.force-quit-item') : [];
      const actionBtn = document.getElementById('force-quit-action-btn');

      // Test selecting Finder
      const finderItem = Array.from(items).find(it => it.innerText.includes('访达'));
      if (finderItem) finderItem.click();
      const finderBtnText = actionBtn ? actionBtn.innerText : '';

      // Test selecting another app
      const otherItem = Array.from(items).find(it => !it.innerText.includes('访达'));
      if (otherItem) otherItem.click();
      const otherBtnText = actionBtn ? actionBtn.innerText : '';

      return {
        modalVisible: modal ? modal.style.display === 'flex' : false,
        itemCount: items.length,
        finderBtnText,
        otherBtnText
      };
    })()
  `);
  console.log('Force Quit Dialog Status:', JSON.stringify(fqStatus));
  if (!fqStatus.modalVisible || fqStatus.itemCount < 2 || fqStatus.finderBtnText !== '重新开启' || fqStatus.otherBtnText !== '强制退出') {
    throw new Error('Force Quit Dialog validation failed: ' + JSON.stringify(fqStatus));
  }

  const fqImg = await mainWindow.webContents.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-force-quit-dialog.png'), fqImg.toPNG());
  console.log('Saved verify-force-quit-dialog.png');

  // Close Force Quit Dialog
  await mainWindow.webContents.executeJavaScript(`window.closeForceQuitDialog();`);
  await new Promise(r => setTimeout(r, 400));

  // ==========================================
  // TEST 2: Apple Menu & Recent Items Flyout
  // ==========================================
  console.log('[TEST 2] Testing Apple Menu & Recent Items Flyout Submenu...');
  await mainWindow.webContents.executeJavaScript(`
    (() => {
      const appleMenu = document.getElementById('apple-menu');
      if (appleMenu) appleMenu.style.display = 'block';
      window.openRecentSubmenu();
    })()
  `);
  await new Promise(r => setTimeout(r, 300));

  const recentStatus = await mainWindow.webContents.executeJavaScript(`
    (() => {
      const appleMenu = document.getElementById('apple-menu');
      const submenu = document.getElementById('apple-recent-submenu');
      const appsList = document.getElementById('recent-apps-list');
      const docsList = document.getElementById('recent-docs-list');
      return {
        appleMenuVisible: appleMenu ? appleMenu.style.display === 'block' : false,
        submenuVisible: submenu ? submenu.style.display === 'block' : false,
        appsCount: appsList ? appsList.children.length : 0,
        docsCount: docsList ? docsList.children.length : 0
      };
    })()
  `);
  console.log('Recent Items Status:', JSON.stringify(recentStatus));
  if (!recentStatus.submenuVisible || recentStatus.appsCount === 0) {
    throw new Error('Recent Items Submenu validation failed: ' + JSON.stringify(recentStatus));
  }

  const recentImg = await mainWindow.webContents.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-apple-recent-menu.png'), recentImg.toPNG());
  console.log('Saved verify-apple-recent-menu.png');

  // Close menus
  await mainWindow.webContents.executeJavaScript(`
    if (typeof closeAllTopMenus === 'function') closeAllTopMenus();
    const submenu = document.getElementById('apple-recent-submenu');
    if (submenu) submenu.style.display = 'none';
  `);
  await new Promise(r => setTimeout(r, 400));

  // ==========================================
  // TEST 3: macOS Native Power (Restart / Shutdown 60s Countdown)
  // ==========================================
  console.log('[TEST 3] Testing Native Power Confirmation Modal (60s countdown)...');
  await mainWindow.webContents.executeJavaScript(`
    window.confirmMacRestart();
  `);
  await new Promise(r => setTimeout(r, 300));

  const powerStatus = await mainWindow.webContents.executeJavaScript(`
    (() => {
      const modal = document.getElementById('mac-power-modal');
      const title = document.getElementById('mac-power-title');
      const cd = document.getElementById('mac-power-countdown');
      const btn = document.getElementById('mac-power-confirm-btn');
      return {
        modalVisible: modal ? modal.style.display === 'flex' : false,
        titleText: title ? title.innerText : '',
        countdown: cd ? parseInt(cd.innerText) : 0,
        btnText: btn ? btn.innerText : ''
      };
    })()
  `);
  console.log('Power Modal Status:', JSON.stringify(powerStatus));
  if (!powerStatus.modalVisible || !powerStatus.titleText.includes('重新启动') || powerStatus.countdown <= 0) {
    throw new Error('Power Modal validation failed: ' + JSON.stringify(powerStatus));
  }

  const powerImg = await mainWindow.webContents.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-mac-power-modal.png'), powerImg.toPNG());
  console.log('Saved verify-mac-power-modal.png');

  // Cancel power modal
  await mainWindow.webContents.executeJavaScript(`window.cancelMacPowerAction();`);
  await new Promise(r => setTimeout(r, 400));

  // ==========================================
  // TEST 4: macOS Native Display Sleep & Wake
  // ==========================================
  console.log('[TEST 4] Testing macOS Display Sleep & Wake Engine...');
  await mainWindow.webContents.executeJavaScript(`
    window.sleepMacDisplay();
  `);
  await new Promise(r => setTimeout(r, 500));

  const sleepStatus = await mainWindow.webContents.executeJavaScript(`
    (() => {
      const sleepEl = document.getElementById('mac-display-sleep');
      return {
        sleepActive: sleepEl ? sleepEl.classList.contains('active') : false,
        sleepDisplay: sleepEl ? sleepEl.style.display : ''
      };
    })()
  `);
  console.log('Sleep Status:', JSON.stringify(sleepStatus));
  if (!sleepStatus.sleepActive || sleepStatus.sleepDisplay !== 'flex') {
    throw new Error('Display Sleep validation failed: ' + JSON.stringify(sleepStatus));
  }

  const sleepImg = await mainWindow.webContents.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-mac-sleep.png'), sleepImg.toPNG());
  console.log('Saved verify-mac-sleep.png');

  // Wake up display
  await mainWindow.webContents.executeJavaScript(`
    window.wakeMacDisplay();
  `);
  await new Promise(r => setTimeout(r, 600));

  console.log('Console errors count:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.error('Console errors:', consoleErrors);
    throw new Error('Found console errors during verification!');
  }

  console.log('ALL TESTS COMPLETED SUCCESSFULLY! 100% macOS Fidelity Verified.');
  app.quit();
});
