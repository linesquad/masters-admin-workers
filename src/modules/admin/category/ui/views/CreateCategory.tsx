import { useCreateCategory } from "@/modules/admin/category/hooks/useCreateCategory";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ThreeLanguageInputs } from "@/components/ThreeLanguageInputs";
import { createCategorySchema } from "@/modules/admin/category/schema/categorySchema";
import type { CreateCategoryData } from "@/modules/admin/category/schema/categorySchema";
import { useCategories } from "@/modules/admin/category/hooks/useCategory";
import { CategoryCard } from "../components/category-card";
import { Plus } from "lucide-react";
import { CategorySkeleton } from "../components/category-skeleton";
import { useDeleteCategory } from "../../hooks/useDeleteCategory";
import { useUpdateCategory } from "../../hooks/useUpdateCategory";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

function CreateCategory() {
  const { mutate: createCategory, isPending } = useCreateCategory();
  const { data: categories, isLoading, isError } = useCategories();
  const { mutate: deleteCategory, isPending: isDeleting } = useDeleteCategory();
  const { mutate: updateCategory, isPending: isUpdating } = useUpdateCategory();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const isMobile = useIsMobile();

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
        setIsCreateOpen(false);
      },
    });
  };

  const handleDelete = (id: string) => {
    deleteCategory(id);
  };
  const handleUpdate = (
    id: string,
    name: {
      en: string;
      ka: string;
      ru: string;
    }
  ) => {
    updateCategory({ id, name });
  };
  const handleFormSubmit = () => {
    handleSubmit(onSubmit)();
  };

  
  if (isError) return <div>Error loading categories</div>;
  return (
    <div>
      <section className=" p-6 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold">Categories</h1>
          <button
            onClick={() => setIsCreateOpen(true)}
            className="group cursor-pointer relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-0.5 
            transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
          >
            <div
              className="relative rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 transition-all duration-300
             group-hover:from-blue-700 group-hover:to-purple-700"
            >
              <div className="flex items-center gap-2 text-white">
                <div className="rounded-full bg-white/20 p-1 transition-transform duration-300 group-hover:rotate-90">
                  <Plus className="h-4 w-4" />
                </div>
                <span className="font-semibold">Create Category</span>
              </div>
            </div>
          </button>
        </div>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">
              {categories?.data?.length || 0} active categories
            </span>
          </div>
        </div>

        <div className="w-full">
          <CategoryCard
            categories={categories}
            handleDelete={handleDelete}
            isDeleting={isDeleting}
            handleUpdate={handleUpdate}
            isUpdating={isUpdating}
            isLoading={isLoading}
          />
        </div>

        {isMobile ? (
          <Drawer open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DrawerContent className="px-4 pb-6">
              <DrawerHeader>
                <DrawerTitle>Create New Category</DrawerTitle>
              </DrawerHeader>
              <form onSubmit={handleSubmit(onSubmit)} className="px-4">
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
            </DrawerContent>
          </Drawer>
        ) : (
          <Sheet open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <SheetContent className="overflow-y-auto bg-white text-black">
              <SheetHeader>
                <SheetTitle>Create New Category</SheetTitle>
              </SheetHeader>
              <form onSubmit={handleSubmit(onSubmit)} className="px-4">
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
            </SheetContent>
          </Sheet>
        )}
      </section>
    </div>
  );
}

export default CreateCategory;
