import {ConfirmOrder} from "../../../utils/apis";

export const orderConfirm = (data) => async (dispatch)=>{

    dispatch({type:"ACTION_INITIATED_PAYMENT"});
    try{

        const response = await ConfirmOrder(data);
       
        if(response.status <=201){
            dispatch({
                type: "PAYMENT_SUCCESS",
                payload:response.data.message
            });
        }else{
            dispatch({
                type: "PAYMENT_FAILURE",
                payload:'user not added '
            });
        }
    }catch (error){
        dispatch({
            type: "PAYMENT_FAILURE",
            payload:'user not added '
        });
    }
    dispatch({
        type: "ACTION_COMPLETED_PAYMENT",
        payload:'user not added '
    });
}