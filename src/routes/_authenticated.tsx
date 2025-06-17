import { getUserId } from "@/modules/auth/services/auth";
import { redirect, Outlet } from "@tanstack/react-router";
import MainLayout from "@/components/MainLayout";

export const Route = createFileRoute({
  component: RouteComponent,
  beforeLoad: async () => {
    const user = await getUserId().catch(() => null);
    if (!user) {
      throw redirect({ to: "/login" });
    }
    return { user };
  },
});

function RouteComponent() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}
