import { useQuery } from "@tanstack/react-query";
import { getLeadsForMaster } from "../api/leads";
import type { LeadsResponse } from "../types";
import { LeadStatus } from "../api/leads";

interface UseGetLeadsListProps {
  page: number;
  limit: number;
  status: LeadStatus;
  search: string;
}

export const useGetLeadsList = ({
  page,
  limit,
  status,
  search,
}: UseGetLeadsListProps) => {
  const { data, isLoading, isError, error } = useQuery<LeadsResponse, Error>({
    queryKey: ["leads", page, limit, status, search],
    queryFn: () =>
      getLeadsForMaster({
        page,
        limit,
        status,
        search,
      }),
  });

  return { data, isLoading, isError, error };
};
