import { UnlockCityView } from "@/modules/master/unlock-cities/ui/views/unlock-city-view";
import { useEffect } from "react";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return <UnlockCityView />;
}
