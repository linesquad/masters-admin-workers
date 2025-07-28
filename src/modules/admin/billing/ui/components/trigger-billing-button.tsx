import { Button } from "@/components/ui/button";
import { useTriggerBilling } from "../../hooks/use-trigger-billing";
import { Loader } from "lucide-react";
import { useTranslation } from "react-i18next";

export const TriggerBillingButton = () => {
  const { t } = useTranslation();
  const { mutate, isPending } = useTriggerBilling();

  const handleTriggerBilling = () => {
    mutate();
  };

  return (
    <Button onClick={handleTriggerBilling} disabled={isPending}>
      {isPending ? (
        <Loader className="size-4 animate-spin" />
      ) : (
        t("adminBilling.billingTrigger.triggerBilling")
      )}
    </Button>
  );
};
