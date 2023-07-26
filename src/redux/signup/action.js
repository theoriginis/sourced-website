import {signupUser} from "../../utils/apis.js";

export const addUser = (data) => async (dispatch)=>{

    //dispatch({type:"ACTION_INITIATED_ADD_USER"});
    try{

        const response = await signupUser(data);
       
        if(response.status <=201){
            dispatch({
                type: "SUCCESS",
                payload:response.data.message
            });
        }else{
            dispatch({
                type: "FAILURE",
                payload:'user not added '
            });
        }
    }catch (error){
        dispatch({
            type: "FAILURE",
            payload:'user not added '
        });
    }
    dispatch({
        type: "ACTION_COMPLETED_ADD_USER",
        payload:'user not added '
    });
}