export interface Master {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  avgPrice: string;
  avgQuality: string;
  avgPunctuality: string;
  avgExperience: string;
  comments: string;
  replies: string;
  totalScore: number;
  normalizedScore: number;
  totalReviews: string;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface AllMastersResponse {
  data: Master[];
  pagination: Pagination;
}

export interface Title {
  en: string;
  ka: string;
  ru: string;
}

export interface Work {
  id: string;
  title: Title;
  description: Title;
  priceRange: {
    min: number;
    max: number;
  };
  duration: number;
  note: string;
  category: {
    id: string;
    name: Title;
  };
  jobInfo: {
    id: string;
    title: Title;
    description: Title;
  };
  createdAt: string;
}

export interface Certificate {
  id: string;
  title: string;
  imageUrl: string;
  issuedBy: string | null;
  issuedAt: string | null;
  uploadedAt: string;
}

export interface ReviewStatistics {
  total: number;
  averageRatings: {
    price: number;
    quality: number;
    punctuality: number;
    experience: number;
    overall: number;
  };
  totalScore: number;
  normalizedScore: number;
}

export interface RecentReview {
  id: string;
  clientName: string;
  comment: string;
  masterReply: string;
  ratings: {
    price: number;
    quality: number;
    punctuality: number;
    experience: number;
    average: number;
  };
  createdAt: string;
  repliedAt: string;
  hasReply: boolean;
}

export interface Reviews {
  statistics: ReviewStatistics;
  recent: RecentReview[];
}

export interface PointHistory {
  id: string;
  points: number;
  source: string;
  description: string | null;
  awardedAt: string;
  type: "earned" | "deducted";
}

export interface Points {
  total: number;
  totalTransactions: number;
  lastAwardedAt: string;
  recentHistory: PointHistory[];
}

export interface QuestionAnswer {
  id: string;
  question: string;
  answer: string;
  askedBy: string;
  askedAt: string;
  answeredAt: string;
  isAnswered: boolean;
}

export interface QuestionsAndAnswers {
  total: number;
  items: QuestionAnswer[];
}

export interface Summary {
  totalWorks: number;
  totalCertificates: number;
  totalReviews: number;
  totalQuestions: number;
  answeredQuestions: number;
  joinedDate: string;
  profileCompleteness: number;
}

export interface SingleMaster {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  bio: string;
  city: string;
  imageUrl: string;
  availability: string;
  memberSince: string;
  profileUpdatedAt: string;
  works: Work[];
  certificates: Certificate[];
  reviews: Reviews;
  points: Points;
  questionsAndAnswers: QuestionsAndAnswers;
  summary: Summary;
}
