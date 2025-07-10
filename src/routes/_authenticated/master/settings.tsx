import { MasterSettingsView } from "@/modules/master/profile/ui/views/master-settings-view";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return <MasterSettingsView />;
}
