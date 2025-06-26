import { redirect } from "@tanstack/react-router";
import { QuestionsView } from "@/modules/master/questions/ui/view/questions-view";

export const Route = createFileRoute({
  component: RouteComponent,
  loader: async ({ context }) => {
    const user = await context.getUser();
    if (user.role !== "master") {
      throw redirect({ to: "/" });
    }
    return { user };
  },
});

function RouteComponent() {
  const { user } = Route.useLoaderData();
  return <QuestionsView masterId={user.id} />;
}
