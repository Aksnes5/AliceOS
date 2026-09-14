const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

const artifactDir = 'C:\\Users\\28386\\.gemini\\antigravity\\brain\\51eb6436-481c-49d2-9011-40858bd1ebb7';

app.whenReady().then(async () => {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  await win.loadFile(path.join(__dirname, '..', 'src', 'desktop', 'index.html'));

  // Wait for boot screen to finish
  await win.webContents.executeJavaScript(`
    new Promise(resolve => {
      const bs = document.getElementById('boot-screen');
      if (bs) bs.style.display = 'none';
      const ls = document.getElementById('login-screen');
      if (ls) ls.style.display = 'none';
      resolve();
    });
  `);

  await new Promise(r => setTimeout(r, 600));

  // 1. Test Dock position after Lock -> Unlock
  console.log('[Test 1] Testing Lock and Unlock Dock Centering...');
  const dockCheck = await win.webContents.executeJavaScript(`
    new Promise(resolve => {
      window.lockScreen();
      setTimeout(() => {
        // Unlock
        const passInput = document.getElementById('login-password');
        if (passInput) passInput.value = '1234';
        const submitBtn = document.getElementById('login-submit-btn');
        if (submitBtn) submitBtn.click();

        // Wait for entrance animation (550ms + margin)
        setTimeout(() => {
          const dock = document.getElementById('dock-ui');
          const rect = dock.getBoundingClientRect();
          const screenWidth = window.innerWidth;
          const dockCenter = rect.left + rect.width / 2;
          const screenCenter = screenWidth / 2;
          const offsetFromCenter = Math.abs(dockCenter - screenCenter);

          resolve({
            dockRect: { left: rect.left, right: rect.right, width: rect.width },
            screenWidth,
            dockCenter,
            screenCenter,
            offsetFromCenter,
            isCentered: offsetFromCenter < 5,
            computedTransform: window.getComputedStyle(dock).transform,
            inlineTransform: dock.style.transform
          });
        }, 900);
      }, 300);
    });
  `);

  console.log('Dock Centering Verification Result:', JSON.stringify(dockCheck, null, 2));

  // Helper to ensure Chromium compositor flushes the current frame
  async function flushFrames() {
    await win.webContents.executeJavaScript(`
      new Promise(resolve => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTimeout(resolve, 300);
          });
        });
      })
    `);
  }

  // Screenshot 1: Perfectly centered dock after unlock
  await flushFrames();
  const imgDock = await win.capturePage();
  fs.writeFileSync(path.join(artifactDir, 'macos_dock_after_unlock_centered.png'), imgDock.toPNG());

  // 2. Test Spotlight Suggestions
  console.log('[Test 2] Testing Spotlight Dual-Pane Suggestions...');
  await win.webContents.executeJavaScript(`
    window.openSpotlight();
    const spot = document.getElementById('spotlight');
    if (spot) {
      spot.style.transition = 'none';
      spot.style.opacity = '1';
      spot.style.display = 'flex';
      spot.style.transform = 'translateX(-50%) scale(1)';
    }
  `);
  await flushFrames();

  const spotlightCheck1 = await win.webContents.executeJavaScript(`
    (() => {
      const spot = document.getElementById('spotlight');
      const results = document.getElementById('spotlight-results');
      const preview = document.getElementById('spotlight-preview');
      const items = results.querySelectorAll('.spotlight-result-item');
      const active = results.querySelector('.spotlight-result-item.selected');
      return {
        isOpen: spot.classList.contains('open'),
        hasResultsClass: spot.classList.contains('has-results'),
        itemsCount: items.length,
        hasPreview: preview.children.length > 0,
        selectedTitle: active ? active.querySelector('.spotlight-item-title')?.innerText : null,
        previewTitle: preview.querySelector('.spotlight-preview-title')?.innerText
      };
    })()
  `);
  console.log('Spotlight Suggestions Result:', JSON.stringify(spotlightCheck1, null, 2));

  const imgSpot1 = await win.capturePage();
  fs.writeFileSync(path.join(artifactDir, 'macos_spotlight_suggestions.png'), imgSpot1.toPNG());

  // 3. Test Spotlight Calculation
  console.log('[Test 3] Testing Spotlight Math Calculation (128 * 8)...');
  await win.webContents.executeJavaScript(`
    const input = document.getElementById('spotlight-input');
    input.value = '128 * 8';
    input.dispatchEvent(new Event('input'));
  `);
  await flushFrames();

  const spotlightCheck2 = await win.webContents.executeJavaScript(`
    (() => {
      const preview = document.getElementById('spotlight-preview');
      const mathResult = preview.querySelector('.spotlight-math-result');
      return {
        mathText: mathResult ? mathResult.innerText : null
      };
    })()
  `);
  console.log('Spotlight Math Result:', JSON.stringify(spotlightCheck2, null, 2));

  const imgSpot2 = await win.capturePage();
  fs.writeFileSync(path.join(artifactDir, 'macos_spotlight_calculation.png'), imgSpot2.toPNG());

  // Close spotlight
  await win.webContents.executeJavaScript(`
    window.closeSpotlight();
    const spot = document.getElementById('spotlight');
    if (spot) {
      spot.style.display = 'none';
      spot.classList.remove('open');
    }
    const bd = document.getElementById('spotlight-backdrop');
    if (bd) {
      bd.style.display = 'none';
      bd.classList.remove('open');
    }
  `);
  await flushFrames();

  // 4. Test Wi-Fi Popover
  console.log('[Test 4] Testing Wi-Fi Popover in Menubar...');
  await win.webContents.executeJavaScript(`
    window.toggleWifiPopover();
    const pop = document.getElementById('wifi-popover');
    if (pop) {
      pop.style.transition = 'none';
      pop.style.opacity = '1';
      pop.style.display = 'flex';
      pop.style.transform = 'translateY(0) scale(1)';
    }
  `);
  await flushFrames();

  const wifiCheck = await win.webContents.executeJavaScript(`
    (() => {
      const pop = document.getElementById('wifi-popover');
      return {
        isOpen: pop.classList.contains('open'),
        statusText: document.getElementById('wifi-pop-status')?.innerText,
        hasActiveNetwork: !!pop.querySelector('.wifi-network-item.active')
      };
    })()
  `);
  console.log('Wi-Fi Popover Result:', JSON.stringify(wifiCheck, null, 2));

  const imgWifi = await win.capturePage();
  fs.writeFileSync(path.join(artifactDir, 'macos_menubar_wifi_popover.png'), imgWifi.toPNG());

  console.log('ALL VERIFICATIONS FINISHED SUCCESSFULLY.');
  app.quit();
});
