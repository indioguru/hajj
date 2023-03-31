import { useLocation, useNavigate } from "react-router-dom";
import { onToggleMenu } from "../helpers/onToggleMenu";

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {pathname === "/favoritos" ? (
        <>
          {/* dark burger */}
          <div
            className="burger group fixed z-10 w-[50px] top-5 right-[7.5%] cursor-pointer"
            onClick={onToggleMenu}
          >
            <img
              className="absolute top-0 w-full transition-all duration-500 opacity-1 group-hover:opacity-0"
              src="/assets/iconos/claro/menu_negro.png"
              alt="burger"
            />
            <img
              className="absolute top-0 w-full transition-all duration-500 opacity-0 group-hover:opacity-1"
              src="/assets/iconos/claro/menu_negro.png"
              alt="burger"
            />
          </div>
        </>
      ) : (
        <>
          {/* Light burger */}
          <div
            className="burger group fixed z-10 w-[50px] top-5 right-[7.5%] cursor-pointer"
            onClick={onToggleMenu}
          >
            <img
              className="absolute top-0 w-full transition-all duration-500 opacity-1 group-hover:opacity-0"
              src="/assets/iconos/oscuro/menu_crema.png"
              alt="burger"
            />
            <img
              className="absolute top-0 w-full transition-all duration-500 opacity-0 group-hover:opacity-1"
              src="/assets/iconos/oscuro/menu_crema_hover.png"
              alt="burger"
            />
          </div>
        </>
      )}

      {/* Logo hajj for some pages */}
      {/* white logo */}
      {(pathname === "/proyectos" ||
        pathname === "/showrooms" ||
        pathname === "/projects") && (
        <div className="w-2/5 absolute top-5 left-[7.5%] max-w-[250px]  hover:scale-110 transition-all duration-500 z-10 ">
          <img
            className="cursor-pointer "
            onClick={() => {
              navigate("/");
            }}
            src="/assets/logo/hajj_logo_blanco.png"
            alt="hajj_logo_negro"
          />
        </div>
      )}

      {/* Black logo */}
      {(pathname === "/favoritos" ||
        pathname === "/favorites") && (
        <div className="w-2/5 absolute top-5 left-[7.5%] max-w-[250px]   hover:scale-110 transition-all duration-500 z-10 ">
          <img
            className="cursor-pointer "
            onClick={() => {
              navigate("/");
            }}
            src="/assets/logo/hajj_logo_negro.png"
            alt="hajj_logo_negro"
          />
        </div>
      )}
    </>
  );
};
