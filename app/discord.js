const rpc = require('discord-rich-presence')('912778483422355527');
const {
    ipcMain
} = require('electron');

function DiscordRPC() {
    ipcMain.on('badge', (event, arg) => {
        rpc.updatePresence({
            largeImageKey: 'test'
            , smallImageKey: arg
            , startTimestamp: Math.floor(Date.now() / 1000)
        , });
    })
};
module.exports = {
    DiscordRPC
}