import type { Reviews } from "../../types";

export function SingleMasterReviews({ reviews }: { reviews: Reviews }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Reviews</h2>
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="text-sm font-medium text-blue-600">Total Reviews</p>
            <p className="text-2xl font-bold text-blue-800">
              {reviews.statistics.total}
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <p className="text-sm font-medium text-green-600">Avg. Rating</p>
            <p className="text-2xl font-bold text-green-800">
              {reviews.statistics.averageRatings.overall.toFixed(1)}/5
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
            <p className="text-sm font-medium text-purple-600">Total Score</p>
            <p className="text-2xl font-bold text-purple-800">
              {reviews.statistics.totalScore}
            </p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
            <p className="text-sm font-medium text-amber-600">
              Normalized Score
            </p>
            <p className="text-2xl font-bold text-amber-800">
              {reviews.statistics.normalizedScore}
            </p>
          </div>
        </div>
        {reviews.recent.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Recent Reviews
            </h3>
            <div className="space-y-6">
              {reviews.recent.map((review) => (
                <div key={review.id} className="border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium text-gray-900">
                      {review.clientName}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">{review.comment}</p>
                  {review.hasReply && (
                    <div className="bg-gray-50 p-4 rounded-lg mt-3 border-l-4 border-blue-500">
                      <p className="font-medium text-sm text-blue-600 mb-2">
                        Master's reply:
                      </p>
                      <p className="text-gray-700 text-sm">
                        {review.masterReply}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
