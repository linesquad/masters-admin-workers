import { useQuery } from "@tanstack/react-query";
import {
  getBillingStats,
  type GetBillingStatsProps,
} from "../api/get-billing-stats";
import type { BillingStatsResponse } from "../types";

export const useGetBilling = ({ page, limit }: GetBillingStatsProps) => {
  const { data, isLoading, error } = useQuery<BillingStatsResponse>({
    queryKey: ["billing-stats", page, limit],
    queryFn: () => getBillingStats({ page, limit }),
  });

  return { data, isLoading, error };
};
