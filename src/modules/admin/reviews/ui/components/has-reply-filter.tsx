import { useAdminReviews } from "../../hooks/use-admin-reviews";

export const HasReplyFilter = () => {
  const { hasReply, setHasReply } = useAdminReviews();
  return (
    <select
      value={hasReply ? "true" : "false"}
      onChange={(e) => setHasReply(e.target.value === "true")}
      className="w-[180px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="true">Has Reply</option>
      <option value="false">No Reply</option>
    </select>
  );
};
