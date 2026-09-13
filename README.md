# AliceOS (Linux Kernel Edition)

基于 Web + Electron 的桌面仿真操作系统环境，底层换装 **Linux 6.10 虚拟内核**，完全支持在 Windows 环境下直接运行与打包为 Windows `.exe` 可执行程序。

## 内核特性 (Linux Kernel Subsystem)
- **进程管理 (`src/kernel/pm.js`)**：Linux `task_struct` 进程数据结构，内置 PID 1 `systemd` 与 PID 2 `kthreadd`，支持 Linux `ps aux` 状态监控。
- **虚拟文件系统 (`src/kernel/vfs.js`)**：内置标准 Linux 目录层次，包含动态生成的 **`/proc`** 伪文件系统（`/proc/version`、`/proc/cpuinfo`、`/proc/meminfo`、`/proc/uptime`、`/proc/loadavg` 等），并对 `/home/alice` 与 `/Users/alice` 做透明双向映射。
- **系统调用与 IPC (`src/kernel/ipc.js`)**：提供 `uname`（Linux 6.10.8-generic）、`sysinfo` 等 Linux 内核调用响应。

## 快速上手
- **开发与启动**：`npm start`
- **打包为 Windows .exe**：`npm run dist`（生成 `nsis` 安装包与 `portable` 便携式 exe）
