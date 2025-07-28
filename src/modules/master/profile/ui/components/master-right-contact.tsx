import { Calendar, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
export function MasterRightContact({
  phone,
  email,
  createdAt,
}: {
  phone: string;
  email: string;
  createdAt: string;
}) {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
      <h2 className="text-xl font-bold text-slate-900 mb-4">
        Contact Information
      </h2>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Phone className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-slate-600">{t("masterProfile.phone")}</p>
            <p className="font-medium text-slate-900">
              {phone || "No phone provided"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <Mail className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-slate-600">{t("masterProfile.email")}</p>
            <p className="font-medium text-slate-900">
              {email || "No email provided"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <Calendar className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-slate-600">
              {t("masterProfile.memberSince")}
            </p>
            <p className="font-medium text-slate-900">
              {new Date(createdAt).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
