import { MainMasterBillingView } from "@/modules/master/billing/ui/ui/main-master-billing-view";
import { useEffect } from "react";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return <MainMasterBillingView />;
}
