import axios from 'axios';


let axios_request = axios.create({
  // baseURL: `http://localhost:3009/api/admin/`,
  baseURL:  `https://api.ticketpenguin.co.uk/api/`,
  timeout: 10000
});

const requestHandler = request => {
    let user_information = JSON.parse(localStorage.getItem("user_info"));

  request.headers.Authorization = `Bearer ${user_information.data.access_token}`;

  return request;
};

const responseHandler = response => {

  if (response.status === 401 || response.status === 404) {
    window.alert('Invalid Request');
  }

  return response;
};


function manageErrorConnection(err) {
  const originalConfig = err.config;
  if (err.response && err.response.status == 404) {
    alert(err.response.data.message);
    return Promise.reject(err)
  }
  // else if (err.response && err.response.status == 404 && !originalConfig._retry) {
  //   originalConfig._retry = true;

  //   return axios_request(originalConfig);
  // }
  else if (err.response && err.response.status == 403) {
    localStorage.clear()
    alert('Session Expired');
    window.location.replace("/login")
    return Promise.reject(err)
  }
  else {
    return Promise.reject(err)
  }
}

axios_request.interceptors.request.use(
  (request) => requestHandler(request),
  manageErrorConnection
);

axios_request.interceptors.response.use(
  (response) => responseHandler(response),
  manageErrorConnection
);


export default axios_request;