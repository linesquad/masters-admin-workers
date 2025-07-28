import { useGetLeadsList } from "@/modules/master/leads/hooks/use-get-leads-list";
import { LeadsCard } from "./leads-card";
import { useMasterLeadsFilters } from "../../hooks/use-master-leads-filters";
import PaginationComp from "@/components/PaginationComp";

export function MasterLeadsList() {
  const { page, limit, status, setPage } = useMasterLeadsFilters();

  const { data, isLoading, isError, error } = useGetLeadsList({
    page,
    limit,
    status,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;
  if (!data) return <div>No leads found</div>;

  if (data.data.leads.length === 0) return <div>No leads found</div>;

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
