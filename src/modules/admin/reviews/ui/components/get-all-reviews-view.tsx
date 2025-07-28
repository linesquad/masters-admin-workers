import PaginationComp from "@/components/PaginationComp";
import { useAdminReviews } from "../../hooks/use-admin-reviews";
import { useGetAllReviews } from "../../hooks/use-get-all-reviews";
import { ReviewsCard } from "./reviews-card";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
import { EmptyState } from "@/components/empthy-state";

export const GetAllReviewsView = () => {
  const { page, limit, status, hasReply, sortBy, setPage, masterId } =
    useAdminReviews();

  const { data, isLoading, error, isError } = useGetAllReviews({
    page,
    limit,
    status,
    hasReply,
    sortBy,
    masterId,
  });

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  if (isLoading)
    return (
      <LoadingState
        title={"Loading"}
        description={"Please wait while we load the reviews"}
        className="mt-4"
      />
    );
  if (isError)
    return (
      <ErrorState
        title={"Error"}
        description={error?.message || "Something went wrong"}
        className="mt-4"
      />
    );
  if (!data)
    return (
      <EmptyState
        title={"No reviews found"}
        description={"Please try again later"}
        className="mt-4"
      />
    );

  if (data.data.length === 0)
    return (
      <EmptyState
        title={"No reviews found"}
        description={"Please try again later"}
        className="mt-4"
      />
    );

  return (
    <div className="">
      <div className="">
        {data.data.map((review) => (
          <ReviewsCard key={review.id} review={review} />
        ))}
      </div>
      <PaginationComp
        totalcount={data.pagination.total}
        limit={limit}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
