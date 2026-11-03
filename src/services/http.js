// Cliente HTTP simples usado por todos os serviços.
// Centraliza o fetch, a leitura do JSON e o tratamento de erros,
// assim os hooks e os componentes não precisam repetir isso.

export class ErroHttp extends Error {
  constructor(mensagem, status) {
    super(mensagem);
    this.name = "ErroHttp";
    this.status = status;
  }
}

export async function requisitar(url, opcoes = {}) {
  let resposta;

  try {
    resposta = await fetch(url, opcoes);
  } catch (erro) {
    // Cancelamentos (AbortController) são repassados sem alteração.
    if (erro.name === "AbortError") throw erro;
    throw new ErroHttp("Sem conexão com o servidor. Verifique sua internet e tente de novo.", 0);
  }

  if (!resposta.ok) {
    throw new ErroHttp(`O servidor respondeu com erro (${resposta.status}).`, resposta.status);
  }

  return resposta.json();
}
