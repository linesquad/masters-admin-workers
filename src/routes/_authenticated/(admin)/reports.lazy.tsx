import { ReportsView } from "@/modules/admin/reports/ui/reports-view";

export const Route = createLazyFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return <ReportsView />;
}
