import {PerformerList,PerformerInfo} from "../../utils/apis.js";

export const topPerformer = (data) => async (dispatch)=>{

    dispatch({type:"ACTION_INITIATED_PERFORMER_LIST"});
    try{

        const response = await PerformerList();
     
        if(response.status <=201){
            dispatch({
                type: "PERFORMER_LIST",
                payload:response.data.data
            });
          
        }else{
            dispatch({
                type: "PERFORMER_LIST_FAILURE",
                payload:'performer list not found '
            });
        }
    }catch (error){
        dispatch({
            type: "PERFORMER_LIST_FAILURE",
            payload:'performer list not found '
        });
    }
    dispatch({
        type: "ACTION_COMPLETED_PERFORMER_LIST",
        payload:'performer list not found '
    });
}
export const perFormerDetails = (data) => async (dispatch)=>{

    dispatch({type:"ACTION_INITIATED_ARTIST_DETAILS"});
    try{

        const response = await PerformerInfo(data);
       console.log('response',response.data.last_page)
        if(response.status <=201){
            dispatch({
                type: "ARTIST_DETAILS",
                payload:response.data.data
            });
            dispatch({
                type: "LAST_PAGE",
                payload:response.data.last_page
             });
        }else{
            dispatch({
                type: "ARTIST_DETAILS_FAILURE",
                payload:'events not found '
            });
        }
    }catch (error){
        dispatch({
            type: "ARTIST_DETAILS_FAILURE",
            payload:'events not found '
        });
    }
    dispatch({
        type: "ACTION_COMPLETED_ARTIST_DETAILS",
        payload:'events not found '
    });
}