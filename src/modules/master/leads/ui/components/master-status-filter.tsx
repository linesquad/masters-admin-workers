import { useTranslation } from "react-i18next";
import { LeadStatus } from "../../api/leads";

interface MasterStatusFilterProps {
  status: LeadStatus;
  setStatus: (status: LeadStatus) => void;
}

export function MasterStatusFilter({
  status,
  setStatus,
}: MasterStatusFilterProps) {
  const { t } = useTranslation();
  return (
    <select
      value={status}
      onChange={(e) => setStatus(e.target.value as LeadStatus)}
      className="w-[180px] px-3 py-2 border border-gray-300 rounded-md text-sm"
    >
      <option value={LeadStatus.UNDEFINED}>{t("leads.filters.all")}</option>
      <option value={LeadStatus.PENDING}>{t("leads.filters.pending")}</option>
      <option value={LeadStatus.ACCEPTED}>{t("leads.filters.accepted")}</option>
      <option value={LeadStatus.CANCELLED}>
        {t("leads.filters.cancelled")}
      </option>
      <option value={LeadStatus.COMPLETED}>
        {t("leads.filters.completed")}
      </option>
      <option value={LeadStatus.DECLINED}>{t("leads.filters.declined")}</option>
    </select>
  );
}
