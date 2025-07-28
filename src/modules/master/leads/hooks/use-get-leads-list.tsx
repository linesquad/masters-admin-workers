import { useQuery } from "@tanstack/react-query";
import { getLeadsForMaster } from "../api/leads";
import type { LeadsResponse } from "../types";
import { LeadStatus } from "../api/leads";

interface UseGetLeadsListProps {
  page: number;
  limit: number;
  status: LeadStatus;
}

export const useGetLeadsList = ({
  page,
  limit,
  status,
}: UseGetLeadsListProps) => {
  const { data, isLoading, isError, error } = useQuery<LeadsResponse, Error>({
    queryKey: ["leads", page, limit, status],
    queryFn: () =>
      getLeadsForMaster({
        page,
        limit,
        status,
      }),
  });

  return { data, isLoading, isError, error };
};
