import {TopPerformer,TopShows} from "../../utils/apis.js";

export const TopPerformerList = () => async (dispatch)=>{

    //dispatch({type:"ACTION_INITIATED_ADD_USER"});
    try{

        const response = await TopPerformer();
       console.log('response',response)
        if(response.status <=201){
            dispatch({
                type: "SUCCESS_TOP_PERFORMER",
                payload:response.data.results
            });
        }else{
            dispatch({
                type: "FAILURE_TOP_PERFORMER",
                payload:'performer not found '
            });
        }
    }catch (error){
        dispatch({
            type: "FAILURE_TOP_PERFORMER",
            payload:'performer not found '
        });
    }
    dispatch({
        type: "ACTION_COMPLETED_ADD_USER",
        payload:'performer not found '
    });
}
export const TopShowsList = () => async (dispatch)=>{

    //dispatch({type:"ACTION_INITIATED_ADD_USER"});
    try{

        const response = await TopShows();
       console.log('responseTopShowsList',response)
        if(response.status <=201){
            dispatch({
                type: "SUCCESS_TOP_SHOWS",
                payload:response.data.results
            });
        }else{
            dispatch({
                type: "FAILURE_TOP_SHOWS",
                payload:'performer not found '
            });
        }
    }catch (error){
        dispatch({
            type: "FAILURE_TOP_SHOWS",
            payload:'performer not found '
        });
    }
    dispatch({
        type: "ACTION_COMPLETED_SHOWS",
        payload:'performer not found '
    });
}