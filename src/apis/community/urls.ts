import { baseURL } from "../urls";

export const getCommunitiesURL = () => {
  const url = new URL(baseURL);
  url.pathname += "data/community.json";
  return url;
};
