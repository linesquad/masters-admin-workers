import { MasterLeadsView } from "@/modules/admin/all-masters/ui/views/master-leads-view";
import { useLoaderData } from "@tanstack/react-router";

export const Route = createFileRoute({
  component: RouteComponent,
  loader: async ({ params }) => {
    return {
      leadsId: params.leadsId,
    };
  },
});

function RouteComponent() {
  const { leadsId } = useLoaderData({
    from: "/_authenticated/(admin)/get-masters/leads/$leadsId",
  });

  return <MasterLeadsView id={leadsId} />;
}
