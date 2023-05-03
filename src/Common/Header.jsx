import { useLocation, useNavigate } from "react-router-dom";
import { onToggleMenu } from "../helpers/onToggleMenu";

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {/* Backgroun header */}
      {(pathname !== "/favoritos" || pathname !== "/en/favorites") && (
        <div className="bg-black w-full h-[100px] lg:h-[100px] z-10 fixed "></div>
      )}

      {(pathname === "/favoritos" || pathname === "/en/favorites") && (
        <div className="bg-crema w-full h-[100px] lg:h-[100px] z-10 fixed "></div>
      )}

      {/* Burgers */}
      {pathname === "/favoritos" || pathname === "/en/favorites" ? (
        <>
          {/* dark burger */}
          <div
            className="burger group fixed z-30 w-[50px] top-5 lg:top-[25px] right-[7.5%] cursor-pointer"
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
            className="burger group fixed z-30 w-[50px] top-5 lg:top-[25px] right-[7.5%] cursor-pointer"
            onClick={onToggleMenu}
          >
            <img
              className="absolute top-0 w-full transition-all duration-500 opacity-1 group-hover:opacity-0"
              src="/assets/iconos/oscuro/menu_crema.png"
              alt="burger"
            />
            <img
              className="absolute top-0 w-full transition-all duration-500 opacity-0 group-hover:opacity-100"
              src="/assets/iconos/oscuro/menu_crema_hover.png"
              alt="burger"
            />
          </div>
        </>
      )}

      {/* Logo hajj for some pages */}
      {/* white logo */}
      {(pathname !== "/favoritos" || pathname !== "/en/favorites") && (
        <div className="w-2/5 fixed top-5 lg:top-[25px] left-[7.5%] max-w-[150px]  hover:scale-110 transition-all duration-500 z-10 ">
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
      {(pathname === "/favoritos" || pathname === "/en/favorites") && (
        <div className="w-2/5 fixed top-5 lg:top-[25px] left-[7.5%] max-w-[150px]   hover:scale-110 transition-all duration-500 z-10 ">
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
