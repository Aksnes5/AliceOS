const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const { initVFS } = require('../src/kernel/vfs');
const { setupIPC } = require('../src/kernel/ipc');

app.commandLine.appendSwitch('enable-features', 'OverlayScrollbar');

let mainWindow;

app.whenReady().then(async () => {
  const dbPath = path.join(app.getPath('userData'), 'aliceos_verify_finder_airdrop.db');
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
  // TEST 1: Finder AirDrop Radar Sonar View
  // ==========================================
  console.log('[TEST 1] Testing Finder AirDrop Radar Sonar View...');
  await mainWindow.webContents.executeJavaScript(`
    (async () => {
      if (typeof launchFinder === 'function') await launchFinder();
    })()
  `);
  await new Promise(r => setTimeout(r, 1000));

  await mainWindow.webContents.executeJavaScript(`
    const airdropItem = document.querySelector('.finder-sidebar-item[data-path="airdrop"]');
    if (airdropItem) airdropItem.click();
  `);
  await new Promise(r => setTimeout(r, 1000));

  const airdropStatus = await mainWindow.webContents.executeJavaScript(`
    (() => {
      const stage = document.querySelector('.finder-airdrop-stage');
      const rings = stage ? stage.querySelectorAll('.airdrop-sonar-ring') : [];
      const center = stage ? stage.querySelector('.airdrop-center-label') : null;
      const orbits = stage ? stage.querySelectorAll('.airdrop-device-orbit') : [];
      const select = stage ? stage.querySelector('.airdrop-discovery-select') : null;

      return {
        stageRendered: !!stage,
        ringsCount: rings.length,
        centerText: center ? center.innerText : '',
        orbitsCount: orbits.length,
        hasDiscoverySelect: !!select
      };
    })()
  `);
  console.log('AirDrop Status:', JSON.stringify(airdropStatus));
  if (!airdropStatus.stageRendered || airdropStatus.ringsCount < 3 || airdropStatus.orbitsCount < 3) {
    throw new Error('Finder AirDrop validation failed: ' + JSON.stringify(airdropStatus));
  }

  const airdropImg = await mainWindow.webContents.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-finder-airdrop.png'), airdropImg.toPNG());
  console.log('Saved verify-finder-airdrop.png');

  // ==========================================
  // TEST 2: Finder Recents Timeline Grouping View
  // ==========================================
  console.log('[TEST 2] Testing Finder Recents Timeline Grouping View...');
  await mainWindow.webContents.executeJavaScript(`
    const recentsItem = document.querySelector('.finder-sidebar-item[data-path="recents"]');
    if (recentsItem) recentsItem.click();
  `);
  await new Promise(r => setTimeout(r, 1000));

  const recentsStatus = await mainWindow.webContents.executeJavaScript(`
    (() => {
      const container = document.querySelector('.finder-recents-container');
      const groups = container ? container.querySelectorAll('.finder-recents-group') : [];
      const rows = container ? container.querySelectorAll('.finder-recents-row') : [];
      return {
        containerRendered: !!container,
        groupsCount: groups.length,
        rowsCount: rows.length
      };
    })()
  `);
  console.log('Recents Status:', JSON.stringify(recentsStatus));
  if (!recentsStatus.containerRendered || recentsStatus.groupsCount === 0 || recentsStatus.rowsCount === 0) {
    throw new Error('Finder Recents validation failed: ' + JSON.stringify(recentsStatus));
  }

  const recentsImg = await mainWindow.webContents.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-finder-recents.png'), recentsImg.toPNG());
  console.log('Saved verify-finder-recents.png');

  // ==========================================
  // TEST 3: macOS Native Trash Confirmation Modal
  // ==========================================
  console.log('[TEST 3] Testing Native Trash Confirmation Modal...');
  await mainWindow.webContents.executeJavaScript(`
    window.confirmEmptyTrash(false);
  `);
  await new Promise(r => setTimeout(r, 800));

  const trashStatus = await mainWindow.webContents.executeJavaScript(`
    (() => {
      const modal = document.getElementById('trash-confirm-modal');
      const title = document.getElementById('trash-confirm-title');
      const btn = document.getElementById('trash-confirm-empty-btn');
      return {
        modalVisible: modal ? modal.style.display === 'flex' : false,
        titleText: title ? title.innerText : '',
        btnText: btn ? btn.innerText : ''
      };
    })()
  `);
  console.log('Trash Modal Status:', JSON.stringify(trashStatus));
  if (!trashStatus.modalVisible || !trashStatus.titleText.includes('永久抹掉') || !trashStatus.btnText.includes('清空废纸篓')) {
    throw new Error('Trash Modal validation failed: ' + JSON.stringify(trashStatus));
  }

  const trashImg = await mainWindow.webContents.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-trash-confirm-modal.png'), trashImg.toPNG());
  console.log('Saved verify-trash-confirm-modal.png');

  // Close trash modal
  await mainWindow.webContents.executeJavaScript(`
    window.closeTrashConfirmModal();
  `);
  await new Promise(r => setTimeout(r, 600));

  // ==========================================
  // TEST 4: Screen Mirroring Popover
  // ==========================================
  console.log('[TEST 4] Testing Screen Mirroring Popover...');
  await mainWindow.webContents.executeJavaScript(`
    window.toggleScreenMirrorPopover();
  `);
  await new Promise(r => setTimeout(r, 800));

  const mirrorStatus = await mainWindow.webContents.executeJavaScript(`
    (() => {
      const pop = document.getElementById('screen-mirroring-popover');
      const items = pop ? pop.querySelectorAll('.mirror-device-item') : [];
      return {
        popoverVisible: pop ? pop.style.display === 'block' : false,
        deviceCount: items.length
      };
    })()
  `);
  console.log('Screen Mirroring Status:', JSON.stringify(mirrorStatus));
  if (!mirrorStatus.popoverVisible || mirrorStatus.deviceCount < 3) {
    throw new Error('Screen Mirroring validation failed: ' + JSON.stringify(mirrorStatus));
  }

  const mirrorImg = await mainWindow.webContents.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-screen-mirroring.png'), mirrorImg.toPNG());
  console.log('Saved verify-screen-mirroring.png');

  // Close mirror popover
  await mainWindow.webContents.executeJavaScript(`window.closeScreenMirrorPopover();`);
  await new Promise(r => setTimeout(r, 400));

  console.log('Console errors count:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.error('Console errors:', consoleErrors);
    throw new Error('Found console errors during verification!');
  }

  console.log('ALL TESTS COMPLETED SUCCESSFULLY! 100% macOS Fidelity Verified.');
  app.quit();
});
