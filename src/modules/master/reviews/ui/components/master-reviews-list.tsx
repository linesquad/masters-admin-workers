import type { User } from "@/types";
import { useGetMasterReviews } from "../../hooks/use-get-master-reviews";
import { useMasterReviews } from "../../hooks/use-get-reviews-filters";
import { MasterReviewsCard } from "./master-reviews-card";
import type { Review } from "../../types";
import PaginationComp from "@/components/PaginationComp";

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

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;
  if (!data) return <div>No data</div>;
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
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
