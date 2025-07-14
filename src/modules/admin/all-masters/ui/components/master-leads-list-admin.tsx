import { LeadsCard } from "@/modules/master/leads/ui/components/leads-card";
import { useMasterLeadsFilters } from "@/modules/master/leads/hooks/use-master-leads-filters";
import PaginationComp from "@/components/PaginationComp";
import { useGetMasterLeads } from "../../hooks/use-get-master-leads";
import type { Lead } from "@/modules/master/leads/types";

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

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;
  if (!data) return <div>No leads found</div>;

  if (data.data.data.length === 0) return <div>No leads found</div>;

  console.log(data.data.data);

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
