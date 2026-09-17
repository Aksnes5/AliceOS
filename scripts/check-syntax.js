const fs = require('fs');
try {
  const code = fs.readFileSync('src/desktop/renderer.js', 'utf8');
  // Just test compilation by creating a Function (syntax check)
  new Function(code);
  console.log('renderer.js syntax check passed! Code size:', code.length);
} catch (e) {
  console.error('Syntax error in renderer.js:', e);
}
