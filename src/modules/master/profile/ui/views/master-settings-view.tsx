import { useState, useRef } from "react";
import { useUpdateMasterProfile } from "@/modules/master/profile/hooks/useUpdateMasterProfile";
import { SettingsButtons } from "../components/settings/settings-buttons";
import { SettingsFormInputs } from "../components/settings/settings-form-inputs";
import { SettingsHeader } from "../components/settings/settings-header";
import { useTranslation } from "react-i18next";

export function MasterSettingsView() {
  const { t } = useTranslation();
  const { mutate: updateProfile, isPending: isUpdating } =
    useUpdateMasterProfile();

  const formRef = useRef<HTMLFormElement>(null);
  const [resetTrigger, setResetTrigger] = useState(0);
  const [errors, setErrors] = useState<{
    city?: string;
    bio?: string;
    image?: string;
  }>({});

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
    setErrors({});
    setResetTrigger((prev) => prev + 1);
  };

  const validateForm = (formData: FormData) => {
    const newErrors: typeof errors = {};

    const city = formData.get("city") as string;
    const bio = formData.get("bio") as string;

    if (!city || city.trim().length === 0) {
      newErrors.city = "City is required";
    } else if (city.length > 100) {
      newErrors.city = "City name is too long";
    }

    if (bio && bio.length > 500) {
      newErrors.bio = "Bio must be less than 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    if (!validateForm(formData)) {
      return;
    }

    const city = formData.get("city") as string;
    const bio = (formData.get("bio") as string) || "";
    const imageFile = formData.get("image") as File | null;

    // Only include the image if a file was actually selected
    const image = imageFile && imageFile.size > 0 ? imageFile : undefined;

    updateProfile(
      {
        city,
        bio,
        image,
      },
      {
        onSuccess: () => {
          resetForm();
        },
      }
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <SettingsHeader
          title={t("profileSettings.profileSettings")}
          description={t("profileSettings.updateYourOrifileInformation")}
        />
        <form ref={formRef} onSubmit={onSubmit} className="space-y-8">
          <SettingsFormInputs errors={errors} resetTrigger={resetTrigger} />
          <SettingsButtons isUpdating={isUpdating} />
        </form>
      </div>
    </div>
  );
}
