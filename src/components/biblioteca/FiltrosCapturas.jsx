import Icon from "../ui/Icon.jsx";

// Barra de busca e filtros da Biblioteca. Componente "controlado": recebe os valores
// e as funções de alteração do componente pai (que usa o hook useFiltroCapturas).
function FiltrosCapturas({ busca, onBusca, materia, onMateria, materias, somenteFavoritas, onSomenteFavoritas }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_240px_auto] lg:items-end" role="search">
      <div className="grid gap-2 sm:col-span-2 lg:col-span-1">
        <label htmlFor="busca" className="text-[13px] font-bold text-muted">
          Buscar capturas
        </label>
        <div className="relative">
          <Icon nome="busca" className="pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2 text-dim" />
          <input
            id="busca"
            type="search"
            value={busca}
            onChange={(evento) => onBusca(evento.target.value)}
            placeholder="Título, resumo ou tag"
            className="field-input pl-10"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="materia" className="text-[13px] font-bold text-muted">
          Matéria
        </label>
        <select
          id="materia"
          value={materia}
          onChange={(evento) => onMateria(evento.target.value)}
          className="field-input"
        >
          <option value="todas">Todas as matérias</option>
          {materias.map((nome) => (
            <option key={nome} value={nome}>
              {nome}
            </option>
          ))}
        </select>
      </div>

      <label className="flex min-h-[46px] cursor-pointer items-center gap-2.5 rounded-md border border-line px-4 text-sm font-bold transition-colors hover:border-brand">
        <input
          type="checkbox"
          checked={somenteFavoritas}
          onChange={(evento) => onSomenteFavoritas(evento.target.checked)}
          className="size-4 accent-[#3d8bd4]"
        />
        Somente favoritas
      </label>
    </div>
  );
}

export default FiltrosCapturas;
