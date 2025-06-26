import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FilterComponentProps } from "../../../types/filters";

export default function FilterControlGridQA({
  filters,
  handleFilterChange,
}: FilterComponentProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      {/* Status Filter */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
          Status
        </label>
        <Select
          value={filters.status || "all"}
          onValueChange={(value) =>
            handleFilterChange("status", value === "all" ? "" : value)
          }
        >
          <SelectTrigger className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 hover:border-yellow-300 cursor-pointer h-9 rounded-lg transition-all duration-200 text-sm">
            <SelectValue placeholder="All statuses" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="all" className="cursor-pointer">
              All statuses
            </SelectItem>
            <SelectItem value="pending" className="cursor-pointer">
              Pending
            </SelectItem>
            <SelectItem value="answered" className="cursor-pointer">
              Answered
            </SelectItem>
            <SelectItem value="hidden" className="cursor-pointer">
              Hidden
            </SelectItem>
            <SelectItem value="deleted" className="cursor-pointer">
              Deleted
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
