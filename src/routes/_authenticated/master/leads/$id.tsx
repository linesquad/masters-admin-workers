import { SingleLead } from "@/modules/master/leads/ui/components/single-lead";
import { useParams } from "@tanstack/react-router";

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
  return (
    <div>
      <SingleLead id={id} />
    </div>
  );
}
