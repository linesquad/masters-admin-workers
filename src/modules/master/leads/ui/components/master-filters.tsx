import { SelectLimiting } from "@/components/select-limiting";
import { MasterStatusFilter } from "./master-status-filter";
import { useMasterLeadsFilters } from "../../hooks/use-master-leads-filters";

export function MasterFilters() {
  const { limit, status, setLimit, setStatus } = useMasterLeadsFilters();

  return (
    <div className="py-5 flex justify-around items-center">
      <SelectLimiting limit={limit} setLimit={setLimit} />
      <MasterStatusFilter status={status} setStatus={setStatus} />
    </div>
  );
}
