// Card de destaque da seção "A Solução". Props: titulo, texto.
function InfoCard({ titulo, texto }) {
  return (
    <div className="card card-hover p-6">
      <h3 className="font-display text-lg font-bold text-roxo">{titulo}</h3>
      <p className="mt-1 text-sm text-muted">{texto}</p>
    </div>
  );
}

export default InfoCard;
