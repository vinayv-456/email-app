import axios from "axios";
import { baseUrl } from "./endPoints";

export const WebService = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

WebService.interceptors.response.use(
  (res) => res,
  async (err) => {
    return err;
  }
);
