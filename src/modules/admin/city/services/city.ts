import instance from "@/lib/axios";

export const createCity = async (name: string, image: File | undefined) => {
  try {
    const formData = new FormData();
    formData.append("name", name);

    if (image) {
      formData.append("image", image);
    }

    const response = await instance.post("/api/categories/cities", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteCity = async (id: string) => {
  try {
    const response = await instance.delete(`/api/categories/cities/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createCityPart = async (
  cityId: string,
  name: string,
  unlockCost: number,
  lng: number | undefined,
  lat: number | undefined
) => {
  try {
    const response = await instance.post(`/api/categories/city-parts`, {
      cityId,
      name,
      unlockCost,
      lng,
      lat,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
