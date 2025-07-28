import { MasterLeadsView } from "@/modules/admin/all-masters/ui/views/master-leads-view";
import { useLoaderData } from "@tanstack/react-router";
import { useEffect } from "react";

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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return <MasterLeadsView id={leadsId} />;
}
