import { useQuery } from "@tanstack/react-query";
import { getReports } from "../api/reports";

export const useGetReports = (page: number, limit: number) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["reports", page, limit],
    queryFn: () => getReports(page, limit),
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};
