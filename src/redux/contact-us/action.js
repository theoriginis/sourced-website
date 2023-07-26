import {ContactUs} from "../../utils/apis.js";

export const contactAdmin = (data) => async (dispatch)=>{
  
    dispatch({type:"ACTION_INITIATED_CONTACT_US"});
    try{

        const response = await ContactUs(data);

        if(response.status <=201){
            dispatch({
                type: "CONTACT_US_STATUS",
                payload:response.data.type
            });
        }else{
            dispatch({
                type: "CONTACT_US_STATUS_FAILURE",
                payload:'events not found '
            });
        }
    }catch (error){
        dispatch({
            type: "CONTACT_US_STATUS_FAILURE",
            payload:'events not found '
        });
    }
    dispatch({
        type: "ACTION_COMPLETED_CONTACT_US_STATUS",
        payload:'events not found '
    });
}