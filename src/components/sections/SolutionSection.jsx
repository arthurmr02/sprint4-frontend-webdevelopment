import { ACOES, DESTAQUES_SOLUCAO } from "../../data/site.js";
import FeatureCard from "../cards/FeatureCard.jsx";
import InfoCard from "../cards/InfoCard.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import SuggestionPanel from "./SuggestionPanel.jsx";

function SolutionSection() {
  return (
    <section id="solucao" className="py-16 sm:py-20 lg:py-24" aria-label="A Solução">
      <div className="wrap">
        <div className="mb-14 grid gap-10 lg:mb-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <span className="eyebrow">A Solução</span>
            <h2 className="section-title">Uma câmera que faz o trabalho depois da foto</h2>
            <p className="mt-5 text-base text-ink/90 sm:text-lg">
              Câmeras de smartphone modernas têm recursos avançados que a maioria dos usuários, principalmente estudantes, nunca chega a usar. O resultado é sempre o mesmo:{" "}
              <strong className="text-brand">aponta, fotografa, e o resto vira trabalho manual.</strong> Fotos de lousa, apostila e anotações se misturam com fotos pessoais, saem tortas ou ilegíveis, e o estudante precisa recorrer a apps externos para escanear, traduzir e organizar tudo depois.
            </p>
            <p className="mt-4 text-base text-ink/90 sm:text-lg">
              A Lensy resolve isso com uma camada de <strong className="text-brand">visão computacional contextual</strong> sobre a câmera: ela reconhece o que está sendo fotografado e escolhe a ação correspondente, sem que o usuário precise mexer em nenhuma configuração.
            </p>
          </div>
          <div className="grid content-center gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
            {DESTAQUES_SOLUCAO.map((destaque) => (
              <InfoCard key={destaque.titulo} titulo={destaque.titulo} texto={destaque.texto} />
            ))}
          </div>
        </div>

        <SectionHeader
          etiqueta="Como ela reconhece o contexto"
          titulo="As seis ações automáticas da Lensy"
          roxo
          className="mb-8 max-w-[650px]"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-flow-row-dense lg:grid-cols-3">
          {ACOES.map((acao) => (
            <FeatureCard
              key={acao.titulo}
              icone={acao.icone}
              titulo={acao.titulo}
              descricao={acao.descricao}
              variante={acao.variante}
            />
          ))}
        </div>

        <SuggestionPanel />
      </div>
    </section>
  );
}

export default SolutionSection;
