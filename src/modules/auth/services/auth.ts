import instance from "@/lib/axios";
import type { UserTypes } from "../types/userTypes";

export const login = async (email: string, password: string) => {
  try {
    const response = await instance.post("/api/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserId = async (): Promise<string> => {
  try {
    const response = await instance.get("/api/auth/me");
    return response.data.user.id;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (): Promise<UserTypes> => {
  try {
    const response = await instance.get("/api/auth/me");
    return response.data.user;
  } catch (error) {
    throw error;
  }
};

export const getUserRole = async (): Promise<string> => {
  try {
    const response = await instance.get("/api/auth/me");
    return response.data.user.role;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await instance.post("/api/auth/logout");
  } catch (error) {
    throw error;
  }
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
  try {
    const response = await instance.post("/api/auth/create-user-by-admin", {
      email,
      password,
      fullName,
      phone,
      role,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export type User = UserTypes;
