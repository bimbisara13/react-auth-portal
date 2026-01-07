import api from "./axios";
import { type User } from "../auth/auth.context";

type LoginPayload = {
  username: string;
  password: string;
};

type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

export const login = async (payload: LoginPayload): Promise<User> => {
  const { data } = await api.post<LoginResponse>("/auth/login", payload);

  localStorage.setItem("accessToken", data.accessToken);
  localStorage.setItem("refreshToken", data.refreshToken);
  localStorage.setItem("user", JSON.stringify(data.user));

  return data.user;
};

export const logout = async (): Promise<void> => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (refreshToken) {
    await api.post("/auth/logout", { refreshToken });
  }

  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
};
