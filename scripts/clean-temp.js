const fs = require("fs");
const path = require("path");
const os = require("os");

function cleanTemp() {
  const tempDir = os.tmpdir();
  if (!tempDir || !fs.existsSync(tempDir)) return;
  try {
    const entries = fs.readdirSync(tempDir);
    let freed = 0;
    entries.forEach(entry => {
      const isMatch = (
        entry.startsWith("electron-builder-app") ||
        entry.startsWith("electron-download-") ||
        entry.startsWith("electron-builder-") ||
        entry.startsWith("app-builder-") ||
        entry.startsWith("_MEI") ||
        entry.startsWith("AliceOS") ||
        /^~?ns[a-zA-Z0-9_.]+\.tmp$/i.test(entry) ||
        /^3J[a-zA-Z0-9]+$/i.test(entry) ||
        /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}\.tmp/i.test(entry) ||
        /^\.tmp[a-zA-Z0-9]+$/i.test(entry)
      );
      if (isMatch) {
        try {
          fs.rmSync(path.join(tempDir, entry), { recursive: true, force: true });
          freed++;
        } catch(e) {}
      }
    });
    if (freed > 0) console.log("[clean-temp] Cleaned " + freed + " packaging temp directories and files.");
    else console.log("[clean-temp] C: drive Temp is clean, no leftover packaging files.");
  } catch(e) {
    console.error("[clean-temp] Error during cleanup:", e);
  }
}

cleanTemp();
