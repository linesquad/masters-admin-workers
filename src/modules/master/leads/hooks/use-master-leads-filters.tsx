import { createContext, useContext, useState } from "react";
import { LeadStatus } from "../api/leads";

interface MasterLeadsFiltersContextType {
  limit: number;
  search: string;
  status: LeadStatus;
  page: number;
  setLimit: (limit: number) => void;
  setSearch: (search: string) => void;
  setStatus: (status: LeadStatus) => void;
  setPage: (page: number) => void;
}

const MasterLeadsFiltersContext =
  createContext<MasterLeadsFiltersContextType | null>(null);

export function MasterLeadsFiltersProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [search, setSearch] = useState<string>("");
  const [status, setStatus] = useState<LeadStatus>(LeadStatus.UNDEFINED);

  return (
    <MasterLeadsFiltersContext.Provider
      value={{
        limit,
        search,
        status,
        page,
        setLimit,
        setSearch,
        setStatus,
        setPage,
      }}
    >
      {children}
    </MasterLeadsFiltersContext.Provider>
  );
}

export function useMasterLeadsFilters() {
  const context = useContext(MasterLeadsFiltersContext);
  if (!context) {
    throw new Error(
      "useMasterLeadsFilters must be used within a MasterLeadsFiltersProvider"
    );
  }
  return context;
}
