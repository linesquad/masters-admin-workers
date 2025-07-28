import { SingleLead } from "@/modules/master/leads/ui/components/single-lead";
import { useParams } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute({
  component: RouteComponent,
  beforeLoad: async ({ params }) => {
    return {
      id: params.id,
    };
  },
});

function RouteComponent() {
  const { id } = useParams({ from: "/_authenticated/master/leads/$id" });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <SingleLead id={id} />
    </div>
  );
}
