import { BillingStatsView } from "@/modules/admin/billing/ui/views/billing-stats-view";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <BillingStatsView />
    </div>
  );
}
