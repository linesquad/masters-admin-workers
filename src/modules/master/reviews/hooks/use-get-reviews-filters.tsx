import { use } from "react";
import MasterReviewsContext from "../context/master-reviews-context";

export function useMasterReviews() {
  const context = use(MasterReviewsContext);
  if (!context) {
    throw new Error(
      "useMasterLeadsFilters must be used within a MasterLeadsFiltersProvider"
    );
  }

  return context;
}
