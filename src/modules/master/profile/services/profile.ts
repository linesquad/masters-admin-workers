import instance from "@/lib/axios";

export const getMasterById = async (id: string) => {
  try {
    const response = await instance.get(`/api/masters/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateMasterProfile = async (city: string, bio: string) => {
  try {
    const response = await instance.post(`/api/masters/profile`, {
      city,
      bio,
      imageUrl:
        "https://pbs.twimg.com/profile_images/1286778814304071682/eBv2xdwy_400x400.jpg",
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
