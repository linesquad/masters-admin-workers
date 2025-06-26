import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SortOrderQA({
  filters,
  handleFilterChange,
}: {
  filters: any;
  handleFilterChange: (key: string, value: any) => void;
}) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full"></div>
        Sort Order
      </label>
      <Select
        value={filters.sortOrder}
        onValueChange={(value) => handleFilterChange("sortOrder", value)}
      >
        <SelectTrigger className="bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200 hover:border-indigo-300 cursor-pointer h-9 rounded-lg transition-all duration-200 text-sm">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="desc" className="cursor-pointer">
            Newest First
          </SelectItem>
          <SelectItem value="asc" className="cursor-pointer">
            Oldest First
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
