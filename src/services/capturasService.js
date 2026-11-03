// Serviço da API própria (mockada) da Lensy.
// Os dados ficam em public/api/capturas.json e são servidos como um endpoint
// REST de leitura: GET /api/capturas.json. O mesmo caminho funciona no
// "npm run dev", no "npm run preview" e no deploy da Vercel.
import { ErroHttp, requisitar } from "./http.js";

const URL_CAPTURAS = `${import.meta.env.BASE_URL}api/capturas.json`;

// Lista todas as capturas salvas pela Lensy.
export function listarCapturas(signal) {
  return requisitar(URL_CAPTURAS, { signal });
}

// Busca uma captura pelo id (usado na página de detalhe).
export async function buscarCapturaPorId(id, signal) {
  const capturas = await listarCapturas(signal);
  const captura = capturas.find((item) => String(item.id) === String(id));

  if (!captura) {
    throw new ErroHttp("Captura não encontrada.", 404);
  }

  return captura;
}
