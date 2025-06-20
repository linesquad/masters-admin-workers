import { redirect } from "@tanstack/react-router";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { MapPin, FileText, Settings, Save } from "lucide-react";

// // Simplified profile settings schema - only bio and city
// const profileSettingsSchema = z.object({
//   bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
//   city: z.string().min(1, "City is required").max(100, "City name is too long"),
// });

// type ProfileSettingsData = z.infer<typeof profileSettingsSchema>;

export const Route = createFileRoute({
  component: RouteComponent,
  loader: async ({ context }) => {
    const user = await context.getUser();
    if (user.role !== "master") {
      throw redirect({ to: "/login" });
    }
    return { user };
  },
});

function RouteComponent() {
  return <h1>Master Profile Settings</h1>;
  // const { user } = Route.useLoaderData();

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors, isSubmitting },
  // } = useForm<ProfileSettingsData>({
  //   resolver: zodResolver(profileSettingsSchema),
  //   defaultValues: {
  //     bio: "",
  //     city: "",
  //   },
  // });

  // const onSubmit = async (data: ProfileSettingsData) => {
  //   // Here you would implement the actual form submission
  //   console.log("Profile settings data:", data);
  //   // Simulate API call
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  // };

  // return (
  //   <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-6">
  //     <div className="max-w-3xl mx-auto space-y-8">
  //       {/* Header */}
  //       <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
  //         <div className="h-32 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative">
  //           <div className="absolute inset-0 bg-black/20"></div>
  //           <div className="absolute bottom-4 left-6 text-white">
  //             <div className="flex items-center gap-3">
  //               <Settings className="size-8" />
  //               <div>
  //                 <h1 className="text-2xl font-bold">Profile Settings</h1>
  //                 <p className="text-blue-100">
  //                   Update your profile information
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Main Form */}
  //       <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
  //         {/* City Information */}
  //         <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
  //           <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
  //             <MapPin className="size-5 text-blue-600" />
  //             Location
  //           </h2>
  //           <div className="space-y-2">
  //             <label className="block text-sm font-medium text-slate-700 cursor-pointer">
  //               City
  //             </label>
  //             <div className="relative">
  //               <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 size-4 pointer-events-none" />
  //               <Input
  //                 placeholder="Enter your city"
  //                 className="pl-10 focus-visible:border-blue-500 focus-visible:ring-blue-500/20 cursor-text"
  //                 {...register("city")}
  //               />
  //             </div>
  //             {errors.city && (
  //               <p className="text-sm text-red-600">{errors.city.message}</p>
  //             )}
  //           </div>
  //         </div>

  //         {/* Bio Section */}
  //         <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
  //           <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
  //             <FileText className="size-5 text-blue-600" />
  //             About Me
  //           </h2>
  //           <div className="space-y-2">
  //             <label className="block text-sm font-medium text-slate-700 cursor-pointer">
  //               Professional Bio
  //             </label>
  //             <Textarea
  //               placeholder="Tell potential clients about yourself, your experience, and what makes you unique..."
  //               className="min-h-32 focus-visible:border-blue-500 focus-visible:ring-blue-500/20 cursor-text resize-none"
  //               {...register("bio")}
  //             />
  //             {errors.bio && (
  //               <p className="text-sm text-red-600">{errors.bio.message}</p>
  //             )}
  //             <p className="text-xs text-slate-500">
  //               {watch("bio")?.length || 0}/500 characters
  //             </p>
  //           </div>
  //         </div>

  //         {/* Action Buttons */}
  //         <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
  //           <div className="flex flex-col sm:flex-row gap-4 justify-end">
  //             <Button
  //               type="button"
  //               variant="outline"
  //               className="px-8 py-2 border-slate-300 text-slate-700 hover:bg-slate-50 cursor-pointer"
  //               onClick={() => window.history.back()}
  //             >
  //               Cancel
  //             </Button>
  //             <Button
  //               type="submit"
  //               disabled={isSubmitting}
  //               className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center gap-2 cursor-pointer disabled:cursor-not-allowed"
  //             >
  //               {isSubmitting ? (
  //                 <>
  //                   <div className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
  //                   Saving...
  //                 </>
  //               ) : (
  //                 <>
  //                   <Save className="size-4" />
  //                   Save Changes
  //                 </>
  //               )}
  //             </Button>
  //           </div>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );
}
