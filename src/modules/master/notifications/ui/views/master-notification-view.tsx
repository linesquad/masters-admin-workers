import { PageTitle } from "@/components/page-title";
import { NotificationsList } from "../components/notification-list";
import { UnreadCount } from "../components/unread-count";
import { useTranslation } from "react-i18next";

export const MasterNotificationView = () => {
  const { t } = useTranslation();
  return (
    <div className="px-4 py-4">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-4">
        <PageTitle
          title={t("notifications.title")}
          subtitle={t("notifications.subtitle")}
        />
        <UnreadCount />
      </div>
      <NotificationsList />
    </div>
  );
};
