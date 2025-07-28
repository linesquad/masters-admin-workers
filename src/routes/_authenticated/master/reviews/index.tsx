import { getUser } from "@/modules/auth/services/auth";
import { MasterReviewListView } from "@/modules/master/reviews/ui/views/master-review-list-view";
import { redirect, useRouteContext } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute({
  component: RouteComponent,
  beforeLoad: async () => {
    const user = await getUser();
    if (!user) {
      throw redirect({ to: "/login" });
    }
    return {
      user,
    };
  },
});

function RouteComponent() {
  const { user } = useRouteContext({ from: "/_authenticated/master/reviews" });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="px-4 py-4">
      <MasterReviewListView user={user} />
    </div>
  );
}
