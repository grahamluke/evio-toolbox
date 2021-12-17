const Store = require('electron-store');
const config = new Store();

function configCheck() {
    if(config.get('uncappedFPS') === null || config.get('uncappedFPS') === undefined) {
        config.set('uncappedFPS', true);
    }
    if(config.get('discordRPC') === null || config.get('discordRPC') === undefined) {
        config.set('discordRPC', true);
    }
    if(config.get('adblock') === null || config.get('adblock') === undefined) {
        config.set('adblock', true);
    }
}
module.exports = {
    configCheck
}