import { TrashIcon } from "lucide-react";
import type { ContactUs } from "../../types";
import { ResponsiveModal } from "@/components/responsive-modal";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useDeleteContactUs } from "../../hooks/use-delete-contact-us";

interface ContactUsCardProps {
  contact: ContactUs;
}

export function ContactUsCard({ contact }: ContactUsCardProps) {
  const [open, setOpen] = useState(false);
  const { mutate, isPending } = useDeleteContactUs();

  const handleDelete = () => {
    mutate(contact.id);
    setOpen(false);
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 bg-white">
      <ResponsiveModal open={open} onOpenChange={setOpen}>
        <div>
          <h3 className="font-medium text-lg ">
            Are you sure you want to delete this contact?
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {contact.name} {contact.surname}
          </p>
        </div>
        <div className="flex justify-between mt-8 gap-2">
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isPending}
          >
            {isPending ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </ResponsiveModal>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-lg dark:text-white">
            {contact.name} {contact.surname}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {contact.email}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 dark:text-gray-500">
            {new Date(contact.createdAt).toLocaleDateString()}
          </span>
          <button
            className="text-red-500 hover:text-red-700 transition-colors"
            onClick={() => setOpen(true)}
          >
            <TrashIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="mt-3">
        <h4 className="font-medium text-gray-700 dark:text-gray-300">
          {contact.subject}
        </h4>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          {contact.message}
        </p>
      </div>
    </div>
  );
}
