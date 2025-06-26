import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SortByFilterQA({
  filters,
  handleFilterChange,
}: {
  filters: any;
  handleFilterChange: (key: string, value: any) => void;
}) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
        Sort By
      </label>
      <Select
        value={filters.sortBy}
        onValueChange={(value) => handleFilterChange("sortBy", value)}
      >
        <SelectTrigger className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 hover:border-purple-300 cursor-pointer h-9 rounded-lg transition-all duration-200 text-sm">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="createdAt" className="cursor-pointer">
            Created Date
          </SelectItem>
          <SelectItem value="answeredAt" className="cursor-pointer">
            Answered Date
          </SelectItem>
          <SelectItem value="viewCount" className="cursor-pointer">
            View Count
          </SelectItem>
          <SelectItem value="helpfulCount" className="cursor-pointer">
            Helpful Count
          </SelectItem>
          <SelectItem value="priority" className="cursor-pointer">
            Priority
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
