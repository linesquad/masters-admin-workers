import { AdminReviewsFilterProvider } from "@/modules/admin/reviews/hooks/use-admin-reviews-filters-provider";
import { MainAdminReviewsView } from "@/modules/admin/reviews/ui/ui/main-admin-reviews-view";
import { useEffect } from "react";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <AdminReviewsFilterProvider>
      <MainAdminReviewsView />
    </AdminReviewsFilterProvider>
  );
}
