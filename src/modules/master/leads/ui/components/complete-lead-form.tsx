import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldValues } from "react-hook-form";
import { completeLeadSchema } from "@/modules/master/leads/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { z } from "zod";
import { Button } from "@/components/ui/button";
import { DottedSeparator } from "@/components/dotted-separator";

interface CompleteLeadFormProps {
  leadId: string;
  price: number;
  setPrice: (price: number) => void;
  mutate: (values: z.infer<typeof completeLeadSchema>) => void;
  onCancel: () => void;
}

export const CompleteLeadForm = ({
  leadId,
  price,
  setPrice,
  mutate,
  onCancel,
}: CompleteLeadFormProps) => {
  const form = useForm<z.infer<typeof completeLeadSchema>>({
    resolver: zodResolver(completeLeadSchema),
    defaultValues: {
      leadId,
      price,
    },
  });

  const onSubmit = (values: z.infer<typeof completeLeadSchema>) => {
    mutate(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="price"
          render={({ field }: { field: FieldValues }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  min={1}
                  placeholder="Enter price"
                  onChange={(e) => {
                    field.onChange(e);
                    setPrice(Number(e.target.value));
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DottedSeparator className="my-4" />
        <div className="space-y-2">
          <Button onClick={onCancel} type="button" className="w-full">
            Cancel
          </Button>
          <Button type="submit" className="w-full">
            Complete Lead
          </Button>
        </div>
      </form>
    </Form>
  );
};
