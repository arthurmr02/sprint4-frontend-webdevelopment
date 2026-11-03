import { useCallback, useEffect, useState } from "react";

// Hook customizado do menu hambúrguer (mobile e tablet).
// Fecha com a tecla Esc e quando a tela cresce até o tamanho desktop (1024 px).
export default function useMenuMobile() {
  const [aberto, setAberto] = useState(false);

  const alternar = useCallback(() => setAberto((atual) => !atual), []);
  const fechar = useCallback(() => setAberto(false), []);

  useEffect(() => {
    function aoPressionarTecla(evento) {
      if (evento.key === "Escape") setAberto(false);
    }

    const telaDesktop = window.matchMedia("(min-width: 1024px)");
    function aoMudarTela(evento) {
      if (evento.matches) setAberto(false);
    }

    document.addEventListener("keydown", aoPressionarTecla);
    telaDesktop.addEventListener("change", aoMudarTela);

    return () => {
      document.removeEventListener("keydown", aoPressionarTecla);
      telaDesktop.removeEventListener("change", aoMudarTela);
    };
  }, []);

  return { aberto, alternar, fechar };
}
