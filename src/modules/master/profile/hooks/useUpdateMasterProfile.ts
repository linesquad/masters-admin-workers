import { useMutation } from "@tanstack/react-query";
import { updateMasterProfile } from "../services/profile";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export const useUpdateMasterProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      city,
      bio,
      image,
    }: {
      city: string;
      bio: string;
      image: File | undefined;
    }) => updateMasterProfile(city, bio, image),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["master-profile"] });
      toast.success("Profile updated successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
};
