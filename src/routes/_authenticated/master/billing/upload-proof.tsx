import { MasterUploadProofView } from "@/modules/master/billing/ui/ui/master-upload-proof-view";
import { useEffect } from "react";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return <MasterUploadProofView />;
}
