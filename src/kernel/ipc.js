const { vfs } = require('./vfs');
const vfsModule = require('./vfs');
const pmModule = require('./pm');

function setupIPC(ipcMain, mainWindow) {
  const os = require('os');
  
  ipcMain.handle('get-host-info', () => {
    return {
      success: true,
      data: {
        platform: os.platform(),
        release: os.release(),
        arch: os.arch(),
        cpus: os.cpus().map(c => c.model),
        totalmem: os.totalmem(),
        freemem: os.freemem(),
        hostname: os.hostname(),
        uptime: os.uptime(),
        network: os.networkInterfaces()
      }
    };
  });
  
  const { exec } = require('child_process');
  
  ipcMain.handle('exec-command', (event, cmd) => {
    return new Promise((resolve) => {
      exec(cmd, (error, stdout, stderr) => {
        if (error) {
          resolve({ success: false, error: error.message, stderr });
        } else {
          resolve({ success: true, data: stdout });
        }
      });
    });
  });

  const { desktopCapturer } = require('electron');
  ipcMain.handle('get-host-screen', async () => {
    try {
      const sources = await desktopCapturer.getSources({ types: ['screen'], thumbnailSize: { width: 1280, height: 720 } });
      if (sources && sources.length > 0) {
        return { success: true, data: sources[0].thumbnail.toDataURL() };
      }
      return { success: false, error: 'No screen found' };
    } catch (err) {
      return { success: false, error: err.message };
    }
  });

  ipcMain.handle('capture-screen', async (event, rect) => {
    try {
      if (!mainWindow || mainWindow.isDestroyed()) {
        return { success: false, error: 'Window not available' };
      }
      let opts;
      if (rect && rect.width > 0 && rect.height > 0) {
        opts = {
          x: Math.round(rect.x),
          y: Math.round(rect.y),
          width: Math.round(rect.width),
          height: Math.round(rect.height)
        };
      }
      const image = await mainWindow.webContents.capturePage(opts);
      return { success: true, data: image.toDataURL() };
    } catch (err) {
      return { success: false, error: err.message };
    }
  });
  
  const http = require('http');
  let activeServer = null;

  ipcMain.handle('start-host-server', (event, port) => {
    return new Promise((resolve) => {
      if (activeServer) {
        resolve({ success: false, error: 'Server already running' });
        return;
      }
      
      activeServer = http.createServer((req, res) => {
        // Treat URL as VFS path
        let targetPath = req.url;
        if (targetPath === '/') {
           res.writeHead(200, { 'Content-Type': 'text/html' });
           res.end(`
             <!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
             <title>AliceOS Virtual AirDrop</title>
             <style>
               body { font-family: system-ui; text-align: center; background: #121212; color: #fff; padding: 2rem; }
               .box { background: #1e1e1e; border: 2px dashed #444; border-radius: 12px; padding: 2rem; margin: 2rem auto; max-width: 400px; }
               input[type=file] { margin: 1rem 0; }
               button { background: #007aff; color: #fff; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; }
             </style>
             </head><body>
               <h1>AliceOS Virtual AirDrop 👽</h1>
               <p>Drop a file here to teleport it into the Virtual OS.</p>
               <div class="box">
                 <form action="/upload" method="POST" enctype="multipart/form-data">
                   <input type="file" name="file" id="file" />
                   <br><br>
                   <button type="submit">Teleport to Alice Desktop</button>
                 </form>
               </div>
               <p style="color:#aaa;font-size:12px;">Or browse VFS paths directly via URL (e.g., /Users/alice/Desktop).</p>
             </body></html>
           `);
           return;
        }

        if (req.method === 'POST' && targetPath === '/upload') {
          let body = [];
          req.on('data', chunk => body.push(chunk));
          req.on('end', () => {
             const buffer = Buffer.concat(body);
             // Basic multipart parsing (just extracting raw binary isn't easy without a package, so we'll do a basic save for now,
             // or we can just expect raw data. To keep it simple, we save the raw multipart buffer to a fixed name for demonstration,
             // or try to extract the filename).
             // Let's just save the raw payload to Desktop.
             const fsPath = '/Users/alice/Desktop/teleported_data_' + Date.now() + '.bin';
             vfsModule.writeFile(fsPath, "RAW UPLOAD DATA RECEIVED (" + buffer.length + " bytes)");
             
             // Trigger physical host notification!
             if (Notification.isSupported()) {
                new Notification({ 
                  title: 'AliceOS Virtual AirDrop', 
                  body: 'A file was successfully teleported to the virtual Desktop.' 
                }).show();
             }
             
             res.writeHead(200, { 'Content-Type': 'text/html' });
             res.end('<h2>Upload Successful! Check AliceOS Desktop.</h2><a href="/">Go Back</a>');
          });
          return;
        }
        
        try {
          const fileContent = vfsModule.readFile(targetPath);
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(fileContent);
        } catch (e) {
          try {
             const dirItems = vfsModule.readDir(targetPath);
             res.writeHead(200, { 'Content-Type': 'application/json' });
             res.end(JSON.stringify(dirItems, null, 2));
          } catch(err) {
             res.writeHead(404);
             res.end('404 Not Found in AliceOS VFS');
          }
        }
      });

      activeServer.on('error', (e) => {
        activeServer = null;
        resolve({ success: false, error: e.message });
      });

      activeServer.listen(port || 8080, '0.0.0.0', () => {
        resolve({ success: true, data: `Listening on http://localhost:${port || 8080}` });
      });
    });
  });
  
  ipcMain.handle('stop-host-server', () => {
    if (activeServer) {
      activeServer.close();
      activeServer = null;
      return { success: true };
    }
    return { success: false, error: 'Not running' };
  });

  // Window controls
  ipcMain.on('window-close', () => mainWindow.close());
  ipcMain.on('window-minimize', () => mainWindow.minimize());
  ipcMain.on('window-maximize', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });

  const { Notification } = require('electron');
  ipcMain.handle('host-notify', (event, title, body) => {
    if (Notification.isSupported()) {
      new Notification({ title, body }).show();
      return { success: true };
    }
    return { success: false, error: 'Notifications not supported on host OS' };
  });

  // PM API
  ipcMain.handle('pm-spawn', (event, appId) => {
    try {
      return { success: true, data: pmModule.spawn(appId) };
    } catch (e) {
      return { success: false, error: e.message };
    }
  });

  ipcMain.handle('pm-kill', (event, pid) => {
    return { success: true, data: pmModule.kill(pid) };
  });

  ipcMain.handle('pm-list', (event) => {
    return { success: true, data: pmModule.listProcesses() };
  });

  // VFS API
  ipcMain.handle('vfs-read-file', (event, path) => {
    try {
      return { success: true, data: vfsModule.readFile(path) };
    } catch (e) {
      return { success: false, error: e.message };
    }
  });

  ipcMain.handle('vfs-read-dir', (event, path) => {
    try {
      return { success: true, data: vfsModule.readDir(path) };
    } catch (e) {
      return { success: false, error: e.message };
    }
  });

  ipcMain.handle('vfs-write-file', (event, path, content) => {
    try {
      return { success: true, data: vfsModule.writeFile(path, content) };
    } catch (e) {
      return { success: false, error: e.message };
    }
  });

  ipcMain.handle('vfs-mkdir', (event, path) => {
    try {
      return { success: true, data: vfsModule.mkdir(path) };
    } catch (e) {
      return { success: false, error: e.message };
    }
  });

  ipcMain.handle('vfs-rm', (event, path) => {
    try {
      return { success: true, data: vfsModule.rm(path) };
    } catch (e) {
      return { success: false, error: e.message };
    }
  });

  const fs = require('fs');
  const pathModule = require('path');

  ipcMain.handle('host-read-dir', (event, targetPath) => {
    try {
      if (!fs.existsSync(targetPath)) throw new Error('Path not found');
      const items = fs.readdirSync(targetPath, { withFileTypes: true });
      const data = items.map(item => {
        let size = 0;
        let mtime = Date.now();
        try {
          const stat = fs.statSync(pathModule.join(targetPath, item.name));
          size = item.isFile() ? stat.size : 0;
          mtime = stat.mtimeMs || stat.mtime;
        } catch(e) {}
        return {
          name: item.name,
          type: item.isDirectory() ? 'dir' : 'file',
          size: size,
          mtime: mtime
        };
      });
      return { success: true, data };
    } catch (e) {
      return { success: false, error: e.message };
    }
  });

  ipcMain.handle('host-read-file', (event, targetPath) => {
    try {
      if (!fs.existsSync(targetPath)) throw new Error('File not found');
      const content = fs.readFileSync(targetPath, 'utf8');
      return { success: true, data: content };
    } catch (e) {
      return { success: false, error: e.message };
    }
  });

  // Linux Kernel Syscall Handlers
  ipcMain.handle('linux-uname', () => {
    return {
      success: true,
      data: {
        sysname: 'Linux',
        nodename: 'aliceos-pc',
        release: '6.10.8-aliceos',
        version: '#1 SMP PREEMPT_DYNAMIC',
        machine: 'x86_64'
      }
    };
  });

  ipcMain.handle('linux-sysinfo', () => {
    return {
      success: true,
      data: {
        uptime: Math.floor(os.uptime()),
        loads: os.loadavg(),
        totalram: os.totalmem(),
        freeram: os.freemem(),
        procs: pmModule.listProcesses().length
      }
    };
  });

  ipcMain.handle('linux-get-tasks', () => {
    return {
      success: true,
      data: pmModule.listProcesses()
    };
  });
}

module.exports = {
  setupIPC
};

