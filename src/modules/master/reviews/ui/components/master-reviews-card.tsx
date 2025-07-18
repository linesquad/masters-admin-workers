import type { Review } from "../../types";
import { StarRating } from "@/components/star-rating";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { MasterReplyForm } from "./master-reply-form";
import { ResponsiveModal } from "@/components/responsive-modal";
interface MasterReviewsCardProps {
  review: Review;
}

export const MasterReviewsCard = ({ review }: MasterReviewsCardProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Card className="w-full max-w-md mx-auto mb-4">
      <ResponsiveModal open={open} onOpenChange={setOpen}>
        <MasterReplyForm reviewId={review.id} />
      </ResponsiveModal>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-semibold">
              {review.client.fullName}
            </CardTitle>
            <p className="text-xs text-gray-500">{review.lead.jobTitle.en}</p>
          </div>
          <div className="text-xs text-gray-400">
            {new Date(review.createdAt).toLocaleDateString()}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-2 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col items-center bg-gray-50 rounded p-2">
            <span className="text-xs font-medium mb-1">Price</span>
            <StarRating value={Math.round(review.ratingPrice / 5)} />
            <span className="text-xs text-gray-500 mt-1">
              {review.ratingPrice}/25
            </span>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded p-2">
            <span className="text-xs font-medium mb-1">Quality</span>
            <StarRating value={Math.round(review.ratingQuality / 5)} />
            <span className="text-xs text-gray-500 mt-1">
              {review.ratingQuality}/25
            </span>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded p-2">
            <span className="text-xs font-medium mb-1">Punctuality</span>
            <StarRating value={Math.round(review.ratingPunctuality / 5)} />
            <span className="text-xs text-gray-500 mt-1">
              {review.ratingPunctuality}/25
            </span>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded p-2">
            <span className="text-xs font-medium mb-1">Experience</span>
            <StarRating value={Math.round(review.ratingExperience / 5)} />
            <span className="text-xs text-gray-500 mt-1">
              {review.ratingExperience}/25
            </span>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium mb-1">Comment</p>
          <p className="text-sm text-gray-700">{review.comment}</p>
        </div>

        {review.masterReply && (
          <div className="bg-gray-100 rounded p-2">
            <p className="text-xs font-medium mb-1">Your Reply</p>
            <p className="text-sm text-gray-700">{review.masterReply}</p>
          </div>
        )}

        <button
          onClick={handleOpen}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
        >
          {review.masterReply ? "Edit Reply" : "Add Reply"}
        </button>
      </CardContent>
    </Card>
  );
};
