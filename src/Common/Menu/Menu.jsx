import { onToggleMenu } from "../../helpers/onToggleMenu";
import { MenuLink } from "./MenuLink";
import menu from "./menu.json";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const navigate = useNavigate();

  return (
    <section className="menu fixed top-0 h-screen w-screen bg-crema z-10 invisible opacity-0 transition-all duration-500  ">
      <div className="max_width_container h-full">
        {/* Close and multilanguaje button */}
        <div className=" w-[100px] absolute right-0 top-5 cursor-pointer flex items-center justify-between z-10 ">
          <div className="w-[35px] h-[35px] text-black border-2 rounded-[100%] p-1 flex items-center justify-center ">
            EN
          </div>
          <img
            className="w-[30px] "
            onClick={onToggleMenu}
            src="/assets/iconos/x.png"
            alt="equis"
          />
        </div>

        {/* Menu links and logo */}
        <div className="lg:flex lg:relative h-full">
          <div className="absolute top-28">
            {menu.map((item) => (
              <MenuLink {...item} />
            ))}
          </div>

          <div className="w-3/4  m-auto absolute bottom-10 left-0 right-0 lg:w-1/4 lg:m-0 lg:right-initial ">
            <img
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
