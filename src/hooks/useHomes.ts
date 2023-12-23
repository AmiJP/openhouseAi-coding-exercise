import { getHomes } from "@/apis/home";
import { useQuery } from "@tanstack/react-query";

export const useHomes = () => {
  return useQuery({
    queryKey: homeKeys.homes,
    queryFn: getHomes,
    staleTime: 1000 * 60 * 60 * 1, // 1 hour
  });
};

export const homeKeys = {
  homes: ["homes"] as const,
};
