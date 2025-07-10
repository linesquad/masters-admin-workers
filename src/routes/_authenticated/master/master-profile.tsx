import { MasterProfileView } from "@/modules/master/profile/ui/views/master-profile-view";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = Route.useLoaderData();
  return <MasterProfileView id={user.id} />;
}
