const fs = require('fs');
const path = require('path');

const srcDir = 'D:/aliceos_linux/scratch';
const destDir = 'C:/Users/28386/.gemini/antigravity/brain/f883524f-a94f-44b9-ab70-0751e4e00fc6/scratch';
fs.mkdirSync(destDir, { recursive: true });

const files = [
  'desktop-getinfo.png',
  'desktop-file-context-menu.png',
  'desktop-inactive-window.png',
  'desktop-after-empty.png'
];

files.forEach(f => {
  const s = path.join(srcDir, f);
  const d = path.join(destDir, f);
  if (fs.existsSync(s)) {
    fs.copyFileSync(s, d);
    console.log('Copied to artifact dir:', f);
  }
});
