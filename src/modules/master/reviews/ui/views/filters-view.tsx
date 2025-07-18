import { StatusFilter } from "../components/status-filter";

export const FiltersView = () => {
  return (
    <div className="py-8 flex justify-between items-center">
      <div className="flex gap-4">
        <StatusFilter />
      </div>
    </div>
  );
};
