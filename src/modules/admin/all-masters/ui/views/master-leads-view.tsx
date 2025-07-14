import { PageTitle } from "@/components/page-title";
import { MasterLeadsFiltersProvider } from "@/modules/master/leads/hooks/use-master-leads-filters";
import { MasterFilters } from "@/modules/master/leads/ui/components/master-filters";
import { MasterLeadsListAdmin } from "../components/master-leads-list-admin";

export function MasterLeadsView({ id }: { id: string }) {
  return (
    <div className="px-4 py-4">
      <PageTitle title="Leads" subtitle="Manage your leads" />
      <MasterLeadsFiltersProvider>
        <MasterFilters />
        <MasterLeadsListAdmin id={id} />
      </MasterLeadsFiltersProvider>
    </div>
  );
}
