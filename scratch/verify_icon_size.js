const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');
const ARTIFACTS_DIR = 'C:/Users/28386/.gemini/antigravity/brain/51eb6436-481c-49d2-9011-40858bd1ebb7';
app.whenReady().then(async () => {
  const win = new BrowserWindow({ width: 1440, height: 900, show: false, webPreferences: { nodeIntegration: true, contextIsolation: false } });
  await win.loadFile(path.join(__dirname, '../src/desktop/index.html'));
  await new Promise(r => setTimeout(r, 2500));
  await win.webContents.executeJavaScript(`(() => {
    const lock = document.getElementById('lock-screen');
    if (lock) lock.style.display = 'none';
    const boot = document.getElementById('boot-screen');
    if (boot) boot.style.display = 'none';
  })()`);
  await new Promise(r => setTimeout(r, 800));
  const img = await win.capturePage();
  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'dock_icon_size_fix.png'), img.toPNG());
  console.log('Saved dock_icon_size_fix.png');
  app.quit();
});
