import {forgotPassword} from "../../utils/apis.js";

export const passwordForgot = (data) => async (dispatch)=>{

    dispatch({type:"ACTION_INITIATED_FOROGOT_PASSWORD"});
    try{
        
        const response = await forgotPassword(data);
        
        if(response.status <=201){
            dispatch({
                type: "SUCCESS_FORGOT_PASSWORD",
                payload:response.data
            });
        }else{
            dispatch({
                type: "FAILURE_FORGOT_PASSWORD",
                payload:response.response.data.message
            });
        }
    }catch (error){
        console.log('error',error)
        dispatch({
            type: "FAILURE_FORGOT_PASSWORD",
            payload:response.response.data.message
        });
    }
    dispatch({
        type: "ACTION_COMPLETED_FOROGOT_PASSWORD",
        payload:'user not loged in '
    });
}