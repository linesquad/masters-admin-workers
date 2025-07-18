import { createContext } from "react";

interface MasterReviewsContextType {
  page: number;
  limit: number;
  status?: "pending" | "approved" | "rejected" | "all";
  sortBy?: "createdAt" | "averageRating" | "ratingPrice";
  sortOrder?: "asc" | "desc";
  includeReplies?: boolean;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  setStatus: (status: "pending" | "approved" | "rejected" | "all") => void;
  setSortBy: (sortBy: "createdAt" | "averageRating" | "ratingPrice") => void;
  setIncludeReplies: (includeReplies: boolean) => void;
}

const MasterReviewsContext = createContext<MasterReviewsContextType | null>(
  null
);

export default MasterReviewsContext;
