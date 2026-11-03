import { useEffect } from "react";

// Hook customizado: troca o título da aba do navegador em cada página.
export default function useDocumentTitle(titulo) {
  useEffect(() => {
    document.title = titulo;
  }, [titulo]);
}
