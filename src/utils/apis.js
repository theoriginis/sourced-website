import axios from "axios";
let token = "03879e2f-6b87-3611-a366-9cdcc3821a6e";
let websiteConfigId = "12498";
export async function signupUser(data) {
  if (data !== " ") {
    let email = data.email;
    let name = data.name;
    let password = data.password;

    try {
      const response = await axios.post(
        "https://api.sourcedtickets.com/api/auth/register",
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
        "https://api.sourcedtickets.com/api/auth/login",
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

export async function SearchEvent(data) {
  try {
    const config = {};
    let salesRankOptions = data.salesRankOptions;
    return axios({
      method: "get",
      url: `https://sandbox.tn-apis.com/catalog/v2/events?websiteConfigId=${websiteConfigId}`,
      params: {
        salesRankOptions: salesRankOptions,
        page: "1",
        perPage: "8",
      },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {
    return error;
  }
}
export async function SearchPerformer(data) {
  try {
    let performer_name = data.performer_name;
    return axios({
      method: "get",
      url: `https://sandbox.tn-apis.com/catalog/v2/events/search?websiteConfigId=${websiteConfigId}&q=*&performerFilter=text/name eq %27${performer_name}%27`,
      // params: {
      //   performerFilter: salesRankOptions,
      //          page: "1",
      //          perPage: "8",
      //       },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {
    return error;
  }
}
export async function EventSearch(data) {
  try {
    let performer_name = data.performer_name;
    return axios({
      method: "get",
      url: `https://sandbox.tn-apis.com/catalog/v2/events/search?websiteConfigId=${websiteConfigId}&q=*&filter=text/name eq %27${performer_name}%27`,
      // params: {
      //   performerFilter: salesRankOptions,
      //          page: "1",
      //          perPage: "8",
      //       },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {
    return error;
  }
}
export async function Searchvenue(data) {
  try {
    let performer_name = data.performer_name;
    return axios({
      method: "get",
      url: `https://sandbox.tn-apis.com/catalog/v2/events/search?websiteConfigId=${websiteConfigId}&q=*&filter=venue/text/name eq %27${performer_name}%27`,
      // params: {
      //   performerFilter: salesRankOptions,
      //          page: "1",
      //          perPage: "8",
      //       },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {
    return error;
  }
}
export async function TopPerformer() {
  try {
    return axios({
      method: "get",
      url: `https://sandbox.tn-apis.com/catalog/v2/performers?websiteConfigId=${websiteConfigId}&page=1&perPage=5`,
      // params: {
      //   performerFilter: salesRankOptions,
      //          page: "1",
      //          perPage: "8",
      //       },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {
    return error;
  }
}
export async function TopShows() {
  try {
    return axios({
      method: "get",
      url: `https://sandbox.tn-apis.com/catalog/v2/events/search?websiteConfigId=${websiteConfigId}&q=*&filter=defaultCategory%2Ftext%2Fname%20eq%20'MUSICAL%20%2F%20PLAY'&page=1&perPage=5`,
      // params: {
      //   performerFilter: salesRankOptions,
      //          page: "1",
      //          perPage: "8",
      //       },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {
    return error;
  }
}
export async function EventInformation(event_id) {
  try {
    return axios({
      method: "get",
      url: `https://sandbox.tn-apis.com/catalog/v2/events/${event_id}?websiteConfigId=${websiteConfigId}&q=*&filter=defaultCategory%2Ftext%2Fname%20eq%20'MUSICAL%20%2F%20PLAY'&page=1&perPage=5`,
      // params: {
      //   performerFilter: salesRankOptions,
      //          page: "1",
      //          perPage: "8",
      //       },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {
    return error;
  }
}
export async function ViewMap(event_id) {
  try {
    return axios({
      method: "get",
      url: `https://mapwidget3-sandbox.seatics.com/js?eventId=${event_id}&websiteConfigId=12498`,
      // params: {
      //   performerFilter: salesRankOptions,
      //          page: "1",
      //          perPage: "8",
      //       },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {
    return error;
  }
}


