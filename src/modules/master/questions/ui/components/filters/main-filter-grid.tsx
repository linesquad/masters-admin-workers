import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import type { FilterComponentProps } from "../../../types/filters";

export function MainFilterGrid({
  filters,
  handleFilterChange,
}: FilterComponentProps) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
        Category
      </label>
      <Select
        value={filters.category || "all"}
        onValueChange={(value) =>
          handleFilterChange("category", value === "all" ? "" : value)
        }
      >
        <SelectTrigger className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 hover:border-green-300 cursor-pointer h-9 rounded-lg transition-all duration-200 text-sm">
          <SelectValue placeholder="All categories" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="all" className="cursor-pointer">
            All categories
          </SelectItem>
          <SelectItem value="jobs" className="cursor-pointer">
            Jobs
          </SelectItem>
          <SelectItem value="services" className="cursor-pointer">
            Services
          </SelectItem>
          <SelectItem value="general" className="cursor-pointer">
            General
          </SelectItem>
          <SelectItem value="support" className="cursor-pointer">
            Support
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
