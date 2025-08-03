import { useUser } from "@/modules/auth/hooks/useUser";
import DisplayRegister from "@/modules/auth/ui/views/DisplayRegister";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { data: user } = useUser();
  useEffect(() => {
    if (user?.role !== "admin") {
      navigate({ to: "/" });
    }
  }, [user, navigate]);
  return <DisplayRegister />;
}
