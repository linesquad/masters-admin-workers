import { useTranslation } from "react-i18next";
import { useAdminReviews } from "../../hooks/use-admin-reviews";
import { ReviewStatus } from "../../types";

export const ReviewStatusFilter = () => {
  const { status, setStatus } = useAdminReviews();
  const { t } = useTranslation();
  return (
    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="w-[180px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {Object.values(ReviewStatus).map((status) => (
        <option key={status} value={status}>
          {status === ""
            ? t("reviewsMaster.reviewFilters.sorting.all")
            : t(`reviewsMaster.reviewFilters.sorting.${status}`)}
        </option>
      ))}
    </select>
  );
};
