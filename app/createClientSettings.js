const Store = require('electron-store')
const config = new Store();

function createClientSettings() {
    function createClientSettingsMenu() {
        const menu = document.createElement("div");
        menu.style = `
          position: absolute;
          top: 0px;
          right: 0px;
          bottom: 0px;
          left: 0px;
          z-index: 9999999999; 
          display: none;background: rgba(10, 10, 10, 0.7);
      `;
        menu.id = "clientSettingsMenu";
        
        menu.innerHTML = `<div class="simplebar-content" style=" padding: 50px;">
  <div id="client-settings-extension" class="module_box" data-simplebar="init" style="height: 80vh;max-height: 80%;width: 630px;">
  <span id="closeSettings" onclick={window.closeSettings()} class="close_button">[x]</span>
  </span>
            <form id="ClientSettingsForm">    
            <br>
                <h4>Game</h4><br>
                <br>
                
                <input type="checkbox" id="uncappedFPS" class="settings-check" onclick='setFPS()' ${getFPSStatus()} name="uncappedFPS">
                <label for="uncappedFPS">Uncapped FPS</label><br>
                <br>
            
                <h4>Customization</h4><br>
                <br>
                
                <input type="checkbox" id="adBlock" class="settings-check" onclick='setAdblock()' ${getAdblockStatus()} name="adBlock">
                <label for="adBlock">AdBlock</label><br>
                <br>
  
                <input type="checkbox" id="discordRPC" class="settings-check" onclick='setDiscordRPC()' ${getDiscordRPCStatus()} name="discordRPC">
                <label for="discordRPC">Discord Rich Presence</label><br>
                <br>
  
                <button type="button" class="btn btn-outline-warning" onclick="relaunchApp('Applying Client Settings.')" id="save_setttings">Save Changes</button>
                <form>
            </div>
        </div>
    </div>
  </div>
  </div>
  <div class="simplebar-placeholder" style="width: 630px; height: 244px;"></div>
  `
        document.body.appendChild(menu);
        window.openSettings = function() {
            document.getElementById("clientSettingsMenu").style.display = "";
            document.getElementById("client-settings-extension").style.display = "";
        };
        window.closeSettings = function() {
            document.getElementById("clientSettingsMenu").style.display = "none";
            document.getElementById("client-settings-extension").style.display = "none";
        };
    }
    links_center.insertAdjacentHTML('beforeend', `<button type="button" id="client-settings-button" onclick={window.openSettings()} class="btn translate-me" style=background-color:#b227c3>Client Settings</button>`)
    window.setFPS = function() {
        config.set('uncappedFPS', uncappedFPS.checked);
    }
    window.setDiscordRPC = function() {
        config.set('discordRPC', discordRPC.checked);
    }
    window.setAdblock = function() {
        config.set('adblock', adBlock.checked);
    }
    
    function getFPSStatus() {
        if(config.get('uncappedFPS') === true) {
            return 'checked';
        } else {
            return 'notchecked';
        }
    }
    
    function getDiscordRPCStatus() {
        if(config.get('discordRPC') === true) {
            return 'checked';
        } else {
            return 'notchecked';
        }
    }
    
    function getAdblockStatus() {
        if(config.get('adblock') === true) {
            return 'checked';
        } else {
            return 'notchecked';
        }
    }
    createClientSettingsMenu();
}
module.exports = {
    createClientSettings
}