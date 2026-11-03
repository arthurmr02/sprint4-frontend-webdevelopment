import CapturaCard from "../components/biblioteca/CapturaCard.jsx";
import CapturaSkeleton from "../components/biblioteca/CapturaSkeleton.jsx";
import EstadoMensagem from "../components/biblioteca/EstadoMensagem.jsx";
import FiltrosCapturas from "../components/biblioteca/FiltrosCapturas.jsx";
import ResumoBiblioteca from "../components/biblioteca/ResumoBiblioteca.jsx";
import useAuth from "../hooks/useAuth.js";
import { useCapturas } from "../hooks/useCapturas.js";
import useDocumentTitle from "../hooks/useDocumentTitle.js";
import useFavoritos from "../hooks/useFavoritos.js";
import useFiltroCapturas from "../hooks/useFiltroCapturas.js";

// Página PRIVADA: biblioteca de capturas do usuário logado.
// Os dados vêm da API (hook useCapturas); a página só junta os hooks e monta os componentes.
function Biblioteca() {
  useDocumentTitle("Minha biblioteca | Lensy");

  const { usuario } = useAuth();
  const { capturas, loading, error, recarregar } = useCapturas();
  const { favoritos, alternarFavorito, limparFavoritos } = useFavoritos();
  const filtros = useFiltroCapturas(capturas, favoritos);

  const primeiroNome = usuario.nome.split(" ")[0];

  return (
    <section className="py-12 sm:py-16" aria-label="Minha biblioteca">
      <div className="wrap">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[650px]">
            <span className="eyebrow eyebrow-roxo">Área restrita</span>
            <h1 className="section-title">Olá, {primeiroNome}. Esta é a sua biblioteca</h1>
            <p className="section-text">
              Capturas que a Lensy organizou por matéria. Marque as mais importantes como favoritas: elas ficam salvas neste navegador.
            </p>
          </div>
          {favoritos.length > 0 && (
            <button type="button" onClick={limparFavoritos} className="btn btn-ghost self-start sm:self-auto">
              Limpar favoritos
            </button>
          )}
        </div>

        <ResumoBiblioteca total={capturas.length} favoritas={favoritos.length} materias={filtros.materias.length} />

        <div className="mt-8">
          <FiltrosCapturas
            busca={filtros.busca}
            onBusca={filtros.setBusca}
            materia={filtros.materia}
            onMateria={filtros.setMateria}
            materias={filtros.materias}
            somenteFavoritas={filtros.somenteFavoritas}
            onSomenteFavoritas={filtros.setSomenteFavoritas}
          />
        </div>

        <div className="mt-8" aria-busy={loading}>
          {loading && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <CapturaSkeleton key={n} />
              ))}
            </div>
          )}

          {!loading && error && (
            <EstadoMensagem
              erro
              titulo="Não foi possível carregar as capturas"
              texto={error.message}
              rotuloBotao="Tentar de novo"
              onClick={recarregar}
            />
          )}

          {!loading && !error && filtros.filtradas.length === 0 && (
            <EstadoMensagem
              titulo="Nenhuma captura encontrada"
              texto="Nenhum item combina com a busca ou com os filtros escolhidos."
              rotuloBotao={filtros.temFiltroAtivo ? "Limpar filtros" : undefined}
              onClick={filtros.limparFiltros}
            />
          )}

          {!loading && !error && filtros.filtradas.length > 0 && (
            <>
              <p className="mb-4 text-[13px] text-muted" role="status">
                Mostrando {filtros.filtradas.length} de {capturas.length} capturas
              </p>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filtros.filtradas.map((captura) => (
                  <CapturaCard
                    key={captura.id}
                    captura={captura}
                    favorita={favoritos.includes(captura.id)}
                    onAlternarFavorito={alternarFavorito}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Biblioteca;
