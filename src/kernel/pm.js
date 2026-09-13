/**
 * Linux Kernel Process Management Subsystem (task_struct & scheduler)
 * Simulates Linux Kernel 6.10 process hierarchy, state transitions, and IPC.
 */

// Linux task states
const TASK_RUNNING = 'R';
const TASK_INTERRUPTIBLE = 'S';
const TASK_STOPPED = 'T';
const TASK_ZOMBIE = 'Z';

let nextPid = 1000;
const taskTable = new Map();

// Initialize Linux kernel core daemons
function initKernelTasks() {
  const bootTime = Date.now() - 3600000; // booted 1h ago
  
  const kernelTasks = [
    {
      pid: 1,
      ppid: 0,
      comm: 'systemd',
      appId: 'systemd',
      cmdline: '/sbin/init splash',
      state: TASK_INTERRUPTIBLE,
      status: 'sleeping',
      uid: 0,
      gid: 0,
      priority: 20,
      nice: 0,
      vsz: 168440,
      rss: 12450,
      tty: '?',
      startTime: bootTime
    },
    {
      pid: 2,
      ppid: 0,
      comm: 'kthreadd',
      appId: 'kthreadd',
      cmdline: '[kthreadd]',
      state: TASK_INTERRUPTIBLE,
      status: 'sleeping',
      uid: 0,
      gid: 0,
      priority: 20,
      nice: 0,
      vsz: 0,
      rss: 0,
      tty: '?',
      startTime: bootTime
    },
    {
      pid: 3,
      ppid: 2,
      comm: 'pool_workqueue',
      appId: 'pool_workqueue',
      cmdline: '[pool_workqueue]',
      state: TASK_INTERRUPTIBLE,
      status: 'sleeping',
      uid: 0,
      gid: 0,
      priority: 20,
      nice: 0,
      vsz: 0,
      rss: 0,
      tty: '?',
      startTime: bootTime
    },
    {
      pid: 4,
      ppid: 2,
      comm: 'ksoftirqd/0',
      appId: 'ksoftirqd/0',
      cmdline: '[ksoftirqd/0]',
      state: TASK_INTERRUPTIBLE,
      status: 'sleeping',
      uid: 0,
      gid: 0,
      priority: 20,
      nice: 0,
      vsz: 0,
      rss: 0,
      tty: '?',
      startTime: bootTime
    },
    {
      pid: 120,
      ppid: 1,
      comm: 'systemd-journald',
      appId: 'systemd-journald',
      cmdline: '/lib/systemd/systemd-journald',
      state: TASK_INTERRUPTIBLE,
      status: 'sleeping',
      uid: 0,
      gid: 0,
      priority: 20,
      nice: 0,
      vsz: 98400,
      rss: 8400,
      tty: '?',
      startTime: bootTime + 1000
    },
    {
      pid: 240,
      ppid: 1,
      comm: 'systemd-udevd',
      appId: 'systemd-udevd',
      cmdline: '/lib/systemd/systemd-udevd',
      state: TASK_INTERRUPTIBLE,
      status: 'sleeping',
      uid: 0,
      gid: 0,
      priority: 20,
      nice: 0,
      vsz: 84200,
      rss: 6200,
      tty: '?',
      startTime: bootTime + 2000
    },
    {
      pid: 450,
      ppid: 1,
      comm: 'dbus-daemon',
      appId: 'dbus-daemon',
      cmdline: '/usr/bin/dbus-daemon --system --address=systemd: --nofork --nopidfile --systemd-activation',
      state: TASK_INTERRUPTIBLE,
      status: 'sleeping',
      uid: 106,
      gid: 113,
      priority: 20,
      nice: 0,
      vsz: 54100,
      rss: 4300,
      tty: '?',
      startTime: bootTime + 3000
    },
    {
      pid: 512,
      ppid: 1,
      comm: 'pipewire',
      appId: 'pipewire',
      cmdline: '/usr/bin/pipewire',
      state: TASK_INTERRUPTIBLE,
      status: 'sleeping',
      uid: 1000,
      gid: 1000,
      priority: 20,
      nice: 0,
      vsz: 142000,
      rss: 14500,
      tty: '?',
      startTime: bootTime + 4000
    }
  ];

  for (const task of kernelTasks) {
    taskTable.set(task.pid, task);
  }
}

initKernelTasks();

/**
 * Linux sys_fork & sys_execve simulation
 * Creates a new userland task under PID 1 (systemd)
 */
function spawn(appId) {
  const pid = nextPid++;
  
  const process = {
    pid,
    ppid: 1, // Child of systemd
    appId,
    comm: appId,
    cmdline: `/usr/bin/${appId}`,
    state: TASK_RUNNING,
    status: 'running',
    uid: 1000, // alice user
    gid: 1000,
    priority: 20,
    nice: 0,
    vsz: Math.floor(180000 + Math.random() * 80000),
    rss: Math.floor(25000 + Math.random() * 30000),
    tty: 'pts/0',
    startTime: Date.now()
  };
  
  taskTable.set(pid, process);
  console.log(`[Linux Kernel] sys_clone: created task_struct pid=${pid}, comm=${appId}`);
  return process;
}

/**
 * Linux sys_kill simulation
 */
function kill(pid) {
  const targetPid = Number(pid);
  if (targetPid <= 2) {
    console.warn(`[Linux Kernel] Denied sys_kill on critical kernel task PID ${targetPid}`);
    return false;
  }
  
  if (taskTable.has(targetPid)) {
    taskTable.delete(targetPid);
    console.log(`[Linux Kernel] sys_kill: SIGTERM terminated PID ${targetPid}`);
    return true;
  }
  return false;
}

/**
 * Return all active processes (compatible with existing renderer expectations)
 */
function listProcesses() {
  return Array.from(taskTable.values());
}

/**
 * Get single task struct by PID
 */
function getTask(pid) {
  return taskTable.get(Number(pid)) || null;
}

module.exports = {
  spawn,
  kill,
  listProcesses,
  getTask,
  TASK_RUNNING,
  TASK_INTERRUPTIBLE,
  TASK_STOPPED,
  TASK_ZOMBIE
};
