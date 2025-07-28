import { AdminDashboardView } from "@/modules/admin/dashboard/ui/view/admin-dashboard-view";
import { redirect } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    const role = await context.getUserRole().catch(() => null);
    if (role !== "admin") {
      throw redirect({ to: "/master" });
    }
    return { role };
  },
});

function RouteComponent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <AdminDashboardView />
    </>
  );
}
