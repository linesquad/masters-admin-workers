import { useQuery } from "@tanstack/react-query";
import { getSingleMaster } from "../api/get-all-masters";
import type { SingleMaster } from "../types";

export const useGetSingleMaster = (id: string) => {
  return useQuery<SingleMaster, Error>({
    queryKey: ["single-master", id],
    queryFn: () => getSingleMaster(id),
    enabled: !!id,
  });
};
