const {
    app
} = require('@electron/remote')

function relaunch() {
    window.app = app
    window.relaunchApp = function(reason) {
        alert(`${reason} Restarting the client now.`)
        app.relaunch();
        app.exit();
    }
}
module.exports = {
    relaunch
}