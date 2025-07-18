import { useState } from "react";
import MasterReviewsContext from "../context/master-reviews-context";

interface MasterReviewsFilterProviderProps {
  children: React.ReactNode;
}

export const MasterReviewsFilterProvider = ({
  children,
}: MasterReviewsFilterProviderProps) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [status, setStatus] = useState<
    "pending" | "approved" | "rejected" | "all"
  >("pending");
  const [sortBy, setSortBy] = useState<
    "createdAt" | "averageRating" | "ratingPrice"
  >("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [includeReplies, setIncludeReplies] = useState(false);

  const resetFilters = () => {
    setPage(1);
    setLimit(10);
    setStatus("pending");
    setSortBy("createdAt");
    setSortOrder("desc");
    setIncludeReplies(false);
  };

  const contextValue = {
    page,
    limit,
    status,
    sortBy,
    sortOrder,
    includeReplies,
    setPage,
    setLimit,
    setStatus,
    setSortBy,
    setSortOrder,
    setIncludeReplies,
    resetFilters,
  };

  return (
    <MasterReviewsContext.Provider value={contextValue}>
      {children}
    </MasterReviewsContext.Provider>
  );
};
