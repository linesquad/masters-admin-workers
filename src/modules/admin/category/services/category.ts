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

export const getCategories = async () => {
  try {
    const response = await instance.get("/api/categories?withJobCount=true");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCategory = async (id: string) => {
  try {
    const response = await instance.delete(`/api/categories/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateCategory = async (
  id: string,
  name: {
    en: string;
    ka: string;
    ru: string;
  }
) => {
  try {
    const response = await instance.put(`/api/categories/${id}`, { name });
    return response.data;
  } catch (error) {
    throw error;
  }
};
