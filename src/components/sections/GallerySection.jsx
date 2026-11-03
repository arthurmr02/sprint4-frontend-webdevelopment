import { GALERIA } from "../../data/site.js";
import GalleryItem from "../cards/GalleryItem.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";

function GallerySection() {
  return (
    <section id="galeria" className="py-16 sm:py-20 lg:py-24" aria-label="Galeria">
      <div className="wrap">
        <SectionHeader
          etiqueta="Galeria"
          titulo="A interface da Lensy em ação"
          texto="Representações da interface mostrando como a Lensy identifica o contexto e responde em tempo real, direto no visor da câmera."
          roxo
        />
        <div className="grid gap-8 md:grid-cols-2 md:gap-7">
          {GALERIA.map((item) => (
            <GalleryItem key={item.titulo} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
