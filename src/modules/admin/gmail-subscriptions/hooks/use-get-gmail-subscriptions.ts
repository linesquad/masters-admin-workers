import { useQuery } from "@tanstack/react-query";
import { getGmailSubscriptions } from "../api/subscriptions";

export const useGetGmailSubscriptions = (page: number, limit: number) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gmail-subscriptions", page, limit],
    queryFn: () => getGmailSubscriptions(page, limit),
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};
