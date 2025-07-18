import { useGetAllMasters } from "@/modules/admin/all-masters/hooks/use-get-all-masters";
import { useAdminReviews } from "../../hooks/use-admin-reviews";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FilterByMaster = () => {
  const { masterId, setMasterId } = useAdminReviews();
  const [page, setPage] = useState(1);
  const { data: masters, isLoading } = useGetAllMasters(page, 10);
  if (isLoading) return <div>Loading...</div>;
  if (!masters) return null;

  return (
    <div className="flex items-center gap-2">
      <div>
        <p>Total Reviews: {masters.pagination.total}</p>
      </div>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        <ChevronLeftIcon className="w-4 h-4" />
      </Button>
      <select
        value={masterId}
        onChange={(e) => setMasterId(e.target.value)}
        className="w-[180px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {masters.data.map((master) => (
          <option key={master.id} value={master.id}>
            {master.fullName}
          </option>
        ))}
      </select>
      <Button
        onClick={() => setPage(page + 1)}
        disabled={page === masters.pagination.totalPages}
      >
        <ChevronRightIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};
