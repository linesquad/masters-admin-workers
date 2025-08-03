import { DottedSeparator } from "@/components/dotted-separator";
import { PageTitle } from "@/components/page-title";
import { SubscriptionsView } from "@/modules/admin/gmail-subscriptions/ui/subscriptions-view";

export const Route = createLazyFileRoute({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4 p-2">
      <PageTitle title="Gmail Subscriptions" />
      <DottedSeparator />
      <SubscriptionsView />
    </div>
  );
}
