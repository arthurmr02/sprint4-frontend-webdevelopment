// Ícones SVG da Landing Page em um só lugar.
// Uso: <Icon nome="scanner" className="w-[22px]" />
const ICONES = {
  scanner: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </>
  ),
  traducao: (
    <>
      <path d="M4 5h16M4 12h10M4 19h13" />
      <path d="M17 15l3 3-3 3" />
    </>
  ),
  perspectiva: <path d="M4 7l4-3h8l4 3M4 7v13h16V7M4 7l8 5 8-5" />,
  retrato: (
    <>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5 20c1.6-4 4.4-6 7-6s5.4 2 7 6" />
    </>
  ),
  organizacao: <path d="M3 7l2-3h6l2 3h8v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z" />,
  escolha: <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />,
  email: (
    <>
      <path d="M4 6h16v12H4z" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  telefone: (
    <path d="M20.5 16.5v2a2 2 0 0 1-2.2 2 18 18 0 0 1-7.9-2.8 17.6 17.6 0 0 1-5.4-5.4A18 18 0 0 1 2.2 4.4 2 2 0 0 1 4.2 2.2h2a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7.1 9.8a14.4 14.4 0 0 0 5.1 5.1l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
  ),
  globo: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.4 2.6 3.6 5.7 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.7-3.6-9s1.2-6.4 3.6-9z" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10v7M7 7v.01M11 17v-4.5a2.5 2.5 0 0 1 5 0V17M11 10v7" />
    </>
  ),
  github: (
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2-.2 4-1 4-4.5 0-1-.4-2-1-2.7.1-.3.4-1.4-.1-2.8 0 0-.9-.3-3 1a10 10 0 0 0-5.4 0c-2.1-1.3-3-1-3-1-.5 1.4-.2 2.5-.1 2.8-.6.7-1 1.7-1 2.7 0 3.5 2 4.3 4 4.5-.5.5-.5 1-.5 2V19" />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  fechar: <path d="M6 6l12 12M18 6L6 18" />,
  estrela: <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />,
  voltar: <path d="M19 12H5M11 6l-6 6 6 6" />,
  busca: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </>
  ),
};

function Icon({ nome, className = "size-5", strokeWidth = 1.8, preenchido = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={preenchido ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONES[nome]}
    </svg>
  );
}

export default Icon;
