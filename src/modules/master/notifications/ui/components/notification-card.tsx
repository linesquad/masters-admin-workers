import { Button } from "@/components/ui/button";
import type { Notification } from "../../types";
import { useReadNotification } from "../../hooks/use-read-notifications";

interface NotificationCardProps {
  notifications: Notification[];
}

export const NotificationCard = ({ notifications }: NotificationCardProps) => {
  const { readNotification, isPending } = useReadNotification();
  return (
    <div className="flex flex-col gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`flex flex-col gap-2 p-3 rounded ${notification.read ? "bg-gray-50" : "bg-blue-50"}`}
        >
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${notification.read ? "bg-gray-400" : "bg-blue-500"}`}
              />
              <h3 className="text-lg font-bold">
                {notification.title || notification.type.replace(/_/g, " ")}
              </h3>
            </div>
            <span className="text-xs text-gray-500">
              {new Date(notification.createdAt).toLocaleDateString()}
            </span>
          </div>
          <p className="text-sm text-gray-700">{notification.message}</p>
          {notification.data && (
            <div className="mt-2 text-xs text-gray-500">
              {Object.entries(notification.data).map(([key, value]) => (
                <div key={key} className="flex flex-col gap-2">
                  {key}: {JSON.stringify(value)}
                </div>
              ))}
            </div>
          )}
          <Button
            variant={"outline"}
            className={`mt-2 self-end text-xs px-2 py-1 rounded ${notification.read ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}
            onClick={() => {
              readNotification(notification.id);
            }}
            disabled={isPending}
          >
            {notification.read ? "Marked" : "Mark as Read"}
          </Button>
        </div>
      ))}
    </div>
  );
};
