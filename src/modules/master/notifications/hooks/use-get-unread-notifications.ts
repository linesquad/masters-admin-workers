import { useQuery } from "@tanstack/react-query";
import { getUnreadCountNotifications } from "../api/notifications";
import type { UnreadCountNotificationsResponse } from "../types";

export const useGetUnreadNotifications = () => {
  const { data, isLoading, error, isError } =
    useQuery<UnreadCountNotificationsResponse>({
      queryKey: ["unread-notifications"],
      queryFn: getUnreadCountNotifications,
    });

  return { data, isLoading, error, isError };
};
