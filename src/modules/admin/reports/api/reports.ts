import instance from "@/lib/axios";

export const getReports = async (page: number, limit: number) => {
  const response = await instance.get("/api/reports", {
    params: {
      page,
      limit,
    },
  });

  if (response.status !== 200) {
    throw new Error("Failed to get reports");
  }

  return response.data;
};

export const deleteReport = async (id: string) => {
  const response = await instance.delete(`/api/reports/${id}`);

  if (response.status !== 200) {
    throw new Error("Failed to delete report");
  }

  return response.data;
};
