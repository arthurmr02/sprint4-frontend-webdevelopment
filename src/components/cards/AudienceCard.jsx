const SELOS = {
  primario: { texto: "PRIMÁRIO", classe: "bg-roxo-soft text-roxo" },
  secundario: { texto: "SECUNDÁRIO", classe: "border border-line text-muted" },
};

// Card de um público-alvo. Props: tipo, titulo, descricao, posicao (classes de encaixe na grade).
function AudienceCard({ tipo, titulo, descricao, posicao = "" }) {
  const selo = SELOS[tipo];

  return (
    <div className={`card card-hover p-6 ${posicao}`}>
      <span className={`inline-block self-start rounded-md px-2.5 py-1 text-[11px] font-bold ${selo.classe}`}>
        {selo.texto}
      </span>
      <div>
        <h3 className="mt-3 text-base font-bold">{titulo}</h3>
        <p className="mt-2 text-sm text-muted">{descricao}</p>
      </div>
    </div>
  );
}

export default AudienceCard;
