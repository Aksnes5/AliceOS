const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const { initVFS } = require('../src/kernel/vfs');
const { setupIPC } = require('../src/kernel/ipc');

app.commandLine.appendSwitch('enable-features', 'OverlayScrollbar');

let mainWindow;

app.whenReady().then(async () => {
  const dbPath = path.join(app.getPath('userData'), 'aliceos_verify_passwords.db');
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
    if (lock) lock.style.display = 'none';
    const di = document.getElementById('dynamic-island');
    if (di) { di.style.visibility = ''; di.style.opacity = '1'; di.style.pointerEvents = ''; }
    if (typeof refreshDesktop === 'function') refreshDesktop();
  `);

  await new Promise(r => setTimeout(r, 1200));

  const scratchDir = path.join(__dirname, '../scratch');
  if (!fs.existsSync(scratchDir)) {
    fs.mkdirSync(scratchDir, { recursive: true });
  }

  // TEST 1: Launch Passwords App & Check 2FA
  console.log('[TEST 1] Launching macOS Passwords App...');
  const pwdStatus = await mainWindow.webContents.executeJavaScript(`
    (async () => {
      await window.launchPasswordsApp();
      await new Promise(r => setTimeout(r, 600));

      const pwdDockIcon = document.querySelector('.dock-icon[data-app="passwords"]');
      const dot = pwdDockIcon ? pwdDockIcon.querySelector('.dock-dot') : null;
      const pwdApp = document.querySelector('.passwords-app');
      const listItems = pwdApp ? pwdApp.querySelectorAll('.passwords-row') : [];
      const totpVal = pwdApp ? pwdApp.querySelector('.passwords-totp-code') : null;

      return {
        dockDotActive: dot ? dot.classList.contains('active') : false,
        passwordsAppPresent: !!pwdApp,
        itemCount: listItems.length,
        hasTotpCode: totpVal ? totpVal.innerText.length > 5 : false
      };
    })()
  `);
  console.log('Passwords App Status:', JSON.stringify(pwdStatus));

  // Add a new password entry and test generator
  console.log('[TEST 1.1] Testing Password Generator & Add Entry...');
  const addStatus = await mainWindow.webContents.executeJavaScript(`
    (async () => {
      const newBtn = document.querySelector('.passwords-new-btn');
      if (newBtn) newBtn.click();
      await new Promise(r => setTimeout(r, 100));

      const dialog = document.querySelector('.passwords-dialog-overlay');
      const genBtn = dialog ? dialog.querySelector('[id^="pwd-gen-btn-"]') : null;
      if (genBtn) genBtn.click();

      const passIn = dialog ? dialog.querySelector('[id^="pwd-add-pass-"]') : null;
      const generatedPass = passIn ? passIn.value : '';

      const domIn = dialog ? dialog.querySelector('[id^="pwd-add-domain-"]') : null;
      if (domIn) domIn.value = 'deepmind.google.com';

      const saveBtn = dialog ? dialog.querySelector('[id^="pwd-dialog-save-"]') : null;
      if (saveBtn) saveBtn.click();
      await new Promise(r => setTimeout(r, 400));

      const updatedList = document.querySelectorAll('.passwords-row');
      return {
        dialogWasOpen: dialog && dialog.style.display !== 'none',
        generatedPassLength: generatedPass.length,
        totalItemsAfterAdd: updatedList.length
      };
    })()
  `);
  console.log('Add Password Status:', JSON.stringify(addStatus));

  const pwdImg = await mainWindow.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-passwords-app.png'), pwdImg.toPNG());
  console.log('Saved verify-passwords-app.png');

  // TEST 2: Open Hot Corners Sheet Modal
  console.log('[TEST 2] Testing Hot Corners Modal & Dynamic Action...');
  const hcStatus = await mainWindow.webContents.executeJavaScript(`
    (async () => {
      window.openHotCornersModal();
      await new Promise(r => setTimeout(r, 200));

      const modal = document.getElementById('hot-corners-modal');
      const tl = document.getElementById('hc-select-top-left');
      const tr = document.getElementById('hc-select-top-right');
      const bl = document.getElementById('hc-select-bottom-left');
      const br = document.getElementById('hc-select-bottom-right');

      const modalVisible = modal && modal.style.display === 'flex';
      const initialTR = tr ? tr.value : null;

      // Change Top-Right to quick-note
      if (tr) tr.value = 'quick-note';
      await window.saveHotCornersModal();

      const configTR = window.hotCornersConfig['top-right'];

      return {
        modalVisible,
        initialTR,
        configTR,
        modalHiddenAfterSave: modal.style.display === 'none'
      };
    })()
  `);
  console.log('Hot Corners Status:', JSON.stringify(hcStatus));

  const windowOpenImg = await mainWindow.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-hot-corners.png'), windowOpenImg.toPNG());
  console.log('Saved verify-hot-corners.png');

  console.log('Console errors:', consoleErrors.length, consoleErrors);

  app.quit();
});
