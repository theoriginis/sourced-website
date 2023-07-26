const INIT_STATE = {
  error: "",
  in_action: false,
  performer_list: "",
  artist_details: "",
  in_action_artist: "",
  artist_error: "",
  last_page_value: "",
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ACTION_INITIATED_PERFORMER_LIST":
      return {
        ...state,
        in_action: true,
      };
    case "PERFORMER_LIST":
      return {
        ...state,
        performer_list: action.payload,
      };
   
    case "PERFORMER_LIST_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "ACTION_COMPLETED_PERFORMER_LIST":
      return {
        ...state,
        in_action: false,
      };
    case "ACTION_INITIATED_ARTIST_DETAILS":
      return {
        ...state,
        in_action_artist: true,
      };
    case "ARTIST_DETAILS":
      return {
        ...state,
        artist_details: action.payload,
      };
      case "LAST_PAGE":
        return {
          ...state,
          last_page_value: action.payload,
        };
    case "ARTIST_DETAILS_FAILURE":
      return {
        ...state,
        artist_error: action.payload,
      };
    case "ACTION_COMPLETED_ARTIST_DETAILS":
      return {
        ...state,
        in_action_artist: false,
      };
    default:
      return state;
  }
};
