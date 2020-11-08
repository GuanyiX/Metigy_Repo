const filterSettings = require("../reference/importConverter");

const defaultSettingsState = {
    plainOptions: ['Chrome', 'Firefox', 'Explorer', 'Safari', 'Opera'],
}


export const settingsReducer = (state = defaultSettingsState, action) => {
    const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {

        case "TICK_INCOGNITO":
            newState.incognito_checked = !state.incognito_checked
            return newState

        case "TICK_CHROME":
            newState.chrome_checked = !state.chrome_checked
            return newState

        case "TICK_FIREFOX":
            newState.firefox_checked = !state.firefox_checked
            return newState

        case "TICK_EXPLORER":
            newState.explorer_checked = !state.explorer_checked
            return newState

        case "TICK_SAFARI":
            newState.safari_checked = !state.safari_checked
            return newState

        case "TICK_OPERA":
            newState.opera_checked = !state.opera_checked
            return newState

        case "TICK_VISITED_PAGE":
            newState.visited_page_checked = !state.visited_page_checked
            return newState

        case "TICK_DEVICE_RESET":
            newState.device_reset_checked = !state.device_reset_checked
            return newState

        case "TICK_VINN_RESET":
            newState.vinn_reset_checked = !state.vinn_reset_checked
            return newState

        case "TICK_PHONE_RESET":
            newState.phone_reset_checked = !state.phone_reset_checked
            return newState

        case "TICK_MOBILE_DATA":
            newState.mobile_data_checked = !state.mobile_data_checked
            return newState

        case "TICK_FLY_MODE":
            newState.fly_mode_checked = !state.fly_mode_checked
            return newState

        case "TICK_REMOVE_COOKIES":
            newState.remove_cookies_checked = !state.remove_cookies_checked
            return newState

        case "TICK_CHANGE_RESOLUTIONS":
            newState.change_resolutions_checked = !state.change_resolutions_checked
            return newState

        case "TICK_MOUSE_TRACKS":
            newState.mouse_tracks_checked = !state.mouse_tracks_checked
            return newState

        case "TICK_DATA_SAVING":
            newState.data_saving_checked = !state.data_saving_checked
            return newState

        case "TICK_RANDOM_GENERATE":
            newState.random_generate_checked = !state.random_generate_checked
            return newState

        case "TICK_ANALYTIC_PROTECTION":
            newState.analytic_protection_checked = !state.analytic_protection_checked
            return newState

        case "TICK_REMOVE_HISTORY":
            newState.remove_history_checked = !state.remove_history_checked
            return newState

        case "INIT_SETTINGS":
            const { data } = action;
            const newSettingsObj = filterSettings(data, newState);
            let obj = Object.assign(newState, newSettingsObj);
            return obj;

        default:
            return state;
    }
}