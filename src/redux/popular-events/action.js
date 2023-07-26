import {popularEvents} from "../../utils/apis.js";

export const popularEventsList = () => async (dispatch)=>{

    dispatch({type:"ACTION_INITIATED_POPULAR_EVENT_LIST"});
    try{

        const response = await popularEvents();

        if(response.status <=201){
            dispatch({
                type: "POPULAR_EVENT_LIST",
                payload:response.data.data,
    
            });
      
        }else{
            dispatch({
                type: "POPULAR_EVENT_LIST_FAILURE",
                payload:'events not found '
            });
        }
    }catch (error){
        dispatch({
            type: "POPULAR_EVENT_LIST_FAILURE",
            payload:'events not found '
        });
    }
    dispatch({
        type: "ACTION_COMPLETED_POPULAR_EVENT_LIST",
        payload:'events not found '
    });
}

