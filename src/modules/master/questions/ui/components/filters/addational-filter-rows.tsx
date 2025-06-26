import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AddationalFilterRows({ filters, handleFilterChange }: { filters: any, handleFilterChange: (key: string, value: any) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 border-t border-gray-100">
      {/* Visibility Filter */}
      <div className="space-y-2">
        <label className="text-xs font-medium text-gray-700">Visibility</label>
        <Select
          value={
            filters.isPublic === undefined ? "all" : filters.isPublic.toString()
          }
          onValueChange={(value) =>
            handleFilterChange(
              "isPublic",
              value === "all" ? undefined : value === "true"
            )
          }
        >
          <SelectTrigger className="bg-white cursor-pointer h-9 text-sm">
            <SelectValue placeholder="All visibility" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="all" className="cursor-pointer">
              All visibility
            </SelectItem>
            <SelectItem value="true" className="cursor-pointer">
              Public only
            </SelectItem>
            <SelectItem value="false" className="cursor-pointer">
              Private only
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Include Answered */}
      <div className="space-y-2">
        <label className="text-xs font-medium text-gray-700">
          Include Answered
        </label>
        <Select
          value={filters.includeAnswered.toString()}
          onValueChange={(value) =>
            handleFilterChange("includeAnswered", value === "true")
          }
        >
          <SelectTrigger className="bg-white cursor-pointer h-9 text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="true" className="cursor-pointer">
              Yes
            </SelectItem>
            <SelectItem value="false" className="cursor-pointer">
              No
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Include Unanswered */}
      <div className="space-y-2">
        <label className="text-xs font-medium text-gray-700">
          Include Unanswered
        </label>
        <Select
          value={filters.includeUnanswered.toString()}
          onValueChange={(value) =>
            handleFilterChange("includeUnanswered", value === "true")
          }
        >
          <SelectTrigger className="bg-white cursor-pointer h-9 text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="true" className="cursor-pointer">
              Yes
            </SelectItem>
            <SelectItem value="false" className="cursor-pointer">
              No
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
