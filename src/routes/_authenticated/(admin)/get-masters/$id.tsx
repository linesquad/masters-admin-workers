import { SingleMasterView } from "@/modules/admin/all-masters/ui/views/single-master-view";
import { useEffect } from "react";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return <SingleMasterView id={id} />;
}
