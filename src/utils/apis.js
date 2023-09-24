import axios from "axios";
let token = "bbf464bd-5b86-3648-af93-08cab2590fdf";
let websiteConfigId = "27217";
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
      url: `https://www.tn-apis.com/catalog/v2/events/suggest?websiteConfigId=${websiteConfigId}&q=*&numberOfSuggestions=8`,
      
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
      url: `https://www.tn-apis.com/catalog/v2/events/search?websiteConfigId=${websiteConfigId}&q=*&performerFilter=text/name eq %27${performer_name}%27`,
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
      url: `https://www.tn-apis.com/catalog/v2/events/search?websiteConfigId=${websiteConfigId}&q=*&filter=text/name eq %27${performer_name}%27`,
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
      url: `https://www.tn-apis.com/catalog/v2/events/search?websiteConfigId=${websiteConfigId}&q=*&filter=venue/text/name eq %27${performer_name}%27`,
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
      url: `https://www.tn-apis.com/catalog/v2/performers?websiteConfigId=${websiteConfigId}&page=1&perPage=5`,
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
      url: `https://www.tn-apis.com/catalog/v2/events/search?websiteConfigId=${websiteConfigId}&q=*&filter=defaultCategory%2Ftext%2Fname%20eq%20'MUSICAL%20%2F%20PLAY'&page=1&perPage=5`,
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
      url: `https://www.tn-apis.com/catalog/v2/events/${event_id}?websiteConfigId=${websiteConfigId}&q=*&filter=defaultCategory%2Ftext%2Fname%20eq%20'MUSICAL%20%2F%20PLAY'&page=1&perPage=5`,
      // params: {
      //   performerFilter: salesRankOptions,
      //          page: "1",
      //          perPage: "8",
      //       },
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin":'*'
      },
    });
  } catch (error) {
    return error;
  }
}

