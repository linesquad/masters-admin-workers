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
import { useTranslation } from "react-i18next";

interface BillingReviewFormProps {
  billingId: string;
  onClose: () => void;
}

export const BillingReviewForm = ({
  billingId,
  onClose,
}: BillingReviewFormProps) => {
  const { t } = useTranslation();
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
                <FormLabel>{t("adminBilling.reviewModal.status")}</FormLabel>
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
                    <SelectItem value="approve">
                      {t("adminBilling.reviewModal.approve")}
                    </SelectItem>
                    <SelectItem value="reject">
                      {t("adminBilling.reviewModal.reject")}
                    </SelectItem>
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
                <FormLabel>{t("adminBilling.reviewModal.adminNote")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("adminBilling.reviewModal.enterAdminNote")}
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
              {t("adminBilling.reviewModal.cancel")}
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending
                ? t("adminBilling.reviewModal.reviewing")
                : t("adminBilling.reviewModal.submit")}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
