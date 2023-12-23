import { Community } from "@/types";
import { axiosClient } from "../axiosClient";
import { getCommunitiesURL } from "./urls";

export const getCommunities = async (): Promise<Community[]> => {
  const communitiesURL = getCommunitiesURL();
  const response = await axiosClient.get(communitiesURL.href);
  return response.data;
};
