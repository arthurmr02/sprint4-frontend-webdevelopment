import { useEffect, useState } from "react";

// Hook customizado: descobre qual seção da Home está no meio da tela
// para destacar o link correspondente no menu (IntersectionObserver).
// "ids" precisa ser um array estável (constante do módulo).
export default function useSecaoAtiva(ids, habilitado) {
  const [ativa, setAtiva] = useState(null);

  useEffect(() => {
    if (!habilitado || !("IntersectionObserver" in window)) {
      setAtiva(null);
      return undefined;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) setAtiva(entrada.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    ids.forEach((id) => {
      const elemento = document.getElementById(id);
      if (elemento) observador.observe(elemento);
    });

    return () => observador.disconnect();
  }, [ids, habilitado]);

  return ativa;
}
