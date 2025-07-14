import { SelectLimiting } from "@/components/select-limiting";
import { MasterSearchFilter } from "./master-search-filter";
import { MasterStatusFilter } from "./master-status-filter";
import { useMasterLeadsFilters } from "../../hooks/use-master-leads-filters";

export function MasterFilters() {
  const { limit, search, status, setLimit, setSearch, setStatus } =
    useMasterLeadsFilters();

  return (
    <div className="py-5 flex justify-around items-center">
      <SelectLimiting limit={limit} setLimit={setLimit} />
      <MasterSearchFilter search={search} setSearch={setSearch} />
      <MasterStatusFilter status={status} setStatus={setStatus} />
    </div>
  );
}
