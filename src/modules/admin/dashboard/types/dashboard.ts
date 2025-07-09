// Multilingual content interface
interface MultiLangContent {
  en: string;
  ka: string;
  ru: string;
}

// User-related types
export interface UserOverview {
  totalClients: string;
  totalMasters: string;
  totalAdmins: string;
  activeMasters: string;
  clientGrowthRate: string;
  masterGrowthRate: string;
  masterActivationRate: string;
  newClientsThisPeriod: string;
  newMastersThisPeriod: string;
}

export interface UserAnalytics {
  clientEngagement: {
    totalClients: string;
    activeClients: string;
    repeatClients: string;
  };
  registrationTrends: Array<{
    date: string;
    clients: string;
    masters: string;
  }>;
  masterActivity: Array<{
    masterId: string;
    masterName: string;
    totalLeads: string;
    completedLeads: string;
    currentPoints: string;
    availability: string;
    totalEarnings: string;
    avgRating: string | null;
    joinedAt: string;
  }>;
  demographics: {
    mastersByAvailability: Array<{
      availability: string;
      count: string;
    }>;
    mastersByCity: Array<{
      city: string;
      count: string;
    }>;
  };
}

// Lead and revenue types
export interface LeadOverview {
  totalLeads: string;
  totalRevenue: string;
  completedLeads: string;
  pendingLeads: string;
  acceptedLeads: string;
  declinedLeads: string;
  cancelledLeads: string;
  conversionRate: string;
  averageLeadValue: string;
  acceptanceRate: string;
  leadsThisPeriod: string;
  completedThisPeriod: string;
}

export interface FinancialMetrics {
  summary: {
    totalPlatformRevenue: string;
    avgJobValue: string;
    totalAdminFees: string;
  };
  topCategories: Array<{
    categoryName: MultiLangContent;
    totalRevenue: string;
    jobCount: string;
    avgPrice: string;
    masterCount: string;
  }>;
  revenueTrends: Array<{
    date: string;
    totalRevenue: string;
    jobCount: string;
    avgJobValue: string;
  }>;
  feeCollection: Array<any>; // Can be refined based on actual structure
}

// Review and rating types
export interface ReviewOverview {
  totalReviews: string;
  pendingReviews: string;
  approvedReviews: string;
  averageRating: string;
  normalizedRating: string;
  approvalRate: string;
  reviewsThisPeriod: string;
}

// Performance metrics
export interface PerformanceMetrics {
  qualityMetrics: {
    avgQualityRating: string;
    avgPriceRating: string;
    avgPunctualityRating: string;
    avgExperienceRating: string;
    reviewVolume: string;
    lowRatingCount: string;
  };
  keyMetrics: {
    masterResponseRate: string;
    avgResponseTimeHours: string;
    leadConversionRate: string;
    serviceQualityScore: string;
  };
  masterPerformance: Array<{
    masterId: string;
    masterName: string;
    leadsReceived: string;
    leadsCompleted: string;
    completionRate: string;
    responseRate?: string;
    avgRating?: string;
  }>;
  conversionFunnel: {
    avgResponseTime?: string;
  };
}

// Geographic data
export interface GeographicalData {
  mastersByCity: Array<{
    cityId: string;
    cityName: string;
    masterCount: string;
    activeMasters: string;
  }>;
  servicesByLocation: Array<{
    location: string;
    requestCount: string;
    totalValue: string;
  }>;
  locationUtilization: Array<{
    cityPartId: string;
    cityPartName: string;
    cityName: string;
    isActive: boolean;
    unlockCost: string;
    mastersUnlocked: string;
  }>;
  insights: {
    locationCoverage: string;
    mostPopularCity: string;
    mostRequestedLocation: string;
  };
}

// Top performers
export interface TopPerformers {
  topMasters: Array<{
    masterId: string;
    masterName: string;
    completedJobs: string;
    totalEarnings: string;
    totalPoints: string;
    avgRating?: string;
  }>;
  topClients: Array<{
    clientId: string;
    clientName: string;
    totalOrders: string;
    completedOrders: string;
    totalSpent: string;
    avgOrderValue: string;
    joinedAt: string;
  }>;
}

// System health and billing
export interface SystemHealth {
  healthScore: string;
  system: {
    totalNotifications: string;
    unreadNotifications: string;
    urgentNotifications: string;
    overdueNotifications: string;
  };
  pointSystem: {
    totalPointsAwarded: string;
    totalPointsDeducted: string;
    mastersWithNegativePoints: string;
    mastersOverPointCap: string;
  };
  engagement: {
    mastersWithCertificates: string;
    totalCertificates: string;
    totalQuestions: string;
  };
}

export interface BillingOverview {
  totalPendingFees: string;
  totalPaidFees: string;
  totalRejectedFees: string;
  overdueBills: string;
  feesThisPeriod: string;
  overdueRate: string;
  collectionRate: string;
}

export interface SystemOverview {
  totalCategories: string;
  totalJobs: string;
  serviceUtilization: string;
  activeJobOfferings: string;
}

// Recent activities
export interface RecentActivities {
  latestUsers: Array<{
    id: string;
    fullName: string;
    role: string;
    createdAt: string;
  }>;
  latestLeads: Array<{
    id: string;
    status: string;
    price: string;
    location: string;
    client_name: string;
    master_name: string;
  }>;
  latestReviews: Array<{
    id: string;
    avgRating: string;
    status: string;
    comment: string;
    clientName: string;
  }>;
  latestQuestions: Array<{
    id: string;
    question: string;
    answer: string | null;
    askedByName: string;
    masterName: string;
  }>;
}

// Metadata
export interface DashboardMetadata {
  generatedAt: string;
  timeframe: string;
  dataFreshness: string;
}

export interface ResponseMetadata {
  requestedAt: string;
  requestedBy?: string;
}

// Main dashboard data structure
export interface DashboardData {
  overview: {
    users: UserOverview;
    leads: LeadOverview;
    reviews: ReviewOverview;
    billing: BillingOverview;
    system: SystemOverview;
  };
  userAnalytics: UserAnalytics;
  financialMetrics: FinancialMetrics;
  performanceMetrics: PerformanceMetrics;
  geographicalData: GeographicalData;
  topPerformers: TopPerformers;
  systemHealth: SystemHealth;
  recentActivities: RecentActivities;
  metadata: DashboardMetadata;
}

// API response structure
export interface DashboardResponse {
  data: DashboardData;
  metadata: ResponseMetadata;
} 