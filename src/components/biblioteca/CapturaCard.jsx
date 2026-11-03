import { Link } from "react-router-dom";
import { formatarData } from "../../utils/formatadores.js";
import Icon from "../ui/Icon.jsx";

// Card de uma captura da Biblioteca.
// Props: captura (dados da API), favorita (boolean) e onAlternarFavorito (callback do componente pai).
function CapturaCard({ captura, favorita, onAlternarFavorito }) {
  return (
    <article className={`card card-hover flex flex-col p-6 ${favorita ? "border-roxo/60" : ""}`}>
      <div className="flex items-start justify-between gap-3">
        <span className="inline-block rounded-md bg-brand-soft px-2.5 py-1 text-[11px] font-bold text-brand">
          {captura.materia}
        </span>
        <button
          type="button"
          onClick={() => onAlternarFavorito(captura.id)}
          aria-pressed={favorita}
          aria-label={favorita ? `Remover ${captura.titulo} dos favoritos` : `Adicionar ${captura.titulo} aos favoritos`}
          title={favorita ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          className={`flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-md border border-line transition-colors hover:border-roxo hover:text-roxo ${
            favorita ? "text-roxo" : "text-muted"
          }`}
        >
          <Icon nome="estrela" className="size-5" preenchido={favorita} />
        </button>
      </div>

      <h3 className="mt-4 text-lg font-bold">{captura.titulo}</h3>
      <p className="mt-2 text-sm text-muted">{captura.resumo}</p>

      <div className="mt-auto flex items-end justify-between gap-3 pt-5 text-[13px] text-dim">
        <span className="min-w-0">
          {captura.acao} · {formatarData(captura.data)}
        </span>
        <Link to={`/biblioteca/${captura.id}`} className="shrink-0 font-bold whitespace-nowrap text-brand transition-colors hover:text-ink">
          Ver detalhes
        </Link>
      </div>
    </article>
  );
}

export default CapturaCard;
