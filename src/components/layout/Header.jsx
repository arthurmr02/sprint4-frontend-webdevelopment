import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, SECOES_NAV } from "../../data/site.js";
import useAuth from "../../hooks/useAuth.js";
import useMenuMobile from "../../hooks/useMenuMobile.js";
import useSecaoAtiva from "../../hooks/useSecaoAtiva.js";
import Icon from "../ui/Icon.jsx";
import HashLink from "./HashLink.jsx";
import Logo from "./Logo.jsx";

function Header() {
  const { pathname } = useLocation();
  const { usuario, autenticado, sair } = useAuth();
  const { aberto, alternar, fechar } = useMenuMobile();

  // O destaque do link ativo só faz sentido na Home, onde estão as seções.
  const secaoAtiva = useSecaoAtiva(SECOES_NAV, pathname === "/");

  function aoSair() {
    fechar();
    sair();
  }

  return (
    <header className="sticky top-0 z-[100] border-b border-line bg-bg/85 backdrop-blur-md">
      <nav
        className="wrap flex items-center justify-between gap-5 py-3 lg:grid lg:grid-cols-[auto_1fr_auto] lg:py-4"
        aria-label="Navegação principal"
      >
        <Logo onClick={fechar} />

        <ul className="hidden justify-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <HashLink
                secao={link.id}
                className={`nav-link ${secaoAtiva === link.id ? "is-active" : ""}`}
                aria-current={secaoAtiva === link.id ? "true" : undefined}
              >
                {link.label}
              </HashLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {autenticado ? (
            <>
              <Link to="/biblioteca" className="btn btn-ghost hidden px-[18px] py-2.5 text-sm lg:inline-flex">
                Minha biblioteca
              </Link>
              <button type="button" onClick={aoSair} className="btn btn-primary hidden px-[18px] py-2.5 text-sm sm:inline-flex">
                Sair
              </button>
            </>
          ) : (
            <>
              <HashLink secao="contato" className="btn btn-ghost hidden px-[18px] py-2.5 text-sm lg:inline-flex">
                Falar com a equipe
              </HashLink>
              <Link to="/login" className="btn btn-primary hidden px-[18px] py-2.5 text-sm sm:inline-flex">
                Entrar
              </Link>
            </>
          )}

          <button
            type="button"
            onClick={alternar}
            className="flex size-10 cursor-pointer items-center justify-center rounded-lg border border-line text-ink transition-colors hover:border-brand hover:text-brand lg:hidden"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={aberto}
            aria-controls="menuMobile"
          >
            <Icon nome={aberto ? "fechar" : "menu"} className="size-6" strokeWidth={2} />
          </button>
        </div>
      </nav>

      {/* Menu mobile / tablet */}
      {aberto && (
        <div id="menuMobile" className="absolute inset-x-0 top-full border-y border-line bg-bg lg:hidden">
          <div className="wrap py-5">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <HashLink
                    secao={link.id}
                    onClick={fechar}
                    className="block border-b border-line px-1 py-3.5 font-bold transition-colors hover:text-brand"
                  >
                    {link.label}
                  </HashLink>
                </li>
              ))}
            </ul>

            {autenticado ? (
              <div className="mt-5 grid gap-3">
                <p className="text-[13px] text-muted">
                  Logado como <strong className="text-ink">{usuario.nome}</strong>
                </p>
                <Link to="/biblioteca" onClick={fechar} className="btn btn-primary w-full">
                  Minha biblioteca
                </Link>
                <button type="button" onClick={aoSair} className="btn btn-ghost w-full">
                  Sair
                </button>
              </div>
            ) : (
              <div className="mt-5 grid gap-3">
                <Link to="/login" onClick={fechar} className="btn btn-primary w-full">
                  Entrar
                </Link>
                <HashLink secao="contato" onClick={fechar} className="btn btn-ghost w-full">
                  Falar com a equipe
                </HashLink>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
