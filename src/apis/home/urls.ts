import { baseURL } from "../urls";

export const getHomesURL = () => {
  const url = new URL(baseURL);
  url.pathname += "data/homes.json";
  return url;
};
