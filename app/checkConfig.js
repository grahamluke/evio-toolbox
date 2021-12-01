const Store = require('electron-store');
const config = new Store();

function configCheck() {
    if(config.get('uncappedFPS') === null) {
        config.set('uncappedFPS', true);
    }
    if(config.get('discordRPC') === null) {
        config.set('discordRPC', true);
    }
    if(config.get('adblock') === null) {
        config.set('adblock', true);
    }
}
module.exports = {
    configCheck
}