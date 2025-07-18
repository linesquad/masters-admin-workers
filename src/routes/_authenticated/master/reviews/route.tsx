import { MasterReviewsFilterProvider } from "@/modules/master/reviews/hooks/use-master-reviews-filters-providers";
import { MasterReviewsView } from "@/modules/master/reviews/ui/views/master-reviews-view";
import { Outlet } from "@tanstack/react-router";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <MasterReviewsFilterProvider>
        <MasterReviewsView />
        <Outlet />
      </MasterReviewsFilterProvider>
    </main>
  );
}
