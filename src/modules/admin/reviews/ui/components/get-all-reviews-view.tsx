import PaginationComp from "@/components/PaginationComp";
import { useAdminReviews } from "../../hooks/use-admin-reviews";
import { useGetAllReviews } from "../../hooks/use-get-all-reviews";
import { ReviewsCard } from "./reviews-card";

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

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;
  if (!data) return <div>No data</div>;

  if (data.data.length === 0) return <div>No reviews found</div>;

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
