import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "  https://7d0e-217-113-25-41.ngrok-free.app",
  withCredentials: true,
});
