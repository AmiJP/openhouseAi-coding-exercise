import { CommunityCard } from "@/components/CommunityCard";
import { Loader } from "@/components/Loader";
import { toast } from "@/components/ui/use-toast";
import { useCommunitiesWithAveragePrice } from "@/hooks/useCommunities";
import { cn } from "@/lib/utils";
import { Building, MoveRight } from "lucide-react";

export const CommunityListPage: React.FC = () => {
  const { communities, isLoading, error } = useCommunitiesWithAveragePrice({
    // Sort alphabetically by community name
    select: (communities) =>
      communities.sort((a, b) => a.name.localeCompare(b.name)),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    toast({
      title: "An error occurred while fetching communities.",
      description: "Please try again later.",
      variant: "destructive",
    });
  }

  if (communities.length === 0) {
    toast({
      title: "No communities found.",
      description: "Please try again later.",
      variant: "destructive",
    });

    return (
      <div className="flex flex-col justify-center items-center h-[70vh] gap-4">
        <Building size={50} />
        <h1 className="text-2xl">No communities found.</h1>
        <p className="text-center">Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-slate-700 mb-4">Communities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {communities?.map((community) => {
          return <CommunityCard key={community.id} community={community} />;
        })}
      </div>
      <div
        className={cn(
          "flex justify-center items-center gap-2 mt-8 transition-all",
          "hover:scale-105 cursor-pointer",
          "text-slate-600 hover:text-slate-700"
        )}
      >
        <p>Show all listings</p>
        <MoveRight size={25} />
      </div>
    </div>
  );
};
