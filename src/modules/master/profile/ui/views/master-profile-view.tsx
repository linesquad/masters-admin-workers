import { Button } from "@/components/ui/button";
import { useMasterProfileById } from "@/modules/master/profile/hooks/useMasterProfileById";
import { MasterQuickActions } from "../components/master-quick-actions";
import { MasterRightContact } from "../components/master-right-contact";
import { MasterBio } from "../components/master-bio";
import { MasterStatisticks } from "../components/master-statisticks";
import { MasterBasicInfo } from "../components/master-basic-info";
import { MasterProfilePic } from "../components/master-profile-pic";
import { MasterSkeletonLoader } from "../components/master-skeleton-loader";

export function MasterProfileView({ id }: { id: string }) {
  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useMasterProfileById(id);

  if (isLoading) {
    return <MasterSkeletonLoader />;
  }

  if (isError) {
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

  if (!response?.data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600">No profile data found</p>
        </div>
      </div>
    );
  }

  const masterData = response.data;
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
                  imageUrl={masterData.imageUrl}
                  fullName={masterData.user.fullName}
                />

                <MasterBasicInfo
                  fullName={masterData.user.fullName}
                  city={masterData.city}
                  totalReviews={masterData.stats.totalReviews}
                  averageRating={masterData.stats.averageRating}
                  availability={masterData.availability}
                />
              </div>
            </div>
          </div>
        </div>

        <MasterStatisticks
          completedJobs={masterData.stats.completedJobs}
          totalReviews={masterData.stats.totalReviews}
          averageRating={masterData.stats.averageRating}
          totalEarnings={masterData.stats.totalEarnings}
          points={masterData.stats.points}
        />
        <div className="grid lg:grid-cols-3 gap-6">
          <MasterBio bio={masterData.bio} />
          <div className="space-y-6">
            <MasterRightContact
              phone={masterData.user.phone}
              email={masterData.user.email}
              createdAt={masterData.createdAt}
            />
            <MasterQuickActions />
          </div>
        </div>
      </div>
    </div>
  );
}
