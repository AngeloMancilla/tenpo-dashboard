import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Ha ocurrido un error al intentar obtener el contexto de autenticación.");
  }
  return context;
};