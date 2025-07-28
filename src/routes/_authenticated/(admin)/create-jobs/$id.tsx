import { getJobsByCategoryId } from "@/modules/admin/createjob/services/jobs";
import { JobSingleView } from "@/modules/admin/createjob/ui/views/job-single-view";
import { useEffect } from "react";

export const Route = createFileRoute({
  component: RouteComponent,
  loader: async ({ params }: { params: { id: string } }) => {
    const job = await getJobsByCategoryId(params.id);
    return job;
  },
});

function RouteComponent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return <JobSingleView />;
}
