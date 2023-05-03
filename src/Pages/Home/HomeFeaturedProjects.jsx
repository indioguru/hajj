import { useNavigate } from "react-router-dom";
import { useAnimationScroll } from "../../Hooks/useAnimationScroll";
import { InvitationToContact } from "../../Layout/InvitationToContact";
import { Title } from "../../Layout/Title";
import { Button } from "../../Utils/Buttons/Button";
import { Slider } from "../../Utils/Slider/Slider";

export const HomeFeaturedProjects = ({
  titulo_proyectos_destacados,
  subtitulo_proyectos_destacados,
  titulo_proyectos_destacados_ENG,
  subtitulo_proyectos_destacados_ENG,
  boton_invitacion,
  slider,
  lang,
}) => {
  useAnimationScroll("slider-project", "translate-zero");
  const navigate = useNavigate();

  return (
    <>
      <section className="home-featured-projects mb-40">
        <div className="lg:flex lg:w-[85%] m-auto max-w-[1500px] items-center flex-row-reverse justify-between ">
          <div className="max_width_container mb-10 lg:w-[48%] lg:m-[initial] ">
            <Title
              title={titulo_proyectos_destacados}
              subtitle={subtitulo_proyectos_destacados}
              title_ENG={titulo_proyectos_destacados_ENG}
              subtitle_ENG={subtitulo_proyectos_destacados_ENG}
            />
          </div>
          <div className="lg:w-[48%] slider-project duration-[1.5s] translate-x-[-100vw] ">
            <Slider items={slider} classSlides={"projects-home"} />
          </div>
        </div>

        <div className="max_width_container">
          {lang === "eng" ? (
            <div onClick={() => navigate("/en/projects")}>
              <Button styles="w-full lg:m-auto lg:block lg:mt-10">
                Find out about our projects
              </Button>
            </div>
          ) : (
            <div onClick={() => navigate("/proyectos")}>
              <Button styles="w-full lg:m-auto lg:block lg:mt-10">
                Descubre nuestros proyectos
              </Button>
            </div>
          )}
        </div>
      </section>

      <div className="max_width_container">
        <div className="flex justify-end text-right lg:text-left">
          <InvitationToContact
            styles="invitation-to-contact w-3/4 mb-10"
            boton_text={boton_invitacion.texto_boton}
            text={boton_invitacion.texto}
            boton_text_ENG={boton_invitacion.texto_boton_ENG}
            text_ENG={boton_invitacion.texto_ENG}
          />
        </div>
      </div>
    </>
  );
};
