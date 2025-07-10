import { CreateCityView } from "@/modules/admin/city/ui/view/create-city-view";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return <CreateCityView />;
}
