const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const { initVFS } = require('../src/kernel/vfs');
const { setupIPC } = require('../src/kernel/ipc');

app.commandLine.appendSwitch('enable-features', 'OverlayScrollbar');

let mainWindow;

app.whenReady().then(async () => {
  initVFS(path.join(app.getPath('userData'), 'aliceos_verify_vfs.db'));
  
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
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

  // Wait for initial DOM & scripts to settle
  await new Promise(r => setTimeout(r, 2000));

  // 1. Bypass boot screen & lock screen in renderer
  await mainWindow.webContents.executeJavaScript(`
    const boot = document.getElementById('boot-screen');
    if (boot) boot.remove();
    const lock = document.getElementById('lock-screen');
    if (lock) lock.remove();
    const di = document.getElementById('dynamic-island');
    if (di) { di.style.visibility = ''; di.style.opacity = '1'; di.style.pointerEvents = ''; }
    if (typeof refreshDesktop === 'function') refreshDesktop();
  `);

  await new Promise(r => setTimeout(r, 1000));

  // 2. Capture Empty Trash icon
  const emptyTrashInfo = await mainWindow.webContents.executeJavaScript(`
    (() => {
      const trash = document.getElementById('dock-trash');
      trash.classList.remove('has-items');
      const rect = trash.getBoundingClientRect();
      return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
    })()
  `);

  const imgEmptyTrash = await mainWindow.capturePage({
    x: Math.round(emptyTrashInfo.x - 5),
    y: Math.round(emptyTrashInfo.y - 15),
    width: Math.round(emptyTrashInfo.width + 10),
    height: Math.round(emptyTrashInfo.height + 20)
  });
  fs.mkdirSync('scratch', { recursive: true });
  fs.writeFileSync('scratch/verify-trash-empty.png', imgEmptyTrash.toPNG());
  console.log('Saved scratch/verify-trash-empty.png');

  // 3. Put an item in Trash & verify full trash state
  await mainWindow.webContents.executeJavaScript(`
    (async () => {
      await window.aliceOS.vfs.mkdir('/Users/alice/.Trash');
      await window.aliceOS.vfs.writeFile('/Users/alice/.Trash/sample_document.txt', 'Hello macOS Trash');
      await checkAndUpdateTrashState();
    })()
  `);

  await new Promise(r => setTimeout(r, 500));

  const hasItemsClass = await mainWindow.webContents.executeJavaScript(`
    document.getElementById('dock-trash').classList.contains('has-items')
  `);
  console.log('Dock trash has-items class after adding file:', hasItemsClass);

  const imgFullTrash = await mainWindow.capturePage({
    x: Math.round(emptyTrashInfo.x - 5),
    y: Math.round(emptyTrashInfo.y - 15),
    width: Math.round(emptyTrashInfo.width + 10),
    height: Math.round(emptyTrashInfo.height + 20)
  });
  fs.writeFileSync('scratch/verify-trash-full.png', imgFullTrash.toPNG());
  console.log('Saved scratch/verify-trash-full.png');

  // 4. Test File Context Menu & Get Info dialog
  await mainWindow.webContents.executeJavaScript(`
    (async () => {
      showGetInfo({
        name: 'Financial_Report_2026.pdf',
        path: '/Users/alice/Documents/Financial_Report_2026.pdf',
        size: 348160,
        isDirectory: false
      });
    })()
  `);

  await new Promise(r => setTimeout(r, 800));

  const imgGetInfo = await mainWindow.capturePage();
  fs.writeFileSync('scratch/verify-getinfo-dialog.png', imgGetInfo.toPNG());
  console.log('Saved scratch/verify-getinfo-dialog.png');

  // 5. Test File Context Menu
  await mainWindow.webContents.executeJavaScript(`
    (() => {
      showFileContextMenu(400, 250, {
        name: 'Project_Sequoia.txt',
        path: '/Users/alice/Desktop/Project_Sequoia.txt',
        size: 2048,
        isDirectory: false
      });
    })()
  `);

  await new Promise(r => setTimeout(r, 500));

  const imgCtxMenu = await mainWindow.capturePage({
    x: 380,
    y: 230,
    width: 260,
    height: 300
  });
  fs.writeFileSync('scratch/verify-file-context-menu.png', imgCtxMenu.toPNG());
  console.log('Saved scratch/verify-file-context-menu.png');

  // 6. Test Inactive Window traffic lights
  await mainWindow.webContents.executeJavaScript(`
    (() => {
      launchFinder();
    })()
  `);
  await new Promise(r => setTimeout(r, 1200));

  await mainWindow.webContents.executeJavaScript(`
    (() => {
      const wins = document.querySelectorAll('.window');
      if (wins.length > 0) {
        wins[0].classList.add('is-inactive');
        wins[0].classList.remove('is-active');
      }
    })()
  `);
  await new Promise(r => setTimeout(r, 500));

  const inactiveWinControls = await mainWindow.webContents.executeJavaScript(`
    (() => {
      const ctrl = document.querySelector('.window.is-inactive .window-controls');
      if (!ctrl) return null;
      const rect = ctrl.getBoundingClientRect();
      return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
    })()
  `);

  if (inactiveWinControls) {
    const imgControls = await mainWindow.capturePage({
      x: Math.round(inactiveWinControls.x - 10),
      y: Math.round(inactiveWinControls.y - 10),
      width: Math.round(inactiveWinControls.width + 40),
      height: Math.round(inactiveWinControls.height + 20)
    });
    fs.writeFileSync('scratch/verify-inactive-controls.png', imgControls.toPNG());
    console.log('Saved scratch/verify-inactive-controls.png');
  }

  console.log('Verification completed successfully!');
  app.quit();
});
