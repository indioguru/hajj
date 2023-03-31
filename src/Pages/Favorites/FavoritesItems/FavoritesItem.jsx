import { useState } from "react";

export const FavoritesItem = ({
  info,
  imagen,
  referencia_titulo,
  marca_titulo,
  logo,
  link,
}) => {
  const [fullView, setFullView] = useState(false);

  return (
    <div className="pb-32">
      {/* Favorite item */}
      <div
        className={
          fullView
            ? "relative mb-10 duration-500"
            : "relative mb-10 max_width_container duration-500"
        }
      >
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

      {/* Information */}
      <div className="max_width_container">
        <h2>Por qué nos gusta</h2>
        <p>{info}</p>

        {link && (
          <a className="block eleanor-light w-2/3 mt-10 text-2xl " href={link}>
            Descubre más de esta referencia{" "}
            <img
              className="w-[15px] inline-block"
              src="/assets/iconos/claro/flecha_texto_fb.png"
              alt="flecha_texto_fb"
            />
          </a>
        )}
      </div>
    </div>
  );
};
