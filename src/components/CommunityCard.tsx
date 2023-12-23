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
        <CardTitle className="text-xl text-slate-600 text-center">
          {community.name}
        </CardTitle>
        <div className="flex justify-between mt-4">
          <CardDescription className="flex gap-1">
            <MapPin size={18} />
            {community.group}
          </CardDescription>
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
        </div>
      </CardContent>
    </Card>
  );
};
