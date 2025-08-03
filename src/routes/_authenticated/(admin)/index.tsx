import { AdminDashboardView } from "@/modules/admin/dashboard/ui/view/admin-dashboard-view";
import { useUser } from "@/modules/auth/hooks/useUser";
import { redirect, useNavigate } from "@tanstack/react-router";
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
  const navigate = useNavigate();
  const { data: user } = useUser();
  useEffect(() => {
    if (user?.role !== "admin") {
      navigate({ to: "/" });
    }
  }, [user, navigate]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <AdminDashboardView />
    </>
  );
}
