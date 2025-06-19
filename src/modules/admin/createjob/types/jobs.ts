import type { Category } from "../../category/types/category";

export interface JobAddFormProps {
  handleCreateJob: (data: CreateJobFormData) => void;
  categories: Category[];
  isPending: boolean;
  onClose: () => void;
}

export type CreateJobFormData = {
  categoryId: string;
  title: {
    en: string;
    ru: string;
    ka: string;
  };
  description: {
    en: string;
    ru: string;
    ka: string;
  };
};

export type UpdateJobFormData = {
  categoryId: string;
  jobId: string;
  jobData: {
    categoryId: string;
    title: {
      en: string;
      ru: string;
      ka: string;
    };
    description: {
      en: string;
      ru: string;
      ka: string;
    };
  };
};
export interface Job {
  id: string;
  title: {
    en: string;
    ka: string;
    ru: string;
  };
  description: {
    en: string;
    ka: string;
    ru: string;
  };
  categoryId: string;
  createdAt: string;
  masterCount: number;
}

export interface JobCardsProps {
  jobs: Job[];
  onEdit: (data: UpdateJobFormData) => void;
  onDelete: (categoryId: string, jobId: string) => void;
  isLoading?: boolean;
  error?: Error | null;
}
