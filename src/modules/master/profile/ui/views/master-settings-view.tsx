import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateMasterProfile } from "@/modules/master/profile/hooks/useUpdateMasterProfile";
import { useMasterProfileById } from "@/modules/master/profile/hooks/useMasterProfileById";
import {
  profileSettingsSchema,
  type ProfileSettingsData,
} from "@/modules/master/profile/schema/settings";
import { SettingsButtons } from "../components/settings/settings-buttons";
import { SettingsFormInputs } from "../components/settings/settings-form-inputs";
import { SettingsHeader } from "../components/settings/settings-header";
import { SettingsSkeleton } from "../components/settings/settings-skeleton";

export function MasterSettingsView({ id }: { id: string }) {
  const { data, isLoading } = useMasterProfileById(id);
  const { mutate: updateProfile, isPending: isUpdating } =
    useUpdateMasterProfile();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProfileSettingsData>({
    resolver: zodResolver(profileSettingsSchema),
    defaultValues: {
      bio: data?.data?.bio || "",
      city: data?.data?.city || "",
    },
  });

  const onSubmit = async (formData: ProfileSettingsData) => {
    updateProfile({
      city: formData.city,
      bio: formData.bio || "",
    });
  };

  if (isLoading) return <SettingsSkeleton />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <SettingsHeader
          title="Profile Settings"
          description="Update your profile information"
        />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <SettingsFormInputs
            register={register}
            errors={errors}
            watch={watch}
          />
          <SettingsButtons isUpdating={isUpdating} isLoading={isLoading} />
        </form>
      </div>
    </div>
  );
}
