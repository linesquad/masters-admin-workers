import { AdminDashboardView } from "@/modules/admin/dashboard/ui/view/admin-dashboard-view";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <AdminDashboardView />
    </>
  );
}
