import { EQUIPE } from "../../data/site.js";
import TeamMemberCard from "../cards/TeamMemberCard.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";

function TeamSection() {
  return (
    <section id="equipe" className="border-y border-line bg-surface py-16 sm:py-20 lg:py-24" aria-label="Nossa Equipe">
      <div className="wrap">
        <SectionHeader
          etiqueta="Nossa Equipe"
          titulo="Quem construiu a Lensy"
          texto="Equipe da FIAP responsável pela solução da Challenge JOVI Smartphone."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {EQUIPE.map((integrante) => (
            <TeamMemberCard key={integrante.nome} {...integrante} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
