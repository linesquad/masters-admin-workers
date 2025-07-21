import { useQuery } from "@tanstack/react-query";
import { getBillingSummary } from "../api/get-billing-stats";
import type { BillingSummaryResponse } from "../types";

export const useGetBillingSummary = () => {
  const { data, isLoading, error, isError } = useQuery<BillingSummaryResponse>({
    queryKey: ["billing-summary"],
    queryFn: getBillingSummary,
  });

  return { data, isLoading, error, isError };
};
