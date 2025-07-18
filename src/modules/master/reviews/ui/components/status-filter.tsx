import { useMasterReviews } from "../../hooks/use-get-reviews-filters";

export const StatusFilter = () => {
  const { status, setStatus } = useMasterReviews();
  return (
    <select
      value={status === "all" ? "" : status}
      onChange={(e) =>
        setStatus(e.target.value as "pending" | "approved" | "rejected" | "all")
      }
      className="border rounded p-2"
    >
      <option value="pending">Pending</option>
      <option value="approved">Approved</option>
      <option value="rejected">Rejected</option>
      <option value={status === "all" ? "" : ""}>All</option>
    </select>
  );
};
