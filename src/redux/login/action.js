import {loginUser} from "../../utils/apis.js";

export const userLogin = (data) => async (dispatch)=>{

    dispatch({type:"ACTION_INITIATED_LOGIN_USER"});
    try{
        
        const response = await loginUser(data);
  
        if(response.status <=201){
            dispatch({
                type: "SUCCESS_USER_LOGIN",
                payload:response.data
            });
        }else{
            dispatch({
                type: "FAILURE_USER_LOGIN",
                payload:response.response.data.message
            });
        }
    }catch (error){
        console.log('error',error)
        dispatch({
            type: "FAILURE_USER_LOGIN",
            payload:response.response.data.message
        });
    }
    dispatch({
        type: "ACTION_COMPLETED_LOGIN_USER",
        payload:'user not loged in '
    });
}