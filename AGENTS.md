# AliceOS Development Guidelines & Standing Rules

## 1. Design & Interaction Paradigm (macOS / iOS Aesthetic & Physics)
- 所有界面完善、动效设计与功能实现，必须严格围绕 **macOS / iOS** 的视觉风格、弹簧阻尼物理动效、高斯模糊毛玻璃材质与交互逻辑展开。
- 顶部导航栏、刘海屏（MacBook Pro Notch Shelf / NotchNook）、底部 Dock 栏、窗口管理器与控制中心等，均须忠实还原 macOS 原生体验。
- 严禁在容器层使用遮挡或破坏毛玻璃的全局背景色（如 `.dock-container` 必须保持纯透明）。

## 2. 自动化便携版打包规则 (Standing Build Rule)
- **以后每次代码修改完成后，都必须自动生成最新的 Windows 便携版程序**。
- 打包命令：
  ```bash
  cmd.exe /c "npm run dist:portable"
  ```
- 生成的便携版可执行文件路径：
  `release/AliceOS 1.0.0.exe`
