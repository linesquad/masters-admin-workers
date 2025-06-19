import { redirect } from "@tanstack/react-router";


export const Route = createFileRoute({
  component: RouteComponent,
  loader: async ({ context }) => {
    const role = await context.getUserRole().catch(() => null);
    if (role !== "master") {
      throw redirect({ to: "/" });
    }
    return { role };
  },
});

function RouteComponent() {
  return <div>Hello "/_authenticated/(dashboards)/master"!</div>;
}
