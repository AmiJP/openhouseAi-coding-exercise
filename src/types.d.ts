type HomeType = "House" | "Townhome" | "Condo" | "Duplex";

export interface Community {
  id: string;
  name: string;
  imgUrl: string | null;
  group: string;
}

export interface Home {
  id: string;
  communityId: string;
  price: number;
  area: number;
  type: HomeType;
}

export interface CommunityWithAveragePrice extends Community {
  averagePrice: number;
}
