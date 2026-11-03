import { Link } from "react-router-dom";
import logoEquipe from "../../assets/img/logo-smartlens.png";
import HashLink from "./HashLink.jsx";
import Logo from "./Logo.jsx";

const CLASSE_LINK = "transition-colors hover:text-brand";

function Footer() {
  return (
    <footer className="border-t border-line pt-12 pb-8">
      <div className="wrap">
        <div className="grid gap-8 border-b border-line pb-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <img
              src={logoEquipe}
              width="404"
              height="404"
              loading="lazy"
              className="mt-5 w-[120px] rounded-md bg-white"
              alt="Logo da equipe SmartLens: celular com capelo de formatura e seta para cima dentro de um círculo, com o texto Tecnologia móvel para estudantes"
            />
            <p className="mt-3 max-w-[280px] text-[13px] text-muted">
              Uma câmera inteligente que entende você. Projeto acadêmico desenvolvido para a Challenge JOVI Smartphone da FIAP.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-bold tracking-wider text-dim uppercase">Navegação</h4>
            <ul className="flex flex-col gap-2 text-sm text-muted">
              <li><HashLink secao="solucao" className={CLASSE_LINK}>A Solução</HashLink></li>
              <li><HashLink secao="publico" className={CLASSE_LINK}>Público-Alvo</HashLink></li>
              <li><HashLink secao="galeria" className={CLASSE_LINK}>Galeria</HashLink></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-bold tracking-wider text-dim uppercase">Equipe</h4>
            <ul className="flex flex-col gap-2 text-sm text-muted">
              <li><HashLink secao="equipe" className={CLASSE_LINK}>Nossa Equipe</HashLink></li>
              <li><HashLink secao="contato" className={CLASSE_LINK}>Contato</HashLink></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-bold tracking-wider text-dim uppercase">Projeto</h4>
            <ul className="flex flex-col gap-2 text-sm text-muted">
              <li><Link to="/biblioteca" className={CLASSE_LINK}>Minha biblioteca</Link></li>
              <li><Link to="/" className={CLASSE_LINK}>Smart Lens · FIAP</Link></li>
              <li><Link to="/" className={CLASSE_LINK}>Challenge JOVI Smartphone</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 pt-5 text-xs text-dim sm:flex-row sm:justify-between">
          <span>© 2026 Lensy · Projeto acadêmico FIAP</span>
          <span>Equipe Smart Lens</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
