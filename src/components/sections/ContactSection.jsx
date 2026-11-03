import { EMAIL_EQUIPE, REDES_SOCIAIS } from "../../data/site.js";
import useContactForm from "../../hooks/useContactForm.js";
import FormField from "../ui/FormField.jsx";
import Icon from "../ui/Icon.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";

const CLASSE_ICONE = "flex size-[38px] shrink-0 items-center justify-center rounded-md bg-brand-soft text-brand";

function ContactSection() {
  const { valores, erros, status, feedback, alterar, enviar, registrar } = useContactForm();

  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-24" aria-label="Contato">
      <div className="wrap">
        <SectionHeader
          etiqueta="Contato"
          titulo="Fale com a equipe Smart Lens"
          texto="Envie sua dúvida sobre a solução, o protótipo ou a Challenge JOVI Smartphone pelo formulário ou pelo e-mail da equipe."
          roxo
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <form onSubmit={enviar} className="card grid gap-5 p-5 sm:p-8" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                id="nome"
                name="nome"
                rotulo="Nome"
                type="text"
                placeholder="Seu nome completo"
                value={valores.nome}
                onChange={alterar}
                erro={erros.nome}
                inputRef={registrar("nome")}
                autoComplete="name"
              />
              <FormField
                id="email"
                name="email"
                rotulo="E-mail"
                type="email"
                placeholder="voce@email.com"
                value={valores.email}
                onChange={alterar}
                erro={erros.email}
                inputRef={registrar("email")}
                autoComplete="email"
              />
            </div>
            <FormField
              id="mensagem"
              name="mensagem"
              rotulo="Mensagem"
              multilinha
              rows={5}
              placeholder="Conte o que você quer saber sobre a Lensy"
              value={valores.mensagem}
              onChange={alterar}
              erro={erros.mensagem}
              inputRef={registrar("mensagem")}
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <button type="submit" disabled={status === "enviando"} className="btn btn-primary w-full sm:w-auto">
                {status === "enviando" ? "Enviando..." : "Enviar mensagem"}
              </button>
              <p
                className={`min-h-5 text-[13px] ${status === "erro" ? "text-red-400" : "text-brand"}`}
                role="status"
                aria-live="polite"
              >
                {feedback}
              </p>
            </div>
          </form>

          <div className="grid content-start gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <div className="card flex gap-3.5 p-5">
              <span className={CLASSE_ICONE}>
                <Icon nome="email" className="w-[18px]" />
              </span>
              <div className="min-w-0">
                <h3 className="text-[15px] font-bold">E-mail</h3>
                <address className="mt-1 text-[13px] break-words text-muted not-italic">
                  <a href={`mailto:${EMAIL_EQUIPE}`} className="transition-colors hover:text-brand">
                    {EMAIL_EQUIPE}
                  </a>
                </address>
              </div>
            </div>
            <div className="card flex gap-3.5 p-5">
              <span className={CLASSE_ICONE}>
                <Icon nome="telefone" className="w-[18px]" />
              </span>
              <div>
                <h3 className="text-[15px] font-bold">Projeto</h3>
                <p className="mt-1 text-[13px] text-muted">FIAP · Challenge JOVI Smartphone · Smart Lens</p>
              </div>
            </div>
            <div className="card flex gap-3.5 p-5 sm:col-span-2 lg:col-span-1">
              <span className={CLASSE_ICONE}>
                <Icon nome="globo" className="w-[18px]" />
              </span>
              <div>
                <h3 className="text-[15px] font-bold">Redes sociais</h3>
                <div className="mt-2.5 flex gap-2.5">
                  {REDES_SOCIAIS.map((rede) => (
                    <a
                      key={rede.icone}
                      href={rede.href}
                      aria-label={rede.label}
                      className="flex size-[38px] items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-brand hover:text-brand"
                    >
                      <Icon nome={rede.icone} className="w-[17px]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
