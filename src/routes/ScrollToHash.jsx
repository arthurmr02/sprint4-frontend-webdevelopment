import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Controla a rolagem a cada navegação:
// - se a URL tem #secao, rola até a seção (o CSS cuida da rolagem suave e do espaço do menu);
// - se não tem, volta ao topo da nova página.
function ScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return undefined;
    }

    const id = decodeURIComponent(hash.slice(1));
    const elemento = document.getElementById(id);

    if (elemento) {
      elemento.scrollIntoView();
      return undefined;
    }

    // A página pode ainda estar montando: tenta de novo no próximo quadro.
    const quadro = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    return () => cancelAnimationFrame(quadro);
  }, [pathname, hash, key]);

  return null;
}

export default ScrollToHash;
