import { useMutation, useQueryClient } from "@tanstack/react-query";
import { markAsRead } from "../api/notifications";
import toast from "react-hot-toast";

export const useReadNotification = () => {
  const queryClient = useQueryClient();
  const { mutate: readNotification, isPending } = useMutation({
    mutationFn: (notificationId: string) => markAsRead(notificationId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      queryClient.invalidateQueries({ queryKey: ["unread-notifications"] });
      toast.success("Notification marked as read");
    },
    onError: () => {
      toast.error("Failed to mark notification as read");
    },
  });

  return { readNotification, isPending };
};
