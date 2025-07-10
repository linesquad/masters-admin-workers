import { UnlockedLocation } from "@/modules/master/unlocked-cities/ui/view/unlocked-location";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return <UnlockedLocation />;
}
