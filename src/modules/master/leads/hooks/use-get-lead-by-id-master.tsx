import { useQuery } from "@tanstack/react-query";
import { getLeadForMasterById } from "../api/leads";
import type { SingleLead } from "../types";

export function useGetLeadByIdMaster(id: string) {
  const { data, isLoading, isError, error } = useQuery<SingleLead, Error>({
    queryKey: ["lead", id],
    queryFn: () => getLeadForMasterById(id),
  });

  return { data, isLoading, isError, error };
}
