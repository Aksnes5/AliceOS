const fs = require('fs');
const path = require('path');
const os = require('os');
const pm = require('./pm');

let vfsPath = '';
const bootTime = Date.now() - 3600000;

// Standard Linux Initial File System Structure
let fileSystem = {
  id: 1,
  type: 'dir',
  name: 'root',
  children: [
    {
      id: 2,
      type: 'dir',
      name: 'bin',
      children: [
        { id: 201, type: 'file', name: 'sh', content: '#!/bin/sh\nexec /bin/bash "$@"\n' },
        { id: 202, type: 'file', name: 'bash', content: 'ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV)\n' },
        { id: 203, type: 'file', name: 'ls', content: 'ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV)\n' },
        { id: 204, type: 'file', name: 'cat', content: 'ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV)\n' },
        { id: 205, type: 'file', name: 'uname', content: 'ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV)\n' }
      ]
    },
    {
      id: 3,
      type: 'dir',
      name: 'sbin',
      children: [
        { id: 301, type: 'file', name: 'init', content: 'systemd init symlink\n' }
      ]
    },
    {
      id: 4,
      type: 'dir',
      name: 'etc',
      children: [
        {
          id: 401,
          type: 'file',
          name: 'os-release',
          content: 'NAME="AliceOS Linux"\nVERSION="24.04 LTS (Noble Numbat)"\nID=aliceos\nID_LIKE="ubuntu debian"\nPRETTY_NAME="AliceOS Linux 24.04 LTS (x86_64)"\nVERSION_ID="24.04"\nHOME_URL="https://aliceos.org"\nSUPPORT_URL="https://aliceos.org/support"\n'
        },
        {
          id: 402,
          type: 'file',
          name: 'hostname',
          content: 'aliceos-pc\n'
        },
        {
          id: 403,
          type: 'file',
          name: 'issue',
          content: 'AliceOS Linux 24.04 LTS \\n \\l\n'
        },
        {
          id: 404,
          type: 'file',
          name: 'passwd',
          content: 'root:x:0:0:root:/root:/bin/bash\nalice:x:1000:1000:Alice User,,,:/home/alice:/bin/bash\n'
        },
        {
          id: 405,
          type: 'file',
          name: 'fstab',
          content: 'UUID=0000-0000 / ext4 defaults 0 1\nproc /proc proc defaults 0 0\nsysfs /sys sysfs defaults 0 0\n'
        }
      ]
    },
    {
      id: 5,
      type: 'dir',
      name: 'home',
      children: [
        {
          id: 6,
          type: 'dir',
          name: 'alice',
          children: [
            {
              id: 7,
              type: 'file',
              name: 'welcome.txt',
              content: '欢迎使用 AliceOS (Linux Kernel Edition)！\nWelcome to AliceOS powered by Linux Kernel 6.10!\n\n这是一个由 Linux 虚拟内核与现代桌面环境融合驱动的操作系统。'
            },
            {
              id: 8,
              type: 'file',
              name: 'settings.json',
              content: JSON.stringify({
                wallpaper: "dynamic-solar",
                theme: 'light',
                isometric: 'off',
                island: 'on',
                stageManager: 'off',
                lang: 'zh'
              })
            },
            { id: 9, type: 'dir', name: 'Desktop', children: [] },
            { id: 10, type: 'dir', name: 'Documents', children: [] },
            { id: 11, type: 'dir', name: 'Downloads', children: [] },
            { id: 12, type: 'dir', name: 'Pictures', children: [] }
          ]
        }
      ]
    },
    {
      id: 13,
      type: 'dir',
      name: 'proc',
      children: []
    },
    {
      id: 14,
      type: 'dir',
      name: 'sys',
      children: [
        { id: 1401, type: 'dir', name: 'class', children: [] },
        { id: 1402, type: 'dir', name: 'kernel', children: [] }
      ]
    },
    {
      id: 15,
      type: 'dir',
      name: 'dev',
      children: [
        { id: 1501, type: 'file', name: 'null', content: '' },
        { id: 1502, type: 'file', name: 'zero', content: '' },
        { id: 1503, type: 'file', name: 'urandom', content: '' }
      ]
    },
    {
      id: 16,
      type: 'dir',
      name: 'var',
      children: [
        {
          id: 1601,
          type: 'dir',
          name: 'log',
          children: [
            {
              id: 1602,
              type: 'file',
              name: 'syslog',
              content: 'kernel: [    0.000000] Linux version 6.10.8-aliceos (root@build-server) (gcc 13.2.0) #1 SMP PREEMPT_DYNAMIC\nkernel: [    0.000000] Command line: BOOT_IMAGE=/vmlinuz-6.10.8-aliceos root=UUID=aliceos-root ro quiet splash\nsystemd[1]: Started AliceOS Linux Core Subsystem.\nsystemd[1]: Reached target Graphical Interface.\n'
            }
          ]
        }
      ]
    },
    {
      id: 17,
      type: 'dir',
      name: 'usr',
      children: [
        { id: 1701, type: 'dir', name: 'bin', children: [] },
        { id: 1702, type: 'dir', name: 'lib', children: [] },
        { id: 1703, type: 'dir', name: 'share', children: [] }
      ]
    },
    {
      id: 18,
      type: 'dir',
      name: 'tmp',
      children: []
    }
  ]
};

let nextId = 2000;

/**
 * Linux /proc virtual filesystem generator
 */
function getProcContent(fileName) {
  const uptimeSec = Math.floor((Date.now() - bootTime) / 1000);
  const cpus = os.cpus();
  const cpuModel = (cpus && cpus.length > 0) ? cpus[0].model : 'AMD Ryzen 9 / Intel Core i9 Processor';
  const totalMemKb = Math.floor(os.totalmem() / 1024);
  const freeMemKb = Math.floor(os.freemem() / 1024);
  const availableMemKb = Math.floor(freeMemKb * 1.25);

  switch (fileName) {
    case 'version':
      return 'Linux version 6.10.8-aliceos (root@build-server) (gcc 13.2.0) #1 SMP PREEMPT_DYNAMIC 2026 x86_64 GNU/Linux\n';

    case 'uptime':
      return `${uptimeSec}.25 ${Math.floor(uptimeSec * 0.92)}.10\n`;

    case 'loadavg':
      return '0.35 0.42 0.38 2/520 1842\n';

    case 'cpuinfo': {
      let info = '';
      const count = Math.max(cpus.length, 4);
      for (let i = 0; i < count; i++) {
        info += `processor\t: ${i}\nvendor_id\t: GenuineIntel\ncpu family\t: 6\nmodel\t\t: 158\nmodel name\t: ${cpuModel}\nstepping\t: 10\nmicrocode\t: 0xf0\ncpu MHz\t\t: 3600.000\ncache size\t: 16384 KB\nphysical id\t: 0\nsiblings\t: ${count}\ncore id\t\t: ${i}\ncpu cores\t: ${count}\nflags\t\t: fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx pdpe1gb rdtscp lm constant_tsc art arch_perfmon pebs bts rep_good nopl xtopology nonstop_tsc cpuid aperfmperf pni pclmulqdq dtes64 monitor ds_cpl vmx smx est tm2 ssse3 sdbg fma cx16 xtpr pdcm pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand lahf_lm abm 3dnowprefetch cpuid_fault epb invpcid_single ssbd ibrs ibpb stibp ibrs_enhanced tpr_shadow vnmi flexpriority ept vpid ept_ad fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt intel_pt xsaveopt xsavec xgetbv1 xsaves dtherm ida arat pln pts hwp hwp_notify hwp_act_window hwp_epp md_clear flush_l1d arch_capabilities\nbogomips\t: 7200.00\nclflush size\t: 64\ncache_alignment\t: 64\naddress sizes\t: 39 bits physical, 48 bits virtual\n\n`;
      }
      return info;
    }

    case 'meminfo':
      return `MemTotal:       ${totalMemKb} kB\nMemFree:        ${freeMemKb} kB\nMemAvailable:   ${availableMemKb} kB\nBuffers:          358240 kB\nCached:          4892100 kB\nSwapCached:            0 kB\nActive:          4215890 kB\nInactive:        2450120 kB\nSwapTotal:       8388608 kB\nSwapFree:        8388608 kB\nDirty:                48 kB\nWriteback:             0 kB\nAnonPages:       1425890 kB\nMapped:           652100 kB\nShmem:            289400 kB\nKReclaimable:     412000 kB\nSlab:             685000 kB\nSReclaimable:     412000 kB\nSUnreclaim:       273000 kB\nKernelStack:       18400 kB\nPageTables:        45200 kB\n`;

    case 'stat':
      return `cpu  124890 2450 68240 1845200 4500 0 1200 0 0 0\nintr 14589201 12 0 0 0 0 0 0\nctxt 28459102\nbtime ${Math.floor(bootTime / 1000)}\nprocesses 4589\nprocs_running 1\nprocs_blocked 0\n`;

    default:
      return null;
  }
}

/**
 * Path Normalization & Seamless Transparent Aliasing
 * Maps /Users/alice -> /home/alice so existing UI apps have zero regression.
 */
function normalizePath(filePath) {
  if (!filePath || filePath === '/') return '/';
  
  // Clean double slashes
  let p = filePath.replace(/\/+/g, '/');
  if (p.endsWith('/') && p.length > 1) {
    p = p.slice(0, -1);
  }

  // Transparent alias: /Users/alice -> /home/alice
  if (p === '/Users' || p === '/Users/alice') {
    return '/home/alice';
  }
  if (p.startsWith('/Users/alice/')) {
    return '/home/alice' + p.substring('/Users/alice'.length);
  }
  if (p === '/home/alice') {
    return '/home/alice';
  }

  return p;
}

function initVFS(dbPath) {
  vfsPath = dbPath.replace('.db', '.json');
  if (fs.existsSync(vfsPath)) {
    try {
      fileSystem = JSON.parse(fs.readFileSync(vfsPath, 'utf8'));
      nextId = 5000;
      
      // Ensure /home/alice exists
      let homeNode = fileSystem.children.find(c => c.name === 'home');
      if (!homeNode) {
        homeNode = { id: nextId++, type: 'dir', name: 'home', children: [] };
        fileSystem.children.push(homeNode);
      }
      let aliceNode = homeNode.children.find(c => c.name === 'alice');
      if (!aliceNode) {
        aliceNode = { id: nextId++, type: 'dir', name: 'alice', children: [] };
        homeNode.children.push(aliceNode);
      }

      // Ensure /proc directory node exists in root
      if (!fileSystem.children.find(c => c.name === 'proc')) {
        fileSystem.children.push({ id: nextId++, type: 'dir', name: 'proc', children: [] });
      }

      // Ensure settings.json defaults to zh
      const settingsNode = resolvePath('/home/alice/settings.json');
      if (settingsNode && settingsNode.content) {
        try {
          const s = JSON.parse(settingsNode.content);
          if (s && !s._userChangedLang && s.lang === 'en') {
            s.lang = 'zh';
            settingsNode.content = JSON.stringify(s);
            saveVFS();
          }
          if (s && !s._userExplicitTheme && (!s.theme || s.theme === 'dark')) {
            s.theme = 'light';
            settingsNode.content = JSON.stringify(s);
            saveVFS();
          }
        } catch (e) {}
      }
    } catch (e) {
      console.error("[Linux Kernel VFS] Failed to load JSON VFS", e);
    }
  } else {
    saveVFS();
  }
}

function saveVFS() {
  fs.writeFileSync(vfsPath, JSON.stringify(fileSystem, null, 2));
}

function resolvePath(filePath) {
  const normPath = normalizePath(filePath);
  if (normPath === '/') return fileSystem;

  const parts = normPath.split('/').filter(p => p.length > 0);
  let current = fileSystem;

  for (let i = 0; i < parts.length; i++) {
    if (current.type !== 'dir') return null;
    const partName = parts[i];
    
    // Check inside current dir
    let next = current.children.find(c => c.name === partName);

    // If looking inside /proc, dynamically resolve virtual proc nodes
    if (!next && current.name === 'proc') {
      const procContent = getProcContent(partName);
      if (procContent !== null) {
        return {
          id: 9999,
          type: 'file',
          name: partName,
          content: procContent,
          isProc: true
        };
      }
    }

    if (!next) return null;
    current = next;
  }
  return current;
}

function readFile(filePath) {
  const normPath = normalizePath(filePath);
  
  // Handle direct /proc reads
  if (normPath.startsWith('/proc/')) {
    const procFile = normPath.substring('/proc/'.length);
    const content = getProcContent(procFile);
    if (content !== null) return content;
  }

  const node = resolvePath(normPath);
  if (!node) throw new Error('File not found');
  if (node.type !== 'file') throw new Error('Not a file');
  
  if (node.isProc) {
    const dynamicContent = getProcContent(node.name);
    return dynamicContent !== null ? dynamicContent : node.content;
  }

  return node.content;
}

function readDir(filePath) {
  const normPath = normalizePath(filePath);
  
  // Handle /proc directory listing dynamically
  if (normPath === '/proc') {
    const standardProcFiles = [
      { name: 'version', type: 'file' },
      { name: 'cpuinfo', type: 'file' },
      { name: 'meminfo', type: 'file' },
      { name: 'uptime', type: 'file' },
      { name: 'loadavg', type: 'file' },
      { name: 'stat', type: 'file' }
    ];
    // Add PID dirs from active processes
    const activeTasks = pm.listProcesses();
    const pidDirs = activeTasks.map(t => ({ name: String(t.pid), type: 'dir' }));
    return [...pidDirs, ...standardProcFiles];
  }

  const node = resolvePath(normPath);
  if (!node) throw new Error('Directory not found');
  if (node.type !== 'dir') throw new Error('Not a directory');

  return node.children.map(c => ({
    name: c.name,
    type: c.type
  }));
}

function writeFile(filePath, content) {
  const normPath = normalizePath(filePath);
  if (normPath.startsWith('/proc/')) {
    throw new Error('Permission denied: /proc is a read-only virtual filesystem');
  }

  const parts = normPath.split('/').filter(p => p.length > 0);
  const fileName = parts.pop();
  const dirPath = '/' + parts.join('/');

  const dirNode = resolvePath(dirPath);
  if (!dirNode || dirNode.type !== 'dir') throw new Error('Parent directory not found');

  const existingNode = dirNode.children.find(c => c.name === fileName);

  if (existingNode) {
    if (existingNode.type !== 'file') throw new Error('Cannot overwrite a directory with a file');
    existingNode.content = content;
  } else {
    dirNode.children.push({
      id: nextId++,
      type: 'file',
      name: fileName,
      content: content
    });
  }
  saveVFS();
  return true;
}

function mkdir(filePath) {
  const normPath = normalizePath(filePath);
  if (normPath.startsWith('/proc/')) {
    throw new Error('Permission denied: Cannot create directories in /proc');
  }

  const parts = normPath.split('/').filter(p => p.length > 0);
  const dirName = parts.pop();
  const parentPath = '/' + parts.join('/');

  const parentNode = resolvePath(parentPath);
  if (!parentNode || parentNode.type !== 'dir') throw new Error('Parent directory not found');

  if (parentNode.children.find(c => c.name === dirName)) {
    throw new Error('File or directory already exists');
  }

  parentNode.children.push({
    id: nextId++,
    type: 'dir',
    name: dirName,
    children: []
  });
  saveVFS();
  return true;
}

function rm(filePath) {
  const normPath = normalizePath(filePath);
  if (normPath === '/') throw new Error('Cannot remove root directory');
  if (normPath.startsWith('/proc/')) {
    throw new Error('Permission denied: /proc is managed by Linux kernel');
  }

  const parts = normPath.split('/').filter(p => p.length > 0);
  const name = parts.pop();
  const parentPath = '/' + parts.join('/');

  const parentNode = resolvePath(parentPath);
  if (!parentNode || parentNode.type !== 'dir') throw new Error('Parent directory not found');

  const index = parentNode.children.findIndex(c => c.name === name);
  if (index === -1) throw new Error('File or directory not found');

  const node = parentNode.children[index];
  if (node.type === 'dir' && node.children.length > 0) {
    throw new Error('Directory is not empty');
  }

  parentNode.children.splice(index, 1);
  saveVFS();
  return true;
}

module.exports = {
  initVFS,
  readFile,
  readDir,
  writeFile,
  mkdir,
  rm,
  resolvePath,
  normalizePath
};
