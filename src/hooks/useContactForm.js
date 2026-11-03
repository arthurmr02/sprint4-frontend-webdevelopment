import { useReducer, useRef } from "react";
import { enviarMensagem } from "../services/contatoService.js";
import { ehEmailValido } from "../utils/formatadores.js";

const ESTADO_INICIAL = {
  valores: { nome: "", email: "", mensagem: "" },
  erros: {},
  status: "ocioso", // ocioso | enviando | sucesso | erro
  feedback: "",
};

// useReducer organiza as mudanças de estado do formulário em um só lugar.
function reducer(estado, acao) {
  switch (acao.tipo) {
    case "alterar":
      return {
        ...estado,
        valores: { ...estado.valores, [acao.campo]: acao.valor },
        erros: { ...estado.erros, [acao.campo]: undefined },
      };
    case "invalido":
      return { ...estado, erros: acao.erros, status: "erro", feedback: "Corrija os campos destacados." };
    case "enviando":
      return { ...estado, erros: {}, status: "enviando", feedback: "" };
    case "sucesso":
      return { ...ESTADO_INICIAL, status: "sucesso", feedback: "Mensagem enviada com sucesso!" };
    case "falha":
      return { ...estado, status: "erro", feedback: acao.mensagem };
    default:
      return estado;
  }
}

function validar({ nome, email, mensagem }) {
  const erros = {};
  if (nome.trim().length < 3) erros.nome = "Informe seu nome completo.";
  if (!ehEmailValido(email.trim())) erros.email = "Informe um e-mail válido.";
  if (mensagem.trim().length < 10) erros.mensagem = "Escreva pelo menos 10 caracteres.";
  return erros;
}

// Hook customizado: toda a lógica do formulário de contato (validação + envio para a API).
// O componente só cuida de mostrar os campos.
export default function useContactForm() {
  const [estado, dispatch] = useReducer(reducer, ESTADO_INICIAL);

  // useRef guarda a referência dos campos para focar no primeiro com erro.
  const camposRef = useRef({});

  function registrar(campo) {
    return (elemento) => {
      camposRef.current[campo] = elemento;
    };
  }

  function alterar(evento) {
    const { name, value } = evento.target;
    dispatch({ tipo: "alterar", campo: name, valor: value });
  }

  async function enviar(evento) {
    evento.preventDefault();

    const erros = validar(estado.valores);
    const primeiroCampoComErro = ["nome", "email", "mensagem"].find((campo) => erros[campo]);

    if (primeiroCampoComErro) {
      dispatch({ tipo: "invalido", erros });
      camposRef.current[primeiroCampoComErro]?.focus();
      return;
    }

    dispatch({ tipo: "enviando" });

    try {
      await enviarMensagem(estado.valores);
      dispatch({ tipo: "sucesso" });
    } catch (erro) {
      dispatch({ tipo: "falha", mensagem: erro.message || "Não foi possível enviar. Tente novamente." });
    }
  }

  return { ...estado, alterar, enviar, registrar };
}
