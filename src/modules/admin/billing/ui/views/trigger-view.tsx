import { PageTitle } from "@/components/page-title";
import { TriggerBillingButton } from "../components/trigger-billing-button";
import { useTranslation } from "react-i18next";

export const TriggerView = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-full overflow-y-auto">
      <PageTitle title={t("adminBilling.billingTrigger.title")} />
      <TriggerBillingButton />
    </div>
  );
};
