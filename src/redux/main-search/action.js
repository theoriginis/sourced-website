import {MainSearchResults} from "../../utils/apis.js";

export const mainSearch = (data) => async (dispatch)=>{

    dispatch({type:"ACTION_INITIATED_SEARCH_RESULTS"});
    try{

        const response = await MainSearchResults(data);

        if(response.status <=201){
            dispatch({
                type: "SEARCH_RESULTS",
                payload:response.data.data
            });
            dispatch({
                type: "LAST_PAGE",
                payload:response.data.last_page
             });
        }else{
            dispatch({
                type: "SEARCH_RESULTS_FAILURE",
                payload:'events not found '
            });
        }
    }catch (error){
        dispatch({
            type: "SEARCH_RESULTS_FAILURE",
            payload:'events not found '
        });
    }
    dispatch({
        type: "ACTION_COMPLETED_SEARCH_RESULTS",
        payload:'events not found '
    });
}