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
