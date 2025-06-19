import type { Category } from "../../types/category";
import { EmptyCategory } from "./empty-category";
import { CategoryData } from "./category-data";
import { CategorySkeleton } from "./category-skeleton";

export function CategoryCard({
  categories,
  handleDelete,
  isDeleting,
  handleUpdate,
  isUpdating,
  isLoading,
}: {
  categories: { data: Category[] } | undefined;
  handleDelete: (id: string) => void;
  isDeleting: boolean;
  handleUpdate: (id: string, name: {
    en: string;
    ka: string;
    ru: string;
  }) => void;
  isUpdating: boolean;
  isLoading: boolean;
}) {
  if (isLoading) return <CategorySkeleton />;
  return (
    <div>
      {!categories?.data || categories.data.length === 0 ? (
        <EmptyCategory />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {categories.data.map((category: Category) => (
            <CategoryData
              key={category.id}
              category={category}
              handleDelete={handleDelete}
              isDeleting={isDeleting}
              handleUpdate={handleUpdate}
              isUpdating={isUpdating}
            />
          ))}
        </div>
      )}
    </div>
  );
}


