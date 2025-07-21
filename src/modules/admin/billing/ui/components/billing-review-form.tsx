import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reviewBillingSchema, type ReviewBillingSchema } from "../../schemas";
import type z from "zod";
import { useReviewBilling } from "../../hooks/use-review-billing";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";

interface BillingReviewFormProps {
  billingId: string;
  onClose: () => void;
}

export const BillingReviewForm = ({
  billingId,
  onClose,
}: BillingReviewFormProps) => {
  const { mutate, isPending } = useReviewBilling();
  const form = useForm<ReviewBillingSchema>({
    resolver: zodResolver(reviewBillingSchema),
    defaultValues: {
      billingId,
      status: "approve",
      adminNote: "",
    },
  });

  const onSubmit = (values: z.infer<typeof reviewBillingSchema>) => {
    mutate({ ...values, billingId: billingId });
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                  </FormControl>
                  <FormMessage />
                  <SelectContent className="bg-white">
                    <SelectItem value="approve">Approve</SelectItem>
                    <SelectItem value="reject">Reject</SelectItem>
                  </SelectContent>
                </Select>
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
                  <Input
                    placeholder="Enter admin note"
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DottedSeparator />
          <div className="flex flex-col w-full md:w-auto gap-y-4 md:flex-row items-center justify-between">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Reviewing..." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
