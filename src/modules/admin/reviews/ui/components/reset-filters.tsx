import { Button } from "@/components/ui/button";
import { useAdminReviews } from "../../hooks/use-admin-reviews";
import { XIcon } from "lucide-react";

export const ResetFilters = () => {
  const { resetFilters } = useAdminReviews();
  return (
    <Button onClick={resetFilters} variant="outline">
      <XIcon className="w-4 h-4" />
    </Button>
  );
};
