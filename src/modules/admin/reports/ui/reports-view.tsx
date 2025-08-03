import { DottedSeparator } from "@/components/dotted-separator";
import { PageTitle } from "@/components/page-title";
import { ReportsList } from "./components/reports-list";
import { SelectLimiting } from "@/components/select-limiting";
import { useState } from "react";

export function ReportsView() {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  return (
    <div className="flex flex-col gap-4 p-2">
      <PageTitle title="Reports" />
      <DottedSeparator />
      <SelectLimiting limit={limit} setLimit={setLimit} />
      <ReportsList page={page} limit={limit} setPage={setPage} />
    </div>
  );
}
