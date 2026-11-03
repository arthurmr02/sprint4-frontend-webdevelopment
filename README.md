# Lensy (Smart Lens) · Sprint 04

Projeto da equipe **Smart Lens** para a **Challenge JOVI Smartphone (FIAP)**. A **Lensy** é uma câmera inteligente que usa visão computacional para identificar a cena e aplicar a ação correspondente: digitalizar documentos, traduzir textos, corrigir perspectiva, ajustar retratos e salvar o material de estudo na pasta da matéria.

Esta entrega é **única e conjunta** para as disciplinas de **Front-End Design** e **Web Development**. Ela é a **evolução do mesmo projeto da Sprint 03**: a solução da Challenge, o conteúdo e a identidade visual (cores, fontes e logo) foram mantidos. Nesta Sprint o projeto foi integrado ao **React**, estilizado com **Tailwind CSS**, ganhou **rotas públicas e privadas**, **hooks customizados** e **consumo de API**.

## 1. Tecnologias utilizadas

- **React 18** (componentes funcionais e hooks)
- **React Router DOM 6** (rotas públicas e privadas)
- **Tailwind CSS v4** (plugin oficial para o Vite)
- **Vite 5** (servidor de desenvolvimento e build)
- **JavaScript** (sem TypeScript)
- **Fetch API** (consumo de API própria mockada e de API pública de terceiros)
- **localStorage** (sessão do usuário e favoritos)
- **Google Fonts**: Space Grotesk e Manrope
- **Git + Vercel** (repositório e deploy)

## 2. Como instalar as dependências

Pré-requisito: [Node.js](https://nodejs.org/) **18 ou superior** (com npm).

Na pasta do projeto (onde está o `package.json`), execute:

```bash
npm install
```

## 3. Como executar o projeto

Modo de desenvolvimento:

```bash
npm run dev
```

O terminal mostra o endereço local, normalmente `http://localhost:5173`. Abra no navegador.

Para gerar o build de produção e visualizá-lo localmente (mesmo resultado do deploy):

```bash
npm run build
npm run preview
```

O build é gerado na pasta `dist/` e o preview abre em `http://localhost:4173`.

## 4. Como executar os servidores (Back-end)

**Não é necessário rodar nenhum servidor além do `npm run dev`.** O projeto não possui back-end próprio nem banco de dados:

- A **API própria (mockada)** é um arquivo JSON servido junto com o site: `public/api/capturas.json`, acessado em `GET /api/capturas.json`. Ela funciona no `npm run dev`, no `npm run preview` e na Vercel, sem configuração extra.
- O **formulário de contato** envia um `POST` para a API pública **JSONPlaceholder** (`https://jsonplaceholder.typicode.com/posts`). Essa chamada precisa de internet. A API aceita o envio e devolve o registro com um `id`, mas não grava nada de verdade.

## 5. Usuários e senhas para teste

A autenticação é simulada (projeto acadêmico, sem servidor). Use um dos usuários abaixo na página `/login`:

| Perfil | E-mail | Senha |
|---|---|---|
| Estudante (João Silva) | `aluno@lensy.com` | `lensy123` |
| Professor | `professor@fiap.com.br` | `fiap2026` |

A própria página de login também lista esses usuários e preenche o formulário com um clique. Cada usuário tem a sua lista de favoritos, salva no navegador.

## 6. Rotas da aplicação

| Rota | Tipo | O que mostra |
|---|---|---|
| `/` | Pública | Landing Page da Lensy (hero, solução, público-alvo, galeria, equipe e contato) |
| `/login` | Pública (só visitantes) | Formulário de login. Quem já está logado é redirecionado para a biblioteca |
| `/biblioteca` | **Privada** | Biblioteca de capturas vinda da API, com busca, filtro por matéria e favoritos |
| `/biblioteca/:id` | **Privada** | Detalhe de uma captura (resumo gerado pela IA, tags e favoritar) |
| `*` | Pública | Página 404 |

Quem tenta abrir uma rota privada sem estar logado é enviado para `/login` e, depois de entrar, volta para a página que tinha pedido. As rotas privadas são protegidas pelo componente `PrivateRoute` (`src/routes/PrivateRoute.jsx`).

## 7. Como o projeto atende aos requisitos da Sprint 04

### React

- **Componentização:** cada parte da Landing Page é um componente (`Hero`, `SolutionSection`, `AudienceSection`, `GallerySection`, `TeamSection`, `ContactSection`, `Header`, `Footer`...), mais cards reutilizáveis.
- **Props:** os cards recebem os dados por props (`FeatureCard`, `AudienceCard`, `TeamMemberCard`, `GalleryItem`, `CapturaCard`, `FormField`, `SectionHeader`). Os textos ficam em `src/data/site.js`, separados do JSX.
- **Rotas públicas e privadas:** React Router com `PrivateRoute`, `PublicOnlyRoute` e rota dinâmica `/biblioteca/:id` (`useParams`).
- **Hooks nativos usados:** `useState`, `useEffect`, `useRef`, `useMemo`, `useCallback`, `useReducer`, `useContext`.
- **Hooks customizados (lógica separada da parte visual)**, todos em `src/hooks/`:

| Hook | Função |
|---|---|
| `useFetch` | Consome qualquer função de API com estados `data`, `loading`, `error` e `recarregar`, cancelando a requisição ao sair da tela |
| `useCapturas` / `useCaptura` | Lista e detalhe das capturas, usando o `useFetch` |
| `useFiltroCapturas` | Busca, filtro por matéria e "somente favoritas" (`useMemo`) |
| `useFavoritos` | Favoritos por usuário, salvos no localStorage |
| `useLocalStorage` | Funciona como `useState`, mas persiste no localStorage |
| `useAuth` | Acesso ao usuário logado (Context API) |
| `useLoginForm` | Estado e envio do formulário de login |
| `useContactForm` | Validação e envio do formulário de contato (`useReducer` + `useRef`) |
| `useMenuMobile` | Abrir e fechar o menu hambúrguer (Esc e mudança de tamanho de tela) |
| `useSecaoAtiva` | Destaca no menu a seção visível (`IntersectionObserver`) |
| `useSugestao` | Gerador de sugestões com `Math.random()` (vindo da Sprint 03) |
| `useDocumentTitle` | Título da aba em cada página |

### Tailwind CSS

Toda a estilização usa Tailwind CSS v4. As cores e fontes da Lensy estão no bloco `@theme` de `src/index.css`, e as classes repetidas (`btn`, `card`, `eyebrow`...) foram agrupadas com `@apply` no mesmo arquivo.

### Responsividade

Mantida para os três tamanhos:

| Dispositivo | Largura | Comportamento |
|---|---|---|
| Mobile | até 639 px | Uma coluna, botões em largura total, menu hambúrguer |
| Tablet | 640 px a 1023 px | Grades em 2 colunas, menu hambúrguer |
| Desktop | 1024 px ou mais | Menu completo no topo, grades de 3 e 4 colunas |

### Consumo de API

- **API própria (mockada):** `GET /api/capturas.json` alimenta a Biblioteca e o detalhe, com estados de carregando (esqueleto), erro (com botão "Tentar de novo") e lista vazia. Serviço em `src/services/capturasService.js`.
- **API pública de terceiros:** `POST` do formulário de contato para a JSONPlaceholder (`src/services/contatoService.js`).
- Toda chamada passa pelo cliente `src/services/http.js`, que trata os erros de rede e de resposta.

### O que veio da Sprint 03

O **gerador de sugestões** (`Math.random()` e `Math.floor()`) agora está na seção "A Solução", com Tailwind e o hook `useSugestao`. Os **favoritos com localStorage** agora ficam na Biblioteca (área privada), um conjunto por usuário.

## 8. Estrutura do projeto

```
├── index.html
├── package.json
├── vite.config.js          # plugins do React e do Tailwind
├── vercel.json             # redireciona todas as rotas para o index.html (SPA)
├── public/
│   ├── api/capturas.json   # API própria (mockada)
│   └── favicon.png, apple-touch-icon.png
├── src/
│   ├── main.jsx, App.jsx   # entrada e mapa de rotas
│   ├── index.css           # Tailwind + identidade visual da Lensy
│   ├── assets/img/         # imagens do protótipo, galeria e logo
│   ├── components/         # layout, sections, cards, biblioteca, ui
│   ├── contexts/           # AuthContext (Context API)
│   ├── data/               # textos e listas da Landing Page
│   ├── hooks/              # hooks customizados
│   ├── layouts/            # MainLayout (menu, conteúdo e rodapé)
│   ├── pages/              # Home, Login, Biblioteca, CapturaDetalhe, NotFound
│   ├── routes/             # PrivateRoute, PublicOnlyRoute, ScrollToHash
│   ├── services/           # http, capturas, contato e autenticação
│   └── utils/              # funções de apoio (datas, e-mail)
├── README.md
└── INTEGRANTES.TXT
```

## 9. Deploy e repositório

O deploy é feito pela **Vercel**, ligada ao repositório Git. A Vercel detecta o Vite sozinha (comando `npm run build`, pasta de saída `dist`). O arquivo `vercel.json` garante que endereços como `/biblioteca` funcionem ao atualizar a página.

- **Deploy na Vercel:** sprint4-frontend-webdevelopment.vercel.app
- **Repositório Git:** https://github.com/arthurmr02/sprint4-frontend-webdevelopment

## 10. Integrantes

Veja o arquivo [`INTEGRANTES.TXT`](INTEGRANTES.TXT).
