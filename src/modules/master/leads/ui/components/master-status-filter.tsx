import { LeadStatus } from "../../api/leads";

interface MasterStatusFilterProps {
  status: LeadStatus;
  setStatus: (status: LeadStatus) => void;
}

export function MasterStatusFilter({
  status,
  setStatus,
}: MasterStatusFilterProps) {
  return (
    <select
      value={status}
      onChange={(e) => setStatus(e.target.value as LeadStatus)}
      className="w-[180px] px-3 py-2 border border-gray-300 rounded-md text-sm"
    >
      <option value={LeadStatus.UNDEFINED}>All</option>
      <option value={LeadStatus.PENDING}>Pending</option>
      <option value={LeadStatus.ACCEPTED}>Accepted</option>
      <option value={LeadStatus.CANCELLED}>Cancelled</option>
      <option value={LeadStatus.COMPLETED}>Completed</option>
      <option value={LeadStatus.DECLINED}>Declined</option>
    </select>
  );
}
