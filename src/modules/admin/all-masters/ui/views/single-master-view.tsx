import { PageTitle } from "@/components/page-title";
import { SingleMaster } from "../components/single-master";
import { useRouter } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function SingleMasterView({ id }: { id: string }) {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <div className="pt-5 px-5">
      <PageTitle
        title={t("allMasters.singleMaster.title")}
        subtitle={t("allMasters.singleMaster.subtitle")}
      />
      <Button
        variant={"secondary"}
        size={"sm"}
        onClick={() => router.history.back()}
        className="mt-5"
      >
        {t("allMasters.singleMaster.back")}
      </Button>
      <SingleMaster id={id} />
    </div>
  );
}
