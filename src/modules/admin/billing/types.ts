export interface BillingItem {
  id: string;
  masterId: string;
  masterName: string;
  masterEmail: string;
  masterPhone: string;
  totalJobs: number;
  totalAmount: number;
  adminFee: number;
  status: string;
  weekStart: string;
  weekEnd: string;
  proofUrl: string | null;
  proofNote: string | null;
  adminNote: string | null;
  remindersSent: number;
  createdAt: string;
  dueDate: string;
}

interface Pagination {
  total: number;
  pages: number | null;
}

export interface BillingStatsResponse {
  success: boolean;
  data: BillingItem[];
  pagination: Pagination;
}

export interface BillingStatsData {
  totalPending: number;
  totalPaid: number;
  totalOverdue: number;
  pendingCount: number;
  paidCount: number;
  overdueCount: number;
}

export interface BillingSummaryResponse {
  success: boolean;
  data: BillingStatsData;
}

export interface BillingNotification {
  masterId: string;
  masterName: string;
  totalJobs: number;
  totalAmount: number;
  adminFee: number;
  billingLogId: string;
}

export interface BillingTriggerResponse {
  success: boolean;
  message: string;
  billedMasters: number;
  notifications: BillingNotification[];
  totalProcessed: number;
}
