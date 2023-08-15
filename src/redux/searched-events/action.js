import {SearchEvent,SearchPerformer} from "../../utils/apis.js";

export const searchedEvent = (data) => async (dispatch)=>{

    dispatch({type:"ACTION_INITIATED_SEARCH_EVENT"});
    try{

        const response = await SearchEvent(data);
     console.log('api response seacrhed ',response)
        if(response.status <=201){
            dispatch({
                type: "SEARCH_EVENT",
                payload:response.data.results
            });
          
        }else{
            dispatch({
                type: "SEARCH_EVENT_FAILURE",
                payload:'performer list not found '
            });
        }
    }catch (error){
        dispatch({
            type: "SEARCH_EVENT_FAILURE",
            payload:'performer list not found '
        });
    }
    dispatch({
        type: "ACTION_COMPLETED_SEARCH_EVENT",
        payload:'performer list not found '
    });
}
export const searchedPerformer = (data) => async (dispatch)=>{

    dispatch({type:"ACTION_INITIATED_SEARCH_PERFORMER"});
    try{

        const response = await SearchPerformer(data);
        if(response.status <=201){
            dispatch({
                type: "SEARCH_PERFORMER",
                payload:response.data.results
            });
          
        }else{
            dispatch({
                type: "SEARCH_PERFORMER_FAILURE",
                payload:'performer list not found '
            });
        }
    }catch (error){
        dispatch({
            type: "SEARCH_PERFORMER_FAILURE",
            payload:'performer list not found '
        });
    }
    dispatch({
        type: "ACTION_COMPLETED_SEARCH_EVENT",
        payload:'performer list not found '
    });
}