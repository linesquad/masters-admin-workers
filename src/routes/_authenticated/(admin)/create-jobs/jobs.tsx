import { DisplayJobs } from "@/modules/admin/createjob/ui/views/jobs-view";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return <DisplayJobs />;
}
