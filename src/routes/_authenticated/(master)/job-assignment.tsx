import { MasterJobAssignView } from "@/modules/master/assign-job/ui/views/master-job-assign-view";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return <MasterJobAssignView />;
}
