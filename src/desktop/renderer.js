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
    settings_sound: 'Sound',
    settings_sound_effects: 'Sound Effects',
    settings_alert_sound: 'Alert Sound',
    settings_touch_feedback: 'Touch & Trackpad Haptic Feedback',
    settings_play_ui_sounds: 'Play user interface sound effects',
    settings_play_vol_feedback: 'Play feedback when volume changes',
    settings_haptic_strength: 'Haptic Click Strength',
    settings_haptic_light: 'Light',
    settings_haptic_medium: 'Medium',
    settings_haptic_heavy: 'Firm',
    settings_output_vol: 'Output Volume',
    settings_test_sound: 'Test',

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
    safari_start_page: 'Start Page',
    safari_favorites: 'Favorites',
    safari_privacy_report: 'Privacy Report',
    safari_reading_list: 'Reading List',
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
    maps_search_placeholder: 'Search Maps or enter address',
    maps_mode_explore: 'Explore',
    maps_mode_drive: 'Drive',
    maps_mode_transit: 'Transit',
    maps_mode_sat: 'Satellite',
    maps_directions: 'Directions',
    maps_featured_places: 'World Landmarks',
    maps_compass: 'Compass',
    maps_zoomin: 'Zoom In',
    maps_zoomout: 'Zoom Out',
    maps_my_location: 'Current Location',
    video_pip: 'Picture in Picture',
    pb_take_photo: 'Take Photo',
    xcode_run: 'Run (⌘R)',
    xcode_stop: 'Stop (⌘.)',
    xcode_clear: 'Clear Console',

    // App Store
    store_title: 'Alice Store 🛍️',
    store_subtitle: 'Discover & Install Native Applications',
    store_search: 'Search',
    store_nav_discover: 'Discover',
    store_nav_create: 'Create',
    store_nav_work: 'Work',
    store_nav_play: 'Play',
    store_nav_develop: 'Develop',
    store_nav_updates: 'Updates',
    store_popular_apps: 'Popular Apps & Extensions',
    store_open: 'OPEN',
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
    settings_sound: '声音',
    settings_sound_effects: '声音效果',
    settings_alert_sound: '警告声音',
    settings_touch_feedback: '触摸与触控板触感反馈',
    settings_play_ui_sounds: '播放用户界面声音效果',
    settings_play_vol_feedback: '更改音量时播放反馈声音',
    settings_haptic_strength: '触控按压力度',
    settings_haptic_light: '轻度',
    settings_haptic_medium: '标准',
    settings_haptic_heavy: '深沉',
    settings_output_vol: '输出音量',
    settings_test_sound: '测试',

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
    safari_start_page: '起始页',
    safari_favorites: '个人收藏',
    safari_privacy_report: '隐私报告',
    safari_reading_list: '阅读列表',
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
    maps_search_placeholder: '搜索地图或输入地址',
    maps_mode_explore: '探索',
    maps_mode_drive: '驾车',
    maps_mode_transit: '公交',
    maps_mode_sat: '卫星',
    maps_directions: '路线',
    maps_featured_places: '世界地标',
    maps_compass: '指南针',
    maps_zoomin: '放大',
    maps_zoomout: '缩小',
    maps_my_location: '当前位置',
    video_pip: '画中画',
    pb_take_photo: '拍照',
    xcode_run: '运行 (⌘R)',
    xcode_stop: '停止 (⌘.)',
    xcode_clear: '清空控制台',

    // 应用程序商店
    store_title: 'Alice 商店 🛍️',
    store_subtitle: '发现并安装原生应用程序',
    store_search: '搜索',
    store_nav_discover: '探索',
    store_nav_create: '创作',
    store_nav_work: '工作',
    store_nav_play: '游戏',
    store_nav_develop: '开发',
    store_nav_updates: '更新',
    store_popular_apps: '热门应用与扩展',
    store_open: '打开',
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
    settings_sound: 'サウンド',
    settings_sound_effects: 'サウンドエフェクト',
    settings_alert_sound: '警告音',
    settings_touch_feedback: 'タッチとトラックパッドの触覚フィードバック',
    settings_play_ui_sounds: 'ユーザーインターフェイスのサウンドエ费クトを再生',
    settings_play_vol_feedback: '音量変更時にフィードバックを再生',
    settings_haptic_strength: 'クリックの強さ',
    settings_haptic_light: '弱い',
    settings_haptic_medium: '中',
    settings_haptic_heavy: '強い',
    settings_output_vol: '出力音量',
    settings_test_sound: 'テスト',

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
      } else if (baseCmd === 'apt' || baseCmd === 'apt-get') {
        const subCmd = args[1];
        const pkg = args[2];
        const availablePkgs = {
          'cmatrix': { desc: 'Matrix digital rain terminal animation', size: '142 kB' },
          'cowsay': { desc: 'Configurable talking cow in ASCII art', size: '38 kB' },
          'figlet': { desc: 'Make large character ASCII banners', size: '86 kB' },
          'sl': { desc: 'Steam Locomotive ASCII animation', size: '64 kB' },
          'fortune': { desc: 'Prints witty and pithy geek aphorisms', size: '52 kB' }
        };

        if (subCmd === 'update') {
          output.innerHTML += `<span style="color:#007aff;">Hit:1</span> http://archive.aliceos.dev/linux/ubuntu sequoia InRelease<br>` +
            `<span style="color:#34c759;">Get:2</span> http://archive.aliceos.dev/linux/ubuntu sequoia-updates InRelease [119 kB]<br>` +
            `<span style="color:#34c759;">Get:3</span> http://archive.aliceos.dev/linux/ubuntu sequoia-security InRelease [119 kB]<br>` +
            `Fetched 238 kB in 0.6s (396 kB/s)<br>` +
            `Reading package lists... <span style="color:#34c759;">Done</span><br>` +
            `Building dependency tree... <span style="color:#34c759;">Done</span><br>` +
            `Reading state information... <span style="color:#34c759;">Done</span><br>` +
            `<span style="color:#34c759;">All packages are up to date.</span><br>`;
        } else if (subCmd === 'list' || subCmd === 'search') {
          output.innerHTML += `Listing available packages in AliceOS repository...<br>`;
          for (const [k, v] of Object.entries(availablePkgs)) {
            const isInst = await window.aliceOS.vfs.readFile(`/usr/bin/${k}`);
            const tag = isInst.success ? '<span style="color:#34c759;">[installed]</span>' : '<span style="color:#888;">[available]</span>';
            output.innerHTML += `<span style="color:#64b5f6;font-weight:700;">${k}</span>/sequoia 1.0.0-aliceos amd64 ${tag}<br>&nbsp;&nbsp;${v.desc}<br>`;
          }
        } else if (subCmd === 'install') {
          if (!pkg) {
            output.innerHTML += `<span style="color:#ff3b30;">apt install: missing package name.</span><br>Try: apt install cmatrix<br>`;
          } else if (!availablePkgs[pkg]) {
            output.innerHTML += `Reading package lists... Done<br>Building dependency tree... Done<br><span style="color:#ff3b30;">E: Unable to locate package ${pkg}</span><br>Type <span style="color:#64b5f6;">apt list</span> to see available packages.<br>`;
          } else {
            const meta = availablePkgs[pkg];
            output.innerHTML += `Reading package lists... Done<br>Building dependency tree... Done<br>` +
              `The following NEW packages will be installed:<br>&nbsp;&nbsp;<span style="color:#64b5f6;font-weight:700;">${pkg}</span><br>` +
              `0 upgraded, 1 newly installed, 0 to remove and 0 not upgraded.<br>` +
              `Need to get ${meta.size} of archives.<br>` +
              `Get:1 http://archive.aliceos.dev/linux/ubuntu sequoia/main ${pkg} amd64 [${meta.size}]<br>` +
              `Fetched ${meta.size} in 0.3s<br>` +
              `Selecting previously unselected package ${pkg}.<br>` +
              `Preparing to unpack .../${pkg}_amd64.deb ...<br>` +
              `Unpacking ${pkg} (1.0.0-aliceos) ...<br>` +
              `Setting up ${pkg} (1.0.0-aliceos) ...<br>` +
              `Processing triggers for man-db (2.10.2) ...<br>` +
              `<span style="color:#34c759;font-weight:700;">✓ Successfully installed ${pkg}!</span> Run '<span style="color:#ffcc00;">${pkg}</span>' to launch.<br>`;
            
            await window.aliceOS.vfs.writeFile(`/usr/bin/${pkg}`, `#!/bin/sh\n# AliceOS Binary: ${pkg}`);
          }
        } else if (subCmd === 'remove') {
          if (!pkg) {
            output.innerHTML += `<span style="color:#ff3b30;">apt remove: missing package name.</span><br>`;
          } else {
            const rmRes = await window.aliceOS.vfs.rm(`/usr/bin/${pkg}`);
            if (rmRes.success) {
              output.innerHTML += `Removing ${pkg} (1.0.0-aliceos) ...<br><span style="color:#34c759;">Package ${pkg} removed.</span><br>`;
            } else {
              output.innerHTML += `<span style="color:#ff3b30;">Package '${pkg}' is not installed.</span><br>`;
            }
          }
        } else {
          output.innerHTML += `apt 2.6.1 (x86_64-linux-gnu)<br>Usage: apt [command] [package]<br><br>Commands:<br>` +
            `&nbsp;&nbsp;<span style="color:#64b5f6;">update</span>&nbsp;&nbsp;&nbsp;&nbsp;- Update list of available packages<br>` +
            `&nbsp;&nbsp;<span style="color:#64b5f6;">list</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- List available packages (cmatrix, cowsay, figlet, sl, fortune)<br>` +
            `&nbsp;&nbsp;<span style="color:#64b5f6;">install</span>&nbsp;&nbsp;&nbsp;- Install package (e.g. apt install cmatrix)<br>` +
            `&nbsp;&nbsp;<span style="color:#64b5f6;">remove</span>&nbsp;&nbsp;&nbsp;&nbsp;- Remove package<br>`;
        }
      } else if (baseCmd === 'cmatrix') {
        const chk = await window.aliceOS.vfs.readFile('/usr/bin/cmatrix');
        if (!chk.success) {
          output.innerHTML += `Command 'cmatrix' not found, but can be installed with:<br><span style="color:#34c759;font-weight:700;">apt install cmatrix</span><br>`;
        } else {
          // Launch interactive full-terminal digital rain
          const termBox = win.querySelector(`#term-${pid}`);
          const canvas = document.createElement('canvas');
          canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;z-index:20;background:#050805;border-radius:0 0 10px 10px;';
          termBox.appendChild(canvas);
          const ctx = canvas.getContext('2d');
          
          canvas.width = termBox.clientWidth || 640;
          canvas.height = termBox.clientHeight || 400;

          const chars = '0123456789ABCDEFｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ'.split('');
          const fontSize = 14;
          const columns = Math.floor(canvas.width / fontSize);
          const drops = [];
          for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * -50);
          }

          let animId;
          const renderMatrix = () => {
            ctx.fillStyle = 'rgba(5, 8, 5, 0.08)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00ff7f';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
              const text = chars[Math.floor(Math.random() * chars.length)];
              const x = i * fontSize;
              const y = drops[i] * fontSize;

              // Lead char is glowing white/cyan
              ctx.fillStyle = '#ffffff';
              ctx.fillText(text, x, y);

              ctx.fillStyle = '#00ff7f';
              if (y > 0) {
                ctx.fillText(chars[Math.floor(Math.random() * chars.length)], x, y - fontSize);
              }

              if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
              }
              drops[i]++;
            }

            // Top exit hint
            ctx.fillStyle = 'rgba(255,255,255,0.7)';
            ctx.font = '11px -apple-system, monospace';
            ctx.fillText('AliceOS CMatrix — Press "q" or "Ctrl+C" to exit', 12, 20);

            animId = requestAnimationFrame(renderMatrix);
          };
          animId = requestAnimationFrame(renderMatrix);

          const cleanupCMatrix = (e) => {
            if (e.key === 'q' || e.key === 'Q' || (e.ctrlKey && e.key === 'c')) {
              cancelAnimationFrame(animId);
              canvas.remove();
              window.removeEventListener('keydown', cleanupCMatrix);
              input.focus();
              output.innerHTML += `<span style="color:#aaa;">[cmatrix terminated by user]</span><br>`;
              output.parentElement.scrollTop = output.parentElement.scrollHeight;
            }
          };
          window.addEventListener('keydown', cleanupCMatrix);
        }
      } else if (baseCmd === 'cowsay') {
        const chk = await window.aliceOS.vfs.readFile('/usr/bin/cowsay');
        if (!chk.success) {
          output.innerHTML += `Command 'cowsay' not found, but can be installed with:<br><span style="color:#34c759;font-weight:700;">apt install cowsay</span><br>`;
        } else {
          const cowText = args.slice(1).join(' ') || 'Hello from AliceOS Linux Subsystem!';
          const lineLen = Math.max(cowText.length + 2, 20);
          const topBorder = ' ' + '_'.repeat(lineLen);
          const bottomBorder = ' ' + '-'.repeat(lineLen);
          const paddedText = `< ${cowText} >`;
          output.innerHTML += `<pre style="margin:6px 0;font-family:monospace;font-size:12px;line-height:1.2;color:#34c759;">${topBorder}\n${paddedText}\n${bottomBorder}\n        \\   ^__^\n         \\  (oo)\\_______\n            (__)\\       )\\/\\\n                ||----w |\n                ||     ||\n</pre>`;
        }
      } else if (baseCmd === 'figlet') {
        const chk = await window.aliceOS.vfs.readFile('/usr/bin/figlet');
        if (!chk.success) {
          output.innerHTML += `Command 'figlet' not found, but can be installed with:<br><span style="color:#34c759;font-weight:700;">apt install figlet</span><br>`;
        } else {
          const figText = (args.slice(1).join(' ') || 'AliceOS').toUpperCase();
          // Mini dynamic banner generator
          const bannerFont = {
            'A': ['  █████  ', ' ██   ██ ', ' ███████ ', ' ██   ██ ', ' ██   ██ '],
            'B': [' ██████  ', ' ██   ██ ', ' ██████  ', ' ██   ██ ', ' ██████  '],
            'C': ['  ██████ ', ' ██      ', ' ██      ', ' ██      ', '  ██████ '],
            'D': [' ██████  ', ' ██   ██ ', ' ██   ██ ', ' ██   ██ ', ' ██████  '],
            'E': [' ███████ ', ' ██      ', ' █████   ', ' ██      ', ' ███████ '],
            'F': [' ███████ ', ' ██      ', ' █████   ', ' ██      ', ' ██      '],
            'G': ['  ██████ ', ' ██      ', ' ██   ███', ' ██    ██', '  ██████ '],
            'H': [' ██   ██ ', ' ██   ██ ', ' ███████ ', ' ██   ██ ', ' ██   ██ '],
            'I': ['  █████  ', '   ███   ', '   ███   ', '   ███   ', '  █████  '],
            'J': ['    ████ ', '      ██ ', '      ██ ', ' ██   ██ ', '  █████  '],
            'K': [' ██   ██ ', ' ██  ██  ', ' █████   ', ' ██  ██  ', ' ██   ██ '],
            'L': [' ██      ', ' ██      ', ' ██      ', ' ██      ', ' ███████ '],
            'M': [' ███   ███ ', ' ████ ████ ', ' ██ █ █ ██ ', ' ██  █  ██ ', ' ██     ██ '],
            'N': [' ██   ██ ', ' ████ ██ ', ' ██ ████ ', ' ██   ██ ', ' ██   ██ '],
            'O': ['  █████  ', ' ██   ██ ', ' ██   ██ ', ' ██   ██ ', '  █████  '],
            'P': [' ██████  ', ' ██   ██ ', ' ██████  ', ' ██      ', ' ██      '],
            'Q': ['  █████  ', ' ██   ██ ', ' ██   ██ ', '  ██████ ', '      ██ '],
            'R': [' ██████  ', ' ██   ██ ', ' ██████  ', ' ██   ██ ', ' ██   ██ '],
            'S': ['  ██████ ', ' ██      ', '  █████  ', '      ██ ', ' ██████  '],
            'T': [' ███████ ', '   ███   ', '   ███   ', '   ███   ', '   ███   '],
            'U': [' ██   ██ ', ' ██   ██ ', ' ██   ██ ', ' ██   ██ ', '  █████  '],
            'V': [' ██   ██ ', ' ██   ██ ', '  ██ ██  ', '  ██ ██  ', '   ███   '],
            'W': [' ██     ██ ', ' ██  █  ██ ', ' ██ █ █ ██ ', ' ████ ████ ', ' ███   ███ '],
            'X': [' ██   ██ ', '  ██ ██  ', '   ███   ', '  ██ ██  ', ' ██   ██ '],
            'Y': [' ██   ██ ', '  ██ ██  ', '   ███   ', '   ███   ', '   ███   '],
            'Z': [' ███████ ', '     ██  ', '   ███   ', '  ██     ', ' ███████ '],
            ' ': ['   ', '   ', '   ', '   ', '   ']
          };
          const lines = ['', '', '', '', ''];
          for (const ch of figText) {
            const glyph = bannerFont[ch] || bannerFont[' '];
            for (let r = 0; r < 5; r++) {
              lines[r] += (glyph[r] || '   ');
            }
          }
          output.innerHTML += `<pre style="margin:8px 0;font-family:monospace;font-size:11px;line-height:1.15;color:#ff9500;font-weight:700;">${lines.join('\n')}</pre>`;
        }
      } else if (baseCmd === 'sl') {
        const chk = await window.aliceOS.vfs.readFile('/usr/bin/sl');
        if (!chk.success) {
          output.innerHTML += `Command 'sl' not found, but can be installed with:<br><span style="color:#34c759;font-weight:700;">apt install sl</span><br>`;
        } else {
          // Play classic steam train animation running across terminal
          const trainDiv = document.createElement('div');
          trainDiv.style.cssText = 'overflow:hidden;white-space:pre;font-family:monospace;font-size:11px;line-height:1.15;color:#64b5f6;font-weight:700;margin:6px 0;';
          output.appendChild(trainDiv);
          
          const trainArt = [
            '      ====        ________                ___________ ',
            '  _D _|  |_______/        \\__I_I_____===__|_________| ',
            '   |(_)---  |   H\\________/ _____ \\   (|_|_|_|_|_|_|) ',
            '   /     |==||   H         |_____|     |         |    ',
            '  |      |  ||   H         |_____|     |         |    ',
            '   \\_____/  ||   H_________|_____|     |_________|    ',
            '    (O)(O)  (O)(O)        (O)(O)       (O)(O) (O)(O)  '
          ];
          
          let offset = 80;
          const trainTimer = setInterval(() => {
            offset -= 4;
            if (offset < -50) {
              clearInterval(trainTimer);
              trainDiv.remove();
              output.innerHTML += `<span style="color:#34c759;">Choo Choo! Steam Locomotive has passed!</span><br>`;
              output.parentElement.scrollTop = output.parentElement.scrollHeight;
            } else {
              const sp = ' '.repeat(Math.max(0, offset));
              trainDiv.textContent = trainArt.map(l => sp + l).join('\n');
            }
          }, 45);
        }
      } else if (baseCmd === 'fortune') {
        const chk = await window.aliceOS.vfs.readFile('/usr/bin/fortune');
        if (!chk.success) {
          output.innerHTML += `Command 'fortune' not found, but can be installed with:<br><span style="color:#34c759;font-weight:700;">apt install fortune</span><br>`;
        } else {
          const quotes = [
            "\"Talk is cheap. Show me the code.\" — Linus Torvalds",
            "\"Stay hungry, stay foolish.\" — Steve Jobs",
            "\"Simplicity is prerequisite for reliability.\" — Edsger W. Dijkstra",
            "\"The best way to predict the future is to invent it.\" — Alan Kay",
            "\"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.\" — Martin Fowler",
            "\"Walking on water and developing software from a specification are easy if both are frozen.\" — Edward V. Berard",
            "\"Linux is only free if your time has no value.\" — Jamie Zawinski",
            "\"There are 10 types of people in the world: those who understand binary, and those who don't.\"",
            "\"Programs must be written for people to read, and only incidentally for machines to execute.\" — Hal Abelson"
          ];
          const pick = quotes[Math.floor(Math.random() * quotes.length)];
          output.innerHTML += `<div style="margin:6px 0;padding:8px 12px;background:rgba(255,255,255,0.06);border-left:3px solid #ff9500;border-radius:4px;font-style:italic;color:#e5e5ea;">${pick}</div>`;
        }
      } else if (baseCmd !== '') {
        output.innerHTML += `zsh: command not found: ${baseCmd}<br>`;
      }
      
      output.parentElement.scrollTop = output.parentElement.scrollHeight;
    }
  });
}

// Modify the old testVFS to just be an example app
// About This Mac (macOS Sequoia Design)
async function launchSystemInfo() {
  const res = await window.aliceOS.pm.spawn('system-info');
  if (res.success) {
    const pid = res.data.pid;
    const win = createWindow(pid, t('about_title', 'About This Mac'), `
      <div id="sys-about-${pid}" style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:26px 24px;text-align:center;font-family:-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;height:100%;box-sizing:border-box;background:inherit;color:inherit;user-select:none;">
        <div style="margin-bottom:12px;filter:drop-shadow(0 6px 16px rgba(0,0,0,0.25));display:flex;align-items:center;justify-content:center;">
          <svg viewBox="0 0 384 512" width="54" height="72" fill="currentColor">
            <path d="M318.7 268.7c-.2-36.2 16.4-61.2 41.2-90.8-23.7-34.7-59.4-48.4-100.1-49.9-42.8-1.5-82.5 25.5-102.8 25.5-20.4 0-51.9-25.2-85.3-24.5-43.7 1-84.5 25.7-107.4 64.9-46.3 79.9-11.8 196.4 32.7 261.3 21.6 31.4 47.4 66.8 81.6 65.5 32.2-1.3 44.5-20.7 83.1-20.7 38.6 0 49.9 20.7 84 20.7 35.3 0 57.1-32.9 78.9-64.4 24.9-36.3 35.1-71.5 35.5-73.4-.9-.3-52.9-20.4-53.2-80.4zM245.9 83.1c17.5-21.2 29.3-50.6 26.1-79.9-25.2 1-55.7 16.7-73.8 37.7-16.1 18.5-29.3 48.7-25.6 78 28.2 2.1 55.7-16.1 73.3-35.8z"/>
          </svg>
        </div>
        <h2 style="margin:0 0 4px 0;font-size:24px;font-weight:700;letter-spacing:-0.5px;">macOS Sequoia</h2>
        <div style="font-size:12px;opacity:0.65;margin-bottom:18px;">Version 15.1 (Build 24B83)</div>

        <div style="width:100%;max-width:320px;background:rgba(0,0,0,0.04);border-radius:14px;padding:14px 18px;text-align:left;font-size:12px;display:flex;flex-direction:column;gap:9px;border:1px solid rgba(0,0,0,0.07);">
          <div style="display:flex;justify-content:space-between;"><span style="opacity:0.6;">MacBook Pro</span><span style="font-weight:600;">16-inch, Nov 2024</span></div>
          <div style="display:flex;justify-content:space-between;"><span style="opacity:0.6;">Chip</span><span style="font-weight:600;">Apple M4 Max</span></div>
          <div style="display:flex;justify-content:space-between;"><span style="opacity:0.6;">Memory</span><span style="font-weight:600;">36 GB Unified Memory</span></div>
          <div style="display:flex;justify-content:space-between;"><span style="opacity:0.6;">Startup Disk</span><span style="font-weight:600;">Macintosh HD</span></div>
          <div style="display:flex;justify-content:space-between;"><span style="opacity:0.6;">Serial Number</span><span style="font-family:ui-monospace,SF Mono,monospace;font-weight:600;">C02AL1CEOS88</span></div>
        </div>

        <!-- Storage Bar Preview -->
        <div style="width:100%;max-width:320px;margin-top:14px;text-align:left;">
          <div style="display:flex;justify-content:space-between;font-size:11px;opacity:0.7;margin-bottom:5px;">
            <span>Macintosh HD</span>
            <span>412.5 GB available of 1 TB</span>
          </div>
          <div style="height:8px;background:rgba(0,0,0,0.1);border-radius:4px;overflow:hidden;display:flex;">
            <div style="width:28%;background:#007aff;" title="macOS System"></div>
            <div style="width:22%;background:#ff9500;" title="Apps"></div>
            <div style="width:12%;background:#af52de;" title="Developer"></div>
            <div style="width:8%;background:#34c759;" title="Documents"></div>
          </div>
        </div>

        <div style="display:flex;gap:10px;margin-top:18px;">
          <button id="about-btn-report-${pid}" style="background:rgba(0,0,0,0.06);border:1px solid rgba(0,0,0,0.1);padding:6px 14px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;color:inherit;">System Report...</button>
          <button id="about-btn-more-${pid}" style="background:rgba(0,0,0,0.06);border:1px solid rgba(0,0,0,0.1);padding:6px 14px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;color:inherit;">More Info...</button>
        </div>
      </div>
    `, 'hostinfo');

    win.style.width = '380px';
    win.style.height = '430px';

    const reportBtn = win.querySelector(`#about-btn-report-${pid}`);
    const moreBtn = win.querySelector(`#about-btn-more-${pid}`);

    reportBtn.addEventListener('click', () => {
      launchHostMonitor();
    });

    moreBtn.addEventListener('click', () => {
      launchSettings();
    });

    win._onLanguageChange = () => {
      win.querySelector('.title').innerText = t('about_title', 'About This Mac');
    };
  }
}

async function launchNotes(filePath = null) {
  if (window.aliceOS && window.aliceOS.setDockBadge) window.aliceOS.setDockBadge('notes', 0);
  const res = await window.aliceOS.pm.spawn('notes');
  if (!res.success) return;
  const pid = res.data.pid;

  let allNotes = [
    {
      id: '1',
      folder: 'all',
      title: '欢迎使用 AliceOS 备忘录',
      date: '上午 9:41',
      snippet: '体验全新设计的 macOS Sequoia 风格 3 栏式备忘录...',
      content: '欢迎使用 AliceOS 备忘录\n\n这是一款采用全新 macOS Sequoia 风格打造的原生级备忘录应用。\n\n功能特色：\n- [x] 原生 3 栏式 macOS 界面布局\n- [x] 支持交互式待办清单复选框\n- [ ] 试用 Sequoia 数学备忘录计算功能\n\n数学计算演示：\n输入任何数学算式后跟一个等号，系统将自动进行高精度计算：\n250 + 750 = \n1280 * 720 = \n15% * 800 = \n\n享受愉悦的记录体验！'
    },
    {
      id: '2',
      folder: 'quick',
      title: '今日待办事项',
      date: '昨天',
      snippet: '系统内核优化与动效完善...',
      content: '今日待办事项\n\n- [x] 迁移至 Linux 仿生内核架构\n- [x] 注入 macOS 神奇移动 Genie 动效\n- [x] 合成 Apple 高保真快门与清倒废纸篓声学音效\n- [ ] 测试全新终端 APT 包管理器'
    },
    {
      id: '3',
      folder: 'work',
      title: 'AliceOS 架构路线图',
      date: '9月10日',
      snippet: '轻量化 Electron + VFS + 磨砂玻璃...',
      content: 'AliceOS 架构路线图\n\n1. 内核虚拟化层：进程管理 (pm.js) 与文件系统 (vfs.js)\n2. 视觉呈现层：100% 还原 macOS Sequoia 磨砂玻璃质感与拟真图标\n3. 系统应用层：提供功能完备的访达、终端、备忘录与计算器'
    }
  ];

  // Try loading existing notes from VFS
  try {
    const storeRes = await window.aliceOS.vfs.readFile(`/Users/${currentUser}/Notes/notes_store.json`);
    if (storeRes.success) {
      const parsed = JSON.parse(storeRes.data);
      if (Array.isArray(parsed) && parsed.length > 0) allNotes = parsed;
    }
  } catch (e) {}

  let currentFolder = 'all';
  let activeNoteId = allNotes[0].id;

  const win = createWindow(pid, t('app_notes', 'Notes'), `
    <div class="notes-app-wrap" id="notes-wrap-${pid}">
      <!-- Column 1: Folders Sidebar -->
      <div class="notes-folders-sidebar">
        <div class="notes-section-hdr">iCloud</div>
        <div class="notes-folder-row active" data-folder="all">
          <span style="font-size:14px;">📁</span>
          <span style="flex:1;">全部备忘录</span>
          <span class="notes-folder-count" id="notes-cnt-all-${pid}">${allNotes.length}</span>
        </div>
        <div class="notes-folder-row" data-folder="quick">
          <span style="font-size:14px;">⚡</span>
          <span style="flex:1;">便笺</span>
          <span class="notes-folder-count" id="notes-cnt-quick-${pid}">${allNotes.filter(n => n.folder === 'quick').length}</span>
        </div>
        <div class="notes-folder-row" data-folder="work">
          <span style="font-size:14px;">💼</span>
          <span style="flex:1;">工作备忘</span>
          <span class="notes-folder-count" id="notes-cnt-work-${pid}">${allNotes.filter(n => n.folder === 'work').length}</span>
        </div>
        <div class="notes-folder-row" data-folder="personal">
          <span style="font-size:14px;">🏠</span>
          <span style="flex:1;">个人生活</span>
          <span class="notes-folder-count" id="notes-cnt-personal-${pid}">${allNotes.filter(n => n.folder === 'personal').length}</span>
        </div>
      </div>

      <!-- Column 2: Notes List -->
      <div class="notes-list-col">
        <div class="notes-search-wrap">
          <input type="text" class="notes-search-input" id="notes-search-${pid}" placeholder="🔍 搜索备忘录...">
        </div>
        <div class="notes-cards-list" id="notes-cards-${pid}"></div>
      </div>

      <!-- Column 3: Editor -->
      <div class="notes-editor-col">
        <div class="notes-mac-toolbar">
          <div style="display:flex;align-items:center;gap:6px;">
            <button class="notes-tb-btn" id="notes-new-btn-${pid}">✏️ 新建</button>
            <button class="notes-tb-btn" id="notes-checklist-btn-${pid}">☑️ 待办</button>
            <button class="notes-tb-btn" id="notes-math-badge-${pid}" title="macOS Sequoia 数学备忘录">∑ 数学</button>
          </div>
          <div style="display:flex;align-items:center;gap:6px;">
            <button class="notes-tb-btn" id="notes-save-btn-${pid}">💾 存储</button>
            <button class="notes-tb-btn" id="notes-del-btn-${pid}" style="color:#ff3b30;">🗑️ 删除</button>
          </div>
        </div>
        <div class="notes-math-toast" id="notes-math-toast-${pid}"></div>
        <div class="notes-editor-body">
          <div class="notes-date-stamp" id="notes-date-stamp-${pid}"></div>
          <textarea class="notes-rich-textarea" id="notes-textarea-${pid}" spellcheck="false" placeholder="在此键入文字... (输入算式如 250 + 750 = 自动求解)"></textarea>
        </div>
      </div>
    </div>
  `, 'notes');

  win.style.width = '780px';
  win.style.height = '520px';

  const cardsContainer = win.querySelector(`#notes-cards-${pid}`);
  const textarea = win.querySelector(`#notes-textarea-${pid}`);
  const dateStamp = win.querySelector(`#notes-date-stamp-${pid}`);
  const searchInput = win.querySelector(`#notes-search-${pid}`);
  const newBtn = win.querySelector(`#notes-new-btn-${pid}`);
  const delBtn = win.querySelector(`#notes-del-btn-${pid}`);
  const saveBtn = win.querySelector(`#notes-save-btn-${pid}`);
  const checklistBtn = win.querySelector(`#notes-checklist-btn-${pid}`);
  const mathToast = win.querySelector(`#notes-math-toast-${pid}`);
  let mathToastTimer = null;

  async function persistNotes() {
    try {
      await window.aliceOS.vfs.mkdir(`/Users/${currentUser}/Notes`);
      await window.aliceOS.vfs.writeFile(`/Users/${currentUser}/Notes/notes_store.json`, JSON.stringify(allNotes, null, 2));
    } catch (e) {}
  }

  function getActiveNote() {
    return allNotes.find(n => n.id === activeNoteId) || allNotes[0];
  }

  function renderCards(filterQuery = '') {
    const q = filterQuery.toLowerCase();
    const filtered = allNotes.filter(n => {
      const matchFolder = (currentFolder === 'all') || (n.folder === currentFolder);
      const matchQuery = !q || n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q);
      return matchFolder && matchQuery;
    });

    cardsContainer.innerHTML = filtered.map(n => `
      <div class="notes-card-item ${n.id === activeNoteId ? 'active' : ''}" data-id="${n.id}">
        <div class="notes-card-title">${n.title || '无标题备忘录'}</div>
        <div class="notes-card-meta">
          <span class="notes-card-date">${n.date}</span>
          <span class="notes-card-snippet">${n.snippet}</span>
        </div>
      </div>
    `).join('');

    cardsContainer.querySelectorAll('.notes-card-item').forEach(el => {
      el.addEventListener('click', () => {
        selectNote(el.dataset.id);
      });
    });

    // Update counts
    const cntAll = win.querySelector(`#notes-cnt-all-${pid}`);
    if (cntAll) cntAll.textContent = allNotes.length;
    ['quick', 'work', 'personal'].forEach(f => {
      const c = win.querySelector(`#notes-cnt-${f}-${pid}`);
      if (c) c.textContent = allNotes.filter(n => n.folder === f).length;
    });
  }

  function selectNote(id) {
    activeNoteId = id;
    const note = getActiveNote();
    if (note) {
      textarea.value = note.content;
      dateStamp.textContent = `${note.date} · ${note.folder === 'all' ? '备忘录' : note.folder}`;
    }
    renderCards(searchInput ? searchInput.value : '');
  }

  // Folder switching
  win.querySelectorAll('.notes-folder-row').forEach(row => {
    row.addEventListener('click', () => {
      win.querySelectorAll('.notes-folder-row').forEach(r => r.classList.remove('active'));
      row.classList.add('active');
      currentFolder = row.dataset.folder;
      renderCards();
    });
  });

  // Note content editing
  textarea.addEventListener('input', () => {
    const note = getActiveNote();
    if (!note) return;

    note.content = textarea.value;
    const lines = note.content.split('\n').map(l => l.trim()).filter(l => l);
    note.title = lines[0] ? lines[0].replace(/^[-#*]\s*(\[[ x]\]\s*)?/i, '') : '无标题备忘录';
    note.snippet = lines[1] || '无附加文本';
    
    // Sequoia Math Notes Evaluator
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
              note.content = textarea.value;

              if (mathToast) {
                mathToast.innerHTML = `<span>✨</span> <span>数学求解: <b>${rawExpr} = ${formatted}</b></span>`;
                mathToast.classList.add('show');
                if (mathToastTimer) clearTimeout(mathToastTimer);
                mathToastTimer = setTimeout(() => mathToast.classList.remove('show'), 2800);
              }
            }
          }
        } catch(e) {}
      }
    }

    renderCards(searchInput.value);
    persistNotes();
  });

  // New Note
  newBtn.addEventListener('click', () => {
    const newId = String(Date.now());
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    const timeStr = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
    const newNote = {
      id: newId,
      folder: currentFolder === 'all' ? 'quick' : currentFolder,
      title: '新备忘录',
      date: `今天 ${timeStr}`,
      snippet: '无附加文本',
      content: '新备忘录\n\n在此开始键入内容...'
    };
    allNotes.unshift(newNote);
    selectNote(newId);
    textarea.focus();
    persistNotes();
  });

  // Delete Note
  delBtn.addEventListener('click', () => {
    if (allNotes.length <= 1) return;
    allNotes = allNotes.filter(n => n.id !== activeNoteId);
    activeNoteId = allNotes[0].id;
    selectNote(activeNoteId);
    persistNotes();
  });

  // Insert Checklist
  checklistBtn.addEventListener('click', () => {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const val = textarea.value;
    const insertion = '\n- [ ] ';
    textarea.value = val.substring(0, start) + insertion + val.substring(end);
    textarea.selectionStart = textarea.selectionEnd = start + insertion.length;
    textarea.focus();
    textarea.dispatchEvent(new Event('input'));
  });

  // Manual Save feedback
  saveBtn.addEventListener('click', async () => {
    await persistNotes();
    saveBtn.innerText = '✓ 已存储';
    setTimeout(() => saveBtn.innerText = '💾 存储', 1500);
  });

  // Search
  searchInput.addEventListener('input', () => {
    renderCards(searchInput.value);
  });

  // Initial load
  selectNote(activeNoteId);
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
      { id: 1, title: t('safari_start_page', 'Start Page'), url: 'safari:start', icon: '🧭' },
      { id: 2, title: 'Apple', url: 'https://apple.com', icon: '🍎' },
      { id: 3, title: 'AliceOS Docs', url: 'https://docs.aliceos.org', icon: '💻' }
    ];
    let activeTabId = 1;
    let tabCounter = 3;
    let inOverview = false;
    let readerActive = false;

    const win = createWindow(pid, t('app_browser', 'Safari'), `
      <div class="browser-container" style="display:flex;flex-direction:column;height:100%;position:relative;background:#f5f5f7;">
        <!-- Safari Tab Bar -->
        <div class="safari-tab-bar" id="safari-tab-bar-${pid}">
          <div id="safari-tabs-list-${pid}" style="display:flex;align-items:center;gap:6px;flex:1;overflow-x:auto;">
            <!-- Dynamic Tabs -->
          </div>
          <button id="safari-new-tab-${pid}" title="${t('safari_new_tab', 'New Tab')}" style="background:rgba(0,0,0,0.06);border:none;border-radius:6px;width:24px;height:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600;color:#555;">＋</button>
          <button id="safari-tab-overview-btn-${pid}" title="${t('safari_tab_overview', 'Show All Tabs')}" style="background:rgba(0,0,0,0.06);border:none;border-radius:6px;width:24px;height:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:13px;color:#555;">⊞</button>
        </div>

        <!-- Safari Navigation Toolbar -->
        <div class="browser-toolbar" style="display:flex;align-items:center;gap:10px;padding:8px 14px;background:rgba(255,255,255,0.8);backdrop-filter:blur(25px);border-bottom:1px solid rgba(0,0,0,0.08);">
          <div style="display:flex;gap:4px;">
            <button id="browser-back-${pid}" title="${t('safari_back', 'Back')}" style="background:transparent;border:none;cursor:pointer;font-size:14px;padding:4px 6px;border-radius:6px;opacity:0.7;">◀</button>
            <button id="browser-forward-${pid}" title="${t('safari_forward', 'Forward')}" style="background:transparent;border:none;cursor:pointer;font-size:14px;padding:4px 6px;border-radius:6px;opacity:0.7;">▶</button>
            <button id="browser-refresh-${pid}" title="${t('safari_refresh', 'Refresh')}" style="background:transparent;border:none;cursor:pointer;font-size:14px;padding:4px 6px;border-radius:6px;opacity:0.7;">↻</button>
          </div>

          <!-- Capsule Search / URL bar -->
          <div style="flex:1;display:flex;align-items:center;background:rgba(0,0,0,0.06);border-radius:10px;padding:5px 12px;gap:8px;border:1px solid rgba(0,0,0,0.05);transition:background 0.2s;">
            <span style="font-size:12px;opacity:0.5;">🔒</span>
            <input type="text" id="browser-url-${pid}" value="safari:start" placeholder="${t('safari_search_placeholder', 'Search or enter website name')}" style="flex:1;border:none;outline:none;background:transparent;font-size:13px;color:#1d1d1f;font-family:-apple-system,sans-serif;text-align:center;">
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

        <!-- Tab Content Container -->
        <div id="safari-frames-container-${pid}" style="flex:1;position:relative;overflow:hidden;display:flex;">
        </div>

        <!-- 3D Tab Overview Grid Overlay -->
        <div id="safari-overview-${pid}" style="position:absolute;top:38px;left:0;width:100%;height:calc(100% - 38px);background:rgba(240,240,245,0.95);backdrop-filter:blur(30px);z-index:20;display:none;flex-direction:column;opacity:0;transition:opacity 0.25s ease;">
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
          </div>
        </div>

        <!-- Reader Mode Overlay -->
        <div id="safari-reader-modal-${pid}" style="position:absolute;top:76px;left:0;width:100%;height:calc(100% - 76px);background:#faf8f5;color:#2c2c2e;z-index:15;display:none;flex-direction:column;overflow-y:auto;padding:40px 15%;font-family:-apple-system, 'SF Pro Text', Georgia, serif;line-height:1.7;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:30px;border-bottom:1px solid rgba(0,0,0,0.08);padding-bottom:14px;">
            <div style="font-size:12px;color:#8e8e93;font-weight:600;text-transform:uppercase;letter-spacing:1px;">SAFARI READER VIEW</div>
            <button id="safari-reader-close-${pid}" style="background:rgba(0,0,0,0.06);border:none;padding:4px 12px;border-radius:12px;font-size:12px;cursor:pointer;">✕ Close</button>
          </div>
          <h1 id="safari-reader-title-${pid}" style="font-size:28px;margin-bottom:12px;letter-spacing:-0.5px;color:#1d1d1f;">Apple Intelligence in macOS Sequoia</h1>
          <div id="safari-reader-meta-${pid}" style="font-size:13px;color:#8e8e93;margin-bottom:24px;">Published by Apple Newsroom • 4 min read</div>
          <div id="safari-reader-body-${pid}" style="font-size:16px;color:#3a3a3c;">
            <p>macOS Sequoia introduces powerful intelligence and groundbreaking new features to the world's most advanced desktop operating system. Designed from the ground up for Apple Silicon, it empowers users to work faster, write smarter, and express themselves seamlessly.</p>
            <p>With deep system-wide integration, Apple Intelligence understands your personal context to deliver assistance that is genuinely useful and relevant, all while setting an unmatched standard for privacy in AI through on-device processing and Private Cloud Compute.</p>
            <p>The updated Safari brings an all-new Start Page, Highlights that quickly extract key information from articles, and a redesigned Reader View for distraction-free enjoyment of your favorite content.</p>
          </div>
        </div>
      </div>
    `);

    // Standard macOS Safari window size
    win.style.width = '840px';
    win.style.height = '560px';

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
    const readerBtn = win.querySelector(`#browser-reader-${pid}`);
    const readerModal = win.querySelector(`#safari-reader-modal-${pid}`);
    const readerCloseBtn = win.querySelector(`#safari-reader-close-${pid}`);

    const favoritesList = [
      { name: 'Apple', url: 'https://apple.com', icon: '🍎' },
      { name: 'AliceOS Docs', url: 'https://docs.aliceos.org', icon: '💻' },
      { name: 'GitHub', url: 'https://github.com', icon: '🐙' },
      { name: 'Wikipedia', url: 'https://en.wikipedia.org', icon: '📖' },
      { name: 'Hacker News', url: 'https://news.ycombinator.com', icon: '📰' },
      { name: 'YouTube', url: 'https://youtube.com', icon: '▶️' },
      { name: 'Open-Meteo', url: 'https://open-meteo.com', icon: '🌤️' },
      { name: 'Reddit', url: 'https://reddit.com', icon: '🤖' }
    ];

    function getStartPageHtml() {
      return `
        <div class="safari-start-page">
          <div class="safari-start-header">${t('safari_favorites', 'Favorites')}</div>
          <div class="safari-favs-grid">
            ${favoritesList.map(fav => `
              <div class="safari-fav-item" data-url="${fav.url}" data-name="${fav.name}">
                <div class="safari-fav-tile">${fav.icon}</div>
                <div class="safari-fav-name">${fav.name}</div>
              </div>
            `).join('')}
          </div>

          <!-- Privacy Report -->
          <div class="safari-privacy-card">
            <div style="font-size:32px;">🛡️</div>
            <div style="flex:1;">
              <div style="font-size:14px;font-weight:700;color:#1d1d1f;">${t('safari_privacy_report', 'Privacy Report')}</div>
              <div style="font-size:12px;color:#6e6e73;margin-top:2px;">In the last 30 days, Safari prevented 78 trackers from profiling you. Intelligent Tracking Prevention is active.</div>
            </div>
            <div style="font-size:18px;font-weight:700;color:#007aff;">78</div>
          </div>

          <!-- Reading List Suggestions -->
          <div style="width:100%;max-width:680px;margin-top:24px;">
            <div class="safari-section-title">${t('safari_reading_list', 'Reading List')}</div>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <div class="safari-reading-item" style="background:white;padding:12px 16px;border-radius:12px;border:1px solid rgba(0,0,0,0.06);display:flex;align-items:center;gap:12px;cursor:pointer;" onclick="createTab('https://apple.com', 'Apple', '🍎')">
                <div style="font-size:24px;">🍎</div>
                <div style="flex:1;">
                  <div style="font-size:13px;font-weight:600;">Apple Introduces macOS Sequoia with Groundbreaking Apple Intelligence</div>
                  <div style="font-size:11px;color:#8e8e93;">apple.com • 3 min read</div>
                </div>
              </div>
              <div class="safari-reading-item" style="background:white;padding:12px 16px;border-radius:12px;border:1px solid rgba(0,0,0,0.06);display:flex;align-items:center;gap:12px;cursor:pointer;" onclick="createTab('https://docs.aliceos.org', 'AliceOS Architecture', '💻')">
                <div style="font-size:24px;">💻</div>
                <div style="flex:1;">
                  <div style="font-size:13px;font-weight:600;">AliceOS Architecture: Microkernel VFS & Hardware Compositor</div>
                  <div style="font-size:11px;color:#8e8e93;">docs.aliceos.org • 5 min read</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function getApplePageHtml() {
      return `
        <div style="height:100%;overflow-y:auto;background:#000;color:#f5f5f7;font-family:-apple-system,BlinkMacSystemFont,sans-serif;user-select:none;">
          <div style="background:rgba(22,22,23,0.8);backdrop-filter:blur(20px);padding:12px 24px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.08);position:sticky;top:0;z-index:5;">
            <span style="display:inline-flex;align-items:center;opacity:0.9;">
              <svg viewBox="0 0 384 512" width="13.5" height="18" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.2 16.4-61.2 41.2-90.8-23.7-34.7-59.4-48.4-100.1-49.9-42.8-1.5-82.5 25.5-102.8 25.5-20.4 0-51.9-25.2-85.3-24.5-43.7 1-84.5 25.7-107.4 64.9-46.3 79.9-11.8 196.4 32.7 261.3 21.6 31.4 47.4 66.8 81.6 65.5 32.2-1.3 44.5-20.7 83.1-20.7 38.6 0 49.9 20.7 84 20.7 35.3 0 57.1-32.9 78.9-64.4 24.9-36.3 35.1-71.5 35.5-73.4-.9-.3-52.9-20.4-53.2-80.4zM245.9 83.1c17.5-21.2 29.3-50.6 26.1-79.9-25.2 1-55.7 16.7-73.8 37.7-16.1 18.5-29.3 48.7-25.6 78 28.2 2.1 55.7-16.1 73.3-35.8z"/>
              </svg>
            </span>
            <div style="display:flex;gap:20px;font-size:12px;color:#a1a1a6;">
              <span>Store</span><span>Mac</span><span>iPad</span><span>iPhone</span><span>Watch</span><span>Vision</span><span>AirPods</span>
            </div>
            <span style="font-size:14px;cursor:pointer;">🔍</span>
          </div>
          <div style="text-align:center;padding:60px 20px 40px;background:radial-gradient(circle at 50% 20%, #1e1e24 0%, #000000 80%);">
            <div style="font-size:48px;font-weight:700;letter-spacing:-1px;margin-bottom:8px;">iPhone 16 Pro</div>
            <div style="font-size:22px;color:#86868b;margin-bottom:16px;">Hello, Apple Intelligence.</div>
            <div style="display:flex;justify-content:center;gap:14px;margin-bottom:30px;">
              <button style="background:#0071e3;color:white;border:none;padding:8px 20px;border-radius:20px;font-size:13px;font-weight:600;cursor:pointer;">Learn more</button>
              <button style="background:transparent;color:#2997ff;border:1px solid #2997ff;padding:8px 20px;border-radius:20px;font-size:13px;font-weight:600;cursor:pointer;">Buy</button>
            </div>
            <div style="font-size:72px;margin:20px 0;">📱✨</div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:24px;max-width:960px;margin:0 auto;">
            <div style="background:#161617;border-radius:18px;padding:32px;text-align:center;">
              <div style="font-size:28px;font-weight:700;margin-bottom:6px;">MacBook Pro</div>
              <div style="font-size:15px;color:#86868b;margin-bottom:16px;">Mind-blowing. Head-turning.</div>
              <div style="font-size:48px;">💻</div>
            </div>
            <div style="background:#161617;border-radius:18px;padding:32px;text-align:center;">
              <div style="font-size:28px;font-weight:700;margin-bottom:6px;">Apple Watch Series 10</div>
              <div style="font-size:15px;color:#86868b;margin-bottom:16px;">Thinscredible.</div>
              <div style="font-size:48px;">⌚</div>
            </div>
          </div>
        </div>
      `;
    }

    function getAliceDocsHtml() {
      return `
        <div style="height:100%;overflow-y:auto;background:#ffffff;color:#1d1d1f;padding:40px 60px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;line-height:1.6;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;border-bottom:1px solid #eee;padding-bottom:16px;">
            <span style="font-size:32px;">💻</span>
            <div>
              <h1 style="margin:0;font-size:24px;font-weight:700;">AliceOS Developer Documentation</h1>
              <div style="font-size:12px;color:#6e6e73;">Release 1.0.0 • Microkernel Architecture & Electron Engine</div>
            </div>
          </div>
          <h2 style="font-size:18px;margin-top:24px;color:#007aff;">1. Virtual File System (VFS)</h2>
          <p style="font-size:14px;color:#424245;">The virtual file system persists across sessions using a JSON-backed node store at <code>AppData/Roaming/AliceOS/vfs.json</code>. Call <code>window.aliceOS.vfs.readFile(path)</code> or <code>window.aliceOS.vfs.writeFile(path, data)</code> asynchronously.</p>
          
          <h2 style="font-size:18px;margin-top:24px;color:#007aff;">2. Process Manager (PM)</h2>
          <p style="font-size:14px;color:#424245;">Spawn tasks and windows using <code>window.aliceOS.pm.spawn(appName)</code>. Processes maintain active PIDs, status flags, and signal handlers.</p>

          <h2 style="font-size:18px;margin-top:24px;color:#007aff;">3. macOS Sequoia Visual Design Guidelines</h2>
          <p style="font-size:14px;color:#424245;">All built-in applications adhere to the standard 22.5% squircle curvature icon format, native SF Pro typography, floating glass panels, and live Dark/Light theme switching.</p>
        </div>
      `;
    }

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
        urlInput.value = tab.url === 'safari:start' ? '' : tab.url;
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

    function createTab(url = 'safari:start', title = 'Start Page', icon = '🧭') {
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

      loadContentIntoFrame(frameWrapper, url, newId);
      framesContainer.appendChild(frameWrapper);
      switchTab(newId);
    }

    function loadContentIntoFrame(frameWrapper, url, tabId) {
      frameWrapper.innerHTML = '';
      if (url === 'safari:start' || url === 'about:blank' || !url) {
        frameWrapper.innerHTML = getStartPageHtml();
        frameWrapper.querySelectorAll('.safari-fav-item').forEach(fav => {
          fav.onclick = () => {
            const u = fav.getAttribute('data-url');
            const n = fav.getAttribute('data-name');
            navigateTab(tabId, u, n);
          };
        });
      } else if (url === 'https://apple.com' || url === 'http://apple.com') {
        frameWrapper.innerHTML = getApplePageHtml();
      } else if (url.includes('docs.aliceos.org')) {
        frameWrapper.innerHTML = getAliceDocsHtml();
      } else {
        const webview = document.createElement('webview');
        webview.src = url;
        webview.style.cssText = 'flex:1;border:none;width:100%;height:100%;';
        webview.addEventListener('did-navigate', (e) => {
          if (activeTabId === tabId) {
            urlInput.value = e.url;
          }
          const t = tabs.find(x => x.id === tabId);
          if (t) {
            t.url = e.url;
            t.title = e.url.replace(/^https?:\/\//, '').split('/')[0] || 'Website';
            renderTabs();
          }
        });
        frameWrapper.appendChild(webview);
      }
    }

    function navigateTab(tabId, url, title = null) {
      const tab = tabs.find(t => t.id === tabId);
      if (tab) {
        tab.url = url;
        if (title) tab.title = title;
        else tab.title = url.replace(/^https?:\/\//, '').split('/')[0] || 'Website';
        if (url.includes('apple.com')) tab.icon = '🍎';
        else if (url.includes('github.com')) tab.icon = '🐙';
        else if (url.includes('aliceos')) tab.icon = '💻';
        else tab.icon = '🌐';
      }
      const frameWrapper = framesContainer.querySelector(`.browser-tab-frame[data-tab-id="${tabId}"]`);
      if (frameWrapper) {
        loadContentIntoFrame(frameWrapper, url, tabId);
      }
      if (activeTabId === tabId) {
        urlInput.value = url === 'safari:start' ? '' : url;
      }
      renderTabs();
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
        createTab('safari:start', 'Start Page', '🧭');
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

      loadContentIntoFrame(frameWrapper, t.url, t.id);
      framesContainer.appendChild(frameWrapper);
    });

    renderTabs();

    function navigate() {
      let url = urlInput.value.trim();
      if (!url) {
        navigateTab(activeTabId, 'safari:start', 'Start Page');
        return;
      }
      if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('safari:')) {
        if (url.includes('.') && !url.includes(' ')) {
          url = 'https://' + url;
        } else {
          url = 'https://www.bing.com/search?q=' + encodeURIComponent(url);
        }
      }
      navigateTab(activeTabId, url);
    }

    urlInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') navigate();
    });

    newTabBtn.addEventListener('click', () => {
      createTab('safari:start', 'Start Page', '🧭');
    });

    overviewBtn.addEventListener('click', toggleOverview);
    overviewCloseBtn.addEventListener('click', toggleOverview);

    readerBtn.addEventListener('click', () => {
      readerActive = !readerActive;
      readerModal.style.display = readerActive ? 'flex' : 'none';
      if (readerActive) {
        const curTab = tabs.find(x => x.id === activeTabId);
        const rTitle = win.querySelector(`#safari-reader-title-${pid}`);
        if (rTitle && curTab) rTitle.innerText = curTab.title;
      }
    });

    readerCloseBtn.addEventListener('click', () => {
      readerActive = false;
      readerModal.style.display = 'none';
    });

    win.querySelector(`#browser-back-${pid}`).addEventListener('click', () => {
      const activeFrame = framesContainer.querySelector(`.browser-tab-frame[data-tab-id="${activeTabId}"] webview`);
      if (activeFrame && activeFrame.canGoBack()) activeFrame.goBack();
      else navigateTab(activeTabId, 'safari:start', 'Start Page');
    });

    win.querySelector(`#browser-forward-${pid}`).addEventListener('click', () => {
      const activeFrame = framesContainer.querySelector(`.browser-tab-frame[data-tab-id="${activeTabId}"] webview`);
      if (activeFrame && activeFrame.canGoForward()) activeFrame.goForward();
    });

    win.querySelector(`#browser-refresh-${pid}`).addEventListener('click', () => {
      const activeTab = tabs.find(x => x.id === activeTabId);
      if (activeTab) navigateTab(activeTabId, activeTab.url, activeTab.title);
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

    if (overviewSearch) {
      overviewSearch.addEventListener('input', (e) => {
        renderOverview(e.target.value);
      });
    }

    win.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === '\\' || e.code === 'Backslash')) {
        e.preventDefault();
        toggleOverview();
      } else if (e.key === 'Escape') {
        if (readerActive) {
          readerActive = false;
          readerModal.style.display = 'none';
        } else if (inOverview) {
          toggleOverview();
        }
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
  if (!res.success) return;
  const pid = res.data.pid;

  const win = createWindow(pid, t('app_calculator', 'Calculator'), `
    <div class="calc-mac-container" id="calc-container-${pid}">
      <div class="calc-mac-topbar">
        <div class="calc-mode-seg">
          <button class="calc-seg-btn active" id="calc-mode-basic-${pid}">基本</button>
          <button class="calc-seg-btn" id="calc-mode-sci-${pid}">科学</button>
        </div>
        <button class="calc-tape-btn" id="calc-tape-toggle-${pid}">📜 历史</button>
      </div>

      <div style="display:flex;flex:1;overflow:hidden;position:relative;">
        <div class="calc-main-col">
          <div class="calc-mac-display">
            <div class="calc-expr-line" id="calc-expr-${pid}">&nbsp;</div>
            <div class="calc-result-line" id="calc-result-${pid}">0</div>
          </div>
          
          <div class="calc-grid-wrap">
            <div class="calc-sci-grid" id="calc-sci-grid-${pid}" style="display:none;">
              <button class="calc-mac-btn sci" data-val="sin">sin</button>
              <button class="calc-mac-btn sci" data-val="cos">cos</button>
              <button class="calc-mac-btn sci" data-val="tan">tan</button>
              <button class="calc-mac-btn sci" data-val="pi">π</button>
              <button class="calc-mac-btn sci" data-val="e">e</button>
              <button class="calc-mac-btn sci" data-val="sq">x²</button>
              <button class="calc-mac-btn sci" data-val="sqrt">√</button>
              <button class="calc-mac-btn sci" data-val="ln">ln</button>
              <button class="calc-mac-btn sci" data-val="(">(</button>
              <button class="calc-mac-btn sci" data-val=")">)</button>
            </div>

            <div class="calc-std-grid">
              <button class="calc-mac-btn func" data-val="AC">AC</button>
              <button class="calc-mac-btn func" data-val="+/-">±</button>
              <button class="calc-mac-btn func" data-val="%">%</button>
              <button class="calc-mac-btn op" data-val="/">÷</button>

              <button class="calc-mac-btn num" data-val="7">7</button>
              <button class="calc-mac-btn num" data-val="8">8</button>
              <button class="calc-mac-btn num" data-val="9">9</button>
              <button class="calc-mac-btn op" data-val="*">×</button>

              <button class="calc-mac-btn num" data-val="4">4</button>
              <button class="calc-mac-btn num" data-val="5">5</button>
              <button class="calc-mac-btn num" data-val="6">6</button>
              <button class="calc-mac-btn op" data-val="-">−</button>

              <button class="calc-mac-btn num" data-val="1">1</button>
              <button class="calc-mac-btn num" data-val="2">2</button>
              <button class="calc-mac-btn num" data-val="3">3</button>
              <button class="calc-mac-btn op" data-val="+">+</button>

              <button class="calc-mac-btn num zero-btn" data-val="0">0</button>
              <button class="calc-mac-btn num" data-val=".">.</button>
              <button class="calc-mac-btn op" data-val="=">=</button>
            </div>
          </div>
        </div>

        <div class="calc-tape-drawer" id="calc-tape-drawer-${pid}" style="display:none;">
          <div style="font-weight:700;font-size:11px;opacity:0.6;margin-bottom:8px;text-transform:uppercase;">历史纸带</div>
          <div class="calc-tape-list" id="calc-tape-list-${pid}">
            <div style="opacity:0.4;font-size:11px;text-align:center;margin-top:20px;">暂无历史</div>
          </div>
        </div>
      </div>
    </div>
  `, 'calculator');

  win.style.width = '320px';
  win.style.height = '460px';

  const display = win.querySelector(`#calc-result-${pid}`);
  const exprLine = win.querySelector(`#calc-expr-${pid}`);
  const sciGrid = win.querySelector(`#calc-sci-grid-${pid}`);
  const tapeDrawer = win.querySelector(`#calc-tape-drawer-${pid}`);
  const tapeList = win.querySelector(`#calc-tape-list-${pid}`);
  const modeBasicBtn = win.querySelector(`#calc-mode-basic-${pid}`);
  const modeSciBtn = win.querySelector(`#calc-mode-sci-${pid}`);
  const tapeToggleBtn = win.querySelector(`#calc-tape-toggle-${pid}`);

  let current = '0';
  let previous = null;
  let operation = null;
  let justEvaluated = false;
  let historyTape = [];

  function updateDisplay() {
    display.textContent = current;
    // Auto shrink long numbers
    if (current.length > 12) display.style.fontSize = '22px';
    else if (current.length > 8) display.style.fontSize = '28px';
    else display.style.fontSize = '40px';
  }

  function addHistory(expr, resVal) {
    historyTape.unshift({ expr, resVal });
    tapeList.innerHTML = historyTape.slice(0, 20).map(item => `
      <div class="calc-tape-item">
        <div style="color:rgba(255,255,255,0.5);">${item.expr} =</div>
        <div style="font-weight:700;color:#ff9f0a;text-align:right;">${item.resVal}</div>
      </div>
    `).join('');
  }

  function handleInput(val) {
    if (window.AppleAudioEngine) window.AppleAudioEngine.playPop();

    if (val >= '0' && val <= '9') {
      if (current === '0' || justEvaluated) {
        current = val;
        justEvaluated = false;
      } else {
        if (current.length < 16) current += val;
      }
      updateDisplay();
    } else if (val === '.') {
      if (justEvaluated) {
        current = '0.';
        justEvaluated = false;
      } else if (!current.includes('.')) {
        current += '.';
      }
      updateDisplay();
    } else if (val === 'AC') {
      current = '0';
      previous = null;
      operation = null;
      justEvaluated = false;
      exprLine.innerHTML = '&nbsp;';
      updateDisplay();
    } else if (val === '+/-') {
      if (current !== '0') {
        current = current.startsWith('-') ? current.slice(1) : '-' + current;
        updateDisplay();
      }
    } else if (val === '%') {
      current = String(parseFloat(current) / 100);
      updateDisplay();
    } else if (['+', '-', '*', '/'].includes(val)) {
      const sym = { '+': '+', '-': '−', '*': '×', '/': '÷' }[val];
      previous = current;
      operation = val;
      exprLine.textContent = `${previous} ${sym}`;
      current = '0';
      justEvaluated = false;
    } else if (val === '=') {
      if (operation && previous !== null) {
        const sym = { '+': '+', '-': '−', '*': '×', '/': '÷' }[operation];
        const fullExpr = `${previous} ${sym} ${current}`;
        try {
          const num1 = parseFloat(previous);
          const num2 = parseFloat(current);
          let resVal = 0;
          if (operation === '+') resVal = num1 + num2;
          else if (operation === '-') resVal = num1 - num2;
          else if (operation === '*') resVal = num1 * num2;
          else if (operation === '/') resVal = num2 !== 0 ? num1 / num2 : '错误';

          const formatted = typeof resVal === 'number' ? (Number.isInteger(resVal) ? String(resVal) : parseFloat(resVal.toFixed(8)).toString()) : resVal;
          exprLine.textContent = `${fullExpr} =`;
          addHistory(fullExpr, formatted);
          current = formatted;
          previous = null;
          operation = null;
          justEvaluated = true;
          updateDisplay();
        } catch (e) {
          current = '错误';
          updateDisplay();
        }
      }
    } else if (val === 'pi') {
      current = String(Math.PI.toFixed(8));
      justEvaluated = true;
      updateDisplay();
    } else if (val === 'e') {
      current = String(Math.E.toFixed(8));
      justEvaluated = true;
      updateDisplay();
    } else if (val === 'sq') {
      const v = parseFloat(current);
      const resVal = String(parseFloat((v * v).toFixed(8)));
      addHistory(`${current}²`, resVal);
      current = resVal;
      justEvaluated = true;
      updateDisplay();
    } else if (val === 'sqrt') {
      const v = parseFloat(current);
      const resVal = v >= 0 ? String(parseFloat(Math.sqrt(v).toFixed(8))) : '错误';
      addHistory(`√(${current})`, resVal);
      current = resVal;
      justEvaluated = true;
      updateDisplay();
    } else if (val === 'sin') {
      const resVal = String(parseFloat(Math.sin(parseFloat(current)).toFixed(8)));
      addHistory(`sin(${current})`, resVal);
      current = resVal;
      justEvaluated = true;
      updateDisplay();
    } else if (val === 'cos') {
      const resVal = String(parseFloat(Math.cos(parseFloat(current)).toFixed(8)));
      addHistory(`cos(${current})`, resVal);
      current = resVal;
      justEvaluated = true;
      updateDisplay();
    } else if (val === 'tan') {
      const resVal = String(parseFloat(Math.tan(parseFloat(current)).toFixed(8)));
      addHistory(`tan(${current})`, resVal);
      current = resVal;
      justEvaluated = true;
      updateDisplay();
    } else if (val === 'ln') {
      const v = parseFloat(current);
      const resVal = v > 0 ? String(parseFloat(Math.log(v).toFixed(8))) : '错误';
      addHistory(`ln(${current})`, resVal);
      current = resVal;
      justEvaluated = true;
      updateDisplay();
    }
  }

  // Button clicks
  win.querySelectorAll('.calc-mac-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      handleInput(btn.dataset.val);
    });
  });

  // Mode Switch
  modeBasicBtn.addEventListener('click', () => {
    modeBasicBtn.classList.add('active');
    modeSciBtn.classList.remove('active');
    sciGrid.style.display = 'none';
    win.style.width = '320px';
  });

  modeSciBtn.addEventListener('click', () => {
    modeSciBtn.classList.add('active');
    modeBasicBtn.classList.remove('active');
    sciGrid.style.display = 'grid';
    win.style.width = '440px';
  });

  // Tape Drawer Toggle
  tapeToggleBtn.addEventListener('click', () => {
    const isShown = tapeDrawer.style.display !== 'none';
    tapeDrawer.style.display = isShown ? 'none' : 'block';
    const baseW = modeSciBtn.classList.contains('active') ? 440 : 320;
    win.style.width = (baseW + (isShown ? 0 : 140)) + 'px';
  });

  // Physical Keyboard Listener
  win.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') handleInput(e.key);
    else if (e.key === '.') handleInput('.');
    else if (e.key === '+') handleInput('+');
    else if (e.key === '-') handleInput('-');
    else if (e.key === '*') handleInput('*');
    else if (e.key === '/') handleInput('/');
    else if (e.key === 'Enter' || e.key === '=') { e.preventDefault(); handleInput('='); }
    else if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') handleInput('AC');
    else if (e.key === 'Backspace') {
      if (current.length > 1) current = current.slice(0, -1);
      else current = '0';
      updateDisplay();
    }
  });
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
          <div class="ventura-nav-item" data-tab="sound">
            <div class="ventura-badge" style="background:linear-gradient(135deg,#ff2d55,#ff375f);">🔊</div>
            <span data-i18n="settings_sound">${t('settings_sound', 'Sound')}</span>
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
      else if (tab === 'sound') {
        const audioEngine = window.AppleAudioEngine;
        const soundEnabled = audioEngine ? audioEngine.settings.soundEffectsEnabled : true;
        const volFeedbackEnabled = audioEngine ? audioEngine.settings.volumeFeedbackEnabled : true;
        const touchFeedbackEnabled = audioEngine ? audioEngine.settings.touchHapticsEnabled : true;
        const hapticStrength = audioEngine ? audioEngine.settings.hapticStrength : 'medium';
        const masterVol = audioEngine ? Math.round(audioEngine.settings.masterVolume * 100) : 100;

        contentArea.innerHTML = `
          <h2 style="font-size:20px;margin:0 0 16px 0;font-weight:600;">${t('settings_sound', 'Sound')}</h2>
          
          <div class="ventura-card">
            <div style="font-size:12px;font-weight:600;opacity:0.6;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">${t('settings_sound_effects', 'Sound Effects')}</div>
            
            <div class="ventura-row" style="display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-weight:600;font-size:13px;">${t('settings_play_ui_sounds', 'Play user interface sound effects')}</div>
                <div style="font-size:11px;opacity:0.6;">Apple Trackpad Taptic Click & Touch Haptics</div>
              </div>
              <input type="checkbox" id="setting-ui-sounds" ${soundEnabled && touchFeedbackEnabled ? 'checked' : ''} style="cursor:pointer;width:18px;height:18px;accent-color:#007aff;">
            </div>

            <div class="ventura-row" style="display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-weight:600;font-size:13px;">${t('settings_play_vol_feedback', 'Play feedback when volume changes')}</div>
                <div style="font-size:11px;opacity:0.6;">macOS Pop (640Hz Apple acoustic bubble resonance)</div>
              </div>
              <input type="checkbox" id="setting-vol-feedback" ${volFeedbackEnabled ? 'checked' : ''} style="cursor:pointer;width:18px;height:18px;accent-color:#007aff;">
            </div>
          </div>

          <div class="ventura-card" style="margin-top:16px;">
            <div style="font-size:12px;font-weight:600;opacity:0.6;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">${t('settings_touch_feedback', 'Touch & Trackpad Haptic Feedback')}</div>
            
            <div class="ventura-row" style="display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-weight:600;font-size:13px;">${t('settings_haptic_strength', 'Haptic Click Strength')}</div>
                <div style="font-size:11px;opacity:0.6;">Force Touch physical acoustic damping</div>
              </div>
              <div style="display:flex;background:rgba(0,0,0,0.08);padding:3px;border-radius:8px;gap:2px;">
                <button class="haptic-pill ${hapticStrength === 'light' ? 'active' : ''}" data-strength="light" style="border:none;background:${hapticStrength === 'light' ? '#007aff' : 'transparent'};color:${hapticStrength === 'light' ? 'white' : 'inherit'};padding:4px 12px;border-radius:6px;font-size:12px;cursor:pointer;font-weight:600;">${t('settings_haptic_light', 'Light')}</button>
                <button class="haptic-pill ${hapticStrength === 'medium' ? 'active' : ''}" data-strength="medium" style="border:none;background:${hapticStrength === 'medium' ? '#007aff' : 'transparent'};color:${hapticStrength === 'medium' ? 'white' : 'inherit'};padding:4px 12px;border-radius:6px;font-size:12px;cursor:pointer;font-weight:600;">${t('settings_haptic_medium', 'Medium')}</button>
                <button class="haptic-pill ${hapticStrength === 'heavy' ? 'active' : ''}" data-strength="heavy" style="border:none;background:${hapticStrength === 'heavy' ? '#007aff' : 'transparent'};color:${hapticStrength === 'heavy' ? 'white' : 'inherit'};padding:4px 12px;border-radius:6px;font-size:12px;cursor:pointer;font-weight:600;">${t('settings_haptic_heavy', 'Firm')}</button>
              </div>
            </div>

            <div class="ventura-row" style="display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-weight:600;font-size:13px;">${t('settings_output_vol', 'Output Volume')}</div>
                <div style="font-size:11px;opacity:0.6;" id="sound-vol-txt">${masterVol}%</div>
              </div>
              <input type="range" id="sound-vol-slider" min="0" max="100" value="${masterVol}" style="width:160px;cursor:pointer;accent-color:#007aff;">
            </div>
          </div>

          <div class="ventura-card" style="margin-top:16px;">
            <div style="font-size:12px;font-weight:600;opacity:0.6;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;">${t('settings_alert_sound', 'Alert Sound')} & Acoustic Preview</div>
            
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
              <button class="sound-preview-btn" data-sfx="haptic" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);padding:10px 14px;border-radius:10px;color:inherit;font-size:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:space-between;">
                <span>👆 Trackpad Taptic Click</span>
                <span style="opacity:0.6;">▶</span>
              </button>
              <button class="sound-preview-btn" data-sfx="pop" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);padding:10px 14px;border-radius:10px;color:inherit;font-size:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:space-between;">
                <span>🫧 macOS Pop (Volume)</span>
                <span style="opacity:0.6;">▶</span>
              </button>
              <button class="sound-preview-btn" data-sfx="tink" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);padding:10px 14px;border-radius:10px;color:inherit;font-size:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:space-between;">
                <span>🔔 macOS Tink (Glass Bell)</span>
                <span style="opacity:0.6;">▶</span>
              </button>
              <button class="sound-preview-btn" data-sfx="switch" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);padding:10px 14px;border-radius:10px;color:inherit;font-size:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:space-between;">
                <span>🔘 macOS Switch Click</span>
                <span style="opacity:0.6;">▶</span>
              </button>
              <button class="sound-preview-btn" data-sfx="airdrop" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);padding:10px 14px;border-radius:10px;color:inherit;font-size:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:space-between;">
                <span>📡 macOS AirDrop Chime</span>
                <span style="opacity:0.6;">▶</span>
              </button>
              <button class="sound-preview-btn" data-sfx="trash" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);padding:10px 14px;border-radius:10px;color:inherit;font-size:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:space-between;">
                <span>🗑️ macOS Paper Crumple</span>
                <span style="opacity:0.6;">▶</span>
              </button>
            </div>
          </div>
        `;

        const uiSoundsChk = contentArea.querySelector('#setting-ui-sounds');
        const volFeedbackChk = contentArea.querySelector('#setting-vol-feedback');
        const volSlider = contentArea.querySelector('#sound-vol-slider');
        const volTxt = contentArea.querySelector('#sound-vol-txt');
        const hapticPills = contentArea.querySelectorAll('.haptic-pill');
        const previewBtns = contentArea.querySelectorAll('.sound-preview-btn');

        if (uiSoundsChk) {
          uiSoundsChk.onchange = () => {
            const checked = uiSoundsChk.checked;
            if (window.AppleAudioEngine) {
              window.AppleAudioEngine.settings.soundEffectsEnabled = checked;
              window.AppleAudioEngine.settings.touchHapticsEnabled = checked;
            }
          };
        }

        if (volFeedbackChk) {
          volFeedbackChk.onchange = () => {
            const checked = volFeedbackChk.checked;
            if (window.AppleAudioEngine) {
              window.AppleAudioEngine.settings.volumeFeedbackEnabled = checked;
            }
          };
        }

        if (volSlider && volTxt) {
          volSlider.oninput = (e) => {
            const val = parseInt(e.target.value);
            volTxt.innerText = `${val}%`;
            if (window.AppleAudioEngine) {
              window.AppleAudioEngine.settings.masterVolume = val / 100;
            }
          };
          volSlider.onchange = () => {
            if (window.AppleAudioEngine) window.AppleAudioEngine.playPop();
          };
        }

        hapticPills.forEach(pill => {
          pill.onclick = () => {
            const strength = pill.getAttribute('data-strength');
            if (window.AppleAudioEngine) {
              window.AppleAudioEngine.settings.hapticStrength = strength;
              window.AppleAudioEngine.playHapticClick(strength);
            }
            renderTab('sound');
          };
        });

        previewBtns.forEach(btn => {
          btn.onclick = () => {
            const sfx = btn.getAttribute('data-sfx');
            if (!window.AppleAudioEngine) return;
            if (sfx === 'haptic') window.AppleAudioEngine.playHapticClick();
            else if (sfx === 'pop') window.AppleAudioEngine.playPop();
            else if (sfx === 'tink') window.AppleAudioEngine.playTink();
            else if (sfx === 'switch') window.AppleAudioEngine.playSwitch(true);
            else if (sfx === 'airdrop') window.AppleAudioEngine.playAirDrop();
            else if (sfx === 'trash') window.AppleAudioEngine.playTrash();
          };
        });
      }
      else if (tab === 'about') {
        contentArea.innerHTML = `
          <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:20px 0;">
            <div style="margin-bottom:12px;filter:drop-shadow(0 4px 10px rgba(0,0,0,0.2));display:flex;align-items:center;justify-content:center;">
              <svg viewBox="0 0 384 512" width="54" height="72" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.2 16.4-61.2 41.2-90.8-23.7-34.7-59.4-48.4-100.1-49.9-42.8-1.5-82.5 25.5-102.8 25.5-20.4 0-51.9-25.2-85.3-24.5-43.7 1-84.5 25.7-107.4 64.9-46.3 79.9-11.8 196.4 32.7 261.3 21.6 31.4 47.4 66.8 81.6 65.5 32.2-1.3 44.5-20.7 83.1-20.7 38.6 0 49.9 20.7 84 20.7 35.3 0 57.1-32.9 78.9-64.4 24.9-36.3 35.1-71.5 35.5-73.4-.9-.3-52.9-20.4-53.2-80.4zM245.9 83.1c17.5-21.2 29.3-50.6 26.1-79.9-25.2 1-55.7 16.7-73.8 37.7-16.1 18.5-29.3 48.7-25.6 78 28.2 2.1 55.7-16.1 73.3-35.8z"/>
              </svg>
            </div>
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

// High-Fidelity macOS Sequoia Vector SVG Application Icons
function getAppIconSvg(id, size = 64) {
  const normId = (id || '').toLowerCase().trim();
  const uid = `${normId}-${Math.floor(Math.random() * 1000000)}`;

  if (normId === 'finder') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="f-bg-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1ea0f2"/><stop offset="100%" stop-color="#0567db"/>
        </linearGradient>
        <linearGradient id="f-hl-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#55c0fb"/><stop offset="100%" stop-color="#238df4"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#f-bg-${uid})"/>
      <path d="M 22.5 0 L 50 0 C 47 28 53 45 44 65 C 38 78 40 88 50 100 L 22.5 100 C 10 100 0 90 0 77.5 L 0 22.5 C 0 10 10 0 22.5 0 Z" fill="url(#f-hl-${uid})"/>
      <path d="M 50 0 C 47 28 53 45 44 65 C 38 78 40 88 50 100" stroke="#003582" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <circle cx="28" cy="38" r="4.5" fill="#003582"/>
      <circle cx="72" cy="38" r="4.5" fill="#003582"/>
      <path d="M 28 64 C 40 78 60 78 72 64" stroke="#003582" stroke-width="4" stroke-linecap="round" fill="none"/>
    </svg>`;
  }

  if (normId === 'launchpad') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="lp-bg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2c1654"/><stop offset="50%" stop-color="#3b1b6c"/><stop offset="100%" stop-color="#141c3a"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#lp-bg-${uid})"/>
      <circle cx="20" cy="25" r="1.5" fill="rgba(255,255,255,0.7)"/>
      <circle cx="82" cy="32" r="1" fill="rgba(255,255,255,0.6)"/>
      <circle cx="30" cy="78" r="1.2" fill="rgba(255,255,255,0.5)"/>
      <circle cx="78" cy="80" r="1.8" fill="rgba(255,255,255,0.7)"/>
      <path d="M 36 64 C 28 72 24 86 24 86 C 24 86 38 82 46 74 Z" fill="#ff453a"/>
      <path d="M 33 67 C 28 73 26 82 26 82 C 26 82 35 80 41 75 Z" fill="#ff9f0a"/>
      <path d="M 68 18 C 50 24 38 42 35 58 L 52 75 C 68 72 86 60 92 42 C 94 28 82 16 68 18 Z" fill="#ffffff"/>
      <path d="M 40 44 L 22 50 L 32 62 Z" fill="#e11d48"/>
      <path d="M 66 70 L 60 88 L 48 78 Z" fill="#be123c"/>
      <circle cx="62" cy="46" r="8" fill="#0284c7"/>
      <circle cx="62" cy="46" r="6" fill="#38bdf8"/>
      <circle cx="64" cy="44" r="2.5" fill="#ffffff"/>
    </svg>`;
  }

  if (normId === 'browser' || normId === 'safari') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="saf-bg-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#e8ecf2"/>
        </linearGradient>
        <linearGradient id="saf-dial-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#188dfb"/><stop offset="100%" stop-color="#0062d2"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#saf-bg-${uid})"/>
      <rect width="100" height="100" rx="22.5" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
      <circle cx="50" cy="50" r="38" fill="url(#saf-dial-${uid})"/>
      <circle cx="50" cy="50" r="34" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-dasharray="2, 6.89"/>
      <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2" stroke-dasharray="3, 24.5"/>
      <polygon points="50,15 56,50 50,47 44,50" fill="#ff3b30"/>
      <polygon points="50,85 56,50 50,53 44,50" fill="#f5f5f7"/>
      <circle cx="50" cy="50" r="4.5" fill="#e5e5ea" stroke="#8e8e93" stroke-width="1.5"/>
    </svg>`;
  }

  if (normId === 'terminal') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="term-bg-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#2a2a2c"/><stop offset="100%" stop-color="#141415"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#term-bg-${uid})"/>
      <rect x="2" y="2" width="96" height="96" rx="21" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
      <path d="M 24 34 L 44 50 L 24 66" stroke="#f5f5f7" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <rect x="52" y="59" width="24" height="7" rx="2" fill="#30d158"/>
    </svg>`;
  }

  if (normId === 'notes') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="notes-bg-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#f5f5f7"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#notes-bg-${uid})"/>
      <path d="M 0 22.5 C 0 10 10 0 22.5 0 L 77.5 0 C 90 0 100 10 100 22.5 L 100 28 L 0 28 Z" fill="#f59e0b"/>
      <line x1="16" y1="42" x2="84" y2="42" stroke="#e2e8f0" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="16" y1="56" x2="84" y2="56" stroke="#e2e8f0" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="16" y1="70" x2="65" y2="70" stroke="#e2e8f0" stroke-width="2.5" stroke-linecap="round"/>
      <g transform="translate(68, 62) rotate(-42)">
        <rect x="-6" y="-30" width="12" height="36" rx="2" fill="#fbbf24"/>
        <polygon points="-6,6 6,6 0,18" fill="#fde68a"/>
        <polygon points="-2,14 2,14 0,18" fill="#1e293b"/>
        <rect x="-6" y="-34" width="12" height="6" rx="1" fill="#f43f5e"/>
      </g>
    </svg>`;
  }

  if (normId === 'calculator') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="calc-bg-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#323236"/><stop offset="100%" stop-color="#1c1c1e"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#calc-bg-${uid})"/>
      <rect x="16" y="14" width="68" height="18" rx="6" fill="#242426"/>
      <text x="76" y="27" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="end">42</text>
      <circle cx="32" cy="50" r="13" fill="#a5a5a5"/>
      <text x="32" y="55" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#1c1c1e" text-anchor="middle">C</text>
      <circle cx="68" cy="50" r="13" fill="#ff9f0a"/>
      <text x="68" y="55" font-family="-apple-system, sans-serif" font-size="18" font-weight="600" fill="#ffffff" text-anchor="middle">÷</text>
      <circle cx="32" cy="80" r="13" fill="#505050"/>
      <text x="32" y="85" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" fill="#ffffff" text-anchor="middle">7</text>
      <circle cx="68" cy="80" r="13" fill="#ff9f0a"/>
      <text x="68" y="85" font-family="-apple-system, sans-serif" font-size="18" font-weight="600" fill="#ffffff" text-anchor="middle">=</text>
    </svg>`;
  }

  if (normId === 'music') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="music-bg-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fc3c44"/><stop offset="100%" stop-color="#f9233b"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#music-bg-${uid})"/>
      <path d="M 68 22 L 42 28 C 39 29 37 31 37 34 L 37 66 C 35 64 32 63 28 63 C 21 63 16 67 16 73 C 16 79 21 83 28 83 C 35 83 40 78 40 72 L 40 42 L 65 37 L 65 60 C 63 58 60 57 56 57 C 49 57 44 61 44 67 C 44 73 49 77 56 77 C 63 77 68 72 68 66 Z" fill="#ffffff"/>
    </svg>`;
  }

  if (normId === 'weather') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="w-bg-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8"/><stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
        <linearGradient id="sun-g-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fde047"/><stop offset="100%" stop-color="#eab308"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#w-bg-${uid})"/>
      <circle cx="64" cy="38" r="16" fill="url(#sun-g-${uid})"/>
      <path d="M 26 72 C 18 72 12 66 12 58 C 12 51 17 45 24 44 C 27 34 36 27 47 27 C 59 27 69 36 71 47 C 76 48 80 52 80 58 C 80 66 74 72 66 72 Z" fill="#ffffff"/>
    </svg>`;
  }

  if (normId === 'camera') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="cam-bg-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#3a3a3c"/><stop offset="100%" stop-color="#1c1c1e"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#cam-bg-${uid})"/>
      <circle cx="50" cy="50" r="36" fill="#6b7280"/>
      <circle cx="50" cy="50" r="32" fill="#111827"/>
      <circle cx="50" cy="50" r="28" fill="#1e1b4b"/>
      <circle cx="50" cy="50" r="14" fill="#030712"/>
      <ellipse cx="40" cy="40" rx="9" ry="5" transform="rotate(-30 40 40)" fill="rgba(255,255,255,0.4)"/>
    </svg>`;
  }

  if (normId === 'iphonemirror') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="ipm-bg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e293b"/><stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#ipm-bg-${uid})"/>
      <rect x="25" y="12" width="50" height="76" rx="12" fill="#18181b" stroke="#64748b" stroke-width="2.5"/>
      <rect x="42" y="16" width="16" height="5" rx="2.5" fill="#000000"/>
      <rect x="28" y="24" width="44" height="60" rx="4" fill="#3b82f6" opacity="0.35"/>
      <circle cx="50" cy="54" r="10" fill="#60a5fa" opacity="0.6"/>
    </svg>`;
  }

  if (normId === 'paint' || normId === 'photos') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="pht-bg-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#f1f5f9"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#pht-bg-${uid})"/>
      <g transform="translate(50, 50)">
        <ellipse cx="0" cy="-20" rx="9" ry="15" fill="#f43f5e" opacity="0.85"/>
        <ellipse cx="14" cy="-14" rx="9" ry="15" transform="rotate(45)" fill="#f97316" opacity="0.85"/>
        <ellipse cx="20" cy="0" rx="9" ry="15" transform="rotate(90)" fill="#eab308" opacity="0.85"/>
        <ellipse cx="14" cy="14" rx="9" ry="15" transform="rotate(135)" fill="#22c55e" opacity="0.85"/>
        <ellipse cx="0" cy="20" rx="9" ry="15" transform="rotate(180)" fill="#06b6d4" opacity="0.85"/>
        <ellipse cx="-14" cy="14" rx="9" ry="15" transform="rotate(225)" fill="#3b82f6" opacity="0.85"/>
        <ellipse cx="-20" cy="0" rx="9" ry="15" transform="rotate(270)" fill="#8b5cf6" opacity="0.85"/>
        <ellipse cx="-14" cy="-14" rx="9" ry="15" transform="rotate(315)" fill="#ec4899" opacity="0.85"/>
        <circle cx="0" cy="0" r="6" fill="#ffffff"/>
      </g>
    </svg>`;
  }

  if (normId === 'maps') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="mps-bg-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#f8fafc"/><stop offset="100%" stop-color="#e2e8f0"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#mps-bg-${uid})"/>
      <path d="M 0 35 Q 40 30 60 0 L 100 0 L 100 45 Q 60 70 0 60 Z" fill="#86efac"/>
      <path d="M 0 55 Q 50 65 100 35 L 100 65 Q 50 95 0 85 Z" fill="#fed7aa"/>
      <path d="M 20 100 Q 50 40 85 0" stroke="#f97316" stroke-width="6" fill="none"/>
      <path d="M 0 50 Q 50 60 100 20" stroke="#ffffff" stroke-width="8" fill="none"/>
      <path d="M 50 32 C 43 32 38 37 38 44 C 38 52 50 68 50 68 C 50 68 62 52 62 44 C 62 37 57 32 50 32 Z" fill="#ef4444"/>
      <circle cx="50" cy="43" r="4.5" fill="#ffffff"/>
    </svg>`;
  }

  if (normId === 'activity') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="am-bg-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1c1c1e"/><stop offset="100%" stop-color="#0a0a0c"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#am-bg-${uid})"/>
      <line x1="15" y1="30" x2="85" y2="30" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <line x1="15" y1="50" x2="85" y2="50" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <line x1="15" y1="70" x2="85" y2="70" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <line x1="30" y1="15" x2="30" y2="85" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <line x1="50" y1="15" x2="50" y2="85" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <line x1="70" y1="15" x2="70" y2="85" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <path d="M 12 50 L 32 50 L 38 24 L 46 76 L 54 36 L 60 58 L 66 50 L 88 50" fill="none" stroke="#30d158" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }

  if (normId === 'settings') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="set-bg-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#9ca3af"/><stop offset="100%" stop-color="#4b5563"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#set-bg-${uid})"/>
      <g transform="translate(50, 50)">
        <circle cx="0" cy="0" r="30" fill="#e5e7eb"/>
        <path d="M-5,-34 h10 v5 h-10 z M-5,29 h10 v5 h-10 z M-34,-5 h5 v10 h-5 z M29,-5 h5 v10 h-5 z" fill="#e5e7eb"/>
        <path d="M-5,-34 h10 v5 h-10 z" transform="rotate(45)" fill="#e5e7eb"/>
        <path d="M-5,29 h10 v5 h-10 z" transform="rotate(45)" fill="#e5e7eb"/>
        <circle cx="0" cy="0" r="14" fill="#4b5563"/>
        <circle cx="0" cy="0" r="10" fill="#374151"/>
      </g>
    </svg>`;
  }

  if (normId === 'ide') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="ide-bg-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#0369a1"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#ide-bg-${uid})"/>
      <line x1="20" y1="20" x2="80" y2="20" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <line x1="20" y1="50" x2="80" y2="50" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <line x1="20" y1="80" x2="80" y2="80" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <line x1="20" y1="20" x2="20" y2="80" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <line x1="50" y1="20" x2="50" y2="80" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <line x1="80" y1="20" x2="80" y2="80" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <g transform="translate(50, 46) rotate(-45)">
        <rect x="-5" y="-5" width="10" height="38" rx="2" fill="#d97706"/>
        <rect x="-14" y="-18" width="28" height="14" rx="3" fill="#cbd5e1"/>
      </g>
      <text x="50" y="80" font-family="-apple-system, monospace" font-size="18" font-weight="800" fill="#ffffff" text-anchor="middle">&lt; /&gt;</text>
    </svg>`;
  }

  if (normId === 'store') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="str-bg-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0a84ff"/><stop offset="100%" stop-color="#0062d2"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#str-bg-${uid})"/>
      <line x1="30" y1="78" x2="50" y2="22" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
      <line x1="70" y1="78" x2="50" y2="22" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
      <line x1="24" y1="60" x2="76" y2="60" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
    </svg>`;
  }

  if (normId === 'video') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="vid-bg-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1e1e24"/><stop offset="100%" stop-color="#09090b"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#vid-bg-${uid})"/>
      <polygon points="40,32 72,50 40,68" fill="#38bdf8"/>
    </svg>`;
  }

  if (normId === 'synth') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="syn-bg-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ea580c"/><stop offset="100%" stop-color="#9a3412"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#syn-bg-${uid})"/>
      <rect x="20" y="30" width="12" height="42" rx="2" fill="#ffffff"/>
      <rect x="34" y="30" width="12" height="42" rx="2" fill="#ffffff"/>
      <rect x="48" y="30" width="12" height="42" rx="2" fill="#ffffff"/>
      <rect x="62" y="30" width="12" height="42" rx="2" fill="#ffffff"/>
      <rect x="28" y="30" width="8" height="26" rx="1" fill="#18181b"/>
      <rect x="42" y="30" width="8" height="26" rx="1" fill="#18181b"/>
      <rect x="56" y="30" width="8" height="26" rx="1" fill="#18181b"/>
    </svg>`;
  }

  if (normId === 'snake') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="snk-bg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#047857"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#snk-bg-${uid})"/>
      <path d="M 28 72 C 28 60 42 60 42 50 C 42 40 28 40 28 28 C 28 20 36 16 46 16 C 56 16 68 22 68 34 C 68 46 54 46 54 56 C 54 66 68 66 68 76 C 68 84 58 88 48 88 C 36 88 28 82 28 72 Z" fill="none" stroke="#ffffff" stroke-width="7" stroke-linecap="round"/>
      <circle cx="70" cy="74" r="3" fill="#fbbf24"/>
    </svg>`;
  }

  if (normId === 'flappy') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="flp-bg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4ade80"/><stop offset="100%" stop-color="#22c55e"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#flp-bg-${uid})"/>
      <circle cx="48" cy="50" r="22" fill="#fbbf24"/>
      <circle cx="58" cy="44" r="7" fill="#ffffff"/>
      <circle cx="61" cy="44" r="3" fill="#18181b"/>
      <path d="M 64 50 L 76 53 L 64 56 Z" fill="#ea580c"/>
      <ellipse cx="36" cy="54" rx="9" ry="6" fill="#ffffff"/>
    </svg>`;
  }

  if (normId === 'universe') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="uni-bg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#312e81"/><stop offset="50%" stop-color="#581c87"/><stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#uni-bg-${uid})"/>
      <circle cx="50" cy="50" r="20" fill="#f59e0b"/>
      <ellipse cx="50" cy="50" rx="36" ry="10" fill="none" stroke="#fde68a" stroke-width="3" transform="rotate(-24 50 50)"/>
      <circle cx="25" cy="28" r="1.5" fill="#ffffff"/>
      <circle cx="75" cy="22" r="1.2" fill="#ffffff"/>
      <circle cx="78" cy="74" r="1.8" fill="#ffffff"/>
    </svg>`;
  }

  if (normId === 'radar') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="rad-bg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#064e3b"/><stop offset="100%" stop-color="#022c22"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#rad-bg-${uid})"/>
      <circle cx="50" cy="50" r="34" fill="none" stroke="#10b981" stroke-width="1.5"/>
      <circle cx="50" cy="50" r="22" fill="none" stroke="#10b981" stroke-width="1.2"/>
      <circle cx="50" cy="50" r="10" fill="none" stroke="#10b981" stroke-width="1"/>
      <line x1="50" y1="16" x2="50" y2="84" stroke="#10b981" stroke-width="1"/>
      <line x1="16" y1="50" x2="84" y2="50" stroke="#10b981" stroke-width="1"/>
      <path d="M 50 50 L 76 24 A 34 34 0 0 0 50 16 Z" fill="rgba(16, 185, 129, 0.4)"/>
    </svg>`;
  }

  if (normId === 'hostinfo') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="chp-bg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#27272a"/><stop offset="100%" stop-color="#09090b"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#chp-bg-${uid})"/>
      <rect x="26" y="26" width="48" height="48" rx="8" fill="#18181b" stroke="#71717a" stroke-width="2"/>
      <text x="50" y="56" font-family="-apple-system, sans-serif" font-size="20" font-weight="800" fill="#e4e4e7" text-anchor="middle">M3</text>
    </svg>`;
  }

  if (normId === 'hostscreen') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="hsc-bg-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#1d4ed8"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#hsc-bg-${uid})"/>
      <rect x="22" y="26" width="42" height="30" rx="4" fill="#1e293b" stroke="#ffffff" stroke-width="2"/>
      <rect x="36" y="44" width="42" height="30" rx="4" fill="#0f172a" stroke="#ffffff" stroke-width="2"/>
    </svg>`;
  }

  if (normId === 'webhost') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="wbh-bg-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#6366f1"/><stop offset="100%" stop-color="#4338ca"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22.5" fill="url(#webhost-bg-${uid})"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="#ffffff" stroke-width="2"/>
      <ellipse cx="50" cy="50" rx="14" ry="28" fill="none" stroke="#ffffff" stroke-width="1.8"/>
      <line x1="22" y1="50" x2="78" y2="50" stroke="#ffffff" stroke-width="1.8"/>
    </svg>`;
  }

  if (normId === 'trash') {
    return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
      <defs>
        <linearGradient id="trsh-bg-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.7)"/><stop offset="100%" stop-color="rgba(200,210,225,0.4)"/>
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="22" rx="34" ry="10" fill="rgba(255,255,255,0.85)" stroke="#94a3b8" stroke-width="2"/>
      <path d="M 20 25 L 28 85 C 29 89 38 92 50 92 C 62 92 71 89 72 85 L 80 25 Z" fill="url(#trsh-bg-${uid})" stroke="#cbd5e1" stroke-width="2"/>
      <line x1="35" y1="28" x2="40" y2="87" stroke="rgba(148,163,184,0.6)" stroke-width="1.8"/>
      <line x1="50" y1="31" x2="50" y2="90" stroke="rgba(148,163,184,0.6)" stroke-width="1.8"/>
      <line x1="65" y1="28" x2="60" y2="87" stroke="rgba(148,163,184,0.6)" stroke-width="1.8"/>
    </svg>`;
  }

  // Fallback icon
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="macos-app-icon">
    <defs>
      <linearGradient id="def-bg-${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#1d4ed8"/>
      </linearGradient>
    </defs>
    <rect width="100" height="100" rx="22.5" fill="url(#def-bg-${uid})"/>
    <circle cx="50" cy="50" r="22" fill="rgba(255,255,255,0.2)"/>
    <text x="50" y="58" font-family="-apple-system, sans-serif" font-size="24" font-weight="700" fill="#ffffff" text-anchor="middle">★</text>
  </svg>`;
}

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
    { type: 'app', id: 'browser', name: dict.app_browser, action: 'launchBrowser()' },
    { type: 'app', id: 'iphonemirror', name: dict.app_iphonemirror || 'iPhone Mirroring', action: 'launchIPhoneMirroring()' },
    { type: 'app', id: 'maps', name: dict.app_maps, action: 'launchMaps()' },
    { type: 'app', id: 'weather', name: dict.app_weather, action: 'launchWeather()' },
    { type: 'app', id: 'settings', name: dict.app_settings, action: 'launchSettings()' },
    {
      type: 'folder',
      name: dict.folder_productivity,
      apps: [
        { id: 'finder', name: dict.app_finder, action: 'launchFinder()' },
        { id: 'terminal', name: dict.app_terminal, action: 'launchTerminal()' },
        { id: 'notes', name: dict.app_notes, action: 'launchNotes()' },
        { id: 'calculator', name: dict.app_calculator, action: 'launchCalculator()' },
        { id: 'iphonemirror', name: dict.app_iphonemirror || 'iPhone Mirroring', action: 'launchIPhoneMirroring()' },
        { id: 'ide', name: dict.app_ide, action: 'launchIDE()' }
      ]
    },
    {
      type: 'folder',
      name: dict.folder_media,
      apps: [
        { id: 'paint', name: dict.app_paint, action: 'launchPaint()' },
        { id: 'camera', name: dict.app_camera, action: 'launchCamera()' },
        { id: 'music', name: dict.app_music, action: 'launchMusic()' },
        { id: 'video', name: dict.app_video, action: 'launchVideo()' },
        { id: 'synth', name: dict.app_synth, action: 'launchSynth()' }
      ]
    },
    {
      type: 'folder',
      name: dict.folder_games,
      apps: [
        { id: 'snake', name: dict.app_snake, action: 'launchSnake()' },
        { id: 'flappy', name: dict.app_flappy, action: 'launchFlappy()' },
        { id: 'universe', name: dict.app_universe, action: 'launchUniverse()' },
        { id: 'radar', name: dict.app_radar, action: 'launchRadar()' }
      ]
    },
    {
      type: 'folder',
      name: dict.folder_utilities,
      apps: [
        { id: 'activity', name: dict.app_activity, action: 'launchActivityMonitor()' },
        { id: 'hostinfo', name: dict.app_hostinfo, action: 'launchHostMonitor()' },
        { id: 'hostscreen', name: dict.app_hostscreen, action: 'launchHostScreen()' },
        { id: 'webhost', name: dict.app_webhost, action: 'launchWebHost()' },
        { id: 'store', name: dict.app_store, action: 'launchStore()' }
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
    <div style="display:flex;flex-direction:column;align-items:center;cursor:pointer;width:88px;" onclick="closeLaunchpadFolder(); toggleLaunchpad(); ${app.action}">
      <div style="width:68px;height:68px;margin-bottom:8px;display:flex;justify-content:center;align-items:center;transition:transform 0.15s ease;" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'">
        ${getAppIconSvg(app.id, 68)}
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
        <div style="display:flex;flex-direction:column;align-items:center;cursor:pointer;width:104px;margin:18px;" onclick="toggleLaunchpad(); ${item.action}">
          <div style="width:82px;height:82px;margin-bottom:10px;display:flex;justify-content:center;align-items:center;transition:transform 0.15s ease;" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'">
            ${getAppIconSvg(item.id, 82)}
          </div>
          <div style="color:white;text-shadow:0 1px 3px rgba(0,0,0,0.8);font-size:14px;font-weight:500;text-align:center;">${item.name}</div>
        </div>
      `;
    } else {
      const miniIcons = item.apps.slice(0, 4).map(a => `
        <div style="width:28px;height:28px;display:flex;align-items:center;justify-content:center;">
          ${getAppIconSvg(a.id, 28)}
        </div>
      `).join('');
      return `
        <div style="display:flex;flex-direction:column;align-items:center;cursor:pointer;width:104px;margin:18px;" onclick="openLaunchpadFolder(${idx})">
          <div class="launchpad-folder-tile">
            ${miniIcons}
          </div>
          <div style="color:white;text-shadow:0 1px 3px rgba(0,0,0,0.8);font-size:14px;font-weight:500;margin-top:10px;text-align:center;">${item.name}</div>
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
    if (e && e.currentTarget) {
      e.currentTarget.classList.add('active');
      const rect = e.currentTarget.getBoundingClientRect();
      targetMenu.style.left = Math.max(4, Math.round(rect.left)) + 'px';
      targetMenu.style.top = Math.round(rect.bottom + 2) + 'px';
    }
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
      else if (btnId === 'apple-menu-btn' || btnId === 'app-name-btn') targetId = 'apple-menu';
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
const appNameBtn = document.getElementById('app-name-btn');
if (appNameBtn) {
  appNameBtn.addEventListener('click', (e) => {
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
  if (window.AppleAudioEngine) window.AppleAudioEngine.playTrash();
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
  if (!res.success) return;
  const pid = res.data.pid;

  const tracks = [
    { id: 1, title: 'Midnight in Cupertino', artist: 'Alice Lo-Fi Ensemble', album: 'Sequoia Sessions', dur: 204, durStr: '3:24', chordFreqs: [261.63, 329.63, 392.00, 493.88] }, // Cmaj7
    { id: 2, title: 'Glass & Silicon', artist: 'Infinite Loop Beats', album: '1 Apple Park Way', dur: 178, durStr: '2:58', chordFreqs: [220.00, 261.63, 329.63, 440.00] }, // Am7
    { id: 3, title: 'AirDrop Sunset', artist: 'Cyber Synthwave', album: 'California Coast', dur: 225, durStr: '3:45', chordFreqs: [174.61, 220.00, 261.63, 329.63] }, // Fmaj7
    { id: 4, title: 'M3 Max Horizon', artist: 'Ambient Code', album: 'Neural Core', dur: 192, durStr: '3:12', chordFreqs: [196.00, 246.94, 293.66, 392.00] }, // G7
    { id: 5, title: 'Rainy Days in Shibuya', artist: 'Tokyo Lo-Fi Studio', album: 'Shibuya Crossing', dur: 165, durStr: '2:45', chordFreqs: [293.66, 349.23, 440.00, 523.25] }, // Dm7
    { id: 6, title: 'Cosmic Terminal', artist: 'AliceOS Sound Lab', album: 'Sequoia 15', dur: 190, durStr: '3:10', chordFreqs: [329.63, 392.00, 493.88, 587.33] }  // Em7
  ];

  let currentTrackIdx = 0;
  let isPlaying = false;
  let playProgressSec = 0;
  let progressInterval = null;
  let synthNodes = [];

  const win = createWindow(pid, t('app_music', 'Music'), `
    <div class="apple-music-app" id="music-app-${pid}">
      <div class="music-sidebar">
        <div class="music-brand">
          <svg width="22" height="22" viewBox="0 0 100 100">
            <rect width="100" height="100" rx="22" fill="#fc3c44"/>
            <path d="M 68 22 L 42 28 C 39 29 37 31 37 34 L 37 66 C 35 64 32 63 28 63 C 21 63 16 67 16 73 C 16 79 21 83 28 83 C 35 83 40 78 40 72 L 40 42 L 65 37 L 65 60 C 63 58 60 57 56 57 C 49 57 44 61 44 67 C 44 73 49 77 56 77 C 63 77 68 72 68 66 Z" fill="#ffffff"/>
          </svg>
          <span>Music</span>
        </div>
        <div class="music-nav-group">
          <div class="music-nav-hdr">Apple Music</div>
          <div class="music-nav-item active"><span>🎧</span> 现在就听</div>
          <div class="music-nav-item"><span>🌍</span> 浏览</div>
          <div class="music-nav-item"><span>📻</span> 广播</div>
        </div>
        <div class="music-nav-group">
          <div class="music-nav-hdr">资料库</div>
          <div class="music-nav-item"><span>🕒</span> 最近播放</div>
          <div class="music-nav-item"><span>🎤</span> 艺人</div>
          <div class="music-nav-item"><span>💿</span> 专辑</div>
        </div>
        <div class="music-nav-group">
          <div class="music-nav-hdr">播放列表</div>
          <div class="music-nav-item"><span>☕</span> Apple Chill Lo-Fi</div>
          <div class="music-nav-item"><span>💻</span> Cupertino Code</div>
          <div class="music-nav-item"><span>🌌</span> Sequoia Sunset</div>
        </div>
      </div>

      <div class="music-main-wrap">
        <div class="music-hero-banner">
          <div class="music-hero-cover">
            <span>🎵</span>
          </div>
          <div class="music-hero-info">
            <div class="music-hero-tag">精选歌单 · APPLE MUSIC</div>
            <div class="music-hero-title">Apple Chill Lo-Fi Beats</div>
            <div class="music-hero-desc">柔和细腻的爵士和弦、慢节拍律动与温暖黑胶底噪，为专注代码与深度思考量身打造。</div>
            <div class="music-hero-btns">
              <button class="music-play-btn" id="music-hero-play-${pid}">▶ 播放全部</button>
              <button class="music-shuffle-btn" id="music-hero-shuffle-${pid}">🔀 随机播放</button>
            </div>
          </div>
        </div>

        <div class="music-tracklist">
          <div class="music-table-hdr">
            <div style="width:36px;">#</div>
            <div style="flex:2;">标题</div>
            <div style="flex:1.5;">艺人</div>
            <div style="flex:1.5;">专辑</div>
            <div style="width:60px;text-align:right;">时长</div>
            <div style="width:40px;text-align:center;">❤️</div>
          </div>
          <div class="music-table-body" id="music-table-body-${pid}"></div>
        </div>
      </div>

      <div class="music-player-bar">
        <div class="music-current-meta">
          <div class="music-mini-thumb" id="music-mini-thumb-${pid}">🎵</div>
          <div style="overflow:hidden;">
            <div class="music-mini-title" id="music-mini-title-${pid}">Midnight in Cupertino</div>
            <div class="music-mini-artist" id="music-mini-artist-${pid}">Alice Lo-Fi Ensemble</div>
          </div>
          <button class="music-mini-heart" id="music-mini-heart-${pid}">♡</button>
        </div>

        <div class="music-center-controls">
          <div class="music-btn-row">
            <button class="music-ctrl-btn" id="music-shuffle-toggle-${pid}">🔀</button>
            <button class="music-ctrl-btn" id="music-prev-btn-${pid}">⏮</button>
            <button class="music-play-circle-btn" id="music-play-toggle-${pid}">▶</button>
            <button class="music-ctrl-btn" id="music-next-btn-${pid}">⏭</button>
            <button class="music-ctrl-btn" id="music-repeat-toggle-${pid}">🔁</button>
          </div>
          <div class="music-progress-row">
            <span class="music-time-lbl" id="music-time-cur-${pid}">0:00</span>
            <div class="music-scrub-bar" id="music-scrub-${pid}">
              <div class="music-scrub-fill" id="music-fill-${pid}" style="width:0%;"></div>
            </div>
            <span class="music-time-lbl" id="music-time-tot-${pid}">3:24</span>
          </div>
        </div>

        <div class="music-volume-controls">
          <span style="font-size:13px;opacity:0.6;">🔊</span>
          <input type="range" class="music-vol-slider" id="music-vol-${pid}" min="0" max="100" value="75">
          <span style="font-size:13px;opacity:0.6;margin-left:8px;" title="隔空播放">📡</span>
        </div>
      </div>
    </div>
  `, 'music');

  win.style.width = '820px';
  win.style.height = '520px';

  const tableBody = win.querySelector(`#music-table-body-${pid}`);
  const playToggle = win.querySelector(`#music-play-toggle-${pid}`);
  const prevBtn = win.querySelector(`#music-prev-btn-${pid}`);
  const nextBtn = win.querySelector(`#music-next-btn-${pid}`);
  const heroPlay = win.querySelector(`#music-hero-play-${pid}`);
  const heroShuffle = win.querySelector(`#music-hero-shuffle-${pid}`);
  const miniTitle = win.querySelector(`#music-mini-title-${pid}`);
  const miniArtist = win.querySelector(`#music-mini-artist-${pid}`);
  const timeCur = win.querySelector(`#music-time-cur-${pid}`);
  const timeTot = win.querySelector(`#music-time-tot-${pid}`);
  const scrubFill = win.querySelector(`#music-fill-${pid}`);
  const scrubBar = win.querySelector(`#music-scrub-${pid}`);
  const volSlider = win.querySelector(`#music-vol-${pid}`);
  const heartBtn = win.querySelector(`#music-mini-heart-${pid}`);

  let volGainNode = null;

  function stopSynth() {
    synthNodes.forEach(n => {
      try { n.stop(); n.disconnect(); } catch (e) {}
    });
    synthNodes = [];
  }

  function startSynthChord(freqs) {
    stopSynth();
    try {
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const masterGain = audioCtx.createGain();
      const vol = (parseInt(volSlider.value, 10) || 75) / 100;
      masterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      masterGain.gain.linearRampToValueAtTime(vol * 0.16, audioCtx.currentTime + 0.8);
      masterGain.connect(audioCtx.destination);
      volGainNode = masterGain;

      freqs.forEach(f => {
        const osc = audioCtx.createOscillator();
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, audioCtx.currentTime);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, audioCtx.currentTime);

        osc.connect(filter);
        filter.connect(masterGain);
        osc.start();
        synthNodes.push(osc);
      });
    } catch (e) {}
  }

  function renderTable() {
    tableBody.innerHTML = tracks.map((t, idx) => `
      <div class="music-track-row ${idx === currentTrackIdx ? 'playing' : ''}" data-idx="${idx}">
        <div style="width:36px;opacity:0.6;">${idx === currentTrackIdx && isPlaying ? '🔊' : (idx + 1)}</div>
        <div style="flex:2;font-weight:${idx === currentTrackIdx ? '700' : '500'};">${t.title}</div>
        <div style="flex:1.5;opacity:0.7;">${t.artist}</div>
        <div style="flex:1.5;opacity:0.7;">${t.album}</div>
        <div style="width:60px;text-align:right;opacity:0.6;font-family:monospace;">${t.durStr}</div>
        <div style="width:40px;text-align:center;cursor:pointer;">♡</div>
      </div>
    `).join('');

    tableBody.querySelectorAll('.music-track-row').forEach(row => {
      row.addEventListener('click', () => {
        const idx = parseInt(row.dataset.idx, 10);
        playTrack(idx);
      });
    });
  }

  function formatSec(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec < 10 ? '0' : ''}${sec}`;
  }

  function playTrack(idx) {
    currentTrackIdx = idx;
    const cur = tracks[currentTrackIdx];
    miniTitle.textContent = cur.title;
    miniArtist.textContent = cur.artist;
    timeTot.textContent = cur.durStr;
    playProgressSec = 0;
    isPlaying = true;
    playToggle.textContent = '⏸';
    heroPlay.textContent = '⏸ 暂停';
    renderTable();

    startSynthChord(cur.chordFreqs);

    if (progressInterval) clearInterval(progressInterval);
    progressInterval = setInterval(() => {
      if (!isPlaying) return;
      playProgressSec++;
      if (playProgressSec > cur.dur) {
        playTrack((currentTrackIdx + 1) % tracks.length);
      } else {
        timeCur.textContent = formatSec(playProgressSec);
        const pct = (playProgressSec / cur.dur) * 100;
        scrubFill.style.width = `${pct}%`;
      }
    }, 1000);
  }

  function togglePlayPause() {
    if (isPlaying) {
      isPlaying = false;
      playToggle.textContent = '▶';
      heroPlay.textContent = '▶ 播放全部';
      stopSynth();
    } else {
      playTrack(currentTrackIdx);
    }
    renderTable();
  }

  playToggle.addEventListener('click', togglePlayPause);
  heroPlay.addEventListener('click', togglePlayPause);

  prevBtn.addEventListener('click', () => {
    const nextIdx = (currentTrackIdx - 1 + tracks.length) % tracks.length;
    playTrack(nextIdx);
  });

  nextBtn.addEventListener('click', () => {
    const nextIdx = (currentTrackIdx + 1) % tracks.length;
    playTrack(nextIdx);
  });

  heroShuffle.addEventListener('click', () => {
    const rnd = Math.floor(Math.random() * tracks.length);
    playTrack(rnd);
  });

  heartBtn.addEventListener('click', () => {
    heartBtn.textContent = heartBtn.textContent === '♡' ? '❤️' : '♡';
  });

  volSlider.addEventListener('input', () => {
    if (volGainNode) {
      const vol = (parseInt(volSlider.value, 10) || 75) / 100;
      volGainNode.gain.setValueAtTime(vol * 0.16, audioCtx.currentTime);
    }
  });

  scrubBar.addEventListener('click', (e) => {
    const rect = scrubBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    playProgressSec = Math.floor(ratio * tracks[currentTrackIdx].dur);
    timeCur.textContent = formatSec(playProgressSec);
    scrubFill.style.width = `${ratio * 100}%`;
  });

  // Cleanup on close
  win.addEventListener('remove', () => {
    stopSynth();
    if (progressInterval) clearInterval(progressInterval);
  });

  renderTable();
}

// Photo Booth (macOS Sequoia Design)
async function launchCamera() {
  const res = await window.aliceOS.pm.spawn('camera');
  if (res.success) {
    const pid = res.data.pid;
    let currentFilter = 'none';
    let photoCount = 1;
    let recentPhotos = [];

    const win = createWindow(pid, t('app_camera', 'Photo Booth'), `
      <div class="pb-app">
        <!-- Viewport -->
        <div class="pb-view-box" id="pb-view-${pid}">
          <video id="webcam-${pid}" autoplay playsinline style="width:100%;height:100%;object-fit:cover;transform:scaleX(-1);transition:filter 0.2s;"></video>
          <canvas id="pb-fallback-${pid}" width="640" height="480" style="display:none;width:100%;height:100%;object-fit:cover;"></canvas>
          
          <!-- 3-2-1 Countdown Overlay -->
          <div id="pb-countdown-${pid}" style="position:absolute;font-size:84px;font-weight:800;color:white;text-shadow:0 4px 20px rgba(0,0,0,0.6);display:none;align-items:center;justify-content:center;pointer-events:none;z-index:20;">3</div>
          
          <!-- Flash Overlay -->
          <div id="pb-flash-${pid}" style="position:absolute;top:0;left:0;width:100%;height:100%;background:white;opacity:0;pointer-events:none;z-index:30;transition:opacity 0.05s ease;"></div>
        </div>

        <!-- Filmstrip Tray -->
        <div id="pb-filmstrip-${pid}" style="height:56px;background:#18181b;border-top:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;gap:10px;padding:0 16px;overflow-x:auto;">
          <div style="font-size:11px;color:#71717a;font-weight:600;text-transform:uppercase;">Recent Shots</div>
          <div id="pb-filmstrip-items-${pid}" style="display:flex;align-items:center;gap:8px;"></div>
        </div>

        <!-- Bottom Controls Bar -->
        <div class="pb-bottom-bar">
          <!-- Effects Tray -->
          <div class="pb-effects-tray" id="pb-effects-${pid}">
            <div class="pb-effect-chip active" data-filter="none">Normal</div>
            <div class="pb-effect-chip" data-filter="sepia(0.85) contrast(1.1)">Sepia</div>
            <div class="pb-effect-chip" data-filter="grayscale(1) contrast(1.2)">Noir</div>
            <div class="pb-effect-chip" data-filter="invert(1) hue-rotate(180deg) saturate(3)">Thermal</div>
            <div class="pb-effect-chip" data-filter="contrast(2) saturate(2.5)">Pop Art</div>
            <div class="pb-effect-chip" data-filter="hue-rotate(90deg) contrast(1.3)">Cyber</div>
            <div class="pb-effect-chip" data-filter="invert(1)">Invert</div>
          </div>

          <!-- Shutter Button -->
          <button class="pb-shutter-btn" id="pb-shutter-${pid}" title="${t('pb_take_photo', 'Take Photo')}"></button>

          <!-- Timer Mode Toggle -->
          <div style="display:flex;align-items:center;gap:6px;">
            <button id="pb-timer-toggle-${pid}" style="background:rgba(255,255,255,0.12);border:none;color:white;padding:6px 14px;border-radius:14px;font-size:11px;font-weight:600;cursor:pointer;">⏱ 3s Timer: ON</button>
          </div>
        </div>
      </div>
    `);

    win.style.width = '680px';
    win.style.height = '540px';

    const video = win.querySelector(`#webcam-${pid}`);
    const fallbackCanvas = win.querySelector(`#pb-fallback-${pid}`);
    const shutterBtn = win.querySelector(`#pb-shutter-${pid}`);
    const countdownEl = win.querySelector(`#pb-countdown-${pid}`);
    const flashEl = win.querySelector(`#pb-flash-${pid}`);
    const timerToggle = win.querySelector(`#pb-timer-toggle-${pid}`);
    const filmstripItems = win.querySelector(`#pb-filmstrip-items-${pid}`);
    const effectChips = win.querySelectorAll('.pb-effect-chip');

    let useTimer = true;
    let cameraActive = false;

    // Try camera access or use Apple Studio Display simulated stream
    navigator.mediaDevices?.getUserMedia({ video: true })
      .then(stream => {
        video.srcObject = stream;
        cameraActive = true;
      })
      .catch(() => {
        // Fallback: animated Apple Studio Display Center Stage pattern
        video.style.display = 'none';
        fallbackCanvas.style.display = 'block';
        const ctx = fallbackCanvas.getContext('2d');
        let t = 0;
        const animInterval = setInterval(() => {
          if (!windows.has(pid)) {
            clearInterval(animInterval);
            return;
          }
          t += 0.03;
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(0, 0, 640, 480);

          // Animated Apple Studio Display graphics
          const grad = ctx.createRadialGradient(320, 240, 40, 320, 240, 260);
          grad.addColorStop(0, 'rgba(56, 189, 248, 0.25)');
          grad.addColorStop(1, 'rgba(15, 23, 42, 0.95)');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, 640, 480);

          // Studio circles
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(320, 240, 100 + Math.sin(t) * 10, 0, Math.PI * 2);
          ctx.stroke();

          // Face silhouette
          ctx.fillStyle = '#38bdf8';
          ctx.font = '72px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('👤', 320, 250);

          ctx.font = '16px -apple-system, sans-serif';
          ctx.fillStyle = '#94a3b8';
          ctx.fillText('Apple Studio Display • 12MP Center Stage', 320, 310);
        }, 50);
      });

    // Effect selection
    effectChips.forEach(chip => {
      chip.addEventListener('click', () => {
        effectChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentFilter = chip.getAttribute('data-filter');
        video.style.filter = currentFilter;
        fallbackCanvas.style.filter = currentFilter;
      });
    });

    timerToggle.addEventListener('click', () => {
      useTimer = !useTimer;
      timerToggle.innerText = useTimer ? '⏱ 3s Timer: ON' : '⏱ 3s Timer: OFF';
      timerToggle.style.background = useTimer ? 'rgba(0,122,255,0.4)' : 'rgba(255,255,255,0.12)';
    });

    function playShutterSound() {
      if (window.AppleAudioEngine) {
        window.AppleAudioEngine.playShutter();
      }
    }

    async function takeSnapshot() {
      playShutterSound();

      // Flash
      flashEl.style.opacity = '1';
      setTimeout(() => { flashEl.style.opacity = '0'; }, 120);

      const canvas = document.createElement('canvas');
      const w = cameraActive ? (video.videoWidth || 640) : 640;
      const h = cameraActive ? (video.videoHeight || 480) : 480;
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');

      if (currentFilter !== 'none') {
        ctx.filter = currentFilter;
      }
      if (cameraActive) {
        // Mirrored image
        ctx.translate(w, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(video, 0, 0, w, h);
      } else {
        ctx.drawImage(fallbackCanvas, 0, 0, w, h);
      }

      const dataUrl = canvas.toDataURL('image/png');
      const fileName = `Photo_${photoCount++}.png`;
      recentPhotos.push({ name: fileName, url: dataUrl });

      // Save to VFS
      try {
        await window.aliceOS.vfs.mkdir(`/Users/${currentUser}/Desktop`);
        await window.aliceOS.vfs.writeFile(`/Users/${currentUser}/Desktop/${fileName}`, dataUrl);
        if (typeof refreshDesktop === 'function') refreshDesktop();
        if (typeof showNotification === 'function') {
          showNotification(t('app_camera', 'Photo Booth'), `Saved "${fileName}" to Desktop`);
        }
      } catch (e) {}

      // Add to filmstrip
      const thumb = document.createElement('img');
      thumb.src = dataUrl;
      thumb.style.cssText = 'width:44px;height:44px;object-fit:cover;border-radius:6px;border:1px solid rgba(255,255,255,0.2);cursor:pointer;transition:transform 0.1s;';
      thumb.title = fileName;
      thumb.onclick = () => {
        if (typeof launchGallery === 'function') {
          launchGallery(`/Users/${currentUser}/Desktop/${fileName}`);
        }
      };
      thumb.onmouseenter = () => { thumb.style.transform = 'scale(1.1)'; };
      thumb.onmouseleave = () => { thumb.style.transform = 'scale(1)'; };
      filmstripItems.prepend(thumb);
    }

    shutterBtn.addEventListener('click', () => {
      if (useTimer) {
        shutterBtn.disabled = true;
        let count = 3;
        countdownEl.style.display = 'flex';
        countdownEl.innerText = count;

        const timer = setInterval(() => {
          count--;
          if (count > 0) {
            countdownEl.innerText = count;
          } else {
            clearInterval(timer);
            countdownEl.style.display = 'none';
            shutterBtn.disabled = false;
            takeSnapshot();
          }
        }, 800);
      } else {
        takeSnapshot();
      }
    });

    win._onLanguageChange = () => {
      const sBtn = win.querySelector(`#pb-shutter-${pid}`);
      if (sBtn) sBtn.title = t('pb_take_photo', 'Take Photo');
    };
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
// Activity Monitor - Full macOS Sequoia Fidelity
async function launchActivityMonitor() {
  const res = await window.aliceOS.pm.spawn('activity');
  if (res.success) {
    const pid = res.data.pid;
    let currentTab = 'cpu';
    let selectedPid = null;
    let searchQuery = '';

    const win = createWindow(pid, t('app_activity', '活动监视器'), `
      <div class="am-mac-app" id="am-app-${pid}">
        <!-- Top Toolbar -->
        <div class="am-topbar">
          <div class="am-tabs-group" id="am-tabs-${pid}">
            <button class="am-tab-btn active" data-tab="cpu">CPU</button>
            <button class="am-tab-btn" data-tab="memory">${currentSystemLang === 'zh' ? '内存' : 'Memory'}</button>
            <button class="am-tab-btn" data-tab="energy">${currentSystemLang === 'zh' ? '能耗' : 'Energy'}</button>
            <button class="am-tab-btn" data-tab="disk">${currentSystemLang === 'zh' ? '磁盘' : 'Disk'}</button>
            <button class="am-tab-btn" data-tab="network">${currentSystemLang === 'zh' ? '网络' : 'Network'}</button>
          </div>
          <div style="display:flex;align-items:center;gap:10px;">
            <button class="am-tool-btn danger" id="am-force-quit-${pid}" title="${currentSystemLang === 'zh' ? '强制退出选中的进程' : 'Force Quit Process'}">
              🛑 ${currentSystemLang === 'zh' ? '强制退出' : 'Force Quit'}
            </button>
            <input type="text" class="am-search-input" id="am-search-${pid}" placeholder="${currentSystemLang === 'zh' ? '搜索进程...' : 'Filter...'}" />
          </div>
        </div>

        <!-- Main Process Table -->
        <div class="am-table-wrap">
          <table class="am-mac-table" id="am-table-${pid}">
            <thead>
              <tr>
                <th style="min-width:170px;">${currentSystemLang === 'zh' ? '进程名称' : 'Process Name'}</th>
                <th style="width:70px;text-align:right;">% CPU</th>
                <th style="width:90px;text-align:right;">${currentSystemLang === 'zh' ? 'CPU 时间' : 'CPU Time'}</th>
                <th style="width:60px;text-align:right;">${currentSystemLang === 'zh' ? '线程' : 'Threads'}</th>
                <th style="width:85px;text-align:right;">${currentSystemLang === 'zh' ? '内存' : 'Memory'}</th>
                <th style="width:55px;text-align:right;">PID</th>
                <th style="width:90px;">${currentSystemLang === 'zh' ? '用户' : 'User'}</th>
              </tr>
            </thead>
            <tbody id="am-tbody-${pid}">
            </tbody>
          </table>
        </div>

        <!-- Bottom Tab Panel with Live Oscilloscope -->
        <div class="am-bottom-panel" id="am-bottom-${pid}">
          <div class="am-graph-box">
            <div style="display:flex;justify-content:space-between;margin-bottom:4px;font-size:11px;font-weight:600;opacity:0.85;">
              <span id="am-chart-title-${pid}">CPU 负载历史</span>
              <span id="am-chart-legend-${pid}" style="color:#38bdf8;">■ 用户   <span style="color:#f43f5e;">■ 系统</span></span>
            </div>
            <canvas id="am-canvas-${pid}" width="420" height="75" style="width:100%;height:75px;border-radius:6px;background:rgba(0,0,0,0.4);border:1px solid rgba(255,255,255,0.08);"></canvas>
          </div>
          <div class="am-stats-box" id="am-stats-${pid}">
            <!-- Dynamic stats populated by JS -->
          </div>
        </div>
      </div>
    `, 'activity');

    win.style.width = '780px';
    win.style.height = '520px';

    const tbody = win.querySelector(`#am-tbody-${pid}`);
    const canvas = win.querySelector(`#am-canvas-${pid}`);
    const ctx = canvas.getContext('2d');
    const searchInput = win.querySelector(`#am-search-${pid}`);
    const forceQuitBtn = win.querySelector(`#am-force-quit-${pid}`);
    const chartTitle = win.querySelector(`#am-chart-title-${pid}`);
    const chartLegend = win.querySelector(`#am-chart-legend-${pid}`);
    const statsBox = win.querySelector(`#am-stats-${pid}`);

    // History ring buffers for oscilloscope
    const cpuUserHistory = new Array(50).fill(8);
    const cpuSysHistory = new Array(50).fill(3);
    const memHistory = new Array(50).fill(40);
    const ioHistory = new Array(50).fill(5);

    const baseSystemProcs = [
      { name: 'kernel_task', cpu: 3.2, time: '2:14:02.18', threads: 284, mem: 1240, pid: 0, user: 'root', system: true },
      { name: 'launchd', cpu: 0.1, time: '0:01:14.30', threads: 4, mem: 18, pid: 1, user: 'root', system: true },
      { name: 'WindowServer', cpu: 7.4, time: '1:45:18.92', threads: 18, mem: 350, pid: 184, user: '_windowserver', system: true },
      { name: 'Dock', cpu: 0.8, time: '0:12:04.11', threads: 12, mem: 85, pid: 322, user: 'alice', system: true },
      { name: 'Finder', cpu: 1.2, time: '0:18:22.04', threads: 16, mem: 120, pid: 325, user: 'alice', system: true },
      { name: 'coreaudiod', cpu: 0.4, time: '0:04:32.88', threads: 8, mem: 45, pid: 210, user: '_coreaudiod', system: true },
      { name: 'mds_stores', cpu: 1.6, time: '0:35:10.55', threads: 14, mem: 95, pid: 198, user: 'root', system: true },
      { name: 'AliceOS Kernel', cpu: 2.1, time: '0:28:19.42', threads: 24, mem: 210, pid: 2, user: 'alice', system: true }
    ];

    // Search query listener
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      refreshProcesses();
    });

    // Tab switcher
    win.querySelectorAll('.am-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        win.querySelectorAll('.am-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTab = btn.dataset.tab;
        updateTabHeadings();
        refreshProcesses();
      });
    });

    function updateTabHeadings() {
      const isZh = currentSystemLang === 'zh';
      if (currentTab === 'cpu') {
        chartTitle.innerText = isZh ? 'CPU 负载历史' : 'CPU Load History';
        chartLegend.innerHTML = '<span style="color:#38bdf8;">■ 用户</span>   <span style="color:#f43f5e;">■ 系统</span>';
      } else if (currentTab === 'memory') {
        chartTitle.innerText = isZh ? '内存压力图' : 'Memory Pressure';
        chartLegend.innerHTML = '<span style="color:#30d158;">■ 内存压力 (正常)</span>';
      } else if (currentTab === 'energy') {
        chartTitle.innerText = isZh ? '系统能耗趋势' : 'Energy Impact';
        chartLegend.innerHTML = '<span style="color:#fbbf24;">■ 动态能耗指标</span>';
      } else if (currentTab === 'disk') {
        chartTitle.innerText = isZh ? '磁盘 I/O 吞吐' : 'Disk Activity';
        chartLegend.innerHTML = '<span style="color:#38bdf8;">■ 读入</span>   <span style="color:#f97316;">■ 写出</span>';
      } else if (currentTab === 'network') {
        chartTitle.innerText = isZh ? '网络数据通信量' : 'Network Activity';
        chartLegend.innerHTML = '<span style="color:#30d158;">■ 数据接收</span>   <span style="color:#a855f7;">■ 数据发送</span>';
      }
    }

    // Force Quit Process Handler
    forceQuitBtn.addEventListener('click', async () => {
      if (selectedPid === null) {
        showNotification(t('app_activity', '活动监视器'), currentSystemLang === 'zh' ? '请先在列表中选中要结束的进程。' : 'Please select a process in the list first.');
        return;
      }
      if (selectedPid === pid) {
        showNotification(t('app_activity', '活动监视器'), t('notif_cannot_kill_self', '无法直接终止活动监视器自身。'));
        return;
      }
      const isSys = baseSystemProcs.find(p => p.pid === selectedPid);
      if (isSys) {
        showNotification(t('app_activity', '活动监视器'), currentSystemLang === 'zh' ? `“${isSys.name}”是核心守护进程，无法强制退出。` : `"${isSys.name}" is a critical system service and cannot be quit.`);
        return;
      }

      await window.aliceOS.pm.kill(selectedPid);
      const targetWin = document.getElementById(`win-${selectedPid}`) || document.getElementById(`window-${selectedPid}`);
      if (targetWin) targetWin.remove();

      showNotification(t('app_activity', '活动监视器'), currentSystemLang === 'zh' ? `PID ${selectedPid} 进程已被强制退出。` : `PID ${selectedPid} was terminated.`);
      selectedPid = null;
      refreshProcesses();
    });

    async function refreshProcesses() {
      if (!windows.has(pid)) return; // App closed

      const isZh = currentSystemLang === 'zh';
      const hostInfo = await window.aliceOS.getHostInfo();
      let totalMemGb = 16.0;
      let usedMemGb = 8.2;

      if (hostInfo && hostInfo.success) {
        totalMemGb = (hostInfo.data.totalmem / (1024 * 1024 * 1024)).toFixed(1);
        usedMemGb = (totalMemGb - (hostInfo.data.freemem / (1024 * 1024 * 1024))).toFixed(1);
      }

      // Fetch dynamic active AliceOS apps
      let realProcs = [];
      const pRes = await window.aliceOS.pm.listProcesses();
      if (pRes.success) {
        realProcs = pRes.data.map(p => ({
          name: p.name.charAt(0).toUpperCase() + p.name.slice(1),
          cpu: parseFloat((Math.sin(p.pid + Date.now() / 3000) * 1.5 + 2.2).toFixed(1)),
          time: `0:0${(p.pid % 5) + 1}:${(p.pid * 7 % 50 + 10)}.${(p.pid * 13 % 80 + 10)}`,
          threads: (p.pid % 8) + 6,
          mem: Math.round(45 + (p.pid * 17 % 80)),
          pid: p.pid,
          user: 'alice',
          system: false
        }));
      }

      const allList = [...baseSystemProcs, ...realProcs];
      const filtered = searchQuery
        ? allList.filter(p => p.name.toLowerCase().includes(searchQuery) || String(p.pid).includes(searchQuery))
        : allList;

      // Render table rows
      tbody.innerHTML = filtered.map(p => {
        const isSel = p.pid === selectedPid;
        const iconHtml = (typeof getAppIconSvg === 'function' ? getAppIconSvg(p.name.toLowerCase(), 16) : '') || '⚙️';
        return `
          <tr class="${isSel ? 'selected' : ''}" data-pid="${p.pid}" style="cursor:pointer;">
            <td style="display:flex;align-items:center;gap:8px;font-weight:500;">
              <span style="width:16px;height:16px;display:flex;align-items:center;justify-content:center;">${iconHtml}</span>
              <span>${p.name}</span>
            </td>
            <td style="text-align:right;font-family:monospace;">${p.cpu.toFixed(1)}</td>
            <td style="text-align:right;font-family:monospace;opacity:0.8;">${p.time}</td>
            <td style="text-align:right;font-family:monospace;">${p.threads}</td>
            <td style="text-align:right;font-family:monospace;">${p.mem >= 1000 ? (p.mem / 1024).toFixed(2) + ' GB' : p.mem + ' MB'}</td>
            <td style="text-align:right;font-family:monospace;opacity:0.75;">${p.pid}</td>
            <td style="opacity:0.85;">${p.user}</td>
          </tr>
        `;
      }).join('');

      // Row Selection
      tbody.querySelectorAll('tr').forEach(tr => {
        tr.addEventListener('click', () => {
          tbody.querySelectorAll('tr').forEach(r => r.classList.remove('selected'));
          tr.classList.add('selected');
          selectedPid = parseInt(tr.dataset.pid);
        });
        tr.addEventListener('dblclick', () => {
          selectedPid = parseInt(tr.dataset.pid);
          forceQuitBtn.click();
        });
      });

      // Update Oscilloscope Buffers
      const userCpuAvg = (Math.random() * 6 + 10).toFixed(1);
      const sysCpuAvg = (Math.random() * 3 + 4).toFixed(1);
      cpuUserHistory.push(parseFloat(userCpuAvg));
      cpuUserHistory.shift();
      cpuSysHistory.push(parseFloat(sysCpuAvg));
      cpuSysHistory.shift();

      const memUsagePct = ((usedMemGb / totalMemGb) * 100).toFixed(1);
      memHistory.push(parseFloat(memUsagePct));
      memHistory.shift();

      const ioSample = (Math.random() * 8 + 4).toFixed(1);
      ioHistory.push(parseFloat(ioSample));
      ioHistory.shift();

      // Draw Oscilloscope Canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 1; i <= 3; i++) {
        const y = (i / 4) * canvas.height;
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      if (currentTab === 'cpu') {
        // Draw User CPU Line (Blue)
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        const step = canvas.width / (cpuUserHistory.length - 1);
        cpuUserHistory.forEach((val, i) => {
          const x = i * step;
          const y = canvas.height - (val / 100) * canvas.height;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.stroke();

        // Draw System CPU Line (Red)
        ctx.strokeStyle = '#f43f5e';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        cpuSysHistory.forEach((val, i) => {
          const x = i * step;
          const y = canvas.height - (val / 100) * canvas.height;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.stroke();

        // Bottom Stats Box
        statsBox.innerHTML = `
          <div class="am-stat-row"><span>${isZh ? '% 系统:' : '% System:'}</span><span style="font-weight:600;color:#f43f5e;">${sysCpuAvg}%</span></div>
          <div class="am-stat-row"><span>${isZh ? '% 用户:' : '% User:'}</span><span style="font-weight:600;color:#38bdf8;">${userCpuAvg}%</span></div>
          <div class="am-stat-row"><span>${isZh ? '% 空闲:' : '% Idle:'}</span><span style="font-weight:600;">${(100 - userCpuAvg - sysCpuAvg).toFixed(1)}%</span></div>
          <div class="am-stat-row"><span>${isZh ? '线程总数:' : 'Threads:'}</span><span>${allList.reduce((acc, p) => acc + p.threads, 0)}</span></div>
          <div class="am-stat-row"><span>${isZh ? '进程总数:' : 'Processes:'}</span><span>${allList.length}</span></div>
        `;
      } else if (currentTab === 'memory') {
        // Draw Memory Wave (Green with fill)
        ctx.strokeStyle = '#30d158';
        ctx.lineWidth = 2;
        ctx.beginPath();
        const step = canvas.width / (memHistory.length - 1);
        memHistory.forEach((val, i) => {
          const x = i * step;
          const y = canvas.height - (val / 100) * canvas.height;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.stroke();
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.fillStyle = 'rgba(48, 209, 88, 0.15)';
        ctx.fill();

        statsBox.innerHTML = `
          <div class="am-stat-row"><span>${isZh ? '物理内存:' : 'Physical Memory:'}</span><span style="font-weight:600;">${totalMemGb} GB</span></div>
          <div class="am-stat-row"><span>${isZh ? '已使用内存:' : 'Memory Used:'}</span><span style="font-weight:600;color:#30d158;">${usedMemGb} GB</span></div>
          <div class="am-stat-row"><span>${isZh ? 'App 内存:' : 'App Memory:'}</span><span>${(usedMemGb * 0.6).toFixed(2)} GB</span></div>
          <div class="am-stat-row"><span>${isZh ? '联动内存:' : 'Wired Memory:'}</span><span>${(usedMemGb * 0.25).toFixed(2)} GB</span></div>
          <div class="am-stat-row"><span>${isZh ? '已压缩:' : 'Compressed:'}</span><span>0.84 GB</span></div>
        `;
      } else if (currentTab === 'disk') {
        // Draw Disk Throughput
        ctx.strokeStyle = '#f97316';
        ctx.lineWidth = 2;
        ctx.beginPath();
        const step = canvas.width / (ioHistory.length - 1);
        ioHistory.forEach((val, i) => {
          const x = i * step;
          const y = canvas.height - (val / 20) * canvas.height;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.stroke();

        statsBox.innerHTML = `
          <div class="am-stat-row"><span>${isZh ? '读取速度:' : 'Reads in/sec:'}</span><span style="font-weight:600;">14.2 MB/s</span></div>
          <div class="am-stat-row"><span>${isZh ? '写入速度:' : 'Writes out/sec:'}</span><span style="font-weight:600;color:#f97316;">${ioSample} MB/s</span></div>
          <div class="am-stat-row"><span>${isZh ? '已读取数据:' : 'Data Read:'}</span><span>52.4 GB</span></div>
          <div class="am-stat-row"><span>${isZh ? '已写入数据:' : 'Data Written:'}</span><span>28.1 GB</span></div>
        `;
      } else {
        // Energy / Network
        ctx.strokeStyle = '#a855f7';
        ctx.lineWidth = 2;
        ctx.beginPath();
        const step = canvas.width / (ioHistory.length - 1);
        ioHistory.forEach((val, i) => {
          const x = i * step;
          const y = canvas.height - (val / 20) * canvas.height;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.stroke();

        statsBox.innerHTML = `
          <div class="am-stat-row"><span>${isZh ? '入站包/秒:' : 'Packets in/sec:'}</span><span style="font-weight:600;">840 pkts/s</span></div>
          <div class="am-stat-row"><span>${isZh ? '出站包/秒:' : 'Packets out/sec:'}</span><span style="font-weight:600;">320 pkts/s</span></div>
          <div class="am-stat-row"><span>${isZh ? '接收数据量:' : 'Data received:'}</span><span>4.12 GB</span></div>
          <div class="am-stat-row"><span>${isZh ? '发送数据量:' : 'Data sent:'}</span><span>1.48 GB</span></div>
        `;
      }

      setTimeout(refreshProcesses, 1800);
    }

    win._onLanguageChange = () => {
      win.querySelector('.title').innerText = t('app_activity', '活动监视器');
      updateTabHeadings();
      refreshProcesses();
    };

    updateTabHeadings();
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

// Photos & Markup Studio (macOS Sequoia Design)
async function launchPaint() {
  const res = await window.aliceOS.pm.spawn('paint');
  if (res.success) {
    const pid = res.data.pid;
    let currentTool = 'pen'; // pen, brush, highlighter, eraser, rect, circle
    let currentColor = '#007aff';
    let currentWidth = 5;
    let artworkCount = 1;
    let history = [];

    const win = createWindow(pid, t('app_paint', 'Photos & Markup'), `
      <div class="mac-markup-app">
        <!-- Floating Frosted Glass Toolbar -->
        <div class="mac-markup-toolbar">
          <!-- Tools Group -->
          <div class="mac-markup-toolgroup">
            <button class="mac-markup-tool-btn active" data-tool="pen" title="Pencil">✏️</button>
            <button class="mac-markup-tool-btn" data-tool="brush" title="Artist Brush">🖌️</button>
            <button class="mac-markup-tool-btn" data-tool="highlighter" title="Highlighter">🖍️</button>
            <button class="mac-markup-tool-btn" data-tool="eraser" title="Eraser">🧹</button>
            <button class="mac-markup-tool-btn" data-tool="rect" title="Rectangle">⬜</button>
            <button class="mac-markup-tool-btn" data-tool="circle" title="Circle">⭕</button>
          </div>

          <!-- Stroke Width Selector -->
          <div class="mac-markup-toolgroup">
            <button class="mac-markup-width-btn" data-width="2" style="background:transparent;border:none;color:#aaa;padding:4px 8px;font-size:11px;cursor:pointer;">Thin</button>
            <button class="mac-markup-width-btn active" data-width="5" style="background:#007aff;color:white;border:none;padding:4px 8px;border-radius:4px;font-size:11px;cursor:pointer;">Mid</button>
            <button class="mac-markup-width-btn" data-width="12" style="background:transparent;border:none;color:#aaa;padding:4px 8px;font-size:11px;cursor:pointer;">Bold</button>
            <button class="mac-markup-width-btn" data-width="24" style="background:transparent;border:none;color:#aaa;padding:4px 8px;font-size:11px;cursor:pointer;">Heavy</button>
          </div>

          <!-- Color Swatches -->
          <div class="mac-markup-colors">
            <div class="mac-markup-color-dot" data-color="#1d1d1f" style="background:#1d1d1f;"></div>
            <div class="mac-markup-color-dot" data-color="#8e8e93" style="background:#8e8e93;"></div>
            <div class="mac-markup-color-dot active" data-color="#007aff" style="background:#007aff;"></div>
            <div class="mac-markup-color-dot" data-color="#5856d6" style="background:#5856d6;"></div>
            <div class="mac-markup-color-dot" data-color="#af52de" style="background:#af52de;"></div>
            <div class="mac-markup-color-dot" data-color="#ff2d55" style="background:#ff2d55;"></div>
            <div class="mac-markup-color-dot" data-color="#ff9500" style="background:#ff9500;"></div>
            <div class="mac-markup-color-dot" data-color="#34c759" style="background:#34c759;"></div>
            <input type="color" id="paint-custom-color-${pid}" value="#007aff" style="width:20px;height:20px;padding:0;border:none;background:none;cursor:pointer;">
          </div>

          <!-- Actions -->
          <div style="display:flex;align-items:center;gap:6px;">
            <button id="paint-undo-${pid}" title="Undo" style="background:rgba(255,255,255,0.1);border:none;color:white;padding:5px 10px;border-radius:6px;font-size:12px;cursor:pointer;">↩️</button>
            <button id="paint-clear-${pid}" title="${t('paint_clear', 'Clear')}" style="background:rgba(255,255,255,0.1);border:none;color:white;padding:5px 10px;border-radius:6px;font-size:12px;cursor:pointer;">🗑</button>
            <button id="paint-save-${pid}" style="background:#007aff;color:white;border:none;padding:5px 14px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;">💾 ${t('notes_save', 'Save')}</button>
          </div>
        </div>

        <!-- Canvas Container -->
        <div class="mac-markup-canvas-wrap">
          <canvas id="paint-canvas-${pid}" width="800" height="520"></canvas>
        </div>
      </div>
    `);

    win.style.width = '840px';
    win.style.height = '600px';

    const canvas = win.querySelector(`#paint-canvas-${pid}`);
    const ctx = canvas.getContext('2d');
    const toolBtns = win.querySelectorAll('.mac-markup-tool-btn');
    const widthBtns = win.querySelectorAll('.mac-markup-width-btn');
    const colorDots = win.querySelectorAll('.mac-markup-color-dot');
    const customColor = win.querySelector(`#paint-custom-color-${pid}`);
    const clearBtn = win.querySelector(`#paint-clear-${pid}`);
    const undoBtn = win.querySelector(`#paint-undo-${pid}`);
    const saveBtn = win.querySelector(`#paint-save-${pid}`);

    // Fill initial canvas with clean white
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    saveState();

    function saveState() {
      if (history.length > 15) history.shift();
      history.push(canvas.toDataURL());
    }

    // Tool switching
    toolBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        toolBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTool = btn.getAttribute('data-tool');
      });
    });

    // Width switching
    widthBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        widthBtns.forEach(b => {
          b.classList.remove('active');
          b.style.background = 'transparent';
          b.style.color = '#aaa';
        });
        btn.classList.add('active');
        btn.style.background = '#007aff';
        btn.style.color = 'white';
        currentWidth = parseInt(btn.getAttribute('data-width'));
      });
    });

    // Color switching
    colorDots.forEach(dot => {
      dot.addEventListener('click', () => {
        colorDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        currentColor = dot.getAttribute('data-color');
      });
    });

    if (customColor) {
      customColor.addEventListener('input', (e) => {
        currentColor = e.target.value;
        colorDots.forEach(d => d.classList.remove('active'));
      });
    }

    let isDrawing = false;
    let startX = 0, startY = 0;
    let snapshot = null;

    function getCoords(e) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
      };
    }

    canvas.addEventListener('mousedown', (e) => {
      isDrawing = true;
      const pt = getCoords(e);
      startX = pt.x;
      startY = pt.y;

      if (currentTool === 'rect' || currentTool === 'circle') {
        snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
      } else {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
      }
    });

    canvas.addEventListener('mousemove', (e) => {
      if (!isDrawing) return;
      const pt = getCoords(e);

      if (currentTool === 'rect') {
        ctx.putImageData(snapshot, 0, 0);
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = currentWidth;
        ctx.strokeRect(startX, startY, pt.x - startX, pt.y - startY);
      } else if (currentTool === 'circle') {
        ctx.putImageData(snapshot, 0, 0);
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = currentWidth;
        const rx = Math.abs(pt.x - startX) / 2;
        const ry = Math.abs(pt.y - startY) / 2;
        const cx = Math.min(startX, pt.x) + rx;
        const cy = Math.min(startY, pt.y) + ry;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        ctx.stroke();
      } else if (currentTool === 'eraser') {
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = currentWidth * 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineTo(pt.x, pt.y);
        ctx.stroke();
      } else if (currentTool === 'highlighter') {
        ctx.strokeStyle = currentColor;
        ctx.globalAlpha = 0.35;
        ctx.lineWidth = currentWidth * 2.5;
        ctx.lineCap = 'square';
        ctx.lineTo(pt.x, pt.y);
        ctx.stroke();
        ctx.globalAlpha = 1.0;
      } else {
        // Pen / Brush with smooth curves
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = currentTool === 'brush' ? currentWidth * 1.6 : currentWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineTo(pt.x, pt.y);
        ctx.stroke();
      }
    });

    function endDrawing() {
      if (!isDrawing) return;
      isDrawing = false;
      ctx.closePath();
      saveState();
    }

    canvas.addEventListener('mouseup', endDrawing);
    canvas.addEventListener('mouseleave', endDrawing);

    undoBtn.addEventListener('click', () => {
      if (history.length > 1) {
        history.pop(); // remove current state
        const prevState = history[history.length - 1];
        const img = new Image();
        img.src = prevState;
        img.onload = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);
        };
      }
    });

    clearBtn.addEventListener('click', () => {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      saveState();
    });

    saveBtn.addEventListener('click', async () => {
      const dataUrl = canvas.toDataURL('image/png');
      const fileName = `Artwork_${artworkCount++}.png`;
      try {
        await window.aliceOS.vfs.mkdir(`/Users/${currentUser}/Desktop`);
        await window.aliceOS.vfs.writeFile(`/Users/${currentUser}/Desktop/${fileName}`, dataUrl);
        if (typeof refreshDesktop === 'function') refreshDesktop();
        if (typeof showNotification === 'function') {
          showNotification(t('app_paint', 'Photos & Markup'), `Saved "${fileName}" to Desktop`);
        }
      } catch (e) {}
    });

    win._onLanguageChange = () => {
      if (clearBtn) clearBtn.title = t('paint_clear', 'Clear');
      if (saveBtn) saveBtn.innerText = `💾 ${t('notes_save', 'Save')}`;
    };
  }
}

// Snake Game App (Apple Arcade Edition)
async function launchSnake() {
  const res = await window.aliceOS.pm.spawn('snake');
  if (res.success) {
    const pid = res.data.pid;
    let highScore = parseInt(localStorage.getItem('alice_snake_highscore') || '0', 10);
    let currentScore = 0;
    let isPaused = false;
    let isGameOver = false;
    let currentSpeed = 80; // ms per tick
    let currentTheme = 'cyber'; // cyber, garden, obsidian

    const win = createWindow(pid, t('app_snake', 'Snake Pro — Apple Arcade'), `
      <div class="mac-arcade-app">
        <!-- Arcade Header -->
        <div class="mac-arcade-header">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:28px;height:28px;background:linear-gradient(135deg,#ff2d55,#ff9500);border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:16px;box-shadow:0 2px 6px rgba(255,45,85,0.4);">🕹️</div>
            <div>
              <div style="font-size:13px;font-weight:700;letter-spacing:-0.2px;">Snake Pro</div>
              <div style="font-size:10px;color:#a1a1aa;">Apple Arcade • Game Center</div>
            </div>
          </div>

          <div style="display:flex;align-items:center;gap:8px;">
            <div class="mac-arcade-pill">
              <span style="color:#a1a1aa;">Score:</span>
              <span id="snake-score-${pid}" style="font-family:ui-monospace,SF Mono,monospace;font-weight:700;color:#34c759;">0</span>
            </div>
            <div class="mac-arcade-pill">
              <span style="color:#fbbf24;">🏆</span>
              <span id="snake-high-${pid}" style="font-family:ui-monospace,SF Mono,monospace;font-weight:700;color:#fbbf24;">${highScore}</span>
            </div>
          </div>

          <div style="display:flex;align-items:center;gap:8px;">
            <select id="snake-diff-${pid}" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);color:white;padding:3px 8px;border-radius:6px;font-size:11px;outline:none;cursor:pointer;">
              <option value="110">Casual</option>
              <option value="80" selected>Classic</option>
              <option value="50">Pro</option>
              <option value="35">Turbo</option>
            </select>
            <select id="snake-theme-${pid}" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);color:white;padding:3px 8px;border-radius:6px;font-size:11px;outline:none;cursor:pointer;">
              <option value="cyber">Neon Cyber</option>
              <option value="garden">Emerald Garden</option>
              <option value="obsidian">Obsidian Gold</option>
            </select>
            <button id="snake-pause-btn-${pid}" class="mac-arcade-btn" title="Pause / Resume">⏸️</button>
          </div>
        </div>

        <!-- Canvas Area -->
        <div style="flex:1;position:relative;display:flex;align-items:center;justify-content:center;background:#0d0e12;overflow:hidden;" id="snake-container-${pid}">
          <canvas id="snake-canvas-${pid}" width="480" height="420" style="background:#14161d;border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,0.6);border:1px solid rgba(255,255,255,0.06);"></canvas>
          
          <!-- Game Over Overlay -->
          <div id="snake-overlay-${pid}" class="mac-arcade-overlay" style="display:none;">
            <div style="background:rgba(28,28,32,0.95);border:1px solid rgba(255,255,255,0.15);border-radius:16px;padding:24px 32px;text-align:center;box-shadow:0 20px 50px rgba(0,0,0,0.8);max-width:320px;width:100%;">
              <div style="font-size:36px;margin-bottom:8px;" id="snake-overlay-icon-${pid}">💥</div>
              <h2 id="snake-overlay-title-${pid}" style="margin:0 0 6px 0;font-size:20px;font-weight:700;">Game Over</h2>
              <div id="snake-overlay-desc-${pid}" style="font-size:12px;color:#a1a1aa;margin-bottom:16px;">You collided with the wall!</div>
              
              <div style="background:rgba(255,255,255,0.05);border-radius:10px;padding:12px;margin-bottom:20px;display:flex;justify-content:space-around;">
                <div>
                  <div style="font-size:11px;color:#a1a1aa;">FINAL SCORE</div>
                  <div id="snake-final-score-${pid}" style="font-size:22px;font-weight:700;color:#34c759;">0</div>
                </div>
                <div style="width:1px;background:rgba(255,255,255,0.1);"></div>
                <div>
                  <div style="font-size:11px;color:#a1a1aa;">BEST RECORD</div>
                  <div id="snake-best-score-${pid}" style="font-size:22px;font-weight:700;color:#fbbf24;">${highScore}</div>
                </div>
              </div>

              <div style="display:flex;gap:10px;justify-content:center;">
                <button id="snake-restart-btn-${pid}" class="mac-arcade-btn primary" style="padding:8px 24px;font-size:13px;">Play Again</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Hint Bar -->
        <div style="height:28px;background:rgba(20,20,24,0.9);border-top:1px solid rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:space-between;padding:0 16px;font-size:11px;color:#71717a;">
          <span>Use <b>Arrow Keys</b> or <b>W/A/S/D</b> to steer</span>
          <span>Press <b>Space</b> to pause</span>
        </div>
      </div>
    `, 'snake');

    win.style.width = '560px';
    win.style.height = '540px';

    const canvas = win.querySelector(`#snake-canvas-${pid}`);
    const ctx = canvas.getContext('2d');
    const scoreEl = win.querySelector(`#snake-score-${pid}`);
    const highEl = win.querySelector(`#snake-high-${pid}`);
    const diffSelect = win.querySelector(`#snake-diff-${pid}`);
    const themeSelect = win.querySelector(`#snake-theme-${pid}`);
    const pauseBtn = win.querySelector(`#snake-pause-btn-${pid}`);
    const overlay = win.querySelector(`#snake-overlay-${pid}`);
    const overlayIcon = win.querySelector(`#snake-overlay-icon-${pid}`);
    const overlayTitle = win.querySelector(`#snake-overlay-title-${pid}`);
    const overlayDesc = win.querySelector(`#snake-overlay-desc-${pid}`);
    const finalScoreEl = win.querySelector(`#snake-final-score-${pid}`);
    const bestScoreEl = win.querySelector(`#snake-best-score-${pid}`);
    const restartBtn = win.querySelector(`#snake-restart-btn-${pid}`);

    // Audio synthesizer for sound effects
    let audioCtx = null;
    function playSfx(type) {
      try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        const t = audioCtx.currentTime;

        if (type === 'eat') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(440, t);
          osc.frequency.exponentialRampToValueAtTime(880, t + 0.12);
          gain.gain.setValueAtTime(0.2, t);
          gain.gain.exponentialRampToValueAtTime(0.01, t + 0.12);
          osc.start(t);
          osc.stop(t + 0.12);
        } else if (type === 'golden') {
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(587.33, t);
          osc.frequency.exponentialRampToValueAtTime(1174.66, t + 0.25);
          gain.gain.setValueAtTime(0.25, t);
          gain.gain.exponentialRampToValueAtTime(0.01, t + 0.25);
          osc.start(t);
          osc.stop(t + 0.25);
        } else if (type === 'crash') {
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(160, t);
          osc.frequency.exponentialRampToValueAtTime(40, t + 0.3);
          gain.gain.setValueAtTime(0.3, t);
          gain.gain.exponentialRampToValueAtTime(0.01, t + 0.3);
          osc.start(t);
          osc.stop(t + 0.3);
        }
      } catch (e) {}
    }

    // Game grid & state
    const gridSize = 20;
    const cols = canvas.width / gridSize;
    const rows = canvas.height / gridSize;

    let snake = [];
    let dir = { x: 1, y: 0 };
    let nextDir = { x: 1, y: 0 };
    let food = { x: 10, y: 10, isGolden: false };
    let particles = [];
    let gameTimer = null;

    function initGame() {
      snake = [
        { x: 8, y: 10 },
        { x: 7, y: 10 },
        { x: 6, y: 10 },
        { x: 5, y: 10 }
      ];
      dir = { x: 1, y: 0 };
      nextDir = { x: 1, y: 0 };
      currentScore = 0;
      scoreEl.innerText = '0';
      isGameOver = false;
      isPaused = false;
      overlay.style.display = 'none';
      pauseBtn.innerText = '⏸️';
      spawnFood();
      render();
      startGameLoop();
    }

    function spawnFood() {
      let valid = false;
      while (!valid) {
        food.x = Math.floor(Math.random() * cols);
        food.y = Math.floor(Math.random() * rows);
        food.isGolden = Math.random() < 0.15; // 15% chance for golden star apple
        valid = !snake.some(seg => seg.x === food.x && seg.y === food.y);
      }
    }

    function createParticles(x, y, color) {
      for (let i = 0; i < 14; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        particles.push({
          x: x * gridSize + gridSize / 2,
          y: y * gridSize + gridSize / 2,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1.0,
          decay: Math.random() * 0.05 + 0.02,
          color: color,
          size: Math.random() * 3 + 2
        });
      }
    }

    function update() {
      if (isPaused || isGameOver) return;

      dir = nextDir;
      const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

      // Wall collision
      if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows) {
        gameOver('Wall Collision');
        return;
      }

      // Self collision
      if (snake.some(seg => seg.x === head.x && seg.y === head.y)) {
        gameOver('Self Collision');
        return;
      }

      snake.unshift(head);

      // Check food
      if (head.x === food.x && head.y === food.y) {
        const pts = food.isGolden ? 50 : 10;
        currentScore += pts;
        scoreEl.innerText = currentScore;
        if (currentScore > highScore) {
          highScore = currentScore;
          highEl.innerText = highScore;
          localStorage.setItem('alice_snake_highscore', highScore.toString());
        }
        createParticles(food.x, food.y, food.isGolden ? '#fbbf24' : '#ff453a');
        playSfx(food.isGolden ? 'golden' : 'eat');
        spawnFood();
      } else {
        snake.pop();
      }

      // Update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        if (p.life <= 0) particles.splice(i, 1);
      }
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid background pattern
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Themes
      let headColor = '#007aff';
      let bodyGradStart = '#34c759';
      let bodyGradEnd = '#30b0c7';
      if (currentTheme === 'cyber') {
        headColor = '#00f2fe';
        bodyGradStart = '#4facfe';
        bodyGradEnd = '#00f2fe';
      } else if (currentTheme === 'garden') {
        headColor = '#34c759';
        bodyGradStart = '#30d158';
        bodyGradEnd = '#248a3d';
      } else if (currentTheme === 'obsidian') {
        headColor = '#ffd60a';
        bodyGradStart = '#ff9f0a';
        bodyGradEnd = '#d97706';
      }

      // Draw Food (Apple)
      const fx = food.x * gridSize + gridSize / 2;
      const fy = food.y * gridSize + gridSize / 2;
      ctx.save();
      if (food.isGolden) {
        // Golden Star Apple with glowing halo
        ctx.shadowColor = '#fbbf24';
        ctx.shadowBlur = 12;
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(fx, fy, gridSize * 0.42, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('★', fx, fy);
      } else {
        // Juicy Apple with leaf & stem
        ctx.shadowColor = '#ff453a';
        ctx.shadowBlur = 10;
        ctx.fillStyle = '#ff3b30';
        ctx.beginPath();
        ctx.arc(fx, fy + 1, gridSize * 0.4, 0, Math.PI * 2);
        ctx.fill();
        // Leaf
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#34c759';
        ctx.beginPath();
        ctx.ellipse(fx + 3, fy - 6, 4, 2, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
        // Stem
        ctx.fillStyle = '#8b5a2b';
        ctx.fillRect(fx - 1, fy - 7, 2, 4);
      }
      ctx.restore();

      // Draw Snake Body
      snake.forEach((seg, i) => {
        const sx = seg.x * gridSize;
        const sy = seg.y * gridSize;
        ctx.save();
        if (i === 0) {
          // Snake Head
          ctx.shadowColor = headColor;
          ctx.shadowBlur = 12;
          ctx.fillStyle = headColor;
          ctx.beginPath();
          ctx.roundRect(sx + 1, sy + 1, gridSize - 2, gridSize - 2, 6);
          ctx.fill();

          // Eyes
          ctx.shadowBlur = 0;
          ctx.fillStyle = '#ffffff';
          let ex1 = sx + 5, ey1 = sy + 5, ex2 = sx + 13, ey2 = sy + 5;
          if (dir.x === 1) { ex1 = sx + 12; ey1 = sy + 5; ex2 = sx + 12; ey2 = sy + 13; }
          else if (dir.x === -1) { ex1 = sx + 6; ey1 = sy + 5; ex2 = sx + 6; ey2 = sy + 13; }
          else if (dir.y === 1) { ex1 = sx + 5; ey1 = sy + 12; ex2 = sx + 13; ey2 = sy + 12; }
          ctx.beginPath();
          ctx.arc(ex1, ey1, 2.5, 0, Math.PI * 2);
          ctx.arc(ex2, ey2, 2.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#000';
          ctx.beginPath();
          ctx.arc(ex1, ey1, 1.2, 0, Math.PI * 2);
          ctx.arc(ex2, ey2, 1.2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Snake Segments with gradient color transition
          const factor = i / snake.length;
          ctx.fillStyle = bodyGradStart;
          ctx.beginPath();
          ctx.roundRect(sx + 2, sy + 2, gridSize - 4, gridSize - 4, 4);
          ctx.fill();
        }
        ctx.restore();
      });

      // Draw Particles
      particles.forEach(p => {
        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    }

    function gameOver(reason) {
      isGameOver = true;
      clearInterval(gameTimer);
      playSfx('crash');
      finalScoreEl.innerText = currentScore;
      bestScoreEl.innerText = highScore;
      overlayTitle.innerText = currentScore >= highScore && currentScore > 0 ? '🎉 New Record!' : 'Game Over';
      overlayDesc.innerText = reason === 'Wall Collision' ? 'You collided with the boundary!' : 'You ran into yourself!';
      overlayIcon.innerText = currentScore >= highScore && currentScore > 0 ? '🏆' : '💥';
      overlay.style.display = 'flex';
    }

    function togglePause() {
      if (isGameOver) return;
      isPaused = !isPaused;
      pauseBtn.innerText = isPaused ? '▶️' : '⏸️';
      if (isPaused) {
        overlayTitle.innerText = 'Game Paused';
        overlayDesc.innerText = 'Press Space or click Resume to continue';
        overlayIcon.innerText = '⏸️';
        finalScoreEl.innerText = currentScore;
        bestScoreEl.innerText = highScore;
        restartBtn.innerText = 'Resume';
        overlay.style.display = 'flex';
      } else {
        overlay.style.display = 'none';
        restartBtn.innerText = 'Play Again';
      }
    }

    function startGameLoop() {
      clearInterval(gameTimer);
      gameTimer = setInterval(() => {
        if (!windows.has(pid)) {
          clearInterval(gameTimer);
          return;
        }
        update();
        render();
      }, currentSpeed);
    }

    // Input handling
    win.setAttribute('tabindex', '0');
    win.focus();
    win.addEventListener('keydown', (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
      }
      if (e.key === ' ' || e.code === 'Space') {
        if (isGameOver) {
          initGame();
        } else {
          togglePause();
        }
        return;
      }
      if (isPaused || isGameOver) return;

      if ((e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') && dir.y === 0) {
        nextDir = { x: 0, y: -1 };
      } else if ((e.key === 'ArrowDown' || e.key.toLowerCase() === 's') && dir.y === 0) {
        nextDir = { x: 0, y: 1 };
      } else if ((e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') && dir.x === 0) {
        nextDir = { x: -1, y: 0 };
      } else if ((e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') && dir.x === 0) {
        nextDir = { x: 1, y: 0 };
      }
    });

    diffSelect.addEventListener('change', () => {
      currentSpeed = parseInt(diffSelect.value, 10);
      if (!isGameOver && !isPaused) startGameLoop();
    });

    themeSelect.addEventListener('change', () => {
      currentTheme = themeSelect.value;
      render();
    });

    pauseBtn.addEventListener('click', togglePause);

    restartBtn.addEventListener('click', () => {
      if (isPaused) {
        togglePause();
      } else {
        initGame();
      }
    });

    initGame();
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

// ==========================================================
// System Audio Engine (Apple High-Fidelity Synthetic Acoustics - macOS Sequoia Edition)
// ==========================================================
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const AppleAudioEngine = {
  settings: {
    soundEffectsEnabled: true,
    volumeFeedbackEnabled: true,
    touchHapticsEnabled: true,
    hapticStrength: 'medium', // 'light', 'medium', 'heavy'
    masterVolume: 0.9
  },

  ensureCtx() {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
  },

  // 1. Apple Magic Trackpad / Taptic Engine Click (The authentic macOS touch/click sound)
  playHapticClick(forceStrength) {
    if (!this.settings.touchHapticsEnabled && !this.settings.soundEffectsEnabled) return;
    try {
      this.ensureCtx();
      const t = audioCtx.currentTime;
      const strength = forceStrength || this.settings.hapticStrength;
      const isHeavy = strength === 'heavy';
      const isLight = strength === 'light';

      // (A) Micro-impulse transient (Glass surface contact impact: ~2.2ms bandpass noise)
      const bufSize = Math.max(1, Math.floor(audioCtx.sampleRate * 0.0025));
      const buf = audioCtx.createBuffer(1, bufSize, audioCtx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < bufSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (audioCtx.sampleRate * 0.0005));
      }
      const noise = audioCtx.createBufferSource();
      noise.buffer = buf;
      const bFilter = audioCtx.createBiquadFilter();
      bFilter.type = 'bandpass';
      bFilter.frequency.setValueAtTime(isLight ? 2900 : (isHeavy ? 2000 : 2400), t);
      bFilter.Q.setValueAtTime(2.2, t);

      const nGain = audioCtx.createGain();
      const nVol = (isLight ? 0.10 : (isHeavy ? 0.25 : 0.16)) * this.settings.masterVolume;
      nGain.gain.setValueAtTime(nVol, t);
      nGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.0025);

      noise.connect(bFilter);
      bFilter.connect(nGain);
      nGain.connect(audioCtx.destination);
      noise.start(t);

      // (B) Low-frequency chassis inertia body ("thump/thock": 155Hz damped triangle wave)
      const osc = audioCtx.createOscillator();
      const oGain = audioCtx.createGain();
      const lFilter = audioCtx.createBiquadFilter();

      osc.type = 'triangle';
      const baseF = isLight ? 185 : (isHeavy ? 135 : 155);
      osc.frequency.setValueAtTime(baseF, t);
      osc.frequency.exponentialRampToValueAtTime(baseF * 0.7, t + 0.012);

      lFilter.type = 'lowpass';
      lFilter.frequency.setValueAtTime(360, t);

      const oVol = (isLight ? 0.12 : (isHeavy ? 0.28 : 0.18)) * this.settings.masterVolume;
      oGain.gain.setValueAtTime(oVol, t);
      oGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.014);

      osc.connect(lFilter);
      lFilter.connect(oGain);
      oGain.connect(audioCtx.destination);

      osc.start(t);
      osc.stop(t + 0.015);
    } catch(e) {}
  },

  // 2. Official macOS "Pop" (The iconic volume feedback and popover sound)
  playPop(scale = 1.0) {
    if (!this.settings.volumeFeedbackEnabled && !this.settings.soundEffectsEnabled) return;
    try {
      this.ensureCtx();
      const t = audioCtx.currentTime;

      // Authentic Apple Pop: Warm, hollow acoustic wooden/bubble resonance around 640Hz
      const osc1 = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      const filter = audioCtx.createBiquadFilter();
      const gain = audioCtx.createGain();

      // Primary formant with slight pitch curve
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(670, t);
      osc1.frequency.exponentialRampToValueAtTime(510, t + 0.038);

      // Second harmonic giving the wooden/bubble body
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1340, t);
      osc2.frequency.exponentialRampToValueAtTime(1020, t + 0.025);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(640, t);
      filter.Q.setValueAtTime(3.0, t);

      const vol = 0.26 * scale * this.settings.masterVolume;
      gain.gain.setValueAtTime(vol, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      osc1.start(t);
      osc2.start(t);
      osc1.stop(t + 0.042);
      osc2.stop(t + 0.042);
    } catch(e) {}
  },

  // Throttled volume pop for smooth dragging on volume sliders
  _lastVolPopTime: 0,
  playThrottledVolumePop(scale = 1.0) {
    const now = performance.now();
    if (now - this._lastVolPopTime > 55) {
      this._lastVolPopTime = now;
      this.playPop(scale);
    }
  },

  // 3. Official macOS "Tink" (Glass Bell Chime)
  playTink() {
    if (!this.settings.soundEffectsEnabled) return;
    try {
      this.ensureCtx();
      const t = audioCtx.currentTime;
      [
        { freq: 2093.0, vol: 0.22, dur: 0.24 }, // C7
        { freq: 4186.0, vol: 0.07, dur: 0.12 }, // C8
        { freq: 6279.0, vol: 0.02, dur: 0.05 }  // G8
      ].forEach(comp => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(comp.freq, t);
        gain.gain.setValueAtTime(comp.vol * this.settings.masterVolume, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + comp.dur);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(t);
        osc.stop(t + comp.dur + 0.01);
      });
    } catch(e) {}
  },

  // 4. Official macOS / iOS Switch Click (Control Center & Settings toggle)
  playSwitch(isOn = true) {
    if (!this.settings.soundEffectsEnabled) return;
    try {
      this.ensureCtx();
      const t = audioCtx.currentTime;
      const f1 = isOn ? 1900 : 1400;
      const f2 = isOn ? 2500 : 1100;
      this._playMicroImpulse(t, f1, 0.14);
      this._playMicroImpulse(t + 0.012, f2, 0.09);
    } catch(e) {}
  },

  _playMicroImpulse(t, freq, vol) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, t);
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq, t);
    filter.Q.setValueAtTime(2.0, t);
    gain.gain.setValueAtTime(vol * this.settings.masterVolume, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.008);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + 0.01);
  },

  // 5. Official macOS "Trash" (Paper Crumple / Wastebasket)
  playTrash() {
    if (!this.settings.soundEffectsEnabled) return;
    try {
      this.ensureCtx();
      const t = audioCtx.currentTime;
      [
        { delay: 0, dur: 0.14, fStart: 1600, fEnd: 500, vol: 0.3 },
        { delay: 0.035, dur: 0.11, fStart: 2400, fEnd: 800, vol: 0.22 },
        { delay: 0.075, dur: 0.16, fStart: 950, fEnd: 280, vol: 0.35 }
      ].forEach(layer => {
        const bufSize = Math.max(1, Math.floor(audioCtx.sampleRate * layer.dur));
        const buf = audioCtx.createBuffer(1, bufSize, audioCtx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < bufSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (audioCtx.sampleRate * (layer.dur * 0.35)));
        }
        const noise = audioCtx.createBufferSource();
        noise.buffer = buf;
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(layer.fStart, t + layer.delay);
        filter.frequency.exponentialRampToValueAtTime(layer.fEnd, t + layer.delay + layer.dur);
        filter.Q.setValueAtTime(2.5, t + layer.delay);

        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(layer.vol * this.settings.masterVolume, t + layer.delay);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + layer.delay + layer.dur);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);
        noise.start(t + layer.delay);
      });
    } catch(e) {}
  },

  // 6. Official macOS / iOS Shutter (SLR Mirror & Dual Curtain Shutter)
  playShutter() {
    if (!this.settings.soundEffectsEnabled) return;
    try {
      this.ensureCtx();
      const t = audioCtx.currentTime;
      // Curtain 1 Snap
      this._playShutterBlade(t, 3200, 0.35);
      // Low mirror slap
      const osc = audioCtx.createOscillator();
      const oGain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(180, t + 0.015);
      osc.frequency.exponentialRampToValueAtTime(60, t + 0.045);
      oGain.gain.setValueAtTime(0.22 * this.settings.masterVolume, t + 0.015);
      oGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
      osc.connect(oGain);
      oGain.connect(audioCtx.destination);
      osc.start(t + 0.015);
      osc.stop(t + 0.055);

      // Curtain 2 Catch
      this._playShutterBlade(t + 0.052, 2600, 0.38);
    } catch(e) {}
  },

  _playShutterBlade(t, freq, vol) {
    const bufSize = Math.max(1, Math.floor(audioCtx.sampleRate * 0.035));
    const buf = audioCtx.createBuffer(1, bufSize, audioCtx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (audioCtx.sampleRate * 0.007));
    }
    const noise = audioCtx.createBufferSource();
    noise.buffer = buf;
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq, t);
    filter.Q.setValueAtTime(2.2, t);
    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(vol * this.settings.masterVolume, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.035);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);
    noise.start(t);
  },

  // 7. Official macOS Notification & AirDrop Chord (Pure Apple Chime)
  playAirDrop() {
    if (!this.settings.soundEffectsEnabled) return;
    try {
      this.ensureCtx();
      const t = audioCtx.currentTime;
      [
        { freq: 739.99, start: 0, dur: 0.28, vol: 0.22 },     // F#5
        { freq: 1108.73, start: 0.12, dur: 0.45, vol: 0.28 },  // C#6
        { freq: 1479.98, start: 0.13, dur: 0.32, vol: 0.09 }   // F#6 (shimmer)
      ].forEach(note => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(note.freq, t + note.start);
        gain.gain.setValueAtTime(0.001, t + note.start);
        gain.gain.linearRampToValueAtTime(note.vol * this.settings.masterVolume, t + note.start + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + note.start + note.dur);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(t + note.start);
        osc.stop(t + note.start + note.dur + 0.01);
      });
    } catch(e) {}
  },

  // 8. Official macOS Glass Chime (Bell)
  playGlassChime() {
    this.playTink();
  }
};

window.AppleAudioEngine = AppleAudioEngine;
window.appleAudio = AppleAudioEngine;

// Backward compatible aliases
function playClickSound(strength) {
  AppleAudioEngine.playHapticClick(strength);
}
window.playClickSound = playClickSound;

// Global macOS Haptic Touch & UI Click Dispatcher
// When user taps/clicks any interactive element or touchscreen:
let lastGlobalClickTime = 0;
function handleGlobalTouchInteraction(e) {
  const now = performance.now();
  if (now - lastGlobalClickTime < 35) return; // Prevent double-trigger from pointer+mouse redundancy

  const target = e.target;
  if (!target) return;

  // Never play sound when typing in text fields
  if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
    return;
  }

  // Identify interactive macOS UI elements
  const isInteractive = !!target.closest(
    'button, a, select, [role="button"], .dock-icon, .menu-item, .ventura-nav-item, ' +
    '.ventura-card, .ventura-row, .control, .mac-tab, .cc-icon-btn, .cc-card, .cc-slider, ' +
    '.finder-item, .window-titlebar, .widget, .btn, .qt-track-pill, .mac-qt-btn, ' +
    '.finder-view-btn, .finder-tag-circle, .tab, .seg-btn, .calc-btn, ' +
    '[onclick], [data-tab], [data-action], [data-app]'
  );

  // If interactive element, or direct physical touchscreen tap, trigger authentic Apple Haptic Click!
  if (isInteractive || e.pointerType === 'touch') {
    lastGlobalClickTime = now;
    const isFirm = !!target.closest('.control.close, .finder-open-btn, .bold, .calc-op');
    AppleAudioEngine.playHapticClick(isFirm ? 'heavy' : 'medium');
  }
}

document.addEventListener('pointerdown', handleGlobalTouchInteraction, { capture: true, passive: true });

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
  if (window.AppleAudioEngine) window.AppleAudioEngine.playAirDrop();
  else if (typeof playClickSound === 'function') playClickSound();
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
      addResult(getAppIconSvg(app.id, 28), app.name, spotDict.spotlight_app || 'Application', () => eval(app.action));
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

// Apple Maps (macOS Sequoia Design)
async function launchMaps() {
  const res = await window.aliceOS.pm.spawn('maps');
  if (res.success) {
    const pid = res.data.pid;
    let currentMode = 'explore';
    let zoomLevel = 0.04;

    const landmarks = [
      { id: 'applepark', name: 'Apple Park', city: 'Cupertino, California', lat: 37.3346, lon: -122.0090, icon: '🏢', rating: '4.9 ★ (28.4K)', desc: 'Iconic ring-shaped headquarters of Apple Inc., featuring the Steve Jobs Theater and lush central park.', hours: 'Open today • Closes 6 PM' },
      { id: 'forbiddencity', name: 'Forbidden City', city: 'Beijing, China', lat: 39.9163, lon: 116.3972, icon: '🏮', rating: '4.9 ★ (42.1K)', desc: 'Imperial palace complex from the Ming to the Qing dynasties, the heart of historical Beijing.', hours: 'Open today • Closes 5 PM' },
      { id: 'orientalpearl', name: 'Oriental Pearl Tower', city: 'Shanghai, China', lat: 31.2397, lon: 121.4998, icon: '🗼', rating: '4.8 ★ (19.8K)', desc: 'Futuristic 468m television tower dominating the Lujiazui skyline with panoramic glass skywalks.', hours: 'Open today • Closes 9:30 PM' },
      { id: 'eiffel', name: 'Eiffel Tower', city: 'Paris, France', lat: 48.8584, lon: 2.2945, icon: '🗼', rating: '4.8 ★ (85.2K)', desc: 'Wrought-iron lattice tower on the Champ de Mars, the world-renowned symbol of Paris.', hours: 'Open today • Closes 11:45 PM' },
      { id: 'shibuya', name: 'Shibuya Crossing', city: 'Tokyo, Japan', lat: 35.6595, lon: 139.7005, icon: '🏙️', rating: '4.7 ★ (31.5K)', desc: 'Famous scramble intersection outside Shibuya Station surrounded by neon billboards and vibrant culture.', hours: 'Open 24 hours' },
      { id: 'bigben', name: 'Big Ben & Westminster', city: 'London, UK', lat: 51.5007, lon: -0.1246, icon: '🕰️', rating: '4.8 ★ (39.0K)', desc: 'The Great Bell and clock tower at the north end of the Houses of Parliament on the River Thames.', hours: 'Open today • Tours available' }
    ];

    let currentLat = landmarks[0].lat;
    let currentLon = landmarks[0].lon;
    let selectedLandmark = landmarks[0];

    const win = createWindow(pid, t('app_maps', 'Maps'), `
      <div class="mac-maps-app">
        <!-- Floating Glass Sidebar -->
        <div class="mac-maps-floating-sidebar" id="maps-sidebar-${pid}">
          <div class="mac-maps-search-box">
            <span style="font-size:13px;opacity:0.6;">🔍</span>
            <input type="text" id="maps-search-${pid}" placeholder="${t('maps_search_placeholder', 'Search Maps or enter address')}" style="flex:1;border:none;background:transparent;outline:none;font-size:12px;color:inherit;">
          </div>

          <!-- Mode Selector Segmented Control -->
          <div style="display:flex;background:rgba(0,0,0,0.06);padding:3px;border-radius:10px;gap:2px;">
            <button class="mac-maps-mode-btn active" data-mode="explore" style="flex:1;border:none;background:white;padding:4px 0;border-radius:7px;font-size:11px;font-weight:600;cursor:pointer;box-shadow:0 1px 4px rgba(0,0,0,0.08);">${t('maps_mode_explore', 'Explore')}</button>
            <button class="mac-maps-mode-btn" data-mode="driving" style="flex:1;border:none;background:transparent;padding:4px 0;border-radius:7px;font-size:11px;font-weight:500;cursor:pointer;color:#555;">${t('maps_mode_drive', 'Drive')}</button>
            <button class="mac-maps-mode-btn" data-mode="transit" style="flex:1;border:none;background:transparent;padding:4px 0;border-radius:7px;font-size:11px;font-weight:500;cursor:pointer;color:#555;">${t('maps_mode_transit', 'Transit')}</button>
            <button class="mac-maps-mode-btn" data-mode="satellite" style="flex:1;border:none;background:transparent;padding:4px 0;border-radius:7px;font-size:11px;font-weight:500;cursor:pointer;color:#555;">${t('maps_mode_sat', 'Satellite')}</button>
          </div>

          <!-- Active Landmark Detail Card -->
          <div id="maps-landmark-card-${pid}" style="background:white;padding:12px;border-radius:12px;border:1px solid rgba(0,0,0,0.06);box-shadow:0 4px 12px rgba(0,0,0,0.05);">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
              <div id="maps-card-icon-${pid}" style="font-size:28px;">🏢</div>
              <div style="flex:1;min-width:0;">
                <div id="maps-card-title-${pid}" style="font-size:14px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">Apple Park</div>
                <div id="maps-card-city-${pid}" style="font-size:11px;color:#6e6e73;">Cupertino, California</div>
              </div>
            </div>
            <div id="maps-card-rating-${pid}" style="font-size:11px;font-weight:600;color:#ff9500;margin-bottom:4px;">4.9 ★ (28.4K)</div>
            <div id="maps-card-hours-${pid}" style="font-size:11px;color:#34c759;font-weight:500;margin-bottom:6px;">Open today • Closes 6 PM</div>
            <div id="maps-card-desc-${pid}" style="font-size:11px;color:#3a3a3c;line-height:1.4;margin-bottom:10px;">Iconic ring-shaped headquarters of Apple Inc., featuring the Steve Jobs Theater and lush central park.</div>
            <div style="display:flex;gap:6px;">
              <button id="maps-btn-directions-${pid}" style="flex:1;background:#007aff;color:white;border:none;padding:6px 0;border-radius:8px;font-size:11px;font-weight:600;cursor:pointer;">${t('maps_directions', 'Directions')}</button>
              <button id="maps-btn-lookaround-${pid}" style="background:rgba(0,122,255,0.1);color:#007aff;border:none;padding:6px 12px;border-radius:8px;font-size:11px;font-weight:600;cursor:pointer;">👓 Look Around</button>
            </div>
          </div>

          <!-- Featured Landmarks Section -->
          <div style="font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:0.5px;margin-top:4px;">${t('maps_featured_places', 'World Landmarks')}</div>
          <div id="maps-landmarks-list-${pid}" style="display:flex;flex-direction:column;gap:4px;">
            ${landmarks.map(lm => `
              <div class="mac-maps-landmark-item" data-id="${lm.id}">
                <span style="font-size:20px;">${lm.icon}</span>
                <div style="flex:1;min-width:0;">
                  <div style="font-size:12px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${lm.name}</div>
                  <div style="font-size:10px;color:#8e8e93;">${lm.city}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Floating Map Controls -->
        <div class="mac-maps-controls">
          <button class="mac-maps-ctrl-btn" id="maps-ctrl-compass-${pid}" title="${t('maps_compass', 'Compass')}">🧭</button>
          <button class="mac-maps-ctrl-btn" id="maps-ctrl-zoomin-${pid}" title="${t('maps_zoomin', 'Zoom In')}">＋</button>
          <button class="mac-maps-ctrl-btn" id="maps-ctrl-zoomout-${pid}" title="${t('maps_zoomout', 'Zoom Out')}">－</button>
          <button class="mac-maps-ctrl-btn" id="maps-ctrl-loc-${pid}" title="${t('maps_my_location', 'Current Location')}">📍</button>
        </div>

        <!-- Interactive Map Frame -->
        <div style="width:100%;height:100%;position:relative;background:#e5e3df;">
          <iframe id="maps-frame-${pid}" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style="width:100%;height:100%;border:none;"></iframe>
          <div style="position:absolute;bottom:4px;right:10px;font-size:10px;color:#666;background:rgba(255,255,255,0.7);padding:2px 8px;border-radius:6px;backdrop-filter:blur(8px);">© Apple Maps / OpenStreetMap contributors</div>
        </div>
      </div>
    `);

    win.style.width = '840px';
    win.style.height = '540px';

    const mapFrame = win.querySelector(`#maps-frame-${pid}`);
    const searchInp = win.querySelector(`#maps-search-${pid}`);
    const cardIcon = win.querySelector(`#maps-card-icon-${pid}`);
    const cardTitle = win.querySelector(`#maps-card-title-${pid}`);
    const cardCity = win.querySelector(`#maps-card-city-${pid}`);
    const cardRating = win.querySelector(`#maps-card-rating-${pid}`);
    const cardHours = win.querySelector(`#maps-card-hours-${pid}`);
    const cardDesc = win.querySelector(`#maps-card-desc-${pid}`);
    const modeBtns = win.querySelectorAll('.mac-maps-mode-btn');

    function updateMapIframe() {
      const bbox = `${currentLon - zoomLevel}%2C${currentLat - zoomLevel}%2C${currentLon + zoomLevel}%2C${currentLat + zoomLevel}`;
      let layer = 'mapnik';
      if (currentMode === 'satellite' || currentMode === 'transit') layer = 'transportmap';
      mapFrame.src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=${layer}&marker=${currentLat}%2C${currentLon}`;
    }

    function selectLandmark(lm) {
      selectedLandmark = lm;
      currentLat = lm.lat;
      currentLon = lm.lon;
      zoomLevel = 0.025;

      if (cardIcon) cardIcon.innerText = lm.icon;
      if (cardTitle) cardTitle.innerText = lm.name;
      if (cardCity) cardCity.innerText = lm.city;
      if (cardRating) cardRating.innerText = lm.rating;
      if (cardHours) cardHours.innerText = lm.hours;
      if (cardDesc) cardDesc.innerText = lm.desc;

      updateMapIframe();
    }

    // Connect landmark items
    win.querySelectorAll('.mac-maps-landmark-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        const lm = landmarks.find(l => l.id === id);
        if (lm) selectLandmark(lm);
      });
    });

    // Map controls
    win.querySelector(`#maps-ctrl-zoomin-${pid}`).addEventListener('click', () => {
      zoomLevel = Math.max(0.005, zoomLevel * 0.6);
      updateMapIframe();
    });

    win.querySelector(`#maps-ctrl-zoomout-${pid}`).addEventListener('click', () => {
      zoomLevel = Math.min(0.5, zoomLevel * 1.6);
      updateMapIframe();
    });

    win.querySelector(`#maps-ctrl-compass-${pid}`).addEventListener('click', () => {
      selectLandmark(landmarks[0]);
    });

    win.querySelector(`#maps-ctrl-loc-${pid}`).addEventListener('click', async () => {
      try {
        const geoReq = await fetch('https://get.geojs.io/v1/ip/geo.json');
        const geo = await geoReq.json();
        currentLat = parseFloat(geo.latitude);
        currentLon = parseFloat(geo.longitude);
        zoomLevel = 0.05;
        if (cardTitle) cardTitle.innerText = geo.city || 'Your Location';
        if (cardCity) cardCity.innerText = `${geo.region}, ${geo.country}`;
        if (cardDesc) cardDesc.innerText = `IP Geolocation: ${geo.ip}`;
        updateMapIframe();
      } catch (e) {
        selectLandmark(landmarks[0]);
      }
    });

    // Mode Buttons
    modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modeBtns.forEach(b => {
          b.style.background = 'transparent';
          b.style.color = '#555';
          b.style.boxShadow = 'none';
        });
        btn.style.background = 'white';
        btn.style.color = '#1d1d1f';
        btn.style.boxShadow = '0 1px 4px rgba(0,0,0,0.08)';
        currentMode = btn.getAttribute('data-mode');
        updateMapIframe();
      });
    });

    // Search filter
    if (searchInp) {
      searchInp.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const q = searchInp.value.toLowerCase().trim();
          const match = landmarks.find(l => l.name.toLowerCase().includes(q) || l.city.toLowerCase().includes(q));
          if (match) {
            selectLandmark(match);
          } else {
            // Recenter or open map search
            updateMapIframe();
          }
        }
      });
    }

    // Try fetching initial user location quietly in background, else use Apple Park
    fetch('https://get.geojs.io/v1/ip/geo.json')
      .then(r => r.json())
      .then(geo => {
        if (geo && geo.latitude && geo.longitude) {
          currentLat = parseFloat(geo.latitude);
          currentLon = parseFloat(geo.longitude);
          if (cardTitle) cardTitle.innerText = geo.city;
          if (cardCity) cardCity.innerText = `${geo.region}, ${geo.country}`;
          if (cardDesc) cardDesc.innerText = `Your location (${geo.ip})`;
          updateMapIframe();
        }
      })
      .catch(() => {
        // Default Apple Park
        selectLandmark(landmarks[0]);
      });

    // Initial load
    selectLandmark(landmarks[0]);

    win._onLanguageChange = () => {
      const sInp = win.querySelector(`#maps-search-${pid}`);
      if (sInp) sInp.placeholder = t('maps_search_placeholder', 'Search Maps or enter address');
    };
  }
}

// QuickTime Player (macOS Sequoia Design)
async function launchVideo() {
  const res = await window.aliceOS.pm.spawn('video');
  if (res.success) {
    const pid = res.data.pid;
    const mediaTracks = [
      { id: 'sequoia', title: 'macOS Sequoia Keynote & Intelligence', src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4', icon: '<svg viewBox="0 0 384 512" width="10.5" height="14" fill="currentColor" style="display:inline-block;vertical-align:-1.5px;margin-right:2px;"><path d="M318.7 268.7c-.2-36.2 16.4-61.2 41.2-90.8-23.7-34.7-59.4-48.4-100.1-49.9-42.8-1.5-82.5 25.5-102.8 25.5-20.4 0-51.9-25.2-85.3-24.5-43.7 1-84.5 25.7-107.4 64.9-46.3 79.9-11.8 196.4 32.7 261.3 21.6 31.4 47.4 66.8 81.6 65.5 32.2-1.3 44.5-20.7 83.1-20.7 38.6 0 49.9 20.7 84 20.7 35.3 0 57.1-32.9 78.9-64.4 24.9-36.3 35.1-71.5 35.5-73.4-.9-.3-52.9-20.4-53.2-80.4zM245.9 83.1c17.5-21.2 29.3-50.6 26.1-79.9-25.2 1-55.7 16.7-73.8 37.7-16.1 18.5-29.3 48.7-25.6 78 28.2 2.1 55.7-16.1 73.3-35.8z"/></svg>' },
      { id: 'bunny', title: 'Big Buck Bunny (Apple 4K ProRes)', src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', icon: '🎬' },
      { id: 'tears', title: 'Tears of Steel (Sci-Fi Cinema)', src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', icon: '🚀' }
    ];
    let currentTrack = mediaTracks[0];

    const win = createWindow(pid, t('app_video', 'QuickTime Player'), `
      <div class="mac-qt-app" id="qt-app-${pid}">
        <!-- Top Track Selector -->
        <div style="position:absolute;top:12px;left:14px;right:14px;z-index:20;display:flex;align-items:center;justify-content:space-between;pointer-events:none;">
          <div style="display:flex;background:rgba(20,20,24,0.75);backdrop-filter:blur(25px);border:1px solid rgba(255,255,255,0.15);padding:3px;border-radius:12px;pointer-events:auto;gap:2px;">
            ${mediaTracks.map((t, idx) => `
              <button class="qt-track-pill ${idx === 0 ? 'active' : ''}" data-idx="${idx}" style="border:none;background:${idx === 0 ? 'rgba(255,255,255,0.2)' : 'transparent'};color:white;padding:4px 10px;border-radius:8px;font-size:11px;font-weight:600;cursor:pointer;">${t.icon} ${t.title.split(' ')[0]}</button>
            `).join('')}
          </div>
          <div style="display:flex;gap:6px;pointer-events:auto;">
            <button id="qt-pip-${pid}" style="background:rgba(20,20,24,0.75);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.15);color:white;padding:4px 10px;border-radius:10px;font-size:11px;cursor:pointer;">⤢ PiP</button>
          </div>
        </div>

        <!-- Viewport -->
        <div class="mac-qt-viewport" id="qt-viewport-${pid}">
          <video id="qt-video-${pid}" width="100%" height="100%" autoplay style="width:100%;height:100%;object-fit:contain;background:black;">
            <source src="${currentTrack.src}" type="video/mp4">
          </video>
          <canvas id="qt-canvas-fallback-${pid}" width="800" height="480" style="display:none;width:100%;height:100%;object-fit:cover;"></canvas>
        </div>

        <!-- QuickTime Floating Glass HUD -->
        <div class="mac-qt-hud" id="qt-hud-${pid}">
          <button class="mac-qt-btn" id="qt-rewind-${pid}" title="Rewind 10s">↺ 10</button>
          <button class="mac-qt-btn" id="qt-play-btn-${pid}" style="font-size:20px;" title="Play/Pause">⏸</button>
          <button class="mac-qt-btn" id="qt-forward-${pid}" title="Forward 10s">↻ 10</button>

          <!-- Scrubber -->
          <div style="display:flex;align-items:center;gap:8px;">
            <span id="qt-cur-time-${pid}" style="font-size:11px;font-variant-numeric:tabular-nums;opacity:0.8;">0:00</span>
            <input type="range" id="qt-scrub-${pid}" min="0" max="100" value="0" style="width:200px;cursor:pointer;accent-color:#007aff;">
            <span id="qt-dur-time-${pid}" style="font-size:11px;font-variant-numeric:tabular-nums;opacity:0.8;">0:00</span>
          </div>

          <!-- Volume -->
          <div style="display:flex;align-items:center;gap:6px;">
            <span style="font-size:12px;opacity:0.8;">🔊</span>
            <input type="range" id="qt-vol-${pid}" min="0" max="1" step="0.05" value="0.8" style="width:60px;cursor:pointer;accent-color:#007aff;">
          </div>

          <!-- Speed Pill -->
          <button id="qt-speed-${pid}" style="background:rgba(255,255,255,0.12);border:none;color:white;padding:3px 8px;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;">1.0x</button>
        </div>
      </div>
    `);

    win.style.width = '820px';
    win.style.height = '520px';

    const videoEl = win.querySelector(`#qt-video-${pid}`);
    const canvasFallback = win.querySelector(`#qt-canvas-fallback-${pid}`);
    const playBtn = win.querySelector(`#qt-play-btn-${pid}`);
    const rewindBtn = win.querySelector(`#qt-rewind-${pid}`);
    const forwardBtn = win.querySelector(`#qt-forward-${pid}`);
    const scrubBar = win.querySelector(`#qt-scrub-${pid}`);
    const curTimeTxt = win.querySelector(`#qt-cur-time-${pid}`);
    const durTimeTxt = win.querySelector(`#qt-dur-time-${pid}`);
    const volBar = win.querySelector(`#qt-vol-${pid}`);
    const speedBtn = win.querySelector(`#qt-speed-${pid}`);
    const pipBtn = win.querySelector(`#qt-pip-${pid}`);
    const trackPills = win.querySelectorAll('.qt-track-pill');

    let isPlaying = true;
    let fallbackAnim = null;

    function formatTime(s) {
      if (isNaN(s) || !isFinite(s)) return '0:00';
      const m = Math.floor(s / 60);
      const sec = Math.floor(s % 60);
      return `${m}:${sec < 10 ? '0' : ''}${sec}`;
    }

    videoEl.addEventListener('loadedmetadata', () => {
      durTimeTxt.innerText = formatTime(videoEl.duration);
    });

    videoEl.addEventListener('timeupdate', () => {
      if (!scrubBar.matches(':active')) {
        const pct = (videoEl.currentTime / videoEl.duration) * 100 || 0;
        scrubBar.value = pct;
      }
      curTimeTxt.innerText = formatTime(videoEl.currentTime);
    });

    videoEl.addEventListener('error', () => {
      // Remote video failed or blocked -> switch smoothly to Apple Retina visualizer animation
      videoEl.style.display = 'none';
      canvasFallback.style.display = 'block';
      const ctx = canvasFallback.getContext('2d');
      let angle = 0;
      fallbackAnim = setInterval(() => {
        if (!windows.has(pid)) {
          clearInterval(fallbackAnim);
          return;
        }
        angle += 0.02;
        ctx.fillStyle = '#09090b';
        ctx.fillRect(0, 0, 800, 480);

        const grad = ctx.createRadialGradient(400, 240, 20, 400, 240, 320);
        grad.addColorStop(0, 'rgba(0, 122, 255, 0.35)');
        grad.addColorStop(0.6, 'rgba(88, 86, 214, 0.2)');
        grad.addColorStop(1, '#09090b');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 800, 480);

        // Apple Silicon M4 3D rotating rings
        ctx.lineWidth = 3;
        for (let i = 0; i < 4; i++) {
          ctx.strokeStyle = i % 2 === 0 ? '#38bdf8' : '#a855f7';
          ctx.beginPath();
          ctx.ellipse(400, 240, 140 + i * 25, 60 + i * 15, angle + i * 0.4, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.font = 'bold 24px -apple-system, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.fillText('macOS Sequoia Keynote & Intelligence', 400, 245);
        ctx.font = '13px -apple-system, sans-serif';
        ctx.fillStyle = '#a1a1aa';
        ctx.fillText('Apple ProRes Cinema • 4K HDR High Quality Render', 400, 275);
      }, 40);
    });

    playBtn.addEventListener('click', () => {
      if (isPlaying) {
        videoEl.pause();
        playBtn.innerText = '▶';
      } else {
        videoEl.play();
        playBtn.innerText = '⏸';
      }
      isPlaying = !isPlaying;
    });

    rewindBtn.addEventListener('click', () => {
      videoEl.currentTime = Math.max(0, videoEl.currentTime - 10);
    });

    forwardBtn.addEventListener('click', () => {
      videoEl.currentTime = Math.min(videoEl.duration, videoEl.currentTime + 10);
    });

    scrubBar.addEventListener('input', () => {
      const targetTime = (scrubBar.value / 100) * videoEl.duration;
      videoEl.currentTime = targetTime;
    });

    volBar.addEventListener('input', () => {
      videoEl.volume = parseFloat(volBar.value);
    });

    const speeds = [1.0, 1.25, 1.5, 2.0, 0.5];
    let speedIdx = 0;
    speedBtn.addEventListener('click', () => {
      speedIdx = (speedIdx + 1) % speeds.length;
      const s = speeds[speedIdx];
      videoEl.playbackRate = s;
      speedBtn.innerText = `${s}x`;
    });

    pipBtn.addEventListener('click', () => {
      if (typeof openPiP === 'function') {
        openPiP(currentTrack.src, currentTrack.title, videoEl.currentTime);
        videoEl.pause();
        playBtn.innerText = '▶';
        isPlaying = false;
      }
    });

    trackPills.forEach(pill => {
      pill.addEventListener('click', () => {
        trackPills.forEach(p => {
          p.style.background = 'transparent';
        });
        pill.style.background = 'rgba(255,255,255,0.2)';
        const idx = parseInt(pill.getAttribute('data-idx'));
        currentTrack = mediaTracks[idx];
        videoEl.src = currentTrack.src;
        videoEl.play();
        isPlaying = true;
        playBtn.innerText = '⏸';
      });
    });

    win._onLanguageChange = () => {
      win.querySelector('.title').innerText = t('app_video', 'QuickTime Player');
    };
  }
}

// AirDrop Radar & Nearby Devices (macOS Sequoia Design)
async function launchRadar() {
  const res = await window.aliceOS.pm.spawn('radar');
  if (res.success) {
    const pid = res.data.pid;
    const nearbyDevices = [
      { id: 'mbp', name: "John's MacBook Pro", type: 'MacBook Pro (16-inch, 2024)', icon: '💻', dist: 70, angle: 0.5, battery: '92%', signal: '-42 dBm' },
      { id: 'iphone', name: "Alice's iPhone 16 Pro", type: 'iPhone (iOS 18.1)', icon: '📱', dist: 110, angle: 2.1, battery: '85%', signal: '-38 dBm' },
      { id: 'ipad', name: "Studio iPad Pro", type: 'iPad Pro (M4)', icon: '📱', dist: 95, angle: 3.8, battery: '78%', signal: '-55 dBm' },
      { id: 'airpods', name: "AirPods Max", type: 'AirPods Max (USB-C)', icon: '🎧', dist: 50, angle: 5.2, battery: '98%', signal: '-31 dBm' },
      { id: 'watch', name: "Apple Watch Ultra 2", type: 'watchOS 11', icon: '⌚', dist: 130, angle: 4.3, battery: '64%', signal: '-62 dBm' }
    ];
    let selectedDevice = nearbyDevices[0];

    const win = createWindow(pid, t('app_radar', 'AirDrop Radar'), `
      <div class="mac-radar-app">
        <!-- Top Toolbar -->
        <div style="height:46px;background:rgba(25,25,28,0.85);backdrop-filter:blur(25px);border-bottom:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:space-between;padding:0 16px;z-index:10;">
          <div style="font-size:13px;font-weight:600;display:flex;align-items:center;gap:8px;">
            <span>📡</span> <span>AirDrop & Wireless Discovery</span>
          </div>
          <div style="display:flex;align-items:center;gap:8px;font-size:11px;color:#a1a1aa;">
            <span>Discoverable by:</span>
            <select id="radar-vis-${pid}" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);color:white;padding:3px 8px;border-radius:6px;font-size:11px;outline:none;">
              <option value="all">Everyone</option>
              <option value="contacts">Contacts Only</option>
              <option value="none">No One</option>
            </select>
          </div>
        </div>

        <!-- Radar Canvas & Device Overlay -->
        <div class="mac-radar-canvas-wrap" id="radar-wrap-${pid}">
          <canvas id="radar-canvas-${pid}" width="480" height="380"></canvas>
          <div id="radar-devices-container-${pid}" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;"></div>
        </div>

        <!-- Selected Device Action Bar -->
        <div style="height:64px;background:rgba(20,20,24,0.9);border-top:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:space-between;padding:0 20px;z-index:10;">
          <div style="display:flex;align-items:center;gap:12px;">
            <div id="radar-dev-icon-${pid}" style="font-size:32px;">💻</div>
            <div>
              <div id="radar-dev-name-${pid}" style="font-size:13px;font-weight:700;">John's MacBook Pro</div>
              <div id="radar-dev-info-${pid}" style="font-size:11px;color:#a1a1aa;">MacBook Pro (16-inch, 2024) • Battery 92% • Signal -42 dBm</div>
            </div>
          </div>
          <button id="radar-send-btn-${pid}" style="background:#007aff;color:white;border:none;padding:7px 18px;border-radius:14px;font-size:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:6px;transition:background 0.15s;">
            <span>📤</span> <span>Share via AirDrop</span>
          </button>
        </div>
      </div>
    `);

    win.style.width = '700px';
    win.style.height = '520px';

    const canvas = win.querySelector(`#radar-canvas-${pid}`);
    const ctx = canvas.getContext('2d');
    const devContainer = win.querySelector(`#radar-devices-container-${pid}`);
    const devIcon = win.querySelector(`#radar-dev-icon-${pid}`);
    const devName = win.querySelector(`#radar-dev-name-${pid}`);
    const devInfo = win.querySelector(`#radar-dev-info-${pid}`);
    const sendBtn = win.querySelector(`#radar-send-btn-${pid}`);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    let waveRadius = 0;

    function renderDeviceElements() {
      devContainer.innerHTML = '';
      nearbyDevices.forEach(d => {
        const x = cx + Math.cos(d.angle) * d.dist;
        const y = cy + Math.sin(d.angle) * d.dist;

        const devEl = document.createElement('div');
        devEl.className = 'mac-radar-device';
        devEl.style.left = `${x - 24}px`;
        devEl.style.top = `${y - 24}px`;
        devEl.style.pointerEvents = 'auto';
        devEl.innerHTML = `
          <div style="width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.12);backdrop-filter:blur(15px);border:1px solid rgba(255,255,255,0.25);display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 4px 16px rgba(0,0,0,0.5);">
            ${d.icon}
          </div>
          <div style="font-size:10px;font-weight:600;color:white;margin-top:4px;text-align:center;text-shadow:0 2px 4px rgba(0,0,0,0.8);white-space:nowrap;">
            ${d.name.split("'s")[0]}
          </div>
        `;
        devEl.onclick = () => {
          selectedDevice = d;
          devIcon.innerText = d.icon;
          devName.innerText = d.name;
          devInfo.innerText = `${d.type} • Battery ${d.battery} • Signal ${d.signal}`;
        };
        devContainer.appendChild(devEl);
      });
    }

    renderDeviceElements();

    let animId;
    function drawRadar() {
      if (!windows.has(pid)) {
        cancelAnimationFrame(animId);
        return;
      }

      ctx.fillStyle = '#101014';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Radar Concentric Circles
      ctx.strokeStyle = 'rgba(0, 122, 255, 0.15)';
      ctx.lineWidth = 1;
      [40, 80, 120, 160].forEach(r => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Crosshairs
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.beginPath();
      ctx.moveTo(cx, 20); ctx.lineTo(cx, canvas.height - 20);
      ctx.moveTo(40, cy); ctx.lineTo(canvas.width - 40, cy);
      ctx.stroke();

      // Pulsing Sonar Ripple
      waveRadius += 1.2;
      if (waveRadius > 180) waveRadius = 0;

      const rippleGrad = ctx.createRadialGradient(cx, cy, Math.max(0, waveRadius - 30), cx, cy, waveRadius);
      rippleGrad.addColorStop(0, 'rgba(0, 122, 255, 0)');
      rippleGrad.addColorStop(0.8, 'rgba(56, 189, 248, 0.3)');
      rippleGrad.addColorStop(1, 'rgba(0, 122, 255, 0)');

      ctx.strokeStyle = rippleGrad;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(cx, cy, waveRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Center (This Mac)
      ctx.fillStyle = '#007aff';
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.fill();

      animId = requestAnimationFrame(drawRadar);
    }

    drawRadar();

    sendBtn.addEventListener('click', () => {
      sendBtn.innerHTML = '<span>⏳</span> <span>Sending...</span>';
      sendBtn.style.opacity = '0.7';

      setTimeout(() => {
        sendBtn.innerHTML = '<span>✓</span> <span>Sent!</span>';
        sendBtn.style.background = '#34c759';
        sendBtn.style.opacity = '1';

        if (typeof sendAirDrop === 'function') {
          sendAirDrop(selectedDevice.name, selectedDevice.icon);
        } else {
          if (typeof showNotification === 'function') {
            showNotification('AirDrop', `Sent file to ${selectedDevice.name}`);
          }
        }

        setTimeout(() => {
          sendBtn.innerHTML = '<span>📤</span> <span>Share via AirDrop</span>';
          sendBtn.style.background = '#007aff';
        }, 1800);
      }, 700);
    });

    win._onLanguageChange = () => {
      win.querySelector('.title').innerText = t('app_radar', 'AirDrop Radar');
    };
  }
}

// Apple System Information (macOS Sequoia Design)
async function launchHostMonitor() {
  const res = await window.aliceOS.pm.spawn('hostmonitor');
  if (res.success) {
    const pid = res.data.pid;
    const hostRes = await window.aliceOS.getHostInfo();
    const data = (hostRes && hostRes.success) ? hostRes.data : {
      platform: 'darwin',
      release: '24.1.0',
      arch: 'arm64',
      hostname: "Alice's MacBook Pro",
      uptime: 3600,
      totalmem: 34359738368,
      freemem: 17179869184,
      cpus: [{ model: 'Apple M3 Ultra (16-core CPU, 40-core GPU)' }, {}, {}, {}],
      network: {}
    };

    const memGb = (data.totalmem / (1024 * 1024 * 1024)).toFixed(2);
    const freeGb = (data.freemem / (1024 * 1024 * 1024)).toFixed(2);
    const cpuModel = data.cpus[0]?.model || 'Apple M3 Ultra (16-core CPU)';
    const cores = data.cpus.length || 16;

    let activeCategory = 'hardware';

    const win = createWindow(pid, t('host_title', 'System Information'), `
      <div class="mac-sysinfo-app">
        <!-- Sidebar -->
        <div class="mac-sysinfo-sidebar">
          <div style="font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:0.5px;padding:4px 8px;">Hardware</div>
          <div class="mac-sysinfo-item active" data-cat="hardware">
            <span>💻</span> <span>Hardware Overview</span>
          </div>
          <div class="mac-sysinfo-item" data-cat="memory">
            <span>🧠</span> <span>Memory & CPU</span>
          </div>
          <div class="mac-sysinfo-item" data-cat="graphics">
            <span>⚡</span> <span>Graphics & Displays</span>
          </div>
          <div class="mac-sysinfo-item" data-cat="storage">
            <span>💿</span> <span>Storage Volumes</span>
          </div>

          <div style="font-size:11px;font-weight:700;color:#8e8e93;text-transform:uppercase;letter-spacing:0.5px;padding:12px 8px 4px;">Network & Software</div>
          <div class="mac-sysinfo-item" data-cat="network">
            <span>🌐</span> <span>Network & AirPort</span>
          </div>
          <div class="mac-sysinfo-item" data-cat="software">
            <span>⚙️</span> <span>Software & Kernel</span>
          </div>
        </div>

        <!-- Detail Table Content Area -->
        <div class="mac-sysinfo-content" id="sysinfo-content-${pid}">
          <!-- Rendered dynamically -->
        </div>
      </div>
    `);

    win.style.width = '840px';
    win.style.height = '540px';

    const contentEl = win.querySelector(`#sysinfo-content-${pid}`);
    const navItems = win.querySelectorAll('.mac-sysinfo-item');

    function renderCategory(cat) {
      if (cat === 'hardware') {
        contentEl.innerHTML = `
          <div>
            <h2 style="margin:0 0 4px;font-size:18px;">Hardware Overview</h2>
            <div style="font-size:12px;color:#6e6e73;margin-bottom:16px;">Detailed architecture specifications for this Apple Silicon system.</div>
            <table class="mac-sysinfo-table">
              <tr><td class="mac-sysinfo-label">Model Name:</td><td>MacBook Pro</td></tr>
              <tr><td class="mac-sysinfo-label">Model Identifier:</td><td>MacBookPro18,2 (Alice Edition)</td></tr>
              <tr><td class="mac-sysinfo-label">Model Number:</td><td>Z15G000EG/A</td></tr>
              <tr><td class="mac-sysinfo-label">Chip:</td><td>${cpuModel}</td></tr>
              <tr><td class="mac-sysinfo-label">Total Number of Cores:</td><td>${cores} (${Math.floor(cores * 0.75)} performance and ${Math.ceil(cores * 0.25)} efficiency)</td></tr>
              <tr><td class="mac-sysinfo-label">Memory:</td><td>${memGb} GB Unified Memory</td></tr>
              <tr><td class="mac-sysinfo-label">System Firmware Version:</td><td>10151.41.12</td></tr>
              <tr><td class="mac-sysinfo-label">OS Loader Version:</td><td>10151.41.12</td></tr>
              <tr><td class="mac-sysinfo-label">Serial Number (system):</td><td>C02G80X0MD6R</td></tr>
              <tr><td class="mac-sysinfo-label">Hardware UUID:</td><td>4A8E9B12-9F1C-4B7C-A5A2-F9D8A2B93012</td></tr>
              <tr><td class="mac-sysinfo-label">Activation Lock Status:</td><td><span style="color:#34c759;font-weight:600;">● Enabled</span></td></tr>
            </table>
          </div>
        `;
      } else if (cat === 'memory') {
        contentEl.innerHTML = `
          <div>
            <h2 style="margin:0 0 4px;font-size:18px;">Memory & Processor Telemetry</h2>
            <div style="font-size:12px;color:#6e6e73;margin-bottom:16px;">Real-time host physical RAM and CPU core status.</div>
            <table class="mac-sysinfo-table">
              <tr><td class="mac-sysinfo-label">Installed RAM:</td><td>${memGb} GB Unified LPDDR5X</td></tr>
              <tr><td class="mac-sysinfo-label">Available Free RAM:</td><td>${freeGb} GB</td></tr>
              <tr><td class="mac-sysinfo-label">Memory Speed:</td><td>6400 MT/s Dual-Channel</td></tr>
              <tr><td class="mac-sysinfo-label">Host CPU Architecture:</td><td>${data.arch} (${data.platform})</td></tr>
              <tr><td class="mac-sysinfo-label">System Uptime:</td><td>${Math.floor(data.uptime / 60)} minutes</td></tr>
            </table>
          </div>
        `;
      } else if (cat === 'graphics') {
        contentEl.innerHTML = `
          <div>
            <h2 style="margin:0 0 4px;font-size:18px;">Graphics & Built-in Retina Display</h2>
            <div style="font-size:12px;color:#6e6e73;margin-bottom:16px;">Liquid Retina XDR Display with ProMotion 120Hz.</div>
            <table class="mac-sysinfo-table">
              <tr><td class="mac-sysinfo-label">Chipset Model:</td><td>Apple Metal 3 GPU (Hardware Ray Tracing)</td></tr>
              <tr><td class="mac-sysinfo-label">Type:</td><td>GPU Unified Integrated</td></tr>
              <tr><td class="mac-sysinfo-label">Resolution:</td><td>3456 x 2234 Liquid Retina XDR</td></tr>
              <tr><td class="mac-sysinfo-label">UI Scaling:</td><td>Retina 2x (Looks like 1728 x 1117)</td></tr>
              <tr><td class="mac-sysinfo-label">ProMotion:</td><td>Yes (Adaptive 24Hz - 120Hz)</td></tr>
              <tr><td class="mac-sysinfo-label">Aero Compositor:</td><td>Active (WindowServer PID 1)</td></tr>
            </table>
          </div>
        `;
      } else if (cat === 'storage') {
        contentEl.innerHTML = `
          <div>
            <h2 style="margin:0 0 4px;font-size:18px;">Storage Volumes</h2>
            <div style="font-size:12px;color:#6e6e73;margin-bottom:16px;">APFS Apple Solid State Drive & Virtual File System.</div>
            <table class="mac-sysinfo-table">
              <tr><td class="mac-sysinfo-label">Mount Point:</td><td>Macintosh HD (/)</td></tr>
              <tr><td class="mac-sysinfo-label">File System:</td><td>APFS (Encrypted, Case-sensitive)</td></tr>
              <tr><td class="mac-sysinfo-label">VFS Root:</td><td>/AppData/Roaming/AliceOS/vfs.json</td></tr>
              <tr><td class="mac-sysinfo-label">Read/Write Speed:</td><td>7,400 MB/s (PCIe 4.0 NVMe)</td></tr>
              <tr><td class="mac-sysinfo-label">TRIM Support:</td><td>Yes</td></tr>
            </table>
          </div>
        `;
      } else if (cat === 'network') {
        contentEl.innerHTML = `
          <div>
            <h2 style="margin:0 0 4px;font-size:18px;">Network & AirPort Wi-Fi 6E</h2>
            <div style="font-size:12px;color:#6e6e73;margin-bottom:16px;">Local area network and IPC host adapter telemetry.</div>
            <table class="mac-sysinfo-table">
              <tr><td class="mac-sysinfo-label">Host Name:</td><td>${data.hostname}</td></tr>
              <tr><td class="mac-sysinfo-label">Wi-Fi Card:</td><td>Broadcom AirPort Extreme Wi-Fi 6E (802.11ax)</td></tr>
              <tr><td class="mac-sysinfo-label">Bluetooth:</td><td>Bluetooth 5.3 Core Controller</td></tr>
              <tr><td class="mac-sysinfo-label">IPC Bridge Socket:</td><td><span style="color:#34c759;font-weight:600;">● Active (Node.js IPC)</span></td></tr>
            </table>
          </div>
        `;
      } else if (cat === 'software') {
        contentEl.innerHTML = `
          <div>
            <h2 style="margin:0 0 4px;font-size:18px;">System Software Overview</h2>
            <div style="font-size:12px;color:#6e6e73;margin-bottom:16px;">Core macOS Sequoia Operating System & Darwin Microkernel.</div>
            <table class="mac-sysinfo-table">
              <tr><td class="mac-sysinfo-label">System Version:</td><td>macOS Sequoia 15.1 (Build 24B83)</td></tr>
              <tr><td class="mac-sysinfo-label">Kernel Version:</td><td>Darwin 24.1.0 (root@xnu-11215.1.30~1/RELEASE_ARM64)</td></tr>
              <tr><td class="mac-sysinfo-label">System Integrity Protection:</td><td>Enabled</td></tr>
              <tr><td class="mac-sysinfo-label">Secure Boot:</td><td>Full Security (Apple Silicon Secure Enclave)</td></tr>
              <tr><td class="mac-sysinfo-label">Runtime Engine:</td><td>Electron 44.3.0 & Chromium V8</td></tr>
            </table>
          </div>
        `;
      }
    }

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navItems.forEach(n => n.classList.remove('active'));
        item.classList.add('active');
        activeCategory = item.getAttribute('data-cat');
        renderCategory(activeCategory);
      });
    });

    renderCategory(activeCategory);

    win._onLanguageChange = () => {
      win.querySelector('.title').innerText = t('host_title', 'System Information');
    };
  }
}

// Photos Library (macOS Sequoia Design)
async function launchGallery(filePath = null) {
  const res = await window.aliceOS.pm.spawn('gallery');
  if (res.success) {
    const pid = res.data.pid;
    let photosList = [
      { name: 'macOS_Sequoia_Dark.heic', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', album: 'wallpapers' },
      { name: 'Sonoma_Horizon_4K.heic', url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80', album: 'wallpapers' },
      { name: 'Apple_Park_Rainbow.jpg', url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80', album: 'wallpapers' }
    ];
    let activePhoto = photosList[0];
    let currentView = 'grid'; // 'grid' or 'detail'

    const win = createWindow(pid, t('gallery_image_viewer', 'Photos'), `
      <div class="mac-photos-app">
        <!-- Photos Sidebar -->
        <div class="mac-photos-sidebar">
          <div style="font-size:11px;font-weight:700;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;padding:4px 8px;">Photos</div>
          <div class="mac-photos-nav-item active" data-filter="all" style="display:flex;align-items:center;gap:8px;padding:6px 10px;border-radius:8px;cursor:pointer;font-size:13px;background:rgba(255,255,255,0.12);">
            <span>🖼️</span> <span>All Photos</span>
          </div>
          <div class="mac-photos-nav-item" data-filter="wallpapers" style="display:flex;align-items:center;gap:8px;padding:6px 10px;border-radius:8px;cursor:pointer;font-size:13px;opacity:0.8;">
            <span>🏞️</span> <span>Wallpapers</span>
          </div>
          <div class="mac-photos-nav-item" data-filter="camera" style="display:flex;align-items:center;gap:8px;padding:6px 10px;border-radius:8px;cursor:pointer;font-size:13px;opacity:0.8;">
            <span>📸</span> <span>Photo Booth</span>
          </div>
          <div class="mac-photos-nav-item" data-filter="markup" style="display:flex;align-items:center;gap:8px;padding:6px 10px;border-radius:8px;cursor:pointer;font-size:13px;opacity:0.8;">
            <span>🎨</span> <span>Markup Art</span>
          </div>
        </div>

        <!-- Photos Main Content -->
        <div class="mac-photos-content">
          <!-- Photos Header Toolbar -->
          <div class="mac-photos-header">
            <div style="display:flex;align-items:center;gap:8px;">
              <button id="photos-back-btn-${pid}" style="display:none;background:rgba(255,255,255,0.1);border:none;color:white;padding:4px 10px;border-radius:6px;font-size:11px;cursor:pointer;">◀ Back to Grid</button>
              <div id="photos-title-${pid}" style="font-weight:600;font-size:13px;">Library</div>
            </div>
            <div style="display:flex;align-items:center;gap:12px;font-size:11px;color:#a1a1aa;">
              <span id="photos-count-${pid}">${photosList.length} Items</span>
            </div>
          </div>

          <!-- Grid View -->
          <div class="mac-photos-grid" id="photos-grid-${pid}">
            <!-- Rendered thumbnails -->
          </div>

          <!-- Detail View -->
          <div id="photos-detail-${pid}" style="display:none;flex:1;align-items:center;justify-content:center;background:#000000;position:relative;overflow:hidden;">
            <img id="photos-detail-img-${pid}" style="max-width:94%;max-height:94%;object-fit:contain;border-radius:8px;box-shadow:0 8px 32px rgba(0,0,0,0.8);" />
          </div>
        </div>
      </div>
    `);

    win.style.width = '820px';
    win.style.height = '540px';

    const gridEl = win.querySelector(`#photos-grid-${pid}`);
    const detailEl = win.querySelector(`#photos-detail-${pid}`);
    const detailImg = win.querySelector(`#photos-detail-img-${pid}`);
    const backBtn = win.querySelector(`#photos-back-btn-${pid}`);
    const titleEl = win.querySelector(`#photos-title-${pid}`);
    const countEl = win.querySelector(`#photos-count-${pid}`);
    const navItems = win.querySelectorAll('.mac-photos-nav-item');

    // Scan VFS desktop for user created photos & artworks
    try {
      const vfsFiles = await window.aliceOS.vfs.readDir(`/Users/${currentUser}/Desktop`);
      if (vfsFiles.success && Array.isArray(vfsFiles.data)) {
        for (let f of vfsFiles.data) {
          if (typeof f === 'string' && (f.endsWith('.png') || f.endsWith('.jpg'))) {
            const dataRes = await window.aliceOS.vfs.readFile(`/Users/${currentUser}/Desktop/${f}`);
            if (dataRes.success) {
              const alb = f.toLowerCase().includes('photo') ? 'camera' : (f.toLowerCase().includes('artwork') ? 'markup' : 'all');
              photosList.unshift({ name: f, url: dataRes.data, album: alb });
            }
          }
        }
      }
    } catch (e) {}

    function renderGrid(filter = 'all') {
      currentView = 'grid';
      gridEl.style.display = 'grid';
      detailEl.style.display = 'none';
      backBtn.style.display = 'none';
      titleEl.innerText = filter === 'all' ? 'Library' : filter.toUpperCase();

      let filtered = photosList;
      if (filter !== 'all') {
        filtered = photosList.filter(p => p.album === filter);
      }
      countEl.innerText = `${filtered.length} Items`;

      gridEl.innerHTML = filtered.map((p, idx) => `
        <div class="mac-photos-thumb" data-idx="${idx}">
          <img src="${p.url}" alt="${p.name}" loading="lazy" />
          <div style="position:absolute;bottom:0;left:0;width:100%;padding:4px 8px;background:linear-gradient(to top,rgba(0,0,0,0.8),transparent);font-size:10px;color:white;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${p.name}</div>
        </div>
      `).join('');

      gridEl.querySelectorAll('.mac-photos-thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
          const idx = parseInt(thumb.getAttribute('data-idx'));
          showDetail(filtered[idx]);
        });
      });
    }

    function showDetail(photo) {
      activePhoto = photo;
      currentView = 'detail';
      gridEl.style.display = 'none';
      detailEl.style.display = 'flex';
      backBtn.style.display = 'block';
      detailImg.src = photo.url;
      titleEl.innerText = photo.name;
    }

    backBtn.addEventListener('click', () => {
      renderGrid();
    });

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navItems.forEach(n => {
          n.style.background = 'transparent';
          n.style.opacity = '0.8';
        });
        item.style.background = 'rgba(255,255,255,0.12)';
        item.style.opacity = '1';
        const filter = item.getAttribute('data-filter');
        renderGrid(filter);
      });
    });

    if (filePath) {
      const imgRes = await window.aliceOS.vfs.readFile(filePath);
      if (imgRes.success) {
        showDetail({ name: filePath.split('/').pop(), url: imgRes.data, album: 'all' });
      } else {
        renderGrid();
      }
    } else {
      renderGrid();
    }
  }
}

// Apple Weather App - Full macOS Sequoia Fidelity
async function launchWeather() {
  const res = await window.aliceOS.pm.spawn('weather');
  if (res.success) {
    const pid = res.data.pid;
    const cities = [
      { id: 'cupertino', name: 'Cupertino', nameZh: '库比蒂诺', lat: 37.323, lon: -122.032, tz: 'America/Los_Angeles' },
      { id: 'beijing', name: 'Beijing', nameZh: '北京', lat: 39.904, lon: 116.407, tz: 'Asia/Shanghai' },
      { id: 'shanghai', name: 'Shanghai', nameZh: '上海', lat: 31.230, lon: 121.473, tz: 'Asia/Shanghai' },
      { id: 'tokyo', name: 'Tokyo', nameZh: '东京', lat: 35.676, lon: 139.650, tz: 'Asia/Tokyo' },
      { id: 'london', name: 'London', nameZh: '伦敦', lat: 51.507, lon: -0.127, tz: 'Europe/London' },
      { id: 'newyork', name: 'New York', nameZh: '纽约', lat: 40.712, lon: -74.006, tz: 'America/New_York' },
      { id: 'paris', name: 'Paris', nameZh: '巴黎', lat: 48.856, lon: 2.352, tz: 'Europe/Paris' }
    ];

    let activeCity = cities[0];
    let isCurrentGeo = false;

    const win = createWindow(pid, t('app_weather', '天气'), `
      <div class="weather-mac-app" id="weather-mac-app-${pid}">
        <!-- City Pills Selector -->
        <div class="weather-city-bar" id="weather-city-bar-${pid}">
          <button class="weather-city-pill" id="weather-my-loc-${pid}">📍 ${currentSystemLang === 'zh' ? '我的位置' : 'My Location'}</button>
          ${cities.map((c, i) => `
            <button class="weather-city-pill ${i === 0 ? 'active' : ''}" data-idx="${i}">
              ${currentSystemLang === 'zh' ? c.nameZh : c.name}
            </button>
          `).join('')}
        </div>

        <!-- Scrollable Weather Content -->
        <div class="weather-scroll-content" id="weather-scroll-${pid}">
          <!-- Hero Section -->
          <div class="weather-hero-card">
            <div class="weather-city-name" id="weather-city-title-${pid}">Cupertino</div>
            <div class="weather-big-temp" id="weather-big-temp-${pid}">--°</div>
            <div class="weather-condition-txt" id="weather-condition-${pid}">${t('weather_requesting', '正在获取天气...')}</div>
            <div class="weather-hl-range" id="weather-hl-${pid}">--</div>
          </div>

          <!-- 24-Hour Forecast Card -->
          <div class="weather-frosted-card">
            <div class="weather-card-hdr">
              ⏱️ ${currentSystemLang === 'zh' ? '24小时逐时预报' : 'Hourly Forecast'}
            </div>
            <div class="weather-hourly-row" id="weather-hourly-row-${pid}">
              <div style="font-size:12px;opacity:0.6;padding:10px 0;">${t('weather_requesting', '加载逐时预报中...')}</div>
            </div>
          </div>

          <!-- 10-Day Forecast Card -->
          <div class="weather-frosted-card">
            <div class="weather-card-hdr">
              📅 ${currentSystemLang === 'zh' ? '10天天气预报' : '10-Day Forecast'}
            </div>
            <div class="weather-daily-list" id="weather-daily-list-${pid}">
              <div style="font-size:12px;opacity:0.6;padding:10px 0;">${t('weather_requesting', '加载多日预报中...')}</div>
            </div>
          </div>

          <!-- 2x3 Weather Metrics Grid -->
          <div class="weather-metrics-grid" id="weather-metrics-${pid}">
            <div class="weather-metric-box">
              <div class="weather-metric-hdr">☀️ ${currentSystemLang === 'zh' ? '紫外线指数' : 'UV INDEX'}</div>
              <div class="weather-metric-val" id="weather-uv-val-${pid}">--</div>
              <div class="weather-metric-sub" id="weather-uv-sub-${pid}">${currentSystemLang === 'zh' ? '今日保持良好防晒防护' : 'Take protective measures'}</div>
            </div>
            <div class="weather-metric-box">
              <div class="weather-metric-hdr">💨 ${currentSystemLang === 'zh' ? '风向与风速' : 'WIND'}</div>
              <div class="weather-metric-val" id="weather-wind-val-${pid}">-- km/h</div>
              <div class="weather-metric-sub" id="weather-wind-sub-${pid}">${currentSystemLang === 'zh' ? '微风拂面' : 'Light breeze'}</div>
            </div>
            <div class="weather-metric-box">
              <div class="weather-metric-hdr">💧 ${currentSystemLang === 'zh' ? '相对湿度' : 'HUMIDITY'}</div>
              <div class="weather-metric-val" id="weather-hum-val-${pid}">--%</div>
              <div class="weather-metric-sub" id="weather-hum-sub-${pid}">${currentSystemLang === 'zh' ? '舒适室内环境' : 'Comfortable dew point'}</div>
            </div>
            <div class="weather-metric-box">
              <div class="weather-metric-hdr">👁️ ${currentSystemLang === 'zh' ? '能见度' : 'VISIBILITY'}</div>
              <div class="weather-metric-val" id="weather-vis-val-${pid}">16 km</div>
              <div class="weather-metric-sub" id="weather-vis-sub-${pid}">${currentSystemLang === 'zh' ? '视野极佳，一览无余' : 'Completely clear horizon'}</div>
            </div>
            <div class="weather-metric-box">
              <div class="weather-metric-hdr">🧭 ${currentSystemLang === 'zh' ? '气压' : 'PRESSURE'}</div>
              <div class="weather-metric-val" id="weather-press-val-${pid}">1013 hPa</div>
              <div class="weather-metric-sub" id="weather-press-sub-${pid}">${currentSystemLang === 'zh' ? '标准海平面大气压' : 'Normal atmospheric pressure'}</div>
            </div>
            <div class="weather-metric-box">
              <div class="weather-metric-hdr">🌅 ${currentSystemLang === 'zh' ? '日出与日落' : 'SUN'}</div>
              <div class="weather-metric-val" id="weather-sun-val-${pid}">--:--</div>
              <div class="weather-metric-sub" id="weather-sun-sub-${pid}">${currentSystemLang === 'zh' ? '日落即将来临' : 'Sunset upcoming'}</div>
            </div>
          </div>
        </div>
      </div>
    `, 'weather');

    win.style.width = '460px';
    win.style.height = '620px';

    const appEl = win.querySelector(`#weather-mac-app-${pid}`);
    const cityTitle = win.querySelector(`#weather-city-title-${pid}`);
    const bigTemp = win.querySelector(`#weather-big-temp-${pid}`);
    const condTxt = win.querySelector(`#weather-condition-${pid}`);
    const hlRange = win.querySelector(`#weather-hl-${pid}`);
    const hourlyRow = win.querySelector(`#weather-hourly-row-${pid}`);
    const dailyList = win.querySelector(`#weather-daily-list-${pid}`);
    const uvVal = win.querySelector(`#weather-uv-val-${pid}`);
    const uvSub = win.querySelector(`#weather-uv-sub-${pid}`);
    const windVal = win.querySelector(`#weather-wind-val-${pid}`);
    const windSub = win.querySelector(`#weather-wind-sub-${pid}`);
    const humVal = win.querySelector(`#weather-hum-val-${pid}`);
    const humSub = win.querySelector(`#weather-hum-sub-${pid}`);
    const sunVal = win.querySelector(`#weather-sun-val-${pid}`);
    const sunSub = win.querySelector(`#weather-sun-sub-${pid}`);
    const pressVal = win.querySelector(`#weather-press-val-${pid}`);

    function getWeatherInfo(code, isDay = 1) {
      if (code === 0) return { icon: isDay ? '☀️' : '🌙', desc: currentSystemLang === 'zh' ? '晴朗' : 'Clear', gradient: isDay ? 'linear-gradient(180deg, #1e62a1 0%, #3e8fc7 40%, #7dbbe6 100%)' : 'linear-gradient(180deg, #0d1b2a 0%, #1b263b 60%, #415a77 100%)' };
      if (code === 1 || code === 2) return { icon: isDay ? '🌤️' : '☁️', desc: currentSystemLang === 'zh' ? '大部晴朗' : 'Mostly Clear', gradient: isDay ? 'linear-gradient(180deg, #2b6cb0 0%, #4299e1 60%, #90cdf4 100%)' : 'linear-gradient(180deg, #1a202c 0%, #2d3748 100%)' };
      if (code === 3) return { icon: '☁️', desc: currentSystemLang === 'zh' ? '阴天多云' : 'Overcast', gradient: 'linear-gradient(180deg, #4a5568 0%, #718096 100%)' };
      if (code === 45 || code === 48) return { icon: '🌫️', desc: currentSystemLang === 'zh' ? '有雾' : 'Foggy', gradient: 'linear-gradient(180deg, #5a6578 0%, #8892a0 100%)' };
      if (code >= 51 && code <= 55) return { icon: '🌦️', desc: currentSystemLang === 'zh' ? '毛毛雨' : 'Drizzle', gradient: 'linear-gradient(180deg, #334155 0%, #475569 60%, #64748b 100%)' };
      if (code >= 61 && code <= 67) return { icon: '🌧️', desc: currentSystemLang === 'zh' ? '中雨' : 'Rain', gradient: 'linear-gradient(180deg, #1e293b 0%, #334155 60%, #475569 100%)' };
      if (code >= 71 && code <= 77) return { icon: '🌨️', desc: currentSystemLang === 'zh' ? '飘雪' : 'Snow', gradient: 'linear-gradient(180deg, #64748b 0%, #94a3b8 60%, #cbd5e1 100%)' };
      if (code >= 80 && code <= 82) return { icon: '🌧️', desc: currentSystemLang === 'zh' ? '强阵雨' : 'Showers', gradient: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)' };
      if (code >= 95) return { icon: '⛈️', desc: currentSystemLang === 'zh' ? '雷阵雨' : 'Thunderstorm', gradient: 'linear-gradient(180deg, #18181b 0%, #27272a 50%, #3f3f46 100%)' };
      return { icon: '⛅', desc: currentSystemLang === 'zh' ? '多云' : 'Partly Cloudy', gradient: 'linear-gradient(180deg, #2563eb 0%, #38bdf8 100%)' };
    }

    async function loadCityWeather(city) {
      const isZh = currentSystemLang === 'zh';
      cityTitle.innerText = isZh ? (city.nameZh || city.name) : city.name;
      condTxt.innerText = t('weather_requesting', '正在获取天气...');

      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m,surface_pressure&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,sunrise,sunset&timezone=auto`;
        const res = await fetch(url);
        const data = await res.json();

        const cur = data.current || {};
        const daily = data.daily || {};
        const hourly = data.hourly || {};

        const temp = Math.round(cur.temperature_2m ?? 21);
        const code = cur.weather_code ?? 0;
        const isDay = cur.is_day ?? 1;
        const wInfo = getWeatherInfo(code, isDay);

        // Update Theme Gradient
        appEl.style.background = wInfo.gradient;
        bigTemp.innerText = `${temp}°`;
        condTxt.innerText = wInfo.desc;

        const maxT = daily.temperature_2m_max ? Math.round(daily.temperature_2m_max[0]) : temp + 4;
        const minT = daily.temperature_2m_min ? Math.round(daily.temperature_2m_min[0]) : temp - 5;
        hlRange.innerText = `${isZh ? '最高' : 'H:'} ${maxT}°  ${isZh ? '最低' : 'L:'} ${minT}°`;

        // Render 24-Hour Hourly Forecast
        if (hourly.time && hourly.temperature_2m) {
          const nowHour = new Date().getHours();
          const next24 = [];
          for (let h = 0; h < 24; h++) {
            const idx = (nowHour + h) % hourly.time.length;
            const hTime = h === 0 ? (isZh ? '现在' : 'Now') : `${(nowHour + h) % 24}:00`;
            const hTemp = Math.round(hourly.temperature_2m[idx] || (temp + Math.sin(h / 3) * 4));
            const hCode = hourly.weather_code ? hourly.weather_code[idx] : code;
            const hInfo = getWeatherInfo(hCode, (nowHour + h) % 24 >= 6 && (nowHour + h) % 24 <= 19 ? 1 : 0);
            next24.push(`
              <div class="weather-hour-box">
                <span style="opacity:0.8;">${hTime}</span>
                <span style="font-size:22px;margin:2px 0;">${hInfo.icon}</span>
                <span style="font-weight:600;">${hTemp}°</span>
              </div>
            `);
          }
          hourlyRow.innerHTML = next24.join('');
        }

        // Render 10-Day Forecast
        if (daily.time && daily.temperature_2m_max) {
          const daysOfWeekZh = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
          const daysOfWeekEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
          const dRows = [];
          const count = Math.min(daily.time.length, 10);
          
          let overallMin = Math.min(...daily.temperature_2m_min.slice(0, count));
          let overallMax = Math.max(...daily.temperature_2m_max.slice(0, count));
          let overallRange = Math.max(1, overallMax - overallMin);

          for (let d = 0; d < count; d++) {
            const dateObj = new Date(daily.time[d]);
            const dayName = d === 0 ? (isZh ? '今天' : 'Today') : (isZh ? daysOfWeekZh[dateObj.getDay()] : daysOfWeekEn[dateObj.getDay()]);
            const dCode = daily.weather_code ? daily.weather_code[d] : code;
            const dInfo = getWeatherInfo(dCode, 1);
            const dMin = Math.round(daily.temperature_2m_min[d]);
            const dMax = Math.round(daily.temperature_2m_max[d]);

            const leftPct = Math.round(((dMin - overallMin) / overallRange) * 100);
            const widthPct = Math.max(15, Math.round(((dMax - dMin) / overallRange) * 100));

            dRows.push(`
              <div class="weather-day-row">
                <span style="width:48px;font-weight:500;">${dayName}</span>
                <span style="font-size:18px;width:28px;text-align:center;">${dInfo.icon}</span>
                <span style="width:28px;text-align:right;opacity:0.75;">${dMin}°</span>
                <div class="weather-temp-bar-bg">
                  <div class="weather-temp-bar-fill" style="margin-left:${leftPct}%; width:${widthPct}%;"></div>
                </div>
                <span style="width:28px;font-weight:600;">${dMax}°</span>
              </div>
            `);
          }
          dailyList.innerHTML = dRows.join('');
        }

        // Update 6 Metrics
        const uv = daily.uv_index_max ? Math.round(daily.uv_index_max[0]) : 3;
        uvVal.innerText = `${uv} ${uv <= 2 ? (isZh ? '低' : 'Low') : uv <= 5 ? (isZh ? '中等' : 'Moderate') : (isZh ? '高' : 'High')}`;
        uvSub.innerText = uv <= 2 ? (isZh ? '无需特别防护' : 'No protection required') : (isZh ? '在16:00前保持防晒' : 'Wear sunscreen until 16:00');

        const windSpd = Math.round(cur.wind_speed_10m ?? 12);
        windVal.innerText = `${windSpd} km/h`;
        windSub.innerText = `${isZh ? '阵风最高可达' : 'Gusts up to'} ${windSpd + 6} km/h`;

        const hum = Math.round(cur.relative_humidity_2m ?? 55);
        humVal.innerText = `${hum}%`;
        humSub.innerText = `${isZh ? '体感温度为' : 'Feels like'} ${Math.round(cur.apparent_temperature ?? temp)}°`;

        const press = Math.round(cur.surface_pressure ?? 1013);
        pressVal.innerText = `${press} hPa`;

        if (daily.sunset && daily.sunrise) {
          const sunsetTime = daily.sunset[0].split('T')[1] || '19:15';
          const sunriseTime = daily.sunrise[0].split('T')[1] || '06:20';
          sunVal.innerText = sunsetTime;
          sunSub.innerText = `${isZh ? '日出时间' : 'Sunrise'}: ${sunriseTime}`;
        }
      } catch (err) {
        console.warn('Weather fetch fallback to offline simulation:', err);
        // Fallback realistic simulation so the UI is always filled
        const temp = 22;
        const wInfo = getWeatherInfo(0, 1);
        appEl.style.background = wInfo.gradient;
        bigTemp.innerText = `${temp}°`;
        condTxt.innerText = wInfo.desc;
        hlRange.innerText = `${isZh ? '最高' : 'H:'} 26°  ${isZh ? '最低' : 'L:'} 15°`;

        hourlyRow.innerHTML = [
          { t: isZh ? '现在' : 'Now', icon: '☀️', deg: 22 },
          { t: '14:00', icon: '☀️', deg: 24 },
          { t: '15:00', icon: '🌤️', deg: 25 },
          { t: '16:00', icon: '🌤️', deg: 24 },
          { t: '17:00', icon: '⛅', deg: 23 },
          { t: '18:00', icon: '⛅', deg: 21 },
          { t: '19:00', icon: '🌅', deg: 19 },
          { t: '20:00', icon: '🌙', deg: 18 },
          { t: '21:00', icon: '🌙', deg: 17 }
        ].map(item => `
          <div class="weather-hour-box">
            <span style="opacity:0.8;">${item.t}</span>
            <span style="font-size:22px;margin:2px 0;">${item.icon}</span>
            <span style="font-weight:600;">${item.deg}°</span>
          </div>
        `).join('');

        const days = isZh ? ['今天', '周二', '周三', '周四', '周五', '周六', '周日'] : ['Today', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        dailyList.innerHTML = days.map((day, i) => `
          <div class="weather-day-row">
            <span style="width:48px;font-weight:500;">${day}</span>
            <span style="font-size:18px;width:28px;text-align:center;">${i % 3 === 0 ? '☀️' : i % 3 === 1 ? '🌤️' : '⛅'}</span>
            <span style="width:28px;text-align:right;opacity:0.75;">${14 + i % 3}°</span>
            <div class="weather-temp-bar-bg">
              <div class="weather-temp-bar-fill" style="margin-left:${i * 5}%; width:${60 - i * 2}%;"></div>
            </div>
            <span style="width:28px;font-weight:600;">${25 + i % 2}°</span>
          </div>
        `).join('');

        uvVal.innerText = isZh ? '4 中等' : '4 Moderate';
        windVal.innerText = '14 km/h';
        humVal.innerText = '58%';
        sunVal.innerText = '19:24';
      }
    }

    // City Button Click Handlers
    win.querySelectorAll('.weather-city-pill[data-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        win.querySelectorAll('.weather-city-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const idx = parseInt(btn.dataset.idx);
        activeCity = cities[idx];
        isCurrentGeo = false;
        loadCityWeather(activeCity);
      });
    });

    // My Location Click Handler
    const myLocBtn = win.querySelector(`#weather-my-loc-${pid}`);
    myLocBtn.addEventListener('click', async () => {
      win.querySelectorAll('.weather-city-pill').forEach(b => b.classList.remove('active'));
      myLocBtn.classList.add('active');
      condTxt.innerText = t('weather_locating', '正在通过 IP 定位...');
      try {
        const geoRes = await fetch('https://get.geojs.io/v1/ip/geo.json');
        const geo = await geoRes.json();
        activeCity = {
          name: geo.city || 'My Location',
          nameZh: geo.city || '我的位置',
          lat: geo.latitude,
          lon: geo.longitude
        };
        isCurrentGeo = true;
        loadCityWeather(activeCity);
      } catch (err) {
        activeCity = cities[0];
        loadCityWeather(activeCity);
      }
    });

    win._onLanguageChange = () => {
      win.querySelector('.title').innerText = t('app_weather', '天气');
      loadCityWeather(activeCity);
    };

    // Initial load
    loadCityWeather(activeCity);
  }
}

// Sidecar & Host Display Mirroring (macOS Sequoia Design)
async function launchHostScreen() {
  const res = await window.aliceOS.pm.spawn('hostscreen');
  if (res.success) {
    const pid = res.data.pid;
    let fpsInterval = 100; // 10 fps
    let fitMode = 'contain';

    const win = createWindow(pid, t('app_hostscreen', 'Display Mirroring — Sidecar'), `
      <div class="mac-sidecar-app">
        <!-- Sidecar Toolbar -->
        <div class="mac-sidecar-toolbar">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:28px;height:28px;background:linear-gradient(135deg,#007aff,#5856d6);border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:15px;">🖥️</div>
            <div>
              <div style="font-size:13px;font-weight:600;letter-spacing:-0.2px;">Liquid Retina XDR Display</div>
              <div style="font-size:10px;color:#a1a1aa;">Physical Host Monitor • 1920 × 1080 @ 60Hz</div>
            </div>
          </div>

          <div style="display:flex;align-items:center;gap:8px;">
            <div style="display:flex;align-items:center;gap:6px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);padding:4px 10px;border-radius:20px;font-size:11px;">
              <div id="hs-dot-${pid}" style="width:7px;height:7px;border-radius:50%;background:#ff453a;box-shadow:0 0 6px #ff453a;"></div>
              <span id="hs-status-${pid}" style="font-weight:600;color:#ff453a;">Connecting...</span>
            </div>

            <select id="hs-fps-${pid}" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);color:white;padding:4px 8px;border-radius:6px;font-size:11px;outline:none;cursor:pointer;">
              <option value="66">15 FPS (Smooth)</option>
              <option value="100" selected>10 FPS (Normal)</option>
              <option value="200">5 FPS (Eco)</option>
            </select>

            <select id="hs-fit-${pid}" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);color:white;padding:4px 8px;border-radius:6px;font-size:11px;outline:none;cursor:pointer;">
              <option value="contain">Fit Window</option>
              <option value="cover">Fill Window</option>
              <option value="none">Original 1:1</option>
            </select>

            <button id="hs-snap-${pid}" class="mac-arcade-btn" title="Capture Screenshot to Desktop" style="padding:4px 10px;">📸 Screenshot</button>
          </div>
        </div>

        <!-- Stage Area -->
        <div class="mac-sidecar-stage">
          <div id="hs-frame-${pid}" style="position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;border-radius:8px;overflow:hidden;background:#050508;">
            <img id="hs-img-${pid}" style="width:100%;height:100%;object-fit:contain;transition:object-fit 0.2s;display:none;" />
            <div id="hs-standby-${pid}" style="display:flex;flex-direction:column;align-items:center;gap:12px;color:#71717a;">
              <div style="font-size:48px;opacity:0.6;">🖥️</div>
              <div style="font-size:14px;font-weight:600;color:#e4e4e7;">Connecting to Physical Host Screen...</div>
              <div style="font-size:11px;color:#71717a;">Low latency hardware bridge active</div>
            </div>
          </div>
        </div>
      </div>
    `, 'hostscreen');

    win.style.width = '720px';
    win.style.height = '500px';

    const img = win.querySelector(`#hs-img-${pid}`);
    const status = win.querySelector(`#hs-status-${pid}`);
    const dot = win.querySelector(`#hs-dot-${pid}`);
    const standby = win.querySelector(`#hs-standby-${pid}`);
    const fpsSelect = win.querySelector(`#hs-fps-${pid}`);
    const fitSelect = win.querySelector(`#hs-fit-${pid}`);
    const snapBtn = win.querySelector(`#hs-snap-${pid}`);

    let isLive = false;
    let timerId = null;

    function runLoop() {
      if (timerId) clearInterval(timerId);
      timerId = setInterval(async () => {
        if (!windows.has(pid)) {
          clearInterval(timerId);
          return;
        }
        if (window.aliceOS && window.aliceOS.getHostScreen) {
          try {
            const screenRes = await window.aliceOS.getHostScreen();
            if (screenRes.success && screenRes.data) {
              img.src = screenRes.data;
              if (!isLive) {
                isLive = true;
                img.style.display = 'block';
                standby.style.display = 'none';
                status.innerText = 'Live Feed';
                status.style.color = '#34c759';
                dot.style.background = '#34c759';
                dot.style.boxShadow = '0 0 8px #34c759';
              }
            } else {
              if (isLive) {
                isLive = false;
                status.innerText = 'No Signal';
                status.style.color = '#ff9f0a';
                dot.style.background = '#ff9f0a';
                dot.style.boxShadow = '0 0 8px #ff9f0a';
              }
            }
          } catch (e) {
            isLive = false;
          }
        }
      }, fpsInterval);
    }

    fpsSelect.addEventListener('change', () => {
      fpsInterval = parseInt(fpsSelect.value, 10);
      runLoop();
    });

    fitSelect.addEventListener('change', () => {
      fitMode = fitSelect.value;
      img.style.objectFit = fitMode;
    });

    snapBtn.addEventListener('click', async () => {
      if (img.src && isLive) {
        try {
          const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
          const fileName = `Screenshot_${timestamp}.png`;
          const filePath = `/Users/alice/Desktop/${fileName}`;
          if (window.aliceOS && window.aliceOS.fs && window.aliceOS.fs.writeFile) {
            await window.aliceOS.fs.writeFile(filePath, img.src);
            if (typeof renderDesktopIcons === 'function') renderDesktopIcons();
            if (typeof showNotification === 'function') {
              showNotification('Screen Capture', `Saved ${fileName} to Desktop`);
            }
          }
        } catch (err) {}
      }
    });

    runLoop();
  }
}

// Personal Web Server & File Sharing (macOS Sequoia Design)
async function launchWebHost() {
  const res = await window.aliceOS.pm.spawn('webhost');
  if (res.success) {
    const pid = res.data.pid;
    let running = false;
    let port = 8080;
    let requestsCount = 0;
    let bytesServed = 0;
    let uptimeSeconds = 0;
    let uptimeTimer = null;
    let logInterval = null;

    const win = createWindow(pid, t('webhost_title', 'Personal Web Sharing'), `
      <div class="mac-webhost-app" style="padding:20px;display:flex;flex-direction:column;gap:16px;">
        <!-- Status & Control Card -->
        <div class="mac-webhost-card" style="display:flex;align-items:center;justify-content:space-between;gap:16px;">
          <div style="display:flex;align-items:center;gap:14px;">
            <div style="width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#007aff,#5856d6);display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 4px 12px rgba(0,122,255,0.3);">🌐</div>
            <div>
              <div style="font-size:16px;font-weight:700;letter-spacing:-0.3px;">AliceOS Personal Web Server</div>
              <div style="font-size:12px;color:#8e8e93;margin-top:2px;">Expose your virtual file system to the local physical network</div>
            </div>
          </div>

          <div style="display:flex;align-items:center;gap:12px;">
            <div style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;">
              <div id="wh-dot-${pid}" style="width:8px;height:8px;border-radius:50%;background:#8e8e93;transition:all 0.2s;"></div>
              <span id="wh-status-text-${pid}" style="color:#8e8e93;">Inactive</span>
            </div>
            <button id="wh-toggle-btn-${pid}" style="background:#007aff;color:white;border:none;padding:7px 18px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;transition:all 0.15s;">Start Server</button>
          </div>
        </div>

        <!-- Connection Endpoints Card -->
        <div class="mac-webhost-card" style="display:flex;flex-direction:column;gap:12px;">
          <div style="font-size:13px;font-weight:600;">Network Endpoints</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div style="background:rgba(0,0,0,0.03);border:1px solid rgba(0,0,0,0.06);border-radius:8px;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;">
              <div>
                <div style="font-size:10px;font-weight:600;color:#8e8e93;text-transform:uppercase;">Localhost Loopback</div>
                <div id="wh-local-url-${pid}" style="font-family:ui-monospace,SF Mono,monospace;font-size:12px;font-weight:600;margin-top:2px;">http://localhost:8080/</div>
              </div>
              <div style="display:flex;gap:6px;">
                <button id="wh-copy-local-${pid}" class="mac-arcade-btn" style="padding:3px 8px;font-size:11px;color:inherit;">Copy</button>
                <button id="wh-open-local-${pid}" class="mac-arcade-btn primary" style="padding:3px 8px;font-size:11px;">Browse</button>
              </div>
            </div>

            <div style="background:rgba(0,0,0,0.03);border:1px solid rgba(0,0,0,0.06);border-radius:8px;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;">
              <div>
                <div style="font-size:10px;font-weight:600;color:#8e8e93;text-transform:uppercase;">LAN Wi-Fi / Ethernet</div>
                <div id="wh-lan-url-${pid}" style="font-family:ui-monospace,SF Mono,monospace;font-size:12px;font-weight:600;margin-top:2px;">http://127.0.0.1:8080/</div>
              </div>
              <div style="display:flex;gap:6px;">
                <button id="wh-copy-lan-${pid}" class="mac-arcade-btn" style="padding:3px 8px;font-size:11px;color:inherit;">Copy</button>
              </div>
            </div>
          </div>

          <!-- Configuration row -->
          <div style="display:flex;align-items:center;justify-content:space-between;padding-top:6px;border-top:1px solid rgba(0,0,0,0.05);font-size:12px;">
            <div style="display:flex;align-items:center;gap:16px;">
              <div>
                <span style="color:#8e8e93;">Port: </span>
                <input id="wh-port-input-${pid}" type="number" value="8080" style="width:64px;padding:3px 6px;border-radius:6px;border:1px solid rgba(0,0,0,0.15);font-size:12px;outline:none;" />
              </div>
              <div>
                <span style="color:#8e8e93;">Document Root: </span>
                <span style="font-weight:600;">/Users/alice (VFS)</span>
              </div>
            </div>
            <div style="display:flex;align-items:center;gap:12px;font-size:11px;color:#8e8e93;">
              <span>Bonjour Broadcast: <b style="color:#34c759;">Active</b></span>
            </div>
          </div>
        </div>

        <!-- Telemetry Stats Grid -->
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
          <div class="mac-webhost-card" style="padding:12px 16px;">
            <div style="font-size:11px;color:#8e8e93;font-weight:600;">TOTAL REQUESTS</div>
            <div id="wh-stat-req-${pid}" style="font-size:22px;font-weight:700;margin-top:4px;">0</div>
          </div>
          <div class="mac-webhost-card" style="padding:12px 16px;">
            <div style="font-size:11px;color:#8e8e93;font-weight:600;">DATA TRANSFERRED</div>
            <div id="wh-stat-bytes-${pid}" style="font-size:22px;font-weight:700;margin-top:4px;">0 KB</div>
          </div>
          <div class="mac-webhost-card" style="padding:12px 16px;">
            <div style="font-size:11px;color:#8e8e93;font-weight:600;">UPTIME</div>
            <div id="wh-stat-uptime-${pid}" style="font-size:22px;font-weight:700;margin-top:4px;">00:00:00</div>
          </div>
        </div>

        <!-- Live Access Log Terminal -->
        <div class="mac-webhost-card" style="display:flex;flex-direction:column;gap:8px;flex:1;">
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <div style="font-size:12px;font-weight:600;display:flex;align-items:center;gap:6px;">
              <span>📜</span> <span>Live Access & Traffic Log</span>
            </div>
            <button id="wh-clear-log-${pid}" class="mac-arcade-btn" style="padding:2px 8px;font-size:10px;color:inherit;">Clear Log</button>
          </div>
          <div id="wh-log-${pid}" class="mac-webhost-terminal">
            <div style="color:#71717a;">[System] Web Sharing service ready on port 8080. Press 'Start Server' to bind.</div>
          </div>
        </div>
      </div>
    `, 'webhost');

    win.style.width = '680px';
    win.style.height = '540px';

    const toggleBtn = win.querySelector(`#wh-toggle-btn-${pid}`);
    const dot = win.querySelector(`#wh-dot-${pid}`);
    const statusText = win.querySelector(`#wh-status-text-${pid}`);
    const localUrl = win.querySelector(`#wh-local-url-${pid}`);
    const lanUrl = win.querySelector(`#wh-lan-url-${pid}`);
    const portInput = win.querySelector(`#wh-port-input-${pid}`);
    const copyLocalBtn = win.querySelector(`#wh-copy-local-${pid}`);
    const openLocalBtn = win.querySelector(`#wh-open-local-${pid}`);
    const copyLanBtn = win.querySelector(`#wh-copy-lan-${pid}`);
    const statReq = win.querySelector(`#wh-stat-req-${pid}`);
    const statBytes = win.querySelector(`#wh-stat-bytes-${pid}`);
    const statUptime = win.querySelector(`#wh-stat-uptime-${pid}`);
    const logEl = win.querySelector(`#wh-log-${pid}`);
    const clearLogBtn = win.querySelector(`#wh-clear-log-${pid}`);

    function appendLog(method, path, status, latency) {
      const now = new Date().toTimeString().split(' ')[0];
      const color = status === 200 ? '#34c759' : (status === 304 ? '#30b0c7' : '#ff453a');
      const row = document.createElement('div');
      row.innerHTML = `<span style="color:#71717a;">${now}</span> <span style="font-weight:700;color:${color};">[${method} ${status}]</span> <span>${path}</span> <span style="color:#71717a;float:right;">${latency}ms</span>`;
      logEl.appendChild(row);
      logEl.scrollTop = logEl.scrollHeight;
    }

    function formatUptime(sec) {
      const h = String(Math.floor(sec / 3600)).padStart(2, '0');
      const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
      const s = String(sec % 60).padStart(2, '0');
      return `${h}:${m}:${s}`;
    }

    function formatBytes(bytes) {
      if (bytes < 1024) return `${bytes} B`;
      if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
      return `${(bytes / 1048576).toFixed(2)} MB`;
    }

    toggleBtn.addEventListener('click', async () => {
      if (!running) {
        port = parseInt(portInput.value, 10) || 8080;
        if (window.aliceOS && window.aliceOS.startHostServer) {
          const sRes = await window.aliceOS.startHostServer(port);
          if (sRes.success) {
            running = true;
            toggleBtn.innerText = 'Stop Server';
            toggleBtn.style.background = '#ff3b30';
            dot.style.background = '#34c759';
            dot.style.boxShadow = '0 0 8px #34c759';
            statusText.innerText = 'Active (Online)';
            statusText.style.color = '#34c759';
            portInput.disabled = true;

            const baseLocal = `http://localhost:${port}/`;
            localUrl.innerText = baseLocal;
            if (sRes.data && sRes.data.includes('http')) {
              lanUrl.innerText = sRes.data;
            } else {
              lanUrl.innerText = `http://127.0.0.1:${port}/`;
            }

            appendLog('SERVER', `Service started on port ${port}`, 200, 0);

            // Uptime timer
            uptimeSeconds = 0;
            uptimeTimer = setInterval(() => {
              if (!windows.has(pid)) {
                clearInterval(uptimeTimer);
                clearInterval(logInterval);
                return;
              }
              uptimeSeconds++;
              statUptime.innerText = formatUptime(uptimeSeconds);
            }, 1000);

            // Simulate periodic traffic from local subnet
            logInterval = setInterval(() => {
              if (!windows.has(pid) || !running) return;
              if (Math.random() < 0.4) {
                const samplePaths = ['/index.html', '/style.css', '/Desktop/quick_note.txt', '/api/status', '/favicon.ico'];
                const sampleP = samplePaths[Math.floor(Math.random() * samplePaths.length)];
                requestsCount++;
                bytesServed += Math.floor(Math.random() * 4500 + 400);
                statReq.innerText = requestsCount;
                statBytes.innerText = formatBytes(bytesServed);
                appendLog('GET', sampleP, 200, (Math.random() * 2 + 0.5).toFixed(1));
              }
            }, 3000);
          } else {
            appendLog('ERROR', sRes.error || 'Failed to start server', 500, 0);
          }
        }
      } else {
        if (window.aliceOS && window.aliceOS.stopHostServer) {
          await window.aliceOS.stopHostServer();
          running = false;
          toggleBtn.innerText = 'Start Server';
          toggleBtn.style.background = '#007aff';
          dot.style.background = '#8e8e93';
          dot.style.boxShadow = 'none';
          statusText.innerText = 'Inactive';
          statusText.style.color = '#8e8e93';
          portInput.disabled = false;
          clearInterval(uptimeTimer);
          clearInterval(logInterval);
          appendLog('SERVER', 'Service stopped gracefully.', 200, 0);
        }
      }
    });

    copyLocalBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(localUrl.innerText);
      copyLocalBtn.innerText = 'Copied!';
      setTimeout(() => copyLocalBtn.innerText = 'Copy', 1500);
    });

    copyLanBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(lanUrl.innerText);
      copyLanBtn.innerText = 'Copied!';
      setTimeout(() => copyLanBtn.innerText = 'Copy', 1500);
    });

    openLocalBtn.addEventListener('click', () => {
      if (typeof launchBrowser === 'function') {
        launchBrowser();
      }
    });

    clearLogBtn.addEventListener('click', () => {
      logEl.innerHTML = '';
    });
  }
}

// Flappy Alice (Apple Arcade Edition)
async function launchFlappy() {
  const res = await window.aliceOS.pm.spawn('flappy');
  if (res.success) {
    const pid = res.data.pid;
    let highScore = parseInt(localStorage.getItem('alice_flappy_highscore') || '0', 10);
    let score = 0;
    let currentState = 0; // 0: Ready, 1: Playing, 2: GameOver
    let currentMode = 'day'; // 'day', 'sunset', 'night'
    let frames = 0;

    const win = createWindow(pid, t('app_flappy', 'Flappy Alice — Apple Arcade'), `
      <div class="mac-arcade-app">
        <!-- Arcade Header -->
        <div class="mac-arcade-header">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:28px;height:28px;background:linear-gradient(135deg,#34c759,#30b0c7);border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:16px;box-shadow:0 2px 6px rgba(52,199,89,0.4);">🐥</div>
            <div>
              <div style="font-size:13px;font-weight:700;letter-spacing:-0.2px;">Flappy Alice</div>
              <div style="font-size:10px;color:#a1a1aa;">Apple Arcade • Game Center</div>
            </div>
          </div>

          <div style="display:flex;align-items:center;gap:8px;">
            <div class="mac-arcade-pill">
              <span style="color:#a1a1aa;">Score:</span>
              <span id="flappy-score-${pid}" style="font-family:ui-monospace,SF Mono,monospace;font-weight:700;color:#34c759;">0</span>
            </div>
            <div class="mac-arcade-pill">
              <span style="color:#fbbf24;">🏆</span>
              <span id="flappy-high-${pid}" style="font-family:ui-monospace,SF Mono,monospace;font-weight:700;color:#fbbf24;">${highScore}</span>
            </div>
          </div>

          <div style="display:flex;align-items:center;gap:8px;">
            <select id="flappy-mode-${pid}" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);color:white;padding:3px 8px;border-radius:6px;font-size:11px;outline:none;cursor:pointer;">
              <option value="day" selected>Cupertino Day</option>
              <option value="sunset">Sonoma Sunset</option>
              <option value="night">Sequoia Night</option>
            </select>
          </div>
        </div>

        <!-- Canvas Area -->
        <div style="flex:1;position:relative;display:flex;align-items:center;justify-content:center;background:#0d0e12;overflow:hidden;" id="flappy-container-${pid}">
          <canvas id="flappy-canvas-${pid}" width="360" height="480" style="border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,0.6);border:1px solid rgba(255,255,255,0.08);cursor:pointer;"></canvas>

          <!-- Ready / Click to Start Overlay -->
          <div id="flappy-ready-overlay-${pid}" class="mac-arcade-overlay" style="cursor:pointer;">
            <div style="background:rgba(28,28,32,0.85);border:1px solid rgba(255,255,255,0.15);border-radius:16px;padding:24px 32px;text-align:center;box-shadow:0 20px 50px rgba(0,0,0,0.8);max-width:280px;pointer-events:none;">
              <div style="font-size:42px;margin-bottom:8px;">🐥</div>
              <h2 style="margin:0 0 6px 0;font-size:18px;font-weight:700;">Get Ready!</h2>
              <div style="font-size:12px;color:#a1a1aa;margin-bottom:12px;">Click or press Space to flap</div>
              <div class="mac-arcade-btn primary" style="padding:6px 18px;font-size:12px;">Start Flight</div>
            </div>
          </div>

          <!-- Game Over Modal -->
          <div id="flappy-over-overlay-${pid}" class="mac-arcade-overlay" style="display:none;">
            <div style="background:rgba(28,28,32,0.95);border:1px solid rgba(255,255,255,0.15);border-radius:16px;padding:24px 32px;text-align:center;box-shadow:0 20px 50px rgba(0,0,0,0.8);max-width:320px;width:100%;">
              <div id="flappy-medal-icon-${pid}" style="font-size:40px;margin-bottom:8px;">🥉</div>
              <h2 style="margin:0 0 6px 0;font-size:20px;font-weight:700;">Flight Ended</h2>
              <div id="flappy-medal-name-${pid}" style="font-size:12px;color:#fbbf24;font-weight:600;margin-bottom:16px;">Game Center Bronze Medal</div>

              <div style="background:rgba(255,255,255,0.05);border-radius:10px;padding:12px;margin-bottom:20px;display:flex;justify-content:space-around;">
                <div>
                  <div style="font-size:11px;color:#a1a1aa;">FINAL SCORE</div>
                  <div id="flappy-final-score-${pid}" style="font-size:22px;font-weight:700;color:#34c759;">0</div>
                </div>
                <div style="width:1px;background:rgba(255,255,255,0.1);"></div>
                <div>
                  <div style="font-size:11px;color:#a1a1aa;">BEST RECORD</div>
                  <div id="flappy-best-score-${pid}" style="font-size:22px;font-weight:700;color:#fbbf24;">${highScore}</div>
                </div>
              </div>

              <button id="flappy-restart-btn-${pid}" class="mac-arcade-btn primary" style="padding:8px 24px;font-size:13px;">Fly Again</button>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="height:28px;background:rgba(20,20,24,0.9);border-top:1px solid rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:space-between;padding:0 16px;font-size:11px;color:#71717a;">
          <span>Press <b>Space</b> or <b>Left Click</b> to flap wings</span>
          <span>Game Center Rankings Active</span>
        </div>
      </div>
    `, 'flappy');

    win.style.width = '460px';
    win.style.height = '600px';

    const canvas = win.querySelector(`#flappy-canvas-${pid}`);
    const ctx = canvas.getContext('2d');
    const scoreEl = win.querySelector(`#flappy-score-${pid}`);
    const highEl = win.querySelector(`#flappy-high-${pid}`);
    const modeSelect = win.querySelector(`#flappy-mode-${pid}`);
    const readyOverlay = win.querySelector(`#flappy-ready-overlay-${pid}`);
    const overOverlay = win.querySelector(`#flappy-over-overlay-${pid}`);
    const medalIcon = win.querySelector(`#flappy-medal-icon-${pid}`);
    const medalName = win.querySelector(`#flappy-medal-name-${pid}`);
    const finalScoreEl = win.querySelector(`#flappy-final-score-${pid}`);
    const bestScoreEl = win.querySelector(`#flappy-best-score-${pid}`);
    const restartBtn = win.querySelector(`#flappy-restart-btn-${pid}`);

    // Web Audio Sound Synth
    let audioCtx = null;
    function playAudio(type) {
      try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        const t = audioCtx.currentTime;

        if (type === 'flap') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(300, t);
          osc.frequency.exponentialRampToValueAtTime(550, t + 0.08);
          gain.gain.setValueAtTime(0.15, t);
          gain.gain.exponentialRampToValueAtTime(0.01, t + 0.08);
          osc.start(t);
          osc.stop(t + 0.08);
        } else if (type === 'point') {
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(659.25, t); // E5
          osc.frequency.setValueAtTime(880, t + 0.08); // A5
          gain.gain.setValueAtTime(0.2, t);
          gain.gain.exponentialRampToValueAtTime(0.01, t + 0.2);
          osc.start(t);
          osc.stop(t + 0.2);
        } else if (type === 'crash') {
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(140, t);
          osc.frequency.exponentialRampToValueAtTime(30, t + 0.25);
          gain.gain.setValueAtTime(0.25, t);
          gain.gain.exponentialRampToValueAtTime(0.01, t + 0.25);
          osc.start(t);
          osc.stop(t + 0.25);
        }
      } catch (e) {}
    }

    // Bird state
    const bird = {
      x: 70,
      y: 200,
      radius: 14,
      velocity: 0,
      gravity: 0.26,
      jump: 4.8,
      rotation: 0,
      wingCycle: 0,
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        // Body
        ctx.shadowColor = 'rgba(0,0,0,0.2)';
        ctx.shadowBlur = 6;
        ctx.fillStyle = '#ffcc00';
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.fill();

        // Belly
        ctx.fillStyle = '#ffe066';
        ctx.beginPath();
        ctx.arc(-2, 3, this.radius * 0.7, 0, Math.PI * 2);
        ctx.fill();

        // Eye
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(5, -4, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(6, -4, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(5.5, -5, 1, 0, Math.PI * 2);
        ctx.fill();

        // Beak
        ctx.fillStyle = '#ff6b35';
        ctx.beginPath();
        ctx.moveTo(10, -2);
        ctx.lineTo(20, 2);
        ctx.lineTo(10, 6);
        ctx.closePath();
        ctx.fill();

        // Wing flapping
        const wingOffset = Math.sin(this.wingCycle) * 6;
        ctx.fillStyle = '#f7b731';
        ctx.beginPath();
        ctx.ellipse(-6, 2, 7, 4 + wingOffset * 0.5, -0.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      },
      update() {
        this.wingCycle += 0.2;
        this.velocity += this.gravity;
        this.y += this.velocity;

        // Target rotation
        if (this.velocity < 0) {
          this.rotation = -0.35;
        } else {
          this.rotation = Math.min(Math.PI / 2.2, this.rotation + 0.05);
        }

        // Ground hit
        if (this.y + this.radius >= canvas.height - 40) {
          this.y = canvas.height - 40 - this.radius;
          endGame();
        }
        // Ceiling hit
        if (this.y - this.radius <= 0) {
          this.y = this.radius;
          this.velocity = 0;
        }
      },
      flap() {
        this.velocity = -this.jump;
        this.rotation = -0.4;
        playAudio('flap');
      }
    };

    // Pipes manager
    const pipes = {
      items: [],
      width: 52,
      gap: 130,
      speed: 2,
      reset() {
        this.items = [];
      },
      draw() {
        this.items.forEach(p => {
          // Top Pipe
          const gradTop = ctx.createLinearGradient(p.x, 0, p.x + this.width, 0);
          gradTop.addColorStop(0, '#55a630');
          gradTop.addColorStop(0.3, '#80b918');
          gradTop.addColorStop(0.7, '#55a630');
          gradTop.addColorStop(1, '#2b9348');

          ctx.fillStyle = gradTop;
          ctx.fillRect(p.x, 0, this.width, p.top);
          // Top Pipe Cap
          ctx.fillRect(p.x - 3, p.top - 18, this.width + 6, 18);
          ctx.strokeStyle = '#2d6a4f';
          ctx.strokeRect(p.x - 3, p.top - 18, this.width + 6, 18);

          // Bottom Pipe
          const bottomY = p.top + this.gap;
          const bottomH = canvas.height - 40 - bottomY;
          ctx.fillRect(p.x, bottomY, this.width, bottomH);
          // Bottom Pipe Cap
          ctx.fillRect(p.x - 3, bottomY, this.width + 6, 18);
          ctx.strokeRect(p.x - 3, bottomY, this.width + 6, 18);
        });
      },
      update() {
        if (frames % 110 === 0) {
          const minTop = 50;
          const maxTop = canvas.height - 40 - this.gap - 60;
          const topH = Math.floor(Math.random() * (maxTop - minTop)) + minTop;
          this.items.push({ x: canvas.width, top: topH, passed: false });
        }

        for (let i = this.items.length - 1; i >= 0; i--) {
          const p = this.items[i];
          p.x -= this.speed;

          // Check collision with bird
          const bx = bird.x, by = bird.y, br = bird.radius - 2;
          const inX = bx + br > p.x - 3 && bx - br < p.x + this.width + 3;
          const inTop = by - br < p.top;
          const inBottom = by + br > p.top + this.gap;

          if (inX && (inTop || inBottom)) {
            endGame();
            return;
          }

          // Check score
          if (!p.passed && p.x + this.width < bird.x) {
            p.passed = true;
            score++;
            scoreEl.innerText = score;
            playAudio('point');
            if (score > highScore) {
              highScore = score;
              highEl.innerText = highScore;
              localStorage.setItem('alice_flappy_highscore', highScore.toString());
            }
          }

          if (p.x + this.width < -10) {
            this.items.splice(i, 1);
          }
        }
      }
    };

    // Parallax background scenery
    function drawBackground() {
      // Sky
      if (currentMode === 'day') {
        const skyGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
        skyGrad.addColorStop(0, '#4ea8de');
        skyGrad.addColorStop(0.7, '#90e0ef');
        skyGrad.addColorStop(1, '#caf0f8');
        ctx.fillStyle = skyGrad;
      } else if (currentMode === 'sunset') {
        const skyGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
        skyGrad.addColorStop(0, '#581845');
        skyGrad.addColorStop(0.4, '#c70039');
        skyGrad.addColorStop(0.7, '#ff5733');
        skyGrad.addColorStop(1, '#ffc300');
        ctx.fillStyle = skyGrad;
      } else {
        const skyGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
        skyGrad.addColorStop(0, '#03045e');
        skyGrad.addColorStop(0.7, '#023e8a');
        skyGrad.addColorStop(1, '#0077b6');
        ctx.fillStyle = skyGrad;
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Clouds
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      const cloudX = ((frames * 0.4) % (canvas.width + 120)) - 60;
      ctx.beginPath();
      ctx.arc(cloudX, 80, 24, 0, Math.PI * 2);
      ctx.arc(cloudX + 22, 70, 30, 0, Math.PI * 2);
      ctx.arc(cloudX + 48, 80, 22, 0, Math.PI * 2);
      ctx.fill();

      // Rolling Hills
      ctx.fillStyle = currentMode === 'night' ? '#143628' : '#70b263';
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 40);
      for (let x = 0; x <= canvas.width; x += 40) {
        ctx.lineTo(x, canvas.height - 55 - Math.sin((x + frames * 0.5) * 0.02) * 12);
      }
      ctx.lineTo(canvas.width, canvas.height - 40);
      ctx.closePath();
      ctx.fill();

      // Ground
      ctx.fillStyle = '#ded895';
      ctx.fillRect(0, canvas.height - 40, canvas.width, 40);
      ctx.fillStyle = '#73bf2e';
      ctx.fillRect(0, canvas.height - 40, canvas.width, 8);
    }

    let loopId = null;
    function loop() {
      if (!windows.has(pid)) return;
      frames++;

      drawBackground();
      pipes.draw();
      bird.draw();

      if (currentState === 1) {
        bird.update();
        pipes.update();
        loopId = requestAnimationFrame(loop);
      }
    }

    function startGame() {
      currentState = 1;
      readyOverlay.style.display = 'none';
      overOverlay.style.display = 'none';
      bird.y = 200;
      bird.velocity = 0;
      pipes.reset();
      score = 0;
      scoreEl.innerText = '0';
      bird.flap();
      loop();
    }

    function endGame() {
      currentState = 2;
      cancelAnimationFrame(loopId);
      playAudio('crash');
      finalScoreEl.innerText = score;
      bestScoreEl.innerText = highScore;

      // Award Game Center Medals
      if (score >= 50) {
        medalIcon.innerText = '💎';
        medalName.innerText = 'Game Center Platinum Diamond Medal';
      } else if (score >= 30) {
        medalIcon.innerText = '🥇';
        medalName.innerText = 'Game Center Gold Medal';
      } else if (score >= 15) {
        medalIcon.innerText = '🥈';
        medalName.innerText = 'Game Center Silver Medal';
      } else if (score >= 5) {
        medalIcon.innerText = '🥉';
        medalName.innerText = 'Game Center Bronze Medal';
      } else {
        medalIcon.innerText = '🎖️';
        medalName.innerText = 'Flight Completed';
      }

      overOverlay.style.display = 'flex';
    }

    // Input hooks
    function handleFlap() {
      if (currentState === 0) {
        startGame();
      } else if (currentState === 1) {
        bird.flap();
      }
    }

    canvas.addEventListener('mousedown', handleFlap);
    readyOverlay.addEventListener('click', handleFlap);

    win.setAttribute('tabindex', '0');
    win.focus();
    win.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.code === 'Space' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentState === 2) {
          startGame();
        } else {
          handleFlap();
        }
      }
    });

    restartBtn.addEventListener('click', startGame);

    modeSelect.addEventListener('change', () => {
      currentMode = modeSelect.value;
      if (currentState !== 1) {
        drawBackground();
        bird.draw();
      }
    });

    // Initial render
    drawBackground();
    bird.draw();
  }
}

// GarageBand / AliceSynth Studio Pro (macOS Sequoia Design)
async function launchSynth() {
  const res = await window.aliceOS.pm.spawn('synth');
  if (res.success) {
    const pid = res.data.pid;
    let octaveOffset = 0; // -1, 0, +1
    let activePreset = 'piano';
    let currentWave = 'sine';
    let filterCutoff = 2500;
    let attackTime = 0.02;
    let releaseTime = 0.4;
    let masterVolume = 0.35;
    let isMuted = false;

    const win = createWindow(pid, t('app_synth', 'AliceSynth — Audio Studio'), `
      <div class="mac-synth-app">
        <!-- Top Toolbar -->
        <div class="mac-synth-header">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:28px;height:28px;background:linear-gradient(135deg,#ff9500,#ff2d55);border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:16px;box-shadow:0 2px 6px rgba(255,149,0,0.4);">🎹</div>
            <div>
              <div style="font-size:13px;font-weight:700;letter-spacing:-0.2px;">AliceSynth Studio Pro</div>
              <div style="font-size:10px;color:#a1a1aa;">Logic Pro Synthesizer Engine • Polyphonic</div>
            </div>
          </div>

          <!-- Presets -->
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="font-size:11px;color:#a1a1aa;">Preset:</span>
            <select id="synth-preset-${pid}" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);color:white;padding:4px 10px;border-radius:6px;font-size:11px;outline:none;cursor:pointer;">
              <option value="piano" selected>Concert Grand Piano</option>
              <option value="rhodes">Vintage Rhodes EP</option>
              <option value="lead">80s Jupiter Lead</option>
              <option value="moog">Moog Deep Bass</option>
              <option value="pad">Ethereal Ambient Pad</option>
              <option value="chiptune">8-Bit Retro Chiptune</option>
            </select>
          </div>

          <!-- Octave & Volume Controls -->
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="display:flex;align-items:center;gap:4px;background:rgba(255,255,255,0.08);border-radius:6px;padding:2px 6px;">
              <span style="font-size:10px;color:#a1a1aa;">OCTAVE</span>
              <button id="synth-oct-down-${pid}" class="mac-arcade-btn" style="padding:1px 6px;font-size:11px;">-</button>
              <span id="synth-oct-val-${pid}" style="font-size:11px;font-weight:700;min-width:18px;text-align:center;">C4</span>
              <button id="synth-oct-up-${pid}" class="mac-arcade-btn" style="padding:1px 6px;font-size:11px;">+</button>
            </div>

            <div style="display:flex;align-items:center;gap:6px;">
              <span style="font-size:12px;">🔊</span>
              <input id="synth-vol-${pid}" type="range" min="0" max="100" value="35" style="width:70px;cursor:pointer;" />
            </div>
          </div>
        </div>

        <!-- Synthesizer Rack (Oscilloscope & Param Knobs) -->
        <div class="mac-synth-rack">
          <!-- Oscilloscope View -->
          <div class="mac-synth-module" style="flex:1;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:11px;font-weight:600;color:#a1a1aa;text-transform:uppercase;">Realtime Waveform Oscilloscope</span>
              <span id="synth-wave-badge-${pid}" style="font-size:10px;background:#007aff;color:white;padding:2px 6px;border-radius:4px;font-weight:700;">SINE</span>
            </div>
            <canvas id="synth-scope-${pid}" width="340" height="70" style="background:#090a0d;border-radius:6px;width:100%;height:70px;border:1px solid rgba(255,255,255,0.05);"></canvas>
          </div>

          <!-- Filter & Envelope Controls -->
          <div class="mac-synth-module" style="width:260px;">
            <div style="font-size:11px;font-weight:600;color:#a1a1aa;text-transform:uppercase;">VCF Filter & Envelope</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:11px;">
              <div>
                <div style="color:#71717a;margin-bottom:2px;">Filter Cutoff</div>
                <input id="synth-cutoff-${pid}" type="range" min="300" max="8000" value="2500" style="width:100%;" />
              </div>
              <div>
                <div style="color:#71717a;margin-bottom:2px;">Attack Speed</div>
                <input id="synth-attack-${pid}" type="range" min="1" max="100" value="2" style="width:100%;" />
              </div>
              <div>
                <div style="color:#71717a;margin-bottom:2px;">Release Time</div>
                <input id="synth-release-${pid}" type="range" min="5" max="150" value="40" style="width:100%;" />
              </div>
              <div>
                <div style="color:#71717a;margin-bottom:2px;">Wave Shape</div>
                <select id="synth-wave-type-${pid}" style="width:100%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);color:white;padding:2px;border-radius:4px;font-size:10px;outline:none;">
                  <option value="sine">Sine (Pure)</option>
                  <option value="triangle">Triangle (Warm)</option>
                  <option value="sawtooth">Saw (Aggressive)</option>
                  <option value="square">Square (Chiptune)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- 2-Octave Keybed -->
        <div class="mac-synth-keybed" id="synth-keybed-${pid}">
          <!-- Keys generated via JS -->
        </div>

        <!-- Footer Keymap Guide -->
        <div style="height:26px;background:#111215;border-top:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:space-between;padding:0 16px;font-size:11px;color:#71717a;">
          <span>Keyboard: <b>A S D F G H J K L ;</b> (White Keys) &nbsp;|&nbsp; <b>W E T Y U O P</b> (Black Keys)</span>
          <span>Polyphonic Engine Active</span>
        </div>
      </div>
    `, 'synth');

    win.style.width = '740px';
    win.style.height = '420px';

    const presetSelect = win.querySelector(`#synth-preset-${pid}`);
    const octDownBtn = win.querySelector(`#synth-oct-down-${pid}`);
    const octUpBtn = win.querySelector(`#synth-oct-up-${pid}`);
    const octVal = win.querySelector(`#synth-oct-val-${pid}`);
    const volInput = win.querySelector(`#synth-vol-${pid}`);
    const scopeCanvas = win.querySelector(`#synth-scope-${pid}`);
    const scopeCtx = scopeCanvas.getContext('2d');
    const waveBadge = win.querySelector(`#synth-wave-badge-${pid}`);
    const cutoffInput = win.querySelector(`#synth-cutoff-${pid}`);
    const attackInput = win.querySelector(`#synth-attack-${pid}`);
    const releaseInput = win.querySelector(`#synth-release-${pid}`);
    const waveTypeSelect = win.querySelector(`#synth-wave-type-${pid}`);
    const keybedEl = win.querySelector(`#synth-keybed-${pid}`);

    // Web Audio Context & Polyphony Engine
    let audioCtx = null;
    let analyser = null;
    const activeVoices = {}; // note -> { osc, gain, filter }

    function getAudioCtx() {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 512;
        analyser.connect(audioCtx.destination);
      }
      if (audioCtx.state === 'suspended') audioCtx.resume();
      return audioCtx;
    }

    // Oscilloscope render loop
    let animScopeId = null;
    function renderScope() {
      if (!windows.has(pid)) return;
      animScopeId = requestAnimationFrame(renderScope);

      scopeCtx.clearRect(0, 0, scopeCanvas.width, scopeCanvas.height);
      scopeCtx.fillStyle = '#090a0d';
      scopeCtx.fillRect(0, 0, scopeCanvas.width, scopeCanvas.height);

      // Grid lines
      scopeCtx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      scopeCtx.lineWidth = 1;
      scopeCtx.beginPath();
      scopeCtx.moveTo(0, scopeCanvas.height / 2);
      scopeCtx.lineTo(scopeCanvas.width, scopeCanvas.height / 2);
      scopeCtx.stroke();

      if (!analyser) return;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyser.getByteTimeDomainData(dataArray);

      scopeCtx.lineWidth = 2;
      scopeCtx.strokeStyle = '#00f2fe';
      scopeCtx.shadowColor = '#00f2fe';
      scopeCtx.shadowBlur = 8;
      scopeCtx.beginPath();

      const sliceWidth = scopeCanvas.width * 1.0 / bufferLength;
      let x = 0;
      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = v * scopeCanvas.height / 2;
        if (i === 0) scopeCtx.moveTo(x, y);
        else scopeCtx.lineTo(x, y);
        x += sliceWidth;
      }
      scopeCtx.stroke();
      scopeCtx.shadowBlur = 0;
    }
    renderScope();

    // Note frequencies table (C3 to B4)
    const baseScale = [
      { note: 'C3', freq: 130.81, isBlack: false, key: 'Z' },
      { note: 'C#3', freq: 138.59, isBlack: true, key: 'S' },
      { note: 'D3', freq: 146.83, isBlack: false, key: 'X' },
      { note: 'D#3', freq: 155.56, isBlack: true, key: 'D' },
      { note: 'E3', freq: 164.81, isBlack: false, key: 'C' },
      { note: 'F3', freq: 174.61, isBlack: false, key: 'V' },
      { note: 'F#3', freq: 185.00, isBlack: true, key: 'G' },
      { note: 'G3', freq: 196.00, isBlack: false, key: 'B' },
      { note: 'G#3', freq: 207.65, isBlack: true, key: 'H' },
      { note: 'A3', freq: 220.00, isBlack: false, key: 'N' },
      { note: 'A#3', freq: 233.08, isBlack: true, key: 'J' },
      { note: 'B3', freq: 246.94, isBlack: false, key: 'M' },

      { note: 'C4', freq: 261.63, isBlack: false, key: 'A' },
      { note: 'C#4', freq: 277.18, isBlack: true, key: 'W' },
      { note: 'D4', freq: 293.66, isBlack: false, key: 'S' },
      { note: 'D#4', freq: 311.13, isBlack: true, key: 'E' },
      { note: 'E4', freq: 329.63, isBlack: false, key: 'D' },
      { note: 'F4', freq: 349.23, isBlack: false, key: 'F' },
      { note: 'F#4', freq: 369.99, isBlack: true, key: 'T' },
      { note: 'G4', freq: 392.00, isBlack: false, key: 'G' },
      { note: 'G#4', freq: 415.30, isBlack: true, key: 'Y' },
      { note: 'A4', freq: 440.00, isBlack: false, key: 'H' },
      { note: 'A#4', freq: 466.16, isBlack: true, key: 'U' },
      { note: 'B4', freq: 493.88, isBlack: false, key: 'J' },
      { note: 'C5', freq: 523.25, isBlack: false, key: 'K' }
    ];

    // Build Keybed DOM
    let whiteIndex = 0;
    const whiteKeyWidth = 44;
    keybedEl.innerHTML = '';
    const keyElements = {};

    baseScale.forEach((n) => {
      const keyEl = document.createElement('div');
      keyEl.dataset.note = n.note;
      keyEl.dataset.baseFreq = n.freq;

      if (!n.isBlack) {
        keyEl.className = 'mac-white-key';
        keyEl.innerHTML = `<span>${n.note}</span>`;
        keyEl.style.left = `${whiteIndex * whiteKeyWidth}px`;
        whiteIndex++;
      } else {
        keyEl.className = 'mac-black-key';
        keyEl.style.left = `${(whiteIndex - 1) * whiteKeyWidth + 28}px`;
      }

      keybedEl.appendChild(keyEl);
      keyElements[n.note] = keyEl;

      // Mouse triggers
      keyEl.addEventListener('mousedown', (e) => {
        e.preventDefault();
        noteOn(n.note);
      });
      keyEl.addEventListener('mouseup', () => noteOff(n.note));
      keyEl.addEventListener('mouseleave', () => noteOff(n.note));
    });

    function noteOn(noteName) {
      if (activeVoices[noteName]) return; // already playing
      const ctx = getAudioCtx();
      const nData = baseScale.find(x => x.note === noteName);
      if (!nData) return;

      const multiplier = Math.pow(2, octaveOffset);
      const freq = nData.freq * multiplier;

      const osc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      osc.type = currentWave;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(filterCutoff, ctx.currentTime);

      const targetVol = isMuted ? 0 : masterVolume;
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(targetVol, ctx.currentTime + attackTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(analyser);

      osc.start();

      activeVoices[noteName] = { osc, gain, filter };

      // Highlight key
      if (keyElements[noteName]) {
        keyElements[noteName].classList.add('active');
      }
    }

    function noteOff(noteName) {
      const voice = activeVoices[noteName];
      if (!voice) return;
      const ctx = getAudioCtx();

      voice.gain.gain.cancelScheduledValues(ctx.currentTime);
      voice.gain.gain.setValueAtTime(voice.gain.gain.value, ctx.currentTime);
      voice.gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + releaseTime);

      setTimeout(() => {
        try {
          voice.osc.stop();
          voice.osc.disconnect();
          voice.gain.disconnect();
        } catch (e) {}
      }, releaseTime * 1000 + 50);

      delete activeVoices[noteName];

      if (keyElements[noteName]) {
        keyElements[noteName].classList.remove('active');
      }
    }

    // Keyboard bindings
    const keyMap = {
      'a': 'C4', 'w': 'C#4', 's': 'D4', 'e': 'D#4', 'd': 'E4', 'f': 'F4',
      't': 'F#4', 'g': 'G4', 'y': 'G#4', 'h': 'A4', 'u': 'A#4', 'j': 'B4', 'k': 'C5'
    };

    win.setAttribute('tabindex', '0');
    win.addEventListener('keydown', (e) => {
      const letter = e.key.toLowerCase();
      if (keyMap[letter]) {
        noteOn(keyMap[letter]);
      }
    });

    win.addEventListener('keyup', (e) => {
      const letter = e.key.toLowerCase();
      if (keyMap[letter]) {
        noteOff(keyMap[letter]);
      }
    });

    // Preset handler
    function applyPreset(preset) {
      activePreset = preset;
      if (preset === 'piano') {
        currentWave = 'sine';
        attackTime = 0.01;
        releaseTime = 0.5;
        filterCutoff = 3500;
      } else if (preset === 'rhodes') {
        currentWave = 'triangle';
        attackTime = 0.02;
        releaseTime = 0.8;
        filterCutoff = 2200;
      } else if (preset === 'lead') {
        currentWave = 'sawtooth';
        attackTime = 0.03;
        releaseTime = 0.3;
        filterCutoff = 4800;
      } else if (preset === 'moog') {
        currentWave = 'square';
        attackTime = 0.01;
        releaseTime = 0.2;
        filterCutoff = 1200;
      } else if (preset === 'pad') {
        currentWave = 'triangle';
        attackTime = 0.4;
        releaseTime = 1.2;
        filterCutoff = 2000;
      } else if (preset === 'chiptune') {
        currentWave = 'square';
        attackTime = 0.005;
        releaseTime = 0.1;
        filterCutoff = 7500;
      }

      waveTypeSelect.value = currentWave;
      waveBadge.innerText = currentWave.toUpperCase();
      cutoffInput.value = filterCutoff;
      attackInput.value = Math.round(attackTime * 100);
      releaseInput.value = Math.round(releaseTime * 100);
    }

    presetSelect.addEventListener('change', () => applyPreset(presetSelect.value));

    waveTypeSelect.addEventListener('change', () => {
      currentWave = waveTypeSelect.value;
      waveBadge.innerText = currentWave.toUpperCase();
    });

    cutoffInput.addEventListener('input', () => {
      filterCutoff = parseInt(cutoffInput.value, 10);
    });

    attackInput.addEventListener('input', () => {
      attackTime = parseInt(attackInput.value, 10) / 100;
    });

    releaseInput.addEventListener('input', () => {
      releaseTime = parseInt(releaseInput.value, 10) / 100;
    });

    volInput.addEventListener('input', () => {
      masterVolume = parseInt(volInput.value, 10) / 100;
    });

    octDownBtn.addEventListener('click', () => {
      if (octaveOffset > -2) {
        octaveOffset--;
        octVal.innerText = `C${4 + octaveOffset}`;
      }
    });

    octUpBtn.addEventListener('click', () => {
      if (octaveOffset < 2) {
        octaveOffset++;
        octVal.innerText = `C${4 + octaveOffset}`;
      }
    });

    applyPreset('piano');
  }
}

// Apple Astronomy & Cosmic Physics Simulator (macOS Sequoia Design)
async function launchUniverse() {
  const res = await window.aliceOS.pm.spawn('universe');
  if (res.success) {
    const pid = res.data.pid;
    let currentPreset = 'galaxy';
    let currentPalette = 'cyan';
    let numParticles = 3000;
    let timeScale = 1.0;
    let gravityForce = 1.0;

    const win = createWindow(pid, t('app_universe', 'Astronomy — Cosmic Physics'), `
      <div class="mac-universe-app">
        <!-- Top Toolbar -->
        <div class="mac-arcade-header" style="height:46px;background:rgba(18,18,24,0.9);border-bottom:1px solid rgba(255,255,255,0.08);">
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:26px;height:26px;background:linear-gradient(135deg,#5856d6,#007aff);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:15px;box-shadow:0 2px 6px rgba(88,86,214,0.4);">🌌</div>
            <div>
              <div style="font-size:12px;font-weight:700;letter-spacing:-0.2px;">Apple Astronomy</div>
              <div style="font-size:9px;color:#a1a1aa;">N-Body Gravitational Physics • 60 FPS</div>
            </div>
          </div>

          <!-- Presets -->
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="font-size:11px;color:#a1a1aa;">Preset:</span>
            <select id="uni-preset-${pid}" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);color:white;padding:3px 8px;border-radius:6px;font-size:11px;outline:none;cursor:pointer;">
              <option value="galaxy" selected>Milky Way Spiral</option>
              <option value="solar">Solar Orbit & Belts</option>
              <option value="blackhole">Black Hole Accretion</option>
              <option value="supernova">Supernova Shockwave</option>
              <option value="chaos">Cosmic Nebula Chaos</option>
            </select>
          </div>

          <!-- Palette & Particle Count -->
          <div style="display:flex;align-items:center;gap:8px;">
            <select id="uni-palette-${pid}" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);color:white;padding:3px 8px;border-radius:6px;font-size:11px;outline:none;cursor:pointer;">
              <option value="cyan" selected>Deep Space Cyan</option>
              <option value="violet">Nebula Violet</option>
              <option value="solar">Stellar Gold</option>
              <option value="emerald">Aurora Emerald</option>
            </select>

            <select id="uni-count-${pid}" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);color:white;padding:3px 8px;border-radius:6px;font-size:11px;outline:none;cursor:pointer;">
              <option value="1500">1,500 Stars</option>
              <option value="3000" selected>3,000 Stars</option>
              <option value="5000">5,000 Stars</option>
            </select>

            <button id="uni-reset-${pid}" class="mac-arcade-btn" style="padding:3px 8px;font-size:11px;">Reset</button>
          </div>
        </div>

        <!-- Canvas Stage -->
        <div style="flex:1;position:relative;background:#000003;overflow:hidden;" id="uni-container-${pid}">
          <canvas id="uni-canvas-${pid}" style="display:block;width:100%;height:100%;cursor:crosshair;"></canvas>

          <!-- Telemetry HUD Badge -->
          <div style="position:absolute;top:12px;left:14px;background:rgba(18,18,22,0.7);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:8px 12px;font-size:11px;color:#a1a1aa;line-height:1.5;pointer-events:none;">
            <div style="display:flex;align-items:center;gap:6px;color:#fff;font-weight:600;">
              <div style="width:6px;height:6px;border-radius:50%;background:#34c759;box-shadow:0 0 6px #34c759;"></div>
              <span id="uni-fps-${pid}">60 FPS</span>
            </div>
            <div id="uni-stars-lbl-${pid}">Active Bodies: 3,000</div>
            <div style="color:#71717a;font-size:10px;margin-top:2px;">Left Click: Gravitational Sink &nbsp;|&nbsp; Right Click: Pulse Repel</div>
          </div>
        </div>
      </div>
    `, 'universe');

    win.style.width = '700px';
    win.style.height = '520px';

    const canvas = win.querySelector(`#uni-canvas-${pid}`);
    const ctx = canvas.getContext('2d');
    const presetSelect = win.querySelector(`#uni-preset-${pid}`);
    const paletteSelect = win.querySelector(`#uni-palette-${pid}`);
    const countSelect = win.querySelector(`#uni-count-${pid}`);
    const resetBtn = win.querySelector(`#uni-reset-${pid}`);
    const fpsEl = win.querySelector(`#uni-fps-${pid}`);
    const starsLbl = win.querySelector(`#uni-stars-lbl-${pid}`);

    let width = canvas.width = 700;
    let height = canvas.height = 470;

    function resize() {
      if (!windows.has(pid)) return;
      width = canvas.width = canvas.clientWidth;
      height = canvas.height = canvas.clientHeight;
    }
    const observer = new ResizeObserver(resize);
    observer.observe(canvas.parentElement);

    let particles = [];
    let mouse = { x: width / 2, y: height / 2, down: false, rightDown: false };

    function getHue(base) {
      if (base === 'cyan') return Math.random() * 60 + 175; // 175-235 (cyan-blue)
      if (base === 'violet') return Math.random() * 70 + 260; // 260-330 (purple-pink)
      if (base === 'solar') return Math.random() * 50 + 20; // 20-70 (orange-yellow)
      if (base === 'emerald') return Math.random() * 60 + 120; // 120-180 (green-teal)
      return 200;
    }

    function initUniverse(preset = currentPreset) {
      particles = [];
      const cx = width / 2;
      const cy = height / 2;

      for (let i = 0; i < numParticles; i++) {
        let x, y, vx, vy, radius = Math.random() * 1.5 + 0.5;

        if (preset === 'galaxy') {
          // Logarithmic Spiral Galaxy
          const arms = 2;
          const arm = Math.floor(Math.random() * arms);
          const dist = Math.pow(Math.random(), 2) * Math.min(cx, cy) * 0.9 + 10;
          const angle = dist * 0.03 + (arm * (Math.PI * 2 / arms)) + (Math.random() - 0.5) * 0.4;
          x = cx + Math.cos(angle) * dist;
          y = cy + Math.sin(angle) * dist;
          const orbitalSpeed = Math.sqrt(dist) * 0.16;
          vx = -Math.sin(angle) * orbitalSpeed;
          vy = Math.cos(angle) * orbitalSpeed;
        } else if (preset === 'solar') {
          // Orbital Disc around central sun
          const dist = Math.random() * Math.min(cx, cy) * 0.85 + 20;
          const angle = Math.random() * Math.PI * 2;
          x = cx + Math.cos(angle) * dist;
          y = cy + Math.sin(angle) * dist;
          const speed = Math.sqrt(1200 / dist) * (Math.random() * 0.2 + 0.9);
          vx = -Math.sin(angle) * speed;
          vy = Math.cos(angle) * speed;
        } else if (preset === 'blackhole') {
          // Fast rotating accretion disk
          const dist = Math.random() * 160 + 15;
          const angle = Math.random() * Math.PI * 2;
          x = cx + Math.cos(angle) * dist;
          y = cy + Math.sin(angle) * dist;
          const speed = 2.4 / Math.sqrt(dist * 0.05);
          vx = -Math.sin(angle) * speed;
          vy = Math.cos(angle) * speed;
        } else if (preset === 'supernova') {
          // Outward expanding burst
          x = cx + (Math.random() - 0.5) * 10;
          y = cy + (Math.random() - 0.5) * 10;
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 4.5 + 0.5;
          vx = Math.cos(angle) * speed;
          vy = Math.sin(angle) * speed;
        } else {
          // Chaos
          x = Math.random() * width;
          y = Math.random() * height;
          vx = (Math.random() - 0.5) * 1.5;
          vy = (Math.random() - 0.5) * 1.5;
        }

        const hue = getHue(currentPalette);
        particles.push({
          x, y, vx, vy, radius,
          color: `hsl(${hue}, 95%, ${Math.random() * 30 + 65}%)`
        });
      }

      starsLbl.innerText = `Active Bodies: ${numParticles.toLocaleString()}`;
    }

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    canvas.addEventListener('mousedown', (e) => {
      if (e.button === 2) {
        mouse.rightDown = true;
      } else {
        mouse.down = true;
      }
    });

    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    window.addEventListener('mouseup', () => {
      mouse.down = false;
      mouse.rightDown = false;
    });

    let lastTime = performance.now();
    let frameCount = 0;

    function render() {
      if (!windows.has(pid)) {
        observer.disconnect();
        return;
      }

      requestAnimationFrame(render);
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        fpsEl.innerText = `${frameCount} FPS`;
        frameCount = 0;
        lastTime = now;
      }

      // Smooth cosmic trailing effect
      ctx.fillStyle = 'rgba(0, 0, 3, 0.18)';
      ctx.fillRect(0, 0, width, height);

      const targetX = mouse.down || mouse.rightDown ? mouse.x : width / 2;
      const targetY = mouse.down || mouse.rightDown ? mouse.y : height / 2;
      const forceMultiplier = mouse.rightDown ? -3.0 : (mouse.down ? 3.0 : 0.6);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const dx = targetX - p.x;
        const dy = targetY - p.y;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq) + 8;

        const force = (800 * forceMultiplier * gravityForce) / distSq;
        const ax = force * (dx / dist);
        const ay = force * (dy / dist);

        p.vx = (p.vx + ax * timeScale) * 0.985;
        p.vy = (p.vy + ay * timeScale) * 0.985;

        p.x += p.vx * timeScale;
        p.y += p.vy * timeScale;

        // Wrap around viewport softly
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      // Draw center gravitational event horizon indicator when interacting
      if (mouse.down || mouse.rightDown) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(targetX, targetY, mouse.down ? 16 : 30, 0, Math.PI * 2);
        ctx.strokeStyle = mouse.down ? 'rgba(0, 242, 254, 0.6)' : 'rgba(255, 45, 85, 0.6)';
        ctx.lineWidth = 2;
        ctx.shadowColor = mouse.down ? '#00f2fe' : '#ff2d55';
        ctx.shadowBlur = 15;
        ctx.stroke();
        ctx.restore();
      }
    }

    presetSelect.addEventListener('change', () => {
      currentPreset = presetSelect.value;
      initUniverse(currentPreset);
    });

    paletteSelect.addEventListener('change', () => {
      currentPalette = paletteSelect.value;
      initUniverse(currentPreset);
    });

    countSelect.addEventListener('change', () => {
      numParticles = parseInt(countSelect.value, 10);
      initUniverse(currentPreset);
    });

    resetBtn.addEventListener('click', () => {
      initUniverse(currentPreset);
    });

    setTimeout(() => {
      resize();
      initUniverse('galaxy');
      render();
    }, 50);
  }
}

// Alice App Store (macOS Sequoia Design)
async function launchStore() {
  const res = await window.aliceOS.pm.spawn('store');
  if (res.success) {
    const pid = res.data.pid;
    let activeTab = 'discover';

    const storeApps = [
      { id: 'xcode', name: 'Xcode 16 Studio', category: 'develop', icon: '🛠️', desc: 'Powerful IDE with Swift syntax, LLDB console & live build.', badge: 'Apple Silicon Ready', action: 'launchIDE()', installed: true },
      { id: 'maps', name: 'Apple Maps 3D', category: 'discover', icon: '🗺️', desc: 'Explore world landmarks with Look Around and live transit.', badge: 'Sequoia Edition', action: 'launchMaps()', installed: true },
      { id: 'camera', name: 'Photo Booth HD', category: 'create', icon: '📸', desc: 'Take studio photos with 8 live filter effects & 3-2-1 timer.', badge: 'Popular', action: 'launchCamera()', installed: true },
      { id: 'markup', name: 'Photos & Markup', category: 'create', icon: '🎨', desc: 'Precision sketching with Apple Pencil smoothing & palettes.', badge: 'Creative Choice', action: 'launchPaint()', installed: true },
      { id: 'tictactoe', name: 'TicTacToe Pro', category: 'play', icon: '⭕', desc: 'Sleek glass board puzzle game with intelligent AI opponent.', badge: 'Arcade Classic', action: 'launchTicTacToe()', installed: false },
      { id: 'snake', name: 'Snake Arcade 2', category: 'play', icon: '🐍', desc: 'Retro arcade classic with high-score tracking & smooth physics.', badge: 'Game of the Day', action: 'launchSnake()', installed: true },
      { id: 'synth', name: 'Logic Synth Audio', category: 'create', icon: '🎹', desc: 'WebAudio polyphonic synthesizer with real-time waveform filters.', badge: 'Pro Audio', action: 'launchSynth()', installed: true },
      { id: 'universe', name: 'Cosmic Gravity 3D', category: 'play', icon: '🌌', desc: 'Orbital physics and cosmic particle simulation sandbox.', badge: 'Simulation', action: 'launchUniverse()', installed: true },
      { id: 'notes', name: 'Apple Notes', category: 'work', icon: '📝', desc: 'Rich notes organizer with VFS persistence and live search.', badge: 'Essential', action: 'launchNotes()', installed: true },
      { id: 'activity', name: 'Activity Monitor', category: 'work', icon: '📊', desc: 'Real-time CPU, RAM and hardware thread telemetry.', badge: 'System Tool', action: 'launchActivityMonitor()', installed: true },
      { id: 'terminal', name: 'Zsh Terminal', category: 'develop', icon: '💻', desc: 'Advanced microkernel command terminal with APT bridge.', badge: 'Developer Tool', action: 'launchTerminal()', installed: true },
      { id: 'syslogs', name: 'Console & Kernel Logs', category: 'develop', icon: '📋', desc: 'Real-time IPC bridge telemetry and microkernel audit trace.', badge: 'Diagnostics', action: 'launchSysLogs()', installed: false }
    ];

    const win = createWindow(pid, t('app_store', 'App Store'), `
      <div class="mac-store-app">
        <!-- App Store Sidebar -->
        <div class="mac-store-sidebar">
          <div style="padding:4px 8px 12px;display:flex;align-items:center;gap:8px;">
            <input type="text" id="store-search-${pid}" placeholder="🔍 ${t('store_search', 'Search')}" style="width:100%;border:none;background:rgba(0,0,0,0.06);padding:6px 12px;border-radius:10px;font-size:12px;outline:none;">
          </div>
          <div class="mac-store-nav-item active" data-tab="discover">
            <span>🌟</span> <span class="nav-text">${t('store_nav_discover', 'Discover')}</span>
          </div>
          <div class="mac-store-nav-item" data-tab="create">
            <span>🎨</span> <span class="nav-text">${t('store_nav_create', 'Create')}</span>
          </div>
          <div class="mac-store-nav-item" data-tab="work">
            <span>💼</span> <span class="nav-text">${t('store_nav_work', 'Work')}</span>
          </div>
          <div class="mac-store-nav-item" data-tab="play">
            <span>🎮</span> <span class="nav-text">${t('store_nav_play', 'Play')}</span>
          </div>
          <div class="mac-store-nav-item" data-tab="develop">
            <span>🛠️</span> <span class="nav-text">${t('store_nav_develop', 'Develop')}</span>
          </div>
          <div class="mac-store-nav-item" data-tab="updates">
            <span>🔄</span> <span class="nav-text">${t('store_nav_updates', 'Updates')}</span>
          </div>
        </div>

        <!-- App Store Main Content Area -->
        <div class="mac-store-content" id="store-content-${pid}">
          <!-- Rendered dynamically -->
        </div>
      </div>
    `);

    win.style.width = '860px';
    win.style.height = '580px';

    const contentEl = win.querySelector(`#store-content-${pid}`);
    const navItems = win.querySelectorAll('.mac-store-nav-item');
    const searchInp = win.querySelector(`#store-search-${pid}`);

    // Define TicTacToe globally if not defined
    if (typeof window.launchTicTacToe !== 'function') {
      window.launchTicTacToe = async function() {
        const ttRes = await window.aliceOS.pm.spawn('tictactoe');
        if (ttRes.success) {
          const ttPid = ttRes.data.pid;
          let board = Array(9).fill(null);
          let currentTurn = 'X'; // X is Human, O is AI
          let winner = null;

          const ttWin = createWindow(ttPid, 'TicTacToe Pro', `
            <div style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#1f1c2c,#928dab);color:white;font-family:-apple-system,sans-serif;user-select:none;">
              <div style="font-size:20px;font-weight:700;margin-bottom:6px;">TicTacToe Pro</div>
              <div id="tt-status-${ttPid}" style="font-size:13px;opacity:0.85;margin-bottom:20px;">Your Turn (X)</div>
              <div style="display:grid;grid-template-columns:repeat(3, 80px);grid-template-rows:repeat(3, 80px);gap:8px;background:rgba(255,255,255,0.1);padding:10px;border-radius:16px;backdrop-filter:blur(20px);box-shadow:0 8px 32px rgba(0,0,0,0.3);">
                ${board.map((_, i) => `<button id="tt-cell-${ttPid}-${i}" style="background:rgba(255,255,255,0.15);border:none;border-radius:12px;font-size:32px;font-weight:700;color:white;cursor:pointer;transition:background 0.15s;"></button>`).join('')}
              </div>
              <button id="tt-restart-${ttPid}" style="margin-top:20px;background:#007aff;color:white;border:none;padding:6px 18px;border-radius:14px;font-size:12px;font-weight:600;cursor:pointer;">Restart Game</button>
            </div>
          `);
          ttWin.style.width = '340px';
          ttWin.style.height = '420px';

          function checkWinner(b) {
            const lines = [
              [0,1,2],[3,4,5],[6,7,8],
              [0,3,6],[1,4,7],[2,5,8],
              [0,4,8],[2,4,6]
            ];
            for (let [a,b1,c] of lines) {
              if (b[a] && b[a] === b[b1] && b[a] === b[c]) return b[a];
            }
            if (b.every(c => c !== null)) return 'Draw';
            return null;
          }

          function aiMove() {
            if (winner) return;
            const emptyIdxs = board.map((v, i) => v === null ? i : null).filter(v => v !== null);
            if (emptyIdxs.length === 0) return;
            const chosen = emptyIdxs[Math.floor(Math.random() * emptyIdxs.length)];
            board[chosen] = 'O';
            updateUI();
          }

          function updateUI() {
            winner = checkWinner(board);
            const statusEl = ttWin.querySelector(`#tt-status-${ttPid}`);
            board.forEach((val, i) => {
              const btn = ttWin.querySelector(`#tt-cell-${ttPid}-${i}`);
              if (btn) {
                btn.innerText = val || '';
                btn.style.color = val === 'X' ? '#38bdf8' : '#f87171';
              }
            });
            if (winner === 'Draw') statusEl.innerText = 'Game is a Draw!';
            else if (winner) statusEl.innerText = `${winner} Wins! 🎉`;
            else statusEl.innerText = currentTurn === 'X' ? 'Your Turn (X)' : 'Mac AI Thinking...';
          }

          board.forEach((_, i) => {
            const btn = ttWin.querySelector(`#tt-cell-${ttPid}-${i}`);
            btn.addEventListener('click', () => {
              if (board[i] || winner || currentTurn !== 'X') return;
              board[i] = 'X';
              winner = checkWinner(board);
              if (!winner) {
                currentTurn = 'O';
                updateUI();
                setTimeout(() => {
                  aiMove();
                  currentTurn = 'X';
                  updateUI();
                }, 400);
              } else {
                updateUI();
              }
            });
          });

          ttWin.querySelector(`#tt-restart-${ttPid}`).addEventListener('click', () => {
            board = Array(9).fill(null);
            winner = null;
            currentTurn = 'X';
            updateUI();
          });
        }
      };
    }

    if (typeof window.launchSysLogs !== 'function') {
      window.launchSysLogs = async function() {
        const slRes = await window.aliceOS.pm.spawn('syslogs');
        if (slRes.success) {
          const slPid = slRes.data.pid;
          const slWin = createWindow(slPid, 'Console & Kernel Logs', `
            <div style="background:#111114;color:#a1a1aa;height:100%;display:flex;flex-direction:column;font-family:'SF Mono',Monaco,monospace;font-size:11px;user-select:none;">
              <div style="background:#1e1e24;padding:8px 14px;border-bottom:1px solid rgba(255,255,255,0.08);display:flex;justify-content:space-between;align-items:center;">
                <span style="color:#f5f5f7;font-weight:600;">macOS Sequoia Kernel Audit Stream</span>
                <span style="color:#34c759;">● LIVE STREAMING</span>
              </div>
              <div id="sl-feed-${slPid}" style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:4px;color:#d1d5db;">
                <div><span style="color:#60a5fa;">[BOOT]</span> Alice Microkernel initialized on Darwin x86_64</div>
                <div><span style="color:#34c759;">[VFS]</span> Mounted JSON Virtual File System at /AppData/Roaming/AliceOS/vfs.json</div>
                <div><span style="color:#a78bfa;">[GPU]</span> Aero Compositor Hardware Acceleration enabled (Metal Engine)</div>
                <div><span style="color:#fbbf24;">[IPC]</span> Node.js IPC Bridge socket connected to WindowServer (PID 1)</div>
                <div><span style="color:#34c759;">[SEC]</span> Gatekeeper and SIP status: enabled (Apple Root CA verified)</div>
              </div>
            </div>
          `);
          slWin.style.width = '640px';
          slWin.style.height = '400px';

          const feed = slWin.querySelector(`#sl-feed-${slPid}`);
          const logInterval = setInterval(() => {
            if (!windows.has(slPid)) {
              clearInterval(logInterval);
              return;
            }
            const time = new Date().toLocaleTimeString();
            const logItem = document.createElement('div');
            logItem.innerHTML = `<span style="color:#60a5fa;">[${time}]</span> Kernel heartbeat tick: loadavg 0.12, 0.08, 0.05 • Active processes: ${windows.size}`;
            feed.appendChild(logItem);
            feed.scrollTop = feed.scrollHeight;
          }, 3500);
        }
      };
    }

    function renderStore(filterQuery = '') {
      let filtered = storeApps;
      if (activeTab !== 'discover' && activeTab !== 'updates') {
        filtered = storeApps.filter(a => a.category === activeTab);
      }
      if (filterQuery) {
        const q = filterQuery.toLowerCase().trim();
        filtered = storeApps.filter(a => a.name.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q));
      }

      if (activeTab === 'updates') {
        contentEl.innerHTML = `
          <div style="display:flex;flex-direction:column;gap:20px;">
            <div style="font-size:24px;font-weight:700;">${t('store_nav_updates', 'Updates')}</div>
            <div style="background:white;padding:24px;border-radius:16px;border:1px solid rgba(0,0,0,0.06);display:flex;align-items:center;gap:18px;">
              <div style="font-size:36px;color:#34c759;">✓</div>
              <div>
                <div style="font-size:15px;font-weight:700;">All Applications Up to Date</div>
                <div style="font-size:12px;color:#6e6e73;margin-top:2px;">macOS Sequoia Core Architecture 15.1 (24B83) and all built-in packages are running latest releases.</div>
              </div>
            </div>
          </div>
        `;
        return;
      }

      let heroHtml = '';
      if (activeTab === 'discover') {
        heroHtml = `
          <div class="mac-store-hero">
            <div style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;opacity:0.85;margin-bottom:4px;">FEATURED SUITE</div>
            <div style="font-size:26px;font-weight:700;margin-bottom:8px;">Pro Creative & Developer Suites for AliceOS</div>
            <div style="font-size:13px;opacity:0.9;max-width:540px;line-height:1.5;">Build high performance software, explore world landmarks in 3D, and sketch vector illustrations with native macOS Sequoia workflows.</div>
          </div>
        `;
      }

      contentEl.innerHTML = `
        ${heroHtml}
        <div style="font-size:18px;font-weight:700;margin-top:4px;">${activeTab === 'discover' ? t('store_popular_apps', 'Popular Apps & Extensions') : activeTab.toUpperCase()}</div>
        <div class="mac-store-grid">
          ${filtered.map(app => `
            <div class="mac-store-card">
              <div style="font-size:40px;">${app.icon}</div>
              <div style="flex:1;min-width:0;">
                <div style="font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${app.name}</div>
                <div style="font-size:11px;color:#6e6e73;margin-top:2px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${app.desc}</div>
                <div style="font-size:9px;color:#007aff;font-weight:600;margin-top:4px;">${app.badge}</div>
              </div>
              <button class="mac-store-get-btn ${app.installed ? 'installed' : ''}" data-id="${app.id}">
                ${app.installed ? t('store_open', 'OPEN') : t('store_get', 'GET')}
              </button>
            </div>
          `).join('')}
        </div>
      `;

      contentEl.querySelectorAll('.mac-store-get-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
          const appId = btn.getAttribute('data-id');
          const app = storeApps.find(a => a.id === appId);
          if (!app) return;

          if (app.installed) {
            eval(app.action);
          } else {
            btn.innerText = '...';
            btn.style.opacity = '0.7';
            await new Promise(r => setTimeout(r, 600));
            app.installed = true;
            btn.innerText = t('store_open', 'OPEN');
            btn.classList.add('installed');
            btn.style.opacity = '1';

            // Add to Launchpad registry if needed
            if (!apps.find(a => a.name === app.name)) {
              apps.push({ name: app.name, icon: app.icon, action: app.action });
              const launchpadApps = document.getElementById('launchpad-apps');
              if (launchpadApps) {
                launchpadApps.innerHTML = apps.map(a => `
                  <div class="app-icon" onclick="${a.action}; toggleLaunchpad();">
                    <div class="icon">${a.icon}</div>
                    <div class="name">${a.name}</div>
                  </div>
                `).join('');
              }
            }
            if (typeof showNotification === 'function') {
              showNotification(t('app_store', 'App Store'), `Successfully installed ${app.name}`);
            }
          }
        });
      });
    }

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navItems.forEach(n => n.classList.remove('active'));
        item.classList.add('active');
        activeTab = item.getAttribute('data-tab');
        renderStore(searchInp ? searchInp.value : '');
      });
    });

    if (searchInp) {
      searchInp.addEventListener('input', (e) => {
        renderStore(e.target.value);
      });
    }

    renderStore();

    win._onLanguageChange = () => {
      const searchBox = win.querySelector(`#store-search-${pid}`);
      if (searchBox) searchBox.placeholder = `🔍 ${t('store_search', 'Search')}`;
      renderStore(searchBox ? searchBox.value : '');
    };
  }
}

// Xcode 16 Developer Studio (macOS Sequoia Design)
async function launchIDE() {
  const res = await window.aliceOS.pm.spawn('ide');
  if (res.success) {
    const pid = res.data.pid;

    const projectFiles = {
      'main.swift': `//
//  main.swift
//  AliceApp
//
//  Created by Alice on 2026/09/14.
//  Copyright © 2026 Apple Inc. All rights reserved.
//

import AliceKit
import SwiftUI

@main
struct AliceApp {
    static async func main() async {
        print("[XCODE] Initializing AliceKit Framework...")
        
        // Inspect Virtual File System
        let files = await window.aliceOS.vfs.readDir("/Users/" + currentUser + "/Desktop");
        print("[XCODE] Desktop VFS files mounted: \\(files.data ? files.data.length : 0)");
        
        // System telemetry
        print("[XCODE] Target: macOS Sequoia 15.1 (Apple Silicon M4)");
        print("[XCODE] Status: Execution Completed with Code 0.");
        return "Build & Execution Succeeded! ✨";
    }
}
await AliceApp.main();`,

      'KernelBridge.swift': `//
//  KernelBridge.swift
//  AliceApp
//

class KernelBridge {
    static func pingKernel() -> String {
        return "IPC Bridge Socket Active: PID " + String(window.aliceOS ? 1 : 0);
    }
}
print(KernelBridge.pingKernel());`,

      'ContentView.swift': `//
//  ContentView.swift
//  AliceApp
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 20) {
            Image(systemName: "apple.logo")
                .font(.system(size: 64))
                .foregroundColor(.accentColor)
            Text("Welcome to AliceOS")
                .font(.title)
                .fontWeight(.bold)
        }
        .padding()
    }
}
print("[SWIFTUI] ContentView rendered.");`,

      'Info.plist': `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>CFBundleName</key>
    <string>AliceApp</string>
    <key>CFBundleIdentifier</key>
    <string>com.apple.aliceapp</string>
    <key>CFBundleVersion</key>
    <string>1.0.0</string>
</dict>
</plist>`
    };

    let activeFile = 'main.swift';

    const win = createWindow(pid, t('app_ide', 'Xcode'), `
      <div class="xcode-mac-app">
        <!-- Xcode 16 macOS Toolbar -->
        <div class="xcode-toolbar">
          <div style="display:flex;align-items:center;gap:12px;">
            <div class="xcode-run-pill">
              <button class="xcode-btn" id="xcode-run-${pid}" title="${t('xcode_run', 'Run (⌘R)')}" style="color:#34c759;">▶</button>
              <button class="xcode-btn" id="xcode-stop-${pid}" title="${t('xcode_stop', 'Stop (⌘.)')}" style="color:#ff453a;">■</button>
            </div>
            
            <!-- Scheme Selector -->
            <div style="display:flex;align-items:center;gap:6px;background:rgba(0,0,0,0.3);padding:4px 12px;border-radius:6px;font-size:12px;cursor:pointer;border:1px solid rgba(255,255,255,0.06);">
              <span style="font-weight:600;color:#f5f5f7;">AliceApp</span>
              <span style="color:#71717a;">></span>
              <span style="color:#a1a1aa;">My Mac (Apple Silicon M4)</span>
              <span style="font-size:9px;color:#71717a;margin-left:4px;">▼</span>
            </div>
          </div>

          <!-- Build Status Capsule -->
          <div class="xcode-status-pill" id="xcode-status-${pid}">
            <span style="color:#34c759;">✓</span> Build AliceApp: Succeeded | Today at 13:45
          </div>

          <!-- View Controls -->
          <div style="display:flex;gap:4px;">
            <button class="xcode-btn" id="xcode-clear-btn-${pid}" title="${t('xcode_clear', 'Clear Console')}" style="font-size:11px;background:rgba(255,255,255,0.08);">🗑 Clear</button>
          </div>
        </div>

        <!-- Xcode Body -->
        <div class="xcode-body">
          <!-- Project Navigator Sidebar -->
          <div class="xcode-sidebar">
            <div style="font-size:11px;font-weight:700;color:#71717a;text-transform:uppercase;letter-spacing:0.5px;padding:4px 8px;">Project Navigator</div>
            <div class="xcode-tree-item" style="font-weight:600;">
              <span>📁</span> <span>AliceApp</span>
            </div>
            <div style="margin-left:14px;display:flex;flex-direction:column;gap:1px;">
              <div class="xcode-tree-item active" data-file="main.swift">
                <span>📄</span> <span>main.swift</span>
              </div>
              <div class="xcode-tree-item" data-file="KernelBridge.swift">
                <span>📄</span> <span>KernelBridge.swift</span>
              </div>
              <div class="xcode-tree-item" data-file="ContentView.swift">
                <span>📄</span> <span>ContentView.swift</span>
              </div>
              <div class="xcode-tree-item" data-file="Info.plist">
                <span>⚙️</span> <span>Info.plist</span>
              </div>
            </div>
          </div>

          <!-- Editor & Debug Pane -->
          <div class="xcode-editor-pane">
            <!-- Breadcrumbs -->
            <div style="height:28px;background:#18181c;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;padding:0 14px;gap:8px;font-size:11px;color:#71717a;">
              <span>AliceApp</span> <span>›</span> <span>Sources</span> <span>›</span> <span id="xcode-crumb-file-${pid}" style="color:#e4e4e7;">main.swift</span>
            </div>

            <!-- Code Editor Container with Line Numbers -->
            <div style="flex:1;display:flex;position:relative;overflow:hidden;background:#1e1e24;">
              <div id="xcode-gutter-${pid}" style="width:38px;background:#18181c;color:#52525b;font-family:'SF Mono',monospace;font-size:12px;line-height:1.6;padding:14px 6px;text-align:right;user-select:none;border-right:1px solid rgba(255,255,255,0.06);">
                ${Array.from({length: 30}, (_, i) => i + 1).join('<br>')}
              </div>
              <textarea id="xcode-code-${pid}" class="xcode-code-textarea" spellcheck="false">${projectFiles['main.swift']}</textarea>
            </div>

            <!-- LLDB Console Pane -->
            <div class="xcode-console-pane" id="xcode-console-${pid}">
              <div style="color:#71717a;margin-bottom:4px;font-size:10px;border-bottom:1px solid rgba(255,255,255,0.06);padding-bottom:2px;display:flex;justify-content:space-between;">
                <span>(lldb) Target Debugger Output</span>
                <span>Console active</span>
              </div>
              <div id="xcode-log-output-${pid}">
                <span style="color:#60a5fa;">[Xcode 16.0]</span> LLDB Debugger attached to process. Ready.<br>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);

    win.style.width = '860px';
    win.style.height = '560px';

    const runBtn = win.querySelector(`#xcode-run-${pid}`);
    const stopBtn = win.querySelector(`#xcode-stop-${pid}`);
    const clearBtn = win.querySelector(`#xcode-clear-btn-${pid}`);
    const codeArea = win.querySelector(`#xcode-code-${pid}`);
    const logOutput = win.querySelector(`#xcode-log-output-${pid}`);
    const statusPill = win.querySelector(`#xcode-status-${pid}`);
    const crumbFile = win.querySelector(`#xcode-crumb-file-${pid}`);
    const treeItems = win.querySelectorAll('.xcode-tree-item[data-file]');

    // File switching
    treeItems.forEach(item => {
      item.addEventListener('click', () => {
        // Save current file
        projectFiles[activeFile] = codeArea.value;

        treeItems.forEach(t => t.classList.remove('active'));
        item.classList.add('active');

        activeFile = item.getAttribute('data-file');
        crumbFile.innerText = activeFile;
        codeArea.value = projectFiles[activeFile] || '';
      });
    });

    // Run action
    runBtn.addEventListener('click', async () => {
      projectFiles[activeFile] = codeArea.value;
      statusPill.innerHTML = '<span style="color:#f59e0b;">●</span> Building AliceApp...';

      let logs = [];
      const originalLog = console.log;
      console.log = (...args) => {
        logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : a).join(' '));
        originalLog(...args);
      };

      await new Promise(r => setTimeout(r, 450));

      try {
        const code = codeArea.value;
        const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
        const executor = new AsyncFunction(code);
        const result = await executor();

        statusPill.innerHTML = '<span style="color:#34c759;">✓</span> Build AliceApp: Succeeded';
        
        let outputHtml = '';
        if (logs.length > 0) {
          outputHtml += logs.map(l => `<div><span style="color:#34c759;">[OUT]</span> ${l}</div>`).join('');
        }
        if (result !== undefined) {
          outputHtml += `<div><span style="color:#60a5fa;">(lldb) po result:</span> <span style="color:#f5f5f7;">${result}</span></div>`;
        }
        outputHtml += `<div><span style="color:#71717a;">Program ended with exit code: 0</span></div>`;
        logOutput.innerHTML += outputHtml;

      } catch (err) {
        statusPill.innerHTML = '<span style="color:#ef4444;">✕</span> Build AliceApp: Failed';
        logOutput.innerHTML += `<div><span style="color:#ef4444;">(lldb) Exception: ${err.message}</span></div>`;
      } finally {
        console.log = originalLog;
        const consolePane = win.querySelector(`#xcode-console-${pid}`);
        if (consolePane) consolePane.scrollTop = consolePane.scrollHeight;
      }
    });

    stopBtn.addEventListener('click', () => {
      statusPill.innerHTML = '<span style="color:#a1a1aa;">■</span> Execution Halted';
      logOutput.innerHTML += `<div><span style="color:#f87171;">[LLDB] Process halted by user.</span></div>`;
    });

    clearBtn.addEventListener('click', () => {
      logOutput.innerHTML = '';
    });

    win._onLanguageChange = () => {
      const runB = win.querySelector(`#xcode-run-${pid}`);
      if (runB) runB.title = t('xcode_run', 'Run (⌘R)');
      const stopB = win.querySelector(`#xcode-stop-${pid}`);
      if (stopB) stopB.title = t('xcode_stop', 'Stop (⌘.)');
    };
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
  if (window.AppleAudioEngine) {
    window.AppleAudioEngine.playPop();
  }
}
window.playVolumeFeedbackBeep = playVolumeFeedbackBeep;

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
      if (window.AppleAudioEngine) {
        window.AppleAudioEngine.playThrottledVolumePop(Math.max(0.2, val / 100));
      }
    });

    volSlider.addEventListener('change', () => {
      if (window.AppleAudioEngine) {
        window.AppleAudioEngine.playPop();
      }
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
      if (window.AppleAudioEngine) {
        window.AppleAudioEngine.playThrottledVolumePop(Math.max(0.2, val / 100));
      }
    });

    slider.addEventListener('change', () => {
      if (window.AppleAudioEngine) {
        window.AppleAudioEngine.playPop();
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

// ==========================================
// macOS Interactive Screenshot Tool & Floating Thumbnail Controller
// Shortcuts: Ctrl+Shift+4 / Cmd+Shift+4 (Area Selection)
//            Ctrl+Shift+3 / Cmd+Shift+3 (Full Screen)
// ==========================================
let isScreenshotMode = false;
let screenshotStartX = 0;
let screenshotStartY = 0;
let currentScreenshotDataUrl = null;
let screenshotDismissTimer = null;

const ssOverlay = document.getElementById('screenshot-overlay');
const ssSelection = document.getElementById('screenshot-selection');
const ssDims = document.getElementById('screenshot-dims');
const ssFloatCard = document.getElementById('screenshot-floating-card');
const ssThumbImg = document.getElementById('screenshot-thumb-img');

function startScreenshotMode() {
  if (isScreenshotMode) return;
  isScreenshotMode = true;
  if (ssOverlay) {
    ssOverlay.style.display = 'block';
  }
  if (ssSelection) {
    ssSelection.style.display = 'none';
    ssSelection.style.width = '0px';
    ssSelection.style.height = '0px';
  }
}

function cancelScreenshotMode() {
  if (!isScreenshotMode) return;
  isScreenshotMode = false;
  if (ssOverlay) ssOverlay.style.display = 'none';
  if (ssSelection) ssSelection.style.display = 'none';
}

function createFallbackScreenshotDataUrl(rect) {
  const canvas = document.createElement('canvas');
  const w = rect ? rect.width : window.innerWidth;
  const h = rect ? rect.height : window.innerHeight;
  canvas.width = Math.max(1, w);
  canvas.height = Math.max(1, h);
  const ctx = canvas.getContext('2d');
  
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, '#1a162b');
  grad.addColorStop(0.5, '#2e2842');
  grad.addColorStop(1, '#0e3450');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = 'rgba(255,255,255,0.92)';
  ctx.font = 'bold 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
  ctx.textAlign = 'center';
  ctx.fillText('AliceOS Screenshot', w / 2, h / 2 - 10);
  ctx.font = '14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.fillText(new Date().toLocaleString(), w / 2, h / 2 + 18);
  return canvas.toDataURL('image/png');
}

async function captureFullscreen() {
  try {
    if (window.AppleAudioEngine) window.AppleAudioEngine.playShutter();
    // Flash effect
    const flash = document.createElement('div');
    flash.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:white;z-index:99999;opacity:0.85;pointer-events:none;transition:opacity 0.35s ease;';
    document.body.appendChild(flash);
    setTimeout(() => { flash.style.opacity = '0'; setTimeout(() => flash.remove(), 350); }, 50);

    let dataUrl = null;
    if (window.aliceOS && window.aliceOS.captureScreen) {
      const res = await window.aliceOS.captureScreen();
      if (res && res.success) dataUrl = res.data;
    }
    if (!dataUrl) {
      dataUrl = createFallbackScreenshotDataUrl();
    }

    displayFloatingScreenshot(dataUrl);
  } catch (err) {
    console.warn('captureFullscreen error', err);
  }
}

async function finishAreaScreenshot(rect) {
  cancelScreenshotMode();
  if (!rect || rect.width < 10 || rect.height < 10) return;

  try {
    if (window.AppleAudioEngine) window.AppleAudioEngine.playShutter();
    let dataUrl = null;
    if (window.aliceOS && window.aliceOS.captureScreen) {
      const res = await window.aliceOS.captureScreen(rect);
      if (res && res.success) dataUrl = res.data;
    }
    if (!dataUrl) {
      dataUrl = createFallbackScreenshotDataUrl(rect);
    }

    displayFloatingScreenshot(dataUrl);
  } catch (err) {
    console.warn('finishAreaScreenshot error', err);
  }
}

function displayFloatingScreenshot(dataUrl) {
  currentScreenshotDataUrl = dataUrl;
  if (!ssFloatCard || !ssThumbImg) return;

  if (screenshotDismissTimer) clearTimeout(screenshotDismissTimer);

  ssThumbImg.src = dataUrl;
  ssFloatCard.classList.remove('slide-out');
  ssFloatCard.style.display = 'flex';

  // Auto save to desktop after 4.5s
  screenshotDismissTimer = setTimeout(() => {
    autoSaveScreenshotToDesktop();
  }, 4500);
}

async function autoSaveScreenshotToDesktop() {
  if (!currentScreenshotDataUrl) return;
  const data = currentScreenshotDataUrl;
  dismissScreenshotThumb();
  
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const dateStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}.${pad(now.getMinutes())}.${pad(now.getSeconds())}`;
  const filename = `截屏 ${dateStr}.png`;
  
  if (window.aliceOS && window.aliceOS.vfs) {
    await window.aliceOS.vfs.writeFile(`/home/${currentUser}/Desktop/${filename}`, data);
    if (typeof showNotification === 'function') {
      showNotification(t('screenshot_saved', '截屏已存储'), `已保存至桌面: ${filename}`, '截屏', '📷');
    }
  }
}

function dismissScreenshotThumb() {
  if (screenshotDismissTimer) {
    clearTimeout(screenshotDismissTimer);
    screenshotDismissTimer = null;
  }
  if (ssFloatCard) {
    ssFloatCard.classList.add('slide-out');
    setTimeout(() => {
      ssFloatCard.style.display = 'none';
      ssFloatCard.classList.remove('slide-out');
    }, 400);
  }
}

async function copyScreenshotThumb() {
  if (screenshotDismissTimer) clearTimeout(screenshotDismissTimer);
  if (!currentScreenshotDataUrl) return;
  try {
    const res = await fetch(currentScreenshotDataUrl);
    const blob = await res.blob();
    if (navigator.clipboard && navigator.clipboard.write) {
      await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
      if (typeof showNotification === 'function') {
        showNotification('已拷贝截屏', '截屏已复制到系统剪贴板。', '剪贴板', '📋');
      }
    }
  } catch (e) {
    console.warn('Copy error', e);
  }
  dismissScreenshotThumb();
}

async function saveScreenshotThumb() {
  await autoSaveScreenshotToDesktop();
}

// Mouse dragging for area selection
if (ssOverlay) {
  let isDraggingSS = false;
  ssOverlay.addEventListener('mousedown', (e) => {
    isDraggingSS = true;
    screenshotStartX = e.clientX;
    screenshotStartY = e.clientY;
    if (ssSelection) {
      ssSelection.style.left = `${screenshotStartX}px`;
      ssSelection.style.top = `${screenshotStartY}px`;
      ssSelection.style.width = '0px';
      ssSelection.style.height = '0px';
      ssSelection.style.display = 'block';
      if (ssDims) ssDims.textContent = '0 × 0';
    }
  });

  ssOverlay.addEventListener('mousemove', (e) => {
    if (!isDraggingSS || !ssSelection) return;
    const currentX = e.clientX;
    const currentY = e.clientY;
    const left = Math.min(screenshotStartX, currentX);
    const top = Math.min(screenshotStartY, currentY);
    const width = Math.abs(currentX - screenshotStartX);
    const height = Math.abs(currentY - screenshotStartY);

    ssSelection.style.left = `${left}px`;
    ssSelection.style.top = `${top}px`;
    ssSelection.style.width = `${width}px`;
    ssSelection.style.height = `${height}px`;
    if (ssDims) ssDims.textContent = `${width} × ${height}`;
  });

  ssOverlay.addEventListener('mouseup', (e) => {
    if (!isDraggingSS) return;
    isDraggingSS = false;
    const currentX = e.clientX;
    const currentY = e.clientY;
    const left = Math.min(screenshotStartX, currentX);
    const top = Math.min(screenshotStartY, currentY);
    const width = Math.abs(currentX - screenshotStartX);
    const height = Math.abs(currentY - screenshotStartY);

    if (width > 8 && height > 8) {
      finishAreaScreenshot({ x: left, y: top, width, height });
    } else {
      cancelScreenshotMode();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isScreenshotMode) {
      cancelScreenshotMode();
    }
  });
}

// Global hotkeys: Cmd/Ctrl + Shift + 4 (Area crop), Cmd/Ctrl + Shift + 3 (Fullscreen)
document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.shiftKey && (e.key === '4' || e.code === 'Digit4')) {
    e.preventDefault();
    startScreenshotMode();
  } else if ((e.metaKey || e.ctrlKey) && e.shiftKey && (e.key === '3' || e.code === 'Digit3')) {
    e.preventDefault();
    captureFullscreen();
  }
});

// Markup Quick Look Modal Logic
let markupColor = '#ff3b30';
let isMarkupDrawing = false;
let markupCanvas = document.getElementById('markup-canvas');
let markupCtx = markupCanvas ? markupCanvas.getContext('2d') : null;
let markupModal = document.getElementById('markup-modal');

function setMarkupColor(color) {
  markupColor = color;
}

function openScreenshotMarkup() {
  if (!currentScreenshotDataUrl || !markupModal || !markupCanvas) return;
  if (screenshotDismissTimer) clearTimeout(screenshotDismissTimer);
  
  markupModal.style.display = 'flex';
  setTimeout(() => { markupModal.style.opacity = '1'; }, 10);

  const img = new Image();
  img.onload = () => {
    const maxW = Math.min(window.innerWidth * 0.75, 900);
    const maxH = Math.min(window.innerHeight * 0.7, 600);
    let drawW = img.width;
    let drawH = img.height;
    if (drawW > maxW || drawH > maxH) {
      const ratio = Math.min(maxW / drawW, maxH / drawH);
      drawW = Math.round(drawW * ratio);
      drawH = Math.round(drawH * ratio);
    }
    markupCanvas.width = drawW;
    markupCanvas.height = drawH;
    markupCtx = markupCanvas.getContext('2d');
    markupCtx.drawImage(img, 0, 0, drawW, drawH);
  };
  img.src = currentScreenshotDataUrl;
}

function closeMarkupModal() {
  if (!markupModal) return;
  markupModal.style.opacity = '0';
  setTimeout(() => { markupModal.style.display = 'none'; }, 250);
}

function clearMarkupCanvas() {
  if (!currentScreenshotDataUrl || !markupCanvas || !markupCtx) return;
  const img = new Image();
  img.onload = () => {
    markupCtx.drawImage(img, 0, 0, markupCanvas.width, markupCanvas.height);
  };
  img.src = currentScreenshotDataUrl;
}

async function saveMarkupAndClose() {
  if (!markupCanvas) return;
  currentScreenshotDataUrl = markupCanvas.toDataURL('image/png');
  closeMarkupModal();
  await autoSaveScreenshotToDesktop();
}

if (markupCanvas) {
  let lastX = 0, lastY = 0;
  markupCanvas.addEventListener('mousedown', (e) => {
    isMarkupDrawing = true;
    const rect = markupCanvas.getBoundingClientRect();
    lastX = e.clientX - rect.left;
    lastY = e.clientY - rect.top;
  });

  markupCanvas.addEventListener('mousemove', (e) => {
    if (!isMarkupDrawing || !markupCtx) return;
    const rect = markupCanvas.getBoundingClientRect();
    const curX = e.clientX - rect.left;
    const curY = e.clientY - rect.top;

    markupCtx.beginPath();
    markupCtx.moveTo(lastX, lastY);
    markupCtx.lineTo(curX, curY);
    markupCtx.strokeStyle = markupColor;
    markupCtx.lineWidth = 3.5;
    markupCtx.lineCap = 'round';
    markupCtx.lineJoin = 'round';
    markupCtx.stroke();

    lastX = curX;
    lastY = curY;
  });

  window.addEventListener('mouseup', () => {
    isMarkupDrawing = false;
  });
}

window.startScreenshotMode = startScreenshotMode;
window.captureFullscreen = captureFullscreen;
window.openScreenshotMarkup = openScreenshotMarkup;
window.closeMarkupModal = closeMarkupModal;
window.setMarkupColor = setMarkupColor;
window.clearMarkupCanvas = clearMarkupCanvas;
window.saveMarkupAndClose = saveMarkupAndClose;
window.copyScreenshotThumb = copyScreenshotThumb;
window.saveScreenshotThumb = saveScreenshotThumb;
window.dismissScreenshotThumb = dismissScreenshotThumb;



