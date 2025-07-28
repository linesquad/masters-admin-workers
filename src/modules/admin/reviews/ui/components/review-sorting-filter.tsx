import { useTranslation } from "react-i18next";
import { useAdminReviews } from "../../hooks/use-admin-reviews";

export const ReviewSortingFilter = () => {
  const { sortBy, setSortBy } = useAdminReviews();
  const { t } = useTranslation();

  console.log(t("reviewsMaster.reviewFilters.sorting.createdAt"));
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="w-[180px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="createdAt">
        {t("reviewsMaster.reviewFilters.sorting.createdAt")}
      </option>
      <option value="averageRating">
        {t("reviewsMaster.reviewFilters.sorting.averageRating")}
      </option>
      <option value="ratingPrice">
        {t("reviewsMaster.reviewFilters.sorting.ratingPrice")}
      </option>
      <option value="ratingQuality">
        {t("reviewsMaster.reviewFilters.sorting.ratingQuality")}
      </option>
      <option value="ratingPunctuality">
        {t("reviewsMaster.reviewFilters.sorting.ratingPunctuality")}
      </option>
      <option value="ratingExperience">
        {t("reviewsMaster.reviewFilters.sorting.ratingExperience")}
      </option>
    </select>
  );
};
