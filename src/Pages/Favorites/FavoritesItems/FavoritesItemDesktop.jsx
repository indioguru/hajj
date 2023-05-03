import { useAnimationScroll } from "../../../Hooks/useAnimationScroll";

export const FavoritesItemDesktop = ({
  info,
  referencia_titulo,
  info_ENG,
  imagen,
  marca_titulo,
  logo,
  link,
  lang,
}) => {
  useAnimationScroll("favorite-item-container", "translate-zero");

  return (
    <>
      <div className="favorite-item pb-32 flex max_width_container justify-between items-center ">
        {/* Favorite item */}
        <div className="relative mb-10 duration-500 w-[48%]">
          <div className="favorite-item-container duration-[1.5s] ">
            <div className="close">
              <img
                className="absolute top-5 left-0 right-0 m-auto z-[5] opacity-0 transition-all duration-500 w-[20px]"
                src="/assets/iconos/x_white.png"
                alt="icon"
              />
            </div>

            {/* background image */}
            {imagen && (
              <img
                className=" brightness-75 h-[70vh] object-cover transition-all duration-500 "
                src={imagen.url}
                alt="imagen"
              />
            )}

            <div className="flex absolute bottom-5 w-[90%] left-0 right-0 m-auto justify-between items-center ">
              <div className="w-2/4">
                <p className="text-crema text-2xl">{referencia_titulo}</p>
                <p className="text-crema">{marca_titulo}</p>
              </div>

              <div className="w-1/4">
                {logo && <img src={logo.url} alt="logo" />}
              </div>
            </div>
          </div>
        </div>

        {/* Information */}
        <div className=" w-[48%] ">
          <h2>{referencia_titulo}</h2>
          <p> {lang === "eng" ? <>{info_ENG}</> : <>{info}</>} </p>

          {link && (
            <a
              className="block tertiary w-2/3 mt-10 text-2xl group "
              target="_blank"
              href={link}
            >
              <span className="duration-500 group-hover:translate-x-[-3px] inline-block ">
                {lang === "eng" ? (
                  <>Find out more about this reference</>
                ) : (
                  <>Descubre más de esta referencia</>
                )}
              </span>
              <img
                className="w-[15px] inline-block ml-2 duration-500 group-hover:translate-x-2 "
                src="/assets/iconos/claro/flecha_texto_fb.png"
                alt="flecha_texto_fb"
              />
            </a>
          )}
        </div>
      </div>
    </>
  );
};
