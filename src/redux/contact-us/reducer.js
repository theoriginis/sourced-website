const INIT_STATE = {
    error: "",
    in_action: false,
    contact_us_status:'',

  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case "ACTION_INITIATED_CONTACT_US":
        return {
          ...state,
          in_action: true,
        };
      case "CONTACT_US_STATUS":
        return {
          ...state,
          contact_us_status: action.payload,
        };
      case "CONTACT_US_STATUS_FAILURE":
        return {
          ...state,
          error: action.payload,
        };
      case "ACTION_COMPLETED_CONTACT_US_STATUS":
        return {
          ...state,
          in_action: false,
        };
  
  
       
      default:
        return state;
    }
  };
  