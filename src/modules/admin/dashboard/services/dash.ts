import instance from "@/lib/axios";

export const getAdminDashboard = async () => {
  try {
    const response = await instance.get("/api/admin/stats/dashboard");
    return response.data;
  } catch (error) {
    throw error;
  }
};
