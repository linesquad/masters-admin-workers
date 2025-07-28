import { useGetUnreadNotifications } from "../../hooks/use-get-unread-notifications";
import { useTranslation } from "react-i18next";

export const UnreadCount = () => {
  const { data, isLoading, error, isError } = useGetUnreadNotifications();
  const { t } = useTranslation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  if (data.unreadCount === 0) {
    return <div>No unread notifications</div>;
  }

  return (
    <div className="flex items-center gap-2">
      <h3>{t("notifications.count", { count: data.unreadCount })}</h3>
      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
      <p className="text-sm font-medium">{data.unreadCount}</p>
    </div>
  );
};
