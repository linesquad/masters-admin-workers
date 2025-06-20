import { Award, Clock, MapPin, Star } from "lucide-react";

export function MasterBasicInfo({
  fullName,
  city,
  totalReviews,
  averageRating,
  availability,
}: {
  fullName: string;
  city: string;
  totalReviews: number;
  averageRating: number;
  availability: string;
}) {
  return (
    <div className="space-y-2 mt-4 md:mt-0">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold text-white">
          {fullName || "Master User"}
        </h1>
        <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
          <Award className="w-4 h-4 text-yellow-600" />
          <span className="text-sm font-medium text-yellow-700">Verified</span>
        </div>
      </div>

      <div className="flex items-center gap-4 text-slate-600">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span className="capitalize">{city}</span>
        </div>
        {totalReviews > 0 ? (
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{averageRating}</span>
            <span className="text-sm">({totalReviews} reviews)</span>
          </div>
        ) : (
          <span className="text-sm text-slate-500">No reviews yet</span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-green-600" />
        <span className="text-green-600 font-medium capitalize">
          Available {availability}
        </span>
      </div>
    </div>
  );
}
