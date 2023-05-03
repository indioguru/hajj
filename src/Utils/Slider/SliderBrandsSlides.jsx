import { Link } from "react-scroll";
import { useLanguaje } from "../../Hooks/useLanguaje";

export const SliderBrandsSlides = ({ items, classSlides }) => {
  const { lang } = useLanguaje();

  return (
    <>
      {items.map((item, i) => (
        <div
          key={`slider_${classSlides}_${i + 1}`}
          className={`slider ${classSlides} h-[80vh] lg:h-[75vh] relative transition-all duration-100`}
        >
          {/* Image */}
          <Link
            to={`slider_${classSlides}`}
            smooth={true}
            offset={window.innerWidth < 999 ? -70 : 0}
            duration={500}
          >
            <img
              className="h-full object-cover object-center brightness-50  cursor-pointer"
              src={item.imagen.url}
              alt="slider-imagen"
            />
          </Link>

          {/* Logo */}
          <div className="absolute w-2/4 max-w-[300px] left-0 right-0 m-auto top-1/2 -translate-y-1/2">
            <a href={item.url_catalogo} target="_blank">
              <img src={item.logo.url} alt="logo" />
            </a>
          </div>

          {/* Brand info */}
          <div className="absolute bottom-5 left-0 right-0 m-auto w-4/5 lg:left-10 lg:m-0 lg:bottom-10 ">
            <p className="eleanor-light text-xl lg:text-3xl"> {item.nombre}</p>
            <p className="text-xs lg:text-base">
              {lang === "eng" ? <> {item.info_ENG}</> : <> {item.info}</>}
            </p>

            {item.url_catalogo && (
              <a
                className="block eleanor-light w-2/3 mt-2 text-2xl hover:scale-100 "
                target="_blank"
                href={item.url_catalogo}
              >
                {lang === "eng" ? <>See catalog</> : <>Ver catálogo</>}

                <img
                  className="w-[15px] inline-block ml-2"
                  src="/assets/iconos/oscuro/flecha_texto.png"
                  alt="flecha_texto_fb"
                />
              </a>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
