import { useCreateCategory } from "@/modules/admin/category/hooks/useCreateCategory";
import { redirect } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ThreeLanguageInputs } from "@/components/ThreeLanguageInputs";
import { createCategorySchema } from "@/modules/admin/category/schema/categorySchema";
import type { CreateCategoryData } from "@/modules/admin/category/schema/categorySchema";

export const Route = createFileRoute({
  component: RouteComponent,
  loader: async ({ context }: any) => {
    const role = await context.getUserRole().catch(() => null);
    if (role !== "admin") {
      throw redirect({ to: "/master" });
    }
    return { role };
  },
});

function RouteComponent() {
  const { mutate: createCategory, isPending } = useCreateCategory();

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

  return (
    <section className="max-w-md p-6">
      <h1 className="text-2xl font-bold mb-6">Create Category</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
    </section>
  );
}
