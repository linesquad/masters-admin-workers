import { UnlockedLocation } from "@/modules/master/unlocked-cities/ui/view/unlocked-location";
import { useEffect } from "react";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return <UnlockedLocation />;
}
