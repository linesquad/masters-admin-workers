import instance from "@/lib/axios";

export const getNewApplies = async (page: number, limit: number) => {
  const response = await instance.get("/api/new-master-applies", {
    params: {
      page,
      limit,
    },
  });

  if (response.status !== 200) {
    throw new Error("Failed to fetch new applies");
  }

  return response.data;
};

export const deleteNewApply = async (id: string) => {
  const response = await instance.delete(`/api/new-master-applies/${id}`);

  if (response.status !== 200) {
    throw new Error("Failed to delete new apply");
  }

  return response.data;
};
