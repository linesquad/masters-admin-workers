import { BillingStatsView } from "@/modules/admin/billing/ui/views/billing-stats-view";
import { useUser } from "@/modules/auth/hooks/useUser";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute({
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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <BillingStatsView />
    </div>
  );
}
