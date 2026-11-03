// Figura da galeria, com os "cantos de visor" da câmera.
// Props: imagem, largura, altura, alt, titulo, legenda.
function GalleryItem({ imagem, largura, altura, alt, titulo, legenda }) {
  return (
    <figure className="group">
      <div className="card relative overflow-visible p-2 transition-colors group-hover:border-brand/70">
        <span className="corner corner-tl"></span>
        <span className="corner corner-tr"></span>
        <span className="corner corner-bl"></span>
        <span className="corner corner-br"></span>
        <div className="overflow-hidden rounded-md">
          <img src={imagem} width={largura} height={altura} loading="lazy" className="h-auto w-full" alt={alt} />
        </div>
      </div>
      <figcaption className="mt-4 text-center">
        <h3 className="text-base font-bold">{titulo}</h3>
        <p className="mx-auto mt-1 max-w-md text-[13px] text-muted">{legenda}</p>
      </figcaption>
    </figure>
  );
}

export default GalleryItem;
