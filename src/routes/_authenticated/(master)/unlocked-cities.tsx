import { UnlockedLocation } from "@/modules/master/unlocked-cities/ui/view/unlocked-location";
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
  return <UnlockedLocation />;
}
