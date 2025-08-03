import instance from "@/lib/axios";
import type { UserTypes } from "../types/userTypes";

export const login = async (email: string, password: string) => {
  try {
    const response = await instance.post("/api/auth/admin-login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUserId = async (): Promise<string> => {
  const response = await instance.get("/api/auth/me");
  return response.data.user.id;
};

export const getUser = async (): Promise<UserTypes | null> => {
  const response = await instance.get("/api/auth/me");
  return response.data.user;
};

export const getUserRole = async (): Promise<string> => {
  const response = await instance.get("/api/auth/me");
  return response.data.user.role;
};

export const logoutUser = async () => {
  await instance.post("/api/auth/logout");
};

export const createUser = async ({
  email,
  password,
  fullName,
  phone,
  role,
}: {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  role: string;
}) => {
  const response = await instance.post("/api/auth/create-user-by-admin", {
    email,
    password,
    fullName,
    phone,
    role,
  });

  if (response.status !== 201) {
    throw new Error("Failed to create user");
  }

  return response.data;
};

export type User = UserTypes;
