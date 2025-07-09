import { AllMasterView } from "@/modules/admin/all-masters/ui/views/all-master-view";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return <AllMasterView />;
}
