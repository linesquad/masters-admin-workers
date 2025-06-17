import instance from "@/lib/axios";

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

export const getUserId = async () => {
  try {
    const response = await instance.get("/api/auth/me");
    return response.data.user.id;
  } catch (error) {
    throw error;
  }
};

export const getUser = async () => {
  try {
    const response = await instance.get("/api/auth/me");
    return response.data.user;
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
