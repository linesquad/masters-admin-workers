import { SelectLimiting } from "@/components/select-limiting";
import { useState } from "react";
import { NewAppliesList } from "./new-applies-list";

export function NewAppliesView() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  return (
    <div className="flex flex-col gap-4 p-2">
      <SelectLimiting limit={limit} setLimit={setLimit} />
      <NewAppliesList page={page} limit={limit} setPage={setPage} />
    </div>
  );
}
