import { useQuery } from "@tanstack/react-query";
import { getNewApplies } from "../api/new-applies";

export const useGetAllNewApplies = (page: number, limit: number) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["new-applies", page, limit],
    queryFn: () => getNewApplies(page, limit),
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};
