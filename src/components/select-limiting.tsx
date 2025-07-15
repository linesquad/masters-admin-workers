import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "./ui/select";

interface SelectLimitingProps {
  limit: number;
  setLimit: (limit: number) => void;
}

export function SelectLimiting({ limit, setLimit }: SelectLimitingProps) {
  return (
    <Select
      value={limit.toString()}
      onValueChange={(value) => setLimit(Number(value))}
    >
      <SelectTrigger className="w-[100px] border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        <SelectValue placeholder="Select a limit" className="text-sm">
          {limit}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-white border border-gray-200 rounded-md shadow-lg">
        <SelectGroup>
          <SelectLabel>Limit</SelectLabel>
        </SelectGroup>
        <SelectItem
          value="5"
          className="text-sm hover:bg-gray-100 focus:bg-gray-100"
        >
          5
        </SelectItem>
        <SelectItem
          value="10"
          className="text-sm hover:bg-gray-100 focus:bg-gray-100"
        >
          10
        </SelectItem>
        <SelectItem
          value="15"
          className="text-sm hover:bg-gray-100 focus:bg-gray-100"
        >
          15
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
