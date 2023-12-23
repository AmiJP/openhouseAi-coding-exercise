import { Home } from "@/types";
import { axiosClient } from "../axiosClient";
import { getHomesURL } from "./urls";

export const getHomes = async (): Promise<Home[]> => {
  const homesURL = getHomesURL();
  const response = await axiosClient.get(homesURL.href);
  return response.data;
};
