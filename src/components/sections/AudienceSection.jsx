import { PUBLICO } from "../../data/site.js";
import AudienceCard from "../cards/AudienceCard.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";

function AudienceSection() {
  return (
    <section id="publico" className="border-y border-line bg-surface py-16 sm:py-20 lg:py-24" aria-label="Público-Alvo">
      <div className="wrap">
        <SectionHeader
          etiqueta="Público-Alvo"
          titulo="Para quem fotografa material de estudo e documentos todos os dias"
          texto="O foco principal são estudantes, mas o mesmo problema aparece para quem digitaliza papéis no trabalho ou só quer fotos melhores sem aprender configurações."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-flow-col lg:grid-cols-none lg:auto-cols-fr lg:grid-rows-[repeat(3,minmax(110px,auto))] lg:gap-4">
          {PUBLICO.map((publico) => (
            <AudienceCard
              key={publico.titulo}
              tipo={publico.tipo}
              titulo={publico.titulo}
              descricao={publico.descricao}
              posicao={publico.posicao}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AudienceSection;
