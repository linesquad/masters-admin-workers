import { MasterNotificationView } from "@/modules/master/notifications/ui/views/master-notification-view";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return <MasterNotificationView />;
}
