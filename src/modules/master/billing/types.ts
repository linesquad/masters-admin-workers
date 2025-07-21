export interface MasterBillingItem {
  id: string;
  adminFee: number;
  adminNote: string | null;
  createdAt: string;
  dueDate: string;
  proofNote: string | null;
  proofUrl: string | null;
  remindersSent: number;
  status: "pending" | "approved" | "rejected";
  totalAmount: number;
  totalJobs: number;
  weekEnd: string;
  weekStart: string;
}

export interface Pagination {
  limit: number;
  page: string;
  pages: number;
  total: number;
}

export interface MasterBillingResponse {
  success: boolean;
  data: MasterBillingItem[];
  pagination: Pagination;
}
