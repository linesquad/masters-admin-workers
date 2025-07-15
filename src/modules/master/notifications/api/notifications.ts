import instance from "@/lib/axios";
import type { NotificationsResponse } from "../types";

interface GetNotificationsParams {
  page: number;
  limit: number;
}

export const getNotifications = async (params: GetNotificationsParams) => {
  const response = await instance.get<NotificationsResponse>(
    "/api/notifications",
    {
      params,
    }
  );

  if (response.status === 200) {
    return response.data;
  }

  throw new Error("Failed to fetch notifications");
};

export const markAsRead = async (notificationId: string) => {
  const response = await instance.patch(
    `/api/notifications/${notificationId}/read/master`
  );

  if (response.status !== 200) {
    throw new Error("Failed to mark notification as read");
  }

  return response.data;
};

export const getUnreadCountNotifications = async () => {
  const response = await instance.get("/api/notifications/unread-count/master");

  if (response.status !== 200) {
    throw new Error("Failed to get unread count notifications");
  }

  return response.data;
};
