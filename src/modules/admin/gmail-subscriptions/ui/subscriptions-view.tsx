import { useState } from "react";
import { SubscriptionList } from "./components/subscription-list";
import { SelectLimiting } from "@/components/select-limiting";

export function SubscriptionsView() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  return (
    <div className="flex flex-col gap-4">
      <SelectLimiting limit={limit} setLimit={setLimit} />
      <SubscriptionList page={page} limit={limit} setPage={setPage} />
    </div>
  );
}
