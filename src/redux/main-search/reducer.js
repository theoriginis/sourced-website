const INIT_STATE = {
    error: "",
    in_action: false,
    search_results:'',
    last_page_value:''

  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case "ACTION_INITIATED_SEARCH_RESULTS":
        return {
          ...state,
          in_action: true,
        };
      case "SEARCH_RESULTS":
        return {
          ...state,
          search_results: action.payload,
        };
        case "LAST_PAGE":
      return {
        ...state,
        last_page_value: action.payload,
      };
      case "SEARCH_RESULTS_FAILURE":
        return {
          ...state,
          error: action.payload,
        };
      case "ACTION_COMPLETED_SEARCH_RESULTS":
        return {
          ...state,
          in_action: false,
        };
  
  
       
      default:
        return state;
    }
  };
  