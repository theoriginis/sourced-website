const INIT_STATE = {
  error: "",
  in_action: false,
  popular_event_list: "",
  event_details:'',
  in_action_event_details:false,
  event_details_error:"",
  last_page_value:''
};

export default (state = INIT_STATE, action) => {

  switch (action.type) {
    case "ACTION_INITIATED_POPULAR_EVENT_LIST":
      return {
        ...state,
        in_action: true,
      };
    case "POPULAR_EVENT_LIST":
      return {
        ...state,
        popular_event_list: action.payload,
      };
      case "LAST_PAGE":
      return {
        ...state,
        last_page_value: action.payload,
      };
    case "POPULAR_EVENT_LIST_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "ACTION_COMPLETED_POPULAR_EVENT_LIST":
      return {
        ...state,
        in_action: false,
      };



    default:
      return state;
  }
};
