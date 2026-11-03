import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";

// Rota pública apenas para visitantes (ex.: /login).
// Quem já está logado vai direto para a página que queria acessar ou para a Biblioteca.
function PublicOnlyRoute() {
  const { autenticado } = useAuth();
  const location = useLocation();

  if (autenticado) {
    return <Navigate to={location.state?.from?.pathname || "/biblioteca"} replace />;
  }

  return <Outlet />;
}

export default PublicOnlyRoute;
