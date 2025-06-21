import { redirect } from "@tanstack/react-router";
import { MasterSettingsView } from "@/modules/master/profile/ui/views/master-settings-view";

export const Route = createFileRoute({
  component: RouteComponent,
  loader: async ({ context }) => {
    const user = await context.getUser();
    if (user.role !== "master") {
      throw redirect({ to: "/login" });
    }
    return { user };
  },
});

function RouteComponent() {
  const { user } = Route.useLoaderData();
  return <MasterSettingsView id={user.id} />;
}
