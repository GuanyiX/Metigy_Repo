
// translate state name to database name of setting
const converter = (dataArr) => {

    const newdataArr = [];

    dataArr.map(item => {

        switch (item) {
            case "incognito_checked":
                newdataArr.push("Incognito");
                break;

            case "chrome_checked":
                newdataArr.push("Chrome");
                break;

            case "firefox_checked":
                newdataArr.push("Firefox");
                break;

            case "explorer_checked":
                newdataArr.push("Explorer");
                break;

            case "safari_checked":
                newdataArr.push("Safari");
                break;

            case "opera_checked":
                newdataArr.push("Opera");
                break;

            case "visited_page_checked":
                newdataArr.push("Visit the Page within the Site");
                break;

            case "device_reset_checked":
                newdataArr.push("Device Reset");
                break;

            case "vinn_reset_checked":
                newdataArr.push("Vinn Reset");
                break;

            case "phone_reset_checked":
                newdataArr.push("Phone Reset");
                break;

            case "mobile_data_checked":
                newdataArr.push("Mobile Data");
                break;

            case "fly_mode_checked":
                newdataArr.push("Fly Mode");
                break;

            case "remove_cookies_checked":
                newdataArr.push("Remove Cookies");
                break;

            case "change_resolutions_checked":
                newdataArr.push("Change Resolution");
                break;

            case "mouse_tracks_checked":
                newdataArr.push("Mouse Tracks");
                break;

            case "data_saving_checked":
                newdataArr.push("Data Saving Mode");
                break;

            case "random_generate_checked":
                newdataArr.push("Random Generate");
                break;

            case "analytic_protection_checked":
                newdataArr.push("Analytic Protection");
                break;

            case "remove_history_checked":
                newdataArr.push("Remove History");
                break;


            default:
                break;
        }
    })

    return newdataArr;
}

module.exports = converter;