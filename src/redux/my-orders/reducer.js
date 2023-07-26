const INIT_STATE = {
    error:'',
    in_action:false,
    my_order_list:''
}

export default(state = INIT_STATE,action) => {

    switch(action.type){
        case "ACTION_INITIATED_ORDER_LIST":
        return {
            ...state,
            in_action: true
        };
        case "ORDER_LIST_SUCCESS" :
            return {
                ...state,
                my_order_list: action.payload
            }
            case "ORDER_LIST_FAILURE" :
            return {
                ...state,
                error: action.payload
            }
            case "ACTION_COMPLETED_ORDER_LIST" : 
            return {
                ...state,
                in_action: false
            }
            default:
                return state
    }
}