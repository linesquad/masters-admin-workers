import { getJobsByCategoryId } from "@/modules/admin/createjob/services/jobs";

export const Route = createFileRoute({
  component: RouteComponent,
  loader: async ({ params }: { params: { id: string } }) => {
    const job = await getJobsByCategoryId(params.id);
    return job;
  },
});

function RouteComponent() {
  return <div>Hello "/_authenticated/(admin)/create-jobs/$id"!</div>;
}
