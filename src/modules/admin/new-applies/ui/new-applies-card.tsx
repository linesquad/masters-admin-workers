import { ResponsiveModal } from "@/components/responsive-modal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dayjs from "dayjs";
import { Loader2, TrashIcon } from "lucide-react";
import { useState } from "react";
import { useDeleteNewApply } from "../hooks/use-delete-new-apply";

interface NewAppliesCardProps {
  id: string;
  fullName: string;
  phone: string;
  speciality: string;
  note: string;
  createdAt: string;
}

export function NewAppliesCard({
  id,
  fullName,
  phone,
  speciality,
  note,
  createdAt,
}: NewAppliesCardProps) {
  const [open, setOpen] = useState(false);
  const { mutate: deleteNewApply, isPending } = useDeleteNewApply();

  const handleDelete = () => {
    deleteNewApply(id);
    setOpen(false);
  };

  return (
    <Card className="mb-4 text-white bg-gray-800">
      <ResponsiveModal open={open} onOpenChange={setOpen}>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">New Apply</h1>
          <p className="text-sm text-muted-foreground">
            {dayjs(createdAt).format("DD/MM/YYYY HH:mm")}
          </p>
          <p className="text-sm text-muted-foreground">{note}</p>
        </div>
        <div className="flex justify-between">
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
              <TrashIcon className="w-4 h-4" />
            )}
          </Button>
        </div>
      </ResponsiveModal>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{fullName}</CardTitle>
            <CardDescription className="mt-1">
              {phone} • {speciality}
            </CardDescription>
          </div>
          <span className="text-sm text-muted-foreground">
            {dayjs(createdAt).format("DD/MM/YYYY HH:mm")}
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p className="text-sm">{note}</p>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          <TrashIcon className="w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
