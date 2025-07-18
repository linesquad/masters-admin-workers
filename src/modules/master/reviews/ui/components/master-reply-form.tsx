import { FormProvider, useForm } from "react-hook-form";
import { replySchema } from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useReplyReviewMaster } from "../../hooks/use-reply-review-master";

interface MasterReplyFormProps {
  reviewId: string;
}

export const MasterReplyForm = ({ reviewId }: MasterReplyFormProps) => {
  const { mutate: createMasterReply, isPending } = useReplyReviewMaster();
  const form = useForm<z.infer<typeof replySchema>>({
    resolver: zodResolver(replySchema),
    defaultValues: {
      reviewId,
      masterReply: "",
    },
  });

  const onSubmit = (data: z.infer<typeof replySchema>) => {
    createMasterReply(data);
    form.reset();
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="masterReply"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reply</FormLabel>
              <FormControl>
                <Textarea {...field} name="masterReply" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Adding..." : "Add Reply"}
        </Button>
      </form>
    </FormProvider>
  );
};
