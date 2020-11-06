import { combineReducers } from "redux";
import { keywordsReducer } from './keywordsReducer';
import { sitesReducer } from './sitesReducer';
import { settingsReducer } from './settingsReducer';

export default combineReducers({
    keywordsReducer,
    sitesReducer,
    settingsReducer,
});