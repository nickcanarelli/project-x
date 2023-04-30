import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useRegister = () => {
  return useMutation(
    (request: { email: string; password: string; role?: string }) => {
      const { email, password, role } = request;

      const response = axios.post("/api/auth/register", {
        email,
        password,
        role,
      });

      return response;
    }
  );
};
