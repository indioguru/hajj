import { Title } from "../../Layout/Title";
import { useSlider } from "../../Utils/Slider/useSlider";

export const AboutUsTeam = ({ titulo_equipo, subtitulo_equipo, equipo }) => {
  const { number } = useSlider(equipo, "equipo_slider");
  return (
    <section className="max_width_container">
      <Title title={titulo_equipo} subtitle={subtitulo_equipo} />

      {equipo.map((team) => (
        <div key={team._id} className="equipo_slider mb-40 mt-12 ">
          <div className="lg:flex justify-between items-center ">
            <div className="lg:w-[48%] ">
              {/* BUTTONS/ARROWS */}
              <div className="buttons flex items-center justify-between m-auto mb-8 lg:mb-2 w-2/3 relative lg:left-5 z-10 lg:max-w-[30%]">
                <div className={`prev_equipo_slider w-1/3 cursor-pointer`}>
                  <img
                    src="/assets/iconos/oscuro/flechalarga_izquierda.png"
                    alt="flechalarga_izquierda"
                  />
                </div>

                <p className="w-1/3 text-center">
                  {number} de {equipo.length}
                </p>

                <div className={`next_equipo_slider w-1/3 cursor-pointer`}>
                  <img
                    src="/assets/iconos/oscuro/flechalarga_derecha.png"
                    alt="flechalarga_derecha"
                  />
                </div>
              </div>

              {/* Image */}
              <div className="flex justify-center">
                {team.imagen ? (
                  <img className="w-2/4 mb-6" src={team.imagen.url} alt="" />
                ) : (
                  <p>No hay imagen disponible</p>
                )}
              </div>
            </div>
            <div className="lg:w-[48%] ">
              {/* Name and description */}
              <h2 className="leading-8 text-2xl ">{team.nombre}</h2>
              <p className="text-[#ADAFB4] ">{team.descripcion}</p>

              {/* Email and phone */}
              <div className="mt-5">
                <a
                  href={`mailto:${team.email}`}
                  className="underline block eleanor-light"
                >
                  {team.email}
                </a>

                <a
                  href={`tel:${team.telefono}`}
                  className="underline block eleanor-light"
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
