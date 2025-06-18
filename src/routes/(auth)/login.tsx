import { getUser, getUserRole } from "@/modules/auth/services/auth";
import { DisplayLogin } from "@/modules/auth/ui/views/DisplayLogin";
import { redirect } from "@tanstack/react-router";

export const Route = createFileRoute({
  component: LoginForm,
  loader: async () => {
    const user = await getUser().catch(() => null);
    const role = await getUserRole().catch(() => null);
    if (user) {
      throw redirect({ to: `/` });
    }
    return { user, role };
  },
});

function LoginForm() {
  return <DisplayLogin />;
}
