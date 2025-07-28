import { MasterNotificationView } from "@/modules/master/notifications/ui/views/master-notification-view";
import { useEffect } from "react";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return <MasterNotificationView />;
}
