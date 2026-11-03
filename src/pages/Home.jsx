import AudienceSection from "../components/sections/AudienceSection.jsx";
import ContactSection from "../components/sections/ContactSection.jsx";
import GallerySection from "../components/sections/GallerySection.jsx";
import Hero from "../components/sections/Hero.jsx";
import SolutionSection from "../components/sections/SolutionSection.jsx";
import TeamSection from "../components/sections/TeamSection.jsx";
import useDocumentTitle from "../hooks/useDocumentTitle.js";

// Página pública: Landing Page da Lensy. Só organiza a ordem das seções.
function Home() {
  useDocumentTitle("Lensy: a câmera inteligente que entende você");

  return (
    <>
      <Hero />
      <SolutionSection />
      <AudienceSection />
      <GallerySection />
      <TeamSection />
      <ContactSection />
    </>
  );
}

export default Home;
