interface MasterLeadsStatsGridProps {
  totalLeads: number;
  pendingLeads: number;
  acceptedLeads: number;
  declinedLeads: number;
  averageJobValue: number;
  totalRevenue: number;
}

export function MasterLeadsStatsGrid({
  totalLeads,
  pendingLeads,
  acceptedLeads,
  declinedLeads,
  averageJobValue,
  totalRevenue,
}: MasterLeadsStatsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <div className="bg-white rounded-xl shadow-md border border-slate-200 p-4">
        <h3 className="text-sm font-medium text-slate-500">Leads Generated</h3>
        <p className="text-2xl font-bold text-slate-800">{totalLeads}</p>
      </div>
      <div className="bg-white rounded-xl shadow-md border border-slate-200 p-4">
        <h3 className="text-sm font-medium text-slate-500">Leads Converted</h3>
        <p className="text-2xl font-bold text-slate-800">{pendingLeads}</p>
      </div>
      <div className="bg-white rounded-xl shadow-md border border-slate-200 p-4">
        <h3 className="text-sm font-medium text-slate-500">Converted Value</h3>
        <p className="text-2xl font-bold text-slate-800">₾{acceptedLeads}</p>
      </div>
      <div className="bg-white rounded-xl shadow-md border border-slate-200 p-4">
        <h3 className="text-sm font-medium text-slate-500">
          Average Job Value
        </h3>
        <p className="text-2xl font-bold text-slate-800">₾{averageJobValue}</p>
      </div>
      <div className="bg-white rounded-xl shadow-md border border-slate-200 p-4">
        <h3 className="text-sm font-medium text-slate-500">Total Revenue</h3>
        <p className="text-2xl font-bold text-slate-800">₾{totalRevenue}</p>
      </div>
      <div className="bg-white rounded-xl shadow-md border border-slate-200 p-4">
        <h3 className="text-sm font-medium text-slate-500">
          Total Leads Declined
        </h3>
        <p className="text-2xl font-bold text-slate-800">₾{declinedLeads}</p>
      </div>
    </div>
  );
}
