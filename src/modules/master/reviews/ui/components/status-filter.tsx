import { useMasterReviews } from "../../hooks/use-get-reviews-filters";
import { useTranslation } from "react-i18next";

export const StatusFilter = () => {
  const { status, setStatus } = useMasterReviews();
  const { t } = useTranslation();
  return (
    <select
      value={status === "all" ? "" : status}
      onChange={(e) =>
        setStatus(e.target.value as "pending" | "approved" | "rejected" | "all")
      }
      className="border rounded p-2"
    >
      <option value="pending">{t("reviews.reviewFilters.pending")}</option>
      <option value="approved">{t("reviews.reviewFilters.approved")}</option>
      <option value="rejected">{t("reviews.reviewFilters.rejected")}</option>
      <option value={status === "all" ? "" : ""}>
        {t("reviews.reviewFilters.all")}
      </option>
    </select>
  );
};
