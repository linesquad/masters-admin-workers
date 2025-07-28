import type { Summary } from "../../types";
import { useTranslation } from "react-i18next";

export function SingleMasterSummary({ summary }: { summary: Summary }) {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-2 gap-4 my-8">
      {[
        {
          label: t("allMasters.singleMaster.totalWorks"),
          value: summary.totalWorks,
        },
        {
          label: t("allMasters.singleMaster.totalCertificates"),
          value: summary.totalCertificates,
        },
        {
          label: t("allMasters.singleMaster.totalReviews"),
          value: summary.totalReviews,
        },
        {
          label: t("allMasters.singleMaster.totalQuestions"),
          value: summary.totalQuestions,
        },
        {
          label: t("allMasters.singleMaster.answeredQuestions"),
          value: summary.answeredQuestions,
        },
        {
          label: t("allMasters.singleMaster.joinedDate"),
          value: new Date(summary.joinedDate).toLocaleDateString(),
        },
        {
          label: t("allMasters.singleMaster.prodileCompleteness"),
          value: `${summary.profileCompleteness}%`,
        },
      ].map((item) => (
        <div
          key={item.label}
          className="bg-blue-50 p-3 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors"
        >
          <p className="text-sm font-medium text-blue-600">{item.label}</p>
          <p className="text-lg font-semibold text-blue-800">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
