import PaginationComp from "@/components/PaginationComp";
import { useGetNotifications } from "../../hooks/use-get-notifications";
import { NotificationCard } from "./notification-card";
import { useState } from "react";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";
import { EmptyState } from "@/components/empthy-state";

export const NotificationsList = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, error, isError } = useGetNotifications(page, 10);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  if (isLoading) {
    return (
      <LoadingState
        title="Loading notifications"
        description="Please wait while we load the notifications"
        className="mt-12"
      />
    );
  }

  if (isError) {
    return (
      <ErrorState
        title="Error loading notifications"
        description={error?.message || "Please try again later"}
        className="mt-12"
      />
    );
  }

  if (!data) {
    return (
      <EmptyState
        title="No notifications found"
        description="Please try again later"
        className="mt-12"
      />
    );
  }

  if ("notifications" in data && data.notifications.length > 0) {
    return (
      <div>
        <div>
          <NotificationCard notifications={data.notifications} />
        </div>
        <PaginationComp
          totalcount={data.pagination.total}
          limit={Number(data.pagination.limit)}
          currentPage={page}
          onPageChange={handlePageChange}
        />
      </div>
    );
  }
  return <div>No notifications available</div>;
};
