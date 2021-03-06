#!/usr/bin/env node

const codes = {
  1: "ESC",
  2: "1",
  3: "2",
  4: "3",
  5: "4",
  6: "5",
  7: "6",
  8: "7",
  9: "8",
  10: "9",
  11: "0",
  12: "MINUS",
  13: "EQUAL",
  14: "BACKSPACE",
  15: "TAB",
  16: "Q",
  17: "W",
  18: "E",
  19: "R",
  20: "T",
  21: "Y",
  22: "U",
  23: "I",
  24: "O",
  25: "P",
  26: "LEFTBRACE",
  27: "RIGHTBRACE",
  28: "ENTER",
  29: "LEFTCTRL",
  30: "A",
  31: "S",
  32: "D",
  33: "F",
  34: "G",
  35: "H",
  36: "J",
  37: "K",
  38: "L",
  39: "SEMICOLON",
  40: "APOSTROPHE",
  41: "GRAVE",
  42: "LEFTSHIFT",
  43: "BACKSLASH",
  44: "Z",
  45: "X",
  46: "C",
  47: "V",
  48: "B",
  49: "N",
  50: "M",
  51: "COMMA",
  52: "DOT",
  53: "SLASH",
  54: "RIGHTSHIFT",
  55: "KPASTERISK",
  56: "LEFTALT",
  57: "SPACEBAR",
  58: "CAPSLOCK",
  59: "F1",
  60: "F2",
  61: "F3",
  62: "F4",
  63: "F5",
  64: "F6",
  65: "F7",
  66: "F8",
  67: "F9",
  68: "F10",
  69: "NUMLOCK",
  70: "SCROLLLOCK",
  71: "KP7",
  72: "KP8",
  73: "KP9",
  74: "KPMINUS",
  75: "KP4",
  76: "KP5",
  77: "KP6",
  78: "KPPLUS",
  79: "KP1",
  80: "KP2",
  81: "KP3",
  82: "KP0",
  83: "KPDOT",
  85: "ZENKAKUHANKAKU",
  86: "102ND",
  87: "F11",
  88: "F12",
  89: "RO",
  90: "KATAKANA",
  91: "HIRAGANA",
  92: "HENKAN",
  93: "KATAKANAHIRAGANA",
  94: "MUHENKAN",
  95: "KPJPCOMMA",
  96: "KPENTER",
  97: "RIGHTCTRL",
  98: "KPSLASH",
  99: "SYSRQ",
  100: "RIGHTALT",
  101: "LINEFEED",
  102: "HOME",
  103: "UP",
  104: "PAGEUP",
  105: "LEFT",
  106: "RIGHT",
  107: "END",
  108: "DOWN",
  109: "PAGEDOWN",
  110: "INSERT",
  111: "DELETE",
  112: "MACRO",
  113: "MUTE",
  114: "VOLUMEDOWN",
  115: "VOLUMEUP",
  116: "POWER",
  117: "KPEQUAL",
  118: "KPPLUSMINUS",
  119: "PAUSE",
  120: "SCALE",
  121: "KPCOMMA",
  122: "HANGEUL",
  122: "HANGUEL",
  123: "HANJA",
  124: "YEN",
  125: "LEFTMETA",
  126: "RIGHTMETA",
  127: "COMPOSE",
  128: "STOP",
  129: "AGAIN",
  130: "PROPS",
  131: "UNDO",
  132: "FRONT",
  133: "COPY",
  134: "OPEN",
  135: "PASTE",
  136: "FIND",
  137: "CUT",
  138: "HELP",
  139: "MENU",
  140: "CALC",
  141: "SETUP",
  142: "SLEEP",
  143: "WAKEUP",
  144: "FILE",
  145: "SENDFILE",
  146: "DELETEFILE",
  147: "XFER",
  148: "PROG1",
  149: "PROG2",
  150: "WWW",
  151: "MSDOS",
  152: "COFFEE",
  152: "SCREENLOCK",
  153: "ROTATE_DISPLAY",
  153: "DIRECTION",
  154: "CYCLEWINDOWS",
  155: "MAIL",
  156: "BOOKMARKS",
  157: "COMPUTER",
  158: "BACK",
  159: "FORWARD",
  160: "CLOSECD",
  161: "EJECTCD",
  162: "EJECTCLOSECD",
  163: "NEXTSONG",
  164: "PLAYPAUSE",
  165: "PREVIOUSSONG",
  166: "STOPCD",
  167: "RECORD",
  168: "REWIND",
  169: "PHONE",
  170: "ISO",
  171: "CONFIG",
  172: "HOMEPAGE",
  173: "REFRESH",
  174: "EXIT",
  175: "MOVE",
  176: "EDIT",
  177: "SCROLLUP",
  178: "SCROLLDOWN",
  179: "KPLEFTPAREN",
  180: "KPRIGHTPAREN",
  181: "NEW",
  182: "REDO",
  183: "F13",
  184: "F14",
  185: "F15",
  186: "F16",
  187: "F17",
  188: "F18",
  189: "F19",
  190: "F20",
  191: "F21",
  192: "F22",
  193: "F23",
  194: "F24",
  200: "PLAYCD",
  201: "PAUSECD",
  202: "PROG3",
  203: "PROG4",
  204: "DASHBOARD",
  205: "SUSPEND",
  206: "CLOSE",
  207: "PLAY",
  208: "FASTFORWARD",
  209: "BASSBOOST",
  210: "PRINT",
  211: "HP",
  212: "CAMERA",
  213: "SOUND",
  214: "QUESTION",
  215: "EMAIL",
  216: "CHAT",
  217: "SEARCH",
  218: "CONNECT",
  219: "FINANCE",
  220: "SPORT",
  221: "SHOP",
  222: "ALTERASE",
  223: "CANCEL",
  224: "BRIGHTNESSDOWN",
  225: "BRIGHTNESSUP",
  226: "MEDIA",
  227: "SWITCHVIDEOMODE",
  228: "KBDILLUMTOGGLE",
  229: "KBDILLUMDOWN",
  230: "KBDILLUMUP",
  231: "SEND",
  232: "REPLY",
  233: "FORWARDMAIL",
  234: "SAVE",
  235: "DOCUMENTS",
  236: "BATTERY",
  237: "BLUETOOTH",
  238: "WLAN",
  239: "UWB",
  240: "UNKNOWN",
  241: "VIDEO_NEXT",
  242: "VIDEO_PREV",
  243: "BRIGHTNESS_CYCLE",
  244: "BRIGHTNESS_AUTO",
  244: "BRIGHTNESS_ZERO",
  245: "DISPLAY_OFF",
  246: "WWAN",
  246: "WIMAX",
  247: "RFKILL",
  248: "MICMUTE",
  "0x100": "BTN_MISC",
  "0x100": "BTN_0",
  "0x101": "BTN_1",
  "0x102": "BTN_2",
  "0x103": "BTN_3",
  "0x104": "BTN_4",
  "0x105": "BTN_5",
  "0x106": "BTN_6",
  "0x107": "BTN_7",
  "0x108": "BTN_8",
  "0x109": "BTN_9",
  "0x110": "BTN_MOUSE",
  "0x110": "BTN_LEFT",
  "0x111": "BTN_RIGHT",
  "0x112": "BTN_MIDDLE",
  "0x113": "BTN_SIDE",
  "0x114": "BTN_EXTRA",
  "0x115": "BTN_FORWARD",
  "0x116": "BTN_BACK",
  "0x117": "BTN_TASK",
  "0x120": "BTN_JOYSTICK",
  "0x120": "BTN_TRIGGER",
  "0x121": "BTN_THUMB",
  "0x122": "BTN_THUMB2",
  "0x123": "BTN_TOP",
  "0x124": "BTN_TOP2",
  "0x125": "BTN_PINKIE",
  "0x126": "BTN_BASE",
  "0x127": "BTN_BASE2",
  "0x128": "BTN_BASE3",
  "0x129": "BTN_BASE4",
  "0x12a": "BTN_BASE5",
  "0x12b": "BTN_BASE6",
  "0x12f": "BTN_DEAD",
  "0x130": "BTN_GAMEPAD",
  "0x130": "BTN_SOUTH",
  BTN_SOUTH: "BTN_A",
  "0x131": "BTN_EAST",
  BTN_EAST: "BTN_B",
  "0x132": "BTN_C",
  "0x133": "BTN_NORTH",
  BTN_NORTH: "BTN_X",
  "0x134": "BTN_WEST",
  BTN_WEST: "BTN_Y",
  "0x135": "BTN_Z",
  "0x136": "BTN_TL",
  "0x137": "BTN_TR",
  "0x138": "BTN_TL2",
  "0x139": "BTN_TR2",
  "0x13a": "BTN_SELECT",
  "0x13b": "BTN_START",
  "0x13c": "BTN_MODE",
  "0x13d": "BTN_THUMBL",
  "0x13e": "BTN_THUMBR",
  "0x140": "BTN_DIGI",
  "0x140": "BTN_TOOL_PEN",
  "0x141": "BTN_TOOL_RUBBER",
  "0x142": "BTN_TOOL_BRUSH",
  "0x143": "BTN_TOOL_PENCIL",
  "0x144": "BTN_TOOL_AIRBRUSH",
  "0x145": "BTN_TOOL_FINGER",
  "0x146": "BTN_TOOL_MOUSE",
  "0x147": "BTN_TOOL_LENS",
  "0x148": "BTN_TOOL_QUINTTAP",
  "0x149": "BTN_STYLUS3",
  "0x14a": "BTN_TOUCH",
  "0x14b": "BTN_STYLUS",
  "0x14c": "BTN_STYLUS2",
  "0x14d": "BTN_TOOL_DOUBLETAP",
  "0x14e": "BTN_TOOL_TRIPLETAP",
  "0x14f": "BTN_TOOL_QUADTAP",
  "0x150": "BTN_WHEEL",
  "0x150": "BTN_GEAR_DOWN",
  "0x151": "BTN_GEAR_UP",
  "0x160": "OK",
  "0x161": "SELECT",
  "0x162": "GOTO",
  "0x163": "CLEAR",
  "0x164": "POWER2",
  "0x165": "OPTION",
  "0x166": "INFO",
  "0x167": "TIME",
  "0x168": "VENDOR",
  "0x169": "ARCHIVE",
  "0x16a": "PROGRAM",
  "0x16b": "CHANNEL",
  "0x16c": "FAVORITES",
  "0x16d": "EPG",
  "0x16e": "PVR",
  "0x16f": "MHP",
  "0x170": "LANGUAGE",
  "0x171": "TITLE",
  "0x172": "SUBTITLE",
  "0x173": "ANGLE",
  "0x174": "ZOOM",
  "0x175": "MODE",
  "0x176": "KEYBOARD",
  "0x177": "SCREEN",
  "0x178": "PC",
  "0x179": "TV",
  "0x17a": "TV2",
  "0x17b": "VCR",
  "0x17c": "VCR2",
  "0x17d": "SAT",
  "0x17e": "SAT2",
  "0x17f": "CD",
  "0x180": "TAPE",
  "0x181": "RADIO",
  "0x182": "TUNER",
  "0x183": "PLAYER",
  "0x184": "TEXT",
  "0x185": "DVD",
  "0x186": "AUX",
  "0x187": "MP3",
  "0x188": "AUDIO",
  "0x189": "VIDEO",
  "0x18a": "DIRECTORY",
  "0x18b": "LIST",
  "0x18c": "MEMO",
  "0x18d": "CALENDAR",
  "0x18e": "RED",
  "0x18f": "GREEN",
  "0x190": "YELLOW",
  "0x191": "BLUE",
  "0x192": "CHANNELUP",
  "0x193": "CHANNELDOWN",
  "0x194": "FIRST",
  "0x195": "LAST",
  "0x196": "AB",
  "0x197": "NEXT",
  "0x198": "RESTART",
  "0x199": "SLOW",
  "0x19a": "SHUFFLE",
  "0x19b": "BREAK",
  "0x19c": "PREVIOUS",
  "0x19d": "DIGITS",
  "0x19e": "TEEN",
  "0x19f": "TWEN",
  "0x1a0": "VIDEOPHONE",
  "0x1a1": "GAMES",
  "0x1a2": "ZOOMIN",
  "0x1a3": "ZOOMOUT",
  "0x1a4": "ZOOMRESET",
  "0x1a5": "WORDPROCESSOR",
  "0x1a6": "EDITOR",
  "0x1a7": "SPREADSHEET",
  "0x1a8": "GRAPHICSEDITOR",
  "0x1a9": "PRESENTATION",
  "0x1aa": "DATABASE",
  "0x1ab": "NEWS",
  "0x1ac": "VOICEMAIL",
  "0x1ad": "ADDRESSBOOK",
  "0x1ae": "MESSENGER",
  "0x1af": "DISPLAYTOGGLE",
  "0x1af": "BRIGHTNESS_TOGGLE",
  "0x1b0": "SPELLCHECK",
  "0x1b1": "LOGOFF",
  "0x1b2": "DOLLAR",
  "0x1b3": "EURO",
  "0x1b4": "FRAMEBACK",
  "0x1b5": "FRAMEFORWARD",
  "0x1b6": "CONTEXT_MENU",
  "0x1b7": "MEDIA_REPEAT",
  "0x1b8": "10CHANNELSUP",
  "0x1b9": "10CHANNELSDOWN",
  "0x1ba": "IMAGES",
  "0x1c0": "DEL_EOL",
  "0x1c1": "DEL_EOS",
  "0x1c2": "INS_LINE",
  "0x1c3": "DEL_LINE",
  "0x1d0": "FN",
  "0x1d1": "FN_ESC",
  "0x1d2": "FN_F1",
  "0x1d3": "FN_F2",
  "0x1d4": "FN_F3",
  "0x1d5": "FN_F4",
  "0x1d6": "FN_F5",
  "0x1d7": "FN_F6",
  "0x1d8": "FN_F7",
  "0x1d9": "FN_F8",
  "0x1da": "FN_F9",
  "0x1db": "FN_F10",
  "0x1dc": "FN_F11",
  "0x1dd": "FN_F12",
  "0x1de": "FN_1",
  "0x1df": "FN_2",
  "0x1e0": "FN_D",
  "0x1e1": "FN_E",
  "0x1e2": "FN_F",
  "0x1e3": "FN_S",
  "0x1e4": "FN_B",
  "0x1f1": "BRL_DOT1",
  "0x1f2": "BRL_DOT2",
  "0x1f3": "BRL_DOT3",
  "0x1f4": "BRL_DOT4",
  "0x1f5": "BRL_DOT5",
  "0x1f6": "BRL_DOT6",
  "0x1f7": "BRL_DOT7",
  "0x1f8": "BRL_DOT8",
  "0x1f9": "BRL_DOT9",
  "0x1fa": "BRL_DOT10",
  "0x200": "NUMERIC_0",
  "0x201": "NUMERIC_1",
  "0x202": "NUMERIC_2",
  "0x203": "NUMERIC_3",
  "0x204": "NUMERIC_4",
  "0x205": "NUMERIC_5",
  "0x206": "NUMERIC_6",
  "0x207": "NUMERIC_7",
  "0x208": "NUMERIC_8",
  "0x209": "NUMERIC_9",
  "0x20a": "NUMERIC_STAR",
  "0x20b": "NUMERIC_POUND",
  "0x20c": "NUMERIC_A",
  "0x20d": "NUMERIC_B",
  "0x20e": "NUMERIC_C",
  "0x20f": "NUMERIC_D",
  "0x210": "CAMERA_FOCUS",
  "0x211": "WPS_BUTTON",
  "0x212": "TOUCHPAD_TOGGLE",
  "0x213": "TOUCHPAD_ON",
  "0x214": "TOUCHPAD_OFF",
  "0x215": "CAMERA_ZOOMIN",
  "0x216": "CAMERA_ZOOMOUT",
  "0x217": "CAMERA_UP",
  "0x218": "CAMERA_DOWN",
  "0x219": "CAMERA_LEFT",
  "0x21a": "CAMERA_RIGHT",
  "0x21b": "ATTENDANT_ON",
  "0x21c": "ATTENDANT_OFF",
  "0x21d": "ATTENDANT_TOGGLE",
  "0x21e": "LIGHTS_TOGGLE",
  "0x220": "BTN_DPAD_UP",
  "0x221": "BTN_DPAD_DOWN",
  "0x222": "BTN_DPAD_LEFT",
  "0x223": "BTN_DPAD_RIGHT",
  "0x230": "ALS_TOGGLE",
  "0x231": "ROTATE_LOCK_TOGGLE",
  "0x240": "BUTTONCONFIG",
  "0x241": "TASKMANAGER",
  "0x242": "JOURNAL",
  "0x243": "CONTROLPANEL",
  "0x244": "APPSELECT",
  "0x245": "SCREENSAVER",
  "0x246": "VOICECOMMAND",
  "0x247": "ASSISTANT",
  "0x250": "BRIGHTNESS_MIN",
  "0x251": "BRIGHTNESS_MAX",
  "0x260": "KBDINPUTASSIST_PREV",
  "0x261": "KBDINPUTASSIST_NEXT",
  "0x262": "KBDINPUTASSIST_PREVGROUP",
  "0x263": "KBDINPUTASSIST_NEXTGROUP",
  "0x264": "KBDINPUTASSIST_ACCEPT",
  "0x265": "KBDINPUTASSIST_CANCEL",
  "0x266": "RIGHT_UP",
  "0x267": "RIGHT_DOWN",
  "0x268": "LEFT_UP",
  "0x269": "LEFT_DOWN",
  "0x26a": "ROOT_MENU",
  "0x26b": "MEDIA_TOP_MENU",
  "0x26c": "NUMERIC_11",
  "0x26d": "NUMERIC_12",
  "0x26e": "AUDIO_DESC",
  "0x26f": "3D_MODE",
  "0x270": "NEXT_FAVORITE",
  "0x271": "STOP_RECORD",
  "0x272": "PAUSE_RECORD",
  "0x273": "VOD",
  "0x274": "UNMUTE",
  "0x275": "FASTREVERSE",
  "0x276": "SLOWREVERSE",
  "0x277": "DATA",
  "0x278": "ONSCREEN_KEYBOARD",
  "0x2c0": "BTN_TRIGGER_HAPPY",
  "0x2c0": "BTN_TRIGGER_HAPPY1",
  "0x2c1": "BTN_TRIGGER_HAPPY2",
  "0x2c2": "BTN_TRIGGER_HAPPY3",
  "0x2c3": "BTN_TRIGGER_HAPPY4",
  "0x2c4": "BTN_TRIGGER_HAPPY5",
  "0x2c5": "BTN_TRIGGER_HAPPY6",
  "0x2c6": "BTN_TRIGGER_HAPPY7",
  "0x2c7": "BTN_TRIGGER_HAPPY8",
  "0x2c8": "BTN_TRIGGER_HAPPY9",
  "0x2c9": "BTN_TRIGGER_HAPPY10",
  "0x2ca": "BTN_TRIGGER_HAPPY11",
  "0x2cb": "BTN_TRIGGER_HAPPY12",
  "0x2cc": "BTN_TRIGGER_HAPPY13",
  "0x2cd": "BTN_TRIGGER_HAPPY14",
  "0x2ce": "BTN_TRIGGER_HAPPY15",
  "0x2cf": "BTN_TRIGGER_HAPPY16",
  "0x2d0": "BTN_TRIGGER_HAPPY17",
  "0x2d1": "BTN_TRIGGER_HAPPY18",
  "0x2d2": "BTN_TRIGGER_HAPPY19",
  "0x2d3": "BTN_TRIGGER_HAPPY20",
  "0x2d4": "BTN_TRIGGER_HAPPY21",
  "0x2d5": "BTN_TRIGGER_HAPPY22",
  "0x2d6": "BTN_TRIGGER_HAPPY23",
  "0x2d7": "BTN_TRIGGER_HAPPY24",
  "0x2d8": "BTN_TRIGGER_HAPPY25",
  "0x2d9": "BTN_TRIGGER_HAPPY26",
  "0x2da": "BTN_TRIGGER_HAPPY27",
  "0x2db": "BTN_TRIGGER_HAPPY28",
  "0x2dc": "BTN_TRIGGER_HAPPY29",
  "0x2dd": "BTN_TRIGGER_HAPPY30",
  "0x2de": "BTN_TRIGGER_HAPPY31",
  "0x2df": "BTN_TRIGGER_HAPPY32",
  "0x2e0": "BTN_TRIGGER_HAPPY33",
  "0x2e1": "BTN_TRIGGER_HAPPY34",
  "0x2e2": "BTN_TRIGGER_HAPPY35",
  "0x2e3": "BTN_TRIGGER_HAPPY36",
  "0x2e4": "BTN_TRIGGER_HAPPY37",
  "0x2e5": "BTN_TRIGGER_HAPPY38",
  "0x2e6": "BTN_TRIGGER_HAPPY39",
  "0x2e7": "BTN_TRIGGER_HAPPY40",
  113: "MIN_INTERESTING",
  "0x2ff": "MAX",
  "0x2ff": "CNT",
  "0x00": "REL_X",
  "0x01": "REL_Y",
  "0x02": "REL_Z",
  "0x03": "REL_RX",
  "0x04": "REL_RY",
  "0x05": "REL_RZ",
  "0x06": "REL_HWHEEL",
  "0x07": "REL_DIAL",
  "0x08": "REL_WHEEL",
  "0x09": "REL_MISC",
  "0x0f": "REL_MAX",
  "(REL_MAX+1)": "REL_CNT",
  "0x00": "ABS_X",
  "0x01": "ABS_Y",
  "0x02": "ABS_Z",
  "0x03": "ABS_RX",
  "0x04": "ABS_RY",
  "0x05": "ABS_RZ",
  "0x06": "ABS_THROTTLE",
  "0x07": "ABS_RUDDER",
  "0x08": "ABS_WHEEL",
  "0x09": "ABS_GAS",
  "0x0a": "ABS_BRAKE",
  "0x10": "ABS_HAT0X",
  "0x11": "ABS_HAT0Y",
  "0x12": "ABS_HAT1X",
  "0x13": "ABS_HAT1Y",
  "0x14": "ABS_HAT2X",
  "0x15": "ABS_HAT2Y",
  "0x16": "ABS_HAT3X",
  "0x17": "ABS_HAT3Y",
  "0x18": "ABS_PRESSURE",
  "0x19": "ABS_DISTANCE",
  "0x1a": "ABS_TILT_X",
  "0x1b": "ABS_TILT_Y",
  "0x1c": "ABS_TOOL_WIDTH",
  "0x20": "ABS_VOLUME",
  "0x28": "ABS_MISC",
  "0x2f": "ABS_MT_SLOT",
  "0x30": "ABS_MT_TOUCH_MAJOR",
  "0x31": "ABS_MT_TOUCH_MINOR",
  "0x32": "ABS_MT_WIDTH_MAJOR",
  "0x33": "ABS_MT_WIDTH_MINOR",
  "0x34": "ABS_MT_ORIENTATION",
  "0x35": "ABS_MT_POSITION_X",
  "0x36": "ABS_MT_POSITION_Y",
  "0x37": "ABS_MT_TOOL_TYPE",
  "0x38": "ABS_MT_BLOB_ID",
  "0x39": "ABS_MT_TRACKING_ID",
  "0x3a": "ABS_MT_PRESSURE",
  "0x3b": "ABS_MT_DISTANCE",
  "0x3c": "ABS_MT_TOOL_X",
  "0x3d": "ABS_MT_TOOL_Y",
  "0x3f": "ABS_MAX",
  "(ABS_MAX+1)": "ABS_CNT",
  "0x00": "SW_LID",
  "0x01": "SW_TABLET_MODE",
  "0x02": "SW_HEADPHONE_INSERT",
  "0x03": "SW_RFKILL_ALL",
  SW_RFKILL_ALL: "SW_RADIO",
  "0x04": "SW_MICROPHONE_INSERT",
  "0x05": "SW_DOCK",
  "0x06": "SW_LINEOUT_INSERT",
  "0x07": "SW_JACK_PHYSICAL_INSERT",
  "0x08": "SW_VIDEOOUT_INSERT",
  "0x09": "SW_CAMERA_LENS_COVER",
  "0x0a": "SW_KEYPAD_SLIDE",
  "0x0b": "SW_FRONT_PROXIMITY",
  "0x0c": "SW_ROTATE_LOCK",
  "0x0d": "SW_LINEIN_INSERT",
  "0x0e": "SW_MUTE_DEVICE",
  "0x0f": "SW_PEN_INSERTED",
  "0x0f": "SW_MAX",
  "(SW_MAX+1)": "SW_CNT",
  "0x00": "MSC_SERIAL",
  "0x01": "MSC_PULSELED",
  "0x02": "MSC_GESTURE",
  "0x03": "MSC_RAW",
  "0x04": "MSC_SCAN",
  "0x05": "MSC_TIMESTAMP",
  "0x07": "MSC_MAX",
  "(MSC_MAX+1)": "MSC_CNT",
  "0x00": "LED_NUML",
  "0x01": "LED_CAPSL",
  "0x02": "LED_SCROLLL",
  "0x03": "LED_COMPOSE",
  "0x04": "LED_KANA",
  "0x05": "LED_SLEEP",
  "0x06": "LED_SUSPEND",
  "0x07": "LED_MUTE",
  "0x08": "LED_MISC",
  "0x09": "LED_MAIL",
  "0x0a": "LED_CHARGING",
  "0x0f": "LED_MAX",
  "(LED_MAX+1)": "LED_CNT",
  "0x00": "REP_DELAY",
  "0x01": "REP_PERIOD",
  "0x01": "REP_MAX",
  "(REP_MAX+1)": "REP_CNT",
  "0x00": "SND_CLICK",
  "0x01": "SND_BELL",
  "0x02": "SND_TONE",
  "0x07": "SND_MAX",
  "(SND_MAX+1)": "SND_CNT",
};


const buffer = require("buffer");
const child_process = require('child_process');

const udp = require('dgram');
const client = udp.createSocket('udp4');


function send(str) {
    client.send(Buffer.from(str), 5005, '192.168.0.120');
}

async function exec() {
  try {
    const child = child_process.exec("./a.out");

    child.on("exit", function (code, signal) {
      console.log("child process exited with " + `code ${code} and signal ${signal}`);
      client.close();
    });

    child.stderr.on("data", (data) => {
      console.error(`stderr: ${data.toString()}`);
    });

    let lastLines = [
      ['0', '0', '0'],
      ['0', '0', '0'],
      ['0', '0', '0'],
    ];

    child.stdout.on("data", (data) => {
      let lines = data.toString().split('\n').filter(e => !!e);

      lines = lines.map(l => l.split(' ').filter(e => !!e))

      if (lines[0][0] == 0 && lines[0][1] == 1) {
        const codeMatch = codes[lastLines[0][0]];

        if (codeMatch) {
          send(`${codeMatch}_1`);
        }

        return;
      }

      if (lines[0][0] > 0) {
        const codeMatch = codes[lines[0][0]];

        if (codeMatch) {
          send(`${codeMatch}_${lines[0][1]}`);
        }
      }

      if (lines[1][0] > 0 && lines[1][0] !== lastLines[1][0]) {
        console.log('double press')
        const codeMatch = codes[lines[1][0]];

        if (codeMatch) {
          send(`${codeMatch}_${lines[1][1]}`);
        }
      }

      if (lines[2][0] > 0 && lines[2][0] !== lastLines[2][0]) {
        console.log('triple press')
        const codeMatch = codes[lines[2][0]];

        if (codeMatch) {
          send(`${codeMatch}_${lines[2][1]}`);
        }
      }

      lastLines = lines;
    });

    child.stdout.on("close", () => {
      console.log("child stdout closed.");
    });
  } catch (e) {
    console.log(e);
  }
}

exec();

