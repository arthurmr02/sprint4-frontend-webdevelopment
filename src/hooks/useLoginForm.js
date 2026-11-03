import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./useAuth.js";

// Hook customizado com a lógica do login: estado dos campos, chamada ao
// AuthContext e redirecionamento para a página que o usuário queria acessar.
export default function useLoginForm() {
  const { entrar } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [valores, setValores] = useState({ email: "", senha: "" });
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);

  // Se o usuário foi mandado para o login por uma rota privada, volta para ela depois.
  const destino = location.state?.from?.pathname || "/biblioteca";

  function alterar(evento) {
    const { name, value } = evento.target;
    setValores((atuais) => ({ ...atuais, [name]: value }));
    setErro("");
  }

  function preencher(email, senha) {
    setValores({ email, senha });
    setErro("");
  }

  async function enviar(evento) {
    evento.preventDefault();

    if (!valores.email.trim() || !valores.senha) {
      setErro("Informe e-mail e senha.");
      return;
    }

    setEnviando(true);
    setErro("");

    try {
      await entrar(valores.email, valores.senha);
      navigate(destino, { replace: true });
    } catch (falha) {
      setErro(falha.message);
      setEnviando(false);
    }
  }

  return { valores, erro, enviando, alterar, preencher, enviar };
}
