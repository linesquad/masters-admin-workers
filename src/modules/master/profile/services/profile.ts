import instance from "@/lib/axios";

export const getMasterById = async (id: string) => {
  const response = await instance.get(`/api/master/dashboard/${id}`);
  if (response.status === 200) {
    return response.data;
  }
  throw new Error("Failed to fetch master");
};

export const getMasterLeadStats = async (id: string) => {
  const response = await instance.get(
    `/api/master/dashboard/lead-stats/master?masterId=${id}`
  );
  if (response.status === 200) {
    return response.data;
  }

  throw new Error("Failed to fetch master lead stats");
};

export const updateMasterProfile = async (
  city: string,
  bio: string,
  image: File | undefined
) => {
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
  if (response.status === 200) {
    return response.data;
  }
  throw new Error("Failed to update master profile");
};

export const updateMastersAvaliability = async (
  id: string,
  availability: string
) => {
  const response = await instance.patch(`/api/masters/availability`, {
    id,
    availability,
  });
  if (response.status === 200) {
    return response.data;
  }
  throw new Error("Failed to update master availability");
};
