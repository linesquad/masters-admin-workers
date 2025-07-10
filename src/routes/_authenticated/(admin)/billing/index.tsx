import { BillingView } from "@/modules/admin/billing/ui/views/billing-view";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <BillingView />
    </div>
  );
}

// _authenticated/(admin)/billing/
