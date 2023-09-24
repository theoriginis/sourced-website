import {combineReducers} from "redux"

import user_added from "../redux/signup/reducer";
import user_info from "../redux/login/reducer";
import forgot_password from "../redux/forgot-password/reducer";
import performer_search from "../redux/searched-events/reducer";
import top_performer_list from "../redux/top-performers/reducer";
import top_shows_list from "../redux/top-performers/reducer";

import searched_events from "../redux/searched-events/reducer";
import performer_search_header from "../redux/searched-events/reducer";

const appReducer = combineReducers ({
    user_added,
    user_info,
    forgot_password,
    performer_search,
    searched_events,
    top_performer_list,
    top_shows_list,
    performer_search_header
});

const root_reducer = (state,action)=>{
    if(action.type === 'USER_LOGOUT'){
        state = undefined;
    }
    return appReducer(state,action);
};
export default root_reducer;