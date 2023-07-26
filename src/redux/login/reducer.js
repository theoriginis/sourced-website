const INIT_STATE = {
    error:'',
    in_action:false,
    user_info:''
}

export default(state = INIT_STATE,action) => {
   
    switch(action.type){
        case "ACTION_INITIATED_LOGIN_USER":
        return {
            ...state,
            in_action: true
        };
        case "SUCCESS_USER_LOGIN" :
            return {
                ...state,
                user_info: action.payload
            }
            case "FAILURE_USER_LOGIN" :
            return {
                ...state,
                error: action.payload
            }
            case "ACTION_COMPLETED_LOGIN_USER" : 
            return {
                ...state,
                in_action: false
            }
            default:
                return state;
    }
}