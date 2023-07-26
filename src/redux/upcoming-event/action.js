import {UpcomingEventList,EventDetails} from "../../utils/apis.js";

export const upcomingEvent = (data) => async (dispatch)=>{

    dispatch({type:"ACTION_INITIATED_EVENT_LIST"});
    try{

        const response = await UpcomingEventList(data);
     
        if(response.status <=201){
            dispatch({
                type: "EVENT_LIST",
                payload:response.data.data,
    
            });
            dispatch({
               type: "LAST_PAGE",
               payload:response.data.last_page
            });
        }else{
            dispatch({
                type: "EVENT_LIST_FAILURE",
                payload:'events not found '
            });
        }
    }catch (error){
        dispatch({
            type: "EVENT_LIST_FAILURE",
            payload:'events not found '
        });
    }
    dispatch({
        type: "ACTION_COMPLETED_EVENT_LIST",
        payload:'events not found '
    });
}

export const evenDetails = (data) => async (dispatch)=>{

    dispatch({type:"ACTION_INITIATED_EVENT_DETAIL"});
    try{

        const response = await EventDetails(data);

        if(response.status <=201){
            dispatch({
                type: "EVENT_DETAIL",
                payload:response.data.data
            });
        }else{
            dispatch({
                type: "EVENT_DETAIL_FAILURE",
                payload:'events not found '
            });
        }
    }catch (error){
        dispatch({
            type: "EVENT_DETAIL_FAILURE",
            payload:'events not found '
        });
    }
    dispatch({
        type: "ACTION_COMPLETED_EVENT_DETAIL",
        payload:'events not found '
    });
}