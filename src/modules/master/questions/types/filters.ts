export interface QuestionFilters {
  page?: number;
  limit?: number;
  status?: 'pending' | 'answered' | 'hidden' | 'deleted';
  category?: string;
  search?: string;
  sortBy?: 'createdAt' | 'answeredAt' | 'viewCount' | 'helpfulCount' | 'priority';
  sortOrder?: 'asc' | 'desc';
  isPublic?: boolean;
  includeAnswered?: boolean;
  includeUnanswered?: boolean;
}

export interface FilterComponentProps {
  filters: QuestionFilters;
  handleFilterChange: (key: string, value: any) => void;
}

export interface QuestionFilterSectionProps extends FilterComponentProps {
  clearFilters: () => void;
  searchInput: string;
  setSearchInput: (value: string) => void;
} 