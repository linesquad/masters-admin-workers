import { Button } from "@/components/ui/button";
import { useAcceptDeclineLead } from "../../hooks/use-accept-decline-lead";
import { LeadStatus } from "../../api/leads";

interface AcceptDeclineLeadProps {
  id: string;
}

export function AcceptDeclineLead({ id }: AcceptDeclineLeadProps) {
  const { acceptDeclineLead, isPending } = useAcceptDeclineLead();

  const handleAccept = () => {
    acceptDeclineLead({ id, status: LeadStatus.ACCEPTED });
  };

  const handleDecline = () => {
    acceptDeclineLead({ id, status: LeadStatus.DECLINED });
  };

  return (
    <div className="flex gap-2">
      <Button onClick={handleAccept} variant={"secondary"} disabled={isPending}>
        {isPending ? "Accepting..." : "Accept"}
      </Button>
      <Button
        onClick={handleDecline}
        variant={"destructive"}
        disabled={isPending}
      >
        {isPending ? "Declining..." : "Decline"}
      </Button>
    </div>
  );
}
