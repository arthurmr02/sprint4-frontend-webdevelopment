// Card de um integrante da equipe. Props: sigla, nome, funcao, descricao.
function TeamMemberCard({ sigla, nome, funcao, descricao }) {
  return (
    <div className="card card-hover p-6">
      <div className="mb-4 flex size-[52px] items-center justify-center rounded-md border border-line bg-brand-soft font-display font-bold text-brand">
        {sigla}
      </div>
      <h3 className="text-base font-bold">{nome}</h3>
      <span className="mt-1 block text-[11px] font-bold tracking-wider text-brand uppercase">{funcao}</span>
      <p className="mt-2.5 text-[13px] text-muted">{descricao}</p>
    </div>
  );
}

export default TeamMemberCard;
