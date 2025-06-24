import instance from "@/lib/axios";

export const getMasterById = async (id: string) => {
  try {
    const response = await instance.get(`/api/masters/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateMasterProfile = async (
  city: string,
  bio: string,
  image: File | undefined
) => {
  try {
    const formData = new FormData();
    formData.append("city", city);
    formData.append("bio", bio);
    
    if (image) {
      formData.append("image", image);
    }

    const response = await instance.post(`/api/masters/profile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateMastersAvaliability = async (
  id: string,
  availability: string
) => {
  try {
    const response = await instance.patch(`/api/masters/availability`, {
      id,
      availability,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
