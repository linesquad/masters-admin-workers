import PaginationComp from "@/components/PaginationComp";
import { useGetMasterBillings } from "../../hooks/use-get-master-billings";
import { MasterBillingCard } from "./master-billing-card";
import { useState } from "react";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
import { EmptyState } from "@/components/empthy-state";

export const MasterBillingList = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const { data, isLoading, error } = useGetMasterBillings({
    page,
    limit,
  });

  if (isLoading)
    return (
      <LoadingState
        title="Loading billing"
        description="Please wait while we load the billing"
        className="mt-12"
      />
    );
  if (error)
    return (
      <ErrorState
        title="Error loading billing"
        description={error.message}
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

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.data.map((billing) => (
          <MasterBillingCard key={billing.id} billing={billing} />
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
