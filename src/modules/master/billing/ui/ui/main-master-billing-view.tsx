import { PageTitle } from "@/components/page-title";
import { MasterBillingList } from "../components/master-billing-list";
import { useTranslation } from "react-i18next";

export const MainMasterBillingView = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-4 px-4">
      <PageTitle
        title={t("billingMaster.title")}
        subtitle={t("billingMaster.subtitle")}
      />
      <MasterBillingList />
    </div>
  );
};
