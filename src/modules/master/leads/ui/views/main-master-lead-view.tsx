import { PageTitle } from "@/components/page-title";
import { MasterLeadsList } from "../components/master-leads-list";
import { MasterFilters } from "../components/master-filters";
import { MasterLeadsFiltersProvider } from "../../hooks/use-master-leads-filters";
import { useTranslation } from "react-i18next";

export function MainMasterLeadView() {
  const { t } = useTranslation();
  return (
    <div className="px-4 py-4">
      <PageTitle title={t("leads.title")} subtitle={t("leads.subtitle")} />
      <MasterLeadsFiltersProvider>
        <MasterFilters />
        <MasterLeadsList />
      </MasterLeadsFiltersProvider>
    </div>
  );
}
