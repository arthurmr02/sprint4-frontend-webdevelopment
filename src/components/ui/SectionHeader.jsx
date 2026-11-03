// Cabeçalho padrão das seções: etiqueta (eyebrow), título e texto opcional.
// Props: etiqueta, titulo, texto, roxo (muda a cor da etiqueta), className.
function SectionHeader({ etiqueta, titulo, texto, roxo = false, className = "mb-12 max-w-[650px]" }) {
  return (
    <div className={className}>
      <span className={`eyebrow ${roxo ? "eyebrow-roxo" : ""}`}>{etiqueta}</span>
      <h2 className="section-title">{titulo}</h2>
      {texto && <p className="section-text">{texto}</p>}
    </div>
  );
}

export default SectionHeader;
