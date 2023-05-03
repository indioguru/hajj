import { useState } from "react";
import { useAnimationScroll } from "../../../Hooks/useAnimationScroll";

export const FavoritesItem = ({
  info,
  imagen,
  referencia_titulo,
  info_ENG,
  referencia_titulo_ENG,
  marca_titulo,
  logo,
  link,
  lang,
}) => {
  const [fullView, setFullView] = useState(false);
  useAnimationScroll("favorite-item", "translate-zero")


  return (
    <div className="pb-32">
      {/* Favorite item */}

      {/* IMAGE */}
      <div
        className={
          fullView
            ? "relative mb-10 duration-500"
            : "relative mb-10 max_width_container duration-500"
        }
      >

        {/* Animation scroll */}
        <div className="favorite-item duration-[1.5s] translate-x-[100vw]">
          <div className="close">
            <img
              className={
                fullView
                  ? "absolute top-5 left-0 right-0 m-auto z-[5] opacity-1 transition-all duration-500 w-[20px]"
                  : "absolute top-5 left-0 right-0 m-auto z-[5] opacity-0 transition-all duration-500 w-[20px]"
              }
              onClick={() => setFullView(!fullView)}
              src="/assets/iconos/x_white.png"
              alt="icon"
            />
          </div>

          {/* background image */}
          <img
            onClick={() => setFullView(!fullView)}
            className={
              fullView
                ? " brightness-75 h-[70vh] object-cover transition-all duration-500 "
                : " brightness-75 h-[50vh] object-cover transition-all duration-500 "
            }
            src={imagen.url}
            alt="imagen"
          />

          <div className="flex absolute bottom-5 w-[90%] left-0 right-0 m-auto justify-between items-center ">
            <div className="w-2/4">
              <p className="text-crema text-2xl">{referencia_titulo}</p>
              <p className="text-crema">{marca_titulo}</p>
            </div>

            <div className="w-1/4">
              <img src={logo.url} alt="logo" />
            </div>
          </div>
        </div>
      </div>

      {/* Information */}
      <div className="max_width_container">
        <h2>{referencia_titulo}</h2>
        <p> {lang === "eng" ? <>{info_ENG}</> : <>{info}</>} </p>

        {link && (
          <a
            className="block tertiary  mt-10 text-2xl "
            target="_blank"
            href={link}
          >
            {lang === "eng" ? (
              <>Find out more about this reference</>
            ) : (
              <>Descubre más de esta referencia</>
            )}
            <img
              className="w-[15px] ml-2 inline-block"
              src="/assets/iconos/claro/flecha_texto_fb.png"
              alt="flecha_texto_fb"
            />
          </a>
        )}
      </div>
    </div>
  );
};
