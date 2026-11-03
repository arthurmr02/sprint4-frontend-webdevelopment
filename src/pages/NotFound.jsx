import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle.js";

// Página pública exibida para qualquer endereço que não existe.
function NotFound() {
  useDocumentTitle("Página não encontrada | Lensy");

  return (
    <section className="py-20 sm:py-28" aria-label="Página não encontrada">
      <div className="wrap text-center">
        <span className="eyebrow">Erro 404</span>
        <h1 className="section-title">Essa página saiu de foco</h1>
        <p className="section-text mx-auto max-w-[480px]">
          O endereço que você tentou abrir não existe ou foi movido. Volte para o início e tente de novo.
        </p>
        <Link to="/" className="btn btn-primary mt-8">
          Voltar para o início
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
