const INIT_STATE = {
    error:'',
    in_action:false,
    forgot_password:''
}

export default(state = INIT_STATE,action) => {
   
    switch(action.type){
        case "ACTION_INITIATED_FOROGOT_PASSWORD":
        return {
            ...state,
            in_action: true
        };
        case "SUCCESS_FORGOT_PASSWORD" :
            return {
                ...state,
                forgot_password: action.payload
            }
            case "FAILURE_FORGOT_PASSWORD" :
            return {
                ...state,
                error: action.payload
            }
            case "ACTION_COMPLETED_FOROGOT_PASSWORD" : 
            return {
                ...state,
                in_action: false
            }
            default:
                return state;
    }
}