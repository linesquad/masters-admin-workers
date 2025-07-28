import PaginationComp from "@/components/PaginationComp";
import { useGetBilling } from "../../hooks/use-get-billing";
import { BillingStatsCard } from "./billing-stats-card";
import { useState } from "react";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
import { EmptyState } from "@/components/empthy-state";

export const BillingStatsList = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const { data, isLoading, error } = useGetBilling({ page, limit });

  if (isLoading)
    return (
      <LoadingState
        title={"Loading"}
        description={"Please wait while we load the billing stats"}
        className="mt-4"
      />
    );

  if (error)
    return (
      <ErrorState
        title={"Error"}
        description={error.message || "Something went wrong"}
        className="mt-4"
      />
    );

  if (!data)
    return (
      <EmptyState
        title={"No data"}
        description={"Please try again later"}
        className="mt-4"
      />
    );

  if (data.data.length === 0)
    return (
      <EmptyState
        title={"No data"}
        description={"Please try again later"}
        className="mt-4"
      />
    );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {data.data.map((billing) => (
          <BillingStatsCard key={billing.id} billing={billing} />
        ))}
      </div>
      <PaginationComp
        totalcount={data.pagination.total}
        limit={limit}
        currentPage={page}
        onPageChange={setPage}
      />
    </div>
  );
};
