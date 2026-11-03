import { useCallback, useEffect, useState } from "react";

// Hook customizado para consumir uma API.
// Recebe uma função "buscador(signal)" que devolve uma Promise e entrega
// { data, loading, error, recarregar } para o componente.
// IMPORTANTE: o buscador precisa ter referência estável (função do módulo
// ou useCallback), senão a requisição seria refeita a cada renderização.
export default function useFetch(buscador) {
  const [estado, setEstado] = useState({ data: null, loading: true, error: null });
  const [tentativa, setTentativa] = useState(0);

  useEffect(() => {
    const controlador = new AbortController();

    setEstado((atual) => ({ ...atual, loading: true, error: null }));

    buscador(controlador.signal)
      .then((data) => setEstado({ data, loading: false, error: null }))
      .catch((error) => {
        if (error.name === "AbortError") return; // componente desmontado
        setEstado({ data: null, loading: false, error });
      });

    // Cancela a requisição se o componente sair da tela antes de terminar.
    return () => controlador.abort();
  }, [buscador, tentativa]);

  const recarregar = useCallback(() => setTentativa((n) => n + 1), []);

  return { ...estado, recarregar };
}
