// ====================================================
// Phase 68: Multi-Language (i18n) Engine
// ====================================================
const i18nDict = {
  en: {
    // Menus
    menu_file: 'File',
    menu_edit: 'Edit',
    menu_view: 'View',
    menu_help: 'Help',
    apple_about: 'About This System',
    apple_settings: 'System Settings...',
    apple_lock: 'Lock Screen',
    apple_standby: 'StandBy Display...',
    apple_logout: 'Log Out...',
    apple_shutdown: 'Shut Down',

    // Language switcher
    lang_popover_title: 'PREFERRED LANGUAGE',
    lang_open_settings: 'Language & Region Settings...',

    // Context Menu
    ctx_new_folder: 'New Folder',
    ctx_new_file: 'New Text File',
    ctx_new_sticky: 'New Sticky Note',
    ctx_use_stacks: '🥞 Use Stacks',
    ctx_edit_widgets: '🧩 Edit Widgets...',
    ctx_airdrop: '📡 AirDrop...',
    ctx_wallpaper: 'Change Wallpaper...',
    ctx_about: 'About AliceOS',
    ctx_toggle_widgets: 'Hide Desktop Widgets',
    w_ctx_remove: 'Remove Widget',
    w_ctx_replace_title: 'Replace With...',
    w_type_clock: 'World Clock',
    w_type_weather: 'Weather Forecast',
    w_type_sys: 'System Activity',
    w_type_battery: 'Batteries',
    w_type_calendar: 'Calendar',
    w_type_music: 'Now Playing',
    w_ctx_toggle_hide: 'Hide Desktop Widgets',
    w_ctx_toggle_show: 'Show Desktop Widgets',
    w_empty_prompt: '+ Click to Add Widgets',

    // Control Center & Popovers
    cc_wifi: 'Wi-Fi',
    cc_wifi_preferred: 'Preferred Network',
    cc_wifi_other: 'Other Networks',
    cc_bluetooth: 'Bluetooth',
    cc_bt_devices: 'Connected Devices',
    cc_dnd: 'Do Not Disturb',
    cc_stage_manager: 'Stage Manager',
    cc_display: 'Display',
    cc_sound: 'Sound',
    cc_output: 'OUTPUT',
    cc_macbook_speakers: 'MacBook Pro Speakers',
    cc_builtin_audio: 'Built-in Audio',
    cc_airpods_pro: "Alice's AirPods Pro",
    cc_anc_active: 'Noise Cancellation Active',
    cc_homepod: 'Living Room HomePod',
    cc_airplay_audio: 'AirPlay Audio',
    cc_sound_settings: 'Sound Settings...',
    cc_battery: 'Battery',
    cc_power_source: 'Power Source: Battery',
    cc_remaining_time: 'Remaining: 8 hours, 42 minutes',
    cc_low_power_mode: 'Low Power Mode',
    cc_low_power_desc: 'Reduces energy usage',
    cc_significant_energy: 'Apps Using Significant Energy',
    cc_battery_settings: 'Battery Settings...',
    cc_dark_mode: 'Dark Mode',
    cc_night_shift: 'Night Shift',
    cc_spatial_audio: 'Spatial Audio',

    // Lock Screen & Biometrics
    lock_enter_password: 'Enter Password',
    lock_faceid_btn: 'Face ID or Enter Password',
    lock_no_events: 'No Events Today',
    lock_faceid_title: 'Face ID',
    lock_faceid_recognized: 'Face ID Recognized',
    lock_flashlight: 'Flashlight',
    lock_camera: 'Camera',

    // Quick Look
    ql_preview: 'Preview',
    ql_open_app: 'Open with App ↗',
    ql_modified_today: 'Modified Today',
    ql_of: 'of',
    ql_close: 'Close (Space or Esc)',
    ql_prev: 'Previous File',
    ql_next: 'Next File',

    // Spotlight
    spotlight_placeholder: 'Spotlight Search',
    spotlight_calc_res: 'Calculation Result',
    spotlight_app: 'Application',
    spotlight_no_res: 'No results found',
    spotlight_curr_converter: 'Currency Converter',
    spotlight_unit_converter: 'Unit Converter',
    spotlight_click_to_copy: 'Click to copy',
    spotlight_copied: 'Copied to clipboard!',
    spotlight_search_web: 'Search web for "%s"',
    spotlight_web_search: 'Web Search',

    // Window Tile Popover
    tile_title: 'TILE & ARRANGE',
    tile_left: 'Tile Window to Left',
    tile_left_sub: 'Fill left half with 8px margin',
    tile_right: 'Tile Window to Right',
    tile_right_sub: 'Fill right half with 8px margin',
    tile_zoom: 'Zoom / Fill Display',
    tile_zoom_sub: 'Expand window to full workspace',
    tile_center: 'Center on Desktop',
    tile_center_sub: 'Restore standard floating size',

    // Widget Gallery Sheet
    gallery_title: 'Widget Gallery',
    gallery_subtitle: 'Choose widgets to add to your desktop',
    gallery_done: 'Done',
    gallery_add_btn: '+ Add Widget',
    widget_world_clock: 'World Clock',
    widget_world_clock_desc: 'Cupertino, Tokyo, London',
    widget_weather_forecast: 'Weather Forecast',
    widget_weather_forecast_desc: 'Cupertino 72° Sunny',
    widget_battery_status: 'Battery Status',
    widget_battery_status_desc: 'MacBook Pro & AirPods Pro',
    widget_system_usage: 'System Usage',
    widget_system_usage_desc: 'Real-time CPU & RAM gauges',
    widget_now_playing: 'Now Playing',
    widget_now_playing_desc: 'Alice Symphony & Controls',

    // Dynamic Island
    island_brightness: 'Brightness',
    island_music: '🎵 Music',
    island_timer: '⏱️ Timer',
    island_airdrop: '📡 AirDrop',
    island_focus_timer: 'Focus Timer',
    island_plus_1m: '+1 min',
    island_pause: 'Pause',
    island_start: 'Start',
    island_reset: 'Reset',
    island_airdrop_transfer: 'AirDrop Transfer',
    island_sending: 'Sending',
    island_to_mac: "To: Alice's MacBook Pro",
    island_remaining: 'remaining',

    // StandBy Mode
    standby_schedule: 'UPCOMING SCHEDULE',
    standby_wwdc: 'WWDC Keynote',
    standby_wwdc_loc: '10:00 AM — Steve Jobs Theater',
    standby_night_mode: 'Night Mode',
    standby_exit: 'Exit',

    // Quick Note & PiP
    qn_title: 'Quick Note',
    qn_today: 'Today',
    qn_done: 'Done',
    qn_placeholder: 'Jot down a quick thought...',
    pip_title: 'Picture in Picture',

    // Notification Center & Toast
    nc_title: 'Notifications',
    nc_no_notifications: 'No New Notifications',
    nc_widgets: 'Widgets',
    nc_screen_time: '⏳ Screen Time',
    nc_today: 'Today',
    nc_clear: 'Clear',
    nc_options: 'Options',

    // System Settings
    settings_title: 'System Settings',
    settings_appearance: 'Appearance',
    settings_wallpaper: 'Wallpaper',
    settings_desktop: 'Desktop & Stage',
    settings_lang_region: 'Language & Region',
    settings_about: 'General & About',
    settings_theme_mode: 'Theme Mode',
    settings_light: 'Light',
    settings_dark: 'Dark',
    settings_accent_color: 'Accent Color',
    settings_accent_desc: 'Used for buttons, sliders, and highlights',
    settings_solar_sim: 'Solar Time-Lapse Simulator',
    settings_solar_desc: 'Drag daylight slider to preview 4 solar lighting phases',
    settings_sync_clock: 'Sync Live Clock',
    settings_sm_title: 'Stage Manager',
    settings_sm_desc: 'Keep active apps centered while background apps wait on left shelf',
    settings_di_title: 'Dynamic Island',
    settings_di_desc: 'Expandable top capsule for hardware and system notifications',
    settings_3d_title: '3D Isometric Desktop',
    settings_3d_desc: 'Cyberpunk 3D perspective projection for desktop viewport',
    settings_pref_langs: 'Preferred Languages',
    settings_region_example: 'Region Format Example',
    settings_dates: 'Dates',
    settings_time: 'Time',
    settings_numbers: 'Numbers',
    settings_currency: 'Currency',
    settings_measurement: 'Measurement System',
    settings_processor: 'Processor',
    settings_graphics: 'Graphics',
    settings_vfs: 'Virtual File System',
    settings_physical_bridge: 'Physical Bridge',
    settings_bridge_connected: 'Connected (Physical Storage)',
    settings_about_desc: 'Designed by AliceOS Labs. Inspired by Apple macOS & iOS.',

    // Finder
    finder_favorites: 'FAVORITES',
    finder_locations: 'LOCATIONS',
    finder_tags: 'TAGS',
    finder_home: 'Alice Home',
    finder_desktop: 'Desktop',
    finder_documents: 'Documents',
    finder_downloads: 'Downloads',
    finder_local_disk: 'Local Disk (C:)',
    finder_back: 'Back',
    finder_forward: 'Forward',
    finder_up: 'Enclosing Folder',
    finder_refresh: 'Refresh',
    finder_view_icon: 'Icon View',
    finder_view_list: 'List View',
    finder_view_col: 'Column View',
    finder_name: 'Name',
    finder_kind: 'Kind',
    finder_type: 'Type',
    finder_size: 'Size',
    finder_location: 'Location',
    finder_open: 'Open',
    finder_quick_look: 'Quick Look',
    finder_folder: 'Folder',
    finder_plain_text: 'Plain Text Document',
    finder_png_image: 'PNG Image',
    finder_empty: 'Empty folder',
    finder_no_match_tag: 'No files match this tag',
    finder_filtered_by: 'Filtered by',
    finder_tag_red: 'Red',
    finder_tag_orange: 'Orange',
    finder_tag_yellow: 'Yellow',
    finder_tag_green: 'Green',
    finder_tag_blue: 'Blue',
    finder_tag_purple: 'Purple',
    finder_tag_gray: 'Gray',

    // Safari Browser
    safari_search_placeholder: 'Search or enter website name',
    safari_tab_overview: 'Safari Tab Overview',
    safari_search_tabs: 'Search Tabs...',
    safari_tabs: 'Tabs',
    safari_new_tab: 'New Tab',
    safari_done: 'Done',
    safari_downloads: 'Downloads',
    safari_clear: 'Clear',
    safari_no_downloads: 'No Downloads',

    // Notes
    notes_save: 'Save',
    notes_saved: 'Saved!',
    notes_load: 'Load',
    notes_placeholder: 'Start typing...',
    notes_path_placeholder: 'File path...',

    // Activity Monitor
    am_ram_usage: 'Host RAM Usage (GB)',
    am_pid: 'PID',
    am_name: 'Process Name',
    am_status: 'Status',
    am_action: 'Action',
    am_running: 'Running',
    am_kill: 'End Process',

    // AI Assistant
    ai_title: '✨ Alice Assistant',
    ai_help_prompt: 'How can I help you? Try "open music" or "what time is it".',
    ai_placeholder: 'Ask Alice...',
    ai_ask: 'Ask',
    ai_orb_help: 'How can I help?',

    // AirDrop
    airdrop_scanning: 'Scanning for nearby devices...',
    airdrop_devices: 'Nearby Apple Devices',
    airdrop_ready: 'Ready',
    airdrop_this_mac: 'Alice (This Mac)',

    // Stacks
    stacks_title: 'Desktop Stacks',
    stacks_documents: 'Documents',
    stacks_images: 'Images',
    stacks_folders: 'Folders',
    stacks_enabled: 'Organized desktop files into stacks',
    stacks_disabled: 'Restored free desktop file layout',

    // Finder extra
    finder_col_name: 'Name',
    finder_col_kind: 'Kind',
    finder_col_type: 'Type',
    finder_document: 'Document',
    finder_clear_filter: 'Clear filter',

    // Settings extra
    settings_admin: 'Administrator',
    settings_processor_val: 'Alice M3 Ultra (Simulated x86_64)',
    settings_graphics_val: 'Aero Glass GPU Hardware Accelerated',
    settings_vfs_val: 'Mounted JSON VFS with Node IPC',
    settings_bridge_connected_val: 'Connected (C:\\ Physical Access)',
    lang_primary: 'Primary',
    lang_pref_zh: '首选语言',
    lang_pref_ja: '優先する言語',

    // Safari extra
    safari_back: 'Back',
    safari_forward: 'Forward',
    safari_refresh: 'Refresh',
    safari_share: 'Download / Share',
    safari_reader: 'Reader View',
    safari_pip: 'Picture in Picture',
    safari_show_in_finder: 'Show in Finder',
    safari_completed: 'Completed',

    // Paint & Games & Media
    paint_clear: 'Clear',
    snake_score: 'Score',
    snake_hint: 'Use Arrow Keys to play. Click here to focus.',
    maps_locating: 'Acquiring Physical GPS Coordinates...',
    maps_physical_loc: 'Your Physical Location',
    maps_failed: 'Failed to acquire location',
    video_pip: 'Picture in Picture',

    // App Store
    store_title: 'Alice Store 🛍️',
    store_subtitle: 'Discover & Install Native Applications',
    store_tictactoe_title: 'Tic Tac Toe',
    store_tictactoe_desc: 'A classic grid-based puzzle game.',
    store_syslogs_title: 'System Logs',
    store_syslogs_desc: 'View raw IPC bridge streams and kernel logs.',
    store_get: 'Get',
    store_installing: 'Installing...',
    store_installed: 'Installed',

    // Weather
    weather_requesting: 'Requesting satellite data...',
    weather_locating: 'Locating via IP...',
    weather_fetching: 'Fetching forecast for %s...',
    weather_clear: '☀️ Clear',
    weather_partly_cloudy: '⛅ Partly Cloudy',
    weather_foggy: '🌫️ Foggy',
    weather_raining: '🌧️ Raining',
    weather_snowing: '❄️ Snowing',
    weather_thunderstorm: '⛈️ Thunderstorm',
    weather_error: 'Network Error: Could not fetch weather.',

    // Notifications
    notif_sm_title: 'Stage Manager',
    notif_sm_organizing: 'Organizing windows into stage flow',
    notif_hot_corner: 'Hot Corner',
    notif_mission_control: 'Mission Control summoned',
    notif_sticky_created: 'Quick Sticky Note created',
    notif_airdrop_sent: 'Sent file to %s',
    notif_wifi_connected: 'Connected to "%s" (5 GHz, Full Signal)',
    notif_bt_disconnected: '%s disconnected',
    notif_bt_connected: '%s connected (Audio Output / Peripheral)',
    notif_now_playing: 'Now Playing',
    notif_sound_output: 'Switched audio output to %s',
    notif_lpm_on: 'Battery saver activated. Display slightly dimmed.',
    notif_lpm_off: 'Low Power Mode turned off.',
    notif_focus_timer_done: 'Focus Timer Completed! ⏰',
    notif_spatial_audio_on: 'Spatial Audio Active (Dynamic Head Tracking)',
    notif_spatial_audio_off: 'Spatial Audio Disabled',
    notif_night_shift_on: 'Night Shift Warmer Temperature: On',
    notif_night_shift_off: 'Night Shift: Off',
    notif_true_tone: 'Display dynamically adapting to ambient lighting',
    notif_dark_mode_active: 'Dark Mode: Active',
    notif_light_mode_active: 'Light Mode: Active',

    // App Names
    app_finder: 'Finder',
    app_launchpad: 'Launchpad',
    app_missioncontrol: 'Mission Control',
    app_terminal: 'Terminal',
    app_notes: 'Notes',
    app_calculator: 'Calculator',
    app_browser: 'Safari',
    app_music: 'Music',
    app_camera: 'Camera',
    app_paint: 'Paint',
    app_snake: 'Snake',
    app_maps: 'Maps',
    app_video: 'Video Player',
    app_radar: 'AirDrop Radar',
    app_weather: 'Weather',
    app_hostinfo: 'System Activity',
    app_hostscreen: 'Screen Mirror',
    app_webhost: 'Network Portal',
    app_ide: 'Alice Code Studio',
    app_settings: 'System Settings',
    app_spotlight: 'Spotlight',
    app_flappy: 'Flappy Bird',
    app_synth: 'Synthesizer',
    app_universe: 'Space Sandbox',
    app_activity: 'Activity Monitor',
    app_store: 'App Store',
    app_iphonemirror: 'iPhone Mirroring',
    app_trash: 'Trash',
    notes_math_notes: 'Math Notes',
    notes_math_eval: 'Calculated',

    // Folders
    folder_productivity: 'Productivity',
    folder_media: 'Media & Arts',
    folder_games: 'Games & Sandbox',
    folder_utilities: 'System Utilities',

    // Top Menubar Dropdown Menus
    menu_new_finder: 'New Finder Window',
    menu_new_note: 'New Note',
    menu_close_win: 'Close Window',
    menu_undo: 'Undo',
    menu_redo: 'Redo',
    menu_cut: 'Cut',
    menu_copy: 'Copy',
    menu_paste: 'Paste',
    menu_select_all: 'Select All',
    menu_fullscreen: 'Enter Full Screen',
    menu_shortcuts: 'Keyboard Shortcuts',
    menu_help_title: 'AliceOS Help',

    // System Info / About This Mac
    about_title: 'About This System',
    about_chip: 'Chip',
    about_chip_val: 'Alice M3 Ultra',
    about_memory: 'Memory',
    about_memory_val: '32 GB Unified Memory',
    about_os_ver: 'macOS Version',
    about_serial: 'Serial Number',
    about_more_info: 'More Info...',

    // Window Controls
    win_close: 'Close',
    win_minimize: 'Minimize',
    win_zoom: 'Zoom',

    // Terminal
    term_last_login: 'Last login: %s on ttys000',

    // Music & Media
    music_radio_title: 'Lofi Chill Radio',
    music_live_stream: 'Live Stream',

    // Camera
    cam_denied: 'Camera access denied or not found.',

    // Gallery
    gallery_no_image: 'No Image Loaded',
    gallery_image_viewer: 'Image Viewer',

    // Host System Monitor
    host_title: 'Host System Monitor',
    host_warning: '⚠️ 4th Wall Breach Detected',
    host_bridged: 'AliceOS has successfully bridged IPC into the host operating system.',
    host_os: 'Host OS',
    host_name: 'Host Name',
    host_uptime: 'Host Uptime',
    host_uptime_min: '%d minutes',
    host_cpu: 'Host CPU',
    host_cores: '%d Cores',
    host_ram: 'Host RAM',
    host_free: 'Free',
    host_total: 'Total',
    host_ip: 'Host IPv4',
    host_do_not_power_off: '>> DO NOT POWER OFF THE HOST MACHINE <<',

    // Host Screen Mirror
    host_mirror_connecting: 'CONNECTING TO PHYSICAL MONITOR...',
    host_mirror_live: 'LIVE (10 FPS)',
    host_mirror_no_signal: 'NO SIGNAL',

    // LAN Web Server
    webhost_title: 'LAN Web Server',
    webhost_subtitle: 'Expose your virtual file system to the physical LAN.',
    webhost_start: 'Start Server (Port 8080)',
    webhost_stop: 'Stop Server',
    webhost_stopped: 'Server stopped.',

    // Flappy Bird
    flappy_click_start: 'CLICK TO START',
    flappy_game_over: 'GAME OVER',

    // Synthesizer
    synth_waveform: 'Waveform',
    synth_sine: 'Sine (Smooth)',
    synth_square: 'Square (8-bit)',
    synth_sawtooth: 'Sawtooth (Harsh)',
    synth_triangle: 'Triangle (Soft)',
    synth_volume: 'Master Volume',
    synth_hint: 'Use your mouse to click the keys and play music.',

    // Universe Sandbox
    universe_fps: 'FPS',
    universe_particles: 'Particles: 3000',
    universe_hint: 'Move mouse to attract.<br>Click to repel.',

    // IDE
    ide_run: '▶ Run Script',
    ide_clear: 'Clear Output',
    ide_console: 'Console Output',
    ide_finished: '--- execution finished ---',

    // Sticky Notes & Trash
    sticky_note: 'Note',
    sticky_placeholder: 'Write a sticky note...',
    trash_empty: 'Trash is empty',
    trash_empty_desc: 'No deleted items found.',

    // Control Center Extended 3D Sliders
    cc_mute: 'Mute',
    cc_display_brightness: 'Display & Brightness',
    cc_liquid_retina: 'Liquid Retina XDR Display',
    cc_bt_devices_count: '%d Devices',
    widget_sys_normal: 'NORMAL',
    widget_sys_active: 'ACTIVE',
    widget_sys_netio: 'Network & I/O',

    // Language popover sub-labels & StandBy
    lang_sub_en: 'English (United States)',
    lang_sub_zh: 'Simplified Chinese',
    lang_sub_ja: 'Japanese',
    standby_city: 'CUPERTINO',
    tictactoe_coming_soon: 'Coming Soon',

    // System Notifications
    notif_system: 'System',
    notif_welcome: 'Welcome to AliceOS.',
    notif_safari_download: 'Safari Download',
    notif_safari_saved: 'Saved "Webpage_Archive.html" to Downloads',
    notif_cannot_kill_self: 'Cannot kill itself directly.',
    notif_pid_terminated: 'PID %s terminated.',
    notif_speech_error: 'Speech API not supported.',
    notif_pip_active: 'Now playing "%s" in floating window',
    notif_quick_note_saved: 'Saved to Desktop/quick_note.txt',
    notif_quick_note_title: 'Quick Note',
    cc_sound_volume: 'Sound & Volume',
    cc_sound_sub: 'MacBook Pro High-Fidelity Audio',
    cc_dark_mode: 'Dark Mode',
    cc_night_shift: 'Night Shift',
    cc_true_tone: 'True Tone',
    sound_output: 'Sound Output',
    timer_start: 'Start',
    timer_pause: 'Pause',
    timer_title: 'Timer',
    cc_appearance: 'Appearance',
    assistant_listening: 'Listening...',
    assistant_thinking: 'Thinking...',
    assistant_reply: 'I heard: %s. I am Alice.',
    assistant_error: 'Error parsing audio.'
  },
  zh: {
    // 菜单
    menu_file: '文件',
    menu_edit: '编辑',
    menu_view: '显示',
    menu_help: '帮助',
    apple_about: '关于本系统',
    apple_settings: '系统设置...',
    apple_lock: '锁定屏幕',
    apple_standby: '待机显示...',
    apple_logout: '退出登录...',
    apple_shutdown: '关机',

    // 语言切换器
    lang_popover_title: '首选语言',
    lang_open_settings: '语言与地区设置...',

    // 上下文菜单
    ctx_new_folder: '新建文件夹',
    ctx_new_file: '新建文本文件',
    ctx_new_sticky: '新建便签',
    ctx_use_stacks: '🥞 使用叠放',
    ctx_edit_widgets: '🧩 编辑小组件...',
    ctx_airdrop: '📡 隔空投送...',
    ctx_wallpaper: '更改壁纸...',
    ctx_about: '关于 AliceOS',
    ctx_toggle_widgets: '隐藏桌面小组件',
    w_ctx_remove: '移除小组件',
    w_ctx_replace_title: '更换为...',
    w_type_clock: '世界时钟',
    w_type_weather: '天气预报',
    w_type_sys: '系统性能',
    w_type_battery: '电池电量',
    w_type_calendar: '日历日程',
    w_type_music: '正在播放',
    w_ctx_toggle_hide: '隐藏桌面小组件',
    w_ctx_toggle_show: '显示桌面小组件',
    w_empty_prompt: '+ 点击打开小组件库添加',

    // 控制中心与浮层
    cc_wifi: '无线局域网',
    cc_wifi_preferred: '首选网络',
    cc_wifi_other: '其他网络',
    cc_bluetooth: '蓝牙',
    cc_bt_devices: '已连接设备',
    cc_dnd: '勿扰模式',
    cc_stage_manager: '台前调度',
    cc_display: '显示器',
    cc_sound: '声音',
    cc_output: '输出',
    cc_macbook_speakers: 'MacBook Pro 扬声器',
    cc_builtin_audio: '内置音频',
    cc_airpods_pro: "Alice 的 AirPods Pro",
    cc_anc_active: '降噪模式已开启',
    cc_homepod: '客厅 HomePod',
    cc_airplay_audio: '隔空播放音频',
    cc_sound_settings: '声音设置...',
    cc_battery: '电池',
    cc_power_source: '电源：电池',
    cc_remaining_time: '剩余时间：8小时42分钟',
    cc_low_power_mode: '低电量模式',
    cc_low_power_desc: '降低耗电量以延长电池续航',
    cc_significant_energy: '显著耗能的应用',
    cc_battery_settings: '电池设置...',
    cc_dark_mode: '深色模式',
    cc_night_shift: '夜览',
    cc_spatial_audio: '空间音频',

    // 锁屏与生物识别
    lock_enter_password: '输入密码',
    lock_faceid_btn: '面容 ID 或输入密码',
    lock_no_events: '今天无日程',
    lock_faceid_title: '面容 ID',
    lock_faceid_recognized: '面容 ID 验证成功',
    lock_flashlight: '手电筒',
    lock_camera: '相机',

    // 快速查看
    ql_preview: '快速查看',
    ql_open_app: '打开应用 ↗',
    ql_modified_today: '今天修改',
    ql_of: '个，共',
    ql_close: '关闭 (空格或 Esc)',
    ql_prev: '上一个文件',
    ql_next: '下一个文件',

    // 聚焦搜索
    spotlight_placeholder: '聚焦搜索',
    spotlight_calc_res: '计算结果',
    spotlight_app: '应用程序',
    spotlight_no_res: '未找到结果',
    spotlight_curr_converter: '汇率换算',
    spotlight_unit_converter: '单位换算',
    spotlight_click_to_copy: '点击复制',
    spotlight_copied: '已复制到剪贴板！',
    spotlight_search_web: '在网页中搜索“%s”',
    spotlight_web_search: '网页搜索',

    // Sequoia 窗口平铺排布
    tile_title: '排布与分屏',
    tile_left: '窗口平铺至屏幕左侧',
    tile_left_sub: '占据左半屏并保留 8px 边距',
    tile_right: '窗口平铺至屏幕右侧',
    tile_right_sub: '占据右半屏并保留 8px 边距',
    tile_zoom: '缩放 / 填满屏幕',
    tile_zoom_sub: '最大化窗口至整个桌面工作区',
    tile_center: '居中于桌面',
    tile_center_sub: '恢复标准浮动窗口尺寸并居中',

    // Sonoma 小组件图库
    gallery_title: '小组件图库',
    gallery_subtitle: '选择要添加到桌面的小组件',
    gallery_done: '完成',
    gallery_add_btn: '+ 添加小组件',
    widget_world_clock: '世界时钟',
    widget_world_clock_desc: '库比蒂诺、东京、伦敦',
    widget_weather_forecast: '天气预报',
    widget_weather_forecast_desc: '库比蒂诺 22° 晴',
    widget_battery_status: '电池电量',
    widget_battery_status_desc: 'MacBook Pro 与 AirPods Pro',
    widget_system_usage: '系统使用情况',
    widget_system_usage_desc: '实时 CPU 与内存负荷表',
    widget_now_playing: '正在播放',
    widget_now_playing_desc: 'Alice 交响乐与音频控制',

    // 灵动岛
    island_brightness: '屏幕亮度',
    island_music: '🎵 音乐',
    island_timer: '⏱️ 计时器',
    island_airdrop: '📡 隔空投送',
    island_focus_timer: '专注计时器',
    island_plus_1m: '+1 分钟',
    island_pause: '暂停',
    island_start: '开始',
    island_reset: '重置',
    island_airdrop_transfer: '隔空投送传输',
    island_sending: '正在发送',
    island_to_mac: '发送至：Alice 的 MacBook Pro',
    island_remaining: '剩余',

    // 待机显示
    standby_schedule: '待办日程',
    standby_wwdc: 'WWDC 主题演讲',
    standby_wwdc_loc: '上午 10:00 — 史蒂夫·乔布斯剧院',
    standby_night_mode: '夜间模式',
    standby_exit: '退出',

    // 快速备忘与画中画
    qn_title: '快速备忘',
    qn_today: '今天',
    qn_done: '完成',
    qn_placeholder: '随时记录下灵感与想法...',
    pip_title: '画中画',

    // 通知中心
    nc_title: '通知中心',
    nc_no_notifications: '无新通知',
    nc_widgets: '小组件',
    nc_screen_time: '⏳ 屏幕使用时间',
    nc_today: '今天',
    nc_clear: '清除',
    nc_options: '选项',

    // 系统设置
    settings_title: '系统设置',
    settings_appearance: '外观',
    settings_wallpaper: '墙纸',
    settings_desktop: '桌面与台前调度',
    settings_lang_region: '语言与地区',
    settings_about: '通用与关于',
    settings_theme_mode: '外观主题',
    settings_light: '浅色',
    settings_dark: '深色',
    settings_accent_color: '强调色',
    settings_accent_desc: '用于按钮、滑块和高亮选中项',
    settings_solar_sim: '太阳光照延时模拟器',
    settings_solar_desc: '拖拽滑块预览黎明、正午、黄昏和夜晚四种光照阶段',
    settings_sync_clock: '同步实时系统时间',
    settings_sm_title: '台前调度',
    settings_sm_desc: '保持活动应用居中，后台应用收纳于左侧托盘',
    settings_di_title: '灵动岛',
    settings_di_desc: '顶部交互式灵动胶囊，实时显示硬件状态与通知',
    settings_3d_title: '3D 等轴测空间桌面',
    settings_3d_desc: '开启桌面视口的赛博朋克 3D 空间透视投影',
    settings_pref_langs: '首选语言',
    settings_region_example: '地区格式示例',
    settings_dates: '日期',
    settings_time: '时间',
    settings_numbers: '数字',
    settings_currency: '货币',
    settings_measurement: '度量衡',
    settings_processor: '处理器',
    settings_graphics: '图形卡',
    settings_vfs: '虚拟文件系统',
    settings_physical_bridge: '物理存储桥接',
    settings_bridge_connected: '已连接（本地物理存储）',
    settings_about_desc: '由 AliceOS 实验室设计，深度灵感源自 Apple macOS 与 iOS。',

    // 访达
    finder_favorites: '个人收藏',
    finder_locations: '位置',
    finder_tags: '标记',
    finder_home: 'Alice 的个人主页',
    finder_desktop: '桌面',
    finder_documents: '文稿',
    finder_downloads: '下载',
    finder_local_disk: '本地磁盘 (C:)',
    finder_back: '返回',
    finder_forward: '前进',
    finder_up: '上级文件夹',
    finder_refresh: '刷新',
    finder_view_icon: '图标显示',
    finder_view_list: '列表显示',
    finder_view_col: '分栏显示',
    finder_name: '名称',
    finder_kind: '种类',
    finder_type: '类型',
    finder_size: '大小',
    finder_location: '位置',
    finder_open: '打开',
    finder_quick_look: '快速查看',
    finder_folder: '文件夹',
    finder_plain_text: '纯文本文稿',
    finder_png_image: 'PNG 图像',
    finder_empty: '空文件夹',
    finder_no_match_tag: '未找到匹配该标记的文件',
    finder_filtered_by: '筛选标记',
    finder_tag_red: '红色',
    finder_tag_orange: '橙色',
    finder_tag_yellow: '黄色',
    finder_tag_green: '绿色',
    finder_tag_blue: '蓝色',
    finder_tag_purple: '紫色',
    finder_tag_gray: '灰色',

    // Safari 浏览器
    safari_search_placeholder: '搜索或输入网站名称',
    safari_tab_overview: 'Safari 标签页概览',
    safari_search_tabs: '搜索标签页...',
    safari_tabs: '个标签页',
    safari_new_tab: '新建标签页',
    safari_done: '完成',
    safari_downloads: '下载项',
    safari_clear: '清除',
    safari_no_downloads: '无下载任务',

    // 备忘录
    notes_save: '存储',
    notes_saved: '已存储！',
    notes_load: '读取',
    notes_placeholder: '开始输入内容...',
    notes_path_placeholder: '文件路径...',

    // 活动监视器
    am_ram_usage: '主机内存使用情况 (GB)',
    am_pid: 'PID',
    am_name: '进程名称',
    am_status: '状态',
    am_action: '操作',
    am_running: '运行中',
    am_kill: '结束进程',

    // 智能助理
    ai_title: '✨ Alice 智能助理',
    ai_help_prompt: '我能帮您做什么？试着说“打开音乐”或“现在几点了”。',
    ai_placeholder: '咨询 Alice...',
    ai_ask: '发送',
    ai_orb_help: '请问有什么可以帮您？',

    // 隔空投送
    airdrop_scanning: '正在扫描附近的设备...',
    airdrop_devices: '附近的 Apple 设备',
    airdrop_ready: '就绪',
    airdrop_this_mac: 'Alice（这台 Mac）',

    // 叠放
    stacks_title: '桌面叠放',
    stacks_documents: '文稿',
    stacks_images: '图像',
    stacks_folders: '文件夹',
    stacks_enabled: '已将桌面文件整齐分组叠放',
    stacks_disabled: '已恢复桌面自由网格排列',

    // 访达拓展
    finder_col_name: '名称',
    finder_col_kind: '种类',
    finder_col_type: '类型',
    finder_document: '文稿',
    finder_clear_filter: '清除筛选',

    // 系统设置拓展
    settings_admin: '管理员',
    settings_processor_val: 'Alice M3 Ultra (模拟 x86_64)',
    settings_graphics_val: 'Aero Glass GPU 硬件加速',
    settings_vfs_val: '挂载 JSON 虚拟文件系统 (Node IPC)',
    settings_bridge_connected_val: '已连接（本地物理存储 C:\\）',
    lang_primary: '主要语言',
    lang_pref_zh: '首选语言',
    lang_pref_ja: '優先する言語',

    // Safari 拓展
    safari_back: '返回',
    safari_forward: '前进',
    safari_refresh: '刷新',
    safari_share: '下载 / 共享',
    safari_reader: '阅读器视图',
    safari_pip: '画中画',
    safari_show_in_finder: '在访达中显示',
    safari_completed: '已完成',

    // 画板、游戏与多媒体
    paint_clear: '清除',
    snake_score: '得分',
    snake_hint: '使用方向键控制。点击此处以聚焦。',
    maps_locating: '正在获取物理 GPS 坐标...',
    maps_physical_loc: '您的物理位置',
    maps_failed: '无法获取位置信息',
    video_pip: '画中画',

    // 应用程序商店
    store_title: 'Alice 商店 🛍️',
    store_subtitle: '发现并安装原生应用程序',
    store_tictactoe_title: '井字棋',
    store_tictactoe_desc: '经典的九宫格棋盘对弈游戏。',
    store_syslogs_title: '系统日志',
    store_syslogs_desc: '查看底层 IPC 桥接数据流与内核日志。',
    store_get: '获取',
    store_installing: '正在安装...',
    store_installed: '已安装',

    // 天气
    weather_requesting: '正在请求卫星气象数据...',
    weather_locating: '正在通过 IP 定位...',
    weather_fetching: '正在获取 %s 的天气预报...',
    weather_clear: '☀️ 晴',
    weather_partly_cloudy: '⛅ 多云',
    weather_foggy: '🌫️ 雾',
    weather_raining: '🌧️ 雨',
    weather_snowing: '❄️ 雪',
    weather_thunderstorm: '⛈️ 雷阵雨',
    weather_error: '网络错误：无法获取天气预报。',

    // 系统通知
    notif_sm_title: '台前调度',
    notif_sm_organizing: '正在将窗口组织进台前调度流',
    notif_hot_corner: '触发角',
    notif_mission_control: '调度中心已呼出',
    notif_sticky_created: '快速便签已创建',
    notif_airdrop_sent: '已将文件发送至 %s',
    notif_wifi_connected: '已连接至“%s”（5 GHz，信号满格）',
    notif_bt_disconnected: '%s 已断开连接',
    notif_bt_connected: '%s 已连接（音频输出/外设）',
    notif_now_playing: '正在播放',
    notif_sound_output: '已将音频输出切换至 %s',
    notif_lpm_on: '低电量模式已开启。屏幕已轻微变暗。',
    notif_lpm_off: '低电量模式已关闭。',
    notif_focus_timer_done: '专注计时已完成！⏰',
    notif_spatial_audio_on: '空间音频已启用（动态头部追踪）',
    notif_spatial_audio_off: '空间音频已停用',
    notif_night_shift_on: '夜览较暖色温：已开启',
    notif_night_shift_off: '夜览：已关闭',
    notif_true_tone: '显示器正在动态适应环境光',
    notif_dark_mode_active: '深色模式：已启用',
    notif_light_mode_active: '浅色模式：已启用',

    // 应用名称
    app_finder: '访达',
    app_launchpad: '启动台',
    app_missioncontrol: '调度中心',
    app_terminal: '终端',
    app_notes: '备忘录',
    app_calculator: '计算器',
    app_browser: 'Safari 浏览器',
    app_music: '音乐',
    app_camera: '相机',
    app_paint: '画板',
    app_snake: '贪吃蛇',
    app_maps: '地图',
    app_video: '视频播放器',
    app_radar: '隔空投送雷达',
    app_weather: '天气',
    app_hostinfo: '系统性能',
    app_hostscreen: '屏幕镜像',
    app_webhost: '网络门户',
    app_ide: '代码编辑器',
    app_settings: '系统设置',
    app_spotlight: '聚焦搜索',
    app_flappy: '像素小鸟',
    app_synth: '音频合成器',
    app_universe: '宇宙沙盒',
    app_activity: '活动监视器',
    app_store: 'App Store',
    app_iphonemirror: 'iPhone 镜像',
    app_trash: '废纸篓',
    notes_math_notes: '数学备忘录',
    notes_math_eval: '计算结果',

    // 分类文件夹
    folder_productivity: '工作效率',
    folder_media: '影音与创意',
    folder_games: '游戏与娱乐',
    folder_utilities: '系统实用工具',

    // 顶栏下拉菜单
    menu_new_finder: '新建访达窗口',
    menu_new_note: '新建备忘录',
    menu_close_win: '关闭窗口',
    menu_undo: '撤销',
    menu_redo: '重做',
    menu_cut: '剪切',
    menu_copy: '拷贝',
    menu_paste: '粘贴',
    menu_select_all: '全选',
    menu_fullscreen: '进入全屏幕',
    menu_shortcuts: '键盘快捷键',
    menu_help_title: 'AliceOS 帮助',

    // 系统信息与关于本机
    about_title: '关于本系统',
    about_chip: '芯片',
    about_chip_val: 'Alice M3 Ultra',
    about_memory: '内存',
    about_memory_val: '32 GB 统一内存',
    about_os_ver: 'macOS 版本',
    about_serial: '序列号',
    about_more_info: '更多信息...',

    // 窗口控制
    win_close: '关闭',
    win_minimize: '最小化',
    win_zoom: '缩放',

    // 终端
    term_last_login: '上次登录时间：%s（ttys000）',

    // 音乐与多媒体
    music_radio_title: 'Lofi 放松电台',
    music_live_stream: '实时直播',

    // 相机
    cam_denied: '摄像头无法访问或未找到。',

    // 图像画廊
    gallery_no_image: '未载入图像',
    gallery_image_viewer: '图像查看器',

    // 主机系统监视器
    host_title: '主机系统监视器',
    host_warning: '⚠️ 监测到底层主机跨屏穿透',
    host_bridged: 'AliceOS 已成功通过 IPC 桥接访问物理宿主机。',
    host_os: '主机操作系统',
    host_name: '主机名称',
    host_uptime: '运行时长',
    host_uptime_min: '%d 分钟',
    host_cpu: '主机 CPU',
    host_cores: '%d 核',
    host_ram: '主机内存',
    host_free: '空闲',
    host_total: '总共',
    host_ip: '主机 IPv4 地址',
    host_do_not_power_off: '>> 请勿关闭物理宿主机电源 <<',

    // 屏幕镜像
    host_mirror_connecting: '正在连接物理显示器...',
    host_mirror_live: '实时传输 (10 FPS)',
    host_mirror_no_signal: '无信号',

    // 局域网服务器
    webhost_title: '局域网 Web 服务器',
    webhost_subtitle: '向本地局域网公开您的虚拟文件系统。',
    webhost_start: '启动服务器 (端口 8080)',
    webhost_stop: '停止服务器',
    webhost_stopped: '服务器已停止。',

    // 像素小鸟
    flappy_click_start: '点击开始游戏',
    flappy_game_over: '游戏结束',

    // 音频合成器
    synth_waveform: '声学波形',
    synth_sine: '正弦波 (平滑)',
    synth_square: '方波 (8位元)',
    synth_sawtooth: '锯齿波 (激进)',
    synth_triangle: '三角波 (柔和)',
    synth_volume: '主音量',
    synth_hint: '使用鼠标点击琴键即可弹奏音乐。',

    // 宇宙沙盒
    universe_fps: '帧率',
    universe_particles: '粒子数：3000',
    universe_hint: '移动鼠标吸引粒子。<br>点击鼠标排斥粒子。',

    // 代码编辑器
    ide_run: '▶ 运行脚本',
    ide_clear: '清空输出',
    ide_console: '控制台输出',
    ide_finished: '--- 执行结束 ---',

    // 便签与废纸篓
    sticky_note: '便签',
    sticky_placeholder: '在此输入便签内容...',
    trash_empty: '废纸篓是空的',
    trash_empty_desc: '没有找到已删除的项目。',

    // 控制中心 3D 展开滑块
    cc_mute: '静音',
    cc_display_brightness: '显示器与亮度',
    cc_liquid_retina: 'Liquid 视网膜 XDR 显示屏',
    cc_bt_devices_count: '%d 个设备',
    widget_sys_normal: '正常',
    widget_sys_active: '活跃',
    widget_sys_netio: '网络与 I/O',

    // 语言切换与待机显示
    lang_sub_en: '英文（美国）',
    lang_sub_zh: '简体中文',
    lang_sub_ja: '日文',
    standby_city: '库比蒂诺',
    tictactoe_coming_soon: '即将推出',

    // 系统通知
    notif_system: '系统',
    notif_welcome: '欢迎使用 AliceOS。',
    notif_safari_download: 'Safari 下载',
    notif_safari_saved: '已将“Webpage_Archive.html”存储至“下载”',
    notif_cannot_kill_self: '无法直接结束自身进程。',
    notif_pid_terminated: '进程 PID %s 已结束。',
    notif_speech_error: '当前环境不支持语音识别 API。',
    notif_pip_active: '正在画中画浮窗中播放“%s”',
    notif_quick_note_saved: '已存储至 桌面/quick_note.txt',
    notif_quick_note_title: '快速备忘',
    cc_sound_volume: '声音与音量',
    cc_sound_sub: 'MacBook Pro 高保真音频',
    cc_dark_mode: '深色模式',
    cc_night_shift: '夜览',
    cc_true_tone: '原彩显示',
    sound_output: '声音输出',
    timer_start: '开始',
    timer_pause: '暂停',
    timer_title: '计时器',
    cc_appearance: '外观',
    assistant_listening: '正在聆听...',
    assistant_thinking: '正在思考...',
    assistant_reply: '我听到的是：%s。我是 Alice。',
    assistant_error: '音频解析错误。'
  },
  ja: {
    // メニュー
    menu_file: 'ファイル',
    menu_edit: '編集',
    menu_view: '表示',
    menu_help: 'ヘルプ',
    apple_about: 'このMacについて',
    apple_settings: 'システム設定...',
    apple_lock: '画面をロック',
    apple_standby: 'スタンバイ表示...',
    apple_logout: 'ログアウト...',
    apple_shutdown: 'システム終了',

    // 言語切り替え
    lang_popover_title: '優先する言語',
    lang_open_settings: '言語と地域設定...',

    // コンテキストメニュー
    ctx_new_folder: '新規フォルダ',
    ctx_new_file: '新規テキストファイル',
    ctx_new_sticky: '新規スティッキーズ',
    ctx_use_stacks: '🥞 スタックを使用',
    ctx_edit_widgets: '🧩 ウィジェットを編集...',
    ctx_airdrop: '📡 AirDrop...',
    ctx_wallpaper: '壁紙を変更...',
    ctx_about: 'AliceOS について',
    ctx_toggle_widgets: 'ウィジェットを非表示',
    w_ctx_remove: 'ウィジェットを削除',
    w_ctx_replace_title: '置き換え...',
    w_type_clock: '世界時計',
    w_type_weather: '天気',
    w_type_sys: 'システム性能',
    w_type_battery: 'バッテリー',
    w_type_calendar: 'カレンダー',
    w_type_music: '再生中',
    w_ctx_toggle_hide: 'ウィジェットを非表示',
    w_ctx_toggle_show: 'ウィジェットを表示',
    w_empty_prompt: '+ ウィジェットを追加',

    // コントロールセンター & ポップオーバー
    cc_wifi: 'Wi-Fi',
    cc_wifi_preferred: '優先ネットワーク',
    cc_wifi_other: 'ほかのネットワーク',
    cc_bluetooth: 'Bluetooth',
    cc_bt_devices: '接続されたデバイス',
    cc_dnd: '集中モード',
    cc_stage_manager: 'ステージマネージャ',
    cc_display: 'ディスプレイ',
    cc_sound: 'サウンド',
    cc_output: '出力',
    cc_macbook_speakers: 'MacBook Pro スピーカー',
    cc_builtin_audio: '内蔵オーディオ',
    cc_airpods_pro: "Alice の AirPods Pro",
    cc_anc_active: 'ノイズキャンセリング有効',
    cc_homepod: 'リビングの HomePod',
    cc_airplay_audio: 'AirPlay オーディオ',
    cc_sound_settings: 'サウンド設定...',
    cc_battery: 'バッテリー',
    cc_power_source: '電源: バッテリー',
    cc_remaining_time: '残り時間: 8時間42分',
    cc_low_power_mode: '低電力モード',
    cc_low_power_desc: 'エネルギー消費を抑えます',
    cc_significant_energy: '著しくエネルギーを消費中',
    cc_battery_settings: 'バッテリー設定...',
    cc_dark_mode: 'ダークモード',
    cc_night_shift: 'Night Shift',
    cc_spatial_audio: '空間オーディオ',

    // ロック画面 & 生体認証
    lock_enter_password: 'パスワードを入力',
    lock_faceid_btn: 'Face ID またはパスワード',
    lock_no_events: '今日の予定はありません',
    lock_faceid_title: 'Face ID',
    lock_faceid_recognized: 'Face ID 認証完了',
    lock_flashlight: 'フラッシュライト',
    lock_camera: 'カメラ',

    // クイックルック
    ql_preview: 'クイックルック',
    ql_open_app: 'アプリで開く ↗',
    ql_modified_today: '今日変更',
    ql_of: '個中',
    ql_close: '閉じる (Space または Esc)',
    ql_prev: '前のファイル',
    ql_next: '次のファイル',

    // Spotlight 検索
    spotlight_placeholder: 'Spotlight 検索',
    spotlight_calc_res: '計算結果',
    spotlight_app: 'アプリケーション',
    spotlight_no_res: '結果が見つかりません',
    spotlight_curr_converter: '通貨換算',
    spotlight_unit_converter: '単位換算',
    spotlight_click_to_copy: 'クリックしてコピー',
    spotlight_copied: 'クリップボードにコピーしました！',
    spotlight_search_web: 'Webで「%s」を検索',
    spotlight_web_search: 'Web 検索',

    // Sequoia ウインドウタイル整列
    tile_title: 'タイルと整列',
    tile_left: 'ウインドウを画面左側にタイル表示',
    tile_left_sub: '左半分に配置 (8px 余白)',
    tile_right: 'ウインドウを画面右側にタイル表示',
    tile_right_sub: '右半分に配置 (8px 余白)',
    tile_zoom: '拡大 / 画面いっぱいに表示',
    tile_zoom_sub: 'ウインドウを画面全体に拡大',
    tile_center: 'デスクトップの中央に配置',
    tile_center_sub: '標準サイズに戻して中央配置',

    // Sonoma ウィジェットギャラリー
    gallery_title: 'ウィジェットギャラリー',
    gallery_subtitle: 'デスクトップに追加するウィジェットを選択',
    gallery_done: '完了',
    gallery_add_btn: '+ ウィジェットを追加',
    widget_world_clock: '世界時計',
    widget_world_clock_desc: 'クパティーノ、東京、ロンドン',
    widget_weather_forecast: '天気予報',
    widget_weather_forecast_desc: 'クパティーノ 22° 晴れ',
    widget_battery_status: 'バッテリーの状態',
    widget_battery_status_desc: 'MacBook Pro と AirPods Pro',
    widget_system_usage: 'システム使用状況',
    widget_system_usage_desc: 'リアルタイム CPU / メモリメーター',
    widget_now_playing: '再生中',
    widget_now_playing_desc: 'Alice 交響曲と操作パネル',

    // Dynamic Island
    island_brightness: 'ディスプレイ輝度',
    island_music: '🎵 ミュージック',
    island_timer: '⏱️ タイマー',
    island_airdrop: '📡 AirDrop',
    island_focus_timer: '集中タイマー',
    island_plus_1m: '+1分',
    island_pause: '一時停止',
    island_start: '開始',
    island_reset: 'リセット',
    island_airdrop_transfer: 'AirDrop 転送',
    island_sending: '送信中',
    island_to_mac: '送信先: Alice の MacBook Pro',
    island_remaining: '残り',

    // スタンバイ表示
    standby_schedule: '今後の予定',
    standby_wwdc: 'WWDC 基調講演',
    standby_wwdc_loc: '午前 10:00 — スティーブ・ジョブズ・シアター',
    standby_night_mode: 'ナイトモード',
    standby_exit: '終了',

    // クイックメモ & ピクチャ・イン・ピクチャ
    qn_title: 'クイックメモ',
    qn_today: '今日',
    qn_done: '完了',
    qn_placeholder: '素早くアイデアを書き留めます...',
    pip_title: 'ピクチャ・イン・ピクチャ',

    // 通知センター
    nc_title: '通知',
    nc_no_notifications: '新しい通知はありません',
    nc_widgets: 'ウィジェット',
    nc_screen_time: '⏳ スクリーンタイム',
    nc_today: '今日',
    nc_clear: '消去',
    nc_options: 'オプション',

    // システム設定
    settings_title: 'システム設定',
    settings_appearance: '外観',
    settings_wallpaper: '壁紙',
    settings_desktop: 'デスクトップとステージ',
    settings_lang_region: '言語と地域',
    settings_about: '一般と情報',
    settings_theme_mode: 'テーマモード',
    settings_light: 'ライト',
    settings_dark: 'ダーク',
    settings_accent_color: 'アクセントカラー',
    settings_accent_desc: 'ボタンやスライダー、ハイライトに使用されます',
    settings_solar_sim: '太陽光タイムラプスシミュレータ',
    settings_solar_desc: 'スライダーを動かして4つの時間帯の照明をプレビュー',
    settings_sync_clock: 'リアルタイム時計に同期',
    settings_sm_title: 'ステージマネージャ',
    settings_sm_desc: 'アクティブなアプリを中央に保ち、バックグラウンドアプリを左側に配置',
    settings_di_title: 'Dynamic Island',
    settings_di_desc: 'ハードウェアと通知を表示する上部拡張カプセル',
    settings_3d_title: '3D アイソメトリックデスクトップ',
    settings_3d_desc: 'デスクトップに3Dパースペクティブ投影を適用',
    settings_pref_langs: '優先する言語',
    settings_region_example: '地域フォーマットの例',
    settings_dates: '日付',
    settings_time: '時刻',
    settings_numbers: '数字',
    settings_currency: '通貨',
    settings_measurement: '測定単位',
    settings_processor: 'プロセッサ',
    settings_graphics: 'グラフィックス',
    settings_vfs: '仮想ファイルシステム',
    settings_physical_bridge: '物理ストレージブリッジ',
    settings_bridge_connected: '接続済み（物理ストレージ）',
    settings_about_desc: 'AliceOS Labs 設計。Apple macOS と iOS にインスパイアされています。',

    // Finder
    finder_favorites: 'よく使う項目',
    finder_locations: '場所',
    finder_tags: 'タグ',
    finder_home: 'Alice ホーム',
    finder_desktop: 'デスクトップ',
    finder_documents: '書類',
    finder_downloads: 'ダウンロード',
    finder_local_disk: 'ローカルディスク (C:)',
    finder_back: '戻る',
    finder_forward: '進む',
    finder_up: '上位フォルダ',
    finder_refresh: '再読み込み',
    finder_view_icon: 'アイコン表示',
    finder_view_list: 'リスト表示',
    finder_view_col: 'カラム表示',
    finder_name: '名前',
    finder_kind: '種類',
    finder_type: 'タイプ',
    finder_size: 'サイズ',
    finder_location: '場所',
    finder_open: '開く',
    finder_quick_look: 'クイックルック',
    finder_folder: 'フォルダ',
    finder_plain_text: 'テキスト書類',
    finder_png_image: 'PNG 画像',
    finder_empty: '空のフォルダ',
    finder_no_match_tag: 'このタグに一致するファイルはありません',
    finder_filtered_by: 'フィルター',
    finder_tag_red: 'レッド',
    finder_tag_orange: 'オレンジ',
    finder_tag_yellow: 'イエロー',
    finder_tag_green: 'グリーン',
    finder_tag_blue: 'ブルー',
    finder_tag_purple: 'パープル',
    finder_tag_gray: 'グレー',

    // Safari
    safari_search_placeholder: '検索または Web サイト名を入力',
    safari_tab_overview: 'Safari タブ概要',
    safari_search_tabs: 'タブを検索...',
    safari_tabs: '個のタブ',
    safari_new_tab: '新規タブ',
    safari_done: '完了',
    safari_downloads: 'ダウンロード',
    safari_clear: '消去',
    safari_no_downloads: 'ダウンロードはありません',

    // メモ
    notes_save: '保存',
    notes_saved: '保存しました！',
    notes_load: '読み込み',
    notes_placeholder: 'メモを入力...',
    notes_path_placeholder: 'ファイルパス...',

    // アクティビティモニタ
    am_ram_usage: 'ホスト RAM 使用状況 (GB)',
    am_pid: 'PID',
    am_name: 'プロセス名',
    am_status: '状態',
    am_action: '操作',
    am_running: '実行中',
    am_kill: 'プロセスを終了',

    // アシスタント
    ai_title: '✨ Alice アシスタント',
    ai_help_prompt: 'ご用件は何でしょうか？「音楽を開いて」や「今何時？」とお試しください。',
    ai_placeholder: 'Alice に質問...',
    ai_ask: '送信',
    ai_orb_help: 'ご用件は何でしょうか？',

    // AirDrop
    airdrop_scanning: '近くのデバイスを検索中...',
    airdrop_devices: '近くの Apple デバイス',
    airdrop_ready: '準備完了',
    airdrop_this_mac: 'Alice（このMac）',

    // スタック
    stacks_title: 'デスクトップスタック',
    stacks_documents: '書類',
    stacks_images: '画像',
    stacks_folders: 'フォルダ',
    stacks_enabled: 'デスクトップファイルをスタックにまとめました',
    stacks_disabled: '自由なグリッド配置に戻しました',

    // Finder 拡張
    finder_col_name: '名前',
    finder_col_kind: '種類',
    finder_col_type: 'タイプ',
    finder_document: '書類',
    finder_clear_filter: 'フィルタを解除',

    // システム設定 拡張
    settings_admin: '管理者',
    settings_processor_val: 'Alice M3 Ultra (シミュレート x86_64)',
    settings_graphics_val: 'Aero Glass GPU ハードウェアアクセラレーション',
    settings_vfs_val: 'マウント済み JSON VFS (Node IPC)',
    settings_bridge_connected_val: '接続済み (ローカル物理ストレージ C:\\)',
    lang_primary: 'プライマリ',
    lang_pref_zh: '首选语言',
    lang_pref_ja: '優先する言語',

    // Safari 拡張
    safari_back: '戻る',
    safari_forward: '進む',
    safari_refresh: '再読み込み',
    safari_share: 'ダウンロード / 共有',
    safari_reader: 'リーダー表示',
    safari_pip: 'ピクチャ・イン・ピクチャ',
    safari_show_in_finder: 'Finder で表示',
    safari_completed: '完了',

    // ペイント・ゲーム・メディア
    paint_clear: '消去',
    snake_score: 'スコア',
    snake_hint: '方向キーで操作します。クリックしてフォーカス。',
    maps_locating: '物理 GPS 座標を取得中...',
    maps_physical_loc: '現在の物理位置',
    maps_failed: '位置情報の取得に失敗しました',
    video_pip: 'ピクチャ・イン・ピクチャ',

    // App Store
    store_title: 'Alice Store 🛍️',
    store_subtitle: 'ネイティブアプリの検索とインストール',
    store_tictactoe_title: '三目並べ',
    store_tictactoe_desc: 'クラシックなマス目パズルゲーム。',
    store_syslogs_title: 'システムログ',
    store_syslogs_desc: '生の IPC ブリッジストリームとカーネルログを表示。',
    store_get: '入手',
    store_installing: 'インストール中...',
    store_installed: 'インストール済み',

    // 天気
    weather_requesting: '衛星気象データをリクエスト中...',
    weather_locating: 'IP による位置情報を取得中...',
    weather_fetching: '%s の天気予報を取得中...',
    weather_clear: '☀️ 快晴',
    weather_partly_cloudy: '⛅ 晴れ時々曇り',
    weather_foggy: '🌫️ 霧',
    weather_raining: '🌧️ 雨',
    weather_snowing: '❄️ 雪',
    weather_thunderstorm: '⛈️ 雷雨',
    weather_error: 'ネットワークエラー: 天気を取得できませんでした。',

    // 通知
    notif_sm_title: 'ステージマネージャ',
    notif_sm_organizing: 'ウインドウをステージフローに整理中',
    notif_hot_corner: 'ホットコーナー',
    notif_mission_control: 'Mission Control を起動しました',
    notif_sticky_created: 'クイックメモを作成しました',
    notif_airdrop_sent: '%s にファイルを送信しました',
    notif_wifi_connected: '「%s」に接続しました (5 GHz、強電界)',
    notif_bt_disconnected: '%s の接続を解除しました',
    notif_bt_connected: '%s を接続しました (オーディオ出力/周辺機器)',
    notif_now_playing: '再生中',
    notif_sound_output: '音声出力を %s に切り替えました',
    notif_lpm_on: '低電力モードがオンになりました。画面がわずかに減光します。',
    notif_lpm_off: '低電力モードをオフにしました。',
    notif_focus_timer_done: '集中タイマーが終了しました！⏰',
    notif_spatial_audio_on: '空間オーディオ有効（ダイナミックヘッドトラッキング）',
    notif_spatial_audio_off: '空間オーディオ無効',
    notif_night_shift_on: 'Night Shift 暖色温度: オン',
    notif_night_shift_off: 'Night Shift: オフ',
    notif_true_tone: '周囲の光に合わせてディスプレイを動的調整中',
    notif_dark_mode_active: 'ダークモード: 有効',
    notif_light_mode_active: 'ライトモード: 有効',

    // アプリケーション
    app_finder: 'Finder',
    app_launchpad: 'Launchpad',
    app_missioncontrol: 'Mission Control',
    app_terminal: 'ターミナル',
    app_notes: 'メモ',
    app_calculator: '計算機',
    app_browser: 'Safari',
    app_music: 'ミュージック',
    app_camera: 'カメラ',
    app_paint: 'ペイント',
    app_snake: 'スネークゲーム',
    app_maps: 'マップ',
    app_video: 'ビデオプレーヤー',
    app_radar: 'AirDrop レーダー',
    app_weather: '天気',
    app_hostinfo: 'システム性能',
    app_hostscreen: '画面ミラーリング',
    app_webhost: 'ネットワーク',
    app_ide: 'Alice コードエディタ',
    app_settings: 'システム設定',
    app_spotlight: 'Spotlight',
    app_flappy: 'フラッピーバード',
    app_synth: 'シンセサイザー',
    app_universe: '宇宙サンドボックス',
    app_activity: 'アクティビティモニタ',
    app_store: 'App Store',
    app_iphonemirror: 'iPhoneミラーリング',
    app_trash: 'ゴミ箱',
    notes_math_notes: '計算メモ',
    notes_math_eval: '計算結果',

    // フォルダ
    folder_productivity: '仕事効率化',
    folder_media: 'メディアとアート',
    folder_games: 'ゲームと実験',
    folder_utilities: 'システムユーティリティ',

    // メニューバー ドロップダウン
    menu_new_finder: '新規 Finder ウインドウ',
    menu_new_note: '新規メモ',
    menu_close_win: 'ウインドウを閉じる',
    menu_undo: '取り消す',
    menu_redo: 'やり直す',
    menu_cut: 'カット',
    menu_copy: 'コピー',
    menu_paste: 'ペースト',
    menu_select_all: 'すべてを選択',
    menu_fullscreen: 'フルスクリーンにする',
    menu_shortcuts: 'キーボードショートカット',
    menu_help_title: 'AliceOS ヘルプ',

    // システム情報 / この Mac について
    about_title: 'このMacについて',
    about_chip: 'チップ',
    about_chip_val: 'Alice M3 Ultra',
    about_memory: 'メモリ',
    about_memory_val: '32 GB 統合メモリ',
    about_os_ver: 'macOS バージョン',
    about_serial: 'シリアル番号',
    about_more_info: '詳しい情報...',

    // ウインドウ操作
    win_close: '閉じる',
    win_minimize: 'しまう',
    win_zoom: '拡大/縮小',

    // ターミナル
    term_last_login: '最終ログイン: %s（ttys000）',

    // ミュージック & メディア
    music_radio_title: 'Lofi チルラジオ',
    music_live_stream: 'ライブ配信',

    // カメラ
    cam_denied: 'カメラへのアクセスが拒否されたか、見つかりません。',

    // 画像ギャラリー
    gallery_no_image: '画像が読み込まれていません',
    gallery_image_viewer: '画像ビューア',

    // ホストシステムモニタ
    host_title: 'ホストシステムモニタ',
    host_warning: '⚠️ 第4の壁の突破を検出',
    host_bridged: 'AliceOS はホストOSへの IPC ブリッジ接続に成功しました。',
    host_os: 'ホストOS',
    host_name: 'ホスト名',
    host_uptime: '稼働時間',
    host_uptime_min: '%d分',
    host_cpu: 'ホスト CPU',
    host_cores: '%d コア',
    host_ram: 'ホスト RAM',
    host_free: '空き',
    host_total: '合計',
    host_ip: 'ホスト IPv4',
    host_do_not_power_off: '>> ホストマシンの電源を切らないでください <<',

    // 画面ミラーリング
    host_mirror_connecting: '物理モニタに接続中...',
    host_mirror_live: 'ライブ (10 FPS)',
    host_mirror_no_signal: 'シグナルなし',

    // LAN Web サーバー
    webhost_title: 'LAN Web サーバー',
    webhost_subtitle: '仮想ファイルシステムをローカル LAN に公開します。',
    webhost_start: 'サーバーを起動 (ポート 8080)',
    webhost_stop: 'サーバーを停止',
    webhost_stopped: 'サーバーが停止しました。',

    // フロッピーバード
    flappy_click_start: 'クリックしてスタート',
    flappy_game_over: 'ゲームオーバー',

    // シンセサイザー
    synth_waveform: '波形',
    synth_sine: 'サイン波 (スムーズ)',
    synth_square: '矩形波 (8ビット)',
    synth_sawtooth: 'のこぎり波 (シャープ)',
    synth_triangle: '三角波 (ソフト)',
    synth_volume: 'マスター音量',
    synth_hint: 'マウスで鍵盤をクリックして演奏します。',

    // 宇宙サンドボックス
    universe_fps: 'FPS',
    universe_particles: '粒子数: 3000',
    universe_hint: 'マウスを動かして引き寄せ。<br>クリックで反発。',

    // IDE
    ide_run: '▶ スクリプトを実行',
    ide_clear: '出力を消去',
    ide_console: 'コンソール出力',
    ide_finished: '--- 実行完了 ---',

    // スティッキーズとゴミ箱
    sticky_note: 'スティッキーズ',
    sticky_placeholder: 'メモを入力...',
    trash_empty: 'ゴミ箱は空です',
    trash_empty_desc: '削除された項目はありません。',

    // コントロールセンター 3D 展開スライダー
    cc_mute: '消音',
    cc_display_brightness: 'ディスプレイと輝度',
    cc_liquid_retina: 'Liquid Retina XDR ディスプレイ',
    cc_bt_devices_count: '%d台のデバイス',
    widget_sys_normal: '通常',
    widget_sys_active: 'アクティブ',
    widget_sys_netio: 'ネットワークと I/O',

    // 言語とスタンバイ
    lang_sub_en: '英語（アメリカ）',
    lang_sub_zh: '簡体中国語',
    lang_sub_ja: '日本語',
    standby_city: 'クパティーノ',
    tictactoe_coming_soon: '近日公開',

    // システム通知
    notif_system: 'システム',
    notif_welcome: 'AliceOS へようこそ。',
    notif_safari_download: 'Safari ダウンロード',
    notif_safari_saved: '「Webpage_Archive.html」をダウンロードに保存しました',
    notif_cannot_kill_self: '自分自身のプロセスを直接終了することはできません。',
    notif_pid_terminated: 'PID %s を終了しました。',
    notif_speech_error: '音声認識 API はサポートされていません。',
    notif_pip_active: 'フローティングウインドウで「%s」を再生中',
    notif_quick_note_saved: 'デスクトップ/quick_note.txt に保存しました',
    notif_quick_note_title: 'クイックメモ',
    cc_sound_volume: 'サウンドと音量',
    cc_sound_sub: 'MacBook Pro 高忠実度オーディオ',
    cc_dark_mode: 'ダークモード',
    cc_night_shift: 'Night Shift',
    cc_true_tone: 'True Tone',
    sound_output: 'サウンド出力',
    timer_start: '開始',
    timer_pause: '一時停止',
    timer_title: 'タイマー',
    cc_appearance: '外観',
    assistant_listening: '聞き取り中...',
    assistant_thinking: '考え中...',
    assistant_reply: '「%s」と聞こえました。Alice です。',
    assistant_error: '音声の解析エラー。'
  }
};

let currentSystemLang = 'zh';
try {
  const saved = localStorage.getItem('aliceos_lang');
  if (saved && i18nDict[saved]) {
    currentSystemLang = saved;
  } else {
    localStorage.setItem('aliceos_lang', 'zh');
  }
} catch(e) {}

function t(key, fallback = '') {
  const dict = i18nDict[currentSystemLang] || i18nDict.zh || i18nDict.en;
  if (dict && dict[key] !== undefined) return dict[key];
  if (i18nDict.zh && i18nDict.zh[key] !== undefined) return i18nDict.zh[key];
  if (i18nDict.en && i18nDict.en[key] !== undefined) return i18nDict.en[key];
  return fallback || key;
}
window.t = t;

function setSystemLanguage(lang, save = true) {
  if (!i18nDict[lang]) lang = 'zh';
  currentSystemLang = lang;
  if (save) {
    try {
      localStorage.setItem('aliceos_lang', lang);
      localStorage.setItem('aliceos_lang_changed', 'true');
      if (window.aliceOS && window.aliceOS.vfs) {
        window.aliceOS.vfs.readFile('/Users/alice/settings.json').then(res => {
          let s = {};
          if (res && res.success) {
            try { s = JSON.parse(res.data); } catch(e){}
          }
          s.lang = lang;
          s._userChangedLang = true;
          window.aliceOS.vfs.writeFile('/Users/alice/settings.json', JSON.stringify(s));
        });
      }
    } catch(e) {}
  }

  // Update document language & title
  document.documentElement.lang = (lang === 'zh' ? 'zh-CN' : (lang === 'ja' ? 'ja-JP' : 'en-US'));
  document.title = (lang === 'zh' ? 'AliceOS - 桌面操作系统' : (lang === 'ja' ? 'AliceOS - デスクトップ' : 'AliceOS'));

  // Update label on menubar
  const labelMap = { en: 'EN', zh: '中', ja: '日' };
  const lbl = document.getElementById('current-lang-label');
  if (lbl) lbl.innerText = labelMap[lang] || '中';

  // Update Popover items active and checkmarks
  ['en', 'zh', 'ja'].forEach(code => {
    const item = document.getElementById(`lang-opt-${code}`);
    const check = document.getElementById(`lang-check-${code}`);
    if (item) item.classList.toggle('active', code === lang);
    if (check) check.style.display = code === lang ? 'inline' : 'none';
  });

  // Update DOM elements with data-i18n
  const dict = i18nDict[lang] || i18nDict.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerText = dict[key];
    }
  });

  // Update DOM elements with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Update DOM elements with data-i18n-title
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key]) {
      el.title = dict[key];
    }
  });

  // Update dock icon titles
  updateDockTooltips();

  // Update localized apps in Launchpad & apps array
  if (typeof updateLocalizedApps === 'function') updateLocalizedApps();

  // Update clock & date
  if (typeof updateClock === 'function') updateClock();

  // Update open windows
  if (typeof windows !== 'undefined' && windows.size > 0) {
    windows.forEach((win, pid) => {
      // 1. Update window titlebar
      const titleEl = win.querySelector('.title');
      if (titleEl) {
        const appKey = win.dataset.appKey;
        if (appKey && dict[`app_${appKey}`]) {
          titleEl.innerText = dict[`app_${appKey}`];
        }
      }
      // Update window controls tooltips
      const cClose = win.querySelector('.control.close');
      if (cClose) cClose.title = dict.win_close || 'Close';
      const cMin = win.querySelector('.control.minimize');
      if (cMin) cMin.title = dict.win_minimize || 'Minimize';
      const cZoom = win.querySelector('.control.maximize');
      if (cZoom) cZoom.title = dict.win_zoom || 'Zoom';

      // Update inner window data-i18n
      win.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (dict[k]) el.innerText = dict[k];
      });
      win.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const k = el.getAttribute('data-i18n-placeholder');
        if (dict[k]) el.placeholder = dict[k];
      });
      win.querySelectorAll('[data-i18n-title]').forEach(el => {
        const k = el.getAttribute('data-i18n-title');
        if (dict[k]) el.title = dict[k];
      });

      // 2. Call window language refresh callback if registered
      if (typeof win._onLanguageChange === 'function') {
        try { win._onLanguageChange(lang, dict); } catch(e){}
      }
    });
  }

  // Update Bluetooth status count
  const btStatusEl = document.getElementById('cc-bt-status');
  if (btStatusEl && dict.cc_bt_devices_count) {
    btStatusEl.innerText = dict.cc_bt_devices_count.replace('%d', '3');
  }

  // Update StandBy city & clock
  const sbCity = document.getElementById('sb-city');
  if (sbCity && dict.standby_city) sbCity.innerText = dict.standby_city;
  if (typeof updateStandByClock === 'function') updateStandByClock();

  // Update Sticky Notes
  document.querySelectorAll('.sticky-note').forEach(st => {
    const titleEl = st.querySelector('.sticky-title');
    if (titleEl) titleEl.innerText = dict.sticky_note || 'Note';
    const txtArea = st.querySelector('.sticky-textarea');
    if (txtArea) txtArea.placeholder = dict.sticky_placeholder || 'Write a sticky note...';
  });

  // Update Dynamic Island timer toggle button
  const islandTimerBtn = document.getElementById('island-timer-toggle-btn');
  if (islandTimerBtn && typeof islandTimerRunning !== 'undefined') {
    islandTimerBtn.innerText = islandTimerRunning ? (dict.timer_pause || 'Pause') : (dict.timer_start || 'Start');
  }

  // Update Desktop stacks toggle button in context menu
  const stacksToggleEl = document.getElementById('ctx-stacks-toggle');
  if (stacksToggleEl && typeof desktopStacksEnabled !== 'undefined') {
    stacksToggleEl.innerText = desktopStacksEnabled ? ('✓ ' + (dict.ctx_use_stacks || 'Use Stacks')) : ('🥞 ' + (dict.ctx_use_stacks || 'Use Stacks'));
  }

  // Update CC expanded slider if currently open
  const ccModal = document.getElementById('cc-slider-modal');
  if (ccModal && ccModal.style.display === 'flex' && typeof currentCCSliderType !== 'undefined') {
    openCCExpandedSlider(currentCCSliderType);
  }

  // Refresh desktop icons and stacks
  if (typeof refreshDesktop === 'function') {
    refreshDesktop();
  }

  // Close language popover and top menus if open
  closeLanguagePopover();
  if (typeof closeAllTopMenus === 'function') closeAllTopMenus();

  // Play haptic feedback
  if (typeof playVolumeFeedbackBeep === 'function') {
    playVolumeFeedbackBeep();
  }
}

function updateDockTooltips() {
  const dict = i18nDict[currentSystemLang] || i18nDict.en;
  const dockIcons = document.querySelectorAll('.dock-icon[data-app]');
  dockIcons.forEach(icon => {
    const appKey = icon.getAttribute('data-app');
    const localizedKey = `app_${appKey}`;
    if (dict[localizedKey]) {
      icon.title = dict[localizedKey];
    }
  });
  const trashIcon = document.getElementById('dock-trash');
  if (trashIcon && dict.app_trash) {
    trashIcon.title = dict.app_trash;
  }
}

function toggleLanguagePopover(e) {
  if (e) e.stopPropagation();
  const popover = document.getElementById('lang-popover');
  if (!popover) return;
  const isVisible = popover.style.display === 'flex';
  if (isVisible) {
    closeLanguagePopover();
  } else {
    // Close other popovers
    const soundPop = document.getElementById('sound-popover');
    if (soundPop) soundPop.style.display = 'none';
    const batPop = document.getElementById('battery-popover');
    if (batPop) batPop.style.display = 'none';
    const appleMenu = document.getElementById('apple-menu');
    if (appleMenu) appleMenu.style.display = 'none';
    const cc = document.getElementById('control-center');
    if (cc) cc.style.display = 'none';

    popover.style.display = 'flex';
    setTimeout(() => {
      popover.style.opacity = '1';
      popover.style.transform = 'translateY(0) scale(1)';
    }, 10);
    if (typeof playVolumeFeedbackBeep === 'function') playVolumeFeedbackBeep();
  }
}

function closeLanguagePopover() {
  const popover = document.getElementById('lang-popover');
  if (!popover) return;
  popover.style.opacity = '0';
  popover.style.transform = 'translateY(-8px) scale(0.98)';
  setTimeout(() => {
    popover.style.display = 'none';
  }, 180);
}

document.addEventListener('click', (e) => {
  const popover = document.getElementById('lang-popover');
  if (popover && popover.style.display === 'flex' && !e.target.closest('#lang-btn') && !e.target.closest('#lang-popover')) {
    closeLanguagePopover();
  }
});

function openLanguageSettings() {
  closeLanguagePopover();
  launchSettings().then(() => {
    setTimeout(() => {
      const navItem = document.querySelector('.ventura-nav-item[data-tab="language"]');
      if (navItem) navItem.click();
    }, 120);
  });
}

window.setSystemLanguage = setSystemLanguage;
window.toggleLanguagePopover = toggleLanguagePopover;
window.closeLanguagePopover = closeLanguagePopover;
window.openLanguageSettings = openLanguageSettings;

// Initialize language on startup
function initSystemLanguage() {
  let langToUse = currentSystemLang || 'zh';
  try {
    const saved = localStorage.getItem('aliceos_lang');
    if (saved && i18nDict[saved]) langToUse = saved;
  } catch(e) {}

  setSystemLanguage(langToUse, false);

  if (window.aliceOS && window.aliceOS.vfs) {
    window.aliceOS.vfs.readFile('/Users/alice/settings.json').then(res => {
      if (res && res.success) {
        try {
          const s = JSON.parse(res.data);
          if (s && s.lang && i18nDict[s.lang] && s.lang !== currentSystemLang) {
            setSystemLanguage(s.lang, false);
          }
        } catch(e) {}
      }
    }).catch(() => {});
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSystemLanguage);
} else {
  initSystemLanguage();
}

// Clock update forwarder (delegates to updateClock)
function updateTime() {
  if (typeof updateClock === 'function') updateClock();
}

// Window Manager State
let zIndexCounter = 100;
const windows = new Map(); // pid -> window element

window.aliceOS = window.aliceOS || {};
window.aliceOS.stageManagerEnabled = false;
let currentStageActivePid = null;
let stagePeeked = false;

function toggleStageManager(forceState) {
  const newState = forceState !== undefined ? forceState : !window.aliceOS.stageManagerEnabled;
  window.aliceOS.stageManagerEnabled = newState;
  
  const ccBtn = document.getElementById('cc-stage-manager-btn');
  const shelf = document.getElementById('stage-manager-shelf');
  
  if (ccBtn) {
    if (newState) {
      ccBtn.style.background = '#007aff';
      ccBtn.style.color = 'white';
      ccBtn.style.boxShadow = '0 0 15px rgba(0,122,255,0.6)';
    } else {
      ccBtn.style.background = 'rgba(0,0,0,0.2)';
      ccBtn.style.color = 'white';
      ccBtn.style.boxShadow = 'none';
    }
  }

  if (newState) {
    if (shelf) {
      shelf.style.display = 'flex';
      shelf.style.opacity = '1';
    }
    updateStageManager();
    showNotification(t('notif_sm_title', 'Stage Manager'), t('notif_sm_organizing', 'Organizing windows into stage flow'));
  } else {
    if (shelf) {
      shelf.style.opacity = '0';
      setTimeout(() => { shelf.style.display = 'none'; }, 300);
    }
    // Restore all windows to standard free layout
    windows.forEach(win => {
      win.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      if (win.dataset.stageOrigLeft) {
        win.style.left = win.dataset.stageOrigLeft;
        win.style.top = win.dataset.stageOrigTop;
      }
      win.style.transform = 'scale(1) translate(0, 0)';
      win.style.opacity = '1';
      win.style.pointerEvents = 'auto';
    });
    currentStageActivePid = null;
  }
}

function updateStageManager(targetWin) {
  if (!window.aliceOS || !window.aliceOS.stageManagerEnabled) return;
  const allWindows = Array.from(windows.values()).filter(w => !w.dataset.isMinimized);
  const shelf = document.getElementById('stage-manager-shelf');
  
  if (allWindows.length === 0) {
    if (shelf) shelf.innerHTML = '';
    currentStageActivePid = null;
    return;
  }

  let activeWin = targetWin;
  if (!activeWin) {
    let maxZ = -1;
    allWindows.forEach(w => {
      const z = parseInt(w.style.zIndex || 0);
      if (z > maxZ) {
        maxZ = z;
        activeWin = w;
      }
    });
  }
  if (!activeWin && allWindows.length > 0) activeWin = allWindows[0];

  currentStageActivePid = activeWin ? activeWin.id : null;
  stagePeeked = false;

  // Center Stage Active Window
  if (activeWin) {
    if (!activeWin.dataset.stageOrigLeft) {
      activeWin.dataset.stageOrigLeft = activeWin.style.left;
      activeWin.dataset.stageOrigTop = activeWin.style.top;
    }
    activeWin.style.transition = 'all 0.4s cubic-bezier(0.2, 0.9, 0.3, 1.1)';
    activeWin.style.left = '180px';
    activeWin.style.top = '60px';
    activeWin.style.transform = 'scale(1) translate(0, 0)';
    activeWin.style.opacity = '1';
    activeWin.style.pointerEvents = 'auto';
  }

  // Render Background Windows on Left Shelf
  if (!shelf) return;
  shelf.innerHTML = '';

  allWindows.forEach(win => {
    if (win === activeWin) return;

    if (!win.dataset.stageOrigLeft) {
      win.dataset.stageOrigLeft = win.style.left;
      win.dataset.stageOrigTop = win.style.top;
    }

    // Hide DOM element of background window
    win.style.transition = 'all 0.4s cubic-bezier(0.2, 0.9, 0.3, 1)';
    win.style.transform = 'translate(-220px, 0) scale(0.5)';
    win.style.opacity = '0';
    win.style.pointerEvents = 'none';

    // Create Stage Thumbnail Card on Left Shelf
    const card = document.createElement('div');
    card.className = 'stage-card';
    const title = win.dataset.title || win.querySelector('.title')?.innerText || 'App';
    const icon = win.dataset.icon || '🪟';

    card.innerHTML = `
      <div class="stage-card-header">
        <span>${icon}</span>
        <span style="overflow:hidden;text-overflow:ellipsis;">${title}</span>
      </div>
      <div class="stage-card-preview">${icon}</div>
    `;

    card.onclick = (e) => {
      e.stopPropagation();
      focusWindow(win);
      updateStageManager(win);
    };

    shelf.appendChild(card);
  });
}

function focusWindow(win) {
  zIndexCounter++;
  win.style.zIndex = zIndexCounter;

  // Active / Inactive window depth & traffic light state
  document.querySelectorAll('.window').forEach(w => {
    if (w === win) {
      w.classList.add('is-active');
      w.classList.remove('is-inactive');
    } else {
      w.classList.remove('is-active');
      w.classList.add('is-inactive');
    }
  });
  
  // macOS Sonoma: Dim widgets when a window focuses
  const widgets = document.getElementById('desktop-widgets');
  if (widgets) {
    widgets.style.opacity = '0.3';
    widgets.style.filter = 'grayscale(100%)';
  }

  // macOS Stage Manager support
  if (window.aliceOS && window.aliceOS.stageManagerEnabled) {
    updateStageManager(win);
  }
}

// Restore widgets & handle Stage Manager desktop peek
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('desktop-grid');
  const desktop = document.getElementById('desktop');

  const handleDesktopClick = (e) => {
    if (e.target === grid || e.target === desktop) {
      // Mark all windows inactive on desktop click
      document.querySelectorAll('.window').forEach(w => {
        w.classList.remove('is-active');
        w.classList.add('is-inactive');
      });

      const widgets = document.getElementById('desktop-widgets');
      if (widgets) {
        widgets.style.opacity = '1';
        widgets.style.filter = 'grayscale(0%)';
      }

      // Stage Manager Desktop Peek
      if (window.aliceOS && window.aliceOS.stageManagerEnabled && currentStageActivePid) {
        const activeWin = document.getElementById(currentStageActivePid);
        if (activeWin) {
          stagePeeked = !stagePeeked;
          activeWin.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.9, 0.3, 1)';
          if (stagePeeked) {
            activeWin.style.transform = 'translateX(calc(100vw - 230px)) scale(0.95)';
          } else {
            activeWin.style.transform = 'translateX(0) scale(1)';
          }
        }
      }
    }
  };

  if (grid) grid.addEventListener('mousedown', handleDesktopClick);
  if (desktop) desktop.addEventListener('mousedown', handleDesktopClick);
});

function createWindow(pid, title, contentHtml, explicitAppKey = null) {
  const desktop = document.getElementById('desktop');
  
  let appKey = explicitAppKey;
  if (!appKey) {
    if (title.includes('Finder') || title === '访达') appKey = 'finder';
    else if (title.includes('Terminal') || title.includes('zsh') || title.includes('终端')) appKey = 'terminal';
    else if (title.includes('Notes') || title.includes('备忘录') || title.includes('メモ')) appKey = 'notes';
    else if (title.includes('Calculator') || title.includes('计算器') || title.includes('計算機')) appKey = 'calculator';
    else if (title.includes('Safari') || title.includes('Browser')) appKey = 'browser';
    else if (title.includes('Music') || title.includes('音乐') || title.includes('ミュージック')) appKey = 'music';
    else if (title.includes('Camera') || title.includes('Photo') || title.includes('相机')) appKey = 'camera';
    else if (title.includes('Paint') || title.includes('画板') || title.includes('ペイント')) appKey = 'paint';
    else if (title.includes('Snake') || title.includes('贪吃蛇')) appKey = 'snake';
    else if (title.includes('Maps') || title.includes('地图') || title.includes('マップ')) appKey = 'maps';
    else if (title.includes('Video') || title.includes('视频') || title.includes('ビデオ')) appKey = 'video';
    else if (title.includes('Radar') || title.includes('雷达')) appKey = 'radar';
    else if (title.includes('Settings') || title.includes('设置') || title.includes('設定')) appKey = 'settings';
    else if (title.includes('Activity') || title.includes('Monitor') || title.includes('监视器') || title.includes('モニタ')) appKey = 'activity';
    else if (title.includes('Weather') || title.includes('天气') || title.includes('天気')) appKey = 'weather';
    else if (title.includes('Store') || title.includes('商店')) appKey = 'store';
    else if (title.includes('IDE') || title.includes('Studio')) appKey = 'ide';
    else if (title.includes('Flappy') || title.includes('小鸟') || title.includes('フラッピー')) appKey = 'flappy';
    else if (title.includes('Synth') || title.includes('合成器') || title.includes('シンセ')) appKey = 'synth';
    else if (title.includes('Universe') || title.includes('宇宙')) appKey = 'universe';
    else if (title.includes('Tic') || title.includes('棋') || title.includes('目並べ')) appKey = 'tictactoe';
    else if (title.includes('Logs') || title.includes('日志') || title.includes('ログ')) appKey = 'syslogs';
    else if (title.includes('iPhone')) appKey = 'iphonemirror';
    else if (title.includes('Mirror') || title.includes('镜像') || title.includes('ミラー')) appKey = 'hostscreen';
    else if (title.includes('LAN') || title.includes('Server') || title.includes('门户') || title.includes('サーバー')) appKey = 'webhost';
    else if (title.includes('Image') || title.includes('Gallery') || title.includes('画廊') || title.includes('ビューア')) appKey = 'gallery';
    else if (title.includes('About') || title.includes('关于') || title.includes('このMac')) appKey = 'hostinfo';
  }

  const localizedTitle = appKey && i18nDict[currentSystemLang] && i18nDict[currentSystemLang][`app_${appKey}`]
    ? i18nDict[currentSystemLang][`app_${appKey}`]
    : title;

  const win = document.createElement('div');
  win.className = 'window';
  win.id = `win-${pid}`;
  win.style.top = `${100 + (windows.size * 30)}px`;
  win.style.left = `${100 + (windows.size * 30)}px`;
  
  win.innerHTML = `
    <div class="titlebar">
      <div class="window-controls">
        <div class="control close" title="${t('win_close', 'Close')}"></div>
        <div class="control minimize" title="${t('win_minimize', 'Minimize')}"></div>
        <div class="control maximize" title="${t('win_zoom', 'Zoom')}"></div>
      </div>
      <div class="title">${localizedTitle}</div>
    </div>
    <div class="window-content">
      ${contentHtml}
    </div>
  `;
  win.dataset.title = localizedTitle;
  win.dataset.pid = pid;
  if (appKey) win.dataset.appKey = appKey;
  let appIcon = '🪟';
  if (title.includes('Finder')) appIcon = '📁';
  else if (title.includes('Terminal')) appIcon = '＞_';
  else if (title.includes('Notes')) appIcon = '📝';
  else if (title.includes('Calculator')) appIcon = '🧮';
  else if (title.includes('Browser') || title.includes('Safari')) appIcon = '🌐';
  else if (title.includes('Music')) appIcon = '🎵';
  else if (title.includes('Photo') || title.includes('Camera')) appIcon = '📷';
  else if (title.includes('Paint')) appIcon = '🎨';
  else if (title.includes('Snake')) appIcon = '🐍';
  else if (title.includes('Maps')) appIcon = '🗺️';
  else if (title.includes('Video')) appIcon = '🎬';
  else if (title.includes('Radar')) appIcon = '👽';
  else if (title.includes('Settings')) appIcon = '⚙️';
  else if (title.includes('Monitor') || title.includes('Activity')) appIcon = '📈';
  else if (title.includes('Weather')) appIcon = '🌦️';
  else if (title.includes('Store')) appIcon = '🛍️';
  else if (title.includes('IDE')) appIcon = '💻';
  else if (title.includes('iPhone')) appIcon = '📱';
  win.dataset.icon = appIcon;

  // macOS Spring Spawn Animation
  win.style.transform = 'scale(0.8)';
  win.style.opacity = '0';
  win.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease';
  
  desktop.appendChild(win);
  windows.set(pid, win);
  focusWindow(win);
  
  // Trigger reflow then spring
  requestAnimationFrame(() => {
    win.style.transform = 'scale(1)';
    win.style.opacity = '1';
  });
  
  setTimeout(() => {
    win.style.transition = 'none'; // clear transition so dragging doesn't lag
  }, 500);
  
  if (window.aliceOS && window.aliceOS.notifyIsland) {
    window.aliceOS.notifyIsland('🚀', title, 100);
  }

  // Setup dragging
  const titlebar = win.querySelector('.titlebar');
  let isDragging = false;
  let offsetX, offsetY;

  titlebar.addEventListener('mousedown', (e) => {
    focusWindow(win);
    if (e.target.classList.contains('control')) return;
    isDragging = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      // Remove any previously snapped state styles
      if (win.dataset.snapped) {
        win.style.width = '600px';
        win.style.height = '400px';
        win.style.transition = 'none';
        delete win.dataset.snapped;
      }
      
      let rawLeft = e.clientX - offsetX;
      let rawTop = e.clientY - offsetY;

      // macOS Elastic Rubber-Band Damping at Top Menubar boundary (36px)
      if (rawTop < 36) {
        const overflow = 36 - rawTop;
        rawTop = 36 - Math.log(1 + overflow) * 7;
      }
      
      win.style.left = rawLeft + 'px';
      win.style.top = rawTop + 'px';
      
      // macOS Sequoia Magnetic Window Edge & Corner Snapping
      const snapPreview = document.getElementById('window-snap-preview');
      const edgeThreshold = 25;
      const cornerThreshold = 55;
      const wW = window.innerWidth;
      const wH = window.innerHeight;
      
      const isLeftEdge = e.clientX <= edgeThreshold;
      const isRightEdge = e.clientX >= wW - edgeThreshold;
      const isTopEdge = e.clientY <= edgeThreshold + 30;
      const isBottomEdge = e.clientY >= wH - 90;

      const isTopLeft = (e.clientX <= cornerThreshold && e.clientY <= cornerThreshold + 30);
      const isTopRight = (e.clientX >= wW - cornerThreshold && e.clientY <= cornerThreshold + 30);
      const isBottomLeft = (e.clientX <= cornerThreshold && isBottomEdge);
      const isBottomRight = (e.clientX >= wW - cornerThreshold && isBottomEdge);

      if (snapPreview) {
        if (isTopLeft) {
          snapPreview.style.display = 'block';
          snapPreview.style.left = '8px';
          snapPreview.style.top = '36px';
          snapPreview.style.width = 'calc(50vw - 12px)';
          snapPreview.style.height = 'calc(50vh - 66px)';
          snapPreview.style.opacity = '1';
        } else if (isTopRight) {
          snapPreview.style.display = 'block';
          snapPreview.style.left = 'calc(50vw + 4px)';
          snapPreview.style.top = '36px';
          snapPreview.style.width = 'calc(50vw - 12px)';
          snapPreview.style.height = 'calc(50vh - 66px)';
          snapPreview.style.opacity = '1';
        } else if (isBottomLeft) {
          snapPreview.style.display = 'block';
          snapPreview.style.left = '8px';
          snapPreview.style.top = 'calc(50vh - 22px)';
          snapPreview.style.width = 'calc(50vw - 12px)';
          snapPreview.style.height = 'calc(50vh - 72px)';
          snapPreview.style.opacity = '1';
        } else if (isBottomRight) {
          snapPreview.style.display = 'block';
          snapPreview.style.left = 'calc(50vw + 4px)';
          snapPreview.style.top = 'calc(50vh - 22px)';
          snapPreview.style.width = 'calc(50vw - 12px)';
          snapPreview.style.height = 'calc(50vh - 72px)';
          snapPreview.style.opacity = '1';
        } else if (isLeftEdge) {
          snapPreview.style.display = 'block';
          snapPreview.style.left = '8px';
          snapPreview.style.top = '36px';
          snapPreview.style.width = 'calc(50vw - 12px)';
          snapPreview.style.height = 'calc(100vh - 126px)';
          snapPreview.style.opacity = '1';
        } else if (isRightEdge) {
          snapPreview.style.display = 'block';
          snapPreview.style.left = 'calc(50vw + 4px)';
          snapPreview.style.top = '36px';
          snapPreview.style.width = 'calc(50vw - 12px)';
          snapPreview.style.height = 'calc(100vh - 126px)';
          snapPreview.style.opacity = '1';
        } else if (isTopEdge) {
          snapPreview.style.display = 'block';
          snapPreview.style.left = '8px';
          snapPreview.style.top = '36px';
          snapPreview.style.width = 'calc(100vw - 16px)';
          snapPreview.style.height = 'calc(100vh - 126px)';
          snapPreview.style.opacity = '1';
        } else {
          snapPreview.style.opacity = '0';
          setTimeout(() => {
            if (snapPreview.style.opacity === '0') snapPreview.style.display = 'none';
          }, 200);
        }
      }
    }
  });

  document.addEventListener('mouseup', (e) => {
    if (isDragging) {
      isDragging = false;
      
      const snapPreview = document.getElementById('window-snap-preview');
      if (snapPreview) {
        snapPreview.style.opacity = '0';
        setTimeout(() => snapPreview.style.display = 'none', 200);
      }

      // Snap Logic (macOS Sequoia Tile Snap: Halves & Quarters)
      const edgeThreshold = 25;
      const cornerThreshold = 55;
      const wW = window.innerWidth;
      const wH = window.innerHeight;
      
      const isLeftEdge = e.clientX <= edgeThreshold;
      const isRightEdge = e.clientX >= wW - edgeThreshold;
      const isTopEdge = e.clientY <= edgeThreshold + 30;
      const isBottomEdge = e.clientY >= wH - 90;

      const isTopLeft = (e.clientX <= cornerThreshold && e.clientY <= cornerThreshold + 30);
      const isTopRight = (e.clientX >= wW - cornerThreshold && e.clientY <= cornerThreshold + 30);
      const isBottomLeft = (e.clientX <= cornerThreshold && isBottomEdge);
      const isBottomRight = (e.clientX >= wW - cornerThreshold && isBottomEdge);

      win.style.transition = 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
      
      if (isTopLeft) {
        win.style.left = '8px';
        win.style.top = '36px';
        win.style.width = 'calc(50vw - 12px)';
        win.style.height = 'calc(50vh - 66px)';
        win.dataset.snapped = 'top-left';
      } else if (isTopRight) {
        win.style.left = 'calc(50vw + 4px)';
        win.style.top = '36px';
        win.style.width = 'calc(50vw - 12px)';
        win.style.height = 'calc(50vh - 66px)';
        win.dataset.snapped = 'top-right';
      } else if (isBottomLeft) {
        win.style.left = '8px';
        win.style.top = 'calc(50vh - 22px)';
        win.style.width = 'calc(50vw - 12px)';
        win.style.height = 'calc(50vh - 72px)';
        win.dataset.snapped = 'bottom-left';
      } else if (isBottomRight) {
        win.style.left = 'calc(50vw + 4px)';
        win.style.top = 'calc(50vh - 22px)';
        win.style.width = 'calc(50vw - 12px)';
        win.style.height = 'calc(50vh - 72px)';
        win.dataset.snapped = 'bottom-right';
      } else if (isLeftEdge) {
        win.style.left = '8px';
        win.style.top = '36px';
        win.style.width = 'calc(50vw - 12px)';
        win.style.height = 'calc(100vh - 126px)';
        win.dataset.snapped = 'left';
      } else if (isRightEdge) {
        win.style.left = 'calc(50vw + 4px)';
        win.style.top = '36px';
        win.style.width = 'calc(50vw - 12px)';
        win.style.height = 'calc(100vh - 126px)';
        win.dataset.snapped = 'right';
      } else if (isTopEdge) {
        win.style.left = '8px';
        win.style.top = '36px';
        win.style.width = 'calc(100vw - 16px)';
        win.style.height = 'calc(100vh - 126px)';
        win.dataset.snapped = 'top';
      } else {
        // macOS Elastic Rubber-Band Boundary Rebound
        let boundedTop = win.offsetTop;
        let boundedLeft = win.offsetLeft;
        let needsSpring = false;

        // Ensure title bar is safely below menu bar (36px)
        if (boundedTop < 36) {
          boundedTop = 36;
          needsSpring = true;
        }
        // Ensure window does not sink below dock
        if (boundedTop > window.innerHeight - 100) {
          boundedTop = window.innerHeight - 100;
          needsSpring = true;
        }
        // Ensure window title bar remains accessible horizontally
        if (boundedLeft < -win.offsetWidth + 120) {
          boundedLeft = -win.offsetWidth + 120;
          needsSpring = true;
        } else if (boundedLeft > window.innerWidth - 120) {
          boundedLeft = window.innerWidth - 120;
          needsSpring = true;
        }

        if (needsSpring) {
          win.style.transition = 'all 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
          win.style.top = boundedTop + 'px';
          win.style.left = boundedLeft + 'px';
        }
      }
      
      setTimeout(() => { 
        win.style.transition = ''; 
        // Update mission control orig state
        win.dataset.origTop = win.style.top;
        win.dataset.origLeft = win.style.left;
        win.dataset.origTransform = win.style.transform;
      }, 380);
    }
  });

  win.addEventListener('mousedown', () => focusWindow(win));

  // Controls
  const closeBtn = win.querySelector('.close');
  closeBtn.addEventListener('click', async () => {
    await window.aliceOS.pm.kill(pid);
    win.style.transition = 'all 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53)';
    win.style.transform = 'scale(0.8)';
    win.style.opacity = '0';
    setTimeout(() => {
      win.remove();
      windows.delete(pid);
      if (window.aliceOS && window.aliceOS.stageManagerEnabled) {
        updateStageManager();
      }
    }, 300);
  });

  const minBtn = win.querySelector('.minimize');
  minBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    win.dataset.isMinimized = 'true';
    if (window.aliceOS && window.aliceOS.stageManagerEnabled) {
      updateStageManager();
    }
    
    // Save original bounds for restore
    win.dataset.preMinTop = win.style.top;
    win.dataset.preMinLeft = win.style.left;
    win.dataset.preMinTransform = win.style.transform;
    
    // Calculate target dock position for Genie suction
    const dock = document.getElementById('dock-ui');
    const targetIcon = appKey ? document.querySelector(`.dock-icon[data-app="${appKey}"]`) : null;
    let targetX = window.innerWidth / 2;
    if (targetIcon) {
      const rect = targetIcon.getBoundingClientRect();
      targetX = rect.left + rect.width / 2;
      targetIcon.classList.remove('dock-bounce');
      void targetIcon.offsetWidth;
      targetIcon.classList.add('dock-bounce');
      setTimeout(() => targetIcon.classList.remove('dock-bounce'), 800);
    }

    const winRect = win.getBoundingClientRect();
    const winCenterX = winRect.left + winRect.width / 2;
    const deltaX = targetX - winCenterX;
    const deltaY = window.innerHeight - winRect.top - 65;

    // Play subtle audio pop cue
    if (window.appleAudio) window.appleAudio.playPop();

    // Execute macOS Genie Fluid Morphing Transition
    win.classList.remove('window-genie-restoring');
    win.style.transition = 'transform 0.44s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.36s ease, filter 0.38s ease';
    win.style.transformOrigin = 'bottom center';
    win.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(0.04, 0.02)`;
    win.style.opacity = '0';
    win.style.filter = 'blur(4px) saturate(1.3)';
    
    setTimeout(() => {
      win.style.display = 'none';
      win.style.filter = '';
      
      // If no dedicated dock icon exists for this app, add dynamic mini icon
      if (!targetIcon && dock) {
        const minIcon = document.createElement('div');
        minIcon.className = 'dock-icon';
        minIcon.id = `dock-min-${pid}`;
        minIcon.innerHTML = `<div class="icon-placeholder" style="background:#333;font-size:24px;">🗔</div><div class="dock-dot" style="background:#ffbd2e;"></div>`;
        minIcon.onclick = () => restoreGenieWindow(win, minIcon);
        dock.appendChild(minIcon);
      }
    }, 440);
  });
  
  // Maximize logic helper
  function toggleMaximizeWindow(targetWin) {
    if (targetWin.dataset.maximized) {
      targetWin.style.transition = 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
      targetWin.style.top = targetWin.dataset.preMaxTop;
      targetWin.style.left = targetWin.dataset.preMaxLeft;
      targetWin.style.width = targetWin.dataset.preMaxWidth;
      targetWin.style.height = targetWin.dataset.preMaxHeight;
      delete targetWin.dataset.maximized;
      setTimeout(() => targetWin.style.transition = 'none', 350);
    } else {
      targetWin.dataset.preMaxTop = targetWin.style.top;
      targetWin.dataset.preMaxLeft = targetWin.style.left;
      targetWin.dataset.preMaxWidth = targetWin.style.width || '600px';
      targetWin.dataset.preMaxHeight = targetWin.style.height || '400px';
      
      targetWin.style.transition = 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
      targetWin.style.top = '36px';
      targetWin.style.left = '8px';
      targetWin.style.width = 'calc(100vw - 16px)';
      targetWin.style.height = 'calc(100vh - 126px)';
      targetWin.dataset.maximized = 'true';
      setTimeout(() => targetWin.style.transition = 'none', 350);
    }
  }

  // Green traffic light button (Tile menu hover & click maximize)
  const maxBtn = win.querySelector('.maximize');
  let tileTimer = null;
  if (maxBtn) {
    maxBtn.addEventListener('mouseenter', () => {
      tileTimer = setTimeout(() => {
        showWindowTilePopover(win, maxBtn);
      }, 260);
    });
    maxBtn.addEventListener('mouseleave', () => {
      if (tileTimer) clearTimeout(tileTimer);
      scheduleHideTilePopover();
    });
    maxBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      hideWindowTilePopover();
      toggleMaximizeWindow(win);
    });
  }

  // Double click titlebar also toggles maximize
  titlebar.addEventListener('dblclick', () => {
    toggleMaximizeWindow(win);
  });

  return win;
}

// macOS Sequoia 15.x — iPhone Mirroring (iPhone 镜像互联)
async function launchIPhoneMirroring() {
  if (window.aliceOS && window.aliceOS.setDockBadge) window.aliceOS.setDockBadge('iphonemirror', 0);
  const res = await window.aliceOS.pm.spawn('iphonemirror');
  if (!res.success) return;
  const pid = res.data.pid;
  
  const win = createWindow(pid, t('app_iphonemirror', 'iPhone Mirroring'), `
    <div class="iphone-screen" id="iphone-screen-${pid}">
      <!-- Dynamic Island Floating Capsule -->
      <div class="iphone-dynamic-island" id="iphone-island-${pid}" title="Dynamic Island">
        <div class="island-compact-left">
          <span style="font-size:11px;">🎵</span>
          <span style="font-size:10px;opacity:0.9;" id="island-compact-title-${pid}">Alice Radio</span>
        </div>
        <div class="island-compact-right">
          <div style="display:flex;align-items:center;gap:2px;">
            <div style="width:2px;height:8px;background:#34c759;border-radius:1px;"></div>
            <div style="width:2px;height:12px;background:#34c759;border-radius:1px;"></div>
            <div style="width:2px;height:6px;background:#34c759;border-radius:1px;"></div>
          </div>
        </div>
        <!-- Expanded Island View -->
        <div class="island-expanded-view" id="island-expanded-${pid}">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:36px;height:36px;background:linear-gradient(135deg,#ff2d55,#ff9500);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;">🎵</div>
            <div>
              <div style="font-size:12px;font-weight:700;color:#fff;" id="island-exp-song-${pid}">Daylight</div>
              <div style="font-size:10px;color:rgba(255,255,255,0.7);">Alice — iOS 18 Audio Engine</div>
            </div>
          </div>
          <div style="font-size:11px;background:#34c759;color:#000;padding:2px 8px;border-radius:10px;font-weight:700;">PLAYING</div>
        </div>
      </div>

      <!-- iOS Status Bar -->
      <div class="iphone-status-bar">
        <div class="iphone-status-time" id="iphone-clock-${pid}">09:41</div>
        <div class="iphone-status-icons">
          <span>5G</span>
          <span>📶</span>
          <div class="iphone-battery-pill">
            <div class="iphone-battery-fill"></div>
          </div>
        </div>
      </div>

      <!-- Home Screen -->
      <div class="iphone-home-screen" id="iphone-home-${pid}">
        <!-- Top Calendar / Weather Widget -->
        <div class="iphone-top-widget">
          <div class="iphone-widget-date" id="iphone-widget-date-${pid}">TUESDAY, SEP 14</div>
          <div class="iphone-widget-headline" id="iphone-widget-headline-${pid}">Cupertino 72°</div>
          <div class="iphone-widget-sub">Mostly Sunny • AliceOS Connected</div>
        </div>

        <!-- Apps Grid (4x2 grid on home) -->
        <div class="iphone-app-grid">
          <!-- Messages -->
          <div class="iphone-app-item" id="iphone-icon-messages-${pid}">
            <div class="iphone-app-icon" style="background: linear-gradient(180deg, #34c759, #28a745);">
              <span>💬</span>
            </div>
            <div class="iphone-app-name">信息</div>
          </div>

          <!-- Photos -->
          <div class="iphone-app-item" id="iphone-icon-photos-${pid}">
            <div class="iphone-app-icon" style="background: linear-gradient(180deg, #ffffff, #e5e5ea); color:#ff2d55;">
              <span>🖼️</span>
            </div>
            <div class="iphone-app-name">照片</div>
          </div>

          <!-- Stopwatch / Clock -->
          <div class="iphone-app-item" id="iphone-icon-clock-${pid}">
            <div class="iphone-app-icon" style="background: #000; border: 1px solid rgba(255,255,255,0.2);">
              <span>⏱️</span>
            </div>
            <div class="iphone-app-name">时钟</div>
          </div>

          <!-- Settings -->
          <div class="iphone-app-item" id="iphone-icon-settings-${pid}">
            <div class="iphone-app-icon" style="background: linear-gradient(180deg, #8e8e93, #636366);">
              <span>⚙️</span>
            </div>
            <div class="iphone-app-name">设置</div>
          </div>

          <!-- Music -->
          <div class="iphone-app-item" id="iphone-icon-music-${pid}">
            <div class="iphone-app-icon" style="background: linear-gradient(180deg, #fc3d39, #e02420);">
              <span>🎵</span>
            </div>
            <div class="iphone-app-name">音乐</div>
          </div>

          <!-- Safari -->
          <div class="iphone-app-item" id="iphone-icon-safari-${pid}">
            <div class="iphone-app-icon" style="background: linear-gradient(180deg, #ffffff, #e5e5ea);">
              <span>🧭</span>
            </div>
            <div class="iphone-app-name">Safari</div>
          </div>

          <!-- Notes -->
          <div class="iphone-app-item" id="iphone-icon-notes-${pid}">
            <div class="iphone-app-icon" style="background: linear-gradient(180deg, #ffd60a, #ffb300);">
              <span>📝</span>
            </div>
            <div class="iphone-app-name">备忘录</div>
          </div>

          <!-- Camera -->
          <div class="iphone-app-item" id="iphone-icon-camera-${pid}">
            <div class="iphone-app-icon" style="background: linear-gradient(180deg, #8e8e93, #48484a);">
              <span>📷</span>
            </div>
            <div class="iphone-app-name">相机</div>
          </div>
        </div>

        <!-- Bottom iOS Dock -->
        <div class="iphone-bottom-dock">
          <div class="iphone-app-item" id="iphone-dock-phone-${pid}">
            <div class="iphone-app-icon" style="width:48px;height:48px;background:linear-gradient(180deg,#34c759,#248a3d);font-size:22px;">📞</div>
          </div>
          <div class="iphone-app-item" id="iphone-dock-messages-${pid}">
            <div class="iphone-app-icon" style="width:48px;height:48px;background:linear-gradient(180deg,#34c759,#28a745);font-size:22px;">💬</div>
          </div>
          <div class="iphone-app-item" id="iphone-dock-safari-${pid}">
            <div class="iphone-app-icon" style="width:48px;height:48px;background:linear-gradient(180deg,#ffffff,#e5e5ea);font-size:22px;">🧭</div>
          </div>
          <div class="iphone-app-item" id="iphone-dock-music-${pid}">
            <div class="iphone-app-icon" style="width:48px;height:48px;background:linear-gradient(180deg,#fc3d39,#e02420);font-size:22px;">🎵</div>
          </div>
        </div>
      </div>

      <!-- Sub-App: iMessage -->
      <div class="iphone-app-view" id="iphone-view-messages-${pid}">
        <div class="iphone-app-header">
          <button class="iphone-back-btn" id="msg-back-${pid}">‹ 信息</button>
          <div class="iphone-app-title">Alice 🌸</div>
          <div style="font-size:14px;color:#007aff;cursor:pointer;">ⓘ</div>
        </div>
        <div class="iphone-app-body" style="padding-bottom:10px;">
          <div class="imessage-chat" id="imessage-list-${pid}">
            <div class="imessage-bubble alice">
              嗨！我是 Alice 👋<br>已通过 <b>macOS Sequoia iPhone 镜像</b> 与你的 Mac 建立无线高速互联！
            </div>
            <div class="imessage-bubble alice">
              你可以向我发送任意消息，或在手机里使用秒表、查看相册、控制音乐。
            </div>
          </div>
        </div>
        <div class="imessage-input-bar">
          <input type="text" class="imessage-input" id="imessage-in-${pid}" placeholder="iMessage" autocomplete="off">
          <button class="imessage-send-btn" id="imessage-send-${pid}">↑</button>
        </div>
      </div>

      <!-- Sub-App: Photos -->
      <div class="iphone-app-view" id="iphone-view-photos-${pid}">
        <div class="iphone-app-header">
          <button class="iphone-back-btn" id="photos-back-${pid}">‹ 图库</button>
          <div class="iphone-app-title">精选照片</div>
          <div style="font-size:14px;color:#007aff;cursor:pointer;">选择</div>
        </div>
        <div class="iphone-app-body">
          <div style="font-size:11px;color:#8e8e93;margin-bottom:8px;font-weight:600;">今天</div>
          <div class="photos-grid" id="photos-grid-${pid}">
            <div class="photo-thumb" data-src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&q=70" alt="Wallpaper">
            </div>
            <div class="photo-thumb" data-src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&q=80">
              <img src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=300&q=70" alt="Wallpaper">
            </div>
            <div class="photo-thumb" data-src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80">
              <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300&q=70" alt="Wallpaper">
            </div>
            <div class="photo-thumb" data-src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&q=70" alt="Beach">
            </div>
            <div class="photo-thumb" data-src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80">
              <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&q=70" alt="Mountains">
            </div>
            <div class="photo-thumb" data-src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&q=70" alt="Lake">
            </div>
          </div>
          <div id="photo-modal-${pid}" style="display:none;position:absolute;top:0;left:0;right:0;bottom:0;background:#000;z-index:100;align-items:center;justify-content:center;cursor:pointer;">
            <img id="photo-modal-img-${pid}" src="" style="width:100%;height:100%;object-fit:contain;">
            <button style="position:absolute;top:40px;right:16px;background:rgba(0,0,0,0.6);border:none;color:white;width:30px;height:30px;border-radius:50%;cursor:pointer;font-size:14px;" id="photo-modal-close-${pid}">✕</button>
          </div>
        </div>
      </div>

      <!-- Sub-App: Stopwatch (秒表) -->
      <div class="iphone-app-view" id="iphone-view-stopwatch-${pid}">
        <div class="iphone-app-header">
          <button class="iphone-back-btn" id="sw-back-${pid}">‹ 时钟</button>
          <div class="iphone-app-title">秒表</div>
          <div style="font-size:14px;color:#007aff;cursor:pointer;">毫秒</div>
        </div>
        <div class="iphone-app-body">
          <div class="stopwatch-display" id="sw-display-${pid}">00:00.00</div>
          <div class="stopwatch-controls">
            <button class="sw-btn sw-btn-lap" id="sw-btn-lap-${pid}">计次</button>
            <button class="sw-btn sw-btn-start" id="sw-btn-start-${pid}">启动</button>
          </div>
          <div class="sw-laps-list" id="sw-laps-${pid}"></div>
        </div>
      </div>

      <!-- Sub-App: Settings -->
      <div class="iphone-app-view" id="iphone-view-settings-${pid}">
        <div class="iphone-app-header">
          <button class="iphone-back-btn" id="settings-back-${pid}">‹ 首页</button>
          <div class="iphone-app-title">设置</div>
          <div></div>
        </div>
        <div class="iphone-app-body">
          <div class="settings-apple-id">
            <div class="settings-avatar">A</div>
            <div>
              <div style="font-weight:700;font-size:15px;">Alice</div>
              <div style="font-size:12px;color:#8e8e93;margin-top:2px;">Apple 账户、iCloud+</div>
            </div>
          </div>
          
          <div class="settings-card">
            <div class="settings-row">
              <div class="settings-row-label"><span>📱</span> <span>设备名称</span></div>
              <div class="settings-row-val">Alice's iPhone 16 Pro</div>
            </div>
            <div class="settings-row">
              <div class="settings-row-label"><span>⚙️</span> <span>系统版本</span></div>
              <div class="settings-row-val">iOS 18.2 (22C152)</div>
            </div>
            <div class="settings-row">
              <div class="settings-row-label"><span>🔋</span> <span>电池健康</span></div>
              <div class="settings-row-val" style="color:#34c759;font-weight:600;">100% 峰值性能</div>
            </div>
            <div class="settings-row">
              <div class="settings-row-label"><span>💾</span> <span>可用储存空间</span></div>
              <div class="settings-row-val">186.4 GB / 256 GB</div>
            </div>
          </div>

          <div class="settings-card">
            <div class="settings-row">
              <div class="settings-row-label"><span>🪞</span> <span>iPhone 镜像</span></div>
              <div class="settings-row-val" style="color:#007aff;font-weight:600;">已连接至 Mac</div>
            </div>
            <div class="settings-row">
              <div class="settings-row-label"><span>📶</span> <span>隔空播放与接力</span></div>
              <div class="settings-row-val">自动</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Home Indicator Pill -->
      <div class="iphone-home-bar" id="iphone-home-bar-${pid}" title="Home (返回主屏幕)"></div>
    </div>
  `, 'iphonemirror');

  win.classList.add('iphone-mirroring-window');
  win.style.width = '350px';
  win.style.height = '700px';

  // Sub-app switching helper
  const homeScreen = win.querySelector(`#iphone-home-${pid}`);
  const viewMessages = win.querySelector(`#iphone-view-messages-${pid}`);
  const viewPhotos = win.querySelector(`#iphone-view-photos-${pid}`);
  const viewStopwatch = win.querySelector(`#iphone-view-stopwatch-${pid}`);
  const viewSettings = win.querySelector(`#iphone-view-settings-${pid}`);
  const allViews = [viewMessages, viewPhotos, viewStopwatch, viewSettings];

  function openSubApp(targetView) {
    allViews.forEach(v => {
      if (v) v.style.display = 'none';
    });
    if (targetView) {
      targetView.style.display = 'flex';
      homeScreen.style.display = 'none';
    }
  }

  function goHome() {
    allViews.forEach(v => {
      if (v) v.style.display = 'none';
    });
    homeScreen.style.display = 'flex';
  }

  // Home bar click returns home
  const homeBar = win.querySelector(`#iphone-home-bar-${pid}`);
  if (homeBar) homeBar.addEventListener('click', goHome);

  // App icon clicks
  win.querySelector(`#iphone-icon-messages-${pid}`)?.addEventListener('click', () => openSubApp(viewMessages));
  win.querySelector(`#iphone-dock-messages-${pid}`)?.addEventListener('click', () => openSubApp(viewMessages));
  win.querySelector(`#iphone-icon-photos-${pid}`)?.addEventListener('click', () => openSubApp(viewPhotos));
  win.querySelector(`#iphone-icon-clock-${pid}`)?.addEventListener('click', () => openSubApp(viewStopwatch));
  win.querySelector(`#iphone-icon-settings-${pid}`)?.addEventListener('click', () => openSubApp(viewSettings));
  
  win.querySelector(`#iphone-icon-music-${pid}`)?.addEventListener('click', () => {
    launchMusic();
  });
  win.querySelector(`#iphone-dock-music-${pid}`)?.addEventListener('click', () => {
    launchMusic();
  });
  win.querySelector(`#iphone-icon-safari-${pid}`)?.addEventListener('click', () => {
    launchBrowser();
  });
  win.querySelector(`#iphone-dock-safari-${pid}`)?.addEventListener('click', () => {
    launchBrowser();
  });
  win.querySelector(`#iphone-icon-notes-${pid}`)?.addEventListener('click', () => {
    launchNotes();
  });
  win.querySelector(`#iphone-icon-camera-${pid}`)?.addEventListener('click', () => {
    launchCamera();
  });
  win.querySelector(`#iphone-dock-phone-${pid}`)?.addEventListener('click', () => {
    openSubApp(viewMessages);
  });

  // Back buttons
  win.querySelector(`#msg-back-${pid}`)?.addEventListener('click', goHome);
  win.querySelector(`#photos-back-${pid}`)?.addEventListener('click', goHome);
  win.querySelector(`#sw-back-${pid}`)?.addEventListener('click', goHome);
  win.querySelector(`#settings-back-${pid}`)?.addEventListener('click', goHome);

  // Dynamic Island tap interaction
  const island = win.querySelector(`#iphone-island-${pid}`);
  if (island) {
    island.addEventListener('click', (e) => {
      e.stopPropagation();
      island.classList.toggle('expanded');
    });
  }

  // Dynamic status bar clock sync
  const clockEl = win.querySelector(`#iphone-clock-${pid}`);
  function updateIPhoneClock() {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    if (clockEl) clockEl.innerText = `${hrs}:${mins}`;
  }
  updateIPhoneClock();
  const clockInt = setInterval(updateIPhoneClock, 1000);

  // iMessage Interactive Chat
  const msgList = win.querySelector(`#imessage-list-${pid}`);
  const msgInput = win.querySelector(`#imessage-in-${pid}`);
  const msgSendBtn = win.querySelector(`#imessage-send-${pid}`);

  function sendUserMessage() {
    const txt = msgInput.value.trim();
    if (!txt) return;
    msgInput.value = '';

    const meBubble = document.createElement('div');
    meBubble.className = 'imessage-bubble me';
    meBubble.innerText = txt;
    msgList.appendChild(meBubble);
    msgList.scrollTop = msgList.scrollHeight;

    // Alice Auto-response
    setTimeout(() => {
      const aliceReplies = [
        "收到！iPhone 镜像体验是不是很顺滑？🌟",
        "太棒了！AliceOS 正在通过无线协议同步数据中 ⚡",
        "告诉你个小秘密：macOS Sequoia 可以无缝把 Mac 剪贴板粘贴到手机里哦！",
        "今天天气真好，记得多喝水休息一下 ☕",
        "收到你的指令，随时为你服务！✨"
      ];
      const reply = aliceReplies[Math.floor(Math.random() * aliceReplies.length)];
      const aliceBubble = document.createElement('div');
      aliceBubble.className = 'imessage-bubble alice';
      aliceBubble.innerText = reply;
      msgList.appendChild(aliceBubble);
      msgList.scrollTop = msgList.scrollHeight;

      if (window.aliceOS && window.aliceOS.notifyIsland) {
        window.aliceOS.notifyIsland('💬', 'Alice: ' + reply.slice(0, 15), 100);
      }
    }, 800);
  }

  if (msgSendBtn) msgSendBtn.addEventListener('click', sendUserMessage);
  if (msgInput) {
    msgInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendUserMessage();
      }
    });
  }

  // Photos Gallery Tap Modal
  const photoGrid = win.querySelector(`#photos-grid-${pid}`);
  const photoModal = win.querySelector(`#photo-modal-${pid}`);
  const photoModalImg = win.querySelector(`#photo-modal-img-${pid}`);
  const photoModalClose = win.querySelector(`#photo-modal-close-${pid}`);

  photoGrid?.querySelectorAll('.photo-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const fullSrc = thumb.dataset.src;
      if (photoModal && photoModalImg) {
        photoModalImg.src = fullSrc;
        photoModal.style.display = 'flex';
      }
    });
  });

  if (photoModalClose) {
    photoModalClose.addEventListener('click', (e) => {
      e.stopPropagation();
      if (photoModal) photoModal.style.display = 'none';
    });
  }
  if (photoModal) {
    photoModal.addEventListener('click', () => {
      photoModal.style.display = 'none';
    });
  }

  // Stopwatch Logic
  let swRunning = false;
  let swStartTime = 0;
  let swElapsed = 0;
  let swTimer = null;
  let swLapCount = 0;

  const swDisplay = win.querySelector(`#sw-display-${pid}`);
  const swBtnStart = win.querySelector(`#sw-btn-start-${pid}`);
  const swBtnLap = win.querySelector(`#sw-btn-lap-${pid}`);
  const swLapsList = win.querySelector(`#sw-laps-${pid}`);

  function formatStopwatch(ms) {
    const totalSecs = Math.floor(ms / 1000);
    const m = String(Math.floor(totalSecs / 60)).padStart(2, '0');
    const s = String(totalSecs % 60).padStart(2, '0');
    const centis = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
    return `${m}:${s}.${centis}`;
  }

  if (swBtnStart) {
    swBtnStart.addEventListener('click', () => {
      if (!swRunning) {
        swRunning = true;
        swStartTime = Date.now() - swElapsed;
        swBtnStart.innerText = '停止';
        swBtnStart.className = 'sw-btn sw-btn-stop';
        swBtnLap.innerText = '计次';
        swTimer = setInterval(() => {
          swElapsed = Date.now() - swStartTime;
          if (swDisplay) swDisplay.innerText = formatStopwatch(swElapsed);
        }, 30);
      } else {
        swRunning = false;
        clearInterval(swTimer);
        swBtnStart.innerText = '启动';
        swBtnStart.className = 'sw-btn sw-btn-start';
        swBtnLap.innerText = '复位';
      }
    });
  }

  if (swBtnLap) {
    swBtnLap.addEventListener('click', () => {
      if (swRunning) {
        swLapCount++;
        const row = document.createElement('div');
        row.className = 'sw-lap-row';
        row.innerHTML = `<span>计次 ${swLapCount}</span><span>${formatStopwatch(swElapsed)}</span>`;
        if (swLapsList) swLapsList.prepend(row);
      } else {
        swElapsed = 0;
        swLapCount = 0;
        if (swDisplay) swDisplay.innerText = '00:00.00';
        if (swLapsList) swLapsList.innerHTML = '';
        swBtnLap.innerText = '计次';
      }
    });
  }
}

// App Launchers
async function launchTerminal() {
  if (window.aliceOS && window.aliceOS.setDockBadge) window.aliceOS.setDockBadge('terminal', 0);
  const res = await window.aliceOS.pm.spawn('terminal');
  if (!res.success) return;
  const pid = res.data.pid;
  const win = createWindow(pid, `${currentUser} — -zsh — 80×24`, `
    <div id="term-${pid}" class="terminal-container">
      <div class="term-output" id="term-out-${pid}"></div>
      <div class="term-input-line">
        <span id="term-prompt-${pid}"></span>
        <input type="text" class="term-input" id="term-in-${pid}" autocomplete="off" autofocus spellcheck="false">
      </div>
    </div>
  `, 'terminal');

  const input = win.querySelector(`#term-in-${pid}`);
  const output = win.querySelector(`#term-out-${pid}`);
  const promptSpan = win.querySelector(`#term-prompt-${pid}`);

  let currentDir = `/Users/${currentUser}`;

  function updatePrompt() {
    const dirDisplay = (currentDir === `/Users/${currentUser}`) ? '~' : currentDir;
    const promptHtml = `<span style="color:#34c759;font-weight:700;">${currentUser}@MacBook-Pro</span> <span style="color:#007aff;font-weight:700;">${dirDisplay}</span> <span style="color:#ff9500;font-weight:700;">%</span>&nbsp;`;
    promptSpan.innerHTML = promptHtml;
    return promptHtml;
  }

  output.innerHTML = `<span style="opacity:0.6;">${t('term_last_login', 'Last login: %s on ttys000').replace('%s', new Date().toDateString())}</span><br><br>`;
  updatePrompt();

  input.addEventListener('keydown', async (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim();
      const currentPrompt = updatePrompt();
      output.innerHTML += `${currentPrompt}<span style="color:#fff;">${cmd}</span><br>`;
      input.value = '';

      const args = cmd.split(' ');
      const baseCmd = args[0];

      if (cmd.startsWith('sudo rm -rf /')) {
        triggerBSOD();
      } else if (baseCmd === 'macfetch' || baseCmd === 'neofetch') {
        output.innerHTML += `
<div style="display:flex;gap:20px;margin:8px 0;font-family:monospace;font-size:12px;line-height:1.25;">
  <pre style="margin:0;font-weight:700;line-height:1.15;font-family:inherit;">
<span style="color:#34c759;">                    'c.          </span>
<span style="color:#34c759;">                 ,xNMM.          </span>
<span style="color:#34c759;">               .OMMMMo           </span>
<span style="color:#ffcc00;">               OMMM0,            </span>
<span style="color:#ffcc00;">     .;loddo:'.  .oa2            </span>
<span style="color:#ff9500;">   .cKMMMMMMMMWd.                </span>
<span style="color:#ff9500;">  .KMMMMMMMMMMMWd.               </span>
<span style="color:#ff3b30;">  XMMMMMMMMMMMMMX.               </span>
<span style="color:#ff3b30;">  ;KMMMMMMMMMMMMK.               </span>
<span style="color:#af52de;">   .XMMMMMMMMMMX.                </span>
<span style="color:#af52de;">     ;ONMMMMMMO.                 </span>
<span style="color:#007aff;">       .':ldl'                   </span></pre>
  <div style="line-height:1.45;">
    <div><span style="color:#34c759;font-weight:700;">${currentUser}</span><span style="color:#888;">@</span><span style="color:#34c759;font-weight:700;">Alices-MacBook-Pro</span></div>
    <div style="color:#555;">--------------------------------</div>
    <div><span style="color:#ff9500;font-weight:600;">OS:</span> macOS Sequoia 15.0 (AliceOS Hybrid)</div>
    <div><span style="color:#ff9500;font-weight:600;">Host:</span> MacBook Pro (16-inch, Nov 2024)</div>
    <div><span style="color:#ff9500;font-weight:600;">Kernel:</span> Darwin 24.1.0 x86_64</div>
    <div><span style="color:#ff9500;font-weight:600;">Uptime:</span> 3 hours, 24 mins</div>
    <div><span style="color:#ff9500;font-weight:600;">Shell:</span> zsh 5.9 (x86_64-apple-darwin24.0)</div>
    <div><span style="color:#ff9500;font-weight:600;">Terminal:</span> Apple_Terminal</div>
    <div><span style="color:#ff9500;font-weight:600;">CPU:</span> Apple M3 Max (16 cores)</div>
    <div><span style="color:#ff9500;font-weight:600;">Memory:</span> 4.8 GiB / 36.0 GiB</div>
    <div style="margin-top:6px;display:flex;gap:4px;">
      <span style="background:#000;width:12px;height:12px;border-radius:2px;display:inline-block;"></span>
      <span style="background:#ff3b30;width:12px;height:12px;border-radius:2px;display:inline-block;"></span>
      <span style="background:#34c759;width:12px;height:12px;border-radius:2px;display:inline-block;"></span>
      <span style="background:#ffcc00;width:12px;height:12px;border-radius:2px;display:inline-block;"></span>
      <span style="background:#007aff;width:12px;height:12px;border-radius:2px;display:inline-block;"></span>
      <span style="background:#af52de;width:12px;height:12px;border-radius:2px;display:inline-block;"></span>
      <span style="background:#5ac8fa;width:12px;height:12px;border-radius:2px;display:inline-block;"></span>
      <span style="background:#fff;width:12px;height:12px;border-radius:2px;display:inline-block;"></span>
    </div>
  </div>
</div>
        `;
      } else if (baseCmd === 'sw_vers') {
        output.innerHTML += `ProductName:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;macOS<br>ProductVersion:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15.0<br>BuildVersion:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24A335<br>`;
      } else if (baseCmd === 'uname') {
        if (args.includes('-a')) {
          output.innerHTML += `Linux AliceOS 6.10.8-aliceos-generic #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux<br>`;
        } else if (args.includes('-r')) {
          output.innerHTML += `6.10.8-aliceos-generic<br>`;
        } else if (args.includes('-s')) {
          output.innerHTML += `Linux<br>`;
        } else {
          output.innerHTML += `Linux<br>`;
        }
      } else if (baseCmd === 'date') {
        output.innerHTML += `${new Date().toString()}<br>`;
      } else if (baseCmd === 'uptime') {
        output.innerHTML += ` 3:35  up 3:24, 2 users, load averages: 1.45 1.62 1.58<br>`;
      } else if (baseCmd === 'say') {
        const sayText = args.slice(1).join(' ');
        if (window.speechSynthesis && sayText) {
          const u = new SpeechSynthesisUtterance(sayText);
          window.speechSynthesis.speak(u);
        }
      } else if (baseCmd === 'ls') {
        const dirRes = await window.aliceOS.vfs.readDir(currentDir);
        if (dirRes.success) {
          dirRes.data.forEach(item => {
            output.innerHTML += `${item.type === 'dir' ? '<span style="color:#64b5f6;font-weight:700;">' : ''}${item.name}${item.type === 'dir' ? '</span>' : ''}&nbsp;&nbsp;`;
          });
          output.innerHTML += `<br>`;
        } else {
          output.innerHTML += `ls: ${dirRes.error}<br>`;
        }
      } else if (baseCmd === 'cd') {
        const target = args[1] || `/Users/${currentUser}`;
        let newDir = target.startsWith('/') ? target : (currentDir === '/' ? `/${target}` : `${currentDir}/${target}`);
        if (newDir.endsWith('/') && newDir.length > 1) newDir = newDir.slice(0, -1);
        
        const testRes = await window.aliceOS.vfs.readDir(newDir);
        if (testRes.success) {
          currentDir = newDir;
          updatePrompt();
        } else {
          output.innerHTML += `cd: ${target}: No such file or directory<br>`;
        }
      } else if (baseCmd === 'cat') {
        const target = args[1];
        if (target) {
          let targetPath = target.startsWith('/') ? target : (currentDir === '/' ? `/${target}` : `${currentDir}/${target}`);
          const fileRes = await window.aliceOS.vfs.readFile(targetPath);
          if (fileRes.success) {
            output.innerHTML += `${fileRes.data.replace(/\\n/g, '<br>')}<br>`;
          } else {
            output.innerHTML += `cat: ${target}: ${fileRes.error}<br>`;
          }
        }
      } else if (baseCmd === 'mkdir') {
        const target = args[1];
        if (target) {
          let targetPath = target.startsWith('/') ? target : (currentDir === '/' ? `/${target}` : `${currentDir}/${target}`);
          const mkRes = await window.aliceOS.vfs.mkdir(targetPath);
          if (!mkRes.success) {
            output.innerHTML += `mkdir: ${target}: ${mkRes.error}<br>`;
          }
        }
      } else if (baseCmd === 'rm') {
        const target = args[1];
        if (target) {
          let targetPath = target.startsWith('/') ? target : (currentDir === '/' ? `/${target}` : `${currentDir}/${target}`);
          const rmRes = await window.aliceOS.vfs.rm(targetPath);
          if (!rmRes.success) {
            output.innerHTML += `rm: ${target}: ${rmRes.error}<br>`;
          }
        }
      } else if (baseCmd === 'echo') {
        const text = args.slice(1).join(' ');
        const parts = text.split(' > ');
        if (parts.length > 1) {
          const content = parts[0].replace(/^"|"$/g, '');
          const target = parts[1];
          let targetPath = target.startsWith('/') ? target : (currentDir === '/' ? `/${target}` : `${currentDir}/${target}`);
          const wRes = await window.aliceOS.vfs.writeFile(targetPath, content);
          if (!wRes.success) {
            output.innerHTML += `echo: ${target}: ${wRes.error}<br>`;
          }
        } else {
          output.innerHTML += `${text}<br>`;
        }
      } else if (baseCmd === 'host:') {
        const hostCmd = cmd.substring(5).trim();
        if (hostCmd) {
          output.innerHTML += `<span style="color:#ff9500;">[Escaping VM Sandbox to Physical Host]</span><br>`;
          if (window.aliceOS.execHostCommand) {
            const res = await window.aliceOS.execHostCommand(hostCmd);
            if (res.success) {
              const cleanOut = res.data.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
              output.innerHTML += `<span style="color:#34c759;">${cleanOut}</span><br>`;
            } else {
              const cleanErr = res.stderr.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
              output.innerHTML += `<span style="color:#ff3b30;">Host Error:<br>${cleanErr || res.error}</span><br>`;
            }
          } else {
            output.innerHTML += `<span style="color:#ff3b30;">Host Bridge not available.</span><br>`;
          }
        }
      } else if (baseCmd === 'ps') {
        const psRes = await window.aliceOS.pm.list();
        if (psRes.success) {
          output.innerHTML += `<span style="color:#aaa;">USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND</span><br>`;
          psRes.data.forEach(p => {
            const u = p.uid === 0 ? 'root' : (p.uid === 1000 ? currentUser : 'system');
            const st = p.state || 'S';
            const tty = p.tty || '?';
            const vsz = p.vsz || 120400;
            const rss = p.rss || 18200;
            const comm = p.cmdline || p.appId;
            output.innerHTML += `${u.padEnd(8, ' ')} ${String(p.pid).padStart(5, ' ')}  0.0  0.1 ${String(vsz).padStart(6, ' ')} ${String(rss).padStart(5, ' ')} ${tty.padEnd(8, ' ')} ${st.padEnd(4, ' ')} 05:00   0:00 ${comm}<br>`;
          });
        }
      } else if (baseCmd === 'clear') {
        output.innerHTML = '';
      } else if (baseCmd === 'whoami') {
        output.innerHTML += `${currentUser}<br>`;
      } else if (baseCmd === 'free') {
        try {
          const memContent = await window.aliceOS.vfs.readFile('/proc/meminfo');
          const lines = memContent.split('\n');
          const getVal = (k) => {
            const l = lines.find(line => line.startsWith(k));
            if (!l) return 0;
            return parseInt(l.split(':')[1].trim().split(' ')[0], 10);
          };
          const tot = Math.round(getVal('MemTotal') / 1024);
          const fre = Math.round(getVal('MemFree') / 1024);
          const ava = Math.round(getVal('MemAvailable') / 1024);
          const used = tot - fre;
          const stot = Math.round(getVal('SwapTotal') / 1024);
          const sfre = Math.round(getVal('SwapFree') / 1024);
          const sused = stot - sfre;
          output.innerHTML += `<pre style="margin:0;font-family:inherit;font-size:11px;line-height:1.3;">               total        used        free      shared  buff/cache   available<br>Mem:       ${String(tot).padStart(8, ' ')}Mi  ${String(used).padStart(8, ' ')}Mi  ${String(fre).padStart(8, ' ')}Mi       128Mi      4770Mi  ${String(ava).padStart(8, ' ')}Mi<br>Swap:      ${String(stot).padStart(8, ' ')}Mi  ${String(sused).padStart(8, ' ')}Mi  ${String(sfre).padStart(8, ' ')}Mi</pre>`;
        } catch (err) {
          output.innerHTML += `free: failed to read /proc/meminfo<br>`;
        }
      } else if (baseCmd !== '') {
        output.innerHTML += `zsh: command not found: ${baseCmd}<br>`;
      }
      
      output.parentElement.scrollTop = output.parentElement.scrollHeight;
    }
  });
}

// Modify the old testVFS to just be an example app
async function launchSystemInfo() {
  const res = await window.aliceOS.pm.spawn('system-info');
  if (res.success) {
    const pid = res.data.pid;
    const win = createWindow(pid, t('about_title', 'About This System'), `
      <div id="sys-about-${pid}" style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 20px;text-align:center;font-family:-apple-system, sans-serif;height:100%;box-sizing:border-box;background:inherit;color:inherit;">
        <div style="font-size:64px;margin-bottom:12px;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));"></div>
        <h2 style="margin:0 0 4px 0;font-size:22px;font-weight:700;color:inherit;">AliceOS</h2>
        <div style="font-size:13px;opacity:0.65;margin-bottom:18px;">Sonoma 14.5 (Build 23F79)</div>
        <div style="width:100%;max-width:280px;background:rgba(0,0,0,0.04);border-radius:12px;padding:12px 16px;text-align:left;font-size:12px;display:flex;flex-direction:column;gap:8px;border:1px solid rgba(0,0,0,0.06);">
          <div style="display:flex;justify-content:space-between;"><span style="opacity:0.6;" id="about-lbl-chip-${pid}">${t('about_chip', 'Chip')}</span><span style="font-weight:600;">Alice M3 Ultra</span></div>
          <div style="display:flex;justify-content:space-between;"><span style="opacity:0.6;" id="about-lbl-mem-${pid}">${t('about_memory', 'Memory')}</span><span style="font-weight:600;" id="about-val-mem-${pid}">${t('about_memory_val', '32 GB Unified Memory')}</span></div>
          <div style="display:flex;justify-content:space-between;"><span style="opacity:0.6;" id="about-lbl-ser-${pid}">${t('about_serial', 'Serial Number')}</span><span style="font-family:monospace;font-weight:600;">C02AL1CEOS88</span></div>
        </div>
        <button onclick="launchSettings()" style="margin-top:18px;background:rgba(0,0,0,0.08);border:none;padding:6px 16px;border-radius:14px;font-size:12px;font-weight:600;cursor:pointer;color:inherit;" id="about-btn-more-${pid}">${t('about_more_info', 'More Info...')}</button>
      </div>
    `, 'hostinfo');

    win._onLanguageChange = () => {
      const chipEl = win.querySelector(`#about-lbl-chip-${pid}`);
      if (chipEl) chipEl.innerText = t('about_chip', 'Chip');
      const memEl = win.querySelector(`#about-lbl-mem-${pid}`);
      if (memEl) memEl.innerText = t('about_memory', 'Memory');
      const valMemEl = win.querySelector(`#about-val-mem-${pid}`);
      if (valMemEl) valMemEl.innerText = t('about_memory_val', '32 GB Unified Memory');
      const serEl = win.querySelector(`#about-lbl-ser-${pid}`);
      if (serEl) serEl.innerText = t('about_serial', 'Serial Number');
      const moreBtn = win.querySelector(`#about-btn-more-${pid}`);
      if (moreBtn) moreBtn.innerText = t('about_more_info', 'More Info...');
    };
  }
}

async function launchNotes(filePath = null) {
  if (window.aliceOS && window.aliceOS.setDockBadge) window.aliceOS.setDockBadge('notes', 0);
  const res = await window.aliceOS.pm.spawn('notes');
  if (res.success) {
    const pid = res.data.pid;
    const defaultPath = filePath || `/Users/${currentUser}/Desktop/note.txt`;
    const win = createWindow(pid, t('app_notes', 'Notes'), `
      <div class="notes-container">
        <div class="notes-toolbar">
          <input type="text" id="notes-path-${pid}" value="${defaultPath}" placeholder="${t('notes_path_placeholder', 'File path...')}">
          <button id="notes-save-${pid}">${t('notes_save', 'Save')}</button>
          <button id="notes-load-${pid}">${t('notes_load', 'Load')}</button>
          <div class="notes-math-chip" id="notes-math-chip-${pid}" title="macOS Sequoia Math Notes">
            <span>∑</span> <span id="notes-math-txt-${pid}">${t('notes_math_notes', 'Math Notes')}</span>
          </div>
        </div>
        <div class="notes-math-toast" id="notes-math-toast-${pid}"></div>
        <textarea id="notes-content-${pid}" class="notes-textarea" placeholder="${t('notes_placeholder', 'Start typing... (Try: 250 + 150 =)')}"></textarea>
      </div>
    `);

    const saveBtn = win.querySelector(`#notes-save-${pid}`);
    const loadBtn = win.querySelector(`#notes-load-${pid}`);
    const pathInput = win.querySelector(`#notes-path-${pid}`);
    const textarea = win.querySelector(`#notes-content-${pid}`);
    const mathToast = win.querySelector(`#notes-math-toast-${pid}`);
    let mathToastTimer = null;
    
    // Auto load if filePath was provided
    if (filePath) {
      const readRes = await window.aliceOS.vfs.readFile(filePath);
      if (readRes.success) {
        textarea.value = readRes.data;
      }
    }

    // macOS Sequoia Math Notes Equation Evaluator
    textarea.addEventListener('input', () => {
      const text = textarea.value;
      const cursorPos = textarea.selectionStart;
      const beforeCursor = text.substring(0, cursorPos);
      const lastLine = beforeCursor.split('\n').pop();

      const match = lastLine.match(/([\d\.\s\+\-\*\/\(\)\^\%]+)\=\s*$/);
      if (match) {
        let rawExpr = match[1].trim();
        if (rawExpr && /[\+\-\*\/\^\%]/.test(rawExpr)) {
          try {
            let evalExpr = rawExpr.replace(/\^/g, '**').replace(/(\d+)%/g, '($1/100)');
            if (/^[0-9+\-*/().\s*]+$/.test(evalExpr)) {
              const calcVal = Function('"use strict";return (' + evalExpr + ')')();
              if (calcVal !== undefined && !isNaN(calcVal) && isFinite(calcVal)) {
                const formatted = Number.isInteger(calcVal) ? calcVal.toString() : parseFloat(calcVal.toFixed(4)).toString();
                const afterCursor = text.substring(cursorPos);
                const inserted = ' ' + formatted;
                textarea.value = beforeCursor + inserted + afterCursor;
                textarea.selectionStart = textarea.selectionEnd = cursorPos + inserted.length;

                if (mathToast) {
                  mathToast.innerHTML = `<span>✨</span> <span>${t('notes_math_notes', 'Math Notes')}: <b>${rawExpr} = ${formatted}</b></span>`;
                  mathToast.classList.add('show');
                  if (mathToastTimer) clearTimeout(mathToastTimer);
                  mathToastTimer = setTimeout(() => mathToast.classList.remove('show'), 3000);
                }
              }
            }
          } catch(e) {}
        }
      }
    });

    saveBtn.addEventListener('click', async () => {
      const path = pathInput.value.trim();
      if (!path) return;
      const content = textarea.value;
      const res = await window.aliceOS.vfs.writeFile(path, content);
      if (res.success) {
        saveBtn.innerText = t('notes_saved', 'Saved!');
        setTimeout(() => saveBtn.innerText = t('notes_save', 'Save'), 2000);
      } else {
        alert('Save failed: ' + res.error);
      }
    });

    loadBtn.addEventListener('click', async () => {
      const path = pathInput.value.trim();
      if (!path) return;
      const res = await window.aliceOS.vfs.readFile(path);
      if (res.success) {
        textarea.value = res.data;
      } else {
        alert('Load failed: ' + res.error);
      }
    });

    win._onLanguageChange = () => {
      if (pathInput) pathInput.placeholder = t('notes_path_placeholder', 'File path...');
      if (saveBtn) saveBtn.innerText = t('notes_save', 'Save');
      if (loadBtn) loadBtn.innerText = t('notes_load', 'Load');
      if (textarea) textarea.placeholder = t('notes_placeholder', 'Start typing... (Try: 250 + 150 =)');
      const mathTxt = win.querySelector(`#notes-math-txt-${pid}`);
      if (mathTxt) mathTxt.innerText = t('notes_math_notes', 'Math Notes');
    };
  }
}

async function launchFinder() {
  const res = await window.aliceOS.pm.spawn('finder');
  if (!res.success) return;
  const pid = res.data.pid;
  const win = createWindow(pid, t('app_finder', 'Finder'), `
    <div class="finder-container" id="finder-${pid}">
      <div class="finder-sidebar">
        <div style="font-size:10px;font-weight:700;color:#888;margin:8px 0 4px 8px;letter-spacing:0.5px;" data-finder-header="fav">${t('finder_favorites', 'FAVORITES')}</div>
        <div class="finder-sidebar-item" data-path="/Users/alice" data-host="false" data-finder-label="home">🏠 ${t('finder_home', 'Alice Home')}</div>
        <div class="finder-sidebar-item" data-path="/Users/alice/Desktop" data-host="false" data-finder-label="desktop">🖥️ ${t('finder_desktop', 'Desktop')}</div>
        <div class="finder-sidebar-item" data-path="/Users/alice/Documents" data-host="false" data-finder-label="documents">📁 ${t('finder_documents', 'Documents')}</div>
        <div class="finder-sidebar-item" data-path="/Users/alice/Downloads" data-host="false" data-finder-label="downloads">⬇️ ${t('finder_downloads', 'Downloads')}</div>
        <div class="finder-sidebar-item" data-path="/" data-host="false" data-finder-label="root">💾 / (Root)</div>
        <div style="font-size:10px;font-weight:700;color:#888;margin:12px 0 4px 8px;letter-spacing:0.5px;" data-finder-header="loc">${t('finder_locations', 'LOCATIONS')}</div>
        <div class="finder-sidebar-item" data-path="C:\\\\" data-host="true" data-finder-label="disk">💽 ${t('finder_local_disk', 'Local Disk (C:)')}</div>
        <div style="font-size:10px;font-weight:700;color:#888;margin:12px 0 4px 8px;letter-spacing:0.5px;" data-finder-header="tags">${t('finder_tags', 'TAGS')}</div>
        <div class="finder-sidebar-tag" data-tag-color="#ff3b30" data-tag-key="red"><span class="finder-tag-dot" style="background:#ff3b30;"></span> <span>${t('finder_tag_red', 'Red')}</span></div>
        <div class="finder-sidebar-tag" data-tag-color="#ff9500" data-tag-key="orange"><span class="finder-tag-dot" style="background:#ff9500;"></span> <span>${t('finder_tag_orange', 'Orange')}</span></div>
        <div class="finder-sidebar-tag" data-tag-color="#ffcc00" data-tag-key="yellow"><span class="finder-tag-dot" style="background:#ffcc00;"></span> <span>${t('finder_tag_yellow', 'Yellow')}</span></div>
        <div class="finder-sidebar-tag" data-tag-color="#34c759" data-tag-key="green"><span class="finder-tag-dot" style="background:#34c759;"></span> <span>${t('finder_tag_green', 'Green')}</span></div>
        <div class="finder-sidebar-tag" data-tag-color="#007aff" data-tag-key="blue"><span class="finder-tag-dot" style="background:#007aff;"></span> <span>${t('finder_tag_blue', 'Blue')}</span></div>
        <div class="finder-sidebar-tag" data-tag-color="#af52de" data-tag-key="purple"><span class="finder-tag-dot" style="background:#af52de;"></span> <span>${t('finder_tag_purple', 'Purple')}</span></div>
        <div class="finder-sidebar-tag" data-tag-color="#8e8e93" data-tag-key="gray"><span class="finder-tag-dot" style="background:#8e8e93;"></span> <span>${t('finder_tag_gray', 'Gray')}</span></div>
      </div>
      <div class="finder-main">
        <div class="finder-toolbar" style="align-items:center;justify-content:space-between;padding:6px 12px;gap:8px;">
          <div style="display:flex;align-items:center;gap:6px;">
            <button id="finder-back-${pid}" title="${t('finder_back', 'Back')}" style="background:transparent;border:1px solid rgba(0,0,0,0.15);border-radius:6px;padding:2px 8px;cursor:pointer;font-size:13px;">‹</button>
            <button id="finder-forward-${pid}" title="${t('finder_forward', 'Forward')}" style="background:transparent;border:1px solid rgba(0,0,0,0.15);border-radius:6px;padding:2px 8px;cursor:pointer;font-size:13px;">›</button>
            <button id="finder-up-${pid}" title="${t('finder_up', 'Enclosing Folder')}" style="background:transparent;border:1px solid rgba(0,0,0,0.15);border-radius:6px;padding:2px 8px;cursor:pointer;font-size:13px;">↑</button>
            <span id="finder-path-${pid}" style="font-size:12px;font-weight:600;margin-left:8px;opacity:0.8;max-width:240px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">/Users/alice</span>
          </div>
          <div style="display:flex;align-items:center;gap:8px;">
            <div class="finder-segmented-control">
              <button class="finder-seg-btn" id="finder-view-icon-${pid}" title="${t('finder_view_icon', 'Icon View')}">⊞</button>
              <button class="finder-seg-btn" id="finder-view-list-${pid}" title="${t('finder_view_list', 'List View')}">≡</button>
              <button class="finder-seg-btn active" id="finder-view-col-${pid}" title="${t('finder_view_col', 'Column View')}">|||</button>
            </div>
            <button id="finder-refresh-${pid}" title="${t('finder_refresh', 'Refresh')}" style="background:transparent;border:none;cursor:pointer;font-size:13px;padding:2px 6px;">🔄</button>
          </div>
        </div>
        <div class="finder-view-wrapper" id="finder-view-${pid}" style="flex:1;overflow:hidden;display:flex;flex-direction:column;position:relative;">
        </div>
      </div>
    </div>
  `);

  let currentDir = '/Users/alice';
  let isHostDir = false;
  let viewMode = 'column'; // Default macOS Column View
  let history = [{ path: currentDir, host: isHostDir }];
  let historyIdx = 0;
  let activeTagFilter = null;

  window.aliceFileTags = window.aliceFileTags || {
    '/Users/alice/Desktop/quick_note.txt': '#ff9500',
    '/Users/alice/Desktop': '#ff3b30',
    '/Users/alice/Documents': '#007aff',
    '/Users/alice/Downloads': '#34c759'
  };

  const FINDER_TAG_COLORS = [
    { name: 'Red', hex: '#ff3b30' },
    { name: 'Orange', hex: '#ff9500' },
    { name: 'Yellow', hex: '#ffcc00' },
    { name: 'Green', hex: '#34c759' },
    { name: 'Blue', hex: '#007aff' },
    { name: 'Purple', hex: '#af52de' },
    { name: 'Gray', hex: '#8e8e93' }
  ];

  function getFileTag(path) {
    return window.aliceFileTags ? window.aliceFileTags[path] : null;
  }

  function setFileTag(path, color) {
    if (!window.aliceFileTags) window.aliceFileTags = {};
    if (window.aliceFileTags[path] === color) {
      delete window.aliceFileTags[path];
    } else {
      window.aliceFileTags[path] = color;
    }
  }

  // Column view state: stack of columns
  let columnStack = [{ dirPath: currentDir, isHost: isHostDir, selectedName: null }];

  const viewContainer = win.querySelector(`#finder-view-${pid}`);
  const pathDisplay = win.querySelector(`#finder-path-${pid}`);
  const btnIcon = win.querySelector(`#finder-view-icon-${pid}`);
  const btnList = win.querySelector(`#finder-view-list-${pid}`);
  const btnCol = win.querySelector(`#finder-view-col-${pid}`);

  function updateSegBtns() {
    [btnIcon, btnList, btnCol].forEach(b => b.classList.remove('active'));
    if (viewMode === 'icon') btnIcon.classList.add('active');
    else if (viewMode === 'list') btnList.classList.add('active');
    else if (viewMode === 'column') btnCol.classList.add('active');
  }

  async function getDirItems(path, host) {
    if (host) {
      if (!window.aliceOS.hostReadDir) return [];
      const res = await window.aliceOS.hostReadDir(path);
      return res.success ? res.data : [];
    } else {
      const res = await window.aliceOS.vfs.readDir(path);
      return res.success ? res.data : [];
    }
  }

  async function navigateTo(path, host, pushHistory = true) {
    currentDir = path;
    isHostDir = host;
    pathDisplay.innerText = currentDir;
    if (pushHistory) {
      history = history.slice(0, historyIdx + 1);
      history.push({ path, host });
      historyIdx = history.length - 1;
    }
    columnStack = [{ dirPath: currentDir, isHost: isHostDir, selectedName: null }];
    await renderActiveView();
  }

  function handleFileOpen(item, targetPath, host) {
    if (host) {
      alert("Opening physical files directly in AliceOS apps is restricted for safety. Path: " + targetPath);
    } else {
      if (item.name.endsWith('.png')) {
        launchGallery(targetPath);
      } else {
        launchNotes(targetPath);
      }
    }
  }

  async function renderActiveView() {
    viewContainer.innerHTML = '';
    pathDisplay.innerText = currentDir;

    if (activeTagFilter) {
      const tagObj = FINDER_TAG_COLORS.find(c => c.hex === activeTagFilter) || { name: 'Tag', hex: activeTagFilter };
      const chip = document.createElement('div');
      chip.className = 'finder-filter-chip';
      chip.innerHTML = `
        <span class="finder-tag-dot" style="background:${tagObj.hex};margin-right:2px;"></span>
        <span>${t('finder_filtered_by', 'Filtered by')}: ${tagObj.name}</span>
        <span class="finder-filter-chip-close" title="${t('finder_clear_filter', 'Clear filter')}">✕</span>
      `;
      chip.querySelector('.finder-filter-chip-close').addEventListener('click', () => {
        activeTagFilter = null;
        win.querySelectorAll('.finder-sidebar-tag').forEach(t => t.classList.remove('active'));
        renderActiveView();
      });
      viewContainer.appendChild(chip);
    }

    if (viewMode === 'icon') {
      await renderIconView();
    } else if (viewMode === 'list') {
      await renderListView();
    } else if (viewMode === 'column') {
      await renderColumnView();
    }
  }

  async function renderIconView() {
    const content = document.createElement('div');
    content.className = 'finder-content';
    content.innerHTML = '<div style="padding:20px;opacity:0.6;">' + t('finder_loading', 'Loading...') + '</div>';
    viewContainer.appendChild(content);

    let items = await getDirItems(currentDir, isHostDir);
    if (activeTagFilter) {
      items = items.filter(item => {
        let targetPath = isHostDir 
          ? (currentDir.endsWith('\\\\') ? currentDir + item.name : currentDir + '\\\\' + item.name)
          : (currentDir === '/' ? `/${item.name}` : `${currentDir}/${item.name}`);
        return getFileTag(targetPath) === activeTagFilter;
      });
    }

    content.innerHTML = '';
    if (items.length === 0) {
      content.innerHTML = '<div style="padding:20px;opacity:0.5;">' + (activeTagFilter ? t('finder_no_match_tag', 'No files match this tag') : t('finder_empty', 'Empty folder')) + '</div>';
      return;
    }

    items.forEach(item => {
      const el = document.createElement('div');
      el.className = 'finder-item';
      let icon = item.type === 'dir' ? '📁' : '📄';
      if (item.type !== 'dir' && item.name.endsWith('.png')) icon = '🖼️';

      let targetPath = isHostDir 
        ? (currentDir.endsWith('\\\\') ? currentDir + item.name : currentDir + '\\\\' + item.name)
        : (currentDir === '/' ? `/${item.name}` : `${currentDir}/${item.name}`);

      const tagColor = getFileTag(targetPath);
      const tagDot = tagColor ? `<span class="finder-tag-dot" style="background:${tagColor};"></span>` : '';

      el.innerHTML = `
        <div class="finder-item-icon">${icon}</div>
        <div class="finder-item-name" style="display:flex;align-items:center;justify-content:center;gap:3px;">${tagDot}<span>${item.name}</span></div>
      `;

      el.addEventListener('click', () => {
        content.querySelectorAll('.finder-item').forEach(i => i.classList.remove('selected'));
        el.classList.add('selected');
        window.aliceOS.selectedFile = {
          path: targetPath,
          isHost: isHostDir,
          type: item.type,
          name: item.name
        };
      });

      el.addEventListener('dblclick', () => {
        if (item.type === 'dir') {
          navigateTo(targetPath, isHostDir);
        } else {
          handleFileOpen(item, targetPath, isHostDir);
        }
      });

      content.appendChild(el);
    });
  }

  async function renderListView() {
    const listWrap = document.createElement('div');
    listWrap.style.cssText = 'flex:1;overflow-y:auto;padding:8px;';
    listWrap.innerHTML = '<div style="padding:20px;opacity:0.6;">' + t('finder_loading', 'Loading...') + '</div>';
    viewContainer.appendChild(listWrap);

    let items = await getDirItems(currentDir, isHostDir);
    if (activeTagFilter) {
      items = items.filter(item => {
        let targetPath = isHostDir 
          ? (currentDir.endsWith('\\\\') ? currentDir + item.name : currentDir + '\\\\' + item.name)
          : (currentDir === '/' ? `/${item.name}` : `${currentDir}/${item.name}`);
        return getFileTag(targetPath) === activeTagFilter;
      });
    }

    listWrap.innerHTML = '';
    if (items.length === 0) {
      listWrap.innerHTML = '<div style="padding:20px;opacity:0.5;">' + (activeTagFilter ? t('finder_no_match_tag', 'No files match this tag') : t('finder_empty', 'Empty folder')) + '</div>';
      return;
    }

    const table = document.createElement('table');
    table.className = 'finder-list-table';
    table.innerHTML = `
      <thead>
        <tr>
          <th style="width:50%;">${t('finder_col_name', 'Name')}</th>
          <th style="width:25%;">${t('finder_col_kind', 'Kind')}</th>
          <th style="width:25%;">${t('finder_col_type', 'Type')}</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;
    const tbody = table.querySelector('tbody');

    items.forEach(item => {
      const tr = document.createElement('tr');
      tr.className = 'finder-list-row';
      let icon = item.type === 'dir' ? '📁' : '📄';
      if (item.type !== 'dir' && item.name.endsWith('.png')) icon = '🖼️';
      let kind = item.type === 'dir' ? t('finder_folder', 'Folder') : (item.name.endsWith('.png') ? t('finder_png_image', 'PNG Image') : t('finder_document', 'Document'));

      let targetPath = isHostDir 
        ? (currentDir.endsWith('\\\\') ? currentDir + item.name : currentDir + '\\\\' + item.name)
        : (currentDir === '/' ? `/${item.name}` : `${currentDir}/${item.name}`);

      const tagColor = getFileTag(targetPath);
      const tagDot = tagColor ? `<span class="finder-tag-dot" style="background:${tagColor};"></span>` : '';

      tr.innerHTML = `
        <td style="display:flex;align-items:center;gap:8px;"><span style="font-size:16px;">${icon}</span> ${tagDot}<span>${item.name}</span></td>
        <td>${kind}</td>
        <td style="opacity:0.6;font-size:11px;">${item.type}</td>
      `;

      tr.addEventListener('click', () => {
        tbody.querySelectorAll('.finder-list-row').forEach(r => r.classList.remove('selected'));
        tr.classList.add('selected');
        window.aliceOS.selectedFile = {
          path: targetPath,
          isHost: isHostDir,
          type: item.type,
          name: item.name
        };
      });

      tr.addEventListener('dblclick', () => {
        if (item.type === 'dir') {
          navigateTo(targetPath, isHostDir);
        } else {
          handleFileOpen(item, targetPath, isHostDir);
        }
      });

      tbody.appendChild(tr);
    });

    listWrap.appendChild(table);
  }

  async function renderColumnView() {
    viewContainer.innerHTML = '';
    const colContainer = document.createElement('div');
    colContainer.className = 'finder-columns-container';
    viewContainer.appendChild(colContainer);

    for (let cIdx = 0; cIdx < columnStack.length; cIdx++) {
      const colData = columnStack[cIdx];

      // Insert resizable column splitter between columns
      if (cIdx > 0) {
        const divider = document.createElement('div');
        divider.className = 'finder-col-divider';
        divider.title = 'Drag to resize column / Double-click to auto-fit';

        let startX = 0;
        let startW = 0;
        let targetCol = null;

        const onMouseMove = (e) => {
          const dx = e.clientX - startX;
          const newW = Math.max(140, Math.min(480, startW + dx));
          if (targetCol) {
            targetCol.style.width = `${newW}px`;
            targetCol.style.minWidth = `${newW}px`;
          }
        };

        const onMouseUp = () => {
          divider.classList.remove('resizing');
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
        };

        divider.addEventListener('mousedown', (e) => {
          e.preventDefault();
          startX = e.clientX;
          targetCol = divider.previousElementSibling;
          if (targetCol) {
            startW = targetCol.offsetWidth;
            divider.classList.add('resizing');
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
          }
        });

        divider.addEventListener('dblclick', () => {
          targetCol = divider.previousElementSibling;
          if (targetCol) {
            const fitW = Math.max(160, Math.min(420, targetCol.scrollWidth + 24));
            targetCol.style.width = `${fitW}px`;
            targetCol.style.minWidth = `${fitW}px`;
            if (typeof playVolumeFeedbackBeep === 'function') playVolumeFeedbackBeep();
          }
        });

        colContainer.appendChild(divider);
      }

      if (colData.isPreview) {
        // Render File Preview Column
        const previewEl = document.createElement('div');
        previewEl.className = 'finder-preview-column finder-column-anim-enter';
        let icon = colData.file.name.endsWith('.png') ? '🖼️' : '📄';
        let kind = colData.file.type === 'dir' ? t('finder_folder', 'Folder') : (colData.file.name.endsWith('.png') ? t('finder_png_image', 'PNG Image') : t('finder_plain_text', 'Plain Text Document'));

        const currentTag = getFileTag(colData.targetPath);
        const tagPickersHtml = FINDER_TAG_COLORS.map(c => `
          <div class="finder-tag-circle ${currentTag === c.hex ? 'selected' : ''}" data-color="${c.hex}" style="background:${c.hex};" title="${c.name}"></div>
        `).join('');

        previewEl.innerHTML = `
          <div style="font-size:56px;margin-bottom:12px;">${icon}</div>
          <div style="font-weight:700;font-size:14px;word-break:break-all;margin-bottom:4px;">${colData.file.name}</div>
          <div style="font-size:12px;opacity:0.6;margin-bottom:14px;">${kind}</div>
          
          <div style="background:rgba(0,0,0,0.04);border-radius:10px;padding:10px 14px;width:100%;box-sizing:border-box;font-size:11px;text-align:left;margin-bottom:14px;line-height:1.6;">
            <div><span style="opacity:0.6;">${t('finder_location', 'Location')}:</span> <span style="word-break:break-all;">${colData.targetPath}</span></div>
            <div><span style="opacity:0.6;">${t('finder_kind', 'Kind')}:</span> ${kind}</div>
          </div>

          <div style="width:100%;text-align:left;margin-bottom:16px;">
            <div style="font-size:10px;font-weight:700;letter-spacing:0.5px;opacity:0.6;margin-bottom:6px;">${t('finder_tags', 'TAGS')}</div>
            <div class="finder-tag-picker" style="display:flex;gap:7px;">
              ${tagPickersHtml}
            </div>
          </div>

          <div style="display:flex;gap:10px;width:100%;justify-content:center;">
            <button class="finder-ql-btn" style="background:#007aff;color:white;border:none;padding:6px 14px;border-radius:14px;font-size:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:6px;">
              👁️ ${t('finder_quick_look', 'Quick Look')}
            </button>
            <button class="finder-open-btn" style="background:rgba(0,0,0,0.08);border:none;padding:6px 14px;border-radius:14px;font-size:12px;cursor:pointer;">
              ${t('finder_open', 'Open')}
            </button>
          </div>
        `;

        previewEl.querySelectorAll('.finder-tag-circle').forEach(circle => {
          circle.addEventListener('click', (e) => {
            e.stopPropagation();
            const color = circle.dataset.color;
            setFileTag(colData.targetPath, color);
            if (typeof playVolumeFeedbackBeep === 'function') playVolumeFeedbackBeep();
            renderColumnView();
          });
        });

        previewEl.querySelector('.finder-ql-btn').addEventListener('click', () => {
          if (typeof toggleQuickLook === 'function') {
            toggleQuickLook(colData.file);
          }
        });

        previewEl.querySelector('.finder-open-btn').addEventListener('click', () => {
          handleFileOpen(colData.file, colData.targetPath, colData.isHost);
        });

        colContainer.appendChild(previewEl);
      } else {
        // Directory Column
        const colEl = document.createElement('div');
        colEl.className = 'finder-column' + (cIdx === columnStack.length - 1 ? ' finder-column-anim-enter' : '');
        colContainer.appendChild(colEl);

        let items = await getDirItems(colData.dirPath, colData.isHost);
        if (activeTagFilter) {
          items = items.filter(item => {
            let childPath = colData.isHost 
              ? (colData.dirPath.endsWith('\\\\') ? colData.dirPath + item.name : colData.dirPath + '\\\\' + item.name)
              : (colData.dirPath === '/' ? `/${item.name}` : `${colData.dirPath}/${item.name}`);
            return getFileTag(childPath) === activeTagFilter;
          });
        }

        if (items.length === 0) {
          colEl.innerHTML = '<div style="padding:15px;opacity:0.4;font-size:11px;">' + (activeTagFilter ? t('finder_no_match_tag', 'No files match this tag') : t('finder_empty', 'Empty folder')) + '</div>';
        } else {
          items.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'finder-column-item' + (colData.selectedName === item.name ? ' selected' : '');
            let icon = item.type === 'dir' ? '📁' : '📄';
            if (item.type !== 'dir' && item.name.endsWith('.png')) icon = '🖼️';
            
            let childPath = colData.isHost 
              ? (colData.dirPath.endsWith('\\\\') ? colData.dirPath + item.name : colData.dirPath + '\\\\' + item.name)
              : (colData.dirPath === '/' ? `/${item.name}` : `${colData.dirPath}/${item.name}`);

            const tagColor = getFileTag(childPath);
            const tagDot = tagColor ? `<span class="finder-tag-dot" style="background:${tagColor};"></span>` : '';
            let chevron = item.type === 'dir' ? '<span style="opacity:0.5;font-size:12px;margin-left:auto;">›</span>' : '';
            
            itemEl.innerHTML = `
              <div style="display:flex;align-items:center;gap:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">
                <span>${icon}</span>
                ${tagDot}
                <span style="overflow:hidden;text-overflow:ellipsis;">${item.name}</span>
              </div>
              ${chevron}
            `;

            itemEl.addEventListener('click', async () => {
              colData.selectedName = item.name;
              window.aliceOS.selectedFile = {
                path: childPath,
                isHost: colData.isHost,
                type: item.type,
                name: item.name
              };
              // Truncate following columns
              columnStack = columnStack.slice(0, cIdx + 1);
              if (item.type === 'dir') {
                columnStack.push({ dirPath: childPath, isHost: colData.isHost, selectedName: null });
              } else {
                columnStack.push({
                  isPreview: true,
                  file: { path: childPath, isHost: colData.isHost, type: item.type, name: item.name },
                  targetPath: childPath,
                  isHost: colData.isHost
                });
              }
              await renderColumnView();
            });

            itemEl.addEventListener('dblclick', () => {
              if (item.type !== 'dir') {
                handleFileOpen(item, childPath, colData.isHost);
              }
            });

            colEl.appendChild(itemEl);
          });
        }
      }
    }

    // Auto-scroll to the newest column on right
    colContainer.scrollLeft = colContainer.scrollWidth;
  }

  // View switchers
  btnIcon.addEventListener('click', () => {
    viewMode = 'icon';
    updateSegBtns();
    renderActiveView();
  });
  btnList.addEventListener('click', () => {
    viewMode = 'list';
    updateSegBtns();
    renderActiveView();
  });
  btnCol.addEventListener('click', () => {
    viewMode = 'column';
    updateSegBtns();
    renderActiveView();
  });

  // Navigation actions
  win.querySelector(`#finder-back-${pid}`).addEventListener('click', () => {
    if (historyIdx > 0) {
      historyIdx--;
      navigateTo(history[historyIdx].path, history[historyIdx].host, false);
    }
  });

  win.querySelector(`#finder-forward-${pid}`).addEventListener('click', () => {
    if (historyIdx < history.length - 1) {
      historyIdx++;
      navigateTo(history[historyIdx].path, history[historyIdx].host, false);
    }
  });

  win.querySelector(`#finder-up-${pid}`).addEventListener('click', () => {
    if (isHostDir) {
      if (currentDir.length > 3) {
        let parts = currentDir.split('\\\\');
        parts.pop();
        if (parts.length === 1 && parts[0].endsWith(':')) parts[0] += '\\\\';
        navigateTo(parts.join('\\\\'), true);
      }
    } else {
      if (currentDir !== '/') {
        const parts = currentDir.split('/');
        parts.pop();
        navigateTo(parts.length === 1 ? '/' : parts.join('/'), false);
      }
    }
  });

  win.querySelector(`#finder-refresh-${pid}`).addEventListener('click', () => {
    renderActiveView();
  });

  win.querySelectorAll('.finder-sidebar-item').forEach(el => {
    el.addEventListener('click', () => {
      activeTagFilter = null;
      win.querySelectorAll('.finder-sidebar-tag').forEach(t => t.classList.remove('active'));
      navigateTo(el.dataset.path, el.dataset.host === 'true');
    });
  });

  win.querySelectorAll('.finder-sidebar-tag').forEach(tagEl => {
    tagEl.addEventListener('click', () => {
      const color = tagEl.dataset.tagColor;
      if (activeTagFilter === color) {
        activeTagFilter = null;
        tagEl.classList.remove('active');
      } else {
        win.querySelectorAll('.finder-sidebar-tag').forEach(t => t.classList.remove('active'));
        activeTagFilter = color;
        tagEl.classList.add('active');
      }
      renderActiveView();
    });
  });

  win._onLanguageChange = (lang, dict) => {
    // Update sidebar headers
    const favHeader = win.querySelector('[data-finder-header="fav"]');
    if (favHeader) favHeader.innerText = t('finder_favorites', 'FAVORITES');
    const locHeader = win.querySelector('[data-finder-header="loc"]');
    if (locHeader) locHeader.innerText = t('finder_locations', 'LOCATIONS');
    const tagsHeader = win.querySelector('[data-finder-header="tags"]');
    if (tagsHeader) tagsHeader.innerText = t('finder_tags', 'TAGS');

    // Update sidebar items
    const homeItem = win.querySelector('[data-finder-label="home"]');
    if (homeItem) homeItem.innerText = `🏠 ${t('finder_home', 'Alice Home')}`;
    const deskItem = win.querySelector('[data-finder-label="desktop"]');
    if (deskItem) deskItem.innerText = `🖥️ ${t('finder_desktop', 'Desktop')}`;
    const docItem = win.querySelector('[data-finder-label="documents"]');
    if (docItem) docItem.innerText = `📁 ${t('finder_documents', 'Documents')}`;
    const dlItem = win.querySelector('[data-finder-label="downloads"]');
    if (dlItem) dlItem.innerText = `⬇️ ${t('finder_downloads', 'Downloads')}`;
    const diskItem = win.querySelector('[data-finder-label="disk"]');
    if (diskItem) diskItem.innerText = `💽 ${t('finder_local_disk', 'Local Disk (C:)')}`;

    // Update tag item labels
    win.querySelectorAll('.finder-sidebar-tag').forEach(tagEl => {
      const tagKey = tagEl.dataset.tagKey;
      const span = tagEl.querySelector('span:last-child');
      if (span && tagKey) {
        span.innerText = t(`finder_tag_${tagKey}`, tagKey);
      }
    });

    // Update toolbar button titles
    const backBtn = win.querySelector(`#finder-back-${pid}`);
    if (backBtn) backBtn.title = t('finder_back', 'Back');
    const fwdBtn = win.querySelector(`#finder-forward-${pid}`);
    if (fwdBtn) fwdBtn.title = t('finder_forward', 'Forward');
    const upBtn = win.querySelector(`#finder-up-${pid}`);
    if (upBtn) upBtn.title = t('finder_up', 'Enclosing Folder');
    if (btnIcon) btnIcon.title = t('finder_view_icon', 'Icon View');
    if (btnList) btnList.title = t('finder_view_list', 'List View');
    if (btnCol) btnCol.title = t('finder_view_col', 'Column View');
    const refBtn = win.querySelector(`#finder-refresh-${pid}`);
    if (refBtn) refBtn.title = t('finder_refresh', 'Refresh');

    renderActiveView();
  };

  // Initial render in Column View
  updateSegBtns();
  renderActiveView();
}
async function launchBrowser() {
  const res = await window.aliceOS.pm.spawn('browser');
  if (res.success) {
    const pid = res.data.pid;
    let tabs = [
      { id: 1, title: 'Apple', url: 'https://apple.com', icon: '🍎' },
      { id: 2, title: 'GitHub', url: 'https://github.com', icon: '🐙' }
    ];
    let activeTabId = 1;
    let tabCounter = 2;
    let inOverview = false;

    const win = createWindow(pid, t('app_browser', 'Safari'), `
      <div class="browser-container" style="display:flex;flex-direction:column;height:100%;position:relative;background:#f5f5f7;">
        <!-- Safari Tab Bar -->
        <div class="safari-tab-bar" id="safari-tab-bar-${pid}">
          <div id="safari-tabs-list-${pid}" style="display:flex;align-items:center;gap:6px;flex:1;overflow-x:auto;">
            <!-- Tabs rendered dynamically -->
          </div>
          <button id="safari-new-tab-${pid}" title="${t('safari_new_tab', 'New Tab')}" style="background:rgba(0,0,0,0.06);border:none;border-radius:6px;width:24px;height:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600;color:#555;">+</button>
          <button id="safari-tab-overview-btn-${pid}" title="${t('safari_tab_overview', 'Show All Tabs')}" style="background:rgba(0,0,0,0.06);border:none;border-radius:6px;width:24px;height:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:13px;color:#555;">⊞</button>
        </div>

        <!-- Safari Navigation Toolbar -->
        <div class="browser-toolbar" style="display:flex;align-items:center;gap:10px;padding:8px 14px;background:rgba(255,255,255,0.7);backdrop-filter:blur(20px);border-bottom:1px solid rgba(0,0,0,0.08);">
          <div style="display:flex;gap:4px;">
            <button id="browser-back-${pid}" title="${t('safari_back', 'Back')}" style="background:transparent;border:none;cursor:pointer;font-size:14px;padding:4px 6px;border-radius:6px;opacity:0.7;">◀</button>
            <button id="browser-forward-${pid}" title="${t('safari_forward', 'Forward')}" style="background:transparent;border:none;cursor:pointer;font-size:14px;padding:4px 6px;border-radius:6px;opacity:0.7;">▶</button>
            <button id="browser-refresh-${pid}" title="${t('safari_refresh', 'Refresh')}" style="background:transparent;border:none;cursor:pointer;font-size:14px;padding:4px 6px;border-radius:6px;opacity:0.7;">↻</button>
          </div>

          <!-- Capsule Search / URL bar -->
          <div style="flex:1;display:flex;align-items:center;background:rgba(0,0,0,0.06);border-radius:10px;padding:5px 12px;gap:8px;border:1px solid rgba(0,0,0,0.05);transition:background 0.2s;">
            <span style="font-size:12px;opacity:0.5;">🔒</span>
            <input type="text" id="browser-url-${pid}" value="https://apple.com" placeholder="${t('safari_search_placeholder', 'Search or enter website name')}" style="flex:1;border:none;outline:none;background:transparent;font-size:13px;color:#1d1d1f;font-family:-apple-system,sans-serif;text-align:center;">
            <span id="browser-share-${pid}" style="font-size:12px;opacity:0.5;cursor:pointer;" title="${t('safari_share', 'Download / Share')}">↗</span>
          </div>

          <div style="display:flex;gap:6px;align-items:center;">
            <button id="browser-reader-${pid}" title="${t('safari_reader', 'Reader View')}" style="background:transparent;border:none;cursor:pointer;font-size:14px;padding:4px 6px;border-radius:6px;opacity:0.7;">≡</button>
            <button id="browser-pip-${pid}" title="${t('safari_pip', 'Picture in Picture')}" style="background:transparent;border:none;cursor:pointer;font-size:14px;padding:4px 6px;border-radius:6px;opacity:0.7;">⤢</button>
            
            <!-- Safari Radial Downloads Button -->
            <div id="safari-dl-btn-${pid}" title="${t('safari_downloads', 'Downloads')}" style="position:relative;cursor:pointer;display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;transition:background 0.15s;">
              <svg width="22" height="22" viewBox="0 0 36 36">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(0,0,0,0.12)" stroke-width="3.5"/>
                <path id="safari-dl-ring-${pid}" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#007aff" stroke-width="3.5" stroke-dasharray="100, 100" stroke-dashoffset="100" style="transition:stroke-dashoffset 0.6s cubic-bezier(0.16, 1, 0.3, 1);"/>
              </svg>
              <span style="position:absolute;font-size:10px;color:#007aff;font-weight:bold;">↓</span>
            </div>
          </div>
        </div>

        <!-- Safari Downloads Popover -->
        <div id="safari-dl-popover-${pid}" class="safari-dl-popover">
          <div style="display:flex;align-items:center;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid rgba(0,0,0,0.06);">
            <div style="font-weight:700;font-size:13px;" id="safari-dl-title-${pid}">${t('safari_downloads', 'Downloads')}</div>
            <button id="safari-dl-clear-${pid}" style="background:transparent;border:none;color:#007aff;font-size:11px;font-weight:600;cursor:pointer;">${t('safari_clear', 'Clear')}</button>
          </div>
          <div id="safari-dl-list-${pid}" style="display:flex;flex-direction:column;gap:4px;margin-top:6px;max-height:220px;overflow-y:auto;">
            <div class="safari-dl-item">
              <div style="font-size:22px;">🏞️</div>
              <div style="flex:1;">
                <div style="font-size:12px;font-weight:600;">Sonoma_Coast_4K.heic</div>
                <div style="font-size:10px;color:#34c759;">18.4 MB — ${t('safari_completed', 'Completed')}</div>
              </div>
              <button onclick="launchFinder()" title="${t('safari_show_in_finder', 'Show in Finder')}" style="background:none;border:none;cursor:pointer;font-size:14px;opacity:0.6;">🔍</button>
            </div>
            <div class="safari-dl-item">
              <div style="font-size:22px;">📄</div>
              <div style="flex:1;">
                <div style="font-size:12px;font-weight:600;">AliceOS_Architecture.pdf</div>
                <div style="font-size:10px;color:#34c759;">2.1 MB — ${t('safari_completed', 'Completed')}</div>
              </div>
              <button onclick="launchFinder()" title="${t('safari_show_in_finder', 'Show in Finder')}" style="background:none;border:none;cursor:pointer;font-size:14px;opacity:0.6;">🔍</button>
            </div>
          </div>
        </div>

        <!-- Tab Webviews Container -->
        <div id="safari-frames-container-${pid}" style="flex:1;position:relative;overflow:hidden;display:flex;">
        </div>

        <!-- 3D Tab Overview Grid Overlay -->
        <div id="safari-overview-${pid}" style="position:absolute;top:38px;left:0;width:100%;height:calc(100% - 38px);background:rgba(240,240,245,0.92);backdrop-filter:blur(30px);z-index:20;display:none;flex-direction:column;opacity:0;transition:opacity 0.25s ease;">
          <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 24px;border-bottom:1px solid rgba(0,0,0,0.06);">
            <div style="font-size:15px;font-weight:700;color:#1d1d1f;display:flex;align-items:center;gap:10px;">
              <span id="safari-overview-title-${pid}">${t('safari_tab_overview', 'Safari Tab Overview')}</span>
              <span id="safari-overview-count-${pid}" style="font-size:11px;font-weight:600;opacity:0.65;background:rgba(0,0,0,0.06);padding:2px 8px;border-radius:10px;">${tabs.length} ${t('safari_tabs', 'Tabs')}</span>
            </div>
            <div style="display:flex;align-items:center;gap:10px;">
              <input type="text" id="safari-overview-search-${pid}" placeholder="🔍 ${t('safari_search_tabs', 'Search Tabs...')}" style="border:1px solid rgba(0,0,0,0.1);background:white;padding:5px 12px;border-radius:14px;font-size:12px;outline:none;width:170px;">
              <button id="safari-overview-close-${pid}" style="background:#007aff;color:white;border:none;padding:5px 14px;border-radius:12px;font-size:12px;font-weight:600;cursor:pointer;">${t('safari_done', 'Done')}</button>
            </div>
          </div>
          <div id="safari-overview-grid-${pid}" class="safari-overview-grid">
            <!-- Rendered cards -->
          </div>
        </div>
      </div>
    `);

    const tabsList = win.querySelector(`#safari-tabs-list-${pid}`);
    const framesContainer = win.querySelector(`#safari-frames-container-${pid}`);
    const urlInput = win.querySelector(`#browser-url-${pid}`);
    const overviewEl = win.querySelector(`#safari-overview-${pid}`);
    const overviewGrid = win.querySelector(`#safari-overview-grid-${pid}`);
    const overviewBtn = win.querySelector(`#safari-tab-overview-btn-${pid}`);
    const overviewCloseBtn = win.querySelector(`#safari-overview-close-${pid}`);
    const overviewSearch = win.querySelector(`#safari-overview-search-${pid}`);
    const overviewCount = win.querySelector(`#safari-overview-count-${pid}`);
    const newTabBtn = win.querySelector(`#safari-new-tab-${pid}`);
    const pipBtn = win.querySelector(`#browser-pip-${pid}`);

    function renderTabs() {
      tabsList.innerHTML = '';
      tabs.forEach(t => {
        const tabEl = document.createElement('div');
        tabEl.className = `safari-tab ${t.id === activeTabId ? 'active' : ''}`;
        tabEl.innerHTML = `
          <span>${t.icon || '🌐'}</span>
          <span style="flex:1;overflow:hidden;text-overflow:ellipsis;">${t.title}</span>
          ${tabs.length > 1 ? `<span class="safari-tab-close" data-id="${t.id}">✕</span>` : ''}
        `;
        tabEl.onclick = (e) => {
          if (e.target.classList.contains('safari-tab-close')) {
            e.stopPropagation();
            closeTab(t.id);
            return;
          }
          switchTab(t.id);
        };
        tabsList.appendChild(tabEl);
      });
    }

    function switchTab(tabId) {
      activeTabId = tabId;
      const tab = tabs.find(t => t.id === tabId);
      if (tab) {
        urlInput.value = tab.url;
      }
      renderTabs();

      framesContainer.querySelectorAll('.browser-tab-frame').forEach(f => {
        if (f.dataset.tabId == tabId) {
          f.style.display = 'flex';
        } else {
          f.style.display = 'none';
        }
      });
    }

    function createTab(url = 'https://apple.com', title = 'Apple', icon = '🍎') {
      tabCounter++;
      const newId = tabCounter;
      tabs.push({ id: newId, title, url, icon });

      const frameWrapper = document.createElement('div');
      frameWrapper.className = 'browser-tab-frame';
      frameWrapper.dataset.tabId = newId;
      frameWrapper.style.flex = '1';
      frameWrapper.style.width = '100%';
      frameWrapper.style.height = '100%';
      frameWrapper.style.display = 'none';

      frameWrapper.innerHTML = `
        <webview src="${url}" style="flex:1;border:none;width:100%;height:100%;"></webview>
      `;

      const webview = frameWrapper.querySelector('webview');
      webview.addEventListener('did-navigate', (e) => {
        if (activeTabId === newId) {
          urlInput.value = e.url;
        }
        const t = tabs.find(x => x.id === newId);
        if (t) {
          t.url = e.url;
          t.title = e.url.replace(/^https?:\/\//, '').split('/')[0] || 'Website';
          renderTabs();
        }
      });

      framesContainer.appendChild(frameWrapper);
      switchTab(newId);
    }

    function closeTab(tabId) {
      if (tabs.length <= 1) return;
      const idx = tabs.findIndex(t => t.id === tabId);
      if (idx !== -1) {
        tabs.splice(idx, 1);
        const frameEl = framesContainer.querySelector(`.browser-tab-frame[data-tab-id="${tabId}"]`);
        if (frameEl) frameEl.remove();

        if (activeTabId === tabId) {
          const nextTab = tabs[Math.max(0, idx - 1)];
          if (nextTab) switchTab(nextTab.id);
        } else {
          renderTabs();
        }
      }
      if (inOverview) renderOverview();
    }

    function toggleOverview() {
      inOverview = !inOverview;
      if (inOverview) {
        if (overviewSearch) overviewSearch.value = '';
        renderOverview();
        overviewEl.style.display = 'flex';
        setTimeout(() => {
          overviewEl.style.opacity = '1';
          if (overviewSearch) overviewSearch.focus();
        }, 10);
      } else {
        overviewEl.style.opacity = '0';
        setTimeout(() => { overviewEl.style.display = 'none'; }, 220);
      }
      if (typeof playVolumeFeedbackBeep === 'function') playVolumeFeedbackBeep();
    }

    function renderOverview(filterQuery = '') {
      if (!overviewGrid) return;
      overviewGrid.innerHTML = '';
      if (overviewCount) overviewCount.innerText = `${tabs.length} Tabs`;

      const q = filterQuery.toLowerCase().trim();
      const filteredTabs = q ? tabs.filter(t => t.title.toLowerCase().includes(q) || t.url.toLowerCase().includes(q)) : tabs;

      filteredTabs.forEach(t => {
        const card = document.createElement('div');
        card.className = `safari-overview-card ${t.id === activeTabId ? 'active' : ''}`;
        card.innerHTML = `
          <div style="padding:10px 14px;background:rgba(255,255,255,0.75);display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(0,0,0,0.06);">
            <div style="display:flex;align-items:center;gap:8px;font-size:12px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:140px;">
              <span>${t.icon || '🌐'}</span>
              <span>${t.title}</span>
            </div>
            ${tabs.length > 1 ? `<button class="safari-card-close" data-id="${t.id}" style="background:rgba(0,0,0,0.1);border:none;border-radius:50%;width:20px;height:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:11px;transition:background 0.15s;">✕</button>` : ''}
          </div>
          <div style="flex:1;background:linear-gradient(135deg,rgba(0,122,255,0.06),rgba(88,86,214,0.09));display:flex;flex-direction:column;align-items:center;justify-content:center;color:#666;font-size:11px;padding:14px;text-align:center;">
            <div style="font-size:28px;margin-bottom:6px;opacity:0.75;">${t.icon || '🌐'}</div>
            <div style="font-weight:500;color:#333;word-break:break-all;padding:0 8px;">${t.url}</div>
          </div>
        `;
        card.onclick = (e) => {
          if (e.target.classList.contains('safari-card-close')) {
            e.stopPropagation();
            closeTab(t.id);
            return;
          }
          switchTab(t.id);
          toggleOverview();
        };
        overviewGrid.appendChild(card);
      });

      // "＋ New Tab" Action Card
      const newCard = document.createElement('div');
      newCard.className = 'safari-overview-card';
      newCard.style.border = '2px dashed rgba(0,122,255,0.35)';
      newCard.style.background = 'rgba(255,255,255,0.45)';
      newCard.innerHTML = `
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#007aff;cursor:pointer;">
          <div style="font-size:32px;font-weight:300;margin-bottom:4px;">＋</div>
          <div style="font-weight:600;font-size:12px;">New Tab</div>
        </div>
      `;
      newCard.onclick = () => {
        createTab('https://apple.com', 'Apple', '🍎');
        toggleOverview();
      };
      overviewGrid.appendChild(newCard);
    }

    // Initialize initial tabs
    tabs.forEach(t => {
      const frameWrapper = document.createElement('div');
      frameWrapper.className = 'browser-tab-frame';
      frameWrapper.dataset.tabId = t.id;
      frameWrapper.style.flex = '1';
      frameWrapper.style.width = '100%';
      frameWrapper.style.height = '100%';
      frameWrapper.style.display = t.id === activeTabId ? 'flex' : 'none';

      frameWrapper.innerHTML = `
        <webview src="${t.url}" style="flex:1;border:none;width:100%;height:100%;"></webview>
      `;

      const webview = frameWrapper.querySelector('webview');
      webview.addEventListener('did-navigate', (e) => {
        if (activeTabId === t.id) {
          urlInput.value = e.url;
        }
        t.url = e.url;
        t.title = e.url.replace(/^https?:\/\//, '').split('/')[0] || 'Website';
        renderTabs();
      });

      framesContainer.appendChild(frameWrapper);
    });

    renderTabs();

    function navigate() {
      let url = urlInput.value.trim();
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        if (url.includes('.') && !url.includes(' ')) {
          url = 'https://' + url;
        } else {
          url = 'https://www.bing.com/search?q=' + encodeURIComponent(url);
        }
      }
      const activeFrame = framesContainer.querySelector(`.browser-tab-frame[data-tab-id="${activeTabId}"] webview`);
      if (activeFrame) {
        activeFrame.src = url;
      }
    }

    urlInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') navigate();
    });

    newTabBtn.addEventListener('click', () => {
      createTab('https://bing.com', 'Bing Search', '🔍');
    });

    overviewBtn.addEventListener('click', toggleOverview);
    overviewCloseBtn.addEventListener('click', toggleOverview);

    win.querySelector(`#browser-back-${pid}`).addEventListener('click', () => {
      const activeFrame = framesContainer.querySelector(`.browser-tab-frame[data-tab-id="${activeTabId}"] webview`);
      if (activeFrame && activeFrame.canGoBack()) activeFrame.goBack();
    });

    win.querySelector(`#browser-forward-${pid}`).addEventListener('click', () => {
      const activeFrame = framesContainer.querySelector(`.browser-tab-frame[data-tab-id="${activeTabId}"] webview`);
      if (activeFrame && activeFrame.canGoForward()) activeFrame.goForward();
    });

    win.querySelector(`#browser-refresh-${pid}`).addEventListener('click', () => {
      const activeFrame = framesContainer.querySelector(`.browser-tab-frame[data-tab-id="${activeTabId}"] webview`);
      if (activeFrame) activeFrame.reload();
    });

    pipBtn.addEventListener('click', () => {
      if (typeof openPiP === 'function') {
        openPiP('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', 'Safari Video Preview');
      }
    });

    const dlBtn = win.querySelector(`#safari-dl-btn-${pid}`);
    const dlRing = win.querySelector(`#safari-dl-ring-${pid}`);
    const dlPopover = win.querySelector(`#safari-dl-popover-${pid}`);
    const dlClearBtn = win.querySelector(`#safari-dl-clear-${pid}`);
    const shareBtn = win.querySelector(`#browser-share-${pid}`);

    if (dlBtn && dlPopover) {
      dlBtn.addEventListener('click', () => {
        const isOpen = dlPopover.style.display === 'flex';
        dlPopover.style.display = isOpen ? 'none' : 'flex';
      });
    }

    if (dlClearBtn) {
      dlClearBtn.addEventListener('click', () => {
        const list = win.querySelector(`#safari-dl-list-${pid}`);
        if (list) list.innerHTML = '<div style="font-size:12px;opacity:0.5;text-align:center;padding:15px;">No Downloads</div>';
      });
    }

    if (shareBtn && dlRing && dlPopover) {
      shareBtn.addEventListener('click', () => {
        dlRing.style.strokeDashoffset = '100';
        setTimeout(() => {
          dlRing.style.strokeDashoffset = '0';
          setTimeout(() => {
            dlPopover.style.display = 'flex';
            if (typeof showNotification === 'function') {
              showNotification(t('notif_safari_download', 'Safari Download'), t('notif_safari_saved', 'Saved "Webpage_Archive.html" to Downloads'));
            }
          }, 650);
        }, 50);
      });
    }

    if (overviewBtn) overviewBtn.onclick = toggleOverview;
    if (overviewCloseBtn) overviewCloseBtn.onclick = toggleOverview;
    if (newTabBtn) newTabBtn.onclick = () => createTab('https://apple.com', 'Apple', '🍎');

    if (overviewSearch) {
      overviewSearch.addEventListener('input', (e) => {
        renderOverview(e.target.value);
      });
    }

    win.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === '\\' || e.code === 'Backslash')) {
        e.preventDefault();
        toggleOverview();
      } else if (e.key === 'Escape' && inOverview) {
        toggleOverview();
      }
    });

    win._onLanguageChange = () => {
      const urlInp = win.querySelector(`#browser-url-${pid}`);
      if (urlInp) urlInp.placeholder = t('safari_search_placeholder', 'Search or enter website name');
      const newTabB = win.querySelector(`#safari-new-tab-${pid}`);
      if (newTabB) newTabB.title = t('safari_new_tab', 'New Tab');
      const overviewB = win.querySelector(`#safari-tab-overview-btn-${pid}`);
      if (overviewB) overviewB.title = t('safari_tab_overview', 'Show All Tabs');
      const backB = win.querySelector(`#browser-back-${pid}`);
      if (backB) backB.title = t('safari_back', 'Back');
      const fwdB = win.querySelector(`#browser-forward-${pid}`);
      if (fwdB) fwdB.title = t('safari_forward', 'Forward');
      const refB = win.querySelector(`#browser-refresh-${pid}`);
      if (refB) refB.title = t('safari_refresh', 'Refresh');
      const shareB = win.querySelector(`#browser-share-${pid}`);
      if (shareB) shareB.title = t('safari_share', 'Download / Share');
      const readerB = win.querySelector(`#browser-reader-${pid}`);
      if (readerB) readerB.title = t('safari_reader', 'Reader View');
      const pipB = win.querySelector(`#browser-pip-${pid}`);
      if (pipB) pipB.title = t('safari_pip', 'Picture in Picture');
      const dlB = win.querySelector(`#safari-dl-btn-${pid}`);
      if (dlB) dlB.title = t('safari_downloads', 'Downloads');
      const dlTitle = win.querySelector(`#safari-dl-title-${pid}`);
      if (dlTitle) dlTitle.innerText = t('safari_downloads', 'Downloads');
      const dlClear = win.querySelector(`#safari-dl-clear-${pid}`);
      if (dlClear) dlClear.innerText = t('safari_clear', 'Clear');
      const ovTitle = win.querySelector(`#safari-overview-title-${pid}`);
      if (ovTitle) ovTitle.innerText = t('safari_tab_overview', 'Safari Tab Overview');
      const ovCount = win.querySelector(`#safari-overview-count-${pid}`);
      if (ovCount) ovCount.innerText = `${tabs.length} ${t('safari_tabs', 'Tabs')}`;
      const ovSearch = win.querySelector(`#safari-overview-search-${pid}`);
      if (ovSearch) ovSearch.placeholder = `🔍 ${t('safari_search_tabs', 'Search Tabs...')}`;
      const ovDone = win.querySelector(`#safari-overview-close-${pid}`);
      if (ovDone) ovDone.innerText = t('safari_done', 'Done');
    };
  }
}



async function launchCalculator() {
  const res = await window.aliceOS.pm.spawn('calculator');
  if (res.success) {
    const pid = res.data.pid;
    const win = createWindow(pid, t('app_calculator', 'Calculator'), `
      <div class="calc-container">
        <div class="calc-display" id="calc-display-${pid}">0</div>
        <div class="calc-buttons">
          <button class="calc-btn top" data-val="C">AC</button>
          <button class="calc-btn top" data-val="+/-">+/-</button>
          <button class="calc-btn top" data-val="%">%</button>
          <button class="calc-btn op" data-val="/">/</button>
          
          <button class="calc-btn num" data-val="7">7</button>
          <button class="calc-btn num" data-val="8">8</button>
          <button class="calc-btn num" data-val="9">9</button>
          <button class="calc-btn op" data-val="*">x</button>
          
          <button class="calc-btn num" data-val="4">4</button>
          <button class="calc-btn num" data-val="5">5</button>
          <button class="calc-btn num" data-val="6">6</button>
          <button class="calc-btn op" data-val="-">-</button>
          
          <button class="calc-btn num" data-val="1">1</button>
          <button class="calc-btn num" data-val="2">2</button>
          <button class="calc-btn num" data-val="3">3</button>
          <button class="calc-btn op" data-val="+">+</button>
          
          <button class="calc-btn num zero" data-val="0">0</button>
          <button class="calc-btn num" data-val=".">.</button>
          <button class="calc-btn op" data-val="=">=</button>
        </div>
      </div>
    `);

    // Basic calc logic
    const display = win.querySelector(`#calc-display-${pid}`);
    let current = '0';
    let previous = null;
    let operation = null;

    win.querySelectorAll('.calc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.dataset.val;
        if (btn.classList.contains('num')) {
          if (current === '0') current = val;
          else current += val;
          display.innerText = current;
        } else if (val === 'C') {
          current = '0';
          previous = null;
          operation = null;
          display.innerText = current;
        } else if (val === '=') {
          if (operation && previous !== null) {
            current = String(eval(`${previous} ${operation} ${current}`));
            display.innerText = current;
            previous = null;
            operation = null;
          }
        } else if (['+', '-', '*', '/'].includes(val)) {
          previous = current;
          current = '0';
          operation = val;
        }
      });
    });
  }
}

// Control Center Dropdown
const ccBtn = document.getElementById('cc-btn');
const ccMenu = document.getElementById('control-center');
const brightnessSlider = document.getElementById('cc-brightness');
const brightnessOverlay = document.getElementById('brightness-overlay');

ccBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (ccMenu.style.display === 'flex') {
    ccMenu.style.opacity = '0';
    ccMenu.style.transform = 'translateY(-20px)';
    setTimeout(() => ccMenu.style.display = 'none', 300);
  } else {
    if (ncActive) toggleNotificationCenter();
    ccMenu.style.display = 'flex';
    // Force reflow
    void ccMenu.offsetWidth;
    ccMenu.style.opacity = '1';
    ccMenu.style.transform = 'translateY(0)';
  }
});

// Dynamic Island Logic
let islandTimer;
window.aliceOS.notifyIsland = (icon, title, valuePct) => {
  if (window.aliceOS.islandEnabled === false) return;
  const island = document.getElementById('dynamic-island');
  const content = document.getElementById('island-content');
  const iIcon = document.getElementById('island-icon');
  const iTitle = document.getElementById('island-title');
  const iBar = document.getElementById('island-bar');
  
  if (!island) return;
  
  iIcon.innerText = icon;
  iTitle.innerText = title;
  iBar.style.width = `${valuePct}%`;
  
  // Expand
  island.style.width = '300px';
  island.style.height = '60px';
  island.style.borderRadius = '30px';
  
  setTimeout(() => content.style.opacity = '1', 150);
  
  clearTimeout(islandTimer);
  islandTimer = setTimeout(() => {
    content.style.opacity = '0';
    setTimeout(() => {
      island.style.width = '120px';
      island.style.height = '30px';
      island.style.borderRadius = '20px';
    }, 200);
  }, 2000);
};

if (brightnessSlider) {
  brightnessSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    const opacity = (100 - val) * 0.8 / 100;
    brightnessOverlay.style.opacity = opacity.toString();
    window.aliceOS.notifyIsland('☀️', 'Brightness', val);
  });
}

const volumeSlider = document.getElementById('cc-volume');
if (volumeSlider) {
  volumeSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    window.aliceOS.notifyIsland('🔊', 'Volume', val);
  });
}

document.addEventListener('click', () => {
  if (ccMenu.style.display === 'flex') {
    ccMenu.style.opacity = '0';
    ccMenu.style.transform = 'translateY(-20px)';
    setTimeout(() => ccMenu.style.display = 'none', 300);
  }
  document.getElementById('apple-menu').style.display = 'none';
});

// Prevent click inside ccMenu from closing it
ccMenu.addEventListener('click', (e) => e.stopPropagation());

async function launchSettings() {
  const res = await window.aliceOS.pm.spawn('settings');
  if (res.success) {
    const pid = res.data.pid;
    const win = createWindow(pid, t('app_settings', 'System Settings'), `
      <div class="ventura-settings">
        <!-- Sidebar -->
        <div class="ventura-sidebar">
          <div class="ventura-profile">
            <div class="ventura-avatar">👩‍💻</div>
            <div style="overflow:hidden;">
              <div style="font-weight:600;font-size:13px;white-space:nowrap;text-overflow:ellipsis;">Alice</div>
              <div style="font-size:11px;opacity:0.6;" data-i18n="settings_admin">${t('settings_admin', 'Administrator')}</div>
            </div>
          </div>

          <div class="ventura-nav-item active" data-tab="appearance">
            <div class="ventura-badge" style="background:linear-gradient(135deg,#007aff,#5856d6);">🎨</div>
            <span data-i18n="settings_appearance">${t('settings_appearance', 'Appearance')}</span>
          </div>
          <div class="ventura-nav-item" data-tab="wallpaper">
            <div class="ventura-badge" style="background:linear-gradient(135deg,#af52de,#ff2d55);">🖥️</div>
            <span data-i18n="settings_wallpaper">${t('settings_wallpaper', 'Wallpaper')}</span>
          </div>
          <div class="ventura-nav-item" data-tab="desktop">
            <div class="ventura-badge" style="background:linear-gradient(135deg,#30b0c7,#34c759);">🪟</div>
            <span data-i18n="settings_desktop">${t('settings_desktop', 'Desktop & Stage')}</span>
          </div>
          <div class="ventura-nav-item" data-tab="language">
            <div class="ventura-badge" style="background:linear-gradient(135deg,#5856d6,#007aff);">🌐</div>
            <span data-i18n="settings_lang_region">${t('settings_lang_region', 'Language & Region')}</span>
          </div>
          <div class="ventura-nav-item" data-tab="about">
            <div class="ventura-badge" style="background:linear-gradient(135deg,#8e8e93,#636366);">ℹ️</div>
            <span data-i18n="settings_about">${t('settings_about', 'General & About')}</span>
          </div>
        </div>

        <!-- Content Area -->
        <div class="ventura-content" id="ventura-content-${pid}">
        </div>
      </div>
    `);

    win.style.width = '700px';
    win.style.height = '480px';

    const contentArea = win.querySelector(`#ventura-content-${pid}`);
    const navItems = win.querySelectorAll('.ventura-nav-item');
    const desktopEl = document.getElementById('desktop');

    // Load existing settings
    let currentSettings = { 
      wallpaper: "url('https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1920&q=80')", 
      theme: 'dark', 
      isometric: 'off', 
      island: 'on',
      stageManager: 'off',
      lang: 'zh'
    };
    try {
      const sData = await window.aliceOS.vfs.readFile('/Users/alice/settings.json');
      if (sData.success) {
        currentSettings = { ...currentSettings, ...JSON.parse(sData.data) };
      }
    } catch(e) {}

    async function saveSettings(updates) {
      currentSettings = { ...currentSettings, ...updates };
      await window.aliceOS.vfs.writeFile('/Users/alice/settings.json', JSON.stringify(currentSettings));
    }

    let currentActiveTab = 'appearance';

    function renderTab(tab) {
      currentActiveTab = tab;
      if (tab === 'appearance') {
        contentArea.innerHTML = `
          <h2 style="font-size:20px;margin:0 0 16px 0;font-weight:600;">${t('settings_appearance', 'Appearance')}</h2>
          <div class="ventura-card">
            <div style="font-size:12px;font-weight:600;opacity:0.6;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">${t('settings_theme_mode', 'Theme Mode')}</div>
            <div style="display:flex;gap:20px;">
              <div id="theme-light-card" style="flex:1;cursor:pointer;border-radius:10px;padding:12px;border:2px solid ${document.body.classList.contains('dark-mode') ? 'transparent' : '#007aff'};background:rgba(255,255,255,0.7);text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
                <div style="width:100%;height:60px;background:#f0f0f5;border-radius:6px;margin-bottom:8px;border:1px solid #ddd;display:flex;align-items:center;justify-content:center;color:#333;font-size:22px;">☀️</div>
                <div style="font-weight:600;font-size:13px;color:#333;">${t('settings_light', 'Light')}</div>
              </div>
              <div id="theme-dark-card" style="flex:1;cursor:pointer;border-radius:10px;padding:12px;border:2px solid ${document.body.classList.contains('dark-mode') ? '#007aff' : 'transparent'};background:rgba(0,0,0,0.4);text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.15);">
                <div style="width:100%;height:60px;background:#1e1e24;border-radius:6px;margin-bottom:8px;border:1px solid #444;display:flex;align-items:center;justify-content:center;color:#fff;font-size:22px;">🌙</div>
                <div style="font-weight:600;font-size:13px;color:#fff;">${t('settings_dark', 'Dark')}</div>
              </div>
            </div>
          </div>

          <div class="ventura-card">
            <div class="ventura-row">
              <div>
                <div style="font-weight:600;font-size:13px;">${t('settings_accent_color', 'Accent Color')}</div>
                <div style="font-size:11px;opacity:0.6;">${t('settings_accent_desc', 'Used for buttons, sliders, and highlights')}</div>
              </div>
              <div style="display:flex;gap:8px;">
                <div style="width:20px;height:20px;border-radius:50%;background:#007aff;cursor:pointer;box-shadow:0 0 6px #007aff;"></div>
                <div style="width:20px;height:20px;border-radius:50%;background:#af52de;cursor:pointer;"></div>
                <div style="width:20px;height:20px;border-radius:50%;background:#ff2d55;cursor:pointer;"></div>
                <div style="width:20px;height:20px;border-radius:50%;background:#ff9500;cursor:pointer;"></div>
                <div style="width:20px;height:20px;border-radius:50%;background:#34c759;cursor:pointer;"></div>
              </div>
            </div>
          </div>
        `;

        contentArea.querySelector('#theme-light-card').onclick = async () => {
          document.body.classList.remove('dark-mode');
          await saveSettings({ theme: 'light' });
          renderTab('appearance');
        };
        contentArea.querySelector('#theme-dark-card').onclick = async () => {
          document.body.classList.add('dark-mode');
          await saveSettings({ theme: 'dark' });
          renderTab('appearance');
        };
      }
      else if (tab === 'wallpaper') {
        const wallpapers = [
          { name: 'Dynamic Solar (Sonoma)', val: 'dynamic-solar', preview: 'https://images.unsplash.com/photo-1506744626753-eda8151a1571?w=400&q=80', badge: 'Solar Cycle' },
          { name: 'Dynamic Time (Mojave)', val: 'dynamic-mojave', preview: 'https://images.unsplash.com/photo-1506744626753-eda8151a1571?w=400&q=80', badge: 'Auto Clock' },
          { name: 'macOS Monterey', val: "url('https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1920&q=80')", preview: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=400&q=80' },
          { name: 'macOS Big Sur', val: "url('https://images.unsplash.com/photo-1623869947849-c0ea88bf371f?w=1920&q=80')", preview: 'https://images.unsplash.com/photo-1623869947849-c0ea88bf371f?w=400&q=80' },
          { name: 'Fluid Gradient', val: "url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&q=80')", preview: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80' },
          { name: 'Orange Sunrise', val: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)", preview: '', bg: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)' },
          { name: 'Dark Purple', val: "linear-gradient(135deg, #1a1a1a 0%, #4a2b5c 100%)", preview: '', bg: 'linear-gradient(135deg, #1a1a1a 0%, #4a2b5c 100%)' }
        ];

        const now = new Date();
        const currentHourVal = simulatedSolarHour !== null ? simulatedSolarHour : (now.getHours() + now.getMinutes() / 60);
        const curPhase = getSolarPhaseForHour(currentHourVal);
        const hh = Math.floor(currentHourVal).toString().padStart(2, '0');
        const mm = Math.floor((currentHourVal % 1) * 60).toString().padStart(2, '0');
        const labelStr = `${hh}:${mm} (${SOLAR_PHASES[curPhase].name.split(' ')[0]})`;

        contentArea.innerHTML = `
          <h2 style="font-size:20px;margin:0 0 16px 0;font-weight:600;">${t('settings_wallpaper', 'Wallpaper')}</h2>
          <div style="display:grid;grid-template-columns:repeat(2, 1fr);gap:16px;">
            ${wallpapers.map(wp => {
              const isActive = (window.aliceOS.wallpaperSetting === wp.val) || (currentSettings.wallpaper === wp.val);
              const bgStyle = wp.preview ? `background-image:url('${wp.preview}');background-size:cover;background-position:center;` : `background:${wp.bg};`;
              return `
                <div class="wp-card" data-val="${wp.val}" style="border-radius:12px;overflow:hidden;border:2px solid ${isActive ? '#007aff' : 'rgba(0,0,0,0.1)'};box-shadow:0 4px 12px rgba(0,0,0,0.1);cursor:pointer;transition:transform 0.2s ease;">
                  <div style="height:90px;${bgStyle}position:relative;">
                    ${wp.badge ? `<span style="position:absolute;top:6px;right:6px;background:rgba(0,0,0,0.6);backdrop-filter:blur(10px);color:white;font-size:10px;padding:2px 6px;border-radius:6px;">${wp.badge}</span>` : ''}
                    ${isActive ? `<span style="position:absolute;bottom:6px;right:6px;background:#007aff;color:white;width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;">✓</span>` : ''}
                  </div>
                  <div style="padding:10px;background:rgba(255,255,255,0.8);font-weight:600;font-size:12px;color:#333;">${wp.name}</div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Solar Time-Lapse Simulator Slider Card -->
          <div class="ventura-card" style="margin-top:16px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
              <div>
                <div style="font-weight:600;font-size:13px;">${t('settings_solar_sim', 'Solar Time-Lapse Simulator')}</div>
                <div style="font-size:11px;opacity:0.65;">${t('settings_solar_desc', 'Drag daylight slider to preview 4 solar lighting phases')}</div>
              </div>
              <button id="reset-solar-btn" style="background:#007aff;color:white;border:none;padding:4px 12px;border-radius:12px;font-size:11px;font-weight:600;cursor:pointer;">${t('settings_sync_clock', 'Sync Live Clock')}</button>
            </div>
            <div style="display:flex;align-items:center;gap:12px;">
              <span style="font-size:18px;">☀️</span>
              <input type="range" id="solar-time-slider" min="0" max="23.9" step="0.1" value="${currentHourVal}" style="flex:1;accent-color:#ff9f0a;cursor:pointer;">
              <span id="solar-time-label" style="font-family:'SF Mono', Menlo, monospace;font-size:12px;font-weight:700;width:150px;text-align:right;color:#ff9f0a;">${labelStr}</span>
            </div>
          </div>
        `;

        contentArea.querySelectorAll('.wp-card').forEach(c => {
          c.onclick = async () => {
            const val = c.dataset.val;
            window.aliceOS.wallpaperSetting = val;
            if (val === 'dynamic-solar' || val === 'dynamic-mojave') {
              updateSolarDynamicWallpaper();
            } else {
              const layer = document.getElementById('dynamic-wallpaper-layer');
              const overlay = document.getElementById('dynamic-wallpaper-overlay');
              if (layer) layer.style.display = 'none';
              if (overlay) overlay.style.display = 'none';
              document.body.style.backgroundImage = val;
              document.body.style.backgroundSize = 'cover';
              document.body.style.backgroundPosition = 'center';
            }
            await saveSettings({ wallpaper: val });
            renderTab('wallpaper');
            if (typeof playVolumeFeedbackBeep === 'function') playVolumeFeedbackBeep();
          };
        });

        const slider = contentArea.querySelector('#solar-time-slider');
        const sliderLabel = contentArea.querySelector('#solar-time-label');
        const resetBtn = contentArea.querySelector('#reset-solar-btn');
        if (slider && sliderLabel) {
          slider.oninput = (e) => {
            const h = parseFloat(e.target.value);
            simulatedSolarHour = h;
            window.aliceOS.wallpaperSetting = 'dynamic-solar';
            updateSolarDynamicWallpaper(h);
            const phase = getSolarPhaseForHour(h);
            const hh = Math.floor(h).toString().padStart(2, '0');
            const mm = Math.floor((h % 1) * 60).toString().padStart(2, '0');
            sliderLabel.innerText = `${hh}:${mm} (${SOLAR_PHASES[phase].name.split(' ')[0]})`;
          };
        }
        if (resetBtn) {
          resetBtn.onclick = async () => {
            simulatedSolarHour = null;
            window.aliceOS.wallpaperSetting = 'dynamic-solar';
            updateSolarDynamicWallpaper();
            await saveSettings({ wallpaper: 'dynamic-solar' });
            renderTab('wallpaper');
            if (typeof playVolumeFeedbackBeep === 'function') playVolumeFeedbackBeep();
          };
        }
      }
      else if (tab === 'desktop') {
        const isSM = window.aliceOS.stageManagerEnabled;
        const isDI = window.aliceOS.islandEnabled !== false;
        const is3D = currentSettings.isometric === 'on';

        contentArea.innerHTML = `
          <h2 style="font-size:20px;margin:0 0 16px 0;font-weight:600;">${t('settings_desktop', 'Desktop & Multitasking')}</h2>
          <div class="ventura-card">
            <div class="ventura-row">
              <div>
                <div style="font-weight:600;font-size:13px;">${t('settings_sm_title', 'Stage Manager')}</div>
                <div style="font-size:11px;opacity:0.6;">${t('settings_sm_desc', 'Keep active apps centered while background apps wait on left shelf')}</div>
              </div>
              <label class="ios-switch">
                <input type="checkbox" id="ventura-sm-toggle" ${isSM ? 'checked' : ''}>
                <span class="ios-slider"></span>
              </label>
            </div>
            <div class="ventura-row">
              <div>
                <div style="font-weight:600;font-size:13px;">${t('settings_di_title', 'Dynamic Island')}</div>
                <div style="font-size:11px;opacity:0.6;">${t('settings_di_desc', 'Expandable top capsule for hardware and system notifications')}</div>
              </div>
              <label class="ios-switch">
                <input type="checkbox" id="ventura-di-toggle" ${isDI ? 'checked' : ''}>
                <span class="ios-slider"></span>
              </label>
            </div>
            <div class="ventura-row">
              <div>
                <div style="font-weight:600;font-size:13px;">${t('settings_3d_title', '3D Isometric Desktop')}</div>
                <div style="font-size:11px;opacity:0.6;">${t('settings_3d_desc', 'Cyberpunk 3D perspective projection for desktop viewport')}</div>
              </div>
              <label class="ios-switch">
                <input type="checkbox" id="ventura-3d-toggle" ${is3D ? 'checked' : ''}>
                <span class="ios-slider"></span>
              </label>
            </div>
          </div>
        `;

        const smToggle = contentArea.querySelector('#ventura-sm-toggle');
        smToggle.onchange = (e) => {
          toggleStageManager(e.target.checked);
          saveSettings({ stageManager: e.target.checked ? 'on' : 'off' });
        };

        const diToggle = contentArea.querySelector('#ventura-di-toggle');
        diToggle.onchange = (e) => {
          window.aliceOS.islandEnabled = e.target.checked;
          const islandDom = document.getElementById('dynamic-island');
          if (islandDom) islandDom.style.display = e.target.checked ? 'flex' : 'none';
          saveSettings({ island: e.target.checked ? 'on' : 'off' });
        };

        const tdToggle = contentArea.querySelector('#ventura-3d-toggle');
        tdToggle.onchange = (e) => {
          const on = e.target.checked;
          if (on) {
            desktopEl.style.perspective = '1500px';
            desktopEl.style.transformStyle = 'preserve-3d';
            desktopEl.style.transform = 'rotateX(30deg) rotateY(-10deg) rotateZ(5deg) scale(0.8)';
            desktopEl.style.transition = 'transform 1s cubic-bezier(0.25, 0.8, 0.25, 1)';
            document.body.style.overflow = 'hidden';
          } else {
            desktopEl.style.transform = 'none';
          }
          saveSettings({ isometric: on ? 'on' : 'off' });
        };
      }
      else if (tab === 'language') {
        const dict = i18nDict[currentSystemLang] || i18nDict.en;
        const now = new Date();
        const dateSample = currentSystemLang === 'zh' 
          ? `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`
          : (currentSystemLang === 'ja' ? `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日` : now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
        const currencySample = currentSystemLang === 'zh' ? '¥ 12,345.67' : (currentSystemLang === 'ja' ? '¥ 12,345' : '$ 12,345.67');

        contentArea.innerHTML = `
          <h2 style="font-size:20px;margin:0 0 16px 0;font-weight:600;">${t('settings_lang_region', 'Language & Region')}</h2>
          
          <div class="ventura-card">
            <div style="font-size:12px;font-weight:600;opacity:0.6;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">${t('settings_pref_langs', 'Preferred Languages')}</div>
            
            <div style="display:flex;flex-direction:column;gap:8px;">
              <div class="ventura-row lang-row-card" data-lang="en" style="cursor:pointer;padding:12px;border-radius:10px;background:${currentSystemLang === 'en' ? 'rgba(0,122,255,0.18)' : 'rgba(255,255,255,0.05)'};border:1px solid ${currentSystemLang === 'en' ? '#007aff' : 'rgba(255,255,255,0.1)'};display:flex;justify-content:space-between;align-items:center;">
                <div style="display:flex;align-items:center;gap:12px;">
                  <span style="font-size:24px;">🇺🇸</span>
                  <div>
                    <div style="font-weight:600;font-size:14px;">English</div>
                    <div style="font-size:11px;opacity:0.6;">English (United States) — ${t('lang_primary', 'Primary')}</div>
                  </div>
                </div>
                <div style="font-size:16px;color:#007aff;font-weight:bold;">${currentSystemLang === 'en' ? '✓' : ''}</div>
              </div>

              <div class="ventura-row lang-row-card" data-lang="zh" style="cursor:pointer;padding:12px;border-radius:10px;background:${currentSystemLang === 'zh' ? 'rgba(0,122,255,0.18)' : 'rgba(255,255,255,0.05)'};border:1px solid ${currentSystemLang === 'zh' ? '#007aff' : 'rgba(255,255,255,0.1)'};display:flex;justify-content:space-between;align-items:center;">
                <div style="display:flex;align-items:center;gap:12px;">
                  <span style="font-size:24px;">🇨🇳</span>
                  <div>
                    <div style="font-weight:600;font-size:14px;">简体中文</div>
                    <div style="font-size:11px;opacity:0.6;">Chinese, Simplified — ${t('lang_pref_zh', '首选语言')}</div>
                  </div>
                </div>
                <div style="font-size:16px;color:#007aff;font-weight:bold;">${currentSystemLang === 'zh' ? '✓' : ''}</div>
              </div>

              <div class="ventura-row lang-row-card" data-lang="ja" style="cursor:pointer;padding:12px;border-radius:10px;background:${currentSystemLang === 'ja' ? 'rgba(0,122,255,0.18)' : 'rgba(255,255,255,0.05)'};border:1px solid ${currentSystemLang === 'ja' ? '#007aff' : 'rgba(255,255,255,0.1)'};display:flex;justify-content:space-between;align-items:center;">
                <div style="display:flex;align-items:center;gap:12px;">
                  <span style="font-size:24px;">🇯🇵</span>
                  <div>
                    <div style="font-weight:600;font-size:14px;">日本語</div>
                    <div style="font-size:11px;opacity:0.6;">Japanese — ${t('lang_pref_ja', '優先する言語')}</div>
                  </div>
                </div>
                <div style="font-size:16px;color:#007aff;font-weight:bold;">${currentSystemLang === 'ja' ? '✓' : ''}</div>
              </div>
            </div>
          </div>

          <div class="ventura-card" style="margin-top:16px;">
            <div style="font-size:12px;font-weight:600;opacity:0.6;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">${t('settings_region_example', 'Region Format Example')}</div>
            <div class="ventura-row">
              <span style="font-size:13px;opacity:0.7;">${t('settings_dates', 'Dates')}</span>
              <span style="font-size:13px;font-weight:600;">${dateSample}</span>
            </div>
            <div class="ventura-row">
              <span style="font-size:13px;opacity:0.7;">${t('settings_time', 'Time')}</span>
              <span style="font-size:13px;font-weight:600;">04:00 (24-Hour Time)</span>
            </div>
            <div class="ventura-row">
              <span style="font-size:13px;opacity:0.7;">${t('settings_numbers', 'Numbers')}</span>
              <span style="font-size:13px;font-weight:600;">1,234,567.89</span>
            </div>
            <div class="ventura-row">
              <span style="font-size:13px;opacity:0.7;">${t('settings_currency', 'Currency')}</span>
              <span style="font-size:13px;font-weight:600;">${currencySample}</span>
            </div>
            <div class="ventura-row">
              <span style="font-size:13px;opacity:0.7;">${t('settings_measurement', 'Measurement System')}</span>
              <span style="font-size:13px;font-weight:600;">${currentSystemLang === 'en' ? 'US Customary' : 'Metric (公制)'}</span>
            </div>
          </div>
        `;

        contentArea.querySelectorAll('.lang-row-card').forEach(card => {
          card.onclick = () => {
            const selected = card.getAttribute('data-lang');
            setSystemLanguage(selected);
            renderTab('language');
          };
        });
      }
      else if (tab === 'about') {
        contentArea.innerHTML = `
          <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:20px 0;">
            <div style="font-size:64px;margin-bottom:10px;filter:drop-shadow(0 4px 10px rgba(0,0,0,0.2));"></div>
            <h1 style="margin:0;font-size:24px;font-weight:700;">AliceOS</h1>
            <div style="font-size:13px;opacity:0.7;margin-top:4px;">Sonoma Edition 1.0.0</div>
            
            <div class="ventura-card" style="width:100%;margin-top:24px;text-align:left;">
              <div class="ventura-row">
                <span style="font-size:12px;opacity:0.7;">${t('settings_processor', 'Processor')}</span>
                <span style="font-size:12px;font-weight:600;">${t('settings_processor_val', 'Alice M3 Ultra (Simulated x86_64)')}</span>
              </div>
              <div class="ventura-row">
                <span style="font-size:12px;opacity:0.7;">${t('settings_graphics', 'Graphics')}</span>
                <span style="font-size:12px;font-weight:600;">${t('settings_graphics_val', 'Aero Glass GPU Hardware Accelerated')}</span>
              </div>
              <div class="ventura-row">
                <span style="font-size:12px;opacity:0.7;">${t('settings_vfs', 'Virtual File System')}</span>
                <span style="font-size:12px;font-weight:600;">${t('settings_vfs_val', 'Mounted JSON VFS with Node IPC')}</span>
              </div>
              <div class="ventura-row">
                <span style="font-size:12px;opacity:0.7;">${t('settings_physical_bridge', 'Physical Bridge')}</span>
                <span style="font-size:12px;font-weight:600;color:#34c759;">${t('settings_bridge_connected_val', 'Connected (C:\\ Physical Access)')}</span>
              </div>
            </div>

            <div style="width:100%;text-align:left;font-size:11px;opacity:0.6;margin-top:4px;">
              ${t('settings_about_desc', 'Designed by AliceOS Labs. Inspired by macOS & iOS.')}
            </div>
          </div>
        `;
      }
    }

    // Nav click handlers
    navItems.forEach(item => {
      item.onclick = () => {
        navItems.forEach(n => n.classList.remove('active'));
        item.classList.add('active');
        renderTab(item.dataset.tab);
      };
    });

    win._onLanguageChange = () => {
      win.querySelectorAll('.ventura-nav-item').forEach(item => {
        const tabKey = item.dataset.tab;
        const span = item.querySelector('span');
        if (span) {
          if (tabKey === 'appearance') span.innerText = t('settings_appearance', 'Appearance');
          else if (tabKey === 'wallpaper') span.innerText = t('settings_wallpaper', 'Wallpaper');
          else if (tabKey === 'desktop') span.innerText = t('settings_desktop', 'Desktop & Stage');
          else if (tabKey === 'language') span.innerText = t('settings_lang_region', 'Language & Region');
          else if (tabKey === 'about') span.innerText = t('settings_about', 'General & About');
        }
      });
      const adminLabel = win.querySelector('[data-i18n="settings_admin"]');
      if (adminLabel) adminLabel.innerText = t('settings_admin', 'Administrator');

      renderTab(currentActiveTab);
    };

    // Render initial tab
    renderTab('appearance');
  }
}

// Boot Screen Logic
window.addEventListener('DOMContentLoaded', () => {
  const bootScreen = document.getElementById('boot-screen');
  const bootProgress = document.getElementById('boot-progress');
  
  if (bootScreen && bootProgress) {
    setTimeout(() => {
      bootProgress.style.width = '100%';
    }, 100);
    
    setTimeout(() => {
      bootScreen.style.opacity = '0';
      setTimeout(() => {
        bootScreen.style.display = 'none';
      }, 1000);
    }, 1600);
  }
});



let missionControlActive = false;
function toggleMissionControl() {
  const allWindows = Array.from(windows.values());
  if (allWindows.length === 0) return;

  missionControlActive = !missionControlActive;
  const desktop = document.getElementById('desktop');
  
  if (missionControlActive) {
    desktop.classList.add('mission-control');
    
    // Calculate grid
    const cols = Math.ceil(Math.sqrt(allWindows.length));
    const rows = Math.ceil(allWindows.length / cols);
    const winW = window.innerWidth / cols;
    const winH = window.innerHeight / rows;
    
    allWindows.forEach((win, index) => {
      // Save state
      if (!win.dataset.origTop) {
        win.dataset.origTop = win.style.top;
        win.dataset.origLeft = win.style.left;
        win.dataset.origTransform = win.style.transform;
      }
      
      const row = Math.floor(index / cols);
      const col = index % cols;
      
      const targetX = col * winW + (winW / 2) - (win.offsetWidth / 2);
      const targetY = row * winH + (winH / 2) - (win.offsetHeight / 2) + 30; // +30 for menu bar offset
      
      win.style.transition = 'all 0.5s cubic-bezier(0.25, 1, 0.3, 1)';
      win.style.top = `${targetY}px`;
      win.style.left = `${targetX}px`;
      win.style.transform = 'scale(0.5)';
      win.style.zIndex = 5000 + index;
      
      // Hook up click to exit mission control and focus
      win.onclick = function _mcClick(e) {
        if (!missionControlActive) return;
        e.stopPropagation();
        toggleMissionControl();
        focusWindow(win);
        win.onclick = null;
      };
    });
    
  } else {
    desktop.classList.remove('mission-control');
    allWindows.forEach((win) => {
      win.style.top = win.dataset.origTop;
      win.style.left = win.dataset.origLeft;
      win.style.transform = win.dataset.origTransform || 'none';
      win.onclick = null;
      
      // Clear transition after it's done so dragging doesn't lag
      setTimeout(() => {
        if (!missionControlActive) win.style.transition = 'none';
      }, 500);
    });
  }
}

const launchpad = document.getElementById('launchpad');

// Base App Ecosystem
const baseAppDefs = [
  { id: 'finder', icon: '📁', action: 'launchFinder()' },
  { id: 'terminal', icon: '＞_', action: 'launchTerminal()' },
  { id: 'notes', icon: '📝', action: 'launchNotes()' },
  { id: 'calculator', icon: '🧮', action: 'launchCalculator()' },
  { id: 'browser', icon: '🌐', action: 'launchBrowser()' },
  { id: 'music', icon: '🎵', action: 'launchMusic()' },
  { id: 'camera', icon: '📷', action: 'launchCamera()' },
  { id: 'paint', icon: '🎨', action: 'launchPaint()' },
  { id: 'snake', icon: '🐍', action: 'launchSnake()' },
  { id: 'maps', icon: '🗺️', action: 'launchMaps()' },
  { id: 'video', icon: '🎬', action: 'launchVideo()' },
  { id: 'radar', icon: '👽', action: 'launchRadar()' },
  { id: 'weather', icon: '⛅', action: 'launchWeather()' },
  { id: 'hostinfo', icon: '💻', action: 'launchHostMonitor()' },
  { id: 'hostscreen', icon: '🪞', action: 'launchHostScreen()' },
  { id: 'webhost', icon: '🌐', action: 'launchWebHost()' },
  { id: 'ide', icon: '🧑‍💻', action: 'launchIDE()' },
  { id: 'settings', icon: '⚙️', action: 'launchSettings()' },
  { id: 'flappy', icon: '🎮', action: 'launchFlappy()' },
  { id: 'synth', icon: '🎹', action: 'launchSynth()' },
  { id: 'universe', icon: '🌌', action: 'launchUniverse()' },
  { id: 'activity', icon: '📈', action: 'launchActivityMonitor()' },
  { id: 'store', icon: '🛍️', action: 'launchStore()' },
  { id: 'iphonemirror', icon: '📱', action: 'launchIPhoneMirroring()' }
];

let apps = [];
let launchpadItems = [];

function updateLocalizedApps() {
  const dict = i18nDict[currentSystemLang] || i18nDict.en;
  apps = baseAppDefs.map(def => ({
    ...def,
    name: dict[`app_${def.id}`] || def.id
  }));

  launchpadItems = [
    { type: 'app', id: 'browser', name: dict.app_browser, icon: '🌐', action: 'launchBrowser()' },
    { type: 'app', id: 'iphonemirror', name: dict.app_iphonemirror || 'iPhone Mirroring', icon: '📱', action: 'launchIPhoneMirroring()' },
    { type: 'app', id: 'maps', name: dict.app_maps, icon: '🗺️', action: 'launchMaps()' },
    { type: 'app', id: 'weather', name: dict.app_weather, icon: '⛅', action: 'launchWeather()' },
    { type: 'app', id: 'settings', name: dict.app_settings, icon: '⚙️', action: 'launchSettings()' },
    {
      type: 'folder',
      name: dict.folder_productivity,
      apps: [
        { id: 'finder', name: dict.app_finder, icon: '📁', action: 'launchFinder()' },
        { id: 'terminal', name: dict.app_terminal, icon: '＞_', action: 'launchTerminal()' },
        { id: 'notes', name: dict.app_notes, icon: '📝', action: 'launchNotes()' },
        { id: 'calculator', name: dict.app_calculator, icon: '🧮', action: 'launchCalculator()' },
        { id: 'iphonemirror', name: dict.app_iphonemirror || 'iPhone Mirroring', icon: '📱', action: 'launchIPhoneMirroring()' },
        { id: 'ide', name: dict.app_ide, icon: '🧑‍💻', action: 'launchIDE()' }
      ]
    },
    {
      type: 'folder',
      name: dict.folder_media,
      apps: [
        { id: 'paint', name: dict.app_paint, icon: '🎨', action: 'launchPaint()' },
        { id: 'camera', name: dict.app_camera, icon: '📷', action: 'launchCamera()' },
        { id: 'music', name: dict.app_music, icon: '🎵', action: 'launchMusic()' },
        { id: 'video', name: dict.app_video, icon: '🎬', action: 'launchVideo()' },
        { id: 'synth', name: dict.app_synth, icon: '🎹', action: 'launchSynth()' }
      ]
    },
    {
      type: 'folder',
      name: dict.folder_games,
      apps: [
        { id: 'snake', name: dict.app_snake, icon: '🐍', action: 'launchSnake()' },
        { id: 'flappy', name: dict.app_flappy, icon: '🎮', action: 'launchFlappy()' },
        { id: 'universe', name: dict.app_universe, icon: '🌌', action: 'launchUniverse()' },
        { id: 'radar', name: dict.app_radar, icon: '👽', action: 'launchRadar()' }
      ]
    },
    {
      type: 'folder',
      name: dict.folder_utilities,
      apps: [
        { id: 'activity', name: dict.app_activity, icon: '📈', action: 'launchActivityMonitor()' },
        { id: 'hostinfo', name: dict.app_hostinfo, icon: '💻', action: 'launchHostMonitor()' },
        { id: 'hostscreen', name: dict.app_hostscreen, icon: '🪞', action: 'launchHostScreen()' },
        { id: 'webhost', name: dict.app_webhost, icon: '🌐', action: 'launchWebHost()' },
        { id: 'store', name: dict.app_store, icon: '🛍️', action: 'launchStore()' }
      ]
    }
  ];

  const lp = document.getElementById('launchpad');
  if (lp && lp.style.display === 'flex') {
    renderLaunchpad();
  }
}
updateLocalizedApps();

function openLaunchpadFolder(folderIndex) {
  const folder = launchpadItems[folderIndex];
  if (!folder || folder.type !== 'folder') return;

  const modal = document.getElementById('launchpad-folder-modal');
  const card = document.getElementById('launchpad-folder-card');
  const title = document.getElementById('launchpad-folder-title');
  const grid = document.getElementById('launchpad-folder-grid');

  title.innerText = folder.name;
  grid.innerHTML = folder.apps.map(app => `
    <div style="display:flex;flex-direction:column;align-items:center;cursor:pointer;width:84px;" onclick="closeLaunchpadFolder(); toggleLaunchpad(); ${app.action}">
      <div style="font-size:46px;margin-bottom:8px;background:rgba(255,255,255,0.25);border-radius:18px;width:76px;height:76px;display:flex;justify-content:center;align-items:center;box-shadow:0 4px 15px rgba(0,0,0,0.25);transition:transform 0.15s ease;" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'">
        ${app.icon}
      </div>
      <div style="color:white;text-shadow:0 1px 3px rgba(0,0,0,0.8);font-size:13px;font-weight:500;text-align:center;">${app.name}</div>
    </div>
  `).join('');

  modal.style.display = 'flex';
  setTimeout(() => {
    modal.style.opacity = '1';
    card.style.transform = 'scale(1)';
  }, 10);
}

function closeLaunchpadFolder() {
  const modal = document.getElementById('launchpad-folder-modal');
  const card = document.getElementById('launchpad-folder-card');
  if (!modal) return;
  modal.style.opacity = '0';
  card.style.transform = 'scale(0.8)';
  setTimeout(() => {
    modal.style.display = 'none';
  }, 200);
}

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('launchpad-folder-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLaunchpadFolder();
    });
  }
});

function renderLaunchpad() {
  if (!launchpad) return;
  launchpad.innerHTML = launchpadItems.map((item, idx) => {
    if (item.type === 'app') {
      return `
        <div style="display:flex;flex-direction:column;align-items:center;cursor:pointer;width:100px;margin:20px;" onclick="toggleLaunchpad(); ${item.action}">
          <div style="font-size:55px;margin-bottom:10px;background:rgba(255,255,255,0.2);backdrop-filter:blur(20px);border-radius:22px;border:1px solid rgba(255,255,255,0.25);box-shadow:0 8px 24px rgba(0,0,0,0.25);width:90px;height:90px;display:flex;justify-content:center;align-items:center;transition:transform 0.15s ease;" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'">
            ${item.icon}
          </div>
          <div style="color:white;text-shadow:0 1px 3px rgba(0,0,0,0.8);font-size:14px;font-weight:500;">${item.name}</div>
        </div>
      `;
    } else {
      const miniIcons = item.apps.slice(0, 4).map(a => `<span>${a.icon}</span>`).join('');
      return `
        <div style="display:flex;flex-direction:column;align-items:center;cursor:pointer;width:100px;margin:20px;" onclick="openLaunchpadFolder(${idx})">
          <div class="launchpad-folder-tile">
            ${miniIcons}
          </div>
          <div style="color:white;text-shadow:0 1px 3px rgba(0,0,0,0.8);font-size:14px;font-weight:500;margin-top:10px;">${item.name}</div>
        </div>
      `;
    }
  }).join('');
}

function toggleLaunchpad() {
  closeLaunchpadFolder();
  if (launchpad.style.display === 'flex') {
    launchpad.style.opacity = '0';
    setTimeout(() => launchpad.style.display = 'none', 300);
  } else {
    renderLaunchpad();
    launchpad.style.display = 'flex';
    setTimeout(() => launchpad.style.opacity = '1', 10);
  }
}

launchpad.addEventListener('click', (e) => {
  if (e.target === launchpad) {
    toggleLaunchpad();
  }
});

// Login Logic
let currentUser = 'alice';

function loginUser() {
  const loginScreen = document.getElementById('login-screen');
  const userSelect = document.getElementById('login-user-select');
  const passwordInput = document.getElementById('login-password');
  const loginBox = document.getElementById('login-box');
  const lockGlyph = document.getElementById('lock-glyph');
  const lockHeader = document.getElementById('lock-header-group');

  currentUser = userSelect ? userSelect.value : 'alice';

  // Password verification with iOS Spring Shake
  if (passwordInput && passwordInput.value && passwordInput.value !== '1234' && passwordInput.value !== 'alice' && currentUser !== 'guest') {
    if (loginBox) {
      loginBox.classList.remove('lock-shake');
      void loginBox.offsetWidth;
      loginBox.classList.add('lock-shake');
    }
    passwordInput.value = '';
    return;
  }
  
  // Re-init VFS home dir for user
  window.aliceOS.vfs.mkdir(`/Users/${currentUser}/Desktop`).then(() => {
    refreshDesktop();
  });

  // Animate Lock Glyph to unlocked
  if (lockGlyph) {
    lockGlyph.innerText = '🔓';
    lockGlyph.style.transform = 'scale(1.4)';
  }

  // Play unlock chime
  if (typeof playSystemBeep === 'function') {
    playSystemBeep(1200, 0.05);
    setTimeout(() => playSystemBeep(1600, 0.08), 60);
  }

  // Sonoma Staggered Dissolve: Clock & widgets slide up, login controls scale & dissolve
  if (lockHeader) {
    lockHeader.style.transform = 'translateY(-70px)';
    lockHeader.style.opacity = '0';
  }
  if (loginBox) {
    loginBox.style.transform = 'scale(0.92)';
    loginBox.style.opacity = '0';
  }

  // Smooth iOS 17 / Sonoma Slide-up & Blur Reveal
  setTimeout(() => {
    loginScreen.style.transition = 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease, filter 0.5s ease';
    loginScreen.style.transform = 'translateY(-100vh)';
    loginScreen.style.opacity = '0';
    loginScreen.style.filter = 'blur(20px)';
    
    // Staggered desktop elements entrance
    const menubar = document.getElementById('menu-bar');
    const dock = document.getElementById('dock');
    const widgets = document.getElementById('desktop-widgets');
    if (menubar) {
      menubar.style.transform = 'translateY(-100%)';
      setTimeout(() => {
        menubar.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        menubar.style.transform = 'translateY(0)';
      }, 80);
    }
    if (dock) {
      dock.style.transform = 'translateX(-50%) translateY(35px)';
      setTimeout(() => {
        dock.style.transition = 'transform 0.55s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        dock.style.transform = 'translateX(-50%) translateY(0)';
      }, 120);
    }
    if (widgets) {
      widgets.style.opacity = '0';
      widgets.style.transform = 'translateX(30px)';
      setTimeout(() => {
        widgets.style.transition = 'all 0.55s cubic-bezier(0.16, 1, 0.3, 1)';
        widgets.style.opacity = '1';
        widgets.style.transform = 'translateX(0)';
      }, 180);
    }

    setTimeout(() => {
      loginScreen.style.display = 'none';
      if (lockGlyph) {
        lockGlyph.innerText = '🔒';
        lockGlyph.style.transform = 'scale(1)';
      }
      if (lockHeader) {
        lockHeader.style.transform = 'translateY(0)';
        lockHeader.style.opacity = '1';
      }
      if (loginBox) {
        loginBox.style.transform = 'scale(1)';
        loginBox.style.opacity = '1';
      }
    }, 700);
  }, 200);
}

function lockScreen() {
  const loginScreen = document.getElementById('login-screen');
  const passwordInput = document.getElementById('login-password');
  const lockGlyph = document.getElementById('lock-glyph');
  const lockHeader = document.getElementById('lock-header-group');
  const loginBox = document.getElementById('login-box');
  
  if (passwordInput) passwordInput.value = '';
  if (lockGlyph) {
    lockGlyph.innerText = '🔒';
    lockGlyph.style.transform = 'scale(1)';
  }
  if (lockHeader) {
    lockHeader.style.transform = 'translateY(0)';
    lockHeader.style.opacity = '1';
  }
  if (loginBox) {
    loginBox.style.transform = 'scale(1)';
    loginBox.style.opacity = '1';
  }

  loginScreen.style.display = 'flex';
  loginScreen.style.transform = 'translateY(-100vh)';
  loginScreen.style.opacity = '0';
  loginScreen.style.filter = 'blur(20px)';
  void loginScreen.offsetWidth; // force reflow

  loginScreen.style.transition = 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease, filter 0.5s ease';
  loginScreen.style.transform = 'translateY(0)';
  loginScreen.style.opacity = '1';
  loginScreen.style.filter = 'blur(0px)';

  // Close open popups
  const appleMenu = document.getElementById('apple-menu');
  if (appleMenu) appleMenu.style.display = 'none';
  const ccMenu = document.getElementById('control-center');
  if (ccMenu) ccMenu.style.display = 'none';
  if (typeof closeCCSliderModal === 'function') closeCCSliderModal();
}

function toggleFlashlight() {
  const overlay = document.getElementById('flashlight-overlay');
  if (!overlay) return;
  if (overlay.style.display === 'none' || !overlay.style.display) {
    overlay.style.display = 'block';
    setTimeout(() => overlay.style.opacity = '1', 10);
  } else {
    overlay.style.opacity = '0';
    setTimeout(() => overlay.style.display = 'none', 300);
  }
}

function logoutUser() {
  const loginScreen = document.getElementById('login-screen');
  document.getElementById('login-password').value = '';
  loginScreen.style.display = 'flex';
  loginScreen.style.transform = 'translateY(0)';
  loginScreen.style.filter = 'blur(0px)';
  setTimeout(() => {
    loginScreen.style.opacity = '1';
  }, 10);
  
  // Close all windows
  windows.forEach((win, pid) => {
    window.aliceOS.pm.kill(pid);
    win.remove();
  });
  windows.clear();
  
  // Close Apple Menu
  document.getElementById('apple-menu').style.display = 'none';
}

// macOS Top Menubar Menus Logic
const topMenuIds = ['apple-menu', 'file-menu', 'edit-menu', 'view-menu', 'help-menu'];

function closeAllTopMenus() {
  topMenuIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  document.querySelectorAll('.menubar-left .menu-item').forEach(btn => btn.classList.remove('active'));
}

function toggleTopMenu(e, menuId) {
  if (e) e.stopPropagation();
  const targetMenu = document.getElementById(menuId);
  if (!targetMenu) return;
  const isCurrentlyOpen = targetMenu.style.display === 'flex';
  closeAllTopMenus();
  
  if (!isCurrentlyOpen) {
    targetMenu.style.display = 'flex';
    if (e && e.currentTarget) e.currentTarget.classList.add('active');
    if (typeof playVolumeFeedbackBeep === 'function') playVolumeFeedbackBeep();
  }
}

// Hover navigation between menubar items when one is already open
document.querySelectorAll('.menubar-left .menu-item').forEach(item => {
  item.addEventListener('mouseenter', (e) => {
    const anyOpen = topMenuIds.some(id => document.getElementById(id)?.style.display === 'flex');
    if (anyOpen) {
      const btnId = item.id;
      let targetId = 'apple-menu';
      if (btnId === 'menu-file-btn') targetId = 'file-menu';
      else if (btnId === 'menu-edit-btn') targetId = 'edit-menu';
      else if (btnId === 'menu-view-btn') targetId = 'view-menu';
      else if (btnId === 'menu-help-btn') targetId = 'help-menu';
      toggleTopMenu(e, targetId);
    }
  });
});

const appleBtn = document.getElementById('apple-menu-btn');
if (appleBtn) {
  appleBtn.addEventListener('click', (e) => {
    toggleTopMenu(e, 'apple-menu');
  });
}

document.addEventListener('click', () => {
  closeAllTopMenus();
});

function closeActiveWindow() {
  if (typeof windows !== 'undefined' && windows.size > 0) {
    let topWin = null;
    let maxZ = -1;
    windows.forEach(win => {
      const z = parseInt(win.style.zIndex || '0');
      if (z > maxZ) {
        maxZ = z;
        topWin = win;
      }
    });
    if (topWin) {
      const closeBtn = topWin.querySelector('.control.close');
      if (closeBtn) closeBtn.click();
    }
  }
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
  }
}

function openTrash() {
  if (typeof showNotification === 'function') {
    showNotification(t('app_trash', 'Trash'), t('trash_empty_desc', 'No deleted items found.'), 'Trash', '🗑️');
  }
}

window.toggleTopMenu = toggleTopMenu;
window.closeAllTopMenus = closeAllTopMenus;
window.closeActiveWindow = closeActiveWindow;
window.toggleFullScreen = toggleFullScreen;
window.openTrash = openTrash;

// ==========================================
// Phase 66: macOS Sonoma Interactive Widgets Controllers
// ==========================================
const widgetClockCities = [
  { name: 'Cupertino', tz: 'America/Los_Angeles', label: 'CUP (UTC-7)' },
  { name: 'Tokyo', tz: 'Asia/Tokyo', label: 'TYO (UTC+9)' },
  { name: 'London', tz: 'Europe/London', label: 'LON (UTC+0)' },
  { name: 'New York', tz: 'America/New_York', label: 'NYC (UTC-4)' },
  { name: 'Paris', tz: 'Europe/Paris', label: 'PAR (UTC+2)' }
];
let currentClockCityIdx = 0;

function cycleWidgetClockCity() {
  currentClockCityIdx = (currentClockCityIdx + 1) % widgetClockCities.length;
  const c = widgetClockCities[currentClockCityIdx];
  const cityEl = document.getElementById('widget-clock-city');
  const tzEl = document.getElementById('widget-clock-tz');
  if (cityEl) cityEl.innerText = c.name;
  if (tzEl) tzEl.innerText = c.label;
  if (typeof playVolumeFeedbackBeep === 'function') playVolumeFeedbackBeep();
  updateClock();
}

const widgetWeatherCities = [
  { name: 'Cupertino', temp: '72°', cond: 'Mostly Sunny • H:75° L:55°', icon: '☀️' },
  { name: 'San Francisco', temp: '64°', cond: 'Partly Cloudy • H:66° L:52°', icon: '⛅' },
  { name: 'Tokyo', temp: '68°', cond: 'Light Rain • H:70° L:62°', icon: '🌦️' },
  { name: 'London', temp: '58°', cond: 'Breezy Overcast • H:60° L:48°', icon: '☁️' },
  { name: 'Paris', temp: '62°', cond: 'Clear Sky • H:65° L:50°', icon: '🌤️' },
  { name: 'New York', temp: '76°', cond: 'Sunny • H:80° L:64°', icon: '☀️' }
];
let currentWeatherCityIdx = 0;

function cycleWidgetWeatherCity() {
  currentWeatherCityIdx = (currentWeatherCityIdx + 1) % widgetWeatherCities.length;
  const w = widgetWeatherCities[currentWeatherCityIdx];
  const cityEl = document.getElementById('widget-weather-city');
  const tempEl = document.getElementById('widget-weather-temp');
  const condEl = document.getElementById('widget-weather-cond');
  const iconEl = document.getElementById('widget-weather-icon');
  
  if (cityEl) cityEl.innerText = w.name;
  if (tempEl) tempEl.innerText = w.temp;
  if (condEl) condEl.innerText = w.cond;
  if (iconEl) {
    iconEl.innerText = w.icon;
    iconEl.style.transform = 'scale(1.25) rotate(15deg)';
    setTimeout(() => { iconEl.style.transform = 'scale(1) rotate(0deg)'; }, 300);
  }
  if (typeof playVolumeFeedbackBeep === 'function') playVolumeFeedbackBeep();
}

let widgetSysMode = 'cpu-ram';

function cycleWidgetSysMode() {
  widgetSysMode = widgetSysMode === 'cpu-ram' ? 'net-disk' : 'cpu-ram';
  const title = document.getElementById('widget-sys-title');
  const badge = document.getElementById('widget-sys-badge');
  const cpuLbl = document.getElementById('widget-cpu-lbl');
  const ramLbl = document.getElementById('widget-ram-lbl');
  const cpuBar = document.getElementById('widget-cpu-bar');
  const ramBar = document.getElementById('widget-ram-bar');

  if (widgetSysMode === 'cpu-ram') {
    if (title) title.innerText = 'System Activity';
    if (badge) { badge.innerText = 'NORMAL'; badge.style.color = '#34c759'; badge.style.background = 'rgba(52,199,89,0.25)'; }
    if (cpuLbl) cpuLbl.innerText = 'CPU: 24%';
    if (ramLbl) ramLbl.innerText = 'RAM: 5.8 GB';
    if (cpuBar) { cpuBar.style.width = '24%'; cpuBar.style.background = '#34c759'; }
    if (ramBar) { ramBar.style.width = '36%'; ramBar.style.background = '#007aff'; }
  } else {
    if (title) title.innerText = 'Network & I/O';
    if (badge) { badge.innerText = 'ACTIVE'; badge.style.color = '#ff9500'; badge.style.background = 'rgba(255,149,0,0.25)'; }
    if (cpuLbl) cpuLbl.innerText = '↓ 14.2 MB/s';
    if (ramLbl) ramLbl.innerText = '↑ 1.8 MB/s';
    if (cpuBar) { cpuBar.style.width = '65%'; cpuBar.style.background = '#ff9500'; }
    if (ramBar) { ramBar.style.width = '22%'; ramBar.style.background = '#af52de'; }
  }
  if (typeof playVolumeFeedbackBeep === 'function') playVolumeFeedbackBeep();
}

function updateWidgetSysLive() {
  if (widgetSysMode !== 'cpu-ram') return;
  const cpuBar = document.getElementById('widget-cpu-bar');
  const ramBar = document.getElementById('widget-ram-bar');
  const cpuLbl = document.getElementById('widget-cpu-lbl');
  const ramLbl = document.getElementById('widget-ram-lbl');

  if (cpuBar && ramBar && cpuLbl && ramLbl) {
    const cpuVal = Math.floor(14 + Math.random() * 18);
    const ramVal = (4.8 + Math.random() * 1.2).toFixed(1);
    const ramPct = Math.floor((ramVal / 16) * 100);

    cpuBar.style.width = `${cpuVal}%`;
    ramBar.style.width = `${ramPct}%`;
    cpuLbl.innerText = `CPU: ${cpuVal}%`;
    ramLbl.innerText = `RAM: ${ramVal} GB`;
  }
}
setInterval(updateWidgetSysLive, 2500);

window.cycleWidgetClockCity = cycleWidgetClockCity;
window.cycleWidgetWeatherCity = cycleWidgetWeatherCity;
window.cycleWidgetSysMode = cycleWidgetSysMode;

// ==========================================
// macOS Sonoma / Sequoia Solar Dynamic Wallpaper Engine
// ==========================================
const SOLAR_PHASES = {
  dawn: {
    name: 'Dawn / Sunrise (晨曦金光)',
    bg: "url('https://images.unsplash.com/photo-1506744626753-eda8151a1571?w=1920&q=80')",
    desc: '05:30 - 08:30 Warm golden hour'
  },
  day: {
    name: 'Midday (盛夏白昼)',
    bg: "url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1920&q=80')",
    desc: '08:30 - 17:00 Vivid daylight'
  },
  sunset: {
    name: 'Sunset / Dusk (暮色紫霞)',
    bg: "url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1920&q=80')",
    desc: '17:00 - 19:30 Amber & violet twilight'
  },
  night: {
    name: 'Midnight / Cosmic (深邃星夜)',
    bg: "url('https://images.unsplash.com/photo-1505322022379-7c3353ee6291?w=1920&q=80')",
    desc: '19:30 - 05:30 Celestial indigo & starlight'
  }
};

let currentSolarPhase = null;
let simulatedSolarHour = null; // null for real clock, number (0-23.9) when scrubbing slider

function getSolarPhaseForHour(hour) {
  if (hour >= 5.5 && hour < 8.5) return 'dawn';
  if (hour >= 8.5 && hour < 17.0) return 'day';
  if (hour >= 17.0 && hour < 19.5) return 'sunset';
  return 'night';
}

function updateSolarDynamicWallpaper(forceHour = null) {
  const isDynamic = (window.aliceOS && (window.aliceOS.wallpaperSetting === 'dynamic-solar' || window.aliceOS.wallpaperSetting === 'dynamic-mojave'));
  const layer = document.getElementById('dynamic-wallpaper-layer');
  const overlay = document.getElementById('dynamic-wallpaper-overlay');
  
  if (!isDynamic) {
    if (layer) layer.style.display = 'none';
    if (overlay) overlay.style.display = 'none';
    return;
  }

  if (layer) layer.style.display = 'block';
  if (overlay) overlay.style.display = 'block';

  const now = new Date();
  const effHour = forceHour !== null ? forceHour : (simulatedSolarHour !== null ? simulatedSolarHour : (now.getHours() + now.getMinutes() / 60));
  const targetPhase = getSolarPhaseForHour(effHour);

  if (targetPhase === currentSolarPhase && forceHour === null) return;
  currentSolarPhase = targetPhase;

  const targetBg = SOLAR_PHASES[targetPhase].bg;

  if (layer && overlay) {
    overlay.style.backgroundImage = targetBg;
    overlay.style.opacity = '1';
    setTimeout(() => {
      layer.style.backgroundImage = targetBg;
      overlay.style.opacity = '0';
    }, 1800);
  } else {
    document.body.style.backgroundImage = targetBg;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
  }
}

window.updateSolarDynamicWallpaper = updateSolarDynamicWallpaper;
window.getSolarPhaseForHour = getSolarPhaseForHour;
window.SOLAR_PHASES = SOLAR_PHASES;

// Live Clock Logic
function updateClock() {
  const timeDisplay = document.getElementById('time-display');
  const lockTime = document.getElementById('lock-time');
  const lockDate = document.getElementById('lock-date');
  const widgetTime = document.getElementById('widget-time');
  const widgetDate = document.getElementById('widget-clock-date');
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const localeCode = currentSystemLang === 'zh' ? 'zh-CN' : (currentSystemLang === 'ja' ? 'ja-JP' : 'en-US');
  
  if (timeDisplay) {
    let newTimeStr = '';
    if (currentSystemLang === 'zh') {
      const dayName = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][now.getDay()];
      newTimeStr = `${now.getMonth() + 1}月${now.getDate()}日 ${dayName} ${timeStr}`;
    } else if (currentSystemLang === 'ja') {
      const dayName = ['日', '月', '火', '水', '木', '金', '土'][now.getDay()];
      newTimeStr = `${now.getMonth() + 1}月${now.getDate()}日(${dayName}) ${timeStr}`;
    } else {
      const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][now.getDay()];
      const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][now.getMonth()];
      newTimeStr = `${dayName} ${monthName} ${now.getDate()}  ${timeStr}`;
    }
    if (timeDisplay.innerText !== newTimeStr) {
      timeDisplay.innerText = newTimeStr;
    }
  }
  
  if (widgetTime) {
    const c = widgetClockCities[currentClockCityIdx];
    try {
      const wTimeStr = now.toLocaleTimeString(localeCode, {
        timeZone: c.tz,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      if (widgetTime.innerText !== wTimeStr) widgetTime.innerText = wTimeStr;
      if (widgetDate) {
        const dateStr = now.toLocaleDateString(localeCode, {
          timeZone: c.tz,
          weekday: 'short',
          month: 'short',
          day: 'numeric'
        });
        if (widgetDate.innerText !== dateStr) widgetDate.innerText = dateStr;
      }
    } catch(e) {
      const fallbackStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
      if (widgetTime.innerText !== fallbackStr) widgetTime.innerText = fallbackStr;
    }
  }
  
  if (lockTime && lockDate) {
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const newLockTime = `${hours}:${minutes}`;
    if (lockTime.innerText !== newLockTime) lockTime.innerText = newLockTime;
    
    let newLockDate = '';
    if (currentSystemLang === 'zh') {
      const dayName = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][now.getDay()];
      newLockDate = `${now.getMonth() + 1}月${now.getDate()}日 ${dayName}`;
    } else if (currentSystemLang === 'ja') {
      const dayName = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'][now.getDay()];
      newLockDate = `${now.getMonth() + 1}月${now.getDate()}日 (${dayName})`;
    } else {
      const options = { weekday: 'long', month: 'long', day: 'numeric' };
      newLockDate = now.toLocaleDateString('en-US', options);
    }
    if (lockDate.innerText !== newLockDate) lockDate.innerText = newLockDate;
  }
  
  const ncMonth = document.getElementById('nc-month');
  const ncDay = document.getElementById('nc-day');
  if (ncMonth && ncDay) {
    const newNcMonth = now.toLocaleDateString(localeCode, { month: 'long' }).toUpperCase();
    const newNcDay = String(now.getDate());
    if (ncMonth.innerText !== newNcMonth) ncMonth.innerText = newNcMonth;
    if (ncDay.innerText !== newNcDay) ncDay.innerText = newNcDay;
  }
  
  if (window.aliceOS && (window.aliceOS.wallpaperSetting === 'dynamic-solar' || window.aliceOS.wallpaperSetting === 'dynamic-mojave')) {
    updateSolarDynamicWallpaper();
  }
}
setInterval(updateClock, 1000);
updateClock();

// Multimedia Apps Logic
async function launchMusic() {
  const res = await window.aliceOS.pm.spawn('music');
  if (res.success) {
    const pid = res.data.pid;
    const win = createWindow(pid, t('app_music', 'Music'), `
      <div style="background:#111;height:100%;color:white;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;">
        <div style="font-size:60px;margin-bottom:20px;animation:spin 4s linear infinite;">💿</div>
        <h2 id="music-title-${pid}" style="margin:0 0 10px 0;">${t('music_radio_title', 'Lofi Chill Radio')}</h2>
        <p id="music-sub-${pid}" style="color:#aaa;font-size:12px;margin-bottom:20px;">${t('music_live_stream', 'Live Stream')}</p>
        <audio controls autoplay style="width:100%;">
          <source src="https://stream.zeno.fm/f3wvbbqmdg8uv" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
      <style>
        @keyframes spin { 100% { transform: rotate(360deg); } }
      </style>
    `, 'music');

    win._onLanguageChange = () => {
      const titleEl = win.querySelector(`#music-title-${pid}`);
      if (titleEl) titleEl.innerText = t('music_radio_title', 'Lofi Chill Radio');
      const subEl = win.querySelector(`#music-sub-${pid}`);
      if (subEl) subEl.innerText = t('music_live_stream', 'Live Stream');
    };
  }
}

async function launchCamera() {
  const res = await window.aliceOS.pm.spawn('camera');
  if (res.success) {
    const pid = res.data.pid;
    const win = createWindow(pid, t('app_camera', 'Camera'), `
      <div style="background:black;height:100%;display:flex;flex-direction:column;align-items:center;">
        <video id="webcam-${pid}" autoplay playsinline style="flex-grow:1;width:100%;object-fit:cover;background:#222;"></video>
        <div style="padding:15px;background:#333;width:100%;display:flex;justify-content:center;">
          <button id="snap-${pid}" style="width:50px;height:50px;border-radius:50%;background:white;border:4px solid #ccc;cursor:pointer;"></button>
        </div>
      </div>
    `, 'camera');
    
    const video = win.querySelector(`#webcam-${pid}`);
    const snapBtn = win.querySelector(`#snap-${pid}`);
    let photoCount = 1;
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      video.srcObject = stream;
      
      snapBtn.addEventListener('click', async () => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/png');
        
        // Save to VFS
        const fileName = `photo_${photoCount++}.png`;
        await window.aliceOS.vfs.mkdir(`/Users/${currentUser}/Desktop`);
        await window.aliceOS.vfs.writeFile(`/Users/${currentUser}/Desktop/${fileName}`, dataUrl);
        refreshDesktop();
        
        // Flash effect
        const flash = document.createElement('div');
        flash.style.position = 'absolute';
        flash.style.top = '0'; flash.style.left = '0';
        flash.style.width = '100%'; flash.style.height = '100%';
        flash.style.background = 'white';
        flash.style.zIndex = '999';
        win.appendChild(flash);
        setTimeout(() => flash.remove(), 100);
      });
      
    } catch (err) {
      video.outerHTML = `<div style="color:white;padding:20px;text-align:center;">${t('cam_denied', 'Camera access denied or not found.')}</div>`;
    }
  }
}

// Notification Center State
let ncActive = false;
function toggleNotificationCenter() {
  const sidebar = document.getElementById('nc-sidebar');
  if (!sidebar) return;
  ncActive = !ncActive;
  sidebar.style.right = ncActive ? '0px' : '-400px';
  
  if (ncActive) {
    const ccMenu = document.getElementById('control-center');
    if (ccMenu && ccMenu.style.display === 'flex') {
      ccMenu.style.opacity = '0';
      ccMenu.style.transform = 'translateY(-20px)';
      setTimeout(() => ccMenu.style.display = 'none', 300);
    }
  }
}

// ==========================================
// macOS Notification Chime & Sonoma Banner System
// ==========================================
function playNotificationChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!window._aliceAudioCtx) {
      window._aliceAudioCtx = new AudioContext();
    }
    const ctx = window._aliceAudioCtx;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const now = ctx.currentTime;
    
    // Fundamental tone (1568Hz - G6)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(1567.98, now);
    gain1.gain.setValueAtTime(0, now);
    gain1.gain.linearRampToValueAtTime(0.24, now + 0.005);
    gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.65);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.65);

    // Harmonic overtone (2093Hz - C7)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(2093.00, now);
    gain2.gain.setValueAtTime(0, now);
    gain2.gain.linearRampToValueAtTime(0.20, now + 0.004);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now);
    osc2.stop(now + 0.45);

    // Sparkle chime overtone (3136Hz - G7)
    const osc3 = ctx.createOscillator();
    const gain3 = ctx.createGain();
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(3135.96, now);
    gain3.gain.setValueAtTime(0, now);
    gain3.gain.linearRampToValueAtTime(0.09, now + 0.003);
    gain3.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
    osc3.connect(gain3);
    gain3.connect(ctx.destination);
    osc3.start(now);
    osc3.stop(now + 0.25);
  } catch (e) {
    console.warn('Notification chime error:', e);
  }
}

const ncHistory = [];
function showNotification(title, message, appName = 'AliceOS', appIcon = '🍎') {
  if (!message && title) {
    message = title;
    title = 'AliceOS';
  }

  // Play macOS Glass crystal chime
  playNotificationChime();

  let container = document.getElementById('notification-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'notification-container';
    container.className = 'notification-container';
    document.body.appendChild(container);
  }

  // Infer app icon and app name if default
  let displayIcon = appIcon;
  let displayApp = appName;
  const lowerTitle = (title || '').toLowerCase();
  const lowerApp = (appName || '').toLowerCase();
  if (lowerTitle.includes('safari') || lowerApp.includes('safari')) {
    displayIcon = '🧭'; displayApp = 'Safari';
  } else if (lowerTitle.includes('terminal') || lowerApp.includes('terminal') || lowerTitle.includes('zsh')) {
    displayIcon = '💻'; displayApp = 'Terminal';
  } else if (lowerTitle.includes('music') || lowerApp.includes('music') || lowerTitle.includes('playing')) {
    displayIcon = '🎵'; displayApp = 'Music';
  } else if (lowerTitle.includes('airdrop') || lowerApp.includes('airdrop')) {
    displayIcon = '📡'; displayApp = 'AirDrop';
  } else if (lowerTitle.includes('battery') || lowerTitle.includes('power') || lowerApp.includes('battery')) {
    displayIcon = '🔋'; displayApp = 'Battery';
  } else if (lowerTitle.includes('sound') || lowerTitle.includes('audio') || lowerApp.includes('sound')) {
    displayIcon = '🔊'; displayApp = 'Sound';
  } else if (lowerTitle.includes('note') || lowerApp.includes('note')) {
    displayIcon = '📝'; displayApp = 'Notes';
  } else if (lowerTitle.includes('stage') || lowerTitle.includes('mission')) {
    displayIcon = '🪟'; displayApp = 'Window Manager';
  } else if (lowerTitle.includes('camera') || lowerApp.includes('camera')) {
    displayIcon = '📷'; displayApp = 'Camera';
  }

  // 1. Toast Banner
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-header">
      <div class="toast-app-badge">
        <span style="font-size:13px;">${displayIcon}</span>
        <span>${displayApp}</span>
      </div>
      <div class="toast-time">now</div>
    </div>
    <div class="toast-title">${title}</div>
    <div class="toast-body">${message}</div>
    <div class="toast-actions">
      <button class="toast-btn" onclick="this.closest('.toast').remove()">Clear</button>
      <button class="toast-btn" onclick="this.closest('.toast').remove()">Options</button>
    </div>
  `;
  container.appendChild(toast);

  let dismissed = false;
  const dismiss = () => {
    if (dismissed) return;
    dismissed = true;
    toast.style.transform = 'translateX(120%) scale(0.9)';
    toast.style.opacity = '0';
    setTimeout(() => {
      if (toast.parentElement) toast.remove();
    }, 320);
  };

  let timer = setTimeout(dismiss, 5000);
  toast.addEventListener('mouseenter', () => clearTimeout(timer));
  toast.addEventListener('mouseleave', () => { timer = setTimeout(dismiss, 2500); });

  // 2. Add to Notification Center Sidebar
  ncHistory.unshift({ title, message, app: displayApp, icon: displayIcon, time: new Date() });
  const list = document.getElementById('nc-notifications-list');
  if (list) {
    if (ncHistory.length === 1) list.innerHTML = '';
    const item = document.createElement('div');
    item.style = 'background:rgba(255,255,255,0.1);backdrop-filter:blur(20px);padding:14px;border-radius:16px;border:1px solid rgba(255,255,255,0.12);box-shadow:0 4px 15px rgba(0,0,0,0.2);';
    item.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <div style="display:flex;align-items:center;gap:6px;font-size:11px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;opacity:0.75;">
          <span>${displayIcon}</span>
          <span>${displayApp}</span>
        </div>
        <span style="font-size:10px;opacity:0.5;">Just now</span>
      </div>
      <div style="font-weight:700;font-size:13px;margin-bottom:3px;">${title}</div>
      <div style="font-size:12px;opacity:0.85;line-height:1.4;">${message}</div>
    `;
    list.prepend(item);
  }
}
window.showNotification = showNotification;
window.playNotificationChime = playNotificationChime;
// Activity Monitor Logic
async function launchActivityMonitor() {
  const res = await window.aliceOS.pm.spawn('activity');
  if (res.success) {
    const pid = res.data.pid;
    const win = createWindow(pid, t('app_activity', 'Activity Monitor'), `
      <div class="am-container" style="display:flex;flex-direction:column;height:100%;">
        <div style="height:150px;background:#1a1a1a;padding:10px;position:relative;">
          <div style="color:lime;font-size:12px;margin-bottom:5px;" id="am-ram-lbl-${pid}">${t('am_ram_usage', 'Host RAM Usage (GB)')}</div>
          <canvas id="am-canvas-${pid}" width="400" height="100" style="width:100%;height:100px;border-bottom:1px solid #333;"></canvas>
        </div>
        <div style="flex-grow:1;overflow-y:auto;">
          <table class="am-table">
            <thead>
              <tr>
                <th>${t('am_pid', 'PID')}</th>
                <th>${t('am_name', 'Process Name')}</th>
                <th>${t('am_status', 'Status')}</th>
                <th>${t('am_action', 'Action')}</th>
              </tr>
            </thead>
            <tbody id="am-tbody-${pid}">
            </tbody>
          </table>
        </div>
      </div>
    `);

    const tbody = win.querySelector(`#am-tbody-${pid}`);
    const canvas = win.querySelector(`#am-canvas-${pid}`);
    const ctx = canvas.getContext('2d');
    
    // RAM History
    const ramHistory = new Array(40).fill(0);
    let totalRam = 16; // Default scale until loaded

    async function refreshProcesses() {
      if (!windows.has(pid)) return; // closed
      
      // Plot RAM
      const hostInfo = await window.aliceOS.getHostInfo();
      if (hostInfo.success) {
        const memGb = hostInfo.data.totalmem / (1024 * 1024 * 1024);
        const usedGb = memGb - (hostInfo.data.freemem / (1024 * 1024 * 1024));
        totalRam = memGb;
        
        ramHistory.push(usedGb);
        ramHistory.shift();
        
        // Draw Chart
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Grid
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        ctx.beginPath();
        for(let i=0; i<4; i++) {
          const y = (i/4) * canvas.height;
          ctx.moveTo(0, y); ctx.lineTo(canvas.width, y);
        }
        ctx.stroke();

        // Line
        ctx.strokeStyle = '#0f0';
        ctx.lineWidth = 2;
        ctx.beginPath();
        const step = canvas.width / (ramHistory.length - 1);
        
        ramHistory.forEach((val, i) => {
          const x = i * step;
          const y = canvas.height - ((val / totalRam) * canvas.height);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.stroke();
        
        // Fill
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.fillStyle = 'rgba(0, 255, 0, 0.2)';
        ctx.fill();
      }

      // Update Process Table
      const pRes = await window.aliceOS.pm.listProcesses();
      if (pRes.success) {
        tbody.innerHTML = '';
        pRes.data.forEach(p => {
          const tr = document.createElement('tr');
          const localizedStatus = p.status === 'running' ? t('am_running', 'Running') : p.status;
          tr.innerHTML = `
            <td>${p.pid}</td>
            <td>${p.name}</td>
            <td>${localizedStatus}</td>
            <td><button class="am-btn-kill" data-pid="${p.pid}">${t('am_kill', 'End Process')}</button></td>
          `;
          tbody.appendChild(tr);
        });

        tbody.querySelectorAll('.am-btn-kill').forEach(btn => {
          btn.addEventListener('click', async (e) => {
            const targetPid = parseInt(e.target.dataset.pid);
            if (targetPid === pid) {
              showNotification(t('app_activity', 'Activity Monitor'), t('notif_cannot_kill_self', 'Cannot kill itself directly.'));
              return;
            }
            await window.aliceOS.pm.kill(targetPid);
            
            // Clean up DOM window
            const targetWin = document.getElementById(`window-${targetPid}`);
            if (targetWin) targetWin.remove();
            
            showNotification(t('app_activity', 'Activity Monitor'), t('notif_pid_terminated', 'PID %s terminated.').replace('%s', targetPid));
            refreshProcesses();
          });
        });
      }
      setTimeout(refreshProcesses, 2000); // poll every 2s
    }

    win._onLanguageChange = () => {
      const ramLbl = win.querySelector(`#am-ram-lbl-${pid}`);
      if (ramLbl) ramLbl.innerText = t('am_ram_usage', 'Host RAM Usage (GB)');
      const ths = win.querySelectorAll('.am-table thead th');
      if (ths.length >= 4) {
        ths[0].innerText = t('am_pid', 'PID');
        ths[1].innerText = t('am_name', 'Process Name');
        ths[2].innerText = t('am_status', 'Status');
        ths[3].innerText = t('am_action', 'Action');
      }
      refreshProcesses();
    };

    refreshProcesses();
  }
}

// Hook Notification into login
const _origLogin = loginUser;
loginUser = async function() {
  _origLogin();
  
  try {
     const sData = await window.aliceOS.vfs.readFile('/Users/alice/settings.json');
     if (sData.success) {
        const settings = JSON.parse(sData.data);
        if (settings.lang && i18nDict[settings.lang]) {
          setSystemLanguage(settings.lang, false);
        }
        if (settings.wallpaper) {
           window.aliceOS.wallpaperSetting = settings.wallpaper;
           if (settings.wallpaper !== 'dynamic-mojave') {
             document.body.style.backgroundImage = settings.wallpaper;
             document.body.style.backgroundSize = 'cover';
             document.body.style.backgroundPosition = 'center';
           }
        }
        if (settings.theme === 'dark') {
           document.body.classList.add('dark-mode');
        } else {
           document.body.classList.remove('dark-mode');
        }
        
         if (settings.isometric === 'on') {
            const desktopEl = document.getElementById('desktop');
            desktopEl.style.perspective = '1500px';
            desktopEl.style.transformStyle = 'preserve-3d';
            desktopEl.style.transform = 'rotateX(30deg) rotateY(-10deg) rotateZ(5deg) scale(0.8)';
            desktopEl.style.transition = 'transform 1s cubic-bezier(0.25, 0.8, 0.25, 1)';
            document.body.style.overflow = 'hidden';
         }
         
         window.aliceOS.islandEnabled = settings.island !== 'off';
         const islandDom = document.getElementById('dynamic-island');
         if (islandDom) islandDom.style.display = window.aliceOS.islandEnabled ? 'flex' : 'none';
      }
   } catch(e) {}
  
  setTimeout(() => {
    showNotification(t('notif_system', 'System'), t('notif_welcome', 'Welcome to AliceOS.'));
  }, 1000);
}

// Paint App
async function launchPaint() {
  const res = await window.aliceOS.pm.spawn('paint');
  if (res.success) {
    const pid = res.data.pid;
    const win = createWindow(pid, t('app_paint', 'Paint'), `
      <div style="display:flex;flex-direction:column;height:100%;background:#e0e0e0;">
        <div style="padding:10px;background:#f5f5f5;border-bottom:1px solid #ccc;display:flex;gap:10px;">
          <input type="color" id="paint-color-${pid}" value="#000000">
          <input type="range" id="paint-size-${pid}" min="1" max="50" value="5">
          <button id="paint-clear-${pid}">${t('paint_clear', 'Clear')}</button>
        </div>
        <canvas id="paint-canvas-${pid}" width="800" height="600" style="background:white;flex-grow:1;cursor:crosshair;touch-action:none;"></canvas>
      </div>
    `, 'paint');

    const canvas = win.querySelector(`#paint-canvas-${pid}`);
    const ctx = canvas.getContext('2d');
    const colorPicker = win.querySelector(`#paint-color-${pid}`);
    const sizePicker = win.querySelector(`#paint-size-${pid}`);
    const clearBtn = win.querySelector(`#paint-clear-${pid}`);

    win._onLanguageChange = () => {
      if (clearBtn) clearBtn.innerText = t('paint_clear', 'Clear');
    };

    let isDrawing = false;

    // Adjust canvas internal size to match its CSS size to avoid stretching, but a fixed 800x600 works for simulation.
    // In a real app we'd resize the canvas dynamically.

    function startDraw(e) {
      isDrawing = true;
      draw(e);
    }

    function stopDraw() {
      isDrawing = false;
      ctx.beginPath();
    }

    function draw(e) {
      if (!isDrawing) return;
      
      const rect = canvas.getBoundingClientRect();
      // scale coordinates based on canvas internal size vs display size
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      
      const x = (e.clientX - rect.left) * scaleX;
      const y = (e.clientY - rect.top) * scaleY;

      ctx.lineWidth = sizePicker.value;
      ctx.lineCap = 'round';
      ctx.strokeStyle = colorPicker.value;

      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
    }

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDraw);
    canvas.addEventListener('mouseout', stopDraw);

    clearBtn.addEventListener('click', () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
  }
}

// Snake Game App
async function launchSnake() {
  const res = await window.aliceOS.pm.spawn('snake');
  if (res.success) {
    const pid = res.data.pid;
    const win = createWindow(pid, t('app_snake', 'Snake'), `
      <div style="background:#222;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;">
        <div style="color:white;margin-bottom:10px;font-family:monospace;font-size:20px;"><span id="snake-lbl-${pid}">${t('snake_score', 'Score')}</span>: <span id="snake-score-${pid}">0</span></div>
        <canvas id="snake-canvas-${pid}" width="400" height="400" style="background:#000;border:2px solid #555;"></canvas>
        <div id="snake-hint-${pid}" style="color:#888;margin-top:10px;font-size:12px;">${t('snake_hint', 'Use Arrow Keys to play. Click here to focus.')}</div>
      </div>
    `, 'snake');

    const canvas = win.querySelector(`#snake-canvas-${pid}`);
    const ctx = canvas.getContext('2d');
    const scoreEl = win.querySelector(`#snake-score-${pid}`);
    const scoreLbl = win.querySelector(`#snake-lbl-${pid}`);
    const hintEl = win.querySelector(`#snake-hint-${pid}`);

    win._onLanguageChange = () => {
      if (scoreLbl) scoreLbl.innerText = t('snake_score', 'Score');
      if (hintEl) hintEl.innerText = t('snake_hint', 'Use Arrow Keys to play. Click here to focus.');
    };

    // Game loop logic
    let grid = 16;
    let count = 0;
    let score = 0;
    
    let snake = {
      x: 160,
      y: 160,
      dx: grid,
      dy: 0,
      cells: [],
      maxCells: 4
    };
    
    let apple = {
      x: 320,
      y: 320
    };

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    let animationId;

    function loop() {
      // check if window is closed
      if (!document.getElementById(`window-${pid}`)) {
        cancelAnimationFrame(animationId);
        return;
      }
      
      animationId = requestAnimationFrame(loop);
      
      if (++count < 6) return; // slow down game loop to 10fps
      count = 0;
      
      ctx.clearRect(0,0,canvas.width,canvas.height);
      
      snake.x += snake.dx;
      snake.y += snake.dy;
      
      // wrap snake position horizontally on edge of screen
      if (snake.x < 0) snake.x = canvas.width - grid;
      else if (snake.x >= canvas.width) snake.x = 0;
      
      // wrap snake position vertically on edge of screen
      if (snake.y < 0) snake.y = canvas.height - grid;
      else if (snake.y >= canvas.height) snake.y = 0;
      
      snake.cells.unshift({x: snake.x, y: snake.y});
      if (snake.cells.length > snake.maxCells) snake.cells.pop();
      
      // draw apple
      ctx.fillStyle = 'red';
      ctx.fillRect(apple.x, apple.y, grid-1, grid-1);
      
      // draw snake
      ctx.fillStyle = 'lime';
      snake.cells.forEach(function(cell, index) {
        ctx.fillRect(cell.x, cell.y, grid-1, grid-1);
        
        // snake ate apple
        if (cell.x === apple.x && cell.y === apple.y) {
          snake.maxCells++;
          score++;
          scoreEl.innerText = score;
          apple.x = getRandomInt(0, 25) * grid;
          apple.y = getRandomInt(0, 25) * grid;
        }
        
        // check collision with all cells after this one (modified bubble sort)
        for (let i = index + 1; i < snake.cells.length; i++) {
          if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
            snake.x = 160;
            snake.y = 160;
            snake.cells = [];
            snake.maxCells = 4;
            snake.dx = grid;
            snake.dy = 0;
            score = 0;
            scoreEl.innerText = score;
            apple.x = getRandomInt(0, 25) * grid;
            apple.y = getRandomInt(0, 25) * grid;
          }
        }
      });
    }

    // focus canvas to accept keys
    win.setAttribute('tabindex', '0');
    win.focus();
    win.addEventListener('keydown', function(e) {
      if (e.which === 37 && snake.dx === 0) {
        snake.dx = -grid; snake.dy = 0;
      }
      else if (e.which === 38 && snake.dy === 0) {
        snake.dy = -grid; snake.dx = 0;
      }
      else if (e.which === 39 && snake.dx === 0) {
        snake.dx = grid; snake.dy = 0;
      }
      else if (e.which === 40 && snake.dy === 0) {
        snake.dy = grid; snake.dx = 0;
      }
    });

    // start game
    requestAnimationFrame(loop);
  }
}

// Desktop Context Menu & Icons
const desktopMenu = document.getElementById('desktop-context-menu');
const desktopGrid = document.getElementById('desktop-grid');

// Prevent default context menu and show custom one
document.addEventListener('contextmenu', (e) => {
  // Only show custom menu if clicking directly on body or desktop grid
  if (e.target === document.body || e.target === desktopGrid) {
    e.preventDefault();
    desktopMenu.style.display = 'flex';
    desktopMenu.style.left = `${e.pageX}px`;
    desktopMenu.style.top = `${e.pageY}px`;
  }
});

// Hide menu on normal click
document.addEventListener('click', (e) => {
  if (e.target !== desktopMenu) {
    desktopMenu.style.display = 'none';
  }
});

let folderCount = 1;

async function createNewFolder() {
  desktopMenu.style.display = 'none';
  const folderName = `New Folder ${folderCount++}`;
  const path = `/Users/${currentUser}/Desktop/${folderName.replace(/ /g, '_')}`;
  
  // Actually create it in VFS (silently attempt to make Desktop dir first)
  await window.aliceOS.vfs.mkdir(`/Users/${currentUser}/Desktop`);
  await window.aliceOS.vfs.mkdir(path);
  
  refreshDesktop();
}

let fileCount = 1;

async function createNewTextFile() {
  desktopMenu.style.display = 'none';
  const fileName = `note_${fileCount++}.txt`;
  const path = `/Users/${currentUser}/Desktop/${fileName}`;
  
  await window.aliceOS.vfs.mkdir(`/Users/${currentUser}/Desktop`);
  await window.aliceOS.vfs.writeFile(path, ''); // Create empty file
  
  refreshDesktop();
}

let desktopStacksEnabled = false;

function toggleDesktopStacks() {
  desktopStacksEnabled = !desktopStacksEnabled;
  const toggleEl = document.getElementById('ctx-stacks-toggle');
  if (toggleEl) {
    toggleEl.innerText = desktopStacksEnabled ? ('✓ ' + t('ctx_use_stacks', 'Use Stacks')) : ('🥞 ' + t('ctx_use_stacks', 'Use Stacks'));
  }
  desktopMenu.style.display = 'none';
  refreshDesktop();
  if (typeof showNotification === 'function') {
    showNotification(t('stacks_title', 'Desktop Stacks'), desktopStacksEnabled ? t('stacks_enabled', 'Organized desktop files into stacks') : t('stacks_disabled', 'Restored free desktop file layout'));
  }
}

async function refreshDesktop() {
  const res = await window.aliceOS.vfs.readDir(`/Users/${currentUser}/Desktop`);
  if (!res.success) return;
  desktopGrid.innerHTML = '';

  if (desktopStacksEnabled) {
    // Group items into Stacks
    const stacks = {
      documents: { label: t('stacks_documents', 'Documents'), icon: '📄', items: [] },
      images: { label: t('stacks_images', 'Images'), icon: '🖼️', items: [] },
      folders: { label: t('stacks_folders', 'Folders'), icon: '📁', items: [] }
    };

    res.data.forEach(item => {
      if (item.isDirectory) {
        stacks.folders.items.push(item);
      } else if (item.name.endsWith('.png') || item.name.endsWith('.jpg')) {
        stacks.images.items.push(item);
      } else {
        stacks.documents.items.push(item);
      }
    });

    let startX = 20, startY = 20;
    Object.values(stacks).forEach(stack => {
      if (stack.items.length === 0) return;

      const stackEl = document.createElement('div');
      stackEl.className = 'desktop-stack';
      stackEl.style.position = 'absolute';
      stackEl.style.left = `${startX}px`;
      stackEl.style.top = `${startY}px`;
      startY += 105;
      if (startY > window.innerHeight - 200) {
        startY = 20;
        startX += 100;
      }

      stackEl.innerHTML = `
        <div class="desktop-stack-cards">
          <div class="stack-layer stack-layer-1"></div>
          <div class="stack-layer stack-layer-2"></div>
          <div class="stack-layer-top">${stack.icon}</div>
          <div class="desktop-stack-badge">${stack.items.length}</div>
        </div>
        <div class="desktop-stack-label">${stack.label}</div>
      `;

      let fanEl = null;
      stackEl.onclick = (e) => {
        e.stopPropagation();
        if (fanEl) {
          fanEl.remove();
          fanEl = null;
          return;
        }
        // Remove other open fans
        document.querySelectorAll('.desktop-stack-fan').forEach(f => f.remove());

        fanEl = document.createElement('div');
        fanEl.className = 'desktop-stack-fan';
        fanEl.onclick = (fe) => fe.stopPropagation();

        stack.items.forEach(child => {
          const itemEl = document.createElement('div');
          itemEl.style.display = 'flex';
          itemEl.style.flexDirection = 'column';
          itemEl.style.alignItems = 'center';
          itemEl.style.cursor = 'pointer';
          itemEl.style.width = '64px';
          itemEl.innerHTML = `
            <div style="font-size:28px;">${stack.icon}</div>
            <div style="font-size:10px;color:white;text-align:center;overflow:hidden;text-overflow:ellipsis;width:100%;white-space:nowrap;margin-top:4px;">${child.name}</div>
          `;
          itemEl.ondblclick = () => {
            const targetPath = `/Users/${currentUser}/Desktop/${child.name}`;
            if (child.isDirectory) {
              launchFinder();
            } else if (child.name.endsWith('.png')) {
              launchGallery(targetPath);
            } else {
              launchNotes(targetPath);
            }
          };
          fanEl.appendChild(itemEl);
        });

        stackEl.appendChild(fanEl);
      };

      desktopGrid.appendChild(stackEl);
    });

    return;
  }

  // Regular free-form draggable icons
  let startX = 20;
  let startY = 20;
  res.data.forEach((item, idx) => {
    const isDir = item.isDirectory;
    let icon = isDir ? '📁' : '📄';
    if (!isDir && item.name.endsWith('.png')) icon = '🖼️';
    
    const div = document.createElement('div');
    div.className = 'desktop-icon-wrapper';
    
    // Basic grid layout placement for initial load
    div.style.left = `${startX}px`;
    div.style.top = `${startY}px`;
    startY += 100;
    if (startY > window.innerHeight - 200) {
      startY = 20;
      startX += 100;
    }
    
    div.innerHTML = `
      <div class="icon">${icon}</div>
      <div class="label">${item.name}</div>
    `;
    div.ondblclick = () => {
      if (isDir) {
        launchFinder();
      } else {
        const targetPath = `/Users/${currentUser}/Desktop/${item.name}`;
        if (item.name.endsWith('.png')) {
          launchGallery(targetPath);
        } else {
          launchNotes(targetPath);
        }
      }
    };
    
    // Draggable logic
    let isDragging = false, dragStartX, dragStartY, initialX, initialY;
    div.addEventListener('mousedown', (e) => {
      isDragging = true;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      initialX = parseInt(div.style.left || 0);
      initialY = parseInt(div.style.top || 0);
    });
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStartX;
      const dy = e.clientY - dragStartY;
      div.style.left = `${initialX + dx}px`;
      div.style.top = `${initialY + dy}px`;
    });
    document.addEventListener('mouseup', async (e) => {
      if (!isDragging) return;
      isDragging = false;
      
      // Trash collision check
      const trash = document.getElementById('dock-trash');
      if (trash) {
        const rect = trash.getBoundingClientRect();
        if (e.clientX >= rect.left && e.clientX <= rect.right &&
            e.clientY >= rect.top && e.clientY <= rect.bottom) {
          
          // Delete from VFS
          const targetPath = `/Users/${currentUser}/Desktop/${item.name}`;
          await window.aliceOS.vfs.rm(targetPath);
          
          // Poof animation
          div.style.transition = 'transform 0.3s, opacity 0.3s';
          div.style.transform = 'scale(0)';
          div.style.opacity = '0';
          setTimeout(() => { refreshDesktop(); }, 300);
        }
      }
    });
    
    desktopGrid.appendChild(div);
  });
}

// Initial Desktop load removed, handled by loginUser()

// AI Assistant Logic
const aiBtn = document.getElementById('ai-btn');
const aiPanel = document.getElementById('ai-panel');
const aiChat = document.getElementById('ai-chat');
const aiInput = document.getElementById('ai-input');

let orbActive = false;
function toggleAssistant() {
  const overlay = document.getElementById('alice-orb-overlay');
  const orb = document.getElementById('alice-orb');
  const orbText = document.getElementById('alice-orb-text');
  
  if (!overlay) return;
  orbActive = !orbActive;
  
  if (orbActive) {
    overlay.style.display = 'flex';
    setTimeout(() => {
      overlay.style.opacity = '1';
      orb.style.animation = 'orbPulse 2s infinite ease-in-out';
      orbText.innerText = t('assistant_listening', '正在聆听...');
      
      // Attempt Voice Recognition
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = currentSystemLang === 'zh' ? 'zh-CN' : (currentSystemLang === 'ja' ? 'ja-JP' : 'en-US');
        recognition.interimResults = true;
        recognition.maxAlternatives = 1;
        
        recognition.onresult = (event) => {
          let text = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            text += event.results[i][0].transcript;
          }
          orbText.innerText = text;
          
          if (event.results[0].isFinal) {
            orb.style.animation = 'orbPulse 0.5s infinite ease-in-out';
            orbText.innerText = t('assistant_thinking', '正在思考...');
            setTimeout(() => {
              const reply = t('assistant_reply', '我听到的是：%s。我是 Alice。').replace('%s', text);
              orbText.innerText = reply;
              if (window.speechSynthesis) {
                const utterance = new SpeechSynthesisUtterance(reply);
                window.speechSynthesis.speak(utterance);
                utterance.onend = () => {
                  toggleAssistant(); // close when done
                };
              } else {
                setTimeout(toggleAssistant, 2000);
              }
            }, 1000);
          }
        };
        
        recognition.onerror = () => {
          orbText.innerText = t('assistant_error', '音频解析错误。');
          setTimeout(toggleAssistant, 2000);
        };
        
        recognition.start();
      } else {
        orbText.innerText = t('notif_speech_error', 'Speech API not supported.');
        setTimeout(toggleAssistant, 2000);
      }
    }, 50);
  } else {
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
      orb.style.animation = 'none';
    }, 500);
  }
}

document.getElementById('alice-orb').addEventListener('click', toggleAssistant);

aiInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleAIInput();
});

function appendAIChat(text, isUser = false) {
  const div = document.createElement('div');
  div.style.background = isUser ? '#007aff' : 'rgba(255,255,255,0.8)';
  div.style.color = isUser ? 'white' : '#333';
  div.style.padding = '8px';
  div.style.borderRadius = '8px';
  div.style.alignSelf = isUser ? 'flex-end' : 'flex-start';
  div.style.maxWidth = '80%';
  div.innerText = text;
  aiChat.appendChild(div);
  aiChat.scrollTop = aiChat.scrollHeight;
  
  // TTS (Text-to-Speech) for Alice
  if (!isUser && window.speechSynthesis) {
    // Only speak actual text responses (ignore emojis or short things if you want, but reading all is fine)
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    // Try to find a nice female voice
    const femaleVoice = voices.find(v => v.name.includes('Zira') || v.name.includes('Female') || v.name.includes('Google'));
    if (femaleVoice) utterance.voice = femaleVoice;
    utterance.rate = 1.0;
    utterance.pitch = 1.2; // Slightly higher pitch for "Alice"
    window.speechSynthesis.speak(utterance);
  }
}

async function handleAIInput() {
  const val = aiInput.value.trim().toLowerCase();
  if (!val) return;
  
  aiInput.value = '';
  appendAIChat(val, true);

  setTimeout(async () => {
    let response = "I'm not sure how to help with that.";
    
    if (val.includes('time')) {
      response = `It is currently ${new Date().toLocaleTimeString()}.`;
    } else if (val.includes('open') || val.includes('launch')) {
      if (val.includes('music')) { launchMusic(); response = 'Opening Music Player for you.'; }
      else if (val.includes('camera')) { launchCamera(); response = 'Launching Photo Booth.'; }
      else if (val.includes('calculator')) { launchCalculator(); response = 'Opening Calculator.'; }
      else if (val.includes('terminal')) { launchTerminal(); response = 'Opening Terminal.'; }
      else if (val.includes('paint')) { launchPaint(); response = 'Opening Paint.'; }
      else if (val.includes('maps')) { launchMaps(); response = 'Opening Maps.'; }
      else if (val.includes('radar')) { launchRadar(); response = 'Scanning for extra-terrestrial life... 👽'; }
      else if (val.includes('weather')) { launchWeather(); response = 'Checking the skies...'; }
      else if (val.includes('host') || val.includes('hardware')) { launchHostMonitor(); response = 'Breaching 4th wall... Accessing host hardware.'; }
      else if (val.includes('ide') || val.includes('code')) { launchIDE(); response = 'Opening AliceScript IDE.'; }
      else { response = "I don't know that app."; }
    } else if (val.includes('wallpaper') || val.includes('background')) {
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1000')";
      response = 'I have changed your wallpaper to something fresh!';
    } else if (val.includes('hello') || val.includes('hi')) {
      response = 'Hello! I am Alice, your personal OS assistant. Try asking me to open an app!';
    } else if (val.includes('notify') && val.includes('host')) {
      if (window.aliceOS.hostNotify) {
         window.aliceOS.hostNotify('Alice Assistant', 'Hello from the Virtual Machine!');
         response = 'I have sent a physical push notification to your host machine.';
      } else {
         response = 'Host notification bridge is offline.';
      }
    }
    
    appendAIChat(response, false);
  }, 400);
}

// Voice Recognition Integration
function startVoiceRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    showNotification(t('msg_error', 'Error'), t('notif_speech_error', 'Speech API not supported.'));
    return;
  }
  
  const recognition = new SpeechRecognition();
  recognition.lang = currentSystemLang === 'zh' ? 'zh-CN' : (currentSystemLang === 'ja' ? 'ja-JP' : 'en-US');
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  
  const micBtn = document.getElementById('ai-mic-btn');
  const originalBg = micBtn.style.background;
  micBtn.style.background = '#4CAF50';
  
  recognition.start();
  
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById('ai-input').value = transcript;
    handleAIInput();
  };
  
  recognition.onspeechend = () => {
    recognition.stop();
  };
  
  recognition.onend = () => {
    micBtn.style.background = originalBg;
  };
  
  recognition.onerror = (event) => {
    micBtn.style.background = originalBg;
  };
}

// System Audio Engine
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playClickSound() {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.type = 'sine';
  osc.frequency.setValueAtTime(800, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.05);
  gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.05);
}

// Bind click sound to global clicks (except inputs/textareas to avoid spam)
document.addEventListener('mousedown', (e) => {
  if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
    playClickSound();
  }
});

// macOS Lock Screen Logic
let idleTimer;
const loginScreen = document.getElementById('login-screen');

function startScreensaver() {
  if (loginScreen.style.display !== 'none') return;
  loginScreen.style.opacity = '1';
  loginScreen.style.display = 'flex';
}

// Spotlight Search Logic
const spotlight = document.getElementById('spotlight');
const spotlightInput = document.getElementById('spotlight-input');
const spotlightResults = document.getElementById('spotlight-results');

function toggleSpotlight() {
  if (spotlight.style.display === 'none' || !spotlight.style.display) {
    spotlight.style.display = 'flex';
    setTimeout(() => { spotlight.style.opacity = '1'; spotlightInput.focus(); }, 10);
  } else {
    spotlight.style.opacity = '0';
    setTimeout(() => { spotlight.style.display = 'none'; spotlightInput.value = ''; spotlightResults.style.display = 'none'; }, 200);
  }
}

// Global hotkey for Spotlight (Ctrl+Space or CMD+Space equivalent)
document.addEventListener('keydown', async (e) => {
  if (e.ctrlKey && e.code === 'Space') {
    toggleSpotlight();
  }
  if (e.code === 'Escape' && spotlight.style.display === 'flex') {
    toggleSpotlight();
  }
  
  // macOS Lock Screen Hotkey (Ctrl+Alt+L or Cmd+Ctrl+Q)
  if ((e.ctrlKey && e.altKey && e.code === 'KeyL') || (e.metaKey && e.ctrlKey && e.code === 'KeyQ')) {
    lockScreen();
  }
  
  // macOS Quick Look (Spacebar on selected file)
  if (e.code === 'Space' && !e.ctrlKey) {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
    const overlay = document.getElementById('quick-look-overlay');
    if (overlay && overlay.style.display === 'flex') {
      e.preventDefault();
      toggleQuickLook();
      return;
    }
    if (window.aliceOS && window.aliceOS.selectedFile) {
      e.preventDefault();
      toggleQuickLook();
    }
  }

  // Quick Look Arrow Navigation
  const qlOverlay = document.getElementById('quick-look-overlay');
  if (qlOverlay && qlOverlay.style.display === 'flex') {
    if (e.code === 'ArrowLeft') {
      e.preventDefault();
      quickLookNavigate(-1);
      return;
    }
    if (e.code === 'ArrowRight') {
      e.preventDefault();
      quickLookNavigate(1);
      return;
    }
  }

  // StandBy Display toggle (Ctrl+Alt+S)
  if (e.ctrlKey && e.altKey && e.code === 'KeyS') {
    const sb = document.getElementById('standby-overlay');
    if (sb && sb.style.display === 'flex') {
      exitStandByMode();
    } else {
      enterStandByMode();
    }
  }

  // Volume HUD shortcuts (Ctrl+Alt+Up / Ctrl+Alt+Down)
  if (e.ctrlKey && e.altKey && (e.code === 'ArrowUp' || e.code === 'ArrowDown')) {
    e.preventDefault();
    const volSlider = document.getElementById('cc-volume');
    let currentVol = volSlider ? parseInt(volSlider.value) : 50;
    if (e.code === 'ArrowUp') currentVol = Math.min(100, currentVol + 5);
    if (e.code === 'ArrowDown') currentVol = Math.max(0, currentVol - 5);
    if (volSlider) {
      volSlider.value = currentVol;
      volSlider.dispatchEvent(new Event('input'));
    }
    if (typeof showVolumeHUD === 'function') showVolumeHUD(currentVol);
    if (typeof playVolumeFeedbackBeep === 'function') playVolumeFeedbackBeep();
  }
  
  // Close quick look & StandBy on escape
  if (e.code === 'Escape') {
    const overlay = document.getElementById('quick-look-overlay');
    if (overlay && overlay.style.display === 'flex') {
      overlay.style.opacity = '0';
      const box = document.getElementById('quick-look-box');
      if (box) box.style.transform = 'scale(0.92)';
      setTimeout(() => overlay.style.display = 'none', 200);
    }
    const sb = document.getElementById('standby-overlay');
    if (sb && sb.style.display === 'flex') {
      exitStandByMode();
    }
    if (typeof closeCCSliderModal === 'function') {
      closeCCSliderModal();
    }
  }
});

// ==========================================
// Phase 67: macOS Quick Look 3D Multi-File Carousel Engine
// ==========================================
let quickLookFiles = [];
let quickLookIndex = 0;

async function toggleQuickLook(targetFile) {
  const overlay = document.getElementById('quick-look-overlay');
  const box = document.getElementById('quick-look-box');
  if (!overlay || !box) return;

  if (overlay.style.display === 'flex' && !targetFile) {
    overlay.style.opacity = '0';
    box.style.transform = 'scale(0.92)';
    setTimeout(() => overlay.style.display = 'none', 200);
    return;
  }

  const activeFile = targetFile || (window.aliceOS && window.aliceOS.selectedFile);
  if (!activeFile) return;

  // Retrieve sibling files in directory
  try {
    let dirPath = '/Users/' + (currentUser || 'alice') + '/Desktop';
    if (activeFile.path) {
      const parts = activeFile.path.split('/');
      parts.pop();
      dirPath = parts.join('/') || '/';
    }
    const dirRes = await window.aliceOS.vfs.readDir(dirPath);
    if (dirRes && dirRes.success && Array.isArray(dirRes.data) && dirRes.data.length > 0) {
      quickLookFiles = dirRes.data.map(item => ({
        ...item,
        path: dirPath === '/' ? `/${item.name}` : `${dirPath}/${item.name}`
      }));
    } else {
      quickLookFiles = [activeFile];
    }
  } catch (err) {
    quickLookFiles = [activeFile];
  }

  quickLookIndex = quickLookFiles.findIndex(f => f.name === activeFile.name);
  if (quickLookIndex < 0) quickLookIndex = 0;

  overlay.style.display = 'flex';
  setTimeout(() => {
    overlay.style.opacity = '1';
    box.style.transform = 'scale(1)';
  }, 10);

  await renderQuickLookCurrentItem();
}

async function renderQuickLookCurrentItem() {
  const title = document.getElementById('quick-look-title');
  const counter = document.getElementById('quick-look-counter');
  const content = document.getElementById('quick-look-content');
  const prevBtn = document.getElementById('ql-prev-btn');
  const nextBtn = document.getElementById('ql-next-btn');
  const metaKind = document.getElementById('ql-meta-kind');
  const metaSize = document.getElementById('ql-meta-size');
  const metaDate = document.getElementById('ql-meta-date');

  if (!quickLookFiles || !quickLookFiles.length) return;
  const file = quickLookFiles[quickLookIndex];
  if (!file) return;

  if (title) title.innerText = file.name;
  if (counter) {
    if (currentSystemLang === 'zh') {
      counter.innerText = `第 ${quickLookIndex + 1} 个，共 ${quickLookFiles.length} 个`;
    } else if (currentSystemLang === 'ja') {
      counter.innerText = `${quickLookFiles.length} 個中 ${quickLookIndex + 1} 個`;
    } else {
      counter.innerText = `${quickLookIndex + 1} of ${quickLookFiles.length}`;
    }
  }

  if (prevBtn) prevBtn.disabled = quickLookFiles.length <= 1;
  if (nextBtn) nextBtn.disabled = quickLookFiles.length <= 1;

  if (content) content.innerHTML = '<div style="font-size:20px;color:#aaa;">Loading...</div>';

  let kind = 'Document';
  let sizeStr = '-- KB';

  if (file.type === 'dir') {
    kind = 'Folder';
    if (content) {
      content.innerHTML = `
        <div style="text-align:center;animation:fadeIn 0.2s ease;">
          <div style="font-size:90px;filter:drop-shadow(0 10px 25px rgba(0,0,0,0.4));">📁</div>
          <div style="font-size:24px;font-weight:600;margin-top:14px;">${file.name}</div>
          <div style="font-size:13px;opacity:0.65;margin-top:4px;">macOS Folder Directory</div>
        </div>
      `;
    }
  } else if (file.isHost) {
    kind = 'Physical File';
    if (content) {
      content.innerHTML = `
        <div style="text-align:center;">
          <div style="font-size:84px;filter:drop-shadow(0 10px 20px rgba(0,0,0,0.3));">📄</div>
          <div style="font-size:20px;font-weight:600;margin-top:10px;">${file.name}</div>
          <div style="font-size:13px;opacity:0.65;margin-top:4px;">Physical Host Storage File</div>
        </div>
      `;
    }
  } else {
    const res = await window.aliceOS.vfs.readFile(file.path);
    if (res && res.success) {
      const len = res.data ? res.data.length : 0;
      sizeStr = len > 1024 ? `${(len / 1024).toFixed(1)} KB` : `${len} Bytes`;

      if (file.name.endsWith('.png') || file.name.endsWith('.jpg') || file.name.endsWith('.webp')) {
        kind = 'PNG Image';
        if (content) {
          content.innerHTML = `
            <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
              <img src="${res.data}" style="max-width:92%;max-height:92%;object-fit:contain;border-radius:10px;box-shadow:0 15px 40px rgba(0,0,0,0.55);">
            </div>
          `;
        }
      } else if (file.name.endsWith('.json')) {
        kind = 'JSON Data';
        if (content) {
          content.innerHTML = `<pre style="font-family:'SF Mono', Menlo, monospace;font-size:13px;line-height:1.55;white-space:pre-wrap;text-align:left;width:100%;height:100%;overflow:auto;margin:0;color:#9cdcfe;background:rgba(0,0,0,0.35);padding:20px;border-radius:10px;box-sizing:border-box;">${res.data.substring(0, 4000)}</pre>`;
        }
      } else if (file.name.endsWith('.md')) {
        kind = 'Markdown Document';
        if (content) {
          content.innerHTML = `<div style="font-family:-apple-system, sans-serif;font-size:14px;line-height:1.65;white-space:pre-wrap;text-align:left;width:100%;height:100%;overflow:auto;padding:20px;color:#eee;background:rgba(0,0,0,0.25);border-radius:10px;box-sizing:border-box;">${res.data.substring(0, 4000)}</div>`;
        }
      } else {
        kind = 'Plain Text';
        if (content) {
          content.innerHTML = `<pre style="font-family:'SF Mono', Menlo, monospace;font-size:13px;line-height:1.55;white-space:pre-wrap;text-align:left;width:100%;height:100%;overflow:auto;margin:0;color:#eee;background:rgba(0,0,0,0.3);padding:20px;border-radius:10px;box-sizing:border-box;">${res.data.substring(0, 4000)}</pre>`;
        }
      }
    } else {
      if (content) content.innerHTML = '<div style="color:#ff453a;font-size:16px;">Unable to read file preview</div>';
    }
  }

  const qlDict = i18nDict[currentSystemLang] || i18nDict.en;
  if (metaKind) metaKind.innerText = kind;
  if (metaSize) metaSize.innerText = sizeStr;
  if (metaDate) metaDate.innerText = qlDict.ql_modified_today || 'Modified Today';
}

function quickLookNavigate(delta) {
  if (!quickLookFiles || quickLookFiles.length <= 1) return;
  quickLookIndex = (quickLookIndex + delta + quickLookFiles.length) % quickLookFiles.length;
  renderQuickLookCurrentItem();
  if (typeof playSystemBeep === 'function') playSystemBeep(880, 0.04);
}

function quickLookOpenInApp() {
  if (!quickLookFiles.length) return;
  const file = quickLookFiles[quickLookIndex];
  if (!file) return;
  toggleQuickLook(); // close preview
  if (file.type === 'dir') {
    launchFinder(file.path);
  } else if (file.name.endsWith('.png') || file.name.endsWith('.jpg')) {
    launchGallery(file.path);
  } else {
    launchNotes(file.path);
  }
}

window.toggleQuickLook = toggleQuickLook;
window.quickLookNavigate = quickLookNavigate;
window.quickLookOpenInApp = quickLookOpenInApp;

// Password input Enter key listener
document.addEventListener('DOMContentLoaded', () => {
  const pwdInput = document.getElementById('login-password');
  if (pwdInput) {
    pwdInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') loginUser();
    });
  }
});

// --- macOS Hot Corners Engine ---
let cornerTimer = null;
let lastCorner = null;

document.addEventListener('mousemove', (e) => {
  const margin = 4;
  const w = window.innerWidth;
  const h = window.innerHeight;

  let currentCorner = null;
  if (e.clientX <= margin && e.clientY <= margin) currentCorner = 'top-left';
  else if (e.clientX >= w - margin && e.clientY <= margin) currentCorner = 'top-right';
  else if (e.clientX >= w - margin && e.clientY >= h - margin) currentCorner = 'bottom-right';
  else if (e.clientX <= margin && e.clientY >= h - margin) currentCorner = 'bottom-left';

  if (currentCorner !== lastCorner) {
    if (cornerTimer) clearTimeout(cornerTimer);
    lastCorner = currentCorner;
    if (currentCorner) {
      cornerTimer = setTimeout(() => {
        triggerHotCorner(currentCorner);
      }, 300);
    }
  }
});

function triggerHotCorner(corner) {
  if (corner === 'top-left') {
    toggleMissionControl();
    showNotification(t('notif_hot_corner', 'Hot Corner'), t('notif_mission_control', 'Mission Control summoned'));
  } else if (corner === 'top-right') {
    toggleNotificationCenter();
  } else if (corner === 'bottom-right') {
    createStickyNote();
    showNotification(t('notif_hot_corner', 'Hot Corner'), t('notif_sticky_created', 'Quick Sticky Note created'));
  } else if (corner === 'bottom-left') {
    lockScreen();
  }
}

// --- iOS / macOS AirDrop Engine ---
function openAirDrop(fileName = 'Shared Item') {
  const modal = document.getElementById('airdrop-modal');
  if (!modal) return;
  modal.style.display = 'flex';
  setTimeout(() => {
    modal.style.opacity = '1';
  }, 10);
}

function closeAirDrop() {
  const modal = document.getElementById('airdrop-modal');
  if (!modal) return;
  modal.style.opacity = '0';
  setTimeout(() => {
    modal.style.display = 'none';
  }, 250);
}

function sendAirDrop(deviceName, deviceIcon) {
  if (typeof playClickSound === 'function') playClickSound();
  showNotification(t('airdrop_title', 'AirDrop'), t('notif_airdrop_sent', 'Sent file to %s').replace('%s', `${deviceName} ${deviceIcon}`));
  if (window.aliceOS && window.aliceOS.notifyIsland) {
    window.aliceOS.notifyIsland(deviceIcon, `AirDrop to ${deviceName}`, 100);
  }
  setTimeout(() => {
    closeAirDrop();
  }, 800);
}

// --- macOS App Switcher HUD Engine (Cmd+Tab / Alt+Tab) ---
let switcherActive = false;
let switcherIndex = 0;
let openAppList = [];

document.addEventListener('keydown', (e) => {
  if ((e.altKey && e.code === 'Tab') || (e.metaKey && e.code === 'Tab')) {
    e.preventDefault();
    const openWins = Array.from(windows.values()).filter(w => !w.dataset.isMinimized);
    if (openWins.length === 0) return;

    const hud = document.getElementById('app-switcher-hud');
    if (!hud) return;

    if (!switcherActive) {
      switcherActive = true;
      openAppList = openWins;
      switcherIndex = openAppList.length > 1 ? 1 : 0;
      hud.style.display = 'flex';
      setTimeout(() => {
        hud.style.opacity = '1';
        hud.style.transform = 'translate(-50%, -50%) scale(1)';
      }, 10);
    } else {
      switcherIndex = (switcherIndex + 1) % openAppList.length;
    }

    renderSwitcherHUD(hud);
  }
});

document.addEventListener('keyup', (e) => {
  if (switcherActive && (e.key === 'Alt' || e.key === 'Meta')) {
    switcherActive = false;
    const hud = document.getElementById('app-switcher-hud');
    if (hud) {
      hud.style.opacity = '0';
      hud.style.transform = 'translate(-50%, -50%) scale(0.9)';
      setTimeout(() => { hud.style.display = 'none'; }, 180);
    }
    
    if (openAppList[switcherIndex]) {
      focusWindow(openAppList[switcherIndex]);
      if (window.aliceOS && window.aliceOS.stageManagerEnabled) {
        updateStageManager(openAppList[switcherIndex]);
      }
    }
  }
});

function renderSwitcherHUD(hud) {
  hud.innerHTML = openAppList.map((win, idx) => {
    const icon = win.dataset.icon || '🪟';
    const title = win.dataset.title || win.querySelector('.title')?.innerText || 'App';
    const isActive = idx === switcherIndex;
    return `
      <div class="switcher-item ${isActive ? 'active' : ''}">
        <div class="switcher-item-icon">${icon}</div>
        <div class="switcher-item-name">${title}</div>
      </div>
    `;
  }).join('');
}

let spotlightSelectedIndex = -1;

function updateSpotlightSelection() {
  const items = spotlightResults.querySelectorAll('.spotlight-result-item');
  items.forEach((item, idx) => {
    const titleEl = item.querySelector('.spotlight-item-title');
    const subEl = item.querySelector('.spotlight-item-sub');
    if (idx === spotlightSelectedIndex) {
      item.style.background = '#007aff';
      item.style.borderRadius = '6px';
      if (titleEl) titleEl.style.color = '#ffffff';
      if (subEl) subEl.style.color = 'rgba(255, 255, 255, 0.85)';
      item.scrollIntoView({ block: 'nearest' });
    } else {
      item.style.background = 'transparent';
      if (titleEl) titleEl.style.color = '#333333';
      if (subEl) subEl.style.color = '#888888';
    }
  });
}

spotlightInput.addEventListener('keydown', (e) => {
  const items = spotlightResults.querySelectorAll('.spotlight-result-item');
  if (!items || items.length === 0) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    spotlightSelectedIndex = (spotlightSelectedIndex + 1) % items.length;
    updateSpotlightSelection();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    spotlightSelectedIndex = (spotlightSelectedIndex - 1 + items.length) % items.length;
    updateSpotlightSelection();
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (spotlightSelectedIndex >= 0 && spotlightSelectedIndex < items.length) {
      items[spotlightSelectedIndex].click();
    } else if (items.length > 0) {
      items[0].click();
    }
  }
});

spotlightInput.addEventListener('input', async () => {
  const query = spotlightInput.value.trim().toLowerCase();
  spotlightResults.innerHTML = '';
  spotlightSelectedIndex = -1;
  
  if (!query) {
    spotlightResults.style.display = 'none';
    return;
  }
  
  spotlightResults.style.display = 'block';
  let hasResults = false;

  function addResult(icon, title, subtitle, action) {
    hasResults = true;
    const el = document.createElement('div');
    el.className = 'spotlight-result-item';
    el.style.padding = '10px 20px';
    el.style.cursor = 'pointer';
    el.style.display = 'flex';
    el.style.alignItems = 'center';
    el.style.gap = '15px';
    el.style.borderBottom = '1px solid rgba(0,0,0,0.05)';
    el.style.transition = 'background-color 0.12s ease';
    el.innerHTML = `<div style="font-size:24px;">${icon}</div><div><div class="spotlight-item-title" style="font-weight:bold;color:#333;">${title}</div><div class="spotlight-item-sub" style="font-size:12px;color:#888;">${subtitle}</div></div>`;
    el.addEventListener('click', () => { action(); toggleSpotlight(); });
    el.addEventListener('mouseenter', () => {
      const allItems = Array.from(spotlightResults.querySelectorAll('.spotlight-result-item'));
      spotlightSelectedIndex = allItems.indexOf(el);
      updateSpotlightSelection();
    });
    spotlightResults.appendChild(el);
  }

  // 1. Check Currency Conversion (e.g., "100 usd in cny", "50 eur to usd", "1000 jpy in usd")
  const currMatch = query.match(/^(\d+(?:\.\d+)?)\s*(usd|cny|eur|jpy|gbp|aud|cad|hkd)\s*(?:in|to|=)?\s*(usd|cny|eur|jpy|gbp|aud|cad|hkd)$/i);
  if (currMatch) {
    const amount = parseFloat(currMatch[1]);
    const fromCurr = currMatch[2].toLowerCase();
    const toCurr = currMatch[3].toLowerCase();
    const rates = {
      usd: 1.0,
      cny: 7.23,
      eur: 0.92,
      jpy: 155.45,
      gbp: 0.79,
      aud: 1.52,
      cad: 1.37,
      hkd: 7.82
    };
    const symbols = {
      usd: '$',
      cny: '¥',
      eur: '€',
      jpy: '¥',
      gbp: '£',
      aud: 'A$',
      cad: 'C$',
      hkd: 'HK$'
    };
    if (rates[fromCurr] && rates[toCurr]) {
      const inUSD = amount / rates[fromCurr];
      const targetVal = (inUSD * rates[toCurr]).toFixed(2);
      const sym = symbols[toCurr] || '';
      addResult(
        '💱',
        `${sym}${targetVal} ${toCurr.toUpperCase()}`,
        `${amount} ${fromCurr.toUpperCase()} = ${sym}${targetVal} ${toCurr.toUpperCase()} (1 ${fromCurr.toUpperCase()} ≈ ${(rates[toCurr] / rates[fromCurr]).toFixed(4)})`,
        () => {
          navigator.clipboard.writeText(`${targetVal}`);
          if (typeof showNotification === 'function') showNotification(t('spotlight_curr_converter', 'Currency Converter'), t('spotlight_copied', 'Copied to clipboard!'));
        }
      );
    }
  }

  // 2. Check Unit Conversions (e.g., "100 km in miles", "37 c in f", "10 kg in lbs", "16 gb in mb")
  const unitMatch = query.match(/^(\d+(?:\.\d+)?)\s*(km|miles?|mi|m|ft|cm|in|inch|kg|lbs?|pound|g|oz|c|f|gb|mb|tb)\s*(?:in|to|=)?\s*(km|miles?|mi|m|ft|cm|in|inch|kg|lbs?|pound|g|oz|c|f|gb|mb|tb)$/i);
  if (unitMatch) {
    const val = parseFloat(unitMatch[1]);
    const fromUnit = unitMatch[2].toLowerCase();
    const toUnit = unitMatch[3].toLowerCase();
    let resVal = null;
    let label = '';

    if (fromUnit === 'km' && (toUnit === 'miles' || toUnit === 'mi' || toUnit === 'mile')) {
      resVal = (val * 0.621371).toFixed(2);
      label = 'Miles';
    } else if ((fromUnit === 'miles' || fromUnit === 'mi' || fromUnit === 'mile') && toUnit === 'km') {
      resVal = (val / 0.621371).toFixed(2);
      label = 'Kilometers';
    } else if (fromUnit === 'c' && toUnit === 'f') {
      resVal = ((val * 9 / 5) + 32).toFixed(1);
      label = '°F';
    } else if (fromUnit === 'f' && toUnit === 'c') {
      resVal = ((val - 32) * 5 / 9).toFixed(1);
      label = '°C';
    } else if (fromUnit === 'kg' && (toUnit === 'lbs' || toUnit === 'lb' || toUnit === 'pound')) {
      resVal = (val * 2.20462).toFixed(2);
      label = 'Pounds (lbs)';
    } else if ((fromUnit === 'lbs' || fromUnit === 'lb' || fromUnit === 'pound') && toUnit === 'kg') {
      resVal = (val / 2.20462).toFixed(2);
      label = 'Kilograms (kg)';
    } else if (fromUnit === 'gb' && toUnit === 'mb') {
      resVal = (val * 1024).toLocaleString();
      label = 'Megabytes (MB)';
    } else if (fromUnit === 'mb' && toUnit === 'gb') {
      resVal = (val / 1024).toFixed(2);
      label = 'Gigabytes (GB)';
    } else if (fromUnit === 'tb' && toUnit === 'gb') {
      resVal = (val * 1024).toLocaleString();
      label = 'Gigabytes (GB)';
    }

    if (resVal !== null) {
      addResult(
        '📐',
        `${resVal} ${label}`,
        `${val} ${fromUnit.toUpperCase()} = ${resVal} ${label} (${t('spotlight_click_to_copy', 'Click to copy')})`,
        () => {
          navigator.clipboard.writeText(`${resVal}`);
          if (typeof showNotification === 'function') showNotification(t('spotlight_unit_converter', 'Unit Converter'), t('spotlight_copied', 'Copied to clipboard!'));
        }
      );
    }
  }

  // 3. Advanced Math calculation (e.g. sqrt(144) + 6, 25% of 800, 2^8)
  try {
    let mathExpr = query.replace(/\s+of\s+/g, '*0.01*');
    mathExpr = mathExpr.replace(/(\d+)%/g, '($1/100)');
    mathExpr = mathExpr.replace(/\^/g, '**');
    mathExpr = mathExpr.replace(/\bsqrt\b/g, 'Math.sqrt');
    mathExpr = mathExpr.replace(/\bpow\b/g, 'Math.pow');
    mathExpr = mathExpr.replace(/\bsin\b/g, 'Math.sin');
    mathExpr = mathExpr.replace(/\bcos\b/g, 'Math.cos');
    mathExpr = mathExpr.replace(/\btan\b/g, 'Math.tan');
    mathExpr = mathExpr.replace(/\babs\b/g, 'Math.abs');
    mathExpr = mathExpr.replace(/\bpi\b/g, 'Math.PI');
    mathExpr = mathExpr.replace(/\be\b/g, 'Math.E');

    if (/^[0-9+\-*/().\s,*MathPIEsqrtpowabscosinetan]+$/.test(mathExpr)) {
      const mathResult = Function('"use strict";return (' + mathExpr + ')')();
      if (mathResult !== undefined && !isNaN(mathResult) && typeof mathResult === 'number') {
        const formatted = Number.isInteger(mathResult) ? mathResult.toString() : mathResult.toFixed(4).replace(/\.?0+$/, '');
        const calcDict = i18nDict[currentSystemLang] || i18nDict.en;
        addResult('🧮', formatted, `${calcDict.spotlight_calc_res || 'Calculation Result'} for "${query}" (${t('spotlight_click_to_copy', 'Click to copy')})`, () => {
          navigator.clipboard.writeText(formatted);
          if (typeof showNotification === 'function') showNotification(t('app_calculator', 'Spotlight Calculator'), t('spotlight_copied', 'Copied to clipboard!'));
        });
      }
    }
  } catch(e) {}

  const spotDict = i18nDict[currentSystemLang] || i18nDict.en;

  // 2. Search Launchpad Apps
  apps.forEach(app => {
    if (app.name.toLowerCase().includes(query)) {
      addResult(app.icon, app.name, spotDict.spotlight_app || 'Application', () => eval(app.action));
    }
  });

  // 3. Simple VFS Search (Search Alice Home)
  const dirRes = await window.aliceOS.vfs.readDir('/Users/alice');
  if (dirRes.success) {
    dirRes.data.forEach(item => {
       if (item.name.toLowerCase().includes(query)) {
         let icon = item.type === 'dir' ? '📁' : (item.name.endsWith('.png') ? '🖼️' : '📄');
         addResult(icon, item.name, '/Users/alice/' + item.name, () => {
            if (item.type !== 'dir') {
               if (item.name.endsWith('.png')) launchGallery('/Users/alice/' + item.name);
               else launchNotes('/Users/alice/' + item.name);
            } else {
               launchFinder(); // Launch finder for dirs for now
            }
         });
       }
    });
  }
  
  // 4. Web Search Fallback
  addResult('🔍', (spotDict.spotlight_search_web || 'Search web for "%s"').replace('%s', query), spotDict.spotlight_web_search || 'Web Search', () => {
    // We can't open external browser easily, but we can launch AliceOS browser
    // Assuming launchBrowser accepts a URL, or we just launch it
    launchBrowser();
  });

  if (!hasResults) {
    spotlightResults.innerHTML = `<div style="padding:20px;text-align:center;color:#888;">${spotDict.spotlight_no_res || 'No results found'}</div>`;
  }
});


function resetIdleTimer() {
  clearTimeout(idleTimer);
  if (loginScreen.style.display !== 'none') return;
  idleTimer = setTimeout(startScreensaver, 60000); // 1 minute for lock
}

// Listen to all activity
['mousemove', 'mousedown', 'keydown', 'touchstart'].forEach(evt => 
  document.addEventListener(evt, resetIdleTimer)
);

// Initialize timer
resetIdleTimer();

// Global Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
  // Ctrl + Space for AI Assistant
  if (e.ctrlKey && e.code === 'Space') {
    e.preventDefault();
    toggleAssistant();
  }
  // Ctrl + T for Terminal
  if (e.ctrlKey && e.code === 'KeyT') {
    e.preventDefault();
    launchTerminal();
  }
});

// Maps App
async function launchMaps() {
  const res = await window.aliceOS.pm.spawn('maps');
  if (res.success) {
    const pid = res.data.pid;
    const win = createWindow(pid, t('app_maps', 'Maps'), `
      <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#f0f0f0;">
        <div style="font-size:24px;margin-bottom:10px;">🌍</div>
        <div id="maps-locating-${pid}">${t('maps_locating', 'Acquiring Physical GPS Coordinates...')}</div>
      </div>
    `, 'maps');
    
    try {
      // 1. Fetch physical IP and Geolocation
      const geoReq = await fetch('https://get.geojs.io/v1/ip/geo.json');
      const geo = await geoReq.json();
      const lat = parseFloat(geo.latitude);
      const lon = parseFloat(geo.longitude);
      
      // Update Title
      const titleEl = win.querySelector('.title') || win.querySelector('.window-title');
      if (titleEl) titleEl.innerText = `${t('app_maps', 'Maps')} - ${geo.city}, ${geo.country}`;
      
      // Calculate Bounding Box (approx 0.05 degrees)
      const offset = 0.05;
      const bbox = `${lon - offset}%2C${lat - offset}%2C${lon + offset}%2C${lat + offset}`;
      
      // Replace window content with the real map
      const contentEl = win.querySelector('.window-content');
      if (contentEl) {
        contentEl.innerHTML = `
          <div style="width:100%;height:100%;display:flex;flex-direction:column;">
            <div style="padding:10px;background:#eee;border-bottom:1px solid #ccc;display:flex;gap:10px;align-items:center;">
              <div style="font-size:12px;color:#333;font-weight:bold;"><span id="maps-loc-lbl-${pid}">📍 ${t('maps_physical_loc', 'Your Physical Location')}:</span> ${geo.city}, ${geo.region}, ${geo.country} (IP: ${geo.ip})</div>
            </div>
            <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&amp;layer=mapnik&amp;marker=${lat}%2C${lon}" style="flex-grow:1;"></iframe>
            <div style="font-size:10px;text-align:right;padding:2px 5px;background:rgba(255,255,255,0.8);">© OpenStreetMap contributors</div>
          </div>
        `;
      }

      win._onLanguageChange = () => {
        const lbl = win.querySelector(`#maps-loc-lbl-${pid}`);
        if (lbl) lbl.innerText = `📍 ${t('maps_physical_loc', 'Your Physical Location')}:`;
      };
    } catch(e) {
      const contentEl = win.querySelector('.window-content');
      if (contentEl) {
        contentEl.innerHTML = `
          <div style="padding:20px;color:red;">${t('maps_failed', 'Failed to acquire location')}: ${e.message}</div>
        `;
      }
    }
  }
}

// Video Player App
async function launchVideo() {
  const res = await window.aliceOS.pm.spawn('video');
  if (res.success) {
    const pid = res.data.pid;
    const win = createWindow(pid, t('app_video', 'Video Player'), `
      <div style="background:black;height:100%;display:flex;flex-direction:column;position:relative;overflow:hidden;">
        <div style="position:absolute;top:12px;right:14px;z-index:10;display:flex;gap:8px;">
          <button id="video-pip-${pid}" style="background:rgba(0,0,0,0.6);backdrop-filter:blur(15px);border:1px solid rgba(255,255,255,0.25);color:white;padding:5px 12px;border-radius:14px;cursor:pointer;font-size:12px;display:flex;align-items:center;gap:6px;transition:all 0.2s;">
            <span>⤢</span> <span id="video-pip-txt-${pid}">${t('video_pip', 'Picture in Picture')}</span>
          </button>
        </div>
        <video id="video-player-${pid}" width="100%" height="100%" controls autoplay style="outline:none;flex:1;background:black;">
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    `, 'video');

    win._onLanguageChange = () => {
      const pipTxt = win.querySelector(`#video-pip-txt-${pid}`);
      if (pipTxt) pipTxt.innerText = t('video_pip', 'Picture in Picture');
    };

    const videoEl = win.querySelector(`#video-player-${pid}`);
    const pipBtn = win.querySelector(`#video-pip-${pid}`);
    if (pipBtn && videoEl) {
      pipBtn.addEventListener('click', () => {
        openPiP(videoEl.currentSrc || 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', 'Big Buck Bunny', videoEl.currentTime);
        videoEl.pause();
      });
    }
  }
}

// Alien Radar App
async function launchRadar() {
  const res = await window.aliceOS.pm.spawn('radar');
  if (res.success) {
    const pid = res.data.pid;
    const win = createWindow(pid, t('app_radar', 'AirDrop Radar'), `
      <div style="background:#001100;height:100%;display:flex;align-items:center;justify-content:center;position:relative;">
        <canvas id="radar-canvas-${pid}" width="300" height="300" style="border-radius:50%;border:2px solid #0f0;box-shadow:0 0 20px #0f0;"></canvas>
      </div>
    `, 'radar');

    const canvas = win.querySelector(`#radar-canvas-${pid}`);
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const radius = width / 2;
    
    let angle = 0;
    const aliens = [];
    for(let i=0; i<3; i++) {
      aliens.push({
        angle: Math.random() * Math.PI * 2,
        dist: Math.random() * (radius - 20) + 10,
        speed: (Math.random() * 0.02) - 0.01,
        life: 0
      });
    }

    function drawRadar() {
      if (!windows.has(pid)) return; // Stop drawing if killed
      
      // Fade out effect
      ctx.fillStyle = 'rgba(0, 17, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);

      // Draw grid
      ctx.strokeStyle = 'rgba(0, 255, 0, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 0.33, 0, Math.PI * 2);
      ctx.arc(cx, cy, radius * 0.66, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx, 0); ctx.lineTo(cx, height);
      ctx.moveTo(0, cy); ctx.lineTo(width, cy);
      ctx.stroke();

      // Sweeping line
      const sweepX = cx + Math.cos(angle) * radius;
      const sweepY = cy + Math.sin(angle) * radius;
      ctx.strokeStyle = '#0f0';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(sweepX, sweepY);
      ctx.stroke();

      // Draw aliens
      aliens.forEach(alien => {
        alien.angle += alien.speed;
        
        // If sweep line hits alien
        const angleDiff = Math.abs((angle % (Math.PI*2)) - (alien.angle % (Math.PI*2)));
        if (angleDiff < 0.1 || angleDiff > (Math.PI*2 - 0.1)) {
          alien.life = 1.0;
        }

        if (alien.life > 0) {
          const ax = cx + Math.cos(alien.angle) * alien.dist;
          const ay = cy + Math.sin(alien.angle) * alien.dist;
          ctx.fillStyle = `rgba(255, 0, 0, ${alien.life})`;
          ctx.beginPath();
          ctx.arc(ax, ay, 4, 0, Math.PI * 2);
          ctx.fill();
          alien.life -= 0.02;
        }
      });

      angle += 0.05;
      requestAnimationFrame(drawRadar);
    }
    
    drawRadar();
  }
}

// Break the 4th Wall - Host Monitor App
async function launchHostMonitor() {
  const res = await window.aliceOS.pm.spawn('hostmonitor');
  if (res.success) {
    const pid = res.data.pid;
    const hostRes = await window.aliceOS.getHostInfo();
    
    if (hostRes.success) {
      const data = hostRes.data;
      const memGb = (data.totalmem / (1024 * 1024 * 1024)).toFixed(2);
      const freeGb = (data.freemem / (1024 * 1024 * 1024)).toFixed(2);
      const cpu = data.cpus[0] || 'Unknown CPU';
      const cores = data.cpus.length;
      
      let ips = [];
      Object.keys(data.network).forEach(iface => {
        data.network[iface].forEach(conn => {
          if (conn.family === 'IPv4' && !conn.internal) {
            ips.push(conn.address);
          }
        });
      });
      const ipStr = ips.length > 0 ? ips.join(', ') : 'Unknown';

      const win = createWindow(pid, t('host_title', 'Host System Monitor'), `
        <div style="padding:20px;background:#1e1e1e;color:#0f0;font-family:monospace;height:100%;box-sizing:border-box;overflow-y:auto;">
          <h2 style="color:white;margin-top:0;border-bottom:1px solid #333;padding-bottom:10px;" id="hm-warn-${pid}">${t('host_warning', '⚠️ 4th Wall Breach Detected')}</h2>
          <p style="color:#aaa;" id="hm-desc-${pid}">${t('host_bridged', 'AliceOS has successfully bridged IPC into the host operating system.')}</p>
          <div style="margin-top:20px;line-height:1.6;">
            <div><strong style="color:#fff;" id="hm-lbl-os-${pid}">${t('host_os', 'Host OS')}:</strong> ${data.platform} ${data.release} (${data.arch})</div>
            <div><strong style="color:#fff;" id="hm-lbl-name-${pid}">${t('host_name', 'Host Name')}:</strong> ${data.hostname}</div>
            <div><strong style="color:#fff;" id="hm-lbl-uptime-${pid}">${t('host_uptime', 'Host Uptime')}:</strong> <span id="hm-val-uptime-${pid}">${t('host_uptime_min', '%d minutes').replace('%d', Math.floor(data.uptime / 60))}</span></div>
            <br>
            <div><strong style="color:#fff;" id="hm-lbl-cpu-${pid}">${t('host_cpu', 'Host CPU')}:</strong> ${cpu} (<span id="hm-val-cores-${pid}">${t('host_cores', '%d Cores').replace('%d', cores)}</span>)</div>
            <div><strong style="color:#fff;" id="hm-lbl-ram-${pid}">${t('host_ram', 'Host RAM')}:</strong> ${freeGb} GB <span id="hm-val-free-${pid}">${t('host_free', 'Free')}</span> / ${memGb} GB <span id="hm-val-total-${pid}">${t('host_total', 'Total')}</span></div>
            <br>
            <div><strong style="color:#fff;" id="hm-lbl-ip-${pid}">${t('host_ip', 'Host IPv4')}:</strong> ${ipStr}</div>
          </div>
          <div style="margin-top:30px;color:red;font-weight:bold;animation: blink 1s infinite;" id="hm-lbl-power-${pid}">
            ${t('host_do_not_power_off', '>> DO NOT POWER OFF THE HOST MACHINE <<')}
          </div>
        </div>
      `, 'hostinfo');

      win._onLanguageChange = () => {
        const warn = win.querySelector(`#hm-warn-${pid}`);
        if (warn) warn.innerText = t('host_warning', '⚠️ 4th Wall Breach Detected');
        const desc = win.querySelector(`#hm-desc-${pid}`);
        if (desc) desc.innerText = t('host_bridged', 'AliceOS has successfully bridged IPC into the host operating system.');
        const os = win.querySelector(`#hm-lbl-os-${pid}`);
        if (os) os.innerText = `${t('host_os', 'Host OS')}:`;
        const name = win.querySelector(`#hm-lbl-name-${pid}`);
        if (name) name.innerText = `${t('host_name', 'Host Name')}:`;
        const uptime = win.querySelector(`#hm-lbl-uptime-${pid}`);
        if (uptime) uptime.innerText = `${t('host_uptime', 'Host Uptime')}:`;
        const valUptime = win.querySelector(`#hm-val-uptime-${pid}`);
        if (valUptime) valUptime.innerText = t('host_uptime_min', '%d minutes').replace('%d', Math.floor(data.uptime / 60));
        const cpuEl = win.querySelector(`#hm-lbl-cpu-${pid}`);
        if (cpuEl) cpuEl.innerText = `${t('host_cpu', 'Host CPU')}:`;
        const coresEl = win.querySelector(`#hm-val-cores-${pid}`);
        if (coresEl) coresEl.innerText = t('host_cores', '%d Cores').replace('%d', cores);
        const ramEl = win.querySelector(`#hm-lbl-ram-${pid}`);
        if (ramEl) ramEl.innerText = `${t('host_ram', 'Host RAM')}:`;
        const freeEl = win.querySelector(`#hm-val-free-${pid}`);
        if (freeEl) freeEl.innerText = t('host_free', 'Free');
        const totalEl = win.querySelector(`#hm-val-total-${pid}`);
        if (totalEl) totalEl.innerText = t('host_total', 'Total');
        const ipEl = win.querySelector(`#hm-lbl-ip-${pid}`);
        if (ipEl) ipEl.innerText = `${t('host_ip', 'Host IPv4')}:`;
        const powerEl = win.querySelector(`#hm-lbl-power-${pid}`);
        if (powerEl) powerEl.innerText = t('host_do_not_power_off', '>> DO NOT POWER OFF THE HOST MACHINE <<');
      };
    } else {
      createWindow(pid, t('host_title', 'Host System Monitor'), `<div style="padding:20px;color:red;">Error bridging to host: ${hostRes.error}</div>`, 'hostinfo');
    }
  }
}

// Image Viewer / Gallery App
async function launchGallery(filePath = null) {
  const res = await window.aliceOS.pm.spawn('gallery');
  if (res.success) {
    const pid = res.data.pid;
    const win = createWindow(pid, t('gallery_image_viewer', 'Image Viewer'), `
      <div style="background:#111;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;">
        <img id="gallery-img-${pid}" style="max-width:100%;max-height:100%;object-fit:contain;display:none;" />
        <div id="gallery-placeholder-${pid}" style="color:#666;font-style:italic;">${t('gallery_no_image', 'No Image Loaded')}</div>
      </div>
    `, 'gallery');

    win._onLanguageChange = () => {
      const placeholder = win.querySelector(`#gallery-placeholder-${pid}`);
      if (placeholder) placeholder.innerText = t('gallery_no_image', 'No Image Loaded');
    };

    if (filePath) {
      const imgRes = await window.aliceOS.vfs.readFile(filePath);
      if (imgRes.success) {
        const imgEl = win.querySelector(`#gallery-img-${pid}`);
        const placeholder = win.querySelector(`#gallery-placeholder-${pid}`);
        imgEl.src = imgRes.data;
        imgEl.style.display = 'block';
        placeholder.style.display = 'none';
        win.querySelector('.title').innerText = filePath.split('/').pop();
      }
    }
  }
}

// Weather App using real fetch
async function launchWeather() {
  const res = await window.aliceOS.pm.spawn('weather');
  if (res.success) {
    const pid = res.data.pid;
    const win = createWindow(pid, t('app_weather', 'Weather Forecast'), `
      <div style="background:linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%);color:white;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:sans-serif;text-align:center;">
        <div id="weather-status-${pid}" style="font-size:18px;">${t('weather_requesting', 'Requesting satellite data...')}</div>
        <div id="weather-temp-${pid}" style="font-size:64px;font-weight:bold;margin:20px 0;display:none;"></div>
        <div id="weather-desc-${pid}" style="font-size:24px;display:none;"></div>
      </div>
    `, 'weather');

    const statusEl = win.querySelector(`#weather-status-${pid}`);
    const tempEl = win.querySelector(`#weather-temp-${pid}`);
    const descEl = win.querySelector(`#weather-desc-${pid}`);

    let lastCity = '';
    let lastCountry = '';
    let lastCode = null;
    let fetchState = 'requesting';

    function renderWeatherCode(code) {
      if (code === 0) return t('weather_clear', '☀️ Clear');
      if (code === 1 || code === 2 || code === 3) return t('weather_partly_cloudy', '⛅ Partly Cloudy');
      if (code === 45 || code === 48) return t('weather_foggy', '🌫️ Foggy');
      if (code >= 51 && code <= 67) return t('weather_raining', '🌧️ Raining');
      if (code >= 71 && code <= 77) return t('weather_snowing', '❄️ Snowing');
      if (code >= 95) return t('weather_thunderstorm', '⛈️ Thunderstorm');
      return t('weather_clear', '☀️ Clear');
    }

    win._onLanguageChange = () => {
      if (fetchState === 'done' && lastCity) {
        statusEl.innerText = `📍 ${lastCity}${lastCountry ? ', ' + lastCountry : ''}`;
      } else if (fetchState === 'locating') {
        statusEl.innerText = t('weather_locating', 'Locating via IP...');
      } else if (fetchState === 'fetching' && lastCity) {
        statusEl.innerText = t('weather_fetching', 'Fetching forecast for %s...').replace('%s', lastCity);
      } else if (fetchState === 'error') {
        statusEl.innerText = t('weather_error', 'Network Error: Could not fetch weather.');
      } else {
        statusEl.innerText = t('weather_requesting', 'Requesting satellite data...');
      }
      if (lastCode !== null) {
        descEl.innerText = renderWeatherCode(lastCode);
      }
    };

    try {
      fetchState = 'locating';
      statusEl.innerText = t('weather_locating', 'Locating via IP...');
      const geoRes = await fetch('https://get.geojs.io/v1/ip/geo.json');
      const geoData = await geoRes.json();
      
      const lat = geoData.latitude;
      const lon = geoData.longitude;
      const city = geoData.city || 'Unknown Location';
      lastCity = city;
      lastCountry = geoData.country || '';
      
      fetchState = 'fetching';
      statusEl.innerText = t('weather_fetching', 'Fetching forecast for %s...').replace('%s', city);

      // Fetch from Open-Meteo
      const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
      const weatherData = await weatherRes.json();
      
      const current = weatherData.current_weather;
      
      fetchState = 'done';
      statusEl.innerText = `📍 ${city}, ${geoData.country}`;
      tempEl.innerText = `${current.temperature}°C`;
      tempEl.style.display = 'block';
      
      lastCode = current.weathercode;
      descEl.innerText = renderWeatherCode(lastCode);
      descEl.style.display = 'block';

    } catch (e) {
      fetchState = 'error';
      statusEl.innerText = t('weather_error', 'Network Error: Could not fetch weather.');
      console.error(e);
    }
  }
}

// Host Screen Mirror App
async function launchHostScreen() {
  const res = await window.aliceOS.pm.spawn('hostscreen');
  if (res.success) {
    const pid = res.data.pid;
    const win = createWindow(pid, t('app_hostscreen', 'Host Screen Mirror'), `
      <div style="background:black;height:100%;display:flex;align-items:center;justify-content:center;position:relative;">
        <div id="hs-status-${pid}" style="position:absolute;color:red;font-weight:bold;z-index:10;top:10px;left:10px;background:rgba(0,0,0,0.5);padding:5px;">${t('host_mirror_connecting', 'CONNECTING TO PHYSICAL MONITOR...')}</div>
        <img id="hs-img-${pid}" style="width:100%;height:100%;object-fit:contain;" />
      </div>
    `, 'hostscreen');

    const img = win.querySelector(`#hs-img-${pid}`);
    const status = win.querySelector(`#hs-status-${pid}`);
    let isLive = false;

    win._onLanguageChange = () => {
      if (isLive) {
        status.innerText = t('host_mirror_live', 'LIVE (10 FPS)');
      } else {
        status.innerText = t('host_mirror_no_signal', 'NO SIGNAL');
      }
    };

    const intervalId = setInterval(async () => {
      if (!windows.has(pid)) {
        clearInterval(intervalId);
        return;
      }
      if (window.aliceOS.getHostScreen) {
        const screenRes = await window.aliceOS.getHostScreen();
        if (screenRes.success && screenRes.data) {
          img.src = screenRes.data;
          isLive = true;
          status.innerText = t('host_mirror_live', 'LIVE (10 FPS)');
          status.style.color = "lime";
        } else {
          isLive = false;
          status.innerText = t('host_mirror_no_signal', 'NO SIGNAL');
          status.style.color = "red";
        }
      }
    }, 100); // ~10 fps
  }
}

// Web Host LAN Server App
async function launchWebHost() {
  const res = await window.aliceOS.pm.spawn('webhost');
  if (res.success) {
    const pid = res.data.pid;
    const win = createWindow(pid, t('webhost_title', 'LAN Web Server'), `
      <div style="padding:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;text-align:center;background:#2b2b2b;color:white;">
        <h2 style="margin-bottom:10px;">AliceOS VFS Bridge</h2>
        <p id="wh-sub-${pid}" style="margin-bottom:20px;font-size:12px;color:#aaa;">${t('webhost_subtitle', 'Expose your virtual file system to the physical LAN.')}</p>
        <button id="wh-btn-${pid}" style="background:#4CAF50;color:white;border:none;padding:10px 20px;border-radius:20px;cursor:pointer;font-weight:bold;font-size:16px;">${t('webhost_start', 'Start Server (Port 8080)')}</button>
        <div id="wh-status-${pid}" style="margin-top:20px;font-family:monospace;color:#0f0;"></div>
      </div>
    `, 'webhost');

    const btn = win.querySelector(`#wh-btn-${pid}`);
    const sub = win.querySelector(`#wh-sub-${pid}`);
    const status = win.querySelector(`#wh-status-${pid}`);
    let running = false;

    win._onLanguageChange = () => {
      if (sub) sub.innerText = t('webhost_subtitle', 'Expose your virtual file system to the physical LAN.');
      if (btn) {
        btn.innerText = running ? t('webhost_stop', 'Stop Server') : t('webhost_start', 'Start Server (Port 8080)');
      }
      if (!running && status.innerText) {
        status.innerText = t('webhost_stopped', 'Server stopped.');
      }
    };

    btn.addEventListener('click', async () => {
      if (!running) {
        if (window.aliceOS.startHostServer) {
          const sRes = await window.aliceOS.startHostServer(8080);
          if (sRes.success) {
            running = true;
            btn.innerText = t('webhost_stop', 'Stop Server');
            btn.style.background = "#f44336";
            status.innerText = sRes.data;
          } else {
            status.innerText = "Error: " + sRes.error;
            status.style.color = "red";
          }
        }
      } else {
        if (window.aliceOS.stopHostServer) {
          await window.aliceOS.stopHostServer();
          running = false;
          btn.innerText = t('webhost_start', 'Start Server (Port 8080)');
          btn.style.background = "#4CAF50";
          status.innerText = t('webhost_stopped', 'Server stopped.');
          status.style.color = "#0f0";
        }
      }
    });
  }
}

// Flappy Alice Game
async function launchFlappy() {
  const res = await window.aliceOS.pm.spawn('flappy');
  if (res.success) {
    const pid = res.data.pid;
    const win = createWindow(pid, t('app_flappy', 'Flappy Alice'), `
      <div style="background:#70c5ce;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;">
        <canvas id="flappy-canvas-${pid}" width="320" height="480" style="background:#70c5ce;border:2px solid #543847;border-radius:8px;box-shadow:0 4px 10px rgba(0,0,0,0.5);cursor:pointer;"></canvas>
        <div id="flappy-score-${pid}" style="position:absolute;top:20px;font-size:32px;font-weight:bold;color:white;text-shadow:2px 2px 0 #000;">0</div>
        <div id="flappy-msg-${pid}" style="position:absolute;font-size:24px;font-weight:bold;color:white;text-shadow:2px 2px 0 #000;pointer-events:none;">${t('flappy_click_start', 'CLICK TO START')}</div>
      </div>
    `, 'flappy');

    const canvas = win.querySelector(`#flappy-canvas-${pid}`);
    const ctx = canvas.getContext('2d');
    const scoreEl = win.querySelector(`#flappy-score-${pid}`);
    const msgEl = win.querySelector(`#flappy-msg-${pid}`);
    
    let frames = 0;
    let score = 0;
    let currentState = 0; // 0: get ready, 1: game, 2: game over

    win._onLanguageChange = () => {
      if (currentState === 0) {
        msgEl.innerText = t('flappy_click_start', 'CLICK TO START');
      } else if (currentState === 2) {
        msgEl.innerText = t('flappy_game_over', 'GAME OVER');
      }
    };
    
    const alice = {
       x: 50, y: 150, width: 34, height: 26,
       gravity: 0.25, jump: 4.6, speed: 0,
       draw() {
          ctx.fillStyle = '#ffcc00';
          ctx.beginPath();
          ctx.arc(this.x + this.width/2, this.y + this.height/2, 12, 0, Math.PI*2);
          ctx.fill();
          ctx.fillStyle = 'white';
          ctx.beginPath();
          ctx.arc(this.x + this.width/2 + 4, this.y + this.height/2 - 2, 4, 0, Math.PI*2);
          ctx.fill();
          ctx.fillStyle = 'black';
          ctx.beginPath();
          ctx.arc(this.x + this.width/2 + 5, this.y + this.height/2 - 2, 2, 0, Math.PI*2);
          ctx.fill();
       },
       update() {
          this.speed += this.gravity;
          this.y += this.speed;
          if (this.y + this.height/2 >= canvas.height - 50) {
             this.y = canvas.height - 50 - this.height/2;
             currentState = 2; // Game Over
          }
       },
       flap() { this.speed = -this.jump; }
    };

    const pipes = {
       position: [],
       width: 53, height: 400, gap: 120, dx: 2,
       draw() {
          for(let i=0; i<this.position.length; i++) {
             let p = this.position[i];
             let topYPos = p.y;
             let bottomYPos = p.y + this.height + this.gap;
             
             ctx.fillStyle = '#73bf2e';
             ctx.fillRect(p.x, topYPos, this.width, this.height);
             ctx.strokeRect(p.x, topYPos, this.width, this.height);
             
             ctx.fillRect(p.x, bottomYPos, this.width, this.height);
             ctx.strokeRect(p.x, bottomYPos, this.width, this.height);
          }
       },
       update() {
          if(frames % 100 === 0) {
             this.position.push({ x: canvas.width, y: -150 * (Math.random() + 1) });
          }
          for(let i=0; i<this.position.length; i++) {
             let p = this.position[i];
             p.x -= this.dx;
             
             // Collision
             let bottomPipeY = p.y + this.height + this.gap;
             if(alice.x + alice.width/2 > p.x && alice.x - alice.width/2 < p.x + this.width &&
               (alice.y - alice.height/2 < p.y + this.height || alice.y + alice.height/2 > bottomPipeY)) {
                currentState = 2;
             }
             
             if(p.x + this.width <= 0) {
                this.position.shift();
                score++;
                scoreEl.innerText = score;
             }
          }
       },
       reset() { this.position = []; }
    };

    function draw() {
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       ctx.fillStyle = '#ded895';
       ctx.fillRect(0, canvas.height - 50, canvas.width, 50); // ground
       pipes.draw();
       alice.draw();
    }

    function update() {
       alice.update();
       pipes.update();
    }

    let loopId;
    function loop() {
       if (!windows.has(pid)) return; // Stop if closed
       update();
       draw();
       frames++;
       if(currentState === 1) {
          loopId = requestAnimationFrame(loop);
       } else if (currentState === 2) {
          msgEl.innerText = t('flappy_game_over', 'GAME OVER');
          msgEl.style.display = 'block';
       }
    }

    canvas.addEventListener('click', () => {
       if(currentState === 0) {
          currentState = 1;
          msgEl.style.display = 'none';
          loop();
       } else if(currentState === 1) {
          alice.flap();
       } else if(currentState === 2) {
          currentState = 0;
          alice.y = 150;
          alice.speed = 0;
          pipes.reset();
          score = 0;
          scoreEl.innerText = score;
          msgEl.innerText = t('flappy_click_start', 'CLICK TO START');
          draw();
       }
    });

    draw(); // init draw
  }
}

// AliceSynth Audio Synthesizer App
async function launchSynth() {
  const res = await window.aliceOS.pm.spawn('synth');
  if (res.success) {
    const pid = res.data.pid;
    const win = createWindow(pid, t('app_synth', 'AliceSynth'), `
      <div style="background:#222;height:100%;display:flex;flex-direction:column;align-items:center;padding:20px;color:white;box-sizing:border-box;">
        <h2 style="margin:0 0 20px 0;text-shadow:0 0 10px #00f2fe;">AliceSynth 🎹</h2>
        
        <div style="display:flex;gap:20px;margin-bottom:20px;">
          <div>
            <label id="synth-lbl-wave-${pid}">${t('synth_waveform', 'Waveform')}: </label>
            <select id="synth-wave-${pid}" style="background:#333;color:white;border:1px solid #555;padding:5px;">
              <option value="sine">${t('synth_sine', 'Sine (Smooth)')}</option>
              <option value="square">${t('synth_square', 'Square (8-bit)')}</option>
              <option value="sawtooth">${t('synth_sawtooth', 'Sawtooth (Harsh)')}</option>
              <option value="triangle">${t('synth_triangle', 'Triangle (Soft)')}</option>
            </select>
          </div>
          <div>
            <label id="synth-lbl-vol-${pid}">${t('synth_volume', 'Master Volume')}: </label>
            <input type="range" id="synth-vol-${pid}" min="0" max="100" value="30">
          </div>
        </div>

        <div style="display:flex;gap:5px;position:relative;height:150px;width:100%;max-width:500px;background:#111;padding:10px;border-radius:10px;box-shadow:inset 0 0 10px black;">
          <!-- Natural Keys -->
          <div class="synth-key" data-note="261.63" style="flex:1;background:white;color:black;border-radius:0 0 5px 5px;display:flex;align-items:flex-end;justify-content:center;padding-bottom:10px;font-weight:bold;cursor:pointer;border:1px solid #ccc;">C</div>
          <div class="synth-key" data-note="293.66" style="flex:1;background:white;color:black;border-radius:0 0 5px 5px;display:flex;align-items:flex-end;justify-content:center;padding-bottom:10px;font-weight:bold;cursor:pointer;border:1px solid #ccc;">D</div>
          <div class="synth-key" data-note="329.63" style="flex:1;background:white;color:black;border-radius:0 0 5px 5px;display:flex;align-items:flex-end;justify-content:center;padding-bottom:10px;font-weight:bold;cursor:pointer;border:1px solid #ccc;">E</div>
          <div class="synth-key" data-note="349.23" style="flex:1;background:white;color:black;border-radius:0 0 5px 5px;display:flex;align-items:flex-end;justify-content:center;padding-bottom:10px;font-weight:bold;cursor:pointer;border:1px solid #ccc;">F</div>
          <div class="synth-key" data-note="392.00" style="flex:1;background:white;color:black;border-radius:0 0 5px 5px;display:flex;align-items:flex-end;justify-content:center;padding-bottom:10px;font-weight:bold;cursor:pointer;border:1px solid #ccc;">G</div>
          <div class="synth-key" data-note="440.00" style="flex:1;background:white;color:black;border-radius:0 0 5px 5px;display:flex;align-items:flex-end;justify-content:center;padding-bottom:10px;font-weight:bold;cursor:pointer;border:1px solid #ccc;">A</div>
          <div class="synth-key" data-note="493.88" style="flex:1;background:white;color:black;border-radius:0 0 5px 5px;display:flex;align-items:flex-end;justify-content:center;padding-bottom:10px;font-weight:bold;cursor:pointer;border:1px solid #ccc;">B</div>
          <div class="synth-key" data-note="523.25" style="flex:1;background:white;color:black;border-radius:0 0 5px 5px;display:flex;align-items:flex-end;justify-content:center;padding-bottom:10px;font-weight:bold;cursor:pointer;border:1px solid #ccc;">C</div>
          
          <!-- Sharp/Flat Keys -->
          <div class="synth-key black-key" data-note="277.18" style="position:absolute;left:calc(12.5% - 15px);top:10px;width:30px;height:90px;background:black;border-radius:0 0 5px 5px;cursor:pointer;box-shadow:2px 2px 5px rgba(0,0,0,0.5);"></div>
          <div class="synth-key black-key" data-note="311.13" style="position:absolute;left:calc(25% - 15px);top:10px;width:30px;height:90px;background:black;border-radius:0 0 5px 5px;cursor:pointer;box-shadow:2px 2px 5px rgba(0,0,0,0.5);"></div>
          <div class="synth-key black-key" data-note="369.99" style="position:absolute;left:calc(50% - 15px);top:10px;width:30px;height:90px;background:black;border-radius:0 0 5px 5px;cursor:pointer;box-shadow:2px 2px 5px rgba(0,0,0,0.5);"></div>
          <div class="synth-key black-key" data-note="415.30" style="position:absolute;left:calc(62.5% - 15px);top:10px;width:30px;height:90px;background:black;border-radius:0 0 5px 5px;cursor:pointer;box-shadow:2px 2px 5px rgba(0,0,0,0.5);"></div>
          <div class="synth-key black-key" data-note="466.16" style="position:absolute;left:calc(75% - 15px);top:10px;width:30px;height:90px;background:black;border-radius:0 0 5px 5px;cursor:pointer;box-shadow:2px 2px 5px rgba(0,0,0,0.5);"></div>
        </div>
        <p id="synth-hint-${pid}" style="color:#888;font-size:12px;margin-top:20px;">${t('synth_hint', 'Use your mouse to click the keys and play music.')}</p>
      </div>
    `, 'synth');

    const lblWave = win.querySelector(`#synth-lbl-wave-${pid}`);
    const lblVol = win.querySelector(`#synth-lbl-vol-${pid}`);
    const waveSelect = win.querySelector(`#synth-wave-${pid}`);
    const volSelect = win.querySelector(`#synth-vol-${pid}`);
    const hintEl = win.querySelector(`#synth-hint-${pid}`);

    win._onLanguageChange = () => {
      if (lblWave) lblWave.innerText = `${t('synth_waveform', 'Waveform')}: `;
      if (lblVol) lblVol.innerText = `${t('synth_volume', 'Master Volume')}: `;
      if (hintEl) hintEl.innerText = t('synth_hint', 'Use your mouse to click the keys and play music.');
      if (waveSelect && waveSelect.options.length === 4) {
        waveSelect.options[0].text = t('synth_sine', 'Sine (Smooth)');
        waveSelect.options[1].text = t('synth_square', 'Square (8-bit)');
        waveSelect.options[2].text = t('synth_sawtooth', 'Sawtooth (Harsh)');
        waveSelect.options[3].text = t('synth_triangle', 'Triangle (Soft)');
      }
    };

    let audioCtx = null;
    let currentOsc = null;
    const keys = win.querySelectorAll('.synth-key');

    function playNote(freq) {
      if (!audioCtx) {
         const AudioContext = window.AudioContext || window.webkitAudioContext;
         if (!AudioContext) return;
         audioCtx = new AudioContext();
      }
      
      if (currentOsc) {
         currentOsc.stop();
         currentOsc.disconnect();
      }

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = waveSelect.value;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      const volume = parseInt(volSelect.value) / 100;
      gain.gain.setValueAtTime(volume, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.5); // fade out

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 1.5);
      
      currentOsc = osc;
    }

    keys.forEach(k => {
       k.addEventListener('mousedown', () => {
          k.style.background = k.classList.contains('black-key') ? '#444' : '#eee';
          playNote(parseFloat(k.dataset.note));
       });
       k.addEventListener('mouseup', () => {
          k.style.background = k.classList.contains('black-key') ? 'black' : 'white';
       });
       k.addEventListener('mouseleave', () => {
          k.style.background = k.classList.contains('black-key') ? 'black' : 'white';
       });
    });
  }
}

// Universe Sandbox (Particle Physics Engine)
async function launchUniverse() {
  const res = await window.aliceOS.pm.spawn('universe');
  if (res.success) {
    const pid = res.data.pid;
    const win = createWindow(pid, t('app_universe', 'Universe Sandbox'), `
      <div style="background:black;height:100%;width:100%;position:relative;overflow:hidden;">
        <canvas id="universe-canvas-${pid}" style="display:block;width:100%;height:100%;cursor:crosshair;"></canvas>
        <div style="position:absolute;top:10px;left:10px;color:rgba(255,255,255,0.7);font-family:monospace;pointer-events:none;">
          <div id="universe-fps-${pid}">FPS: 0</div>
          <div id="universe-particles-${pid}">${t('universe_particles', 'Particles: 3000')}</div>
          <div id="universe-hint-${pid}" style="font-size:10px;margin-top:5px;color:#aaa;">${t('universe_hint', 'Move mouse to attract.<br>Click to repel.')}</div>
        </div>
      </div>
    `, 'universe');

    const canvas = win.querySelector(`#universe-canvas-${pid}`);
    const ctx = canvas.getContext('2d');
    const fpsEl = win.querySelector(`#universe-fps-${pid}`);
    const particlesEl = win.querySelector(`#universe-particles-${pid}`);
    const universeHintEl = win.querySelector(`#universe-hint-${pid}`);

    win._onLanguageChange = () => {
      if (particlesEl) particlesEl.innerText = t('universe_particles', 'Particles: 3000');
      if (universeHintEl) universeHintEl.innerHTML = t('universe_hint', 'Move mouse to attract.<br>Click to repel.');
    };
    
    let width, height;
    function resize() {
       width = canvas.width = canvas.clientWidth;
       height = canvas.height = canvas.clientHeight;
    }
    resize();
    
    // Listen to resize of the window
    const observer = new ResizeObserver(() => resize());
    observer.observe(canvas.parentElement);

    const particles = [];
    const numParticles = 3000;
    
    for (let i = 0; i < numParticles; i++) {
       particles.push({
          x: Math.random() * 2000,
          y: Math.random() * 2000,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          radius: Math.random() * 1.5 + 0.5,
          color: `hsl(${Math.random() * 60 + 180}, 100%, 70%)` // blues and cyans
       });
    }

    let mouse = { x: width/2, y: height/2, down: false };

    canvas.addEventListener('mousemove', (e) => {
       const rect = canvas.getBoundingClientRect();
       mouse.x = e.clientX - rect.left;
       mouse.y = e.clientY - rect.top;
    });
    
    canvas.addEventListener('mousedown', () => mouse.down = true);
    canvas.addEventListener('mouseup', () => mouse.down = false);
    canvas.addEventListener('mouseleave', () => mouse.down = false);

    let lastTime = performance.now();
    let frames = 0;

    function update() {
       if (!windows.has(pid)) {
          observer.disconnect();
          return;
       }
       
       const now = performance.now();
       frames++;
       if (now - lastTime >= 1000) {
          fpsEl.innerText = `FPS: ${frames}`;
          frames = 0;
          lastTime = now;
       }

       // Semi-transparent black to create trails
       ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
       ctx.fillRect(0, 0, width, height);

       const gravityStrength = mouse.down ? -1.5 : 0.2; // repulse on click

       for (let i = 0; i < numParticles; i++) {
          const p = particles[i];
          
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distSq = dx*dx + dy*dy;
          const dist = Math.sqrt(distSq) + 1; // avoid division by zero
          
          const force = (1000 * gravityStrength) / distSq;
          const ax = force * (dx / dist);
          const ay = force * (dy / dist);

          p.vx += ax;
          p.vy += ay;
          
          // Friction / drag
          p.vx *= 0.98;
          p.vy *= 0.98;

          p.x += p.vx;
          p.y += p.vy;

          // Wrap around edges softly
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          // Draw
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
       }

       requestAnimationFrame(update);
    }
    
    // Init particles to screen center
    particles.forEach(p => {
       p.x = width/2 + (Math.random() - 0.5) * width;
       p.y = height/2 + (Math.random() - 0.5) * height;
    });

    update();
  }
}

// Alice Store (Dynamic Package Manager)
async function launchStore() {
  const res = await window.aliceOS.pm.spawn('store');
  if (res.success) {
    const pid = res.data.pid;
    const win = createWindow(pid, t('app_store', 'App Store'), `
      <div style="background:#fff;height:100%;display:flex;flex-direction:column;font-family:sans-serif;">
        <div style="background:#007aff;color:white;padding:20px;text-align:center;">
          <h2 style="margin:0;" id="store-title-${pid}">${t('store_title', 'Alice Store 🛍️')}</h2>
          <p style="margin:5px 0 0 0;font-size:12px;opacity:0.8;" id="store-sub-${pid}">${t('store_subtitle', 'Discover & Install Native Applications')}</p>
        </div>
        <div style="flex-grow:1;overflow-y:auto;padding:20px;display:flex;flex-direction:column;gap:15px;background:#f5f5f7;">
          
          <!-- Package: Tic Tac Toe -->
          <div style="background:white;padding:15px;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,0.05);display:flex;align-items:center;">
            <div style="font-size:40px;margin-right:15px;">⭕</div>
            <div style="flex-grow:1;">
              <h3 style="margin:0;" id="store-tictactoe-name-${pid}">${t('store_tictactoe_title', 'Tic Tac Toe')}</h3>
              <p style="margin:5px 0;font-size:12px;color:#666;" id="store-tictactoe-desc-${pid}">${t('store_tictactoe_desc', 'A classic grid-based puzzle game.')}</p>
            </div>
            <button id="install-tictactoe-${pid}" style="background:#007aff;color:white;border:none;padding:8px 16px;border-radius:20px;font-weight:bold;cursor:pointer;">${t('store_get', 'Get')}</button>
          </div>

          <!-- Package: System Logs -->
          <div style="background:white;padding:15px;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,0.05);display:flex;align-items:center;">
            <div style="font-size:40px;margin-right:15px;">📋</div>
            <div style="flex-grow:1;">
              <h3 style="margin:0;" id="store-syslogs-name-${pid}">${t('store_syslogs_title', 'System Logs')}</h3>
              <p style="margin:5px 0;font-size:12px;color:#666;" id="store-syslogs-desc-${pid}">${t('store_syslogs_desc', 'View raw IPC bridge streams and kernel logs.')}</p>
            </div>
            <button id="install-syslogs-${pid}" style="background:#007aff;color:white;border:none;padding:8px 16px;border-radius:20px;font-weight:bold;cursor:pointer;">${t('store_get', 'Get')}</button>
          </div>

        </div>
      </div>
    `);

    async function installApp(id, pkgName, icon, actionStr, codeStr) {
       const btn = win.querySelector(`#${id}-${pid}`);
       if (btn.innerText !== t('store_get', 'Get') && btn.innerText !== 'Get') return;
       
       btn.innerText = t('store_installing', 'Installing...');
       btn.style.background = '#ccc';
       btn.style.cursor = 'default';

       // Simulate network download
       await new Promise(r => setTimeout(r, 800));

       try {
          // 1. Inject the logic into global scope
          window.eval(codeStr);
          
          // 2. Add to Launchpad registry
          if (!apps.find(a => a.name === pkgName)) {
             apps.push({ name: pkgName, icon: icon, action: actionStr });
          }

          // 3. Re-render Launchpad instantly
          const launchpadApps = document.getElementById('launchpad-apps');
          launchpadApps.innerHTML = apps.map(app => `
            <div class="app-icon" onclick="${app.action}; toggleLaunchpad();">
              <div class="icon">${app.icon}</div>
              <div class="name">${app.name}</div>
            </div>
          `).join('');

          btn.innerText = t('store_installed', 'Installed');
          btn.style.background = '#34c759';
       } catch (e) {
          btn.innerText = 'Error';
          btn.style.background = '#ff3b30';
          console.error("Installation failed:", e);
       }
    }

    win.querySelector(`#install-tictactoe-${pid}`).addEventListener('click', () => {
       const logic = `
       async function launchTicTacToe() {
         const res = await window.aliceOS.pm.spawn('tictactoe');
         if (res.success) {
           createWindow(res.data.pid, t('store_tictactoe_title', 'Tic Tac Toe'), '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:20px;font-weight:bold;background:#fff;color:#333;">X O X<br>O X O<br>X O X (' + t('tictactoe_coming_soon', 'Coming Soon') + ')</div>', 'tictactoe');
         }
       }
       `;
       installApp('install-tictactoe', 'TicTacToe', '⭕', 'launchTicTacToe()', logic);
    });

    win.querySelector(`#install-syslogs-${pid}`).addEventListener('click', () => {
       const logic = `
       async function launchSysLogs() {
         const res = await window.aliceOS.pm.spawn('syslogs');
         if (res.success) {
           createWindow(res.data.pid, t('store_syslogs_title', 'System Logs'), '<div style="background:black;color:#0f0;font-family:monospace;padding:10px;height:100%;box-sizing:border-box;">[KERNEL] IPC Bridge initialized.<br>[VFS] JSON File System mounted.<br>[WINDOW_SERVER] Aero Compositor ready.</div>', 'syslogs');
         }
       }
       `;
       installApp('install-syslogs', 'SysLogs', '📋', 'launchSysLogs()', logic);
    });

    win._onLanguageChange = () => {
      const titleEl = win.querySelector(`#store-title-${pid}`);
      if (titleEl) titleEl.innerText = t('store_title', 'Alice Store 🛍️');
      const subEl = win.querySelector(`#store-sub-${pid}`);
      if (subEl) subEl.innerText = t('store_subtitle', 'Discover & Install Native Applications');
      const ttTitle = win.querySelector(`#store-tictactoe-name-${pid}`);
      if (ttTitle) ttTitle.innerText = t('store_tictactoe_title', 'Tic Tac Toe');
      const ttDesc = win.querySelector(`#store-tictactoe-desc-${pid}`);
      if (ttDesc) ttDesc.innerText = t('store_tictactoe_desc', 'A classic grid-based puzzle game.');
      const slTitle = win.querySelector(`#store-syslogs-name-${pid}`);
      if (slTitle) slTitle.innerText = t('store_syslogs_title', 'System Logs');
      const slDesc = win.querySelector(`#store-syslogs-desc-${pid}`);
      if (slDesc) slDesc.innerText = t('store_syslogs_desc', 'View raw IPC bridge streams and kernel logs.');
      const btn1 = win.querySelector(`#install-tictactoe-${pid}`);
      if (btn1 && btn1.innerText !== t('store_installed', 'Installed') && btn1.innerText !== 'Installed') {
        btn1.innerText = t('store_get', 'Get');
      }
      const btn2 = win.querySelector(`#install-syslogs-${pid}`);
      if (btn2 && btn2.innerText !== t('store_installed', 'Installed') && btn2.innerText !== 'Installed') {
        btn2.innerText = t('store_get', 'Get');
      }
    };
  }
}

// AliceScript IDE
async function launchIDE() {
  const res = await window.aliceOS.pm.spawn('ide');
  if (res.success) {
    const pid = res.data.pid;
    const win = createWindow(pid, t('app_ide', 'AliceScript IDE'), `
      <div style="display:flex;flex-direction:column;height:100%;background:#1e1e1e;">
        <div style="padding:10px;background:#2d2d2d;border-bottom:1px solid #444;display:flex;gap:10px;">
          <button id="ide-run-${pid}" style="background:#4CAF50;color:white;border:none;padding:5px 15px;border-radius:4px;cursor:pointer;font-weight:bold;">${t('ide_run', '▶ Run Script')}</button>
          <button id="ide-clear-${pid}" style="background:#f44336;color:white;border:none;padding:5px 15px;border-radius:4px;cursor:pointer;">${t('ide_clear', 'Clear Output')}</button>
        </div>
        <div style="display:flex;flex-grow:1;height:calc(100% - 50px);">
          <textarea id="ide-code-${pid}" style="flex:1;background:#1e1e1e;color:#d4d4d4;font-family:monospace;font-size:14px;padding:10px;border:none;border-right:1px solid #444;resize:none;outline:none;" spellcheck="false">// Write AliceScript here...
// You have full access to window.aliceOS APIs!
// E.g., await window.aliceOS.pm.spawn('calculator');

async function main() {
  const vfsRes = await window.aliceOS.vfs.readDir('/Users/' + currentUser + '/Desktop');
  console.log('Desktop items:', vfsRes.data);
  return "Script Executed Successfully!";
}
main();</textarea>
          <div style="flex:1;display:flex;flex-direction:column;">
            <div id="ide-lbl-console-${pid}" style="background:#222;color:#aaa;padding:5px 10px;font-size:12px;border-bottom:1px solid #444;">${t('ide_console', 'Console Output')}</div>
            <div id="ide-out-${pid}" style="flex-grow:1;background:#111;color:#0f0;font-family:monospace;font-size:13px;padding:10px;overflow-y:auto;white-space:pre-wrap;"></div>
          </div>
        </div>
      </div>
    `, 'ide');

    const runBtn = win.querySelector(`#ide-run-${pid}`);
    const clearBtn = win.querySelector(`#ide-clear-${pid}`);
    const codeArea = win.querySelector(`#ide-code-${pid}`);
    const outArea = win.querySelector(`#ide-out-${pid}`);
    const consoleLbl = win.querySelector(`#ide-lbl-console-${pid}`);

    win._onLanguageChange = () => {
      if (runBtn) runBtn.innerText = t('ide_run', '▶ Run Script');
      if (clearBtn) clearBtn.innerText = t('ide_clear', 'Clear Output');
      if (consoleLbl) consoleLbl.innerText = t('ide_console', 'Console Output');
    };

    // Override console.log just for the IDE execution context temporarily
    runBtn.addEventListener('click', async () => {
      const code = codeArea.value;
      let logs = [];
      
      // Capture logs
      const originalLog = console.log;
      console.log = (...args) => {
        logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : a).join(' '));
        originalLog(...args);
      };

      try {
        // Wrap in async IIFE
        const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
        const executor = new AsyncFunction(code);
        const result = await executor();
        
        if (logs.length > 0) outArea.innerHTML += logs.join('\\n') + '\\n';
        if (result !== undefined) outArea.innerHTML += `> ${result}\\n`;
        outArea.innerHTML += '<span style="color:#888;">' + t('ide_finished', '--- execution finished ---') + '</span>\\n';
        
      } catch (err) {
        outArea.innerHTML += `<span style="color:red;">Error: ${err.message}</span>\\n`;
      } finally {
        console.log = originalLog;
        outArea.scrollTop = outArea.scrollHeight;
      }
    });

    clearBtn.addEventListener('click', () => {
      outArea.innerHTML = '';
    });
  }
}

// Sticky Notes Logic
let stickyCount = 1;
function createStickyNote() {
  desktopMenu.style.display = 'none';
  
  const id = `sticky-${stickyCount++}`;
  const sticky = document.createElement('div');
  sticky.id = id;
  sticky.className = 'sticky-note';
  sticky.style.position = 'absolute';
  sticky.style.left = `${Math.random() * 300 + 100}px`;
  sticky.style.top = `${Math.random() * 300 + 100}px`;
  sticky.style.width = '200px';
  sticky.style.height = '200px';
  sticky.style.backgroundColor = '#fff740';
  sticky.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
  sticky.style.padding = '10px';
  sticky.style.zIndex = '1500';
  sticky.style.display = 'flex';
  sticky.style.flexDirection = 'column';
  
  sticky.innerHTML = `
    <div style="display:flex;justify-content:space-between;cursor:move;margin-bottom:5px;" id="${id}-header">
      <span class="sticky-title" style="font-weight:bold;font-size:14px;color:#333;">${t('sticky_note', 'Note')}</span>
      <span style="cursor:pointer;color:#333;" onclick="document.getElementById('${id}').remove()">✕</span>
    </div>
    <textarea class="sticky-textarea" placeholder="${t('sticky_placeholder', 'Write a sticky note...')}" style="flex-grow:1;background:transparent;border:none;outline:none;resize:none;color:#333;font-family:sans-serif;"></textarea>
  `;
  
  document.getElementById('desktop').appendChild(sticky);
  
  // Make draggable
  const header = sticky.querySelector(`#${id}-header`);
  let isDragging = false, startX, startY, initialX, initialY;
  
  header.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initialX = parseInt(sticky.style.left || 0);
    initialY = parseInt(sticky.style.top || 0);
  });
  
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    sticky.style.left = `${initialX + dx}px`;
    sticky.style.top = `${initialY + dy}px`;
  });
  
  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
}

// BSOD Logic
function triggerBSOD() {
  document.getElementById('bsod').style.display = 'block';
  // Full kernel panic - disable all inputs
  document.body.style.pointerEvents = 'none';
  
  // Create a terrifying audio screech
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(100, audioCtx.currentTime);
  osc.frequency.linearRampToValueAtTime(800, audioCtx.currentTime + 1);
  gain.gain.setValueAtTime(0.5, audioCtx.currentTime);
  osc.start();
  
  setTimeout(() => {
    osc.stop();
    // Simulate auto restart after BSOD
    location.reload();
  }, 4000);
}

// --- macOS Dock Magnification Engine ---
// Restore widgets when clicking on empty desktop
(function initDockMagnification() {
  const dock = document.querySelector('.dock');
  const icons = Array.from(document.querySelectorAll('.dock-icon'));
  
  if (!dock) return;

  dock.addEventListener('mousemove', (e) => {
    icons.forEach(icon => {
      const rect = icon.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const distance = Math.abs(e.clientX - centerX);
      
      // Calculate scale based on distance using a smooth decay function
      const maxScale = 1.6;
      const baseScale = 1.0;
      const influenceRadius = 150; // pixels
      
      let scale = baseScale;
      if (distance < influenceRadius) {
        // Smooth interpolation
        const factor = Math.cos((distance / influenceRadius) * (Math.PI / 2));
        scale = baseScale + (maxScale - baseScale) * factor;
      }
      
      icon.style.transform = `scale(${scale}) translateY(-${(scale - 1) * 20}px)`;
      icon.style.margin = `0 ${(scale - 1) * 15}px`;
    });
  });

  dock.addEventListener('mouseleave', () => {
    icons.forEach(icon => {
      icon.style.transform = 'scale(1) translateY(0)';
      icon.style.margin = '0';
    });
  });
})();

// --- macOS Dock Launch Bounce & Active Running Dot ---
(function initDockBounce() {
  const dock = document.querySelector('.dock');
  if (!dock) return;

  dock.addEventListener('click', (e) => {
    const icon = e.target.closest('.dock-icon');
    if (!icon) return;
    if (icon.id === 'dock-trash' || icon.classList.contains('dock-restore-item')) return;

    // Trigger spring bounce
    icon.classList.remove('dock-bouncing');
    void icon.offsetWidth; // force reflow
    icon.classList.add('dock-bouncing');

    // Light up running dot
    let dot = icon.querySelector('.dock-dot');
    if (!dot) {
      dot = document.createElement('div');
      dot.className = 'dock-dot';
      icon.appendChild(dot);
    }
    dot.classList.add('active');

    if (typeof playClickSound === 'function') {
      playClickSound();
    }

    setTimeout(() => {
      icon.classList.remove('dock-bouncing');
    }, 1200);
  });
})();

// macOS Sonoma Widgets Logic
setInterval(() => {
  const cpuBar = document.getElementById('widget-cpu-bar');
  const ramBar = document.getElementById('widget-ram-bar');
  if (cpuBar && ramBar) {
    const cpuLoad = 10 + Math.random() * 40;
    const ramLoad = 40 + Math.random() * 20;
    cpuBar.style.width = `${cpuLoad}%`;
    ramBar.style.width = `${ramLoad}%`;
    
    // Change color if high
    cpuBar.style.background = cpuLoad > 40 ? (cpuLoad > 45 ? '#ff3b30' : '#ff9500') : '#34c759';
  }
}, 2000);

// ==========================================
// macOS Picture-in-Picture Floating Window Engine
// ==========================================
let pipDragging = false;
let pipStartX = 0, pipStartY = 0;
let pipOrigX = 0, pipOrigY = 0;

function initPiPWindow() {
  const pipWin = document.getElementById('pip-window');
  if (!pipWin || pipWin.dataset.initialized) return;
  pipWin.dataset.initialized = 'true';

  pipWin.addEventListener('mousedown', (e) => {
    if (e.target.closest('.pip-btn')) return;
    pipDragging = true;
    pipStartX = e.clientX;
    pipStartY = e.clientY;
    const rect = pipWin.getBoundingClientRect();
    pipOrigX = rect.left;
    pipOrigY = rect.top;
    pipWin.style.transition = 'none';
  });

  document.addEventListener('mousemove', (e) => {
    if (!pipDragging) return;
    const dx = e.clientX - pipStartX;
    const dy = e.clientY - pipStartY;
    pipWin.style.left = `${pipOrigX + dx}px`;
    pipWin.style.top = `${pipOrigY + dy}px`;
    pipWin.style.right = 'auto';
    pipWin.style.bottom = 'auto';
  });

  document.addEventListener('mouseup', () => {
    if (pipDragging) {
      pipDragging = false;
      pipWin.style.transition = 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease';
    }
  });
}

function openPiP(src, title = 'Picture-in-Picture', startTime = 0) {
  const pipWin = document.getElementById('pip-window');
  const video = document.getElementById('pip-video');
  const titleEl = document.getElementById('pip-title');
  const playBtn = document.getElementById('pip-play-btn');
  if (!pipWin || !video) return;

  initPiPWindow();

  titleEl.innerText = title;
  video.src = src;
  video.currentTime = startTime || 0;
  pipWin.style.display = 'block';
  pipWin.style.transform = 'scale(0.85)';
  pipWin.style.opacity = '0';

  setTimeout(() => {
    pipWin.style.transform = 'scale(1)';
    pipWin.style.opacity = '1';
  }, 10);

  video.play().then(() => {
    if (playBtn) playBtn.innerText = '⏸';
  }).catch(() => {
    if (playBtn) playBtn.innerText = '▶️';
  });
  if (typeof showNotification === 'function') {
    showNotification(t('video_pip', 'Picture in Picture'), t('notif_pip_active', 'Now playing "%s" in floating window').replace('%s', title));
  }
}

function closePiP() {
  const pipWin = document.getElementById('pip-window');
  const video = document.getElementById('pip-video');
  if (!pipWin || !video) return;
  video.pause();
  pipWin.style.transform = 'scale(0.8)';
  pipWin.style.opacity = '0';
  setTimeout(() => {
    pipWin.style.display = 'none';
    video.src = '';
  }, 200);
}

function togglePiPPlay() {
  const video = document.getElementById('pip-video');
  const playBtn = document.getElementById('pip-play-btn');
  if (!video) return;
  if (video.paused) {
    video.play();
    if (playBtn) playBtn.innerText = '⏸';
  } else {
    video.pause();
    if (playBtn) playBtn.innerText = '▶️';
  }
}

function restorePiPToWindow() {
  const video = document.getElementById('pip-video');
  const time = video ? video.currentTime : 0;
  closePiP();
  launchVideo();
}

// ==========================================
// Control Center Wi-Fi, Bluetooth & Live Equalizer
// ==========================================
function toggleCCWifi() {
  const pop = document.getElementById('cc-wifi-popover');
  const btPop = document.getElementById('cc-bluetooth-popover');
  if (btPop) btPop.style.display = 'none';
  if (pop) {
    pop.style.display = pop.style.display === 'flex' ? 'none' : 'flex';
  }
}

function selectWifi(name) {
  const nameEl = document.getElementById('cc-wifi-name');
  if (nameEl) nameEl.innerText = name;
  const pop = document.getElementById('cc-wifi-popover');
  if (pop) {
    pop.querySelectorAll('.cc-popover-item').forEach(item => {
      const text = item.innerText;
      if (text.includes(name)) {
        item.classList.add('active');
        const s = item.querySelector('span:first-child');
        if (s && !s.innerText.startsWith('✓ ')) s.innerText = '✓ ' + s.innerText;
      } else {
        item.classList.remove('active');
        const s = item.querySelector('span:first-child');
        if (s) s.innerText = s.innerText.replace('✓ ', '');
      }
    });
    pop.style.display = 'none';
  }
  if (typeof showNotification === 'function') {
    showNotification(t('cc_wifi', 'Wi-Fi'), t('notif_wifi_connected', 'Connected to "%s" (5 GHz, Full Signal)').replace('%s', name));
  }
}

function toggleCCBluetooth() {
  const pop = document.getElementById('cc-bluetooth-popover');
  const wifiPop = document.getElementById('cc-wifi-popover');
  if (wifiPop) wifiPop.style.display = 'none';
  if (pop) {
    pop.style.display = pop.style.display === 'flex' ? 'none' : 'flex';
  }
}

function toggleBTDevice(el, name) {
  if (el.classList.contains('active')) {
    el.classList.remove('active');
    el.style.opacity = '0.5';
    if (typeof showNotification === 'function') {
      showNotification(t('cc_bluetooth', 'Bluetooth'), t('notif_bt_disconnected', '%s disconnected').replace('%s', name));
    }
  } else {
    el.classList.add('active');
    el.style.opacity = '1';
    if (typeof showNotification === 'function') {
      showNotification(t('cc_bluetooth', 'Bluetooth'), t('notif_bt_connected', '%s connected (Audio Output / Peripheral)').replace('%s', name));
    }
  }
}

let ccMusicPlaying = false;
let currentTrackIdx = 0;
const musicTracks = [
  { title: 'Alice Symphony', artist: 'Cupertino Soundscape' },
  { title: 'Sonoma Breeze', artist: 'Pacific Coast Ensemble' },
  { title: 'Silicon Pulse', artist: 'Neural Core Beats' }
];

function toggleCCMusic() {
  ccMusicPlaying = !ccMusicPlaying;
  const btn = document.getElementById('cc-music-play-btn');
  const wave = document.getElementById('cc-eq-wave');
  if (btn) btn.innerText = ccMusicPlaying ? '⏸' : '▶️';
  if (wave) wave.style.display = ccMusicPlaying ? 'flex' : 'none';
  
  if (typeof updateIslandLiveMusic === 'function') {
    updateIslandLiveMusic(ccMusicPlaying, musicTracks[currentTrackIdx]);
  }

  if (ccMusicPlaying && typeof showNotification === 'function') {
    showNotification(t('notif_now_playing', 'Now Playing'), `${musicTracks[currentTrackIdx].title} - ${musicTracks[currentTrackIdx].artist}`, 'Music', '🎵');
  }
}

function skipTrack(dir) {
  currentTrackIdx = (currentTrackIdx + dir + musicTracks.length) % musicTracks.length;
  const track = musicTracks[currentTrackIdx];
  const titleEl = document.querySelector('#control-center .eq-container')?.previousElementSibling;
  const artistEl = document.querySelector('#control-center .eq-container')?.parentElement?.nextElementSibling;
  if (titleEl) titleEl.innerText = track.title;
  if (artistEl) artistEl.innerText = track.artist;
  if (ccMusicPlaying) {
    if (typeof updateIslandLiveMusic === 'function') updateIslandLiveMusic(true, track);
    if (typeof showNotification === 'function') {
      showNotification(t('notif_now_playing', 'Now Playing'), `${track.title} - ${track.artist}`, 'Music', '🎵');
    }
  }
}

// ==========================================
// macOS Dock Badge Helper API
// ==========================================
window.aliceOS = window.aliceOS || {};
window.aliceOS.setDockBadge = function(appName, countOrText) {
  const iconEl = document.querySelector(`.dock-icon[data-app="${appName.toLowerCase()}"]`);
  if (!iconEl) return;

  let badge = iconEl.querySelector('.dock-badge');
  if (!countOrText || countOrText === 0 || countOrText === '0') {
    if (badge) badge.remove();
    return;
  }

  if (!badge) {
    badge = document.createElement('div');
    badge.className = 'dock-badge';
    iconEl.appendChild(badge);
  }
  badge.innerText = countOrText;
};

// Set initial sample dock badges for lively macOS feel
setTimeout(() => {
  if (window.aliceOS && window.aliceOS.setDockBadge) {
    window.aliceOS.setDockBadge('notes', '2');
    window.aliceOS.setDockBadge('terminal', '1');
  }
}, 1500);

// ==========================================
// macOS Monterey/Ventura/Sonoma Quick Note Engine
// ==========================================
let quickNoteOpen = false;
let quickNoteSaveTimer = null;

function initQuickNote() {
  const peek = document.getElementById('quick-note-peek');
  const card = document.getElementById('quick-note-card');
  const textarea = document.getElementById('quick-note-text');
  if (!peek || !card || !textarea) return;

  // Corner proximity detection
  document.addEventListener('mousemove', (e) => {
    if (quickNoteOpen) return;
    const threshold = 35;
    if (e.clientX >= window.innerWidth - threshold && e.clientY >= window.innerHeight - threshold) {
      peek.classList.add('active');
    } else if (e.clientX < window.innerWidth - 80 || e.clientY < window.innerHeight - 80) {
      peek.classList.remove('active');
    }
  });

  // Debounced auto-save to VFS
  textarea.addEventListener('input', () => {
    clearTimeout(quickNoteSaveTimer);
    quickNoteSaveTimer = setTimeout(async () => {
      const content = textarea.value;
      if (window.aliceOS && window.aliceOS.vfs) {
        await window.aliceOS.vfs.writeFile('/Users/alice/Desktop/quick_note.txt', content);
      }
    }, 500);
  });
}

async function openQuickNote() {
  const peek = document.getElementById('quick-note-peek');
  const card = document.getElementById('quick-note-card');
  const textarea = document.getElementById('quick-note-text');
  const timeEl = document.getElementById('quick-note-time');
  if (!card || !textarea) return;

  quickNoteOpen = true;
  if (peek) peek.style.display = 'none';

  card.style.display = 'flex';
  setTimeout(() => {
    card.style.opacity = '1';
    card.style.transform = 'scale(1) translate(0, 0)';
  }, 10);

  if (timeEl) {
    const now = new Date();
    timeEl.innerText = 'Today at ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  // Load existing note from VFS
  if (window.aliceOS && window.aliceOS.vfs) {
    try {
      const res = await window.aliceOS.vfs.readFile('/Users/alice/Desktop/quick_note.txt');
      if (res && res.success && res.data) {
        textarea.value = res.data;
      }
    } catch(e) {}
  }

  textarea.focus();
}

function closeQuickNote() {
  const peek = document.getElementById('quick-note-peek');
  const card = document.getElementById('quick-note-card');
  if (!card) return;

  card.style.opacity = '0';
  card.style.transform = 'scale(0.8) translate(30px, 30px)';
  setTimeout(() => {
    card.style.display = 'none';
    if (peek) {
      peek.style.display = 'flex';
      peek.classList.remove('active');
    }
    quickNoteOpen = false;
  }, 250);
}

async function saveAndCloseQuickNote() {
  const textarea = document.getElementById('quick-note-text');
  if (textarea && window.aliceOS && window.aliceOS.vfs) {
    await window.aliceOS.vfs.writeFile('/Users/alice/Desktop/quick_note.txt', textarea.value);
    if (typeof showNotification === 'function') {
      showNotification(t('notif_quick_note_title', 'Quick Note'), t('notif_quick_note_saved', 'Saved to Desktop/quick_note.txt'));
    }
  }
  closeQuickNote();
}

initQuickNote();

// ==========================================
// Control Center Slider Haptics & Dynamic Icons
// ==========================================
function playVolumeFeedbackBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.07);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.07);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.07);
  } catch(e) {}
}

function initCCSliderHaptics() {
  const volSlider = document.getElementById('cc-volume');
  const volIcon = document.getElementById('cc-volume-icon');
  const brightSlider = document.getElementById('cc-brightness');

  if (volSlider && volIcon) {
    volSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      if (val === 0) {
        volIcon.innerText = '🔇';
      } else if (val < 33) {
        volIcon.innerText = '🔈';
      } else if (val < 67) {
        volIcon.innerText = '🔉';
      } else {
        volIcon.innerText = '🔊';
      }
      if (typeof showVolumeHUD === 'function') {
        showVolumeHUD(val);
      }
    });

    volSlider.addEventListener('change', () => {
      playVolumeFeedbackBeep();
    });
  }

  if (brightSlider) {
    brightSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      const overlay = document.getElementById('brightness-overlay');
      if (overlay) {
        overlay.style.opacity = ((100 - val) * 0.008).toFixed(2);
      }
    });
  }
}

initCCSliderHaptics();

// ==========================================
// macOS Menu Bar Sound / Audio Output Popover
// ==========================================
function toggleSoundPopover() {
  const pop = document.getElementById('sound-popover');
  const batPop = document.getElementById('battery-popover');
  const cc = document.getElementById('control-center');
  const nc = document.getElementById('nc-sidebar');
  if (batPop) batPop.style.display = 'none';
  if (cc) cc.style.display = 'none';
  if (nc) nc.style.right = '-400px';

  if (pop) {
    pop.classList.toggle('open');
  }
}

function selectSoundDevice(el, deviceName, icon) {
  const pop = document.getElementById('sound-popover');
  if (!pop) return;
  const items = pop.querySelectorAll('.sound-device-item');
  items.forEach(item => {
    item.classList.remove('active');
    const chk = item.querySelector('.sound-check');
    if (chk) chk.style.display = 'none';
  });
  el.classList.add('active');
  const chk = el.querySelector('.sound-check');
  if (chk) chk.style.display = 'inline';

  if (typeof playVolumeFeedbackBeep === 'function') {
    playVolumeFeedbackBeep();
  }
  if (typeof showNotification === 'function') {
    showNotification(t('sound_output', 'Sound Output'), t('notif_sound_output', 'Switched audio output to %s').replace('%s', deviceName), 'Sound', icon || '🔊');
  }
}

function initSoundPopover() {
  const slider = document.getElementById('sound-pop-slider');
  const pct = document.getElementById('sound-pop-pct');
  const icon = document.getElementById('sound-pop-icon');
  const menubarBtn = document.getElementById('sound-btn');

  if (slider) {
    slider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      if (pct) pct.innerText = `${val}%`;
      
      let soundIco = '🔊';
      if (val === 0) soundIco = '🔇';
      else if (val < 40) soundIco = '🔉';

      if (icon) icon.innerText = soundIco;
      if (menubarBtn) menubarBtn.innerText = soundIco;

      const ccVol = document.getElementById('cc-volume');
      if (ccVol && ccVol !== e.target) {
        ccVol.value = val;
      }
    });

    slider.addEventListener('change', () => {
      if (typeof playVolumeFeedbackBeep === 'function') {
        playVolumeFeedbackBeep();
      }
    });
  }

  // Close sound popover when clicking outside
  document.addEventListener('click', (e) => {
    const pop = document.getElementById('sound-popover');
    const btn = document.getElementById('sound-btn');
    if (pop && pop.classList.contains('open')) {
      if (!pop.contains(e.target) && (!btn || !btn.contains(e.target))) {
        pop.classList.remove('open');
      }
    }
  });
}

initSoundPopover();
window.toggleSoundPopover = toggleSoundPopover;
window.selectSoundDevice = selectSoundDevice;
let lowPowerModeEnabled = false;

function toggleBatteryPopover() {
  const pop = document.getElementById('battery-popover');
  const cc = document.getElementById('control-center');
  const nc = document.getElementById('nc-sidebar');
  if (cc) cc.style.display = 'none';
  if (nc) nc.style.right = '-400px';

  if (pop) {
    pop.style.display = pop.style.display === 'flex' ? 'none' : 'flex';
  }
}

function toggleLowPowerMode(enabled) {
  lowPowerModeEnabled = enabled;
  const icon = document.getElementById('battery-level-icon');
  const overlay = document.getElementById('brightness-overlay');
  
  if (enabled) {
    if (icon) icon.innerText = '🪫';
    if (overlay) overlay.style.opacity = '0.15';
    if (typeof showNotification === 'function') {
      showNotification(t('battery_lpm', 'Low Power Mode'), t('notif_lpm_on', 'Battery saver activated. Display slightly dimmed.'));
    }
  } else {
    if (icon) icon.innerText = '🔋';
    const brightSlider = document.getElementById('cc-brightness');
    const val = brightSlider ? parseInt(brightSlider.value) : 100;
    if (overlay) overlay.style.opacity = ((100 - val) * 0.008).toFixed(2);
    if (typeof showNotification === 'function') {
      showNotification(t('battery_lpm', 'Low Power Mode'), t('notif_lpm_off', 'Low Power Mode turned off.'));
    }
  }
}

// ==========================================
// iOS 17 Dynamic Island Multi-Activity Controller
// ==========================================
let islandExpanded = false;
let islandLiveActive = false;
let islandActiveTab = 'music';
let islandTimerRemaining = 15 * 60; // 15 mins default
let islandTimerInterval = null;
let islandTimerRunning = false;
const islandTimerTotal = 15 * 60;

function switchIslandTab(tabName) {
  islandActiveTab = tabName;
  ['music', 'timer', 'airdrop'].forEach(t => {
    const tabEl = document.getElementById(`act-tab-${t}`);
    const paneEl = document.getElementById(`island-pane-${t}`);
    if (tabEl) tabEl.classList.toggle('active', t === tabName);
    if (paneEl) {
      paneEl.style.display = t === tabName ? 'flex' : 'none';
      paneEl.classList.toggle('active', t === tabName);
    }
  });
  if (typeof playVolumeFeedbackBeep === 'function') playVolumeFeedbackBeep();
}

function updateIslandLiveMusic(isPlaying, track) {
  const island = document.getElementById('dynamic-island');
  const standardContent = document.getElementById('island-content');
  const liveContent = document.getElementById('island-live-activity');
  const label = document.getElementById('island-live-label');
  const trackTitle = document.getElementById('island-track-title');
  const trackArtist = document.getElementById('island-track-artist');
  const playToggle = document.getElementById('island-play-toggle');
  if (!island || !standardContent || !liveContent) return;

  const curTrack = track || ((typeof musicTracks !== 'undefined' && musicTracks[currentTrackIdx]) ? musicTracks[currentTrackIdx] : { title: 'Alice Symphony', artist: 'Cupertino Soundscape' });

  if (trackTitle) trackTitle.innerText = curTrack.title;
  if (trackArtist) trackArtist.innerText = curTrack.artist;
  if (playToggle) playToggle.innerText = isPlaying ? '⏸' : '▶';

  if (isPlaying) {
    islandLiveActive = true;
    standardContent.style.display = 'none';
    liveContent.style.display = 'flex';
    if (label) label.innerText = curTrack.title || 'Playing';
    if (!islandExpanded) {
      island.style.width = '190px';
      island.style.height = '32px';
    }
  } else {
    islandLiveActive = false;
    liveContent.style.display = 'none';
    if (!islandExpanded) {
      island.style.width = '120px';
      island.style.height = '30px';
    }
  }
}

function toggleIslandClick(e) {
  if (e) e.stopPropagation();
  const island = document.getElementById('dynamic-island');
  const compactWrap = document.getElementById('island-compact-wrap');
  const expContainer = document.getElementById('island-expanded-container');
  if (!island) return;

  if (!islandExpanded) {
    islandExpanded = true;
    island.classList.add('expanded');
    if (compactWrap) compactWrap.style.display = 'none';
    if (expContainer) {
      expContainer.style.display = 'flex';
      setTimeout(() => { expContainer.style.opacity = '1'; }, 10);
    }
    if (typeof playVolumeFeedbackBeep === 'function') playVolumeFeedbackBeep();
  } else {
    islandExpanded = false;
    island.classList.remove('expanded');
    if (expContainer) {
      expContainer.style.opacity = '0';
      setTimeout(() => {
        expContainer.style.display = 'none';
        if (compactWrap) compactWrap.style.display = 'flex';
        if (islandLiveActive) {
          updateIslandLiveMusic(true);
        } else {
          island.style.width = '120px';
          island.style.height = '30px';
        }
      }, 220);
    }
    if (typeof playVolumeFeedbackBeep === 'function') playVolumeFeedbackBeep();
  }
}

function seekIslandMusic(e) {
  e.stopPropagation();
  const scrubber = document.getElementById('island-scrubber-track');
  const fill = document.getElementById('island-scrubber-fill');
  const currEl = document.getElementById('island-track-curr');
  if (!scrubber || !fill) return;
  const rect = scrubber.getBoundingClientRect();
  const clickX = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
  const pct = (clickX / rect.width) * 100;
  fill.style.width = `${pct}%`;
  
  const totalSec = 200; // 3:20
  const curSec = Math.floor((pct / 100) * totalSec);
  const m = Math.floor(curSec / 60);
  const s = (curSec % 60).toString().padStart(2, '0');
  if (currEl) currEl.innerText = `${m}:${s}`;
}

function toggleIslandPlayback() {
  if (typeof toggleCCMusic === 'function') {
    toggleCCMusic();
  }
  const isPlaying = typeof ccMusicPlaying !== 'undefined' ? ccMusicPlaying : true;
  updateIslandLiveMusic(isPlaying);
}

function updateIslandTimerDisplay() {
  const digits = document.getElementById('island-timer-digits');
  const ring = document.getElementById('island-timer-ring');
  if (digits) {
    const m = Math.floor(islandTimerRemaining / 60).toString().padStart(2, '0');
    const s = (islandTimerRemaining % 60).toString().padStart(2, '0');
    digits.innerText = `${m}:${s}`;
  }
  if (ring) {
    const offset = 175.9 * (1 - (islandTimerRemaining / islandTimerTotal));
    ring.style.strokeDashoffset = offset;
  }
}

function toggleIslandTimer() {
  const btn = document.getElementById('island-timer-toggle-btn');
  if (islandTimerRunning) {
    clearInterval(islandTimerInterval);
    islandTimerRunning = false;
    if (btn) btn.innerText = t('timer_start', 'Start');
  } else {
    islandTimerRunning = true;
    if (btn) btn.innerText = t('timer_pause', 'Pause');
    islandTimerInterval = setInterval(() => {
      if (islandTimerRemaining > 0) {
        islandTimerRemaining--;
        updateIslandTimerDisplay();
      } else {
        clearInterval(islandTimerInterval);
        islandTimerRunning = false;
        if (btn) btn.innerText = t('timer_start', 'Start');
        if (typeof showNotification === 'function') showNotification(t('timer_title', 'Timer'), t('notif_focus_timer_done', 'Focus Timer Completed! ⏰'));
        if (typeof playVolumeFeedbackBeep === 'function') playVolumeFeedbackBeep();
      }
    }, 1000);
  }
  if (typeof playVolumeFeedbackBeep === 'function') playVolumeFeedbackBeep();
}

function addIslandTimer(secs) {
  islandTimerRemaining += secs;
  updateIslandTimerDisplay();
  if (typeof playVolumeFeedbackBeep === 'function') playVolumeFeedbackBeep();
}

function resetIslandTimer() {
  clearInterval(islandTimerInterval);
  islandTimerRunning = false;
  islandTimerRemaining = islandTimerTotal;
  const btn = document.getElementById('island-timer-toggle-btn');
  if (btn) btn.innerText = t('timer_start', 'Start');
  updateIslandTimerDisplay();
  if (typeof playVolumeFeedbackBeep === 'function') playVolumeFeedbackBeep();
}

// Global click listener to collapse island when clicking outside
document.addEventListener('click', (e) => {
  if (islandExpanded && !e.target.closest('#dynamic-island')) {
    toggleIslandClick();
  }
});

window.switchIslandTab = switchIslandTab;
window.toggleIslandClick = toggleIslandClick;
window.seekIslandMusic = seekIslandMusic;
window.toggleIslandPlayback = toggleIslandPlayback;
window.toggleIslandTimer = toggleIslandTimer;
window.addIslandTimer = addIslandTimer;
window.resetIslandTimer = resetIslandTimer;

// ==========================================
// iOS 17 / macOS StandBy Mode Controller
// ==========================================
let standbyInterval = null;
let standbyNightMode = false;

function enterStandByMode() {
  const overlay = document.getElementById('standby-overlay');
  if (!overlay) return;
  overlay.style.display = 'flex';
  setTimeout(() => {
    overlay.style.opacity = '1';
  }, 10);
  updateStandByClock();
  if (standbyInterval) clearInterval(standbyInterval);
  standbyInterval = setInterval(updateStandByClock, 1000);
}

function exitStandByMode() {
  const overlay = document.getElementById('standby-overlay');
  if (!overlay) return;
  overlay.style.opacity = '0';
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 500);
  if (standbyInterval) {
    clearInterval(standbyInterval);
    standbyInterval = null;
  }
}

function toggleStandByNightMode() {
  const overlay = document.getElementById('standby-overlay');
  if (!overlay) return;
  standbyNightMode = !standbyNightMode;
  overlay.classList.toggle('night-mode', standbyNightMode);
}

function updateStandByClock() {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hr = now.getHours();

  const secDeg = sec * 6;
  const minDeg = min * 6 + sec * 0.1;
  const hrDeg = (hr % 12) * 30 + min * 0.5;

  const hHour = document.getElementById('sb-hand-hour');
  const hMin = document.getElementById('sb-hand-minute');
  const hSec = document.getElementById('sb-hand-second');
  if (hHour) hHour.style.transform = `translateX(-50%) rotate(${hrDeg}deg)`;
  if (hMin) hMin.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
  if (hSec) hSec.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;

  const dayNamesEn = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  const dayNamesZh = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const dayNamesJa = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
  const dayNames = currentSystemLang === 'zh' ? dayNamesZh : (currentSystemLang === 'ja' ? dayNamesJa : dayNamesEn);
  const dayEl = document.getElementById('sb-day-name');
  const dateEl = document.getElementById('sb-date-num');
  if (dayEl) dayEl.innerText = dayNames[now.getDay()];
  if (dateEl) dateEl.innerText = now.getDate();
}

window.enterStandByMode = enterStandByMode;
window.exitStandByMode = exitStandByMode;
window.toggleStandByNightMode = toggleStandByNightMode;
window.updateStandByClock = updateStandByClock;

// ==========================================
// Floating Volume HUD Capsule Controller
// ==========================================
let volumeHudTimer = null;

function showVolumeHUD(val) {
  const hud = document.getElementById('volume-hud');
  const bar = document.getElementById('volume-hud-bar');
  const icon = document.getElementById('volume-hud-icon');
  if (!hud || !bar) return;

  val = Math.max(0, Math.min(100, Math.round(val)));
  bar.style.width = `${val}%`;

  if (icon) {
    if (val === 0) icon.innerText = '🔇';
    else if (val < 33) icon.innerText = '🔈';
    else if (val < 67) icon.innerText = '🔉';
    else icon.innerText = '🔊';
  }

  hud.style.display = 'flex';
  void hud.offsetWidth; // force reflow
  hud.style.opacity = '1';
  hud.style.transform = 'translateX(-50%) scale(1)';

  if (volumeHudTimer) clearTimeout(volumeHudTimer);
  volumeHudTimer = setTimeout(() => {
    hud.style.opacity = '0';
    hud.style.transform = 'translateX(-50%) scale(0.9)';
    setTimeout(() => {
      if (hud.style.opacity === '0') hud.style.display = 'none';
    }, 250);
  }, 1400);
}

window.showVolumeHUD = showVolumeHUD;

// ==========================================
// macOS Sequoia Window Tile Popover
// ==========================================
let activeTileWin = null;
let tilePopoverHideTimer = null;

function showWindowTilePopover(win, triggerEl) {
  const popover = document.getElementById('window-tile-popover');
  if (!popover || !win || !triggerEl) return;
  if (tilePopoverHideTimer) clearTimeout(tilePopoverHideTimer);

  activeTileWin = win;
  const rect = triggerEl.getBoundingClientRect();
  popover.style.left = `${Math.max(10, rect.left - 10)}px`;
  popover.style.top = `${rect.bottom + 8}px`;
  popover.style.display = 'flex';
  void popover.offsetWidth; // force reflow
  popover.style.opacity = '1';
  popover.style.transform = 'scale(1)';
}

function hideWindowTilePopover() {
  const popover = document.getElementById('window-tile-popover');
  if (!popover) return;
  popover.style.opacity = '0';
  popover.style.transform = 'scale(0.95)';
  setTimeout(() => {
    if (popover.style.opacity === '0') popover.style.display = 'none';
  }, 180);
}

function scheduleHideTilePopover() {
  if (tilePopoverHideTimer) clearTimeout(tilePopoverHideTimer);
  tilePopoverHideTimer = setTimeout(() => {
    hideWindowTilePopover();
  }, 250);
}

function initWindowTilePopover() {
  const popover = document.getElementById('window-tile-popover');
  if (!popover) return;

  popover.addEventListener('mouseenter', () => {
    if (tilePopoverHideTimer) clearTimeout(tilePopoverHideTimer);
  });
  popover.addEventListener('mouseleave', () => {
    scheduleHideTilePopover();
  });

  document.getElementById('tile-act-left')?.addEventListener('click', () => {
    if (!activeTileWin) return;
    activeTileWin.style.transition = 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
    activeTileWin.style.left = '8px';
    activeTileWin.style.top = '36px';
    activeTileWin.style.width = 'calc(50vw - 12px)';
    activeTileWin.style.height = 'calc(100vh - 126px)';
    activeTileWin.dataset.snapped = 'left';
    focusWindow(activeTileWin);
    hideWindowTilePopover();
    setTimeout(() => activeTileWin.style.transition = 'none', 350);
  });

  document.getElementById('tile-act-right')?.addEventListener('click', () => {
    if (!activeTileWin) return;
    activeTileWin.style.transition = 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
    activeTileWin.style.left = 'calc(50vw + 4px)';
    activeTileWin.style.top = '36px';
    activeTileWin.style.width = 'calc(50vw - 12px)';
    activeTileWin.style.height = 'calc(100vh - 126px)';
    activeTileWin.dataset.snapped = 'right';
    focusWindow(activeTileWin);
    hideWindowTilePopover();
    setTimeout(() => activeTileWin.style.transition = 'none', 350);
  });

  document.getElementById('tile-act-zoom')?.addEventListener('click', () => {
    if (!activeTileWin) return;
    activeTileWin.style.transition = 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
    activeTileWin.style.left = '8px';
    activeTileWin.style.top = '36px';
    activeTileWin.style.width = 'calc(100vw - 16px)';
    activeTileWin.style.height = 'calc(100vh - 126px)';
    activeTileWin.dataset.snapped = 'top';
    focusWindow(activeTileWin);
    hideWindowTilePopover();
    setTimeout(() => activeTileWin.style.transition = 'none', 350);
  });

  document.getElementById('tile-act-center')?.addEventListener('click', () => {
    if (!activeTileWin) return;
    activeTileWin.style.transition = 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
    activeTileWin.style.left = 'calc(50vw - 325px)';
    activeTileWin.style.top = 'calc(50vh - 210px)';
    activeTileWin.style.width = '650px';
    activeTileWin.style.height = '420px';
    delete activeTileWin.dataset.snapped;
    focusWindow(activeTileWin);
    hideWindowTilePopover();
    setTimeout(() => activeTileWin.style.transition = 'none', 350);
  });
}

initWindowTilePopover();

// ==========================================
// iOS / macOS Face ID Biometric Unlock
// ==========================================
function playFaceIDSuccessSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const playTone = (freq, start, dur) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
      gain.gain.setValueAtTime(0.15, ctx.currentTime + start);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + start);
      osc.stop(ctx.currentTime + start + dur);
    };
    playTone(587.33, 0, 0.12);    // D5
    playTone(880.00, 0.1, 0.22);   // A5
  } catch(e) {}
}

let faceIdBusy = false;
function triggerFaceID() {
  if (faceIdBusy) return;
  faceIdBusy = true;

  const modal = document.getElementById('faceid-modal');
  const icon = document.getElementById('faceid-glyph-icon');
  const text = document.getElementById('faceid-status-text');
  const lockGlyph = document.getElementById('lock-glyph');
  if (!modal) {
    faceIdBusy = false;
    loginUser();
    return;
  }

  modal.style.display = 'flex';
  void modal.offsetWidth;
  modal.style.opacity = '1';
  modal.style.transform = 'translate(-50%, -50%) scale(1)';
  if (icon) {
    icon.innerText = '🙂';
    icon.style.transform = 'scale(1)';
    icon.style.color = 'white';
  }
  if (text) text.innerText = 'Verifying...';

  setTimeout(() => {
    // Face matched!
    playFaceIDSuccessSound();
    if (icon) {
      icon.innerText = '✓';
      icon.style.color = '#34c759';
      icon.style.transform = 'scale(1.25)';
    }
    if (text) text.innerText = 'Face ID';
    if (lockGlyph) {
      lockGlyph.innerText = '🔓';
      lockGlyph.style.transform = 'scale(1.25)';
    }

    setTimeout(() => {
      modal.style.opacity = '0';
      modal.style.transform = 'translate(-50%, -50%) scale(0.85)';
      setTimeout(() => {
        modal.style.display = 'none';
        faceIdBusy = false;
        loginUser();
      }, 200);
    }, 450);
  }, 700);
}

window.triggerFaceID = triggerFaceID;

// ====================================================
// macOS Sonoma / Sequoia Desktop Widgets Engine
// (Close, Change/Replace, Delete, Gallery, Persistence)
// ====================================================
let widgetJiggleMode = false;
let activeContextWidget = null;
const availableWidgetTypes = ['clock', 'weather', 'sys', 'battery', 'calendar', 'music'];

function getWidgetContentHtml(type) {
  const dict = i18nDict[currentSystemLang] || i18nDict.en;
  if (type === 'clock') {
    return `
      <div class="widget-action-group">
        <button class="widget-action-btn widget-change-btn" onclick="cycleWidget(this.closest('.sonoma-widget'), event)" title="更换小组件">🔄</button>
        <button class="widget-action-btn widget-close-btn" onclick="removeWidget(this.closest('.sonoma-widget'), event)" title="关闭/删除小组件">✕</button>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;">
        <span id="widget-clock-city" style="font-size:14px;font-weight:600;opacity:0.85;">Cupertino</span>
        <span id="widget-clock-tz" style="font-size:11px;opacity:0.6;font-weight:600;">CUP (UTC-7)</span>
      </div>
      <div id="widget-time" style="font-size:46px;font-weight:200;letter-spacing:-1.5px;line-height:1;">${new Date().toLocaleTimeString()}</div>
      <div id="widget-clock-date" style="font-size:11px;opacity:0.65;margin-top:6px;">${dict.qn_today || '今天'}</div>
    `;
  } else if (type === 'weather') {
    return `
      <div class="widget-action-group">
        <button class="widget-action-btn widget-change-btn" onclick="cycleWidget(this.closest('.sonoma-widget'), event)" title="更换小组件">🔄</button>
        <button class="widget-action-btn widget-close-btn" onclick="removeWidget(this.closest('.sonoma-widget'), event)" title="关闭/删除小组件">✕</button>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;width:100%;">
        <div style="flex:1;">
          <div id="widget-weather-city" style="font-size:14px;font-weight:600;opacity:0.9;">Cupertino</div>
          <div id="widget-weather-temp" style="font-size:36px;font-weight:300;line-height:1.1;">72°</div>
          <div id="widget-weather-cond" style="font-size:11px;opacity:0.7;margin-top:2px;">Mostly Sunny • H:75° L:55°</div>
        </div>
        <div id="widget-weather-icon" class="weather-icon-anim" style="font-size:48px;text-shadow:0 2px 12px rgba(0,0,0,0.5);">☀️</div>
      </div>
    `;
  } else if (type === 'sys' || type === 'system') {
    return `
      <div class="widget-action-group">
        <button class="widget-action-btn widget-change-btn" onclick="cycleWidget(this.closest('.sonoma-widget'), event)" title="更换小组件">🔄</button>
        <button class="widget-action-btn widget-close-btn" onclick="removeWidget(this.closest('.sonoma-widget'), event)" title="关闭/删除小组件">✕</button>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <div style="font-size:13px;font-weight:600;opacity:0.9;display:flex;align-items:center;gap:6px;"><span>📈</span> <span>${dict.app_hostinfo || '系统性能'}</span></div>
        <span style="font-size:10px;font-weight:700;background:rgba(52,199,89,0.25);color:#34c759;padding:2px 6px;border-radius:6px;">NORMAL</span>
      </div>
      <div style="display:flex;gap:15px;">
        <div style="flex:1;height:6px;background:rgba(255,255,255,0.2);border-radius:3px;overflow:hidden;">
          <div id="widget-cpu-bar" style="width:24%;height:100%;background:#34c759;border-radius:3px;transition:width 0.8s ease;"></div>
        </div>
        <div style="flex:1;height:6px;background:rgba(255,255,255,0.2);border-radius:3px;overflow:hidden;">
          <div id="widget-ram-bar" style="width:36%;height:100%;background:#007aff;border-radius:3px;transition:width 0.8s ease;"></div>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:11px;opacity:0.75;margin-top:6px;">
        <span id="widget-cpu-lbl">CPU: 24%</span>
        <span id="widget-ram-lbl">RAM: 5.8 GB</span>
      </div>
    `;
  } else if (type === 'battery') {
    return `
      <div class="widget-action-group">
        <button class="widget-action-btn widget-change-btn" onclick="cycleWidget(this.closest('.sonoma-widget'), event)" title="更换小组件">🔄</button>
        <button class="widget-action-btn widget-close-btn" onclick="removeWidget(this.closest('.sonoma-widget'), event)" title="关闭/删除小组件">✕</button>
      </div>
      <div style="font-size:13px;font-weight:600;opacity:0.85;margin-bottom:10px;display:flex;justify-content:space-between;">
        <span>${dict.w_type_battery || '电池电量'}</span>
        <span style="color:#34c759;font-size:11px;">⚡ 100%</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;font-size:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div style="display:flex;align-items:center;gap:8px;"><span>💻</span><span>MacBook Pro</span></div>
          <div style="display:flex;align-items:center;gap:6px;"><div style="width:36px;height:6px;background:rgba(255,255,255,0.2);border-radius:3px;overflow:hidden;"><div style="width:98%;height:100%;background:#34c759;"></div></div><span style="font-weight:700;color:#34c759;font-size:11px;">98%</span></div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div style="display:flex;align-items:center;gap:8px;"><span>🎧</span><span>AirPods Pro</span></div>
          <div style="display:flex;align-items:center;gap:6px;"><div style="width:36px;height:6px;background:rgba(255,255,255,0.2);border-radius:3px;overflow:hidden;"><div style="width:100%;height:100%;background:#34c759;"></div></div><span style="font-weight:700;color:#34c759;font-size:11px;">100%</span></div>
        </div>
      </div>
    `;
  } else if (type === 'calendar') {
    const now = new Date();
    const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return `
      <div class="widget-action-group">
        <button class="widget-action-btn widget-change-btn" onclick="cycleWidget(this.closest('.sonoma-widget'), event)" title="更换小组件">🔄</button>
        <button class="widget-action-btn widget-close-btn" onclick="removeWidget(this.closest('.sonoma-widget'), event)" title="关闭/删除小组件">✕</button>
      </div>
      <div style="display:flex;align-items:center;gap:14px;">
        <div style="background:rgba(255,59,48,0.25);border:1px solid rgba(255,59,48,0.4);border-radius:16px;padding:6px 12px;text-align:center;min-width:48px;">
          <div style="font-size:10px;font-weight:700;color:#ff3b30;">${months[now.getMonth()]}</div>
          <div style="font-size:28px;font-weight:800;color:white;line-height:1.1;">${now.getDate()}</div>
        </div>
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:700;">${weekdays[now.getDay()]}</div>
          <div style="font-size:11px;opacity:0.7;margin-top:2px;">Apple Keynote • 10:00</div>
          <div style="font-size:10px;color:#60a5fa;margin-top:4px;">● AliceOS 评审 • 14:00</div>
        </div>
      </div>
    `;
  } else if (type === 'music') {
    const track = (typeof musicTracks !== 'undefined' && musicTracks[currentTrackIdx]) ? musicTracks[currentTrackIdx] : { title: 'Alice Symphony', artist: 'Cupertino Soundscape' };
    const isPlaying = typeof ccMusicPlaying !== 'undefined' ? ccMusicPlaying : false;
    return `
      <div class="widget-action-group">
        <button class="widget-action-btn widget-change-btn" onclick="cycleWidget(this.closest('.sonoma-widget'), event)" title="更换小组件">🔄</button>
        <button class="widget-action-btn widget-close-btn" onclick="removeWidget(this.closest('.sonoma-widget'), event)" title="关闭/删除小组件">✕</button>
      </div>
      <div style="display:flex;gap:12px;align-items:center;margin-bottom:10px;">
        <div style="width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,#ff2d55,#ff9500);display:flex;align-items:center;justify-content:center;font-size:22px;box-shadow:0 4px 12px rgba(255,45,85,0.4);">🎵</div>
        <div style="flex:1;overflow:hidden;">
          <div style="font-size:13px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${track.title}</div>
          <div style="font-size:11px;opacity:0.65;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${track.artist}</div>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:4px 12px;background:rgba(255,255,255,0.08);border-radius:12px;">
        <span onclick="event.stopPropagation(); if(typeof skipTrack==='function') skipTrack(-1);" style="cursor:pointer;font-size:14px;">⏮</span>
        <span onclick="event.stopPropagation(); if(typeof toggleCCMusic==='function') toggleCCMusic();" style="cursor:pointer;font-size:16px;">${isPlaying ? '⏸' : '▶️'}</span>
        <span onclick="event.stopPropagation(); if(typeof skipTrack==='function') skipTrack(1);" style="cursor:pointer;font-size:14px;">⏭</span>
      </div>
    `;
  }
  return '';
}

function checkEmptyWidgetsPlaceholder() {
  const container = document.getElementById('desktop-widgets');
  const placeholder = document.getElementById('widgets-empty-placeholder');
  if (!container || !placeholder) return;
  const count = container.querySelectorAll('.sonoma-widget').length;
  if (count === 0) {
    placeholder.style.display = 'flex';
  } else {
    placeholder.style.display = 'none';
  }
}

function removeWidget(widgetEl, e) {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
  if (!widgetEl) return;
  widgetEl.style.transition = 'transform 0.25s ease, opacity 0.25s ease';
  widgetEl.style.transform = 'scale(0.5)';
  widgetEl.style.opacity = '0';
  setTimeout(() => {
    widgetEl.remove();
    checkEmptyWidgetsPlaceholder();
    saveWidgetsState();
  }, 250);
}

function cycleWidget(widgetEl, e) {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
  if (!widgetEl) return;
  const curType = widgetEl.dataset.widgetType || 'clock';
  let idx = availableWidgetTypes.indexOf(curType);
  if (idx === -1) idx = 0;
  const nextType = availableWidgetTypes[(idx + 1) % availableWidgetTypes.length];
  replaceWidget(widgetEl, nextType);
}

function replaceWidget(widgetEl, newType) {
  if (!widgetEl) return;
  widgetEl.style.transition = 'transform 0.18s ease, opacity 0.18s ease';
  widgetEl.style.transform = 'scale(0.92)';
  widgetEl.style.opacity = '0.3';
  setTimeout(() => {
    widgetEl.dataset.widgetType = newType;
    widgetEl.innerHTML = getWidgetContentHtml(newType);
    if (newType === 'clock') widgetEl.onclick = cycleWidgetClockCity;
    else if (newType === 'weather') widgetEl.onclick = cycleWidgetWeatherCity;
    else if (newType === 'sys' || newType === 'system') widgetEl.onclick = cycleWidgetSysMode;
    else widgetEl.onclick = null;
    widgetEl.oncontextmenu = (ev) => openWidgetContextMenu(ev, widgetEl);

    widgetEl.style.transform = 'scale(1)';
    widgetEl.style.opacity = '1';
    saveWidgetsState();
  }, 180);
}

function openWidgetContextMenu(e, widgetEl) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  activeContextWidget = widgetEl;
  const menu = document.getElementById('widget-context-menu');
  if (!menu) return;

  // Hide other context menus
  const desktopCtx = document.getElementById('desktop-context-menu');
  if (desktopCtx) desktopCtx.style.display = 'none';

  menu.style.left = `${Math.min(window.innerWidth - 180, e ? e.clientX : 100)}px`;
  menu.style.top = `${Math.min(window.innerHeight - 260, e ? e.clientY : 100)}px`;
  menu.style.display = 'block';
}

function closeWidgetContextMenu() {
  const menu = document.getElementById('widget-context-menu');
  if (menu) menu.style.display = 'none';
  activeContextWidget = null;
}

function removeActiveWidget() {
  if (activeContextWidget) {
    removeWidget(activeContextWidget);
  }
  closeWidgetContextMenu();
}

function replaceActiveWidget(newType) {
  if (activeContextWidget) {
    replaceWidget(activeContextWidget, newType);
  }
  closeWidgetContextMenu();
}

function toggleDesktopWidgets() {
  const container = document.getElementById('desktop-widgets');
  if (!container) return;
  const isHidden = container.classList.toggle('hidden');
  
  const dict = i18nDict[currentSystemLang] || i18nDict.en;
  const dLabel = document.getElementById('ctx-toggle-widgets-label');
  if (dLabel) dLabel.innerText = isHidden ? (dict.w_ctx_toggle_show || '显示桌面小组件') : (dict.w_ctx_toggle_hide || '隐藏桌面小组件');
  const wLabel = document.getElementById('w-ctx-toggle-label');
  if (wLabel) wLabel.innerText = isHidden ? (dict.w_ctx_toggle_show || '显示桌面小组件') : (dict.w_ctx_toggle_hide || '隐藏桌面小组件');

  try {
    localStorage.setItem('alice_widgets_hidden', isHidden ? '1' : '0');
  } catch(e) {}
}

function saveWidgetsState() {
  const container = document.getElementById('desktop-widgets');
  if (!container) return;
  const types = Array.from(container.querySelectorAll('.sonoma-widget')).map(w => w.dataset.widgetType || 'clock');
  try {
    localStorage.setItem('alice_desktop_widgets', JSON.stringify(types));
  } catch(e) {}
}

function loadWidgetsState() {
  const container = document.getElementById('desktop-widgets');
  if (!container) return;

  // Restore hidden state
  try {
    const isHidden = localStorage.getItem('alice_widgets_hidden') === '1';
    if (isHidden) {
      container.classList.add('hidden');
      const dict = i18nDict[currentSystemLang] || i18nDict.en;
      const dLabel = document.getElementById('ctx-toggle-widgets-label');
      if (dLabel) dLabel.innerText = dict.w_ctx_toggle_show || '显示桌面小组件';
    }
  } catch(e) {}

  // Restore saved widgets list
  try {
    const saved = localStorage.getItem('alice_desktop_widgets');
    if (saved) {
      const types = JSON.parse(saved);
      if (Array.isArray(types)) {
        // Clear default static widgets and render saved ones
        container.querySelectorAll('.sonoma-widget').forEach(w => w.remove());
        types.forEach(type => {
          addWidgetToDesktop(type, false);
        });
      }
    }
  } catch(e) {}
  checkEmptyWidgetsPlaceholder();
}

function openWidgetGallery() {
  closeWidgetContextMenu();
  const sheet = document.getElementById('widget-gallery-sheet');
  if (!sheet) return;
  sheet.classList.add('open');
  setWidgetJiggleMode(true);
}

function closeWidgetGallery() {
  const sheet = document.getElementById('widget-gallery-sheet');
  if (sheet) sheet.classList.remove('open');
  setWidgetJiggleMode(false);
}

function setWidgetJiggleMode(enabled) {
  widgetJiggleMode = enabled;
  const container = document.getElementById('desktop-widgets');
  if (!container) return;

  const widgets = container.querySelectorAll('.sonoma-widget');
  widgets.forEach(w => {
    if (enabled) {
      w.classList.add('jiggling');
    } else {
      w.classList.remove('jiggling');
    }
  });
}

function addWidgetToDesktop(type, shouldSave = true) {
  const container = document.getElementById('desktop-widgets');
  if (!container) return;

  const w = document.createElement('div');
  w.className = 'sonoma-widget' + (widgetJiggleMode ? ' jiggling' : '');
  w.dataset.widgetType = type;
  w.style.cssText = 'background:rgba(255,255,255,0.12);backdrop-filter:blur(25px);-webkit-backdrop-filter:blur(25px);border-radius:24px;padding:18px;box-shadow:0 10px 30px rgba(0,0,0,0.25);border:1px solid rgba(255,255,255,0.2);color:white;pointer-events:auto;cursor:pointer;transform:scale(0.8);opacity:0;transition:all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);';

  w.innerHTML = getWidgetContentHtml(type);
  if (type === 'clock') w.onclick = cycleWidgetClockCity;
  else if (type === 'weather') w.onclick = cycleWidgetWeatherCity;
  else if (type === 'sys' || type === 'system') w.onclick = cycleWidgetSysMode;
  w.oncontextmenu = (ev) => openWidgetContextMenu(ev, w);

  container.appendChild(w);

  requestAnimationFrame(() => {
    w.style.transform = 'scale(1)';
    w.style.opacity = '1';
  });

  checkEmptyWidgetsPlaceholder();
  if (shouldSave) saveWidgetsState();

  if (typeof playVolumeFeedbackBeep === 'function') {
    playVolumeFeedbackBeep();
  }
}

// Global click dismisses widget context menu
document.addEventListener('click', (e) => {
  const menu = document.getElementById('widget-context-menu');
  if (menu && menu.style.display !== 'none' && !menu.contains(e.target)) {
    closeWidgetContextMenu();
  }
});

// Initialize widgets state on boot
document.addEventListener('DOMContentLoaded', () => {
  loadWidgetsState();
});

window.openWidgetGallery = openWidgetGallery;
window.closeWidgetGallery = closeWidgetGallery;
window.addWidgetToDesktop = addWidgetToDesktop;
window.removeWidget = removeWidget;
window.cycleWidget = cycleWidget;
window.replaceWidget = replaceWidget;
window.openWidgetContextMenu = openWidgetContextMenu;
window.closeWidgetContextMenu = closeWidgetContextMenu;
window.removeActiveWidget = removeActiveWidget;
window.replaceActiveWidget = replaceActiveWidget;
window.toggleDesktopWidgets = toggleDesktopWidgets;

// ====================================================
// Phase 67: iOS 17 / macOS Expandable 3D Sliders Controller
// ====================================================
let currentCCSliderType = 'volume';
let isDraggingCCVerticalSlider = false;

function openCCExpandedSlider(type) {
  currentCCSliderType = type;
  const modal = document.getElementById('cc-slider-modal');
  const card = document.getElementById('cc-slider-modal-card');
  const title = document.getElementById('cc-modal-title');
  const subtitle = document.getElementById('cc-modal-subtitle');
  const icon = document.getElementById('cc-modal-icon');
  const percent = document.getElementById('cc-modal-percent');
  const fill = document.getElementById('cc-vertical-fill');
  const thumbGlyph = document.getElementById('cc-vertical-thumb-glyph');
  const presetsContainer = document.getElementById('cc-modal-presets');
  if (!modal || !card) return;

  const currentVal = type === 'volume' 
    ? (document.getElementById('cc-volume')?.value || 50)
    : (document.getElementById('cc-brightness')?.value || 100);

  if (type === 'volume') {
    title.innerText = t('cc_sound_volume', 'Sound & Volume');
    subtitle.innerText = t('cc_sound_sub', 'MacBook Pro High-Fidelity Audio');
    icon.innerText = '🔊';
    thumbGlyph.innerText = '🔊';
    presetsContainer.innerHTML = `
      <div class="cc-preset-pill ${currentVal == 0 ? 'active' : ''}" onclick="setCCExpandedSliderVal(0)"><span>🔇</span><span>${t('cc_mute', 'Mute')}</span></div>
      <div class="cc-preset-pill ${currentVal == 50 ? 'active' : ''}" onclick="setCCExpandedSliderVal(50)"><span>🔉</span><span>50%</span></div>
      <div class="cc-preset-pill ${currentVal == 100 ? 'active' : ''}" onclick="setCCExpandedSliderVal(100)"><span>🔊</span><span>100%</span></div>
      <div class="cc-preset-pill ${isSpatialAudioActive ? 'active' : ''}" onclick="toggleSpatialAudio(this)"><span>🎧</span><span>${t('cc_spatial_audio', 'Spatial Audio')}</span></div>
    `;
  } else {
    title.innerText = t('cc_display_brightness', 'Display & Brightness');
    subtitle.innerText = t('cc_liquid_retina', 'Liquid Retina XDR Display');
    icon.innerText = '☀️';
    thumbGlyph.innerText = '☀️';
    presetsContainer.innerHTML = `
      <div class="cc-preset-pill ${document.body.classList.contains('dark-mode') ? 'active' : ''}" onclick="toggleSystemDarkMode(this)"><span>🌙</span><span>${t('cc_dark_mode', 'Dark Mode')}</span></div>
      <div class="cc-preset-pill ${isNightShiftActive ? 'active' : ''}" onclick="toggleNightShift(this)"><span>🌅</span><span>${t('cc_night_shift', 'Night Shift')}</span></div>
      <div class="cc-preset-pill active" onclick="toggleTrueTone(this)"><span>👁️</span><span>${t('cc_true_tone', 'True Tone')}</span></div>
    `;
  }

  percent.innerText = `${currentVal}%`;
  fill.style.height = `${currentVal}%`;

  modal.style.display = 'flex';
  setTimeout(() => {
    modal.style.opacity = '1';
    card.style.transform = 'scale(1)';
  }, 10);
  if (typeof playVolumeFeedbackBeep === 'function') playVolumeFeedbackBeep();
}

function closeCCSliderModal(e) {
  if (e && e.target && e.target.closest('#cc-slider-modal-card')) return;
  const modal = document.getElementById('cc-slider-modal');
  const card = document.getElementById('cc-slider-modal-card');
  if (!modal) return;
  modal.style.opacity = '0';
  if (card) card.style.transform = 'scale(0.86)';
  setTimeout(() => {
    modal.style.display = 'none';
  }, 240);
}

function setCCExpandedSliderVal(val) {
  updateCCExpandedSliderVal(val);
  if (typeof playSystemBeep === 'function') playSystemBeep(1046, 0.05);
}

function updateCCExpandedSliderVal(percent) {
  percent = Math.max(0, Math.min(100, Math.round(percent)));
  const fill = document.getElementById('cc-vertical-fill');
  const percentEl = document.getElementById('cc-modal-percent');
  const thumbGlyph = document.getElementById('cc-vertical-thumb-glyph');
  if (fill) fill.style.height = `${percent}%`;
  if (percentEl) percentEl.innerText = `${percent}%`;

  if (currentCCSliderType === 'volume') {
    const volInput = document.getElementById('cc-volume');
    if (volInput) {
      volInput.value = percent;
      volInput.dispatchEvent(new Event('input'));
    }
    if (thumbGlyph) {
      thumbGlyph.innerText = percent === 0 ? '🔇' : (percent < 35 ? '🔈' : (percent < 70 ? '🔉' : '🔊'));
    }
    if (typeof showVolumeHUD === 'function') showVolumeHUD(percent);
  } else {
    const briInput = document.getElementById('cc-brightness');
    if (briInput) {
      briInput.value = percent;
      briInput.dispatchEvent(new Event('input'));
    }
  }
}

// Vertical drag tracking
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('cc-vertical-track');
  if (!track) return;

  function handleTrackY(e) {
    const rect = track.getBoundingClientRect();
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const offsetY = clientY - rect.top;
    const ratio = 1 - (offsetY / rect.height);
    const percent = Math.max(0, Math.min(100, Math.round(ratio * 100)));
    updateCCExpandedSliderVal(percent);
  }

  track.addEventListener('mousedown', (e) => {
    isDraggingCCVerticalSlider = true;
    handleTrackY(e);
    if (typeof playSystemBeep === 'function') playSystemBeep(880, 0.02);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDraggingCCVerticalSlider) return;
    handleTrackY(e);
  });

  window.addEventListener('mouseup', () => {
    if (isDraggingCCVerticalSlider) {
      isDraggingCCVerticalSlider = false;
    }
  });
});

let isSpatialAudioActive = false;
function toggleSpatialAudio(btn) {
  isSpatialAudioActive = !isSpatialAudioActive;
  if (btn) btn.classList.toggle('active', isSpatialAudioActive);
  if (typeof showNotification === 'function') {
    showNotification(t('cc_spatial_audio', 'Spatial Audio'), isSpatialAudioActive ? t('notif_spatial_audio_on', 'Spatial Audio Active (Dynamic Head Tracking)') : t('notif_spatial_audio_off', 'Spatial Audio Disabled'));
  }
}

let isNightShiftActive = false;
function toggleNightShift(btn) {
  isNightShiftActive = !isNightShiftActive;
  if (btn) btn.classList.toggle('active', isNightShiftActive);
  const overlay = document.getElementById('brightness-overlay');
  if (overlay) {
    overlay.style.background = isNightShiftActive ? 'rgba(255, 140, 0, 0.16)' : 'black';
    overlay.style.opacity = isNightShiftActive ? '1' : (1 - (parseInt(document.getElementById('cc-brightness')?.value || 100) / 100)).toString();
  }
  if (typeof showNotification === 'function') {
    showNotification(t('cc_night_shift', 'Night Shift'), isNightShiftActive ? t('notif_night_shift_on', 'Night Shift Warmer Temperature: On') : t('notif_night_shift_off', 'Night Shift: Off'));
  }
}

function toggleTrueTone(btn) {
  if (btn) btn.classList.toggle('active');
  if (typeof showNotification === 'function') {
    showNotification(t('cc_true_tone', 'True Tone'), t('notif_true_tone', 'Display dynamically adapting to ambient lighting'));
  }
}

function toggleSystemDarkMode(btn) {
  document.body.classList.toggle('dark-mode');
  if (btn) btn.classList.toggle('active', document.body.classList.contains('dark-mode'));
  if (typeof showNotification === 'function') {
    showNotification(t('cc_appearance', 'Appearance'), document.body.classList.contains('dark-mode') ? t('notif_dark_mode_active', 'Dark Mode: Active') : t('notif_light_mode_active', 'Light Mode: Active'));
  }
}

window.openCCExpandedSlider = openCCExpandedSlider;
window.closeCCSliderModal = closeCCSliderModal;
window.setCCExpandedSliderVal = setCCExpandedSliderVal;
window.toggleSpatialAudio = toggleSpatialAudio;
window.toggleNightShift = toggleNightShift;
window.toggleTrueTone = toggleTrueTone;
window.toggleSystemDarkMode = toggleSystemDarkMode;


