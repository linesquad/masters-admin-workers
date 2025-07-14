import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";
import { useEffect, useState } from "react";

interface MasterSearchFilterProps {
  search: string;
  setSearch: (search: string) => void;
}

export function MasterSearchFilter({
  search,
  setSearch,
}: MasterSearchFilterProps) {
  const [input, setInput] = useState(search);
  const debouncedSearch = useDebounce(input, 2000);

  useEffect(() => {
    setSearch(debouncedSearch);
  }, [debouncedSearch, setSearch]);

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Search lead by full name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
}
