import { SUGESTOES } from "../../data/site.js";
import useSugestao from "../../hooks/useSugestao.js";

// Gerador de sugestões da Sprint 03 (Math.random), agora com Tailwind e hook customizado.
function SuggestionPanel() {
  const { sugestao, contador, gerar } = useSugestao(SUGESTOES);

  return (
    <div id="recursos" className="card mt-14 grid gap-6 p-6 sm:p-8 lg:mt-16 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-10">
      <div>
        <span className="eyebrow">Teste na prática</span>
        <h3 className="mt-3 text-2xl font-bold">Descubra um recurso da Lensy</h3>
        <p className="mt-3 text-sm text-muted sm:text-base">
          Clique no botão para simular como a Lensy sugeriria um recurso de acordo com o contexto da foto.
        </p>
        <button type="button" onClick={gerar} className="btn btn-primary mt-6 w-full sm:w-auto">
          Gerar sugestão
        </button>
      </div>

      <div className="rounded-md border border-line bg-bg p-5" aria-live="polite">
        {sugestao ? (
          <>
            <p className="text-base font-bold sm:text-lg">{sugestao}</p>
            <span className="mt-3 block text-[13px] text-muted">Sugestões geradas: {contador}</span>
          </>
        ) : (
          <p className="text-sm text-dim">Nenhuma sugestão gerada ainda. Clique no botão para começar.</p>
        )}
      </div>
    </div>
  );
}

export default SuggestionPanel;
