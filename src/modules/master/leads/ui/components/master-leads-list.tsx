import { useGetLeadsList } from "@/modules/master/leads/hooks/use-get-leads-list";
import { LeadsCard } from "./leads-card";
import { useMasterLeadsFilters } from "../../hooks/use-master-leads-filters";
import PaginationComp from "@/components/PaginationComp";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
import { EmptyState } from "@/components/empthy-state";

export function MasterLeadsList() {
  const { page, limit, status, setPage } = useMasterLeadsFilters();

  const { data, isLoading, isError } = useGetLeadsList({
    page,
    limit,
    status,
  });

  if (isLoading)
    return (
      <LoadingState
        title="Loading leads"
        description="Please wait while we load the leads"
        className="mt-12"
      />
    );
  if (isError)
    return (
      <ErrorState
        title="Error loading leads"
        description="Please try again later"
        className="mt-12"
      />
    );
  if (!data)
    return (
      <EmptyState
        title="No leads found"
        description="Please try again later"
        className="mt-12"
      />
    );

  if (data.data.leads.length === 0)
    return (
      <EmptyState title="No leads found" description="Please try again later" />
    );

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-4 mx-auto w-full">
        {data.data.leads.map((lead) => (
          <div
            key={lead.id}
            className="flex flex-wrap justify-center md:justify-start"
          >
            <LeadsCard lead={lead} />
          </div>
        ))}
      </div>
      <PaginationComp
        totalcount={data.data.pagination.total}
        limit={limit}
        currentPage={data.data.pagination.page}
        onPageChange={(page) => {
          setPage(page);
        }}
      />
    </div>
  );
}
