import { MasterSettingsView } from "@/modules/master/profile/ui/views/master-settings-view";
import { useEffect } from "react";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return <MasterSettingsView />;
}
