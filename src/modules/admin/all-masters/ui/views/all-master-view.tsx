import { MasterCard } from "@/modules/admin/all-masters/ui/components/master-card";
import { useGetAllMasters } from "@/modules/admin/all-masters/hooks/use-get-all-masters";
import type { Master } from "@/modules/admin/all-masters/types";
import { PageTitle } from "@/components/page-title";
import PaginationComp from "@/components/PaginationComp";
import { useState } from "react";
import { SelectLimiting } from "@/components/select-limiting";
import { useTranslation } from "react-i18next";
import { ErrorState } from "@/components/error-state";
import { EmptyState } from "@/components/empthy-state";
import { LoadingState } from "@/components/loading-state";

export function AllMasterView() {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const { data, isLoading, isError, error } = useGetAllMasters(
    currentPage,
    limit
  );
  const { t } = useTranslation();
  if (isLoading)
    return (
      <LoadingState
        title={"Loading"}
        description={"Please wait while we load the masters"}
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
        title={"No data"}
        description={"Please try again later"}
        className="mt-4"
      />
    );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="px-5">
      <PageTitle
        title={t("allMasters.title")}
        subtitle={t("allMasters.subtitle")}
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
