import instance from "@/lib/axios";

export const getUnlockedMasterCities = async () => {
  try {
    const response = await instance.get("/api/masters/locations/unlocked");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const removeUnlockedMasterCity = async (cityPartId: string) => {
  try {
    const response = await instance.delete(
      `/api/masters/me/locations/${cityPartId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
