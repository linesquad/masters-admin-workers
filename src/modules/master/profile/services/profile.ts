import instance from "@/lib/axios";

export const getMasterById = async (id: string) => {
  try {
    const response = await instance.get(`/api/masters/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
