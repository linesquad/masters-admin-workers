export type MasterStats = {
  totalReviews: number;
  averageRating: number;
  completedJobs: number;
  totalEarnings: number;
  points: number;
};

export type User = {
  fullName: string;
  email: string;
  phone: string;
};

export type MasterProfile = {
  id: string;
  userId: string;
  bio: string;
  city: string;
  imageUrl: string;
  availability: string;
  createdAt: string;
  stats: MasterStats;
  user: User;
};

export type MasterLeadStats = {
  acceptedLeads: string;
  averageJobValue: number;
  completedLeads: string;
  declinedLeads: string;
  pendingLeads: string;
  totalLeads: number;
  totalRevenue: number | null;
};
