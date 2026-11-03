import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer.jsx";
import Header from "../components/layout/Header.jsx";

// Layout comum a todas as páginas: link de acessibilidade, menu, conteúdo (Outlet) e rodapé.
function MainLayout() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-bg"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="top">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
