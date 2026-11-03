// Esqueleto exibido enquanto a API responde (estado de "carregando").
function CapturaSkeleton() {
  return (
    <div className="card animate-pulse p-6" aria-hidden="true">
      <div className="h-5 w-24 rounded-md bg-line"></div>
      <div className="mt-5 h-5 w-3/4 rounded-md bg-line"></div>
      <div className="mt-3 h-3 w-full rounded-md bg-line"></div>
      <div className="mt-2 h-3 w-2/3 rounded-md bg-line"></div>
      <div className="mt-8 h-3 w-1/2 rounded-md bg-line"></div>
    </div>
  );
}

export default CapturaSkeleton;
