import { useQuery } from "@tanstack/react-query";
import {
  getMasterLeads,
  type GetMasterLeadsParams,
} from "../api/get-all-masters";
import type { MasterLeadsResponse } from "../types";

export const useGetMasterLeads = (id: string, params: GetMasterLeadsParams) => {
  const { data, isLoading, isError, error } = useQuery<MasterLeadsResponse>({
    queryKey: ["master-leads", id, params],
    queryFn: () => getMasterLeads(id, params),
  });

  return { data, isLoading, isError, error };
};
