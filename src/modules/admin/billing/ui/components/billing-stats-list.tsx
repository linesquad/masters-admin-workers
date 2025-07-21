import PaginationComp from "@/components/PaginationComp";
import { useGetBilling } from "../../hooks/use-get-billing";
import { BillingStatsCard } from "./billing-stats-card";
import { useState } from "react";

export const BillingStatsList = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const { data, isLoading, error } = useGetBilling({ page, limit });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!data) return <div>No data</div>;

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
