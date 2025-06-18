import { CheckCircle, Edit, Loader2, Trash2 } from "lucide-react";
import { useState } from "react";
import type { Category } from "../../types/category";
import Modal from "@/components/Modal";
import { ThreeLanguageInputs } from "@/components/ThreeLanguageInputs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCategorySchema } from "../../schema/categorySchema";
import type { CreateCategoryData } from "../../schema/categorySchema";

function CategoryData({
  category,
  handleDelete,
  isDeleting,
  handleUpdate,
  isUpdating,
}: {
  category: Category;
  handleDelete: (id: string) => void;
  isDeleting: boolean;
  handleUpdate: (
    id: string,
    name: {
      en: string;
      ka: string;
      ru: string;
    }
  ) => void;
  isUpdating: boolean;
}) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
    reset,
  } = useForm<CreateCategoryData>({
    resolver: zodResolver(createCategorySchema),
    defaultValues: {
      en: category.name.en,
      ka: category.name.ka,
      ru: category.name.ru,
    },
  });

  const onSubmit = (data: CreateCategoryData) => {
    handleUpdate(category.id, data);
    setIsEditModalOpen(false);
    reset();
  };

  const handleFormSubmit = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <div key={category.id} className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="relative bg-white rounded-lg p-3 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">
                {category.name.en.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">
                <CheckCircle className="w-2.5 h-2.5 cursor-pointer" />
                {category.jobCount} jobs
              </span>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <h3 className="font-bold text-sm text-gray-900 mb-1.5 group-hover:text-blue-600 transition-colors truncate">
            {category.name.en}
          </h3>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <div className="w-4 h-4 bg-green-100 rounded-md flex items-center justify-center">
                <span className="text-green-600 text-xs font-semibold">🇬🇪</span>
              </div>
              <span className="text-gray-600 font-medium truncate">
                {category.name.ka}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-4 h-4 bg-red-100 rounded-md flex items-center justify-center">
                <span className="text-red-600 text-xs font-semibold">🇷🇺</span>
              </div>
              <span className="text-gray-600 font-medium truncate">
                {category.name.ru}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => setIsEditModalOpen(true)}
            className="cursor-pointer flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium group/btn"
          >
            <Edit className="w-3 h-3 group-hover/btn:scale-110 transition-transform" />
            <span className="text-xs">Edit</span>
          </button>
          <button
            type="button"
            className="cursor-pointer flex items-center justify-center w-8 h-8 bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-lg transition-all duration-200 group/btn"
            onClick={() => handleDelete(category.id)}
            disabled={isDeleting}
          >
            {isDeleting ? (
              <Loader2 className="w-3 h-3 animate-spin" />
            ) : (
              <Trash2 className="w-3 h-3 group-hover/btn:scale-110 transition-transform" />
            )}
          </button>
        </div>
      </div>
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Category"
        size="md"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <ThreeLanguageInputs
            register={register}
            watch={watch}
            getValues={getValues}
            errors={errors}
            onSubmit={handleFormSubmit}
            isSubmitting={isUpdating}
            submitButtonText="Update Category"
            submittingText="Updating..."
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
      </Modal>
    </div>
  );
}

export default CategoryData;
