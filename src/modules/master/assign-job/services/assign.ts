import instance from "@/lib/axios";

export const assignJob = async (
  jobId: string,
  priceMin: number,
  priceMax: number,
  durationMinutes?: number,
  note?: string,
  isActive: boolean = true
) => {
  try {
    const response = await instance.post("/api/masters/me/jobs", {
      jobId,
      priceMin,
      priceMax,
      durationMinutes,
      note,
      isActive,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
