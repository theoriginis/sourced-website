import {TopPerformer,TopShows} from "../../utils/apis.js";

export const TopPerformerList = () => async (dispatch)=>{

    dispatch({type:"ACTION_INITIATED_TOP_PERFORMER"});
    try{

        const response = await TopPerformer();
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
        type: "ACTION_COMPLETED_TOP_PERFORMER",
        payload:'performer not found '
    });
}
export const TopShowsList = () => async (dispatch)=>{

    dispatch({type:"ACTION_INITIATED_TOP_SHOWS"});
    try{

        const response = await TopShows();
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
        type: "ACTION_COMPLETED_TOP_SHOWS",
        payload:'performer not found '
    });
}