import { MasterCard } from "@/modules/admin/all-masters/ui/components/master-card";
import { useGetAllMasters } from "@/modules/admin/all-masters/hooks/use-get-all-masters";
import type { Master } from "@/modules/admin/all-masters/types";
import { NoDataFound } from "@/components/no-data-found";
import { PageTitle } from "@/components/page-title";
import PaginationComp from "@/components/PaginationComp";
import { useState } from "react";
import { MasterPageLoadingSkeleton } from "../components/master-page-loading-skeleton";
import { SelectLimiting } from "@/components/select-limiting";

export function AllMasterView() {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const { data, isLoading, isError, error } = useGetAllMasters(
    currentPage,
    limit
  );

  if (isLoading) return <MasterPageLoadingSkeleton />;
  if (isError) return <div>Error: {error.message}</div>;
  if (!data) return <NoDataFound />;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="px-5">
      <PageTitle
        title="All Masters"
        subtitle="View all masters and their details"
      />
      <div className="flex justify-end mb-5">
        <SelectLimiting limit={limit} setLimit={setLimit} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.data.map((master: Master) => (
          <MasterCard key={master.id} master={master} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <PaginationComp
          totalcount={data.pagination.total}
          limit={limit}
          currentPage={data.pagination.page}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
