import { BlockText } from "../../Layout/BlockText";
import { Slider } from "../../Utils/Slider/Slider";

export const ProjectsUpcoming = ({
  titulo_upcoming_proyectos,
  subtitulo_upcoming_proyectos,
  info_upcoming_proyectos,
  slider_upcoming_proyectos,
}) => {
  return (
    <section className=" mb-40">
      <div className="max_width_container">
        <div className="lg:w-3/4">
          <BlockText
            title={titulo_upcoming_proyectos}
            subtitle={subtitulo_upcoming_proyectos}
            info={info_upcoming_proyectos}
          />
        </div>
      </div>

      <Slider
        items={slider_upcoming_proyectos}
        classSlides="slider_upcoming_proyectos"
      />
    </section>
  );
};
