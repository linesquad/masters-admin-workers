import { Button } from "@/components/ui/button";
import { useTriggerBilling } from "../../hooks/use-trigger-billing";
import { Loader } from "lucide-react";

export const TriggerBillingButton = () => {
  const { mutate, isPending } = useTriggerBilling();

  const handleTriggerBilling = () => {
    mutate();
  };

  return (
    <Button onClick={handleTriggerBilling} disabled={isPending}>
      {isPending ? (
        <Loader className="size-4 animate-spin" />
      ) : (
        "Trigger Billing"
      )}
    </Button>
  );
};
