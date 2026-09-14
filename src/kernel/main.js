const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { initVFS } = require('./vfs');
const { setupIPC } = require('./ipc');

// Enable native macOS overlay scrollbars in Chromium engine
app.commandLine.appendSwitch('enable-features', 'OverlayScrollbar');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    title: 'AliceOS',
    frame: false, // Borderless window for OS feel
    webPreferences: {
      preload: path.join(__dirname, '../desktop/preload.js'),
      contextIsolated: true,
      nodeIntegration: false,
      webviewTag: true
    }
  });

  mainWindow.loadFile(path.join(__dirname, '../desktop/index.html'));
  
  // Optional: Open DevTools for debugging
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  // Initialize the Linux Virtual File System
  initVFS(path.join(app.getPath('userData'), 'aliceos_linux_vfs.db'));
  
  // Setup IPC handlers
  setupIPC(ipcMain, mainWindow);

  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
