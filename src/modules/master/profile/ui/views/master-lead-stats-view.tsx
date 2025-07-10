import { MasterLeadsStatsGrid } from "../components/master-leads-stats-grid";

interface MasterLeadStatsViewProps {
  totalLeads: number;
  pendingLeads: number;
  acceptedLeads: number;
  declinedLeads: number;
  averageJobValue: number;
  totalRevenue: number;
}

export function MasterLeadStatsView({
  totalLeads,
  pendingLeads,
  acceptedLeads,
  declinedLeads,
  averageJobValue,
  totalRevenue,
}: MasterLeadStatsViewProps) {
  return (
    <MasterLeadsStatsGrid
      totalLeads={totalLeads}
      pendingLeads={pendingLeads}
      acceptedLeads={acceptedLeads}
      declinedLeads={declinedLeads}
      averageJobValue={averageJobValue}
      totalRevenue={totalRevenue}
    />
  );
}
