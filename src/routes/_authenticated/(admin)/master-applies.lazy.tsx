import { DottedSeparator } from "@/components/dotted-separator";
import { PageTitle } from "@/components/page-title";
import { NewAppliesView } from "@/modules/admin/new-applies/ui/new-applies-view";
import { useUser } from "@/modules/auth/hooks/useUser";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createLazyFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { data: user } = useUser();
  useEffect(() => {
    if (user?.role !== "admin") {
      navigate({ to: "/" });
    }
  }, [user, navigate]);
  return (
    <div className="flex flex-col gap-4 p-2">
      <PageTitle title="Master Applies" />
      <DottedSeparator />
      <NewAppliesView />
    </div>
  );
}
