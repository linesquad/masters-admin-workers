import { createContext } from "react";

export interface AdminReviewsContextType {
  page: number;
  limit: number;
  status?: string;
  masterId?: string;
  clientId?: string;
  minRating?: number;
  maxRating?: number;
  dateFrom?: string;
  dateTo?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  hasReply?: boolean;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  setStatus: (status: string) => void;
  setMasterId: (masterId: string) => void;
  setClientId: (clientId: string) => void;
  setMinRating: (minRating: number) => void;
  setMaxRating: (maxRating: number) => void;
  setDateFrom: (dateFrom: string) => void;
  setDateTo: (dateTo: string) => void;
  setSearch: (search: string) => void;
  setSortBy: (sortBy: string) => void;
  setSortOrder: (sortOrder: "asc" | "desc") => void;
  setHasReply: (hasReply: boolean) => void;
  resetFilters: () => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AdminReviewsContext = createContext<AdminReviewsContextType | null>(null);

export default AdminReviewsContext;
