import axios from "axios";
import axios_request from "./axios";
export async function signupUser(data) {
  if (data !== " ") {
    let email = data.email;
    let name = data.name;
    let password = data.password;

    try {
      const response = await axios.post(
        "http://api.sourcedtickets.com/api/auth/register",
        {
          email,
          password,
          name,
    
        }
      );
      return response;
    } catch (error) {
      return error;
    }
  }
}
export async function loginUser(data) {
  if (data !== " ") {
    let email = data.email;
    let password = data.password;

    try {
      const response = await axios.post(
        "http://api.sourcedtickets.com/api/auth/login",
        {
          email,
          password,
        }
      );
      return response;
    } catch (error) {
      return error;
    }
  }
}
export async function forgotPassword(data) {
  if (data !== " ") {
    let email = data.email;

    try {
      const response = await axios.post(
        "https://api.ticketpenguin.co.uk/api/auth/forgot-password",
        {
          email,
        }
      );
      return response;
    } catch (error) {
      return error;
    }
  }
}
export async function UpcomingEventList(data) {

  try {
    let page_number = data.page;
    let limit_number = data.limit;
    let type = data.type
    const response = await axios.get(
      "https://api.ticketpenguin.co.uk/api/events",
      {
        params: {
          page: page_number,
          search: "",
          limit: limit_number,
          type:type
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
}
export async function PerformerList() {
  try {
    const response = await axios.get(
      "https://api.ticketpenguin.co.uk/api/artists",
      {
        params: {
          page: "1",
          search: "",
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
}
export async function EventDetails(event_id) {
  try {
    const response = await axios.get(
      "https://api.ticketpenguin.co.uk/api/event",
      {
        params: {
          event_id: event_id,
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
}
export async function AddToCart(data) {
  if (data !== "") {
    try {
      let user_information = JSON.parse(localStorage.getItem("user_info"));

      const response = await axios.post(
        "https://api.ticketpenguin.co.uk/api/add-to-cart",
        {
          items: data,
        },
        {
          headers: {
            Authorization: `Bearer ${user_information.data.access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (error) {
      return error;
    }
  }
}
export async function PerformerInfo(data) {
  try {
    let artist_id = data.artist_id;
    let page_number = data.page;
    const response = await axios.get(
      "https://api.ticketpenguin.co.uk/api/artist-details",
      {
        params: {
          artist_id: artist_id,
          page: page_number,
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
}
export async function MainSearchResults(data) {
  if (data !== "") {
    let keyword = data.search;
    let page_number = data.page;
    let limit = data.limit;

    try {
      const response = await axios.get(
        "https://api.ticketpenguin.co.uk/api/search",
        {
          params: {
            page: page_number,
            search: keyword,
            limit: limit,
          },
        }
      );
      return response;
    } catch (error) {
      return error;
    }
  }
}

export async function ContactUs(data) {
  if (data !== "") {
    let email = data.email;
    let country_code = data.country_code;
    let phonenumber = data.phonenumber;
    let query = data.query;

    try {
      const response = await axios.post(
        "https://api.ticketpenguin.co.uk/api/query",
        {
          email: email,
          country_code: country_code,
          phone: phonenumber,
          query: query,
        }
      );
      return response;
    } catch (error) {
      return error;
    }
  }
}
export async function popularEvents() {
  try {
    const response = await axios.get(
      "https://api.ticketpenguin.co.uk/api/popular-events",
      {
        params: {},
      }
    );
    return response;
  } catch (error) {
    return error;
  }
}
export async function ConfirmOrder() {
  try {
    const response = await axios_request.post("confirm-order", {});
    return response;
  } catch (error) {
    return error;
  }
}
export async function OrdersList() {
  try {
    const response = await axios_request.get("list-orders", {});
    return response;
  } catch (error) {
    return error;
  }
}
