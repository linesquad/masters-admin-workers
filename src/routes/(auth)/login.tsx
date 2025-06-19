import { DisplayLogin } from "@/modules/auth/ui/views/DisplayLogin";
import { redirect } from "@tanstack/react-router";

export const Route = createFileRoute({
  component: LoginForm,
  loader: async ({ context }) => {
    const user = await context.getUser().catch(() => null);
    const role = await context.getUserRole().catch(() => null);
    if (user) {
      throw redirect({ to: `/` });
    }
    return { user, role };
  },
});

function LoginForm() {
  return <DisplayLogin />;
}
