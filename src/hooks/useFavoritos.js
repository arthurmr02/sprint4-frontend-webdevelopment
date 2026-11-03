import { useCallback } from "react";
import useAuth from "./useAuth.js";
import useLocalStorage from "./useLocalStorage.js";

// Favoritos da Biblioteca (evolução da Sprint 03, que já usava localStorage).
// Cada usuário tem a sua própria lista: a chave inclui o id do usuário logado.
export default function useFavoritos() {
  const { usuario } = useAuth();
  const [favoritos, setFavoritos] = useLocalStorage(`lensy_favoritos_${usuario?.id ?? "anonimo"}`, []);

  const alternarFavorito = useCallback(
    (id) => {
      setFavoritos((atuais) => (atuais.includes(id) ? atuais.filter((item) => item !== id) : [...atuais, id]));
    },
    [setFavoritos]
  );

  const limparFavoritos = useCallback(() => setFavoritos([]), [setFavoritos]);

  return { favoritos, alternarFavorito, limparFavoritos };
}
