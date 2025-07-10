import CreateCategory from "@/modules/admin/category/ui/views/CreateCategory";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return <CreateCategory />;
}
