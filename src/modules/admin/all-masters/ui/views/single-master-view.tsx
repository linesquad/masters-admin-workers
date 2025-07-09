import { PageTitle } from "@/components/page-title";
import { SingleMaster } from "../components/single-master";
import { useRouter } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function SingleMasterView({ id }: { id: string }) {
  const router = useRouter();
  return (
    <div className="pt-5 px-5">
      <PageTitle title="Master Details" />
      <Button
        variant={"secondary"}
        size={"sm"}
        onClick={() => router.history.back()}
        className="mt-5"
      >
        Back
      </Button>
      <SingleMaster id={id} />
    </div>
  );
}
