import instance from "@/lib/axios";
import type { ContactUsResponse } from "../types";

interface ContactUsQueryProps {
  page: number;
  limit: number;
}

export const getContactUs = async ({ page, limit }: ContactUsQueryProps) => {
  const response = await instance.get<ContactUsResponse>(
    "/api/home/contact-messages",
    {
      params: {
        page,
        limit,
      },
    }
  );

  if (response.status !== 200) {
    throw new Error("Failed to fetch contact us messages");
  }

  return response.data;
};

export const deleteContactUs = async (id: string) => {
  const response = await instance.delete(`/api/home/contact-messages/${id}`);

  if (response.status !== 200) {
    throw new Error("Failed to delete contact us message");
  }

  return response.data;
};
