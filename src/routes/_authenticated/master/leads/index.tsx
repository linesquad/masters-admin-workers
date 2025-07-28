import { MainMasterLeadView } from "@/modules/master/leads/ui/views/main-master-lead-view";
import { useEffect } from "react";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return <MainMasterLeadView />;
}
