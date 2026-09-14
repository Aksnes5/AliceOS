const fs = require('fs');

let html = fs.readFileSync('src/desktop/index.html', 'utf8');

const docks = [
  ['finder',   'assets/icons/finder.png',   'Finder'],
  ['browser',  'assets/icons/safari.png',   'Safari'],
  ['music',    'assets/icons/music.png',    'Music'],
  ['paint',    'assets/icons/photos.png',   'Photos'],
  ['store',    'assets/icons/appstore.png', 'App Store'],
  ['settings', 'assets/icons/settings.png', 'Settings'],
  ['notes',    'assets/icons/notes.png',    'Notes'],
];

for (const [app, img, alt] of docks) {
  const before = html.length;
  const re = new RegExp('(<div class="dock-icon"[^>]*data-app="' + app + '"[^>]*>\\s*)(<svg[\\s\\S]*?<\\/svg>)', 'g');
  html = html.replace(re, function(m, prefix) {
    return prefix + '<img src="' + img + '" alt="' + alt + '" class="macos-app-icon" style="width:100%;height:100%;object-fit:contain;">';
  });
  console.log((html.length !== before ? 'OK' : 'WARN') + ': ' + app);
}

fs.writeFileSync('src/desktop/index.html', html, 'utf8');
console.log('Saved. PNG refs: ' + (html.match(/assets\/icons\//g)||[]).length);
