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
      className="text-black pb-4"
    >
      {texto}
    </h2>
  );
};
