import { AllMasterView } from "@/modules/admin/all-masters/ui/views/all-master-view";
import { useEffect } from "react";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return <AllMasterView />;
}
