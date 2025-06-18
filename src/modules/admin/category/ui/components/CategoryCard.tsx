import type { Category } from "../../types/category";
import EmptyCategory from "./EmptyCategory";
import CategoryData from "./CategoryData";

function CategoryCard({
  categories,
  handleDelete,
  isDeleting,
}: {
  categories: { data: Category[] } | undefined;
  handleDelete: (id: string) => void;
  isDeleting: boolean;
}) {
  return (
    <div>
      {!categories?.data || categories.data.length === 0 ? (
        <EmptyCategory />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.data.map((category: Category) => (
            <CategoryData
              key={category.id}
              category={category}
              handleDelete={handleDelete}
              isDeleting={isDeleting}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryCard;
