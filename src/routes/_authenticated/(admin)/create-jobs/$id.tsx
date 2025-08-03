import { getJobsByCategoryId } from "@/modules/admin/createjob/services/jobs";
import { JobSingleView } from "@/modules/admin/createjob/ui/views/job-single-view";
import { useUser } from "@/modules/auth/hooks/useUser";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute({
  component: RouteComponent,
  loader: async ({ params }: { params: { id: string } }) => {
    const job = await getJobsByCategoryId(params.id);
    return job;
  },
});

function RouteComponent() {
  const navigate = useNavigate();
  const { data: user } = useUser();
  useEffect(() => {
    if (user?.role !== "admin") {
      navigate({ to: "/" });
    }
  }, [user, navigate]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return <JobSingleView />;
}
