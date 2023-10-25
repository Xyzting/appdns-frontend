import { AxiosResponse, InternalAxiosRequestConfig, AxiosError } from "axios";
import { CommonApiResult } from "./types";

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  return config;
};

export const responseInterceptor = (res: AxiosResponse<CommonApiResult>) => {
  return res.data;
};

export const errorInterceptor = (err: AxiosError) => {
  const win: Window = window;

  if (err.response?.status === 401) {
    alert("Your account has been used on another device");

    localStorage.removeItem("sass-token");
    win.location = "/login";
  } else {
    return Promise.reject(err.response);
  }
};
