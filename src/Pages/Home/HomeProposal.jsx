import { useAnimationScroll } from "../../Hooks/useAnimationScroll";
import { BlockText } from "../../Layout/BlockText";
import { TitleWithHr } from "../../Layout/TitleWithHr";
import { Button } from "../../Utils/Buttons/Button";
import { useNavigate } from "react-router-dom";

export const HomeProposal = ({
  titulo_propuesta,
  titulo_propuesta_ENG,
  subtitulo_propuesta,
  subtitulo_propuesta_ENG,
  info_propuesta,
  info_propuesta_ENG,
  imagen_propuesta,
  lang,
}) => {
  // Hooks to animations
  const navigate = useNavigate();
  useAnimationScroll("imagen", "translate-zero");

  return (
    <section className="home-proposal mt-40 mb-40  ">
      <TitleWithHr />

      <div className="max_width_container lg:flex justify-between items-center mt-40">
        <div className="lg:w-[48%]">
          <BlockText
            title={titulo_propuesta}
            subtitle={subtitulo_propuesta}
            info={info_propuesta}
            title_ENG={titulo_propuesta_ENG}
            subtitle_ENG={subtitulo_propuesta_ENG}
            info_ENG={info_propuesta_ENG}
          >
            <div
              onClick={() => {
                lang === "eng" ? navigate("/en/aboutus") : navigate("nosotros");
              }}
            >
              <Button>
                {lang === "eng" ? <>About us</> : <>Sobre nosotros</>}
              </Button>
            </div>
          </BlockText>
        </div>

        <div className="lg:w-[48%] imagen duration-[1.5s] translate-x-[100vw] ">
          {imagen_propuesta && (
            <img src={imagen_propuesta.url} alt="imagen_propuesta" />
          )}
        </div>
      </div>
    </section>
  );
};
