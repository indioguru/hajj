import { useNavigate } from "react-router-dom";
import { onToggleMenu } from "../../helpers/onToggleMenu";

export const MenuLink = ({ link, texto, link_ENG, texto_ENG, lang }) => {
  const navigate = useNavigate();

  return (
    <h2
      onClick={() => {
        navigate(lang === "eng" ? link_ENG  : link);
        onToggleMenu();
      }}
      className="text-black pb-4 cursor-pointer lg:text-5xl hover:translate-x-5 transition-all duration-500 "
    >
       {lang === "eng" ? <>{texto_ENG} </> : <>    {texto}</>}
  
    </h2>
  );
};
