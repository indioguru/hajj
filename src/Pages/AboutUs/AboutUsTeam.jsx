import { Title } from "../../Layout/Title";
import { useSlider } from "../../Utils/Slider/useSlider";

export const AboutUsTeam = ({
  titulo_equipo,
  subtitulo_equipo,
  titulo_equipo_ENG,
  subtitulo_equipo_ENG,
  equipo,
  lang,
}) => {
  const { number } = useSlider(equipo, "equipo_slider");
  return (
    <section className="max_width_container">
      <Title
        title={titulo_equipo}
        subtitle={subtitulo_equipo}
        title_ENG={titulo_equipo_ENG}
        subtitle_ENG={subtitulo_equipo_ENG}
      />

      {/* BUTTONS/ARROWS */}
      <div className="buttons flex items-center justify-between lg:justify-center m-auto w-2/3 relative lg:m-auto z-10 lg:w-[48%] mt-8 mb-4 pt-20 lg:mb-10">
        <div className="w-4/4 lg:w-2/4 flex items-center justify-between">
          <div className={`prev_equipo_slider w-1/3 cursor-pointer`}>
            <img
              src="/assets/iconos/oscuro/flechalarga_izquierda.png"
              alt="flechalarga_izquierda"
            />
          </div>

          <p className="w-1/3 text-center text-2xl eleanor-light">
            {number} <span className=" text-[10px] ">de</span> {equipo.length}
          </p>

          <div className={`next_equipo_slider w-1/3 cursor-pointer`}>
            <img
              src="/assets/iconos/oscuro/flechalarga_derecha.png"
              alt="flechalarga_derecha"
            />
          </div>
        </div>
      </div>

      {/* Slides */}

      {equipo.map((team) => (
        <div key={team._id} className="equipo_slider mb-40 ">
          <div className="lg:flex justify-between items-center ">
            <div className="lg:w-[48%] ">
              {/* Image */}
              <div className="flex justify-center">
                {team.imagen ? (
                  <img className="w-4/4 object-contain mb-6" src={team.imagen.url} alt="" />
                ) : (
                  <p>
                    {lang === "eng" ? (
                      <>There's no image available</>
                    ) : (
                      <> No hay imagen disponible</>
                    )}
                  </p>
                )}
              </div>
            </div>
            <div className="lg:w-[48%] ">
              {/* Name and description */}
              <h2 className="leading- text-2xl ">{team.nombre}</h2>
              <p className="text-[#ADAFB4] pb-6 ">
                {lang === "eng" ? (
                  <>{team.descripcion_ENG}</>
                ) : (
                  <>{team.descripcion}</>
                )}
              </p>

              {/* Email and phone */}
              <div className="mt-5">
                <a
                  href={`mailto:${team.email}`}
                  className="underline block eleanor-light text-xl pb-2"
                >
                  {team.email}
                </a>

                <a
                  href={`tel:${team.telefono}`}
                  className="underline block eleanor-light text-xl"
                >
                  {team.telefono}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
