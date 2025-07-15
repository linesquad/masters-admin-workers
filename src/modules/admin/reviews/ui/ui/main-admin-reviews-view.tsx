import { PageTitle } from "@/components/page-title";
import { GetAllReviewsView } from "../components/get-all-reviews-view";
import { SelectLimiting } from "@/components/select-limiting";
import { useAdminReviews } from "../../hooks/use-admin-reviews";
import { ReviewStatusFilter } from "../components/review-status-filter";
import { HasReplyFilter } from "../components/has-reply-filter";
import { ReviewSortingFilter } from "../components/review-sorting-filter";
import { FilterByMaster } from "../components/filter-by-master";
import { ResetFilters } from "../components/reset-filters";

export const MainAdminReviewsView = () => {
  const { limit, setLimit } = useAdminReviews();
  return (
    <div className="">
      <div className="px-4 py-4">
        <PageTitle
          title="Reviews"
          subtitle="Manage platform reviews"
          className="mb-4"
        />
        <div className="flex flex-col items-center justify-center mx-auto md:items-start 2xl:flex-row xl:items-center px-4 mb-4 gap-4">
          <FilterByMaster />
          <div className="flex gap-2">
            <ReviewSortingFilter />
            <HasReplyFilter />
          </div>
          <div className="flex gap-2">
            <ReviewStatusFilter />
            <SelectLimiting limit={limit} setLimit={setLimit} />
          </div>
          <ResetFilters />
        </div>
        <div className="">
          <GetAllReviewsView />
        </div>
      </div>
    </div>
  );
};
