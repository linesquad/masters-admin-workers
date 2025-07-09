import instance from "@/lib/axios";

export const getAllMasters = async (page: number, limit: number) => {
  const response = await instance.get(
    `/api/public/all?page=${page}&limit=${limit}`
  );

  if (response.status === 200) {
    return response.data;
  }

  return null;
};

export const getSingleMaster = async (id: string) => {
  const response = await instance.get(`/api/public/${id}`);

  if (response.status === 200) {
    return response.data;
  }

  return null;
};
