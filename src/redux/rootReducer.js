import {combineReducers} from "redux"

import user_added from "../redux/signup/reducer";
import user_info from "../redux/login/reducer";
import forgot_password from "../redux/forgot-password/reducer";
import event_list  from "../redux/upcoming-event/reducer";
import performer_list from "../redux/performers/reducer";
import event_details from "../redux/upcoming-event/reducer";
import add_to_cart from "../redux/add-to-cart/reducer";
import artist_details from "../redux/performers/reducer";
import search_results from "../redux/main-search/reducer";
import contact_us_status from "../redux/contact-us/reducer";
import popular_event_list from "../redux/popular-events/reducer";
import payment_message from "../redux/orders/payment/reducer";
import my_order_list from"../redux/my-orders/reducer"
const appReducer = combineReducers ({
    user_added,
    user_info,
    forgot_password,
    event_list,
    performer_list,
    event_details,
    add_to_cart,
    artist_details,
    search_results,
    contact_us_status,
    popular_event_list,
    payment_message,
    my_order_list
});

const root_reducer = (state,action)=>{
    if(action.type === 'USER_LOGOUT'){
        state = undefined;
    }
    return appReducer(state,action);
};
export default root_reducer;