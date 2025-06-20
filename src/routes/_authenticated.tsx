import { redirect, Outlet } from "@tanstack/react-router";
import MainLayout from "@/components/MainLayout";

export const Route = createFileRoute({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    const user = await context.getUser().catch(() => null);
    if (!user) {
      throw redirect({ to: "/login" });
    }
    return { user };
  },
});

function RouteComponent() {
  const { user } = Route.useRouteContext();
  return (
    <MainLayout user={user}>
      <Outlet />
    </MainLayout>
  );
}
