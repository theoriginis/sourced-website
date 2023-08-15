const INIT_STATE = {
  error: "",
  in_action: false,
  searched_events: "",
  performer_search:"",
  error_performer_search:""

};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ACTION_INITIATED_SEARCH_EVENT":
      return {
        ...state,
        in_action: true,
      };
    case "SEARCH_EVENT":
      return {
        ...state,
        searched_events: action.payload,
      };
   
    case "SEARCH_EVENT_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "ACTION_COMPLETED_PERFORMER_LIST":
      return {
        ...state,
        in_action: false,
      };
    case "ACTION_COMPLETED_SEARCH_EVENT":
      return {
        ...state,
        in_action_artist: true,
      };
      case "ACTION_INITIATED_SEARCH_PERFORMER":
      return {
        ...state,
        in_action_artist: true,
      };
      case "SEARCH_PERFORMER":
        return {
          ...state,
          performer_search: action.payload,
        };
        case "SEARCH_PERFORMER_FAILURE":
        return {
          ...state,
          error_performer_search: action.payload,
        };
      return {
        ...state,
        in_action_artist: false,
      };
    default:
      return state;
  }
};
