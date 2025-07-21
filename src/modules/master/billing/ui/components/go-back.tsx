import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowLeftIcon } from "lucide-react";

export const GoBack = () => {
  return (
    <Button asChild variant="outline" className="w-fit">
      <Link to="/master/billing" className="flex items-center gap-x-2">
        <ArrowLeftIcon className="w-4 h-4 mr-2" />
        Go Back
      </Link>
    </Button>
  );
};
