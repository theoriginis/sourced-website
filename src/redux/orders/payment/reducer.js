const INIT_STATE = {
    error:'',
    in_action:false,
    payment_message:''
}

export default(state = INIT_STATE,action) => {

    switch(action.type){
        case "ACTION_INITIATED_PAYMENT":
        return {
            ...state,
            in_action: true
        };
        case "PAYMENT_SUCCESS" :
            return {
                ...state,
                payment_message: action.payload
            }
            case "PAYMENT_FAILURE" :
            return {
                ...state,
                error: action.payload
            }
            case "ACTION_COMPLETED_PAYMENT" : 
            return {
                ...state,
                in_action: false
            }
            default:
                return state
    }
}