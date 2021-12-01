const {
    ipcRenderer
} = require('electron')

globalThis.username;
globalThis.respectedBadgeDB;

async function fetchBadgesDB() {
    const user = await fetch("/user").then(response => response.text())
    
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(user, "text/html");
    globalThis.username = htmlDocument.documentElement.querySelector('h1.page-header').textContent
    ipcRenderer.send("username", username)
    
    const respectedBadgeDBText = await fetch("https://pastebin.com/raw/tW1D43dK").then(response => response.text())
    globalThis.respectedBadgeDB = respectedBadgeDBText.replaceAll('\r\n', ' ')
    console.log(globalThis.username)
    if(globalThis.respectedBadgeDB.includes(globalThis.username)) {
        console.log('does have badge')
        ipcRenderer.send('badge', 'respected')
    }
}
module.exports = {
    fetchBadgesDB
}
