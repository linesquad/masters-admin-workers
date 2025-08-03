import instance from "@/lib/axios";

export const getGmailSubscriptions = async (page: number, limit: number) => {
  const response = await instance.get("/api/home/gmail-users", {
    params: {
      page,
      limit,
    },
  });

  if (response.status !== 200) {
    throw new Error("Failed to fetch gmail subscriptions");
  }

  return response.data;
};

export const deleteGmailSubscription = async (id: string) => {
  const response = await instance.delete(`/api/home/gmail-users/${id}`);

  if (response.status !== 200) {
    throw new Error("Failed to delete gmail subscription");
  }

  return response.data;
};
