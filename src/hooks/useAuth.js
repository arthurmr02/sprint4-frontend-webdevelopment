import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";

// Hook customizado para acessar o usuário logado de qualquer componente.
export default function useAuth() {
  const contexto = useContext(AuthContext);

  if (!contexto) {
    throw new Error("useAuth precisa ser usado dentro de <AuthProvider>.");
  }

  return contexto;
}
