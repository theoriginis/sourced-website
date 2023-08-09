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
    const config = {
 
    };
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
        Authorization: "Bearer " + token 
      },
    });
  } catch (error) {
    return error;
  }
}
