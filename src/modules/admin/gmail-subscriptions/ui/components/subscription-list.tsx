import { ErrorState } from "@/components/error-state";
import { useGetGmailSubscriptions } from "../../hooks/use-get-gmail-subscriptions";
import { SubscriptionCard } from "./subscription-card";
import { LoadingState } from "@/components/loading-state";
import PaginationComp from "@/components/PaginationComp";

interface SubscriptionListProps {
  page: number;
  limit: number;
  setPage: (page: number) => void;
}

export function SubscriptionList({
  page,
  limit,
  setPage,
}: SubscriptionListProps) {
  const { data, isLoading, error } = useGetGmailSubscriptions(page, limit);

  if (isLoading)
    return (
      <LoadingState
        title="Loading"
        description="Please wait while we load the subscriptions"
      />
    );
  if (error)
    return (
      <ErrorState title="Error" description="Failed to fetch subscriptions" />
    );

  if (!data) {
    return <ErrorState title="Error" description="No subscriptions found" />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.users.map(
          (subscription: { id: string; email: string; createdAt: string }) => (
            <SubscriptionCard
              key={subscription.id}
              email={subscription.email}
              createdAt={subscription.createdAt}
            />
          )
        )}
      </div>
      <PaginationComp
        totalcount={data.total.count}
        limit={limit}
        currentPage={page}
        onPageChange={setPage}
      />
    </div>
  );
}
