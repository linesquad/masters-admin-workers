import type { User } from "@/types";
import { useGetMasterReviews } from "../../hooks/use-get-master-reviews";
import { useMasterReviews } from "../../hooks/use-get-reviews-filters";
import { MasterReviewsCard } from "./master-reviews-card";
import type { Review } from "../../types";
import PaginationComp from "@/components/PaginationComp";
import { ErrorState } from "@/components/error-state";
import { EmptyState } from "@/components/empthy-state";
import { LoadingState } from "@/components/loading-state";

interface MasterReviewsListProps {
  user: User;
}

export const MasterReviewsList = ({ user }: MasterReviewsListProps) => {
  const { page, limit, status, setPage } = useMasterReviews();
  const { data, isLoading, error, isError } = useGetMasterReviews({
    masterId: user.id,
    page,
    limit,
    status,
  });

  if (isLoading)
    return (
      <LoadingState
        title="Loading reviews"
        description="Please wait while we load the reviews"
        className="mt-12"
      />
    );
  if (isError)
    return (
      <ErrorState
        title="Error loading reviews"
        description={error?.message || "Please try again later"}
        className="mt-12"
      />
    );
  if (!data)
    return (
      <EmptyState
        title="No data"
        description="Please try again later"
        className="mt-12"
      />
    );

  if (data.data.reviews.length === 0)
    return (
      <EmptyState
        title="No reviews found"
        description="Please try again later"
        className="mt-12"
      />
    );

  return (
    <div className="flex flex-col">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.data.reviews.map((review: Review) => (
            <MasterReviewsCard key={review.id} review={review} />
          ))}
        </div>
      </div>
      <div>
        <PaginationComp
          totalcount={data.data.pagination.total}
          limit={data.data.pagination.limit}
          currentPage={page}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};
