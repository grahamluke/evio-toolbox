require('v8-compile-cache');
const {
    app
    , BrowserWindow
    , shell
    , Menu
} = require('electron');
const {
    DiscordRPC
} = require('./discord')
const shortcut = require('electron-localshortcut');
const Store = require('electron-store');
const config = new Store();
const {
    AdBlock
} = require('./adblock');
const {
    ResourceSwapper
} = require('./resourceswapper');
const {
    setArgs
} = require('./args');
const {
    configCheck
} = require('./checkConfig')
require('@electron/remote/main').initialize();
const {
    autoUpdater
} = require('electron-updater');
configCheck();
setArgs();

function createWindow() {
    const win = new BrowserWindow({
        width: 1600
        , height: 900
        , fullscreen: true
        , webPreferences: {
            nodeIntegration: false
            , webSecurity: false
            , contextIsolation: false
            , devTools: true
            , preload: __dirname.concat('/preload.js')
        }
    });
    
    win.loadURL('https://ev.io/');
   // Menu.setApplicationMenu(null);
    win.once('ready-to-show', () => {
        autoUpdater.checkForUpdatesAndNotify();
    });
    console.log(config.get('discordRPC'))
    autoUpdater.on('update-available', () => {
        win.webContents.executeJavaScript(`alert('Client update available. Downloading the update now.')`);
    });
    autoUpdater.on('update-downloaded', () => {
        win.webContents.executeJavaScript(`alert('Client update downloaded. Installing the update now.')`);
        autoUpdater.quitAndInstall();
    });
    win.on("new-window", function(event, url) {
        event.preventDefault();
        shell.openExternal(url);
    });
    
    function clearCache() {
        win.webContents.session.clearCache();
    };
    require("@electron/remote/main").enable(win.webContents)
    
    if(config.get('adblock') === true) {
        AdBlock();
    }
    
    win.webContents.on('did-finish-load', function() {
        clearCache();
        
    });
    if(config.get('discordRPC') === true) {
        DiscordRPC()
    }
    
    shortcut.register(win, 'F5', () => {
        win.reload();
    });
    if(process.platform !== 'darwin') {
        shortcut.register(win, 'F11', () => {
            if(win.isFullScreen()) {
                win.setFullScreen(false);
            } else {
                win.setFullScreen(true);
            }
        })
    };
};

app.whenReady().then(() => {
    createWindow();
});
app.on('window-all-closed', () => {
    app.quit();
})