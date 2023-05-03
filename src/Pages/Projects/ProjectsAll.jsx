import { useAnimationScroll } from "../../Hooks/useAnimationScroll";
import { InvitationToContact } from "../../Layout/InvitationToContact";
import { Slider } from "../../Utils/Slider/Slider";

export const ProjectsAll = ({ proyectos, boton_invitacion, lang }) => {
  useAnimationScroll("slider-projects", "translate-zero");

  return (
    <section>
      <div className="[&>*:nth-child(odd)]:flex-row-reverse projects-all ">
        {proyectos.map((proyect, i) => (
          <div
            className="item-project mb-40 lg:flex  lg:w-[85%] max-w-[1500px] m-auto items-center justify-between "
            key={proyect._id}
          >
            <div className="max_width_container pb-3 lg:w-[35%] lg:m-[initial]  ">
              <h2 className="mb-2 lg:w-2/4">
                {lang === "eng" ? (
                  <>{proyect.titulo_ENG}</>
                ) : (
                  <>{proyect.titulo}</>
                )}
              </h2>
              <p className="lg:w-3/4">
                {lang === "eng" ? <>{proyect.info_ENG}</> : <>{proyect.info}</>}
              </p>
            </div>

            <div className="slider-projects lg:w-[60%] duration-[1.5s]   ">
              <Slider
                items={proyect.slider_imagen}
                classSlides={`proyect-page-slide-${i}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="max_width_container flex justify-end text-right lg:text-left">
        <InvitationToContact
          styles="invitation-to-contact w-3/4 max-w-[75%] mb-10"
          boton_text={boton_invitacion.texto_boton}
          text={boton_invitacion.texto}
          boton_text_ENG={boton_invitacion.texto_boton_ENG}
          text_ENG={boton_invitacion.texto_ENG}
        />
      </div>
    </section>
  );
};
