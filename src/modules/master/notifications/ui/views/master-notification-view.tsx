import { PageTitle } from "@/components/page-title";
import { NotificationsList } from "../components/notification-list";
import { UnreadCount } from "../components/unread-count";

export const MasterNotificationView = () => {
  return (
    <div className="px-4 py-4">
      <div className="flex justify-between items-center mb-4">
        <PageTitle title="Notifications" subtitle="Manage your notifications" />
        <UnreadCount />
      </div>
      <NotificationsList />
    </div>
  );
};
