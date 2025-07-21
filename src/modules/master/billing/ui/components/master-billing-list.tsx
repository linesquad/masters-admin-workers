import PaginationComp from "@/components/PaginationComp";
import { useGetMasterBillings } from "../../hooks/use-get-master-billings";
import { MasterBillingCard } from "./master-billing-card";
import { useState } from "react";

export const MasterBillingList = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const { data, isLoading, error } = useGetMasterBillings({
    page,
    limit,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  if (!data) return <div>No data</div>;
  console.log(data);

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
