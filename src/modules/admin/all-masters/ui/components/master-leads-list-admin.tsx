import { LeadsCard } from "@/modules/master/leads/ui/components/leads-card";
import { useMasterLeadsFilters } from "@/modules/master/leads/hooks/use-master-leads-filters";
import PaginationComp from "@/components/PaginationComp";
import { useGetMasterLeads } from "../../hooks/use-get-master-leads";
import type { Lead } from "@/modules/master/leads/types";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
import { EmptyState } from "@/components/empthy-state";

export function MasterLeadsListAdmin({ id }: { id: string }) {
  const { page, limit, setPage, status } = useMasterLeadsFilters();

  const { data, isLoading, isError, error } = useGetMasterLeads(id, {
    page,
    limit,
    status: status as
      | "pending"
      | "accepted"
      | "completed"
      | "declined"
      | "cancelled"
      | "",
  });

  if (isLoading)
    return (
      <LoadingState
        title={"Loading"}
        description={"Please wait while we load the leads"}
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
  if (!data || data.data.data.length === 0)
    return (
      <EmptyState
        title={"No data"}
        description={"Please try again later"}
        className="mt-4"
      />
    );

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 mx-auto w-full">
        {data.data.data.map((lead: Lead) => (
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
