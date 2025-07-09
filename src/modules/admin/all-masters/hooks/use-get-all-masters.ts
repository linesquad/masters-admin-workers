import { useQuery } from "@tanstack/react-query";
import { getAllMasters } from "../api/get-all-masters";
import type { AllMastersResponse } from "../types";

export const useGetAllMasters = (page: number, limit: number) => {
  return useQuery<AllMastersResponse, Error>({
    queryKey: ["all-masters", page, limit],
    queryFn: () => getAllMasters(page, limit),
  });
};
