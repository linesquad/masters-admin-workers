import { MasterReviewsList } from "../components/master-reviews-list";
import { MasterReviewsTittle } from "../components/master-reviews-tittle";
import type { User } from "@/types";
import { FiltersView } from "./filters-view";

interface MasterReviewListViewProps {
  user: User;
}

export const MasterReviewListView = ({ user }: MasterReviewListViewProps) => {
  return (
    <div className="flex flex-col gap-4 w-full mx-auto text-center py-5">
      <MasterReviewsTittle title="Reviews" subtitle="Manage your reviews" />
      <FiltersView />
      <MasterReviewsList user={user} />
    </div>
  );
};
