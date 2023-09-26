import {
  SearchEvent,
  SearchPerformer,
  EventSearch,
  Searchvenue,
  SearchEventsByPerformer
} from "../../utils/apis.js";

export const searchedEvent = (data) => async (dispatch) => {
  dispatch({ type: "ACTION_INITIATED_SEARCH_EVENT" });
  try {
    const response = await SearchEvent(data);
    console.log("api response seacrhed ", response);
    if (response.status <= 201) {
      dispatch({
        type: "SEARCH_EVENT",
        payload: response.data.results,
      });
    } else {
      dispatch({
        type: "SEARCH_EVENT_FAILURE",
        payload: "performer list not found ",
      });
    }
  } catch (error) {
    dispatch({
      type: "SEARCH_EVENT_FAILURE",
      payload: "performer list not found ",
    });
  }
  dispatch({
    type: "ACTION_COMPLETED_SEARCH_EVENT",
    payload: "performer list not found ",
  });
};
export const searchedPerformer = (data, type) => async (dispatch) => {
  dispatch({ type: "ACTION_INITIATED_SEARCH_PERFORMER" });
  try {
    console.log("Type", type);
    let response = "";
    if (type == "performer") {
      response = await SearchPerformer(data);
    } else if (type == "events") {
      response = await EventSearch(data);
    } else {
      response = await Searchvenue(data);
    }
    console.log("response", response);
    if (response.status <= 201) {
      dispatch({
        type: "SEARCH_PERFORMER",
        payload: response.data.results,
      });
    } else {
      dispatch({
        type: "SEARCH_PERFORMER_FAILURE",
        payload: "performer list not found ",
      });
    }
  } catch (error) {
    dispatch({
      type: "SEARCH_PERFORMER_FAILURE",
      payload: "performer list not found ",
    });
  }
  dispatch({
    type: "ACTION_COMPLETED_SEARCH_EVENT",
    payload: "performer list not found ",
  });
};
/**Header Performer search */
export const searchedPerformerHeader = (data, type) => async (dispatch) => {
  dispatch({ type: "ACTION_INITIATED_SEARCH_PERFORMER" });
  try {
    console.log("Type", type);
    let response = "";
    if (type == "performer") {
      response = await SearchPerformer(data);
    } else if (type == "events") {
      response = await EventSearch(data);
    } else {
      response = await Searchvenue(data);
    }
    console.log("response", response);
    if (response.status <= 201) {
      dispatch({
        type: "SEARCH_PERFORMER_HEADER",
        payload: response.data.results,
      });
    } else {
      dispatch({
        type: "SEARCH_PERFORMER_FAILURE_HEADER",
        payload: "performer list not found ",
      });
    }
  } catch (error) {
    dispatch({
      type: "SEARCH_PERFORMER_FAILURE_HEADER",
      payload: "performer list not found ",
    });
  }
  dispatch({
    type: "ACTION_COMPLETED_PERFORMER_SEARCH_HEADER",
    payload: "performer list not found ",
  });
};




export const searchedPerformeMain = (data, type) => async (dispatch) => {
  dispatch({ type: "ACTION_INITIATED_SEARCH_PERFORMER" });
  try {
    console.log("Type", type);
    let response = "";
    if (type == "performer") {
      response = await SearchPerformer(data);
    } else if (type == "events") {
      response = await EventSearch(data);
    } else {
      response = await Searchvenue(data);
    }
    console.log("response", response);
    if (response.status <= 201) {
      dispatch({
        type: "SEARCH_PERFORMER_MAIN",
        payload: response.data.results,
      });
    } else {
      dispatch({
        type: "SEARCH_PERFORMER_FAILURE_MAIN",
        payload: "performer list not found ",
      });
    }
  } catch (error) {
    dispatch({
      type: "SEARCH_PERFORMER_FAILURE_MAIN",
      payload: "performer list not found ",
    });
  }
  dispatch({
    type: "ACTION_COMPLETED_PERFORMER_SEARCH_MAIN",
    payload: "performer list not found ",
  });
};



/**Event list on the basis of Performer name */
export const searchedEventByPerformer = (data) => async (dispatch) => {
  dispatch({ type: "ACTION_INITIATED_SEARCH_EVENT_BYPERFORMER" });
  try {
    const response = await SearchEventsByPerformer(data);
    console.log("api response seacrhed ", response);
    if (response.status <= 201) {
      dispatch({
        type: "SEARCH_EVENT_EVENT_BYPERFORMER",
        payload: response.data.results,
      });
    } else {
      dispatch({
        type: "SEARCH_EVENT_FAILURE_EVENT_BYPERFORMER",
        payload: "performer list not found ",
      });
    }
  } catch (error) {
    dispatch({
      type: "SEARCH_EVENT_FAILURE_EVENT_BYPERFORMER",
      payload: "performer list not found ",
    });
  }
  dispatch({
    type: "ACTION_COMPLETED_SEARCH_EVENT_EVENT_BYPERFORMER",
    payload: "performer list not found ",
  });
};