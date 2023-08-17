const INIT_STATE = {
    error:'',
    in_action:false,
    top_performer_list:'',
    top_shows_list:'',
    error_top_shows:''
}

export default(state = INIT_STATE,action) => {

    switch(action.type){
        case "ACTION_INITIATED_ADD_USER":
        return {
            ...state,
            in_action: true
        };
        case "SUCCESS_TOP_PERFORMER" :
            return {
                ...state,
                top_performer_list: action.payload
            }
            case "FAILURE_TOP_PERFORMER" :
            return {
                ...state,
                error: action.payload
            }
            case "ACTION_COMPLETED_ADD_USER" : 
            return {
                ...state,
                in_action: false
            }
            case "SUCCESS_TOP_SHOWS" :
                return {
                    ...state,
                    top_shows_list: action.payload
                }
                case "FAILURE_TOP_SHOWS" :
                    return {
                        ...state,
                        error_top_shows: action.payload
                    }
            default:
                return state
    }
}