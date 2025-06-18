import { redirect } from "@tanstack/react-router";
import DisplayRegister from "@/modules/auth/ui/views/DisplayRegister";

export const Route = createFileRoute({
  component: RouteComponent,
  loader: async ({ context }) => {
    const role = await context.getUserRole().catch(() => null);
    if (role !== "admin") {
      throw redirect({ to: "/master" });
    }
    return { role };
  },
});

function RouteComponent() {
  return <DisplayRegister />;
}
