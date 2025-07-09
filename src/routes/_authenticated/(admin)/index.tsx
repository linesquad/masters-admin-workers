import { AdminDashboardView } from "@/modules/admin/dashboard/ui/view/admin-dashboard-view";
import { redirect } from "@tanstack/react-router";

export const Route = createFileRoute({
  component: RouteComponent,
  loader: async ({ context }) => {
    const role = await context.getUserRole().catch(() => null);
    if (role !== "admin") {
      throw redirect({ to: "/master" });
    }
    return { role };
  },
});

function RouteComponent() {
  return (
    <>
      <AdminDashboardView />
    </>
  );
}
