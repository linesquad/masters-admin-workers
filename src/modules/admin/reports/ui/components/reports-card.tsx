interface ReportsCardProps {
  id: string;
  title: string;
  phone: string;
  note: string | null;
  createdAt: string;
}

import dayjs from "dayjs";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Trash2Icon } from "lucide-react";
import { ResponsiveModal } from "@/components/responsive-modal";
import { useState } from "react";
import { useDeleteReport } from "../../hooks/use-delete-report";

export function ReportsCard({
  id,
  title,
  phone,
  note,
  createdAt,
}: ReportsCardProps) {
  const [open, setOpen] = useState(false);
  const { mutate: deleteReport, isPending } = useDeleteReport();

  const handleDelete = () => {
    deleteReport(id);
    setOpen(false);
  };

  return (
    <Card className="mb-4 text-white bg-gray-800">
      <ResponsiveModal open={open} onOpenChange={setOpen}>
        <div className="flex flex-col gap-4 p-4">
          <h1 className="text-2xl font-bold">Report</h1>
          <p className="text-sm text-muted-foreground">{note}</p>
        </div>
        <div className="flex justify-between p-4">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isPending}
          >
            {isPending ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              "Delete"
            )}
          </Button>
        </div>
      </ResponsiveModal>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="mt-1">
              <a href={`tel:${phone}`} className="text-blue-500">
                {phone}
              </a>
            </CardDescription>
          </div>
          <span className="text-sm text-muted-foreground">
            {dayjs(createdAt).format("DD/MM/YYYY HH:mm")}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{note}</p>
      </CardContent>
      <div className="flex justify-end p-4">
        <Button variant="destructive" size="icon" onClick={() => setOpen(true)}>
          <Trash2Icon className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
}
