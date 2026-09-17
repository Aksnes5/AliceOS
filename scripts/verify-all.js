const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const { initVFS } = require('../src/kernel/vfs');
const { setupIPC } = require('../src/kernel/ipc');

app.whenReady().then(async () => {
  initVFS(path.join(app.getPath('userData'), 'aliceos_verify_vfs.db'));
  
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    frame: false,
    show: true,
    webPreferences: {
      preload: path.join(__dirname, '../src/desktop/preload.js'),
      contextIsolated: true,
      nodeIntegration: false,
      webviewTag: true
    }
  });

  setupIPC(ipcMain, win);
  await win.loadFile(path.join(__dirname, '../src/desktop/index.html'));
  await new Promise(r => setTimeout(r, 2000));

  // 1. Unlock OS
  await win.webContents.executeJavaScript(`
    (() => {
      const boot = document.getElementById('boot-screen');
      if (boot) boot.remove();
      const lock = document.getElementById('lock-screen');
      if (lock) lock.remove();
      const di = document.getElementById('dynamic-island');
      if (di) { di.style.visibility = ''; di.style.opacity = '1'; di.style.pointerEvents = ''; }
      if (typeof refreshDesktop === 'function') refreshDesktop();
    })()
  `);

  await new Promise(r => setTimeout(r, 1000));

  // Capture Full Desktop (Clean Empty State)
  const pageEmpty = await win.capturePage();
  fs.mkdirSync('scratch', { recursive: true });
  fs.writeFileSync('scratch/desktop-clean.png', pageEmpty.toPNG());
  console.log('Saved scratch/desktop-clean.png');

  // 2. Put item in Trash and verify full trash icon
  await win.webContents.executeJavaScript(`
    (async () => {
      await window.aliceOS.vfs.mkdir('/Users/alice/.Trash');
      await window.aliceOS.vfs.writeFile('/Users/alice/.Trash/sample_memo.txt', 'Discarded item');
      await checkAndUpdateTrashState();
    })()
  `);
  await new Promise(r => setTimeout(r, 600));

  const isTrashFull = await win.webContents.executeJavaScript(`
    (() => document.getElementById('dock-trash').classList.contains('has-items'))()
  `);
  console.log('Dock Trash is full:', isTrashFull);

  // 3. Open Get Info Dialog
  await win.webContents.executeJavaScript(`
    (() => {
      showGetInfo({
        name: 'macOS_Sonoma_Presentation.key',
        path: '/Users/alice/Desktop/macOS_Sonoma_Presentation.key',
        size: 14680064,
        isDirectory: false
      });
    })()
  `);
  await new Promise(r => setTimeout(r, 800));

  // Capture with Get Info open
  const pageGetInfo = await win.capturePage();
  fs.writeFileSync('scratch/desktop-getinfo.png', pageGetInfo.toPNG());
  console.log('Saved scratch/desktop-getinfo.png');

  // 4. Test File Context Menu
  await win.webContents.executeJavaScript(`
    (() => {
      showFileContextMenu(500, 200, {
        name: 'Project_Alpha.txt',
        path: '/Users/alice/Desktop/Project_Alpha.txt',
        size: 4096,
        isDirectory: false
      });
    })()
  `);
  await new Promise(r => setTimeout(r, 600));

  const pageCtx = await win.capturePage();
  fs.writeFileSync('scratch/desktop-file-context-menu.png', pageCtx.toPNG());
  console.log('Saved scratch/desktop-file-context-menu.png');

  // 5. Open Finder and test inactive traffic lights
  await win.webContents.executeJavaScript(`
    (() => {
      hideFileContextMenu();
      launchFinder();
    })()
  `);
  await new Promise(r => setTimeout(r, 1200));

  // Make Finder inactive
  await win.webContents.executeJavaScript(`
    (() => {
      const allWins = document.querySelectorAll('.window');
      allWins.forEach(w => {
        w.classList.add('is-inactive');
        w.classList.remove('is-active');
      });
    })()
  `);
  await new Promise(r => setTimeout(r, 600));

  const pageInactive = await win.capturePage();
  fs.writeFileSync('scratch/desktop-inactive-window.png', pageInactive.toPNG());
  console.log('Saved scratch/desktop-inactive-window.png');

  console.log('All verifications completed successfully!');
  app.quit();
});
