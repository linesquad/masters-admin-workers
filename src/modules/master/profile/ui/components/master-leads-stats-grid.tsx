import { useTranslation } from "react-i18next";

interface MasterLeadsStatsGridProps {
  totalLeads: number;
  pendingLeads: number;
  acceptedLeads: number;
  declinedLeads: number;
  averageJobValue: number;
  totalRevenue: number;
}

export function MasterLeadsStatsGrid({
  totalLeads,
  pendingLeads,
  acceptedLeads,
  declinedLeads,
  averageJobValue,
  totalRevenue,
}: MasterLeadsStatsGridProps) {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <div className="bg-white rounded-xl shadow-md border border-slate-200 p-4">
        <h3 className="text-sm font-medium text-slate-500">
          {t("masterProfile.leadsGenerated")}
        </h3>
        <p className="text-2xl font-bold text-slate-800">{totalLeads}</p>
      </div>
      <div className="bg-white rounded-xl shadow-md border border-slate-200 p-4">
        <h3 className="text-sm font-medium text-slate-500">
          {t("masterProfile.leadsConverted")}
        </h3>
        <p className="text-2xl font-bold text-slate-800">{pendingLeads}</p>
      </div>
      <div className="bg-white rounded-xl shadow-md border border-slate-200 p-4">
        <h3 className="text-sm font-medium text-slate-500">
          {t("masterProfile.convertedValue")}
        </h3>
        <p className="text-2xl font-bold text-slate-800">₾{acceptedLeads}</p>
      </div>
      <div className="bg-white rounded-xl shadow-md border border-slate-200 p-4">
        <h3 className="text-sm font-medium text-slate-500">
          {t("masterProfile.averageJobValue")}
        </h3>
        <p className="text-2xl font-bold text-slate-800">₾{averageJobValue}</p>
      </div>
      <div className="bg-white rounded-xl shadow-md border border-slate-200 p-4">
        <h3 className="text-sm font-medium text-slate-500">
          {t("masterProfile.totalRevenue")}
        </h3>
        <p className="text-2xl font-bold text-slate-800">₾{totalRevenue}</p>
      </div>
      <div className="bg-white rounded-xl shadow-md border border-slate-200 p-4">
        <h3 className="text-sm font-medium text-slate-500">
          {t("masterProfile.totalLeadsDeclined")}
        </h3>
        <p className="text-2xl font-bold text-slate-800">₾{declinedLeads}</p>
      </div>
    </div>
  );
}
