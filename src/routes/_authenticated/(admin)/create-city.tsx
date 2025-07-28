import { CreateCityView } from "@/modules/admin/city/ui/view/create-city-view";
import { useEffect } from "react";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return <CreateCityView />;
}
