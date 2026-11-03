import { Link } from "react-router-dom";

// Link para uma seção da Home (ex.: secao="contato" vira "/#contato").
// Funciona de qualquer página: se não estiver na Home, volta para ela e rola até a seção
// (a rolagem é feita pelo componente ScrollToHash).
function HashLink({ secao, children, ...props }) {
  return (
    <Link to={{ pathname: "/", hash: `#${secao}` }} {...props}>
      {children}
    </Link>
  );
}

export default HashLink;
