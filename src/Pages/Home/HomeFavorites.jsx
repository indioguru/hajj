import { useNavigate } from "react-router-dom";
import { useAnimationScroll } from "../../Hooks/useAnimationScroll";
import { InvitationToContact } from "../../Layout/InvitationToContact";
import { Title } from "../../Layout/Title";
import { Button } from "../../Utils/Buttons/Button";
import { SliderFavorites } from "../../Utils/Slider/SliderFavorites";

export const HomeFavorites = ({
  titulo_favoritos,
  subtitulo_favoritos,
  slider_favoritos,
  url_boton_favoritos,
  boton_invitacion_2,
  lang,
}) => {
  useAnimationScroll("slider-favorito", "translate-zero");
  const navigate = useNavigate();

  return (
    <>
      <section className="home-favorites mb-40">
        <div className="lg:flex lg:w-[85%] m-auto max-w-[1500px] items-center">
          <div className="max_width_container mb-10 lg:w-2/4 lg:m-[initial] ">
            <Title title={titulo_favoritos} subtitle={subtitulo_favoritos} />
          </div>

          <div className="lg:w-2/4 slider-favorito duration-1000 translate-x-[100vw] ">
            <SliderFavorites
              items={slider_favoritos}
              classSlides="slider-favoritos"
            />
          </div>
        </div>

        <div className="max_width_container">
          {lang === "eng" ? (
            <div onClick={() => navigate("/en/favorites")}>
              <Button
                styles="w-full lg:m-auto lg:mt-10"
                url={url_boton_favoritos}
              >
                Find out our favorites
              </Button>
            </div>
          ) : (
            <div onClick={() => navigate("/favoritos")}>
              <Button
                styles="w-full lg:m-auto lg:mt-10"
                url={url_boton_favoritos}
              >
                Descubre nuestros favoritos
              </Button>
            </div>
          )}
        </div>
      </section>

      <div className="max_width_container">
        <div className="flex justify-end text-right lg:text-left">
          <InvitationToContact
            styles="invitation-to-contact w-3/4 mb-10"
            boton_text={boton_invitacion_2.texto_boton}
            text={boton_invitacion_2.texto}
            boton_text_ENG={boton_invitacion_2.texto_boton_ENG}
            text_ENG={boton_invitacion_2.texto_ENG}
          />
        </div>
      </div>
    </>
  );
};
