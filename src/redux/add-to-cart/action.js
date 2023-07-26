import {AddToCart} from "../../utils/apis.js";

export const addTicketsToCart = (data) => async (dispatch)=>{
    if(data !==''){
        data.forEach(function(v){ delete v.price, v.seat_description,v.seats_left });
        
    dispatch({type:"ACTION_INITIATED_ADD_TO_CART"});
    try{

        const response = await AddToCart(data);
 
        if(response.status <=201){
            dispatch({
                type: "SUCCESS_ADD_TO_CART",
                payload:response.data
            });
        }else{
            dispatch({
                type: "FAILURE_ADD_TO_CART",
                payload:response.response.data.message
            });
        }
    }catch (error){
        console.log('error',error)
        dispatch({
            type: "FAILURE_ADD_TO_CART",
            payload:response.response.data.message
        });
    }
    dispatch({
        type: "ACTION_COMPLETED_ADD_TO_CART",
        payload:'user not loged in '
    });
}
}