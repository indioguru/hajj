import { onToggleMenu } from "../../helpers/onToggleMenu";
import { MenuLink } from "./MenuLink";
import { useNavigate } from "react-router-dom";
import menu from "./menu.json";
import { useLanguaje } from "../../Hooks/useLanguaje";

export const Menu = () => {
  const navigate = useNavigate();
  const { lang } = useLanguaje();

  return (
    <section className="menu fixed top-0 h-screen w-screen bg-crema z-[100] invisible opacity-0 transition-all duration-500  ">
      {/* Close and multilanguaje button */}
      <div className=" w-[100px] absolute top-5 right-[7.5%] cursor-pointer flex items-center justify-between z-10 ">
        <div
          onClick={() => {
            navigate(lang === "eng" ? "/"  : "/en");
            onToggleMenu();
          }}
          className="w-[35px] h-[35px] text-black border-2 rounded-[100%] p-1 flex items-center justify-center hover:scale-110 transition-all duration-500"
        >
          {lang === "eng" ? <>ES</> : <> EN</>}
        </div>
        <img
          className="w-[30px] hover:scale-110 transition-all duration-500"
          onClick={onToggleMenu}
          src="/assets/iconos/x.png"
          alt="equis"
        />
      </div>
      <div className="max_width_container h-full">
        {/* Menu links*/}
        <div className="lg:flex lg:relative h-full">
          <div className="absolute top-28">
            {menu.map((item, i) => (
              <MenuLink key={`key_menu_${i}`} {...item} lang={lang} />
            ))}
          </div>

          {/* LOGO HAJJ */}
          <div className="w-3/4  m-auto absolute bottom-10 left-0 right-0 lg:w-1/4 lg:m-0 lg:left-[initial] hover:scale-110 transition-all duration-500 ">
            <img
              className="cursor-pointer "
              onClick={() => {
                navigate("/");
                onToggleMenu();
              }}
              src="/assets/logo/hajj_logo_negro.png"
              alt="hajj_logo_negro"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
