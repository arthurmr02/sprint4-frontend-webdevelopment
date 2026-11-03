import { createContext, useCallback, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";
import { autenticar } from "../services/authService.js";

// Context API: deixa o usuário logado disponível para toda a aplicação
// (Header, rotas privadas, página de login) sem passar props de nível em nível.
export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // A sessão fica no localStorage, então continua logado depois de atualizar a página.
  const [usuario, setUsuario] = useLocalStorage("lensy_sessao", null);

  const entrar = useCallback(
    async (email, senha) => {
      const logado = await autenticar(email, senha);
      setUsuario(logado);
      return logado;
    },
    [setUsuario]
  );

  const sair = useCallback(() => setUsuario(null), [setUsuario]);

  // useMemo evita recriar o objeto a cada renderização e re-renderizar todos os consumidores à toa.
  const valor = useMemo(
    () => ({ usuario, autenticado: usuario !== null, entrar, sair }),
    [usuario, entrar, sair]
  );

  return <AuthContext.Provider value={valor}>{children}</AuthContext.Provider>;
}
