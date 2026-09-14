const fs = require('fs');

// ── 1. Fix HTML: remove inline style from dock PNG img tags ──────────────────
let html = fs.readFileSync('src/desktop/index.html', 'utf8');
const beforeLen = html.length;

// Remove the inline style="width:100%;height:100%;object-fit:contain;" from PNG imgs
html = html.replace(
  / style="width:100%;height:100%;object-fit:contain;"/g,
  ''
);
const removed = beforeLen - html.length;
console.log('HTML: removed', removed, 'chars of inline style');
fs.writeFileSync('src/desktop/index.html', html, 'utf8');

// ── 2. Fix CSS: replace img.macos-app-icon rule ─────────────────────────────
let css = fs.readFileSync('src/desktop/styles.css', 'utf8');

// Find the img.macos-app-icon block start
const startIdx = css.indexOf('img.macos-app-icon {');
if (startIdx < 0) {
  console.error('img.macos-app-icon not found!');
  process.exit(1);
}

// Find closing brace
let depth = 0, endIdx = startIdx;
for (let i = startIdx; i < css.length; i++) {
  if (css[i] === '{') depth++;
  else if (css[i] === '}') { depth--; if (depth === 0) { endIdx = i; break; } }
}

const oldBlock = css.slice(startIdx, endIdx + 1);
const newBlock = `img.macos-app-icon {
  width: var(--dock-icon-size) !important;
  height: var(--dock-icon-size) !important;
  min-width: var(--dock-icon-size);
  min-height: var(--dock-icon-size);
  max-width: none !important;
  max-height: none !important;
  object-fit: fill;
  image-rendering: -webkit-optimize-contrast;
  filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.28));
  border-radius: 22.5%;
  display: block;
  flex-shrink: 0;
}`;

css = css.slice(0, startIdx) + newBlock + css.slice(endIdx + 1);
console.log('CSS: replaced img.macos-app-icon rule');

// Also add dock-icon img override to fix any remaining sizing
const dockIconImgRule = `
/* Force PNG dock icons to fill dock-icon container exactly like SVGs */
.dock-icon > img {
  width: var(--dock-icon-size) !important;
  height: var(--dock-icon-size) !important;
  max-width: none !important;
  max-height: none !important;
  object-fit: fill;
  border-radius: 22.5%;
  display: block;
  filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.28));
  pointer-events: none;
  user-select: none;
  flex-shrink: 0;
}
`;

css += dockIconImgRule;
fs.writeFileSync('src/desktop/styles.css', css, 'utf8');
console.log('CSS: added .dock-icon > img override');
console.log('Done!');
