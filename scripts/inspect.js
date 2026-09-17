const fs = require('fs');
const js = fs.readFileSync('src/desktop/renderer.js', 'utf8');
const lines = js.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('screenshot') || line.includes('captureScreen') || line.includes('capturePage') || line.includes('Digit3') || line.includes('Digit4') || line.includes('Digit5')) {
    console.log(`Line ${idx+1}: ${line.trim()}`);
  }
});
