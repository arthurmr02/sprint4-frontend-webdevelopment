// Três números no topo da Biblioteca. Props: total, favoritas, materias.
function ResumoBiblioteca({ total, favoritas, materias }) {
  const itens = [
    { rotulo: "Capturas salvas", valor: total },
    { rotulo: "Favoritas", valor: favoritas },
    { rotulo: "Matérias", valor: materias },
  ];

  return (
    <dl className="grid grid-cols-3 gap-3 sm:gap-5">
      {itens.map((item) => (
        <div key={item.rotulo} className="card px-3 py-4 text-center sm:px-6 sm:py-5">
          <dd className="font-display text-2xl font-bold text-brand sm:text-3xl">{item.valor}</dd>
          <dt className="mt-1 text-[12px] text-muted sm:text-[13px]">{item.rotulo}</dt>
        </div>
      ))}
    </dl>
  );
}

export default ResumoBiblioteca;
