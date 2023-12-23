import { getCommunities } from "@/apis/community";
import { Community } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useHomes } from "./useHomes";
import { useMemo } from "react";

interface UseCommitiesParams<T> {
  select?: (communities: Community[]) => T;
}

function useCommunities<T = Community[]>({
  select,
}: UseCommitiesParams<T> = {}) {
  return useQuery({
    queryKey: communityKeys.communities,
    queryFn: getCommunities,
    staleTime: 1000 * 60 * 60 * 1, // 1 hour
    select,
  });
}

function useCommunitiesWithAveragePrice({
  select,
}: UseCommitiesParams<Community[]> = {}) {
  const {
    data: communities,
    isLoading,
    error,
  } = useCommunities({
    select,
  });

  const { data: homes } = useHomes();

  const communitiesWithAveragePrice = useMemo(() => {
    if (!communities || !homes) {
      return [];
    }

    return communities.map((community) => {
      const communityHomes = homes.filter(
        (home) => home.communityId === community.id
      );

      const averagePrice =
        communityHomes.reduce((total, home) => total + home.price, 0) /
        communityHomes.length;

      return {
        ...community,
        averagePrice: isNaN(averagePrice) ? 0 : averagePrice,
      };
    });
  }, [communities, homes]);

  return { communities: communitiesWithAveragePrice, isLoading, error };
}

export const communityKeys = {
  communities: ["communities"] as const,
  community: (id: number) => [...communityKeys.communities, id] as const,
};

export { useCommunities, useCommunitiesWithAveragePrice };
