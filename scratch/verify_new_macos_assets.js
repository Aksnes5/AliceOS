const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

const ARTIFACTS_DIR = 'C:/Users/28386/.gemini/antigravity/brain/51eb6436-481c-49d2-9011-40858bd1ebb7';

app.whenReady().then(async () => {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  await win.loadFile(path.join(__dirname, '../src/desktop/index.html'));
  await new Promise(r => setTimeout(r, 2500));

  await win.webContents.executeJavaScript(`
    (() => {
      const lock = document.getElementById('lock-screen');
      if (lock) lock.style.display = 'none';
      const boot = document.getElementById('boot-screen');
      if (boot) boot.style.display = 'none';
      const desktop = document.getElementById('desktop');
      if (desktop) desktop.style.display = 'block';
    })();
  `);

  await new Promise(r => setTimeout(r, 800));

  // 1. Capture Desktop with Dock showing real macOS icons
  let img = await win.capturePage();
  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'macos_dock_png_icons.png'), img.toPNG());
  console.log('Saved macos_dock_png_icons.png');

  // 2. Open Control Center and capture Bento Grid
  await win.webContents.executeJavaScript(`
    toggleControlCenter();
  `);
  await new Promise(r => setTimeout(r, 600));
  img = await win.capturePage();
  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'macos_control_center_bento.png'), img.toPNG());
  console.log('Saved macos_control_center_bento.png');

  // Close CC
  await win.webContents.executeJavaScript(`
    toggleControlCenter();
  `);
  await new Promise(r => setTimeout(r, 400));

  // 3. Open Launchpad and capture macOS app icons
  await win.webContents.executeJavaScript(`
    openLaunchpad();
  `);
  await new Promise(r => setTimeout(r, 800));
  img = await win.capturePage();
  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'macos_launchpad_png_icons.png'), img.toPNG());
  console.log('Saved macos_launchpad_png_icons.png');

  // Close Launchpad and show Tiling menu
  await win.webContents.executeJavaScript(`
    closeLaunchpad();
    const tilingMenu = document.getElementById('tiling-menu');
    if (tilingMenu) {
      tilingMenu.style.display = 'block';
      tilingMenu.style.top = '120px';
      tilingMenu.style.left = '200px';
    }
  `);
  await new Promise(r => setTimeout(r, 600));
  img = await win.capturePage();
  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'macos_window_tiling_menu.png'), img.toPNG());
  console.log('Saved macos_window_tiling_menu.png');

  app.quit();
});
