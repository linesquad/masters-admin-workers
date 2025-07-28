import { MasterJobAssignView } from "@/modules/master/assign-job/ui/views/master-job-assign-view";
import { useEffect } from "react";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return <MasterJobAssignView />;
}
