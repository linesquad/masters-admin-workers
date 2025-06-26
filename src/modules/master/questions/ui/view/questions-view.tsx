import { useGetQuestions } from "@/modules/master/questions/hooks/useGetQuestions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MessageCircle,
  TrendingUp,
  Users,
  Search,
  Filter,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { QuestionPagination } from "../components/question-pagination";
import { QuestionList } from "../components/question-list";
import QuestionsMentaInfo from "../components/questions-menta-info";
import { QuestionSummary } from "../components/question-summary";
import QuestionFilterSection from "../components/filters/question-filter-section";
import { QuestionLoading } from "../components/question-loading";
import QuestionError from "../components/question-error";
import type { QuestionFilters } from "../../types/filters";

export function QuestionsView({ masterId }: { masterId: string }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [filters, setFilters] = useState<QuestionFilters>({
    page: 1,
    limit: 2,
    status: undefined,
    category: "",
    includeAnswered: true,
    includeUnanswered: true,
    sortBy: "createdAt",
    sortOrder: "desc",
    isPublic: undefined,
  });

  // Debounce search input
  const [debouncedSearch] = useDebounce(searchInput, 500);

  // Reset to page 1 when search changes
  useEffect(() => {
    if (debouncedSearch !== searchInput) {
      setCurrentPage(1);
    }
  }, [debouncedSearch, searchInput]);

  const apiFilters: QuestionFilters = {
    ...filters,
    page: currentPage,
    status: filters.status || undefined,
    search: debouncedSearch,
  };

  const {
    data: questions,
    isLoading,
    isError,
    error,
  } = useGetQuestions(masterId, apiFilters);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  const clearFilters = () => {
    setFilters({
      page: 1,
      limit: 20,
      status: undefined,
      category: "",
      includeAnswered: true,
      includeUnanswered: true,
      sortBy: "createdAt",
      sortOrder: "desc",
      isPublic: undefined,
    });
    setSearchInput("");
    setCurrentPage(1);
  };

  if (isLoading) {
    return <QuestionLoading />;
  }

  if (isError) {
    return <QuestionError error={error} />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "answered":
        return "bg-green-100 text-green-800";
      case "closed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "normal":
        return "bg-blue-100 text-blue-800";
      case "low":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 shadow-lg">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Questions & Answers
          </h1>
          <p className="text-gray-600 text-lg">
            Manage and respond to questions from customers
          </p>
        </div>

        {/* Filters Section */}
        <QuestionFilterSection
          filters={filters}
          handleFilterChange={handleFilterChange}
          clearFilters={clearFilters}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        
        {/* Summary Stats */}
        <QuestionSummary questions={questions} />

        {/* Meta Information */}
        <QuestionsMentaInfo questions={questions} formatDate={formatDate} />

        {/* Questions List */}
        <QuestionList
          questions={questions}
          formatDate={formatDate}
          getStatusColor={getStatusColor}
          getPriorityColor={getPriorityColor}
        />
        
        {/* Pagination */}
        <QuestionPagination
          questions={questions}
          filters={filters}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
