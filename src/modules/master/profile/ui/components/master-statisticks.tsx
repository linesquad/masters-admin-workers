import { Briefcase, DollarSign, Star, Users, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";
export function MasterStatisticks({
  completedJobs,
  totalReviews,
  averageRating,
  totalEarnings,
  points,
}: {
  completedJobs: number;
  totalReviews: number;
  averageRating: number;
  totalEarnings: number;
  points: number;
}) {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow cursor-pointer">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-600 text-sm font-medium">
              {t("masterProfile.completedJobs")}
            </p>
            <p className="text-2xl font-bold text-slate-900">
              {completedJobs || 0}
            </p>
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-lg  items-center justify-center hidden min-[400px]:flex">
            <Briefcase className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow cursor-pointer">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-600 text-sm font-medium">
              {t("masterProfile.totalReviews")}
            </p>
            <p className="text-2xl font-bold text-slate-900">
              {totalReviews || 0}
            </p>
          </div>
          <div className="w-12 h-12 bg-yellow-100 rounded-lg  items-center justify-center hidden min-[400px]:flex">
            <Users className="w-6 h-6 text-yellow-600" />
          </div>
        </div>
        {averageRating > 0 && (
          <div className="flex items-center gap-1 mt-2">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-slate-600 text-sm">{averageRating}/25</span>
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow cursor-pointer">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-600 text-sm font-medium">Total Earnings</p>
            <p className="text-2xl font-bold text-slate-900">
              ₾{(totalEarnings || 0).toLocaleString()}
            </p>
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-lg  items-center justify-center hidden min-[400px]:flex">
            <DollarSign className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow cursor-pointer">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-600 text-sm font-medium">
              {t("masterProfile.points")}
            </p>
            <p className="text-2xl font-bold text-slate-900">{points || 0}</p>
          </div>
          <div className="w-12 h-12 bg-purple-100 rounded-lg   items-center justify-center hidden min-[400px]:flex">
            <Trophy className="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
