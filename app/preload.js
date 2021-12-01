const Store = require('electron-store')
const config = new Store();
const {
    fetchBadgesDB
} = require('./badgesDB')
const {
    app
} = require('@electron/remote')


document.addEventListener('DOMContentLoaded', function() {
    reddit.href = 'https://discord.gg/T8BDkTcsGd'
    window.app = app
    window.relaunchApp = function(reason) {
        alert(`${reason} Restarting the client now.`)
        app.relaunch();
        app.exit();
    }
    
    fetchBadgesDB()
    window.settings_button.onclick = function() {
        setTimeout(addGameSettings, 300)
    }
    window.addGameSettings = function() {
        $('.module_content:contains("Game Settings")').addClass('settings');
        if(document.getElementById('show_client_settings') == null && document.getElementById('show_game_settings') == null) {
            document.getElementsByClassName('settings')[0].insertAdjacentHTML('beforeend', `
 <button type="button" class="btn btn-outline-primary" onclick="showClientSettings()" id="show_client_settings">Show Client Settings</button>`)
        }
    }
    window.showGameSettings = function() {
        document.getElementsByClassName('settings')[0].innerHTML = `<div class="module_content settings"><h2>Game Settings</h2> <button style="display: none" type="button" class="btn btn-outline-danger" id="advanced_toggle" data-state="0">Advanced Settings ⥤</button> <button type="button" class="btn btn-outline-warning" id="reset_defaults">Restore Defaults</button><form>
<div class="form-group">
    <label for="change_region" id="change_region_label">Region:</label>
    <select id="change_region" class="form-control">
        <option value="bangalore">Bangalore</option>,<option value="amsterdam">Amsterdam</option>,<option value="tokyo">Tokyo</option>,<option value="frankfurt">Frankfurt</option>,<option value="new-york-city">New York City</option>,<option value="sydney">Sydney</option>,<option value="singapore">Singapore</option>,<option value="san-francisco" selected="">San Francisco</option>
    </select>
</div>
</form>
<h4>Controls</h4><button type="button" id="hotkey_button" class="btn btn-outline-primary">Set Hotkeys</button><form> <div class="form-group "> <label for="change_mouse_x" id="change_mouse_x_label">Mouse X Sensitivity: <span class="settings_value">0.1</span></label> <input type="range" class="form-control-range" id="change_mouse_x" min="1" max="100" value="10"> </div> </form><form> <div class="form-group "> <label for="change_mouse_y" id="change_mouse_y_label">Mouse Y Sensitivity: <span class="settings_value">0.1</span></label> <input type="range" class="form-control-range" id="change_mouse_y" min="1" max="100" value="10"> </div> </form><form> <div class="form-group "> <label for="change_ads_mouse_x" id="change_ads_mouse_x_label">Zoom Mouse X Sensitivity: <span class="settings_value">0.05</span></label> <input type="range" class="form-control-range" id="change_ads_mouse_x" min="1" max="100" value="5"> </div> </form><form> <div class="form-group "> <label for="change_ads_mouse_y" id="change_ads_mouse_y_label">Zoom Mouse Y Sensitivity: <span class="settings_value">0.05</span></label> <input type="range" class="form-control-range" id="change_ads_mouse_y" min="1" max="100" value="5"> </div> </form><div class="form-check "> <input class="form-check-input" type="checkbox" value="" id="invert_mouse_y"> <label class="form-check-label" for="invert_mouse_y">Invert Y Axis</label></div><h4>Display</h4><div title="3rd person cam is only available in certrain game modes" class="form-check "> <input class="form-check-input" type="checkbox" value="" id="3rd_person_cam"> <label class="form-check-label" for="3rd_person_cam">Enable 3rd person perspective on available game modes</label></div><div class="form-check "> <input class="form-check-input" type="checkbox" value="" id="show_ping" checked=""> <label class="form-check-label" for="show_ping">Show Ping</label></div><div class="form-check "> <input class="form-check-input" type="checkbox" value="" id="show_fps" checked=""> <label class="form-check-label" for="show_fps">Show FPS</label></div><div class="form-check advanced_setting"> <input class="form-check-input" type="checkbox" value="" id="disable_achievements"> <label class="form-check-label" for="disable_achievements">Disable Achievement Notifications</label></div><button data-uid="231497" type="button" id="crosshair_button" class="btn btn-outline-primary">Set Custom Crosshair</button><h4>Graphics</h4><div class="form-check "> <input class="form-check-input" type="checkbox" value="" id="lod_weapons"> <label class="form-check-label" for="lod_weapons">Low Detail Weapons</label></div><div class="form-check "> <input class="form-check-input" type="checkbox" value="" id="auto_resolution" checked=""> <label class="form-check-label" for="auto_resolution">Auto Resolution</label></div><form> <div class="form-group "> <label for="change_resolution" id="change_resolution_label">Resolution: <span class="settings_value">80</span></label> <input type="range" class="form-control-range" id="change_resolution" min="1" max="100" value="80" disabled=""> </div> </form><form> <div class="form-group "> <label for="fov_slider" id="fov_slider_label">FOV Slider: <span class="settings_value">70</span></label> <input type="range" class="form-control-range" id="fov_slider" min="60" max="100" value="70"> </div> </form><div class="form-check advanced_setting"> <input class="form-check-input" type="checkbox" value="" id="enable_bloom"> <label class="form-check-label" for="enable_bloom">Enable Bloom (experimental)</label></div><div class="form-check advanced_setting"> <input class="form-check-input" type="checkbox" value="" id="disable_fairy"> <label class="form-check-label" for="disable_fairy">Disable Fairy Dust</label></div><h4>Sound</h4><form> <div class="form-group "> <label for="master_volume_slider" id="master_volume_slider_label">Master Sound Volume: <span class="settings_value">50</span></label> <input type="range" class="form-control-range" id="master_volume_slider" min="1" max="100" value="50"> </div> </form><h4>Weapon Zoom</h4><form> <div class="form-group "> <label for="zoom_ar" id="zoom_ar_label">Auto Rifle: <span class="settings_value">30</span></label> <input type="range" class="form-control-range" id="zoom_ar" min="10" max="100" value="30"> </div> </form><form> <div class="form-group "> <label for="zoom_handgun" id="zoom_handgun_label">Hand Cannon: <span class="settings_value">30</span></label> <input type="range" class="form-control-range" id="zoom_handgun" min="10" max="100" value="30"> </div> </form><form> <div class="form-group "> <label for="zoom_laser" id="zoom_laser_label">Laser Rifle: <span class="settings_value">30</span></label> <input type="range" class="form-control-range" id="zoom_laser" min="10" max="100" value="30"> </div> </form><form> <div class="form-group "> <label for="zoom_br" id="zoom_br_label">Burst Rifle: <span class="settings_value">30</span></label> <input type="range" class="form-control-range" id="zoom_br" min="10" max="100" value="30"> </div> </form><form> <div class="form-group "> <label for="zoom_shotgun" id="zoom_shotgun_label">Shotgun: <span class="settings_value">30</span></label> <input type="range" class="form-control-range" id="zoom_shotgun" min="10" max="100" value="30"> </div> </form><form> <div class="form-group "> <label for="zoom_sniper" id="zoom_sniper_label">Sniper: <span class="settings_value">20</span></label> <input type="range" class="form-control-range" id="zoom_sniper" min="10" max="100" value="20"> </div> </form><form> <div class="form-group "> <label for="zoom_smg" id="zoom_smg_label">SMG: <span class="settings_value">30</span></label> <input type="range" class="form-control-range" id="zoom_smg" min="10" max="100" value="30"> </div> </form><form> <div class="form-group "> <label for="zoom_deagle" id="zoom_deagle_label">Desert Eagle: <span class="settings_value">30</span></label> <input type="range" class="form-control-range" id="zoom_deagle" min="10" max="100" value="30"> </div> </form><div class="form-check advanced_setting"> <input class="form-check-input" type="checkbox" value="" id="hide_gun"> <label class="form-check-label" for="hide_gun">Hide Gun While Zooming</label></div>
<button type="button" class="btn btn-outline-primary" onclick="showClientSettings()" id="show_client_settings">Show Client Settings</button></div>`
    }
    window.showClientSettings = function() {
        document.getElementsByClassName('settings')[0].innerHTML = `
      <div class="simplebar-content" style=" padding: 50px;">
          <div class="module_content">
          <form id="ClientSettingsForm">    
          <h2>Client Settings</h2><br>
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
              <button type="button" class="btn btn-outline-primary" onclick="showGameSettings()" id="show_game_settings">Show Game Settings</button>
              <form>
          </div>
      </div>
  </div>
</div>
</div>
<div class="simplebar-placeholder" style="width: 630px; height: 244px;"></div>
`
    }
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
})