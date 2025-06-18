import { useCreateCategory } from "@/modules/admin/category/hooks/useCreateCategory";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ThreeLanguageInputs } from "@/components/ThreeLanguageInputs";
import { createCategorySchema } from "@/modules/admin/category/schema/categorySchema";
import type { CreateCategoryData } from "@/modules/admin/category/schema/categorySchema";
import { useCategories } from "@/modules/admin/category/hooks/useCategory";
import CategoryCard from "../components/CategoryCard";
import CategorySkeleton from "../components/CategorySkeleton";
function CreateCategory() {
  const { mutate: createCategory, isPending } = useCreateCategory();
  const { data: categories, isLoading, isError } = useCategories();
  console.log(categories);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
    reset,
  } = useForm<CreateCategoryData>({
    resolver: zodResolver(createCategorySchema),
  });

  const onSubmit = (data: CreateCategoryData) => {
    createCategory(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  const handleFormSubmit = () => {
    handleSubmit(onSubmit)();
  };

  if (isLoading) return <CategorySkeleton />;
  if (isError) return <div>Error loading categories</div>;
  return (
    <div>
      <section className=" p-6 w-full">
        <h1 className="text-2xl font-bold mb-6">Create Category</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md">
          <ThreeLanguageInputs
            register={register}
            watch={watch}
            getValues={getValues}
            errors={errors}
            onSubmit={handleFormSubmit}
            isSubmitting={isPending}
            submitButtonText="Create Category"
            submittingText="Creating..."
            labels={{
              en: "English Name",
              ka: "Georgian Name",
              ru: "Russian Name",
            }}
            placeholders={{
              en: "Category name in English",
              ka: "Category name in Georgian",
              ru: "Category name in Russian",
            }}
          />
        </form>
        <div className="mt-12 w-full">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
                <p className="text-gray-500 text-sm">
                  Manage your job categories
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                {categories?.data?.length || 0} active
              </span>
            </div>
          </div>

          <CategoryCard categories={categories} />
        </div>
      </section>
    </div>
  );
}

export default CreateCategory;
