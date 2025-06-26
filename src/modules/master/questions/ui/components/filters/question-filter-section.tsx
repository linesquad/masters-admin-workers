import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, X, Search } from "lucide-react";
import FilterControlGridQA from "./filter-control-grid-qa";
import { MainFilterGrid } from "./main-filter-grid";
import SortByFilterQA from "./sortby-filter-qa";
import SortOrderQA from "./sort-order-qa";
import AddationalFilterRows from "./addational-filter-rows";
import type { QuestionFilterSectionProps } from "../../../types/filters";

export default function QuestionFilterSection({
  filters,
  handleFilterChange,
  clearFilters,
  searchInput,
  setSearchInput,
}: QuestionFilterSectionProps) {
  return (
    <div>
      <Card className="mb-6 border-0 shadow-lg bg-white/90 backdrop-blur-md">
        <CardHeader className="pb-3 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-t-xl">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2 text-gray-800">
              <div className="p-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-sm">
                <Filter className="h-4 w-4 text-white" />
              </div>
              Filters & Search
            </CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="flex items-center gap-1.5 hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all duration-200 text-xs"
            >
              <X className="h-3 w-3" />
              Clear All
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-3 pt-4">
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 p-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md">
              <Search className="h-3 w-3 text-white" />
            </div>
            <Input
              placeholder="Search questions..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="pl-11 h-10 border-2 border-transparent bg-gradient-to-r from-blue-50 to-purple-50 focus:border-blue-300 focus:bg-white transition-all duration-200 rounded-lg shadow-sm"
            />
          </div>

          {/* Filter Controls Grid */}
          <FilterControlGridQA
            filters={filters}
            handleFilterChange={handleFilterChange}
          />

          {/* Main Filters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <MainFilterGrid
              filters={filters}
              handleFilterChange={handleFilterChange}
            />
            <SortByFilterQA
              filters={filters}
              handleFilterChange={handleFilterChange}
            />
            <SortOrderQA
              filters={filters}
              handleFilterChange={handleFilterChange}
            />
          </div>

          {/* Additional Filters Row */}
          <AddationalFilterRows
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
        </CardContent>
      </Card>
    </div>
  );
}
