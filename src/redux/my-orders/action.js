import {OrdersList} from "../../utils/apis";

export const getOrderList = () => async (dispatch)=>{

    dispatch({type:"ACTION_INITIATED_ORDER_LIST"});
    try{

        const response = await OrdersList();
       
        if(response.status <=201){
            dispatch({
                type: "ORDER_LIST_SUCCESS",
                payload:response.data.data
            });
        }else{
            dispatch({
                type: "ORDER_LIST_FAILURE",
                payload:'user not added '
            });
        }
    }catch (error){
        dispatch({
            type: "ORDER_LIST_FAILURE",
            payload:'user not added '
        });
    }
    dispatch({
        type: "ACTION_COMPLETED_ORDER_LIST",
        payload:'user not added '
    });
}