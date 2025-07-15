import type { Review } from "../../types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import { ReviewStatus } from "../../types";
import { useAdminReviews } from "../../hooks/use-admin-reviews";
import { ResponsiveModal } from "@/components/responsive-modal";
import { UpdateStatusForm } from "./update-status-form";
import { useUpdateStatusByAdmin } from "../../hooks/use-update-status-by-admin";

interface ReviewsCardProps {
  review: Review;
}

export const ReviewsCard = ({ review }: ReviewsCardProps) => {
  const { updateStatus, isPending } = useUpdateStatusByAdmin();
  const { open, setOpen } = useAdminReviews();
  return (
    <Card className="mb-4">
      <ResponsiveModal open={open} onOpenChange={setOpen}>
        <UpdateStatusForm
          onCancel={() => setOpen(false)}
          updateStatus={updateStatus}
          isPending={isPending}
          reviewId={review.id}
        />
      </ResponsiveModal>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar className="w-10 h-10 bg-black text-white">
          <AvatarFallback className="text-white">
            {review.client?.fullName
              ? review.client.fullName
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")
                  .toUpperCase()
              : "?"}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <CardTitle className="text-base font-semibold">
            {review.client?.fullName || "Unknown Client"}
          </CardTitle>
          <CardDescription className="text-xs">
            {dayjs(review.createdAt).format("LLL")}
          </CardDescription>
        </div>
        <Badge variant="outline" className="capitalize">
          {review.status}
        </Badge>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-yellow-500 font-bold text-lg">
            {review.averageRating.toFixed(1)}
          </span>
          <span className="text-xs text-muted-foreground">/ 25</span>
          <span className="ml-2 text-xs text-muted-foreground">
            Normalized: {review.normalizedRating}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs mb-2">
          <div>
            <span className="font-medium">Price:</span> {review.ratingPrice}
          </div>
          <div>
            <span className="font-medium">Quality:</span> {review.ratingQuality}
          </div>
          <div>
            <span className="font-medium">Punctuality:</span>{" "}
            {review.ratingPunctuality}
          </div>
          <div>
            <span className="font-medium">Experience:</span>{" "}
            {review.ratingExperience}
          </div>
        </div>
        <div className="mb-2">
          <span className="font-medium">Comment:</span>
          <div className="text-sm mt-1">
            {review.comment || (
              <span className="italic text-muted-foreground">No comment</span>
            )}
          </div>
        </div>
        {review.masterReply && (
          <div className="mt-2 border-t pt-2">
            <span className="font-medium">Master Reply:</span>
            <div className="text-sm mt-1">{review.masterReply}</div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-2 text-xs text-muted-foreground">
        <div className="flex justify-between w-full">
          <span>Review ID: {review.id.slice(0, 8)}...</span>
          <span>Updated: {dayjs(review.updatedAt).format("DD/MM/YYYY")}</span>
        </div>
        <div className="flex gap-2 w-full justify-end">
          {review.status !== ReviewStatus.APPROVED && (
            <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
              Approve
            </Button>
          )}
          {review.status !== ReviewStatus.REJECTED && (
            <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
              Reject
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
