import { ComingSoon } from "@/components/coming-soon";
import { useEffect } from "react";

export const Route = createLazyFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <ComingSoon
      title="Coming Soon"
      subtitle="This page is coming soon"
      className="h-screen"
    />
  );
}
