import { BillingMainView } from "@/modules/admin/billing/ui/views/billing-main-view";
import { Outlet } from "@tanstack/react-router";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-5 flex flex-col px-5">
      <BillingMainView />
      <Outlet />
    </div>
  );
}
