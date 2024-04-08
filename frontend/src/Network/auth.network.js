import axios from "axios";
const baseURL = "http://localhost:4000";

const login = async (formData) => {  
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    email: formData.email,
    password: formData.password,
  });

  let reqOptions = {
    url: baseURL + "/api/login",
    method: "POST",
    headers: headersList,
    data: bodyContent,
  };

  return axios.request(reqOptions)
};

const signup = async (formData) => {
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    name: formData.name,
    phone: formData.phone,
    email: formData.email,
    password: formData.password,
  });

  let reqOptions = {
    url: baseURL + "/api/register",
    method: "POST",
    headers: headersList,
    data: bodyContent,
  };

  return axios.request(reqOptions)
}

export { login, signup };
