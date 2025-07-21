import { BillingSummaryView } from "@/modules/admin/billing/ui/views/billing-summary-view";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return <BillingSummaryView />;
}
