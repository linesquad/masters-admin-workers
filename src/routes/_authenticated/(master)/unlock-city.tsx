import { UnlockCityView } from "@/modules/master/unlock-cities/ui/views/unlock-city-view";
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
  return <UnlockCityView />;
}
