const { app, BrowserWindow } = require('electron');
const path = require('path');

const fs = require('fs');

app.whenReady().then(async () => {
  const win = new BrowserWindow({ width: 1440, height: 900, show: false, webPreferences: { nodeIntegration: true, contextIsolation: false } });
  await win.loadFile(path.join('D:\\aliceos_linux', 'src', 'desktop', 'index.html'));
  
  await win.webContents.executeJavaScript(`
    const bs = document.getElementById('boot-screen');
    if (bs) bs.style.display = 'none';
    const ls = document.getElementById('login-screen');
    if (ls) ls.style.display = 'none';
    window.openSpotlight();
  `);
  
  await new Promise(r => setTimeout(r, 600));
  
  const box = await win.webContents.executeJavaScript(`
    (() => {
      const spot = document.getElementById('spotlight');
      const r = spot.getBoundingClientRect();
      return { 
        top: r.top, 
        left: r.left, 
        width: r.width, 
        height: r.height, 
        opacity: window.getComputedStyle(spot).opacity, 
        display: window.getComputedStyle(spot).display, 
        zIndex: window.getComputedStyle(spot).zIndex, 
        classes: spot.className,
        resultsHTML: document.getElementById('spotlight-results').innerHTML.slice(0, 100),
        previewHTML: document.getElementById('spotlight-preview').innerHTML.slice(0, 100)
      };
    })()
  `);
  console.log('Spotlight Info:', JSON.stringify(box, null, 2));
  
  const img = await win.capturePage();
  fs.writeFileSync('C:\\Users\\28386\\.gemini\\antigravity\\brain\\51eb6436-481c-49d2-9011-40858bd1ebb7\\test_spotlight_capture.png', img.toPNG());
  app.quit();
});
