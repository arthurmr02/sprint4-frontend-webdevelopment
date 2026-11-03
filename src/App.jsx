import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Biblioteca from "./pages/Biblioteca.jsx";
import CapturaDetalhe from "./pages/CapturaDetalhe.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import PublicOnlyRoute from "./routes/PublicOnlyRoute.jsx";
import ScrollToHash from "./routes/ScrollToHash.jsx";

// Mapa de rotas da aplicação:
//   PÚBLICAS : /            (Landing Page)
//              /login       (só para visitantes; quem já está logado é redirecionado)
//   PRIVADAS : /biblioteca       (lista de capturas, vinda da API)
//              /biblioteca/:id   (detalhe de uma captura)
//   *        : página 404
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />

            <Route element={<PublicOnlyRoute />}>
              <Route path="login" element={<Login />} />
            </Route>

            <Route element={<PrivateRoute />}>
              <Route path="biblioteca" element={<Biblioteca />} />
              <Route path="biblioteca/:id" element={<CapturaDetalhe />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
