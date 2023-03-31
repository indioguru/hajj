import { InvitationToContact } from "../../Layout/InvitationToContact";
import { Slider } from "../../Utils/Slider/Slider";

export const ProjectsAll = ({ proyectos }) => {
  return (
    <section className="mb-40">
      {proyectos.map((proyect, i) => (
        <div className="mb-40" key={proyect._id}>
          <Slider
            items={proyect.slider_imagen }
            classSlides={`proyect-page-slide-${i}`}
          />

          <div className="max_width_container  ">
            <h2 className="mt-6 mb-2 lg:w-3/4">{proyect.titulo}</h2>
            <p className="lg:w-3/4">{proyect.info}</p>
          </div>
        </div>
      ))}

      <div className="max_width_container flex justify-end text-right lg:text-left mt-32 mb-16">
        <InvitationToContact
          styles="invitation-to-contact w-3/4 max-w-[75%] mb-10"
          boton_text="Hablemos"
          text="de cómo podemos **construir** el espacio de tus **Sueños**."
        />
      </div>
    </section>
  );
};
