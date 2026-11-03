// Dados estáticos do site (textos da Landing Page).
// Ficam separados dos componentes para que o JSX cuide só da parte visual.
import galeria1 from "../assets/img/galeria-1.png";
import galeria2 from "../assets/img/galeria-2.png";

// Seções que aparecem no menu. O "id" é o mesmo id da <section> na Home.
export const NAV_LINKS = [
  { id: "solucao", label: "A Solução" },
  { id: "publico", label: "Público-Alvo" },
  { id: "galeria", label: "Galeria" },
  { id: "equipe", label: "Nossa Equipe" },
  { id: "contato", label: "Contato" },
];

export const SECOES_NAV = NAV_LINKS.map((link) => link.id);

export const DESTAQUES_SOLUCAO = [
  {
    titulo: "Estudo e fotos pessoais no mesmo app",
    texto:
      "Fotos de lousa, slide e apostila vão para as pastas das matérias. Fotos pessoais continuam na galeria comum, sem se misturar.",
  },
  {
    titulo: "Sem ajuste manual",
    texto:
      "O usuário não escolhe modo, ISO ou foco. A Lensy identifica a cena e aplica o ajuste adequado a ela.",
  },
];

// "variante" controla o encaixe do card na grade (larga, alta ou padrão).
export const ACOES = [
  {
    icone: "scanner",
    titulo: "Scanner inteligente",
    descricao:
      "Ao apontar para um livro, apostila ou documento, a Lensy recorta a página, remove o fundo e salva a captura como digitalização.",
    variante: "larga",
  },
  {
    icone: "traducao",
    titulo: "Tradução de texto",
    descricao:
      "Quando há texto na cena, a Lensy extrai o conteúdo e mostra a tradução na própria câmera, sem abrir outro app.",
    variante: "padrao",
  },
  {
    icone: "perspectiva",
    titulo: "Correção de perspectiva",
    descricao:
      "Documentos e lousas fotografados em ângulo são corrigidos automaticamente, deixando o conteúdo reto e legível.",
    variante: "padrao",
  },
  {
    icone: "retrato",
    titulo: "Retrato otimizado",
    descricao:
      "Quando reconhece uma pessoa, a câmera coloca o foco no rosto e ajusta exposição e fundo para o retrato.",
    variante: "padrao",
  },
  {
    icone: "organizacao",
    titulo: "Organização automática",
    descricao:
      "Conteúdos de estudo são identificados e organizados em pastas sozinhos, sem o usuário precisar mover nenhum arquivo.",
    variante: "alta",
  },
  {
    icone: "escolha",
    titulo: "Escolha automática da ação",
    descricao:
      "A cada nova cena, a Lensy decide qual das cinco ações acima aplicar. O usuário só aponta e captura.",
    variante: "larga",
  },
];

// Frases sorteadas pelo gerador de sugestões (Math.random, vindo da Sprint 03).
export const SUGESTOES = [
  "Aponte para a lousa: a Lensy pode corrigir a perspectiva automaticamente.",
  "Fotografando um livro? A Lensy pode identificar e ativar o modo de digitalização.",
  "Detectamos texto: que tal usar o OCR para transformar a foto em texto editável?",
  "Conteúdo em outro idioma? A Lensy pode traduzir automaticamente.",
  "Muitas fotos de aula acumuladas? A Lensy organiza tudo por matéria.",
  "Fotografando uma pessoa? A Lensy ajusta o foco e a exposição para retratos.",
  "Anotação torta ou mal enquadrada? O scanner inteligente resolve isso.",
  "Você pode salvar este conteúdo automaticamente na pasta da matéria certa.",
];

// "tipo" define o selo (PRIMÁRIO / SECUNDÁRIO) e "posicao" o encaixe na grade em telas grandes.
export const PUBLICO = [
  {
    tipo: "primario",
    titulo: "Estudantes universitários",
    descricao:
      "Fotografam lousas, slides e apostilas todos os dias e precisam desses materiais organizados e legíveis para estudar depois.",
    posicao: "lg:row-start-1 lg:row-end-4 lg:flex lg:flex-col lg:justify-between",
  },
  {
    tipo: "primario",
    titulo: "Vestibulandos e cursinho",
    descricao:
      "Rotina de estudo intensa, com muito conteúdo fotografado por dia: precisam de organização automática, sem perder tempo com apps de scanner.",
    posicao: "lg:row-span-2 lg:row-start-2",
  },
  {
    tipo: "secundario",
    titulo: "Profissionais e autônomos",
    descricao:
      "Digitalizam contratos, recibos e anotações de reunião e se beneficiam da correção de perspectiva e do scanner inteligente.",
    posicao: "lg:row-span-2 lg:row-end-3",
  },
  {
    tipo: "secundario",
    titulo: "Usuários casuais",
    descricao:
      "Querem fotos e retratos melhores no dia a dia, sem aprender configurações. A câmera resolve isso sozinha.",
    posicao: "lg:row-span-2 lg:row-start-2",
  },
];

export const GALERIA = [
  {
    imagem: galeria1,
    largura: 706,
    altura: 449,
    alt: "Três telas do modo estudante da Lensy: câmera reconhecendo o modo estudante, lousa detectada e ajustada automaticamente, e resumo gerado por IA sendo salvo na matéria",
    titulo: "Modo estudante: da lousa ao resumo",
    legenda:
      "A Lensy reconhece a lousa, ajusta foco e contraste automaticamente e usa IA para extrair e salvar um resumo do conteúdo.",
  },
  {
    imagem: galeria2,
    largura: 567,
    altura: 477,
    alt: "Telas de gerenciamento de matérias e do resumo do semestre, com fotos e resumos organizados automaticamente por disciplina",
    titulo: "Organização por matéria",
    legenda:
      "Cada captura entra automaticamente na matéria certa, pronta para virar um documento exportável em PDF.",
  },
];

export const EQUIPE = [
  {
    sigla: "AR",
    nome: "Arthur Romão",
    funcao: "Tech Leader",
    descricao:
      "Liderança técnica do projeto e conexão da solução com o problema da Challenge.",
  },
  {
    sigla: "HF",
    nome: "Henrique Ferreira",
    funcao: "UX/UI Design",
    descricao: "Direção visual da interface da Lensy e da experiência do usuário.",
  },
  {
    sigla: "VR",
    nome: "Vinicius Romão",
    funcao: "Front-End",
    descricao:
      "Desenvolvimento da Landing Page: HTML semântico, CSS Grid e responsividade.",
  },
  {
    sigla: "JC",
    nome: "Julia Camelo",
    funcao: "UX/UI Design",
    descricao:
      "Prototipação das telas do app e do fluxo de captura e salvamento de documentos.",
  },
];

export const EMAIL_EQUIPE = "equipe.lensy@fiap.com.br";

export const REDES_SOCIAIS = [
  { icone: "instagram", label: "Instagram da Lensy", href: "#" },
  { icone: "linkedin", label: "LinkedIn da equipe", href: "#" },
  { icone: "github", label: "GitHub do projeto", href: "#" },
];
