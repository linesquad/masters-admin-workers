import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { adminUpdateStatusSchema } from "../../schema";
import { ReviewStatus } from "../../api/reviews";
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FormItem } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type z from "zod";

interface UpdateStatusFormProps {
  onCancel: () => void;
  updateStatus: (data: z.infer<typeof adminUpdateStatusSchema>) => void;
  isPending: boolean;
  reviewId: string;
}

export const UpdateStatusForm = ({
  onCancel,
  updateStatus,
  isPending,
  reviewId,
}: UpdateStatusFormProps) => {
  console.log(reviewId);
  const form = useForm<z.infer<typeof adminUpdateStatusSchema>>({
    resolver: zodResolver(adminUpdateStatusSchema),
    defaultValues: {
      reviewId,
      status: ReviewStatus.APPROVED,
      adminNote: "",
    },
  });

  const onSubmit = (data: z.infer<typeof adminUpdateStatusSchema>) => {
    updateStatus(data);
    onCancel();
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Update Status</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200">
                    <SelectValue
                      placeholder="Select status"
                      className="text-gray-700"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg mt-1">
                    {Object.values(ReviewStatus).map((status) => (
                      <SelectItem
                        key={status}
                        value={status}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 rounded-md transition-colors duration-200"
                      >
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="adminNote"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Admin Note</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter admin note" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Updating..." : "Update Status"}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
