import { useState } from "react";
import { GetterContacts } from "./components/getter-contacts";
import { SelectLimiting } from "@/components/select-limiting";

export function ContactUsView() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  return (
    <div className="flex flex-col gap-4">
      <SelectLimiting limit={limit} setLimit={setLimit} />
      <GetterContacts page={page} limit={limit} setPage={setPage} />
    </div>
  );
}
