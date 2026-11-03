import { useCallback } from "react";
import { buscarCapturaPorId, listarCapturas } from "../services/capturasService.js";
import useFetch from "./useFetch.js";

// Lista de capturas vinda da API.
export function useCapturas() {
  const { data, loading, error, recarregar } = useFetch(listarCapturas);
  return { capturas: data ?? [], loading, error, recarregar };
}

// Uma captura específica (página de detalhe).
export function useCaptura(id) {
  // useCallback mantém a mesma função enquanto o id não muda.
  const buscador = useCallback((signal) => buscarCapturaPorId(id, signal), [id]);
  const { data, loading, error, recarregar } = useFetch(buscador);
  return { captura: data, loading, error, recarregar };
}
