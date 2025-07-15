import { use } from "react";
import AdminReviewsContext from "../context/admin-reviews-context";

export function useAdminReviews() {
  const context = use(AdminReviewsContext);
  if (!context) {
    throw new Error(
      "useMasterLeadsFilters must be used within a MasterLeadsFiltersProvider"
    );
  }

  return context;
}
