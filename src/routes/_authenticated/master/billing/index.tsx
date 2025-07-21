import { MainMasterBillingView } from "@/modules/master/billing/ui/ui/main-master-billing-view";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return <MainMasterBillingView />;
}
