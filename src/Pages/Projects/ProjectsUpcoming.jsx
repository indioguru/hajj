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


      {slider_upcoming_proyectos.map((proyect, i) => (
        <div className="mb-40" key={proyect._id}>
          <Slider
            items={proyect.slider_imagen }
            classSlides={`slider_upcoming_proyectos-${i}`}
          />

          <div className="max_width_container  ">
            <h2 className="mt-6 mb-2 lg:w-3/4">{proyect.titulo}</h2>
            <p className="lg:w-3/4">{proyect.info}</p>
          </div>
        </div>
      ))}

    </section>
  );
};
