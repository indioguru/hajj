import { useNavigate } from "react-router-dom";
import { onToggleMenu } from "../../helpers/onToggleMenu";

export const MenuLink = ({ link, texto, link_ENG, texto_ENG }) => {
  const navigate = useNavigate();

  return (
    <h2
      onClick={() => {
        navigate(link);
        onToggleMenu();
      }}
      className="text-black pb-4 cursor-pointer hover:scale-110 transition-all duration-500 "
    >
      {texto}
    </h2>
  );
};
