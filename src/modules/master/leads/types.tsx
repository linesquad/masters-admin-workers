interface Translation {
  en: string;
  ka: string;
  ru: string;
}

interface Client {
  id: string;
  fullName: string;
  email: string;
  phone: string;
}

export interface Lead {
  id: string;
  message: string;
  location: string;
  requestedTime: string;
  createdAt: string;
  updatedAt: string;
  completedAt: string | null;
  status: string;
  price: number | null;
  masterJobId: string;
  client: Client;
  jobTitle: Translation;
  categoryName: Translation;
  masterInfo: {
    masterId: string;
    masterName: string;
    imageUrl: string;
    city: string;
  };
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

interface LeadsData {
  leads: Lead[];
  pagination: Pagination;
}

export interface LeadsResponse {
  success: boolean;
  data: LeadsData;
}

export interface SingleLead {
  success: boolean;
  data: Lead;
}
