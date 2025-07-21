import { MasterUploadProofView } from "@/modules/master/billing/ui/ui/master-upload-proof-view";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return <MasterUploadProofView />;
}
