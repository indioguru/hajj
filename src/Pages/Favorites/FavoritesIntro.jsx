import { useEffect } from "react";

import { BlockText } from "../../Layout/BlockText";

export const FavoritesIntro = ({
  titulo,
  subtitulo,
  titulo_ENG,
  subtitulo_ENG,
  info,
  imagen,
}) => {
  useEffect(() => {
    document.querySelector(".image-right").classList.add("translate-zero");
  }, []);

  return (
    <div className="max_width_container pt-40 pb-40 lg:flex items-center justify-between">
      <div className="lg:w-[48%] ">
        <BlockText
          title={titulo}
          subtitle={subtitulo}
          title_ENG={titulo_ENG}
          subtitle_ENG={subtitulo_ENG}
          info={info}
          styles="false"
        />
      </div>

      {imagen && (
        <img
          className="image-right mt-20 lg:w-[48%] lg:mt-0 duration-[1.5s] translate-x-[100vw] "
          src={imagen.url}
          alt="imagen"
        />
      )}
    </div>
  );
};
