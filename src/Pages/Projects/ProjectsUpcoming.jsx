import { BlockText } from "../../Layout/BlockText";
import { Slider } from "../../Utils/Slider/Slider";

export const ProjectsUpcoming = ({
  titulo_upcoming_proyectos,
  subtitulo_upcoming_proyectos,
  info_upcoming_proyectos,
  titulo_upcoming_proyectos_ENG,
  subtitulo_upcoming_proyectos_ENG,
  info_upcoming_proyectos_ENG,
  slider_upcoming_proyectos,
  lang,
}) => {
  return (
    <section className=" mb-40 ">
      <div className="max_width_container">
        <div className="lg:w-3/4">
          <BlockText
            title="Próximos proyectos."
            subtitle={subtitulo_upcoming_proyectos}
            title_ENG={titulo_upcoming_proyectos_ENG}
            subtitle_ENG={subtitulo_upcoming_proyectos_ENG}
            info={info_upcoming_proyectos}
            info_ENG={info_upcoming_proyectos_ENG}
          />
        </div>
      </div>

      {slider_upcoming_proyectos.map((proyect, i) => (
        <div className="mb-40 " key={proyect._id}>
          <div className="max_width_container mb-6  ">
            <h2 className=" mb-2 lg:w-3/4">
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

          <iframe
            className="max_width_container h-[50vh] lg:h-[80vh] "
            src={proyect.url_recorrido}
            frameborder="0"
          ></iframe>
        </div>
      ))}
    </section>
  );
};
