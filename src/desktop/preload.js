const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('aliceOS', {
  // Window controls
  closeWindow: () => ipcRenderer.send('window-close'),
  minimizeWindow: () => ipcRenderer.send('window-minimize'),
  maximizeWindow: () => ipcRenderer.send('window-maximize'),
  
  // VFS API
  vfs: {
    readFile: (path) => ipcRenderer.invoke('vfs-read-file', path),
    writeFile: (path, content) => ipcRenderer.invoke('vfs-write-file', path, content),
    readDir: (path) => ipcRenderer.invoke('vfs-read-dir', path),
    mkdir: (path) => ipcRenderer.invoke('vfs-mkdir', path),
    rm: (path) => ipcRenderer.invoke('vfs-rm', path)
  },
  
  // PM API
  pm: {
    spawn: (appId) => ipcRenderer.invoke('pm-spawn', appId),
    kill: (pid) => ipcRenderer.invoke('pm-kill', pid),
    list: () => ipcRenderer.invoke('pm-list'),
    listProcesses: () => ipcRenderer.invoke('pm-list')
  },
  
  // Hardware Bridge
  getHostInfo: () => ipcRenderer.invoke('get-host-info'),
  execHostCommand: (cmd) => ipcRenderer.invoke('exec-command', cmd),
  getHostScreen: () => ipcRenderer.invoke('get-host-screen'),
  captureScreen: (rect) => ipcRenderer.invoke('capture-screen', rect),
  startHostServer: (port) => ipcRenderer.invoke('start-host-server', port),
  stopHostServer: () => ipcRenderer.invoke('stop-host-server'),
  hostNotify: (title, body) => ipcRenderer.invoke('host-notify', title, body),
  hostReadDir: (path) => ipcRenderer.invoke('host-read-dir', path),
  hostReadFile: (path) => ipcRenderer.invoke('host-read-file', path),
  
  // Linux Kernel Subsystem Bridge
  linux: {
    uname: () => ipcRenderer.invoke('linux-uname'),
    sysinfo: () => ipcRenderer.invoke('linux-sysinfo'),
    getTasks: () => ipcRenderer.invoke('linux-get-tasks')
  }
});
