const INIT_STATE = {
    error:'',
    in_action:false,
    user_added:''
}

export default(state = INIT_STATE,action) => {

    switch(action.type){
        case "ACTION_INITIATED_ADD_USER":
        return {
            ...state,
            in_action: true
        };
        case "SUCCESS" :
            return {
                ...state,
                user_added: action.payload
            }
            case "FAILURE" :
            return {
                ...state,
                error: action.payload
            }
            case "ACTION_COMPLETED_ADD_USER" : 
            return {
                ...state,
                in_action: false
            }
            default:
                return state
    }
}