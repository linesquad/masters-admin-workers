import { useAdminReviews } from "../../hooks/use-admin-reviews";

export const ReviewSortingFilter = () => {
  const { sortBy, setSortBy } = useAdminReviews();

  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="w-[180px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="createdAt">Created At</option>
      <option value="averageRating">Average Rating</option>
      <option value="ratingPrice">Rating Price</option>
      <option value="ratingQuality">Rating Quality</option>
      <option value="ratingPunctuality">Rating Punctuality</option>
      <option value="ratingExperience">Rating Experience</option>
    </select>
  );
};
