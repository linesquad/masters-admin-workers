import instance from "@/lib/axios";

export const getAllCities = async () => {
  try {
    const response = await instance.get("/api/masters/cities");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCityPartById = async (id: string) => {
  try {
    const response = await instance.get(`/api/masters/cities/${id}/parts`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const unlockCity = async (
  locationId: string,
  cityId: string,
  cityPartId: string
) => {
  try {
    const response = await instance.post(
      "/api/masters/master/unlock-location",
      {
        locationId,
        cityId,
        cityPartId,
      }
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};
