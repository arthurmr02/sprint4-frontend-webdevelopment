import { useCallback, useEffect, useState } from "react";

function ler(chave, valorInicial) {
  try {
    const salvo = localStorage.getItem(chave);
    return salvo !== null ? JSON.parse(salvo) : valorInicial;
  } catch {
    // localStorage bloqueado ou JSON inválido: usa o valor inicial.
    return valorInicial;
  }
}

// Hook customizado: funciona como useState, mas guarda o valor no localStorage.
// Se a chave mudar (ex.: outro usuário logado), o valor correspondente é carregado.
export default function useLocalStorage(chave, valorInicial) {
  const [estado, setEstado] = useState(() => ({ chave, valor: ler(chave, valorInicial) }));

  // Ajuste de estado durante a renderização quando a chave muda.
  if (estado.chave !== chave) {
    setEstado({ chave, valor: ler(chave, valorInicial) });
  }

  // Sempre que o valor muda, grava no localStorage.
  useEffect(() => {
    try {
      localStorage.setItem(estado.chave, JSON.stringify(estado.valor));
    } catch {
      // sem espaço ou bloqueado: o app continua funcionando só em memória.
    }
  }, [estado]);

  const definirValor = useCallback((novo) => {
    setEstado((atual) => ({
      chave: atual.chave,
      valor: typeof novo === "function" ? novo(atual.valor) : novo,
    }));
  }, []);

  return [estado.valor, definirValor];
}
