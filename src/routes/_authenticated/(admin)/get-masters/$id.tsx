import { SingleMasterView } from "@/modules/admin/all-masters/ui/views/single-master-view";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  return <SingleMasterView id={id} />;
}
