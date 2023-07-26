const INIT_STATE = {
    error:'',
    in_action:false,
    add_to_cart:''
}

export default(state = INIT_STATE,action) => {
   
    switch(action.type){
        case "ACTION_INITIATED_ADD_TO_CART":
        return {
            ...state,
            in_action: true
        };
        case "SUCCESS_ADD_TO_CART" :
            return {
                ...state,
                add_to_cart: action.payload
            }
            case "FAILURE_ADD_TO_CART" :
            return {
                ...state,
                error: action.payload
            }
            case "ACTION_COMPLETED_ADD_TO_CART" : 
            return {
                ...state,
                in_action: false
            }
            default:
                return state;
    }
}