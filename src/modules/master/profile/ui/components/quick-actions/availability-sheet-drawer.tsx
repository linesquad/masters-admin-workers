import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DrawerSheet } from "@/components/DrawerSheet";
import { useUpdateAvailability } from "../../../hooks/useUpdateAvailability";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { availabilityOptions } from "@/lib/master-dashboard";
import { useTranslation } from "react-i18next";

export function AvailabilitySheetDrawer({ id }: { id: string }) {
  const { t } = useTranslation();
  const { mutate: updateAvailability } = useUpdateAvailability();
  const [isManageScheduleOpen, setIsManageScheduleOpen] = useState(false);
  const [selectedAvailability, setSelectedAvailability] = useState("now");

  const handleAvailabilityChange = useCallback(
    (value: string) => {
      setSelectedAvailability(value);
      updateAvailability({
        id: id,
        availability: value,
      });
    },
    [id, updateAvailability]
  );

  const ManageScheduleTrigger = (
    <Button className="w-full justify-start cursor-pointer" variant="outline">
      <Calendar className="w-4 h-4 mr-3" />
      {t("masterProfile.manageSchedule")}
    </Button>
  );
  return (
    <DrawerSheet
      trigger={ManageScheduleTrigger}
      title="Manage Schedule"
      description="Update your availability status to let clients know when you're ready for new projects"
      open={isManageScheduleOpen}
      onOpenChange={setIsManageScheduleOpen}
    >
      <ScrollArea className="h-[70vh] sm:flex-1 sm:h-0">
        <div className="px-6 py-6 space-y-8">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Update Availability
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Let clients know when you're available for new projects
            </p>
          </div>

          <RadioGroup
            value={selectedAvailability}
            onValueChange={handleAvailabilityChange}
            className="space-y-6"
          >
            {availabilityOptions.map((option) => (
              <div
                key={option.value}
                className="flex items-start space-x-4 cursor-pointer p-4 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <RadioGroupItem
                  value={option.value}
                  id={option.value}
                  className="mt-1 cursor-pointer"
                />
                <label
                  htmlFor={option.value}
                  className="flex-1 cursor-pointer space-y-2"
                >
                  <div className="text-base font-medium text-slate-900">
                    {option.label}
                  </div>
                  <div className="text-sm text-slate-600 leading-relaxed">
                    {option.description}
                  </div>
                </label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </ScrollArea>
    </DrawerSheet>
  );
}
