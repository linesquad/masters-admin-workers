import { useState } from "react";
import AdminReviewsContext from "../context/admin-reviews-context";

interface AdminReviewsFilterProviderProps {
  children: React.ReactNode;
}

export const AdminReviewsFilterProvider = ({
  children,
}: AdminReviewsFilterProviderProps) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);
  const [status, setStatus] = useState<string>();
  const [masterId, setMasterId] = useState<string>();
  const [clientId, setClientId] = useState<string>();
  const [minRating, setMinRating] = useState<number>();
  const [maxRating, setMaxRating] = useState<number>();
  const [dateFrom, setDateFrom] = useState<string>();
  const [dateTo, setDateTo] = useState<string>();
  const [search, setSearch] = useState<string>();
  const [sortBy, setSortBy] = useState<string>();
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">();
  const [hasReply, setHasReply] = useState<boolean>();
  const [open, setOpen] = useState(false);

  const resetFilters = () => {
    setPage(1);
    setLimit(10);
    setOpen(false);
    setStatus(undefined);
    setMasterId(undefined);
    setClientId(undefined);
    setMinRating(undefined);
    setMaxRating(undefined);
    setDateFrom(undefined);
    setDateTo(undefined);
    setSearch(undefined);
    setSortBy(undefined);
    setSortOrder(undefined);
    setHasReply(undefined);
  };

  return (
    <AdminReviewsContext.Provider
      value={{
        page,
        limit,
        status,
        masterId,
        clientId,
        minRating,
        maxRating,
        dateFrom,
        dateTo,
        search,
        sortBy,
        sortOrder,
        hasReply,
        setPage,
        setLimit,
        setClientId,
        setDateFrom,
        setDateTo,
        setHasReply,
        setMasterId,
        setMaxRating,
        setMinRating,
        setSearch,
        setSortBy,
        setSortOrder,
        setStatus,
        resetFilters,
        open,
        setOpen,
      }}
    >
      {children}
    </AdminReviewsContext.Provider>
  );
};
