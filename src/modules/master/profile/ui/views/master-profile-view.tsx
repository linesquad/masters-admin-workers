import { Button } from "@/components/ui/button";
import { useMasterProfileById } from "@/modules/master/profile/hooks/useMasterProfileById";
import { MasterQuickActions } from "../components/master-quick-actions";
import { MasterRightContact } from "../components/master-right-contact";
import { MasterBio } from "../components/master-bio";
import { MasterStatisticks } from "../components/master-statisticks";
import { MasterBasicInfo } from "../components/master-basic-info";
import { MasterProfilePic } from "../components/master-profile-pic";
import { MasterSkeletonLoader } from "../components/master-skeleton-loader";
import { useGetMasterLeadStats } from "../../hooks/use-get-master-lead-stats";
import { MasterLeadStatsView } from "./master-lead-stats-view";

export function MasterProfileView({ id }: { id: string }) {
  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useMasterProfileById(id);

  const {
    data: leadStats,
    isLoading: leadStatsLoading,
    isError: leadStatsError,
  } = useGetMasterLeadStats(id);

  if (isLoading || leadStatsLoading) {
    return <MasterSkeletonLoader />;
  }

  if (isError || leadStatsError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">
            Error loading profile: {error?.message || "An error occurred"}
          </p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  if (!response || !leadStats) {
    return <div>No profile data found</div>;
  }

  const {
    totalLeads,
    pendingLeads,
    acceptedLeads,
    averageJobValue,
    declinedLeads,
    totalRevenue,
  } = leadStats;

  const { bio, city, imageUrl, availability, createdAt, stats, user } =
    response;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative">
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          <div className="px-6 pb-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 relative z-10">
              <div className="flex flex-col md:flex-row md:items-end gap-4">
                <MasterProfilePic
                  imageUrl={imageUrl}
                  fullName={user.fullName}
                />

                <MasterBasicInfo
                  fullName={user.fullName}
                  city={city}
                  totalReviews={stats.totalReviews}
                  averageRating={stats.averageRating}
                  availability={availability}
                />
              </div>
            </div>
          </div>
        </div>

        <MasterStatisticks
          completedJobs={stats.completedJobs}
          totalReviews={stats.totalReviews}
          averageRating={stats.averageRating}
          totalEarnings={stats.totalEarnings}
          points={stats.points}
        />
        <MasterBio bio={bio} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MasterRightContact
            phone={user.phone}
            email={user.email}
            createdAt={createdAt}
          />
          <MasterQuickActions id={id} />
        </div>
        <MasterLeadStatsView
          totalLeads={totalLeads}
          pendingLeads={Number(pendingLeads)}
          acceptedLeads={Number(acceptedLeads)}
          declinedLeads={Number(declinedLeads)}
          averageJobValue={Number(averageJobValue)}
          totalRevenue={totalRevenue || 0}
        />
      </div>
    </div>
  );
}
