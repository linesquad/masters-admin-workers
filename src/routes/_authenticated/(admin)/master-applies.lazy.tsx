import { ComingSoon } from "@/components/coming-soon";

export const Route = createLazyFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <ComingSoon
        title="Master Applies"
        subtitle="Master applies will be available soon"
      />
    </div>
  );
}
