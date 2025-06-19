import instance from "@/lib/axios";

export const getJobsByCategoryId = async (categoryId: string) => {
  try {
    const response = await instance.get(`/api/categories/${categoryId}/jobs`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
