import { MasterReviewsList } from "../components/master-reviews-list";
import { MasterReviewsTittle } from "../components/master-reviews-tittle";
import type { User } from "@/types";
import { FiltersView } from "./filters-view";
import { useTranslation } from "react-i18next";

interface MasterReviewListViewProps {
  user: User;
}

export const MasterReviewListView = ({ user }: MasterReviewListViewProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4 w-full mx-auto text-center py-5">
      <MasterReviewsTittle
        title={t("reviews.title")}
        subtitle={t("reviews.subtitle")}
      />
      <FiltersView />
      <MasterReviewsList user={user} />
    </div>
  );
};
