const INIT_STATE = {
  error: "",
  in_action: false,
  event_list: "",
  event_details:'',
  in_action_event_details:false,
  event_details_error:"",
  last_page_value:''
};

export default (state = INIT_STATE, action) => {

  switch (action.type) {
    case "ACTION_INITIATED_EVENT_LIST":
      return {
        ...state,
        in_action: true,
      };
    case "EVENT_LIST":
      return {
        ...state,
        event_list: action.payload,
      };
      case "LAST_PAGE":
      return {
        ...state,
        last_page_value: action.payload,
      };
    case "EVENT_LIST_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "ACTION_COMPLETED_EVENT_LIST":
      return {
        ...state,
        in_action: false,
      };


      case "ACTION_INITIATED_EVENT_DETAIL":
      return {
        ...state,
        in_action_event_details: true,
      };
    case "EVENT_DETAIL":
      return {
        ...state,
        event_details: action.payload,
      };
    case "EVENT_DETAIL_FAILURE":
      return {
        ...state,
        event_details_error: action.payload,
      };
    case "ACTION_COMPLETED_EVENT_DETAIL":
      return {
        ...state,
        in_action_event_details: false,
      };
    default:
      return state;
  }
};
