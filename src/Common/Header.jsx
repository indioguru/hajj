import { onToggleMenu } from "../helpers/onToggleMenu";

export const Header = () => {
  return (
    <>
      {/* Light burger */}
      <div className="burger group fixed z-10 w-[50px] top-5 right-8 cursor-pointer" onClick={onToggleMenu}>
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

      {/* dark burger */}
      {/* <div className="burger fixed">
        <img src="/assets/iconos/claro/menu_negro.png" alt="burger" />
        <img src="/assets/iconos/claro/menu_negro.png" alt="burger" />
      </div> */}
    </>
  );
};
