import { useMemo, useState } from "react";

// Hook customizado com a lógica de busca e filtros da Biblioteca.
// useMemo evita refazer o filtro a cada renderização sem necessidade.
export default function useFiltroCapturas(capturas, favoritos) {
  const [busca, setBusca] = useState("");
  const [materia, setMateria] = useState("todas");
  const [somenteFavoritas, setSomenteFavoritas] = useState(false);

  const materias = useMemo(
    () => [...new Set(capturas.map((captura) => captura.materia))].sort((a, b) => a.localeCompare(b, "pt-BR")),
    [capturas]
  );

  const filtradas = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    return capturas.filter((captura) => {
      if (materia !== "todas" && captura.materia !== materia) return false;
      if (somenteFavoritas && !favoritos.includes(captura.id)) return false;
      if (!termo) return true;

      const texto = [captura.titulo, captura.resumo, captura.materia, ...captura.tags].join(" ").toLowerCase();
      return texto.includes(termo);
    });
  }, [capturas, favoritos, busca, materia, somenteFavoritas]);

  const temFiltroAtivo = busca !== "" || materia !== "todas" || somenteFavoritas;

  function limparFiltros() {
    setBusca("");
    setMateria("todas");
    setSomenteFavoritas(false);
  }

  return {
    busca,
    setBusca,
    materia,
    setMateria,
    somenteFavoritas,
    setSomenteFavoritas,
    materias,
    filtradas,
    temFiltroAtivo,
    limparFiltros,
  };
}
