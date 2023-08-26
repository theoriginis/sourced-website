const INIT_STATE = {
  error: "",
  in_action_performer: false,
  in_action_shows: false,
  top_performer_list: "",
  top_shows_list: "",
  error_top_shows: "",
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ACTION_INITIATED_TOP_PERFORMER":
      return {
        ...state,
        in_action_performer: true,
      };
    case "SUCCESS_TOP_PERFORMER":
      return {
        ...state,
        top_performer_list: action.payload,
        in_action_performer: false,
      };
    case "FAILURE_TOP_PERFORMER":
      return {
        ...state,
        error: action.payload,
        in_action_performer: false,
      };
    case "ACTION_COMPLETED_TOP_PERFORMER":
      return {
        ...state,
        in_action_performer: false,
      };
    case "ACTION_INITIATED_TOP_SHOWS":
      return {
        ...state,
        in_action_shows: true,
      };
    case "SUCCESS_TOP_SHOWS":
      return {
        ...state,
        top_shows_list: action.payload,
        in_action_shows: false,
      };
    case "FAILURE_TOP_SHOWS":
      return {
        ...state,
        error_top_shows: action.payload,
        in_action_shows: false,
      };
    default:
      return state;
  }
};
