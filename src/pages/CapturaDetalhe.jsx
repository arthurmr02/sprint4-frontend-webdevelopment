import { Link, useParams } from "react-router-dom";
import EstadoMensagem from "../components/biblioteca/EstadoMensagem.jsx";
import Icon from "../components/ui/Icon.jsx";
import { useCaptura } from "../hooks/useCapturas.js";
import useDocumentTitle from "../hooks/useDocumentTitle.js";
import useFavoritos from "../hooks/useFavoritos.js";
import { formatarData } from "../utils/formatadores.js";

// Página PRIVADA com rota dinâmica: /biblioteca/:id (useParams lê o id da URL).
function CapturaDetalhe() {
  const { id } = useParams();
  const { captura, loading, error, recarregar } = useCaptura(id);
  const { favoritos, alternarFavorito } = useFavoritos();

  useDocumentTitle(captura ? `${captura.titulo} | Lensy` : "Captura | Lensy");

  const favorita = captura ? favoritos.includes(captura.id) : false;

  return (
    <section className="py-12 sm:py-16" aria-label="Detalhe da captura">
      <div className="wrap">
        <Link to="/biblioteca" className="inline-flex items-center gap-2 text-sm font-bold text-muted transition-colors hover:text-brand">
          <Icon nome="voltar" className="size-4" />
          Voltar para a biblioteca
        </Link>

        <div className="mt-6" aria-busy={loading}>
          {loading && (
            <div className="card animate-pulse p-8" aria-hidden="true">
              <div className="h-5 w-32 rounded-md bg-line"></div>
              <div className="mt-6 h-8 w-2/3 rounded-md bg-line"></div>
              <div className="mt-4 h-4 w-full rounded-md bg-line"></div>
              <div className="mt-2 h-4 w-3/4 rounded-md bg-line"></div>
            </div>
          )}

          {!loading && error && (
            <EstadoMensagem
              erro
              titulo={error.status === 404 ? "Captura não encontrada" : "Não foi possível carregar a captura"}
              texto={error.message}
              rotuloBotao={error.status === 404 ? undefined : "Tentar de novo"}
              onClick={recarregar}
            />
          )}

          {!loading && captura && (
            <article className="card relative p-6 sm:p-10">
              <span className="corner corner-tl"></span>
              <span className="corner corner-tr"></span>
              <span className="corner corner-bl"></span>
              <span className="corner corner-br"></span>

              <div className="flex flex-wrap items-start justify-between gap-4">
                <span className="inline-block rounded-md bg-brand-soft px-2.5 py-1 text-[11px] font-bold text-brand">
                  {captura.materia}
                </span>
                <button
                  type="button"
                  onClick={() => alternarFavorito(captura.id)}
                  aria-pressed={favorita}
                  className={`btn btn-ghost px-4 py-2 text-sm ${favorita ? "border-roxo text-roxo" : ""}`}
                >
                  <Icon nome="estrela" className="size-4" preenchido={favorita} />
                  {favorita ? "Favorita" : "Favoritar"}
                </button>
              </div>

              <h1 className="mt-5 text-3xl font-bold sm:text-4xl">{captura.titulo}</h1>
              <p className="mt-3 max-w-[650px] text-base text-muted sm:text-lg">{captura.resumo}</p>

              <dl className="mt-6 grid gap-4 border-y border-line py-5 sm:grid-cols-3">
                <div>
                  <dt className="text-xs font-bold tracking-wider text-dim uppercase">Ação aplicada</dt>
                  <dd className="mt-1 text-sm font-bold">{captura.acao}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold tracking-wider text-dim uppercase">Capturada em</dt>
                  <dd className="mt-1 text-sm font-bold">{formatarData(captura.data)}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold tracking-wider text-dim uppercase">Páginas</dt>
                  <dd className="mt-1 text-sm font-bold">{captura.paginas}</dd>
                </div>
              </dl>

              <h2 className="mt-8 text-xl font-bold">Resumo gerado pela IA</h2>
              <ul className="mt-4 grid gap-3">
                {captura.pontos.map((ponto) => (
                  <li key={ponto} className="flex gap-3 text-sm text-ink/90 sm:text-base">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-roxo" aria-hidden="true"></span>
                    {ponto}
                  </li>
                ))}
              </ul>

              <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tags">
                {captura.tags.map((tag) => (
                  <li key={tag} className="rounded-md border border-line px-2.5 py-1 text-[12px] font-bold text-muted">
                    #{tag}
                  </li>
                ))}
              </ul>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}

export default CapturaDetalhe;
