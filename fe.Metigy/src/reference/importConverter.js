// translate database name to state name

const filterSettings = (data) => {


    let settingsObj = {
        incognito_checked: false,
        chrome_checked: false,
        firefox_checked: false,
        explorer_checked: false,
        safari_checked: false,
        opera_checked: false,
        visited_page_checked: false,
        device_reset_checked: false,
        vinn_reset_checked: false,
        phone_reset_checked: false,
        mobile_data_checked: false,
        fly_mode_checked: false,
        remove_cookies_checked: false,
        change_resolutions_checked: false,
        mouse_tracks_checked: false,
        data_saving_checked: false,
        random_generate_checked: false,
        analytic_protection_checked: false,
        remove_history_checked: false
    }

    Object.values(data).map(item => {
        const { category, content } = item;


        if (category === "settings") {

            switch (content) {
                case "Incognito":
                    settingsObj.incognito_checked = !settingsObj.incognito_checked;
                    break;

                case "Chrome":
                    settingsObj.chrome_checked = !settingsObj.chrome_checked;
                    break;

                case "Firefox":
                    settingsObj.firefox_checked = !settingsObj.firefox_checked;
                    break;

                case "Explorer":
                    settingsObj.explorer_checked = !settingsObj.explorer_checked;
                    break;

                case "Safari":
                    settingsObj.safari_checked = !settingsObj.safari_checked;
                    break;

                case "Opera":
                    settingsObj.opera_checked = !settingsObj.opera_checked;
                    break;

                case "Visit the Page within the Site":
                    settingsObj.visited_page_checked = !settingsObj.visited_page_checked;
                    break;

                case "Device Reset":
                    settingsObj.device_reset_checked = !settingsObj.device_reset_checked;
                    break;

                case "Vinn Reset":
                    settingsObj.vinn_reset_checked = !settingsObj.vinn_reset_checked;
                    break;

                case "Phone Reset":
                    settingsObj.phone_reset_checked = !settingsObj.phone_reset_checked;
                    break;

                case "Mobile Data":
                    settingsObj.mobile_data_checked = !settingsObj.mobile_data_checked;
                    break;

                case "Fly Mode":
                    settingsObj.fly_mode_checked = !settingsObj.fly_mode_checked;
                    break;

                case "Remove Cookies":
                    settingsObj.remove_cookies_checked = !settingsObj.remove_cookies_checked;
                    break;

                case "Change Resolution":
                    settingsObj.change_resolutions_checked = !settingsObj.change_resolutions_checked;
                    break;

                case "Mouse Tracks":
                    settingsObj.mouse_tracks_checked = !settingsObj.mouse_tracks_checked;
                    break;

                case "Data Saving Mode":
                    settingsObj.data_saving_checked = !settingsObj.data_saving_checked;
                    break;

                case "Random Generate":
                    settingsObj.random_generate_checked = !settingsObj.random_generate_checked;
                    break;

                case "Analytic Protection":
                    settingsObj.analytic_protection_checked = !settingsObj.analytic_protection_checked;
                    break;

                case "Remove History":
                    settingsObj.remove_history_checked = !settingsObj.remove_history_checked;
                    break;
                
                default:
                    break;
            }
        }
    })
    
    return settingsObj;

}


module.exports = filterSettings;