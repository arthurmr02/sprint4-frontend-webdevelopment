import prototipo from "../../assets/img/prototipo-captura-documento.png";
import HashLink from "../layout/HashLink.jsx";

function Hero() {
  return (
    <section className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24" aria-label="Apresentação da Lensy">
      <div className="wrap">
        <div className="card relative px-5 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <span className="corner corner-tl"></span>
          <span className="corner corner-tr"></span>
          <span className="corner corner-bl"></span>
          <span className="corner corner-br"></span>
          <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div>
              <span className="eyebrow">Smart Lens · Challenge JOVI Smartphone</span>
              <h1 className="mt-4 text-[38px] leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-[56px]">
                Uma câmera inteligente que <span className="text-brand">entende você.</span>
              </h1>
              <p className="mt-5 text-lg font-bold text-roxo sm:text-[19px]">
                A câmera reconhece a cena e escolhe sozinha o que fazer com a foto.
              </p>
              <p className="mt-5 max-w-[560px] text-base text-muted sm:text-[17px]">
                A câmera do celular tem recursos que a maioria das pessoas não chega a usar, porque eles ficam escondidos em menus e modos manuais. A Lensy usa visão computacional para identificar o que está no visor e executar a ação certa: digitaliza documentos, corrige a perspectiva, traduz textos, ajusta retratos e salva o material de estudo na pasta da matéria.
              </p>
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
                <HashLink secao="solucao" className="btn btn-primary w-full sm:w-auto">
                  Como a Lensy funciona
                </HashLink>
                <HashLink secao="galeria" className="btn btn-ghost w-full sm:w-auto">
                  Ver a interface
                </HashLink>
              </div>
            </div>

            {/* Protótipo real da equipe: tela de captura de documento */}
            <figure className="mx-auto w-full max-w-[204px]">
              <img
                src={prototipo}
                width="204"
                height="404"
                className="mx-auto h-auto w-full max-w-[204px]"
                alt="Protótipo da Lensy no celular: tela de captura de documento com a mensagem IA extraindo conteúdo da lousa, a pasta Engenharia de Software selecionada, um resumo gerado pela IA e os botões Salvar e adicionar ao doc e Descartar"
              />
              <figcaption className="mt-3 text-center text-[13px] text-muted">
                Protótipo da equipe: captura salva na pasta da matéria
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
