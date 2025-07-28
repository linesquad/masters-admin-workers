import { Button } from "@/components/ui/button";
import { Loader, Save } from "lucide-react";
import { useTranslation } from "react-i18next";

export const SettingsButtons = ({ isUpdating }: { isUpdating: boolean }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-end">
        <Button
          type="submit"
          disabled={isUpdating}
          className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center gap-2 cursor-pointer disabled:cursor-not-allowed"
        >
          {isUpdating ? (
            <>
              <div className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <Loader className="size-4 animate-spin" />
            </>
          ) : (
            <>
              <Save className="size-4" />
              {t("profileSettings.saveChanges")}
            </>
          )}
        </Button>
      </div>
    </div>
  );
};
