import { Link } from "react-scroll";

export const ButtonScrollTop = ({ scrollTo, color }) => {
  return (
    <div className="flex justify-center pb-20 ">
      {color === "black" ? (
        <Link to={scrollTo} smooth={true} offset={0} duration={1000}>
          <img
            className="w-1/4 m-auto hover:scale-110 transition-all duration-500 cursor-pointer"
            src="/assets/iconos/claro/arriba_fb.png"
            alt="arrow that allows to go to the up of the page"
          />
        </Link>
      ) : (
        <Link to={scrollTo} smooth={true} offset={0} duration={1000}>
          <img
            className="w-1/4 m-auto  hover:scale-110 transition-all duration-500 cursor-pointer"
            src="/assets/iconos/oscuro/arriba.png"
            alt="arrow that allows to go to the up of the page"
          />
        </Link>
      )}
    </div>
  );
};
