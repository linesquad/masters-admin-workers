import { AdminReviewsFilterProvider } from "@/modules/admin/reviews/hooks/use-admin-reviews-filters-provider";
import { MainAdminReviewsView } from "@/modules/admin/reviews/ui/ui/main-admin-reviews-view";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AdminReviewsFilterProvider>
      <MainAdminReviewsView />
    </AdminReviewsFilterProvider>
  );
}
