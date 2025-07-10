import { PageTitle } from "@/components/page-title";
import { BillingSubnav } from "../components/billing-subnav";

export const BillingMainView = () => {
  return (
    <div className="pt-5 space-y-5">
      <PageTitle title="Billing Page" subtitle="Manage platform billing" />
      <BillingSubnav />
    </div>
  );
};
