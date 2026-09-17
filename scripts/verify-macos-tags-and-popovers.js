const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const { initVFS } = require('../src/kernel/vfs');
const { setupIPC } = require('../src/kernel/ipc');

app.commandLine.appendSwitch('enable-features', 'OverlayScrollbar');

let mainWindow;

app.whenReady().then(async () => {
  const dbPath = path.join(app.getPath('userData'), 'aliceos_verify_tags_popovers.db');
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
  // TEST 1: Finder 7-Color Tags & Labels System
  // ==========================================
  console.log('[TEST 1] Testing Finder 7-Color Tags System...');
  
  // Set tag on a desktop file and verify context menu row
  const tagSetupStatus = await mainWindow.webContents.executeJavaScript(`
    (() => {
      const ctxMenu = document.getElementById('file-context-menu');
      const tagRow = ctxMenu ? ctxMenu.querySelector('#file-ctx-tags') : null;
      const dots = tagRow ? tagRow.querySelectorAll('.ctx-tag-dot') : [];
      
      // Tag desktop quick_note.txt with red
      setFileTag('/Users/alice/Desktop/quick_note.txt', '#ff3b30');
      const savedTag = getFileTag('/Users/alice/Desktop/quick_note.txt');

      return {
        hasTagRow: !!tagRow,
        dotCount: dots.length,
        savedTag: savedTag
      };
    })()
  `);
  console.log('Tag Setup Status:', JSON.stringify(tagSetupStatus));
  if (!tagSetupStatus.hasTagRow || tagSetupStatus.dotCount !== 7 || tagSetupStatus.savedTag !== '#ff3b30') {
    throw new Error('Finder Tag Setup failed: ' + JSON.stringify(tagSetupStatus));
  }

  // Open Finder and click on Red tag sidebar item
  await mainWindow.webContents.executeJavaScript(`
    (async () => {
      if (typeof launchFinder === 'function') await launchFinder();
    })()
  `);
  await new Promise(r => setTimeout(r, 1000));

  await mainWindow.webContents.executeJavaScript(`
    const redTagSidebar = document.querySelector('.finder-sidebar-tag[data-tag-color="#ff3b30"]');
    if (redTagSidebar) redTagSidebar.click();
  `);
  await new Promise(r => setTimeout(r, 800));

  const tagFilterStatus = await mainWindow.webContents.executeJavaScript(`
    (() => {
      const redTagSidebar = document.querySelector('.finder-sidebar-tag[data-tag-color="#ff3b30"]');
      const activeTag = document.querySelector('.finder-sidebar-tag.active');
      const pathSegment = document.querySelector('.finder-path-segment');
      const rows = document.querySelectorAll('.finder-item, .finder-list-row, .finder-column-item');

      return {
        sidebarClicked: !!redTagSidebar,
        hasActiveSidebarTag: !!activeTag,
        pathText: pathSegment ? pathSegment.innerText : '',
        renderedItemsCount: rows.length
      };
    })()
  `);
  console.log('Tag Filter Status:', JSON.stringify(tagFilterStatus));
  if (!tagFilterStatus.hasActiveSidebarTag || tagFilterStatus.renderedItemsCount === 0) {
    throw new Error('Finder Tag Filter failed: ' + JSON.stringify(tagFilterStatus));
  }

  const tagImg = await mainWindow.webContents.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-finder-tags.png'), tagImg.toPNG());
  console.log('Saved verify-finder-tags.png');

  // ==========================================
  // TEST 2: Menubar Battery Popover
  // ==========================================
  console.log('[TEST 2] Testing Menubar Battery Popover...');
  await mainWindow.webContents.executeJavaScript(`
    toggleBatteryPopover();
  `);
  await new Promise(r => setTimeout(r, 400));

  const batteryStatus = await mainWindow.webContents.executeJavaScript(`
    (() => {
      const pop = document.getElementById('battery-popover');
      const pct = document.getElementById('battery-pop-pct');
      const source = document.getElementById('battery-pop-source');
      const toggle = document.getElementById('battery-low-power-toggle');

      // Test Low Power Mode toggle
      toggleLowPowerMode(true);
      const isLowPowerActive = lowPowerModeActive;
      const pctColor = pct ? pct.style.color : '';

      return {
        popVisible: pop && pop.style.display === 'block',
        pctText: pct ? pct.innerText : '',
        hasSource: !!source,
        hasToggle: !!toggle,
        isLowPowerActive,
        pctColor
      };
    })()
  `);
  console.log('Battery Popover Status:', JSON.stringify(batteryStatus));
  if (!batteryStatus.popVisible || !batteryStatus.isLowPowerActive) {
    throw new Error('Battery Popover validation failed: ' + JSON.stringify(batteryStatus));
  }

  const batteryImg = await mainWindow.webContents.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-battery-popover.png'), batteryImg.toPNG());
  console.log('Saved verify-battery-popover.png');

  // ==========================================
  // TEST 3: Menubar Sound Popover & Mutual Exclusion
  // ==========================================
  console.log('[TEST 3] Testing Menubar Sound Popover & Mutual Exclusion...');
  await mainWindow.webContents.executeJavaScript(`
    toggleSoundPopover();
  `);
  await new Promise(r => setTimeout(r, 400));

  const soundStatus = await mainWindow.webContents.executeJavaScript(`
    (() => {
      const soundPop = document.getElementById('sound-popover');
      const batPop = document.getElementById('battery-popover');
      const slider = document.getElementById('sound-pop-slider');
      const pct = document.getElementById('sound-pop-pct');
      
      // Adjust volume
      onSoundPopoverVolume(85, false);
      
      // Select AirPods Pro
      const airpodsItem = document.getElementById('sound-dev-airpods');
      if (airpodsItem) selectSoundDevice(airpodsItem, 'Alice 的 AirPods Pro', 'airpods');

      const isAirpodsActive = airpodsItem ? airpodsItem.classList.contains('active') : false;

      return {
        soundVisible: soundPop && soundPop.style.display === 'block',
        batClosed: batPop && batPop.style.display === 'none',
        volumePct: pct ? pct.innerText : '',
        isAirpodsActive
      };
    })()
  `);
  console.log('Sound Popover Status:', JSON.stringify(soundStatus));
  if (!soundStatus.soundVisible || !soundStatus.batClosed || soundStatus.volumePct !== '85%' || !soundStatus.isAirpodsActive) {
    throw new Error('Sound Popover validation failed: ' + JSON.stringify(soundStatus));
  }

  const soundImg = await mainWindow.webContents.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-sound-popover.png'), soundImg.toPNG());
  console.log('Saved verify-sound-popover.png');

  // ==========================================
  // TEST 4: Menubar Wi-Fi Popover
  // ==========================================
  console.log('[TEST 4] Testing Menubar Wi-Fi Popover...');
  await mainWindow.webContents.executeJavaScript(`
    toggleWifiPopover();
  `);
  await new Promise(r => setTimeout(r, 400));

  const wifiStatus = await mainWindow.webContents.executeJavaScript(`
    (() => {
      const wifiPop = document.getElementById('wifi-popover');
      const soundPop = document.getElementById('sound-popover');
      const activeNet = wifiPop ? wifiPop.querySelector('.wifi-network-item.active') : null;

      return {
        wifiVisible: wifiPop && (wifiPop.style.display === 'flex' || wifiPop.classList.contains('open')),
        soundClosed: soundPop && soundPop.style.display === 'none',
        activeNetText: activeNet ? activeNet.innerText : ''
      };
    })()
  `);
  console.log('Wi-Fi Popover Status:', JSON.stringify(wifiStatus));
  if (!wifiStatus.wifiVisible || !wifiStatus.soundClosed || !wifiStatus.activeNetText.includes('AliceOS-5G')) {
    throw new Error('Wi-Fi Popover validation failed: ' + JSON.stringify(wifiStatus));
  }

  const wifiImg = await mainWindow.webContents.capturePage();
  fs.writeFileSync(path.join(scratchDir, 'verify-wifi-popover.png'), wifiImg.toPNG());
  console.log('Saved verify-wifi-popover.png');

  // Verify console errors
  console.log('Console Errors count:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.error('Console errors encountered:', consoleErrors);
    throw new Error('Console errors encountered during testing: ' + JSON.stringify(consoleErrors));
  }

  console.log('ALL TESTS PASSED SUCCESSFULLY with 0 console errors!');
  app.quit();
});
