import instance from "@/lib/axios";

export const createCategory = async (name: {
  en: string;
  ka: string;
  ru: string;
}) => {
  try {
    const response = await instance.post("/api/categories", { name });
    return response.data;
  } catch (error) {
    throw error;
  }
};
