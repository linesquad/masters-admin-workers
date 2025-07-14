import { PageTitle } from "@/components/page-title";
import { MasterLeadsList } from "../components/master-leads-list";
import { MasterFilters } from "../components/master-filters";
import { MasterLeadsFiltersProvider } from "../../hooks/use-master-leads-filters";

export function MainMasterLeadView() {
  return (
    <div className="px-4 py-4">
      <PageTitle title="Leads" subtitle="Manage your leads" />
      <MasterLeadsFiltersProvider>
        <MasterFilters />
        <MasterLeadsList />
      </MasterLeadsFiltersProvider>
    </div>
  );
}
