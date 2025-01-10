import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "  https://b77c-217-113-25-40.ngrok-free.app",
  withCredentials: true,
});
