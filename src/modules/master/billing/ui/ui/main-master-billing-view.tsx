import { PageTitle } from "@/components/page-title";
import { MasterBillingList } from "../components/master-billing-list";

export const MainMasterBillingView = () => {
  return (
    <div className="space-y-4 px-4">
      <PageTitle title="Billing" subtitle="Manage your billing" />
      <MasterBillingList />
    </div>
  );
};
