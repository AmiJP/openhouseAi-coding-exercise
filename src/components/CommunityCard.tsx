import { cn } from "@/lib/utils";
import { CommunityWithAveragePrice } from "@/types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import NoImage from "@/assets/images/no-image.png";
import { CircleDollarSign, MapPin } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export const CommunityCard: React.FC<{
  community: CommunityWithAveragePrice;
}> = ({ community }) => {
  return (
    <Card className="transition-all hover:scale-105 cursor-pointer">
      <CardHeader className="p-0 m-0">
        <img
          src={community.imgUrl || NoImage}
          alt={community.name}
          className={cn(
            "h-auto w-auto object-cover rounded-t-md",
            "w-full h-[250px]",
            "border-b-2 border-slate-100"
          )}
          onError={(e) => {
            e.currentTarget.src = NoImage;
          }}
        />
      </CardHeader>
      <CardContent className="mt-4">
        <Tooltip>
          <TooltipTrigger>
            <CardTitle className="text-xl text-slate-600 text-left pl-1">
              {community.name}
            </CardTitle>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm">Community name</p>
          </TooltipContent>
        </Tooltip>

        <div className="flex justify-between mt-4">
          <Tooltip>
            <TooltipTrigger>
              <CardDescription className="flex gap-1">
                <MapPin size={18} />
                {community.group}
              </CardDescription>
            </TooltipTrigger>
            <TooltipContent>
              <p>Group</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <CardDescription className="flex gap-1">
                {community.averagePrice > 0 ? (
                  <>
                    <CircleDollarSign size={18} />
                    {Intl.NumberFormat("en-US", {
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(community.averagePrice)}
                  </>
                ) : (
                  "No homes available"
                )}
              </CardDescription>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {community.averagePrice > 0
                  ? "Average price of homes"
                  : "There is no home in the community"}
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
      </CardContent>
    </Card>
  );
};
