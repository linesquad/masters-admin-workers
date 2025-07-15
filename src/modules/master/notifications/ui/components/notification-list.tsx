import PaginationComp from "@/components/PaginationComp";
import { useGetNotifications } from "../../hooks/use-get-notifications";
import { NotificationCard } from "./notification-card";
import { useState } from "react";

export const NotificationsList = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, error, isError } = useGetNotifications(page, 10);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  if (!data) {
    return <div>No notifications found</div>;
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
