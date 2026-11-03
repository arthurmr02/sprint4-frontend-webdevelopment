import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";

// Rota PRIVADA: só deixa passar quem está logado.
// Quem não está logado é enviado para /login; guardamos a página pedida (state.from)
// para voltar nela depois do login.
function PrivateRoute() {
  const { autenticado } = useAuth();
  const location = useLocation();

  if (!autenticado) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}

export default PrivateRoute;
