const INIT_STATE = {
  error: "",
  in_action: false,
  searched_events: "",
  performer_search: "",
  performer_search_header:"",
  error_performer_search: "",
  in_action_performer: false,
  error_performer_search_header: "",
  in_action_performer_header: false,
  performer_search_main:"",
  error_performer_search_main: "",
  in_action_performer_main: false,
  in_action_search_by_performer:false,
  searched_events_by_performer:""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ACTION_INITIATED_SEARCH_EVENT":
      return {
        ...state,
        in_action: true,
      };
      case "ACTION_INITIATED_SEARCH_EVENT_BYPERFORMER":
      return {
        ...state,
        in_action_search_by_performer: true,
      };
    case "SEARCH_EVENT":
      return {
        ...state,
        searched_events: action.payload,
        in_action: false,
      };
      case "SEARCH_EVENT_EVENT_BYPERFORMER":
        return {
          ...state,
          searched_events_by_performer: action.payload,
          in_action_search_by_performer: false,
        };

    case "SEARCH_EVENT_FAILURE":
      return {
        ...state,
        error: action.payload,
        in_action: false,
      };
      case "SEARCH_EVENT_FAILURE_EVENT_BYPERFORMER":
        return {
          ...state,
          error: action.payload,
          in_action_search_by_performer: false,
        };
    case "ACTION_COMPLETED_SEARCH_EVENT":
      return {
        ...state,
        in_action: false,
      };
      case "ACTION_COMPLETED_SEARCH_EVENT_EVENT_BYPERFORMER":
      return {
        ...state,
        in_action_search_by_performer: false,
      };
    case "ACTION_INITIATED_SEARCH_PERFORMER":
      return {
        ...state,
        in_action_performer: true,
      };
    case "SEARCH_PERFORMER":
      return {
        ...state,
        performer_search: action.payload,
        in_action_performer: false,
      };
      case "SEARCH_PERFORMER_HEADER":
      return {
        ...state,
        performer_search_header: action.payload,
        in_action_performer: false,
      };
      case "SEARCH_PERFORMER_MAIN":
      return {
        ...state,
        performer_search_main: action.payload,
        in_action_performer_main: false,
      };
    case "SEARCH_PERFORMER_FAILURE":
      return {
        ...state,
        error_performer_search: action.payload,
        in_action_performer: false,
      };
      case "SEARCH_PERFORMER_FAILURE_HEADER":
        return {
          ...state,
          error_performer_search_header: action.payload,
          in_action_performer: false,
        };
        case "SEARCH_PERFORMER_FAILURE_MAIN":
        return {
          ...state,
          error_performer_search_main: action.payload,
          in_action_performer_main: false,
        };
    case "ACTION_COMPLETED_PERFORMER_LIST":
      return {
        ...state,

        in_action_artist: false,
      };
      case "ACTION_COMPLETED_PERFORMER_SEARCH_HEADER":
      return {
        ...state,

        in_action_performer_header: false,
      };

    default:
      return state;
  }
};
