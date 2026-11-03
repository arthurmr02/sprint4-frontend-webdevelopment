import Icon from "../ui/Icon.jsx";

// Como cada card se encaixa na grade de 3 colunas (desktop) e 2 colunas (tablet).
const VARIANTES = {
  padrao: "",
  larga:
    "sm:col-span-2 sm:grid sm:content-center sm:grid-cols-[auto_1fr] sm:gap-x-5 sm:[&>div]:row-span-2 sm:[&>h3]:mt-0",
  alta: "lg:row-span-2 lg:flex lg:flex-col lg:justify-between",
};

// Card reutilizável de uma ação automática da Lensy.
// Props: icone, titulo, descricao, variante ("padrao" | "larga" | "alta").
function FeatureCard({ icone, titulo, descricao, variante = "padrao" }) {
  const titulOeTexto = (
    <>
      <h3 className="mt-4 text-lg font-bold">{titulo}</h3>
      <p className="mt-2 text-sm text-muted">{descricao}</p>
    </>
  );

  return (
    <article className={`card card-hover p-6 ${VARIANTES[variante]}`}>
      <div className="flex size-11 items-center justify-center rounded-md bg-brand-soft text-brand">
        <Icon nome={icone} className="w-[22px]" />
      </div>
      {variante === "alta" ? <div>{titulOeTexto}</div> : titulOeTexto}
    </article>
  );
}

export default FeatureCard;
