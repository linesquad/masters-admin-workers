import { PageTitle } from "@/components/page-title";
import { TriggerBillingButton } from "../components/trigger-billing-button";

export const TriggerView = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-full overflow-y-auto">
      <PageTitle title="Trigger Billing" />
      <TriggerBillingButton />
    </div>
  );
};
