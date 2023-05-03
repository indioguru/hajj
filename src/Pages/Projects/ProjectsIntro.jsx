import { useEffect } from "react";
import { BlockText } from "../../Layout/BlockText";

export const ProjectsIntro = ({
  titulo,
  subtitulo,
  info,
  titulo_ENG,
  subtitulo_ENG,
  info_ENG,
  imagen,
}) => {
  useEffect(() => {
    document.querySelector(".imagen").classList.add("translate-zero");
  }, []);

  return (
    <section className="pt-60 max_width_container mb-40  lg:flex items-center justify-between">
      <div className="lg:w-[48%]">
        <BlockText
          title={titulo}
          subtitle={subtitulo}
          info={info}
          title_ENG={titulo_ENG}
          subtitle_ENG={subtitulo_ENG}
          info_ENG={info_ENG}
          styles="false"
        />
      </div>

      <img
        className="lg:w-[48%] lg:max-h-[600px] imagen duration-[1.5s] translate-x-[100vw] "
        src={imagen.url}
        alt="imagen"
      />
    </section>
  );
};
