import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { masterProofSchema, type MasterBillingInput } from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUploadProof } from "../../hooks/use-upload-proof";
import { Textarea } from "@/components/ui/textarea";
import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ImageIcon } from "lucide-react";
import { useRef } from "react";

export const BillingProofForm = ({
  billingId,
  onClose,
}: {
  billingId: string;
  onClose: () => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutate: uploadProof, isPending } = useUploadProof();
  const form = useForm<MasterBillingInput>({
    resolver: zodResolver(masterProofSchema),
    defaultValues: {
      billingLogId: billingId,
      proofUrl: "",
      proofNote: "",
    },
  });

  const onSubmit = (values: MasterBillingInput) => {
    const formData = new FormData();
    formData.append("billingLogId", values.billingLogId);
    formData.append("proofNote", values.proofNote || "");

    if (values.proofUrl instanceof File) {
      formData.append("image", values.proofUrl);
    }
    uploadProof(formData as unknown as MasterBillingInput);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("proofUrl", file);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="proofNote"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Proof Note</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter proof note"
                  {...field}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DottedSeparator />
        <FormField
          control={form.control}
          name="proofUrl"
          render={({ field }) => (
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center gap-x-5">
                {field.value ? (
                  <div className="size-[72px] relative rounded-md overflow-hidden">
                    <img
                      src={
                        field.value instanceof File
                          ? URL.createObjectURL(field.value)
                          : field.value
                      }
                      alt="Project Logo"
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : (
                  <Avatar className="size-[72px]">
                    <AvatarFallback>
                      <ImageIcon className="size-[36px] text-neutral-400" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div className="flex flex-col">
                  <p className="text-sm">Project Icon</p>
                  <p className="text-sm text-muted-foreground">
                    JPG, PNG, SVG or JPEG, max 1mb
                  </p>
                  <input
                    type="file"
                    className="hidden"
                    accept=".jpg, .png, .jpeg, .svg"
                    ref={inputRef}
                    disabled={isPending}
                    onChange={handleImageChange}
                  />
                  {field.value ? (
                    <Button
                      type="button"
                      disabled={isPending}
                      variant={"destructive"}
                      size={"sm"}
                      className="w-fit mt-2"
                      onClick={() => {
                        field.onChange(null);
                        if (inputRef.current) {
                          inputRef.current.value = "";
                        }
                      }}
                    >
                      Remove Image
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      disabled={isPending}
                      variant={"outline"}
                      size={"sm"}
                      className="w-fit mt-2"
                      onClick={() => inputRef.current?.click()}
                    >
                      Upload Image
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        />
        <div className="flex flex-col w-full md:w-auto gap-y-4 md:flex-row items-center justify-between">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={isPending}>
            Upload Proof
          </Button>
        </div>
      </form>
    </Form>
  );
};
