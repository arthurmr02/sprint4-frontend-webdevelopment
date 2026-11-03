import { Link } from "react-router-dom";
import FormField from "../components/ui/FormField.jsx";
import useDocumentTitle from "../hooks/useDocumentTitle.js";
import useLoginForm from "../hooks/useLoginForm.js";
import { USUARIOS_TESTE } from "../services/authService.js";

// Página pública: login. A lógica está no hook useLoginForm.
function Login() {
  useDocumentTitle("Entrar | Lensy");
  const { valores, erro, enviando, alterar, preencher, enviar } = useLoginForm();

  return (
    <section className="py-12 sm:py-16 lg:py-20" aria-label="Login">
      <div className="wrap">
        <div className="mx-auto grid max-w-[900px] gap-6 lg:grid-cols-2 lg:gap-8">
          <form onSubmit={enviar} className="card relative grid content-start gap-5 p-6 sm:p-8" noValidate>
            <span className="corner corner-tl"></span>
            <span className="corner corner-tr"></span>
            <span className="corner corner-bl"></span>
            <span className="corner corner-br"></span>

            <div>
              <span className="eyebrow">Área restrita</span>
              <h1 className="mt-3 text-3xl font-bold">Entrar na Lensy</h1>
              <p className="mt-2 text-sm text-muted">
                Acesse a sua biblioteca de capturas, com os resumos e as fotos organizados por matéria.
              </p>
            </div>

            <FormField
              id="login-email"
              name="email"
              rotulo="E-mail"
              type="email"
              placeholder="voce@email.com"
              value={valores.email}
              onChange={alterar}
              autoComplete="username"
            />
            <FormField
              id="login-senha"
              name="senha"
              rotulo="Senha"
              type="password"
              placeholder="Sua senha"
              value={valores.senha}
              onChange={alterar}
              autoComplete="current-password"
            />

            <p className="min-h-5 text-[13px] text-red-400" role="alert">
              {erro}
            </p>

            <button type="submit" disabled={enviando} className="btn btn-primary w-full">
              {enviando ? "Entrando..." : "Entrar"}
            </button>

            <Link to="/" className="text-center text-sm text-muted transition-colors hover:text-brand">
              Voltar para a página inicial
            </Link>
          </form>

          <aside className="card grid content-start gap-4 p-6 sm:p-8" aria-label="Usuários de teste">
            <div>
              <span className="eyebrow eyebrow-roxo">Para testar</span>
              <h2 className="mt-3 text-xl font-bold">Usuários de teste</h2>
              <p className="mt-2 text-sm text-muted">
                O projeto não tem servidor de verdade, então estes usuários são fixos. Clique em um para preencher o formulário.
              </p>
            </div>

            {USUARIOS_TESTE.map((usuario) => (
              <button
                key={usuario.id}
                type="button"
                onClick={() => preencher(usuario.email, usuario.senha)}
                className="cursor-pointer rounded-md border border-line bg-bg p-4 text-left transition-colors hover:border-brand"
              >
                <span className="block text-sm font-bold">
                  {usuario.nome} <span className="font-normal text-muted">({usuario.perfil})</span>
                </span>
                <span className="mt-2 block text-[13px] text-muted">E-mail: {usuario.email}</span>
                <span className="block text-[13px] text-muted">Senha: {usuario.senha}</span>
              </button>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Login;
