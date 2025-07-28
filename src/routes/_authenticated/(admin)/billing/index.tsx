import { BillingView } from "@/modules/admin/billing/ui/views/billing-view";
import { useEffect } from "react";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <BillingView />
    </div>
  );
}

// _authenticated/(admin)/billing/
