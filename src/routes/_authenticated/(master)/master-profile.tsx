import { MasterProfileView } from "@/modules/master/profile/ui/views/master-profile-view";
import { redirect } from "@tanstack/react-router";

export const Route = createFileRoute({
  component: RouteComponent,
  loader: async ({ context }) => {
    const user = await context.getUser();
    if (user.role !== "master") {
      throw redirect({ to: "/" });
    }
    return { user };
  },
});

function RouteComponent() {
  const { user } = Route.useLoaderData();
  return <MasterProfileView id={user.id} />;
}
