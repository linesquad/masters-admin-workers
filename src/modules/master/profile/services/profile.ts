import instance from "@/lib/axios";

export const getMasterById = async (id: string) => {
  try {
    const response = await instance.get(`/api/masters/${id}`);
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
