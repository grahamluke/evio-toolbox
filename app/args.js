const {
    app
} = require('electron')
const Store = require('electron-store');
const config = new Store();

function setArgs() {
    app.commandLine.appendSwitch('enable-pointer-lock-options');
    app.commandLine.appendSwitch('disable-accelerated-video-decode', false);
    app.commandLine.appendSwitch('disable-accelerated-video-encode', false);
    if(config.get('uncappedFPS') === true) {
        app.commandLine.appendSwitch('disable-gpu-vsync');
        app.commandLine.appendSwitch('disable-frame-rate-limit');
    }
}
module.exports = {
    setArgs
}