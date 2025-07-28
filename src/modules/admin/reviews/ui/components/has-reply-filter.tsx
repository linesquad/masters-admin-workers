import { useTranslation } from "react-i18next";
import { useAdminReviews } from "../../hooks/use-admin-reviews";

export const HasReplyFilter = () => {
  const { hasReply, setHasReply } = useAdminReviews();
  const { t } = useTranslation();
  return (
    <select
      value={hasReply ? "true" : "false"}
      onChange={(e) => setHasReply(e.target.value === "true")}
      className="w-[180px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="true">
        {t("reviewsMaster.reviewFilters.sorting.hasReply")}
      </option>
      <option value="false">
        {t("reviewsMaster.reviewFilters.sorting.noReply")}
      </option>
    </select>
  );
};
