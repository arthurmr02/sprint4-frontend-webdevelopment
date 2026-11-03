// Caixa de mensagem usada nos estados de erro e de lista vazia.
// Props: titulo, texto, rotuloBotao e onClick (o botão só aparece se os dois forem passados).
function EstadoMensagem({ titulo, texto, rotuloBotao, onClick, erro = false }) {
  return (
    <div className="card p-8 text-center" role={erro ? "alert" : "status"}>
      <h3 className={`text-lg font-bold ${erro ? "text-red-400" : ""}`}>{titulo}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted">{texto}</p>
      {rotuloBotao && onClick && (
        <button type="button" onClick={onClick} className="btn btn-ghost mt-5">
          {rotuloBotao}
        </button>
      )}
    </div>
  );
}

export default EstadoMensagem;
