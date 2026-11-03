import { useState } from "react";

// Hook customizado do gerador de sugestões (evolução da Sprint 03).
// Usa Math.random() e Math.floor() para sortear um item da lista.
export default function useSugestao(lista) {
  const [sugestao, setSugestao] = useState(null);
  const [contador, setContador] = useState(0);

  function gerar() {
    // Math.random() devolve um número de 0 até 1 (exclusivo); multiplicamos pelo
    // tamanho da lista e usamos Math.floor() para obter um índice válido.
    let indice = Math.floor(Math.random() * lista.length);

    // Evita repetir a mesma frase duas vezes seguidas.
    if (lista[indice] === sugestao) {
      indice = (indice + 1) % lista.length;
    }

    setSugestao(lista[indice]);
    setContador((anterior) => anterior + 1);
  }

  return { sugestao, contador, gerar };
}
