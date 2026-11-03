import { Link } from "react-router-dom";
import iconeLogo from "../../assets/img/logo-smartlens-icone.png";

// Logo da Lensy (ícone + nome). Leva para a Home.
function Logo({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center gap-2.5 text-[19px] font-bold"
      aria-label="Lensy, ir para o início"
    >
      <span className="flex size-[34px] shrink-0 items-center justify-center rounded-md bg-white p-0.5">
        <img src={iconeLogo} width="30" height="30" className="size-[30px]" alt="" />
      </span>
      <span aria-hidden="true">Lensy</span>
    </Link>
  );
}

export default Logo;
