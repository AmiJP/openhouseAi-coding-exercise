import axios from "axios";
import { baseURL } from "./urls";

const axiosConfig = {
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000,
  withCredentials: true,
};

export const axiosClient = axios.create(axiosConfig);

axios.interceptors.request.use(
  function (request) {
    request.headers["Content-Type"] = "multipart/form-data";
    return request;
  },
  null,
  { synchronous: true }
);
