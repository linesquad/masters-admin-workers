import { ComingSoon } from "@/components/coming-soon";

export const Route = createLazyFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <ComingSoon title="Reports" subtitle="Reports will be available soon" />
    </div>
  );
}
