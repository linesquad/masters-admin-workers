import { PageTitle } from "@/components/page-title";
import { BillingSubnav } from "../components/billing-subnav";
import { useTranslation } from "react-i18next";

export const BillingMainView = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-5 space-y-5">
      <PageTitle
        title={t("adminBilling.title")}
        subtitle={t("adminBilling.subtitle")}
      />
      <BillingSubnav />
    </div>
  );
};
