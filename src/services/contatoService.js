// Serviço do formulário de contato.
// Usa uma API pública de terceiros (JSONPlaceholder): o POST é aceito e a API
// devolve o registro "criado" com um id, mas nada é gravado de verdade.
import { requisitar } from "./http.js";

const URL_CONTATO =
  import.meta.env.VITE_CONTATO_API_URL || "https://jsonplaceholder.typicode.com/posts";

export function enviarMensagem({ nome, email, mensagem }) {
  return requisitar(URL_CONTATO, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({
      title: `Contato de ${nome} (${email})`,
      body: mensagem,
      userId: 1,
    }),
  });
}
