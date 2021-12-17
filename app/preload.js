require('v8-compile-cache');
const {
    fetchBadgesDB
} = require('./badgesDB')
const {
    createClientSettings
} = require('./createClientSettings')
const {
    relaunch
} = require('./relaunch')

document.addEventListener('DOMContentLoaded', function() {
    reddit.href = 'https://discord.gg/T8BDkTcsGd'
    createClientSettings();
    relaunch()
    fetchBadgesDB()
})