import { useAnimationScroll } from "../../Hooks/useAnimationScroll";
import { BlockText } from "../../Layout/BlockText";
import { TitleWithHr } from "../../Layout/TitleWithHr";

export const HomeProposal = ({
  titulo_propuesta,
  titulo_propuesta_ENG,
  subtitulo_propuesta,
  info_propuesta,
  url_boton_propuesta,
  text_boton_propuesta,
  imagen_propuesta,
}) => {
  // Hooks to animations
  useAnimationScroll("imagen-proposal", "translate-zero");

  return (
    <section className="home-proposal mt-40 mb-32 ">
      <TitleWithHr />
      
      <div className="max_width_container lg:flex justify-between items-center">
        <div className="lg:w-[48%]">
          <BlockText
            title={titulo_propuesta}
            subtitle={subtitulo_propuesta}
            info={info_propuesta}
            url={url_boton_propuesta}
            textButton={text_boton_propuesta}
            title_ENG={titulo_propuesta_ENG}

          />
        </div>

        <div className="lg:w-[48%] imagen-proposal duration-1000 translate-x-[100vw]">
          <img src={imagen_propuesta.url} alt="imagen_propuesta" />
        </div>
      </div>
    </section>
  );
};
