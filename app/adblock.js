const {
    ElectronBlocker
} = require('@cliqz/adblocker-electron');
const {session} = require('electron')
const fetch = require('cross-fetch')

 function AdBlock() { 
    ElectronBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
        blocker.enableBlockingInSession(session.defaultSession);
        blocker.on('request-blocked', (request) => {
            console.log('blocked', request.tabId, request.url);
        });

        blocker.on('request-redirected', (request) => {
            console.log('redirected', request.tabId, request.url);
        });

        blocker.on('request-whitelisted', (request) => {
            console.log('whitelisted', request.tabId, request.url);
        });

        blocker.on('csp-injected', (request) => {
            console.log('csp', request.url);
        });

        blocker.on('script-injected', (script, url) => {
            console.log('script', script.length, url);
        });

        blocker.on('style-injected', (style, url) => {
            console.log('style', style.length, url);
        });
    });
};
module.exports = {
    AdBlock
}