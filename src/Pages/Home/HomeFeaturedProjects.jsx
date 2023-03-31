import { InvitationToContact } from "../../Layout/InvitationToContact";
import { Title } from "../../Layout/Title";
import { Button } from "../../Utils/Buttons/Button";
import { Slider } from "../../Utils/Slider/Slider";

export const HomeFeaturedProjects = ({
  titulo_proyectos_destacados,
  subtitulo_proyectos_destacados,
  slider,
}) => {
  return (
    <section className="home-featured-projects">
      <div className="max_width_container mb-10">
        <Title
          title={titulo_proyectos_destacados}
          subtitle={subtitulo_proyectos_destacados}
        />
      </div>

      <Slider items={slider} classSlides={"projects-home"} />

      <div className="max_width_container">
        <Button styles="w-full mb-10 lg:m-auto lg:block lg:mt-10  ">
          Descubre nuestros proyectos
        </Button>

        <div className="flex justify-end text-right lg:text-left mt-32 mb-16">
          <InvitationToContact
            styles="invitation-to-contact w-3/4 mb-10"
            boton_text="Hablemos"
            text="de cómo podemos **construir** el espacio de tus **Sueños**."
          />
        </div>
      </div>
    </section>
  );
};
