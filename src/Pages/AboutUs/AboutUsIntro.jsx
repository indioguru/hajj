import { useAnimationScroll } from "../../Hooks/useAnimationScroll";
import { ImageWithText } from "../../Layout/ImageWithText";
import { InvitationToContact } from "../../Layout/InvitationToContact";
import { TitleWithHr } from "../../Layout/TitleWithHr";

export const AboutUsIntro = ({
  titulo_somos,
  subtitulo_somos,
  texto_imagen_somos,
  titulo_somos_ENG,
  subtitulo_somos_ENG,
  texto_imagen_somos_ENG,
  boton_invitacion,
  imagenes_caracteristicas,
  lang,
}) => {
  useAnimationScroll("imagen-intro", "translate-zero");

  return (
    <section className="mt-40 ">
      <TitleWithHr />

      <div className="max_width_container">
        <h2 className=" lg:text-center lg:mt-32 ">
          {" "}
          {lang === "eng" ? <>{titulo_somos_ENG}</> : <>{titulo_somos}</>}{" "}
        </h2>
        <h3 className="mb-8 lg:mb-16 lg:text-center">
          {" "}
          {lang === "eng" ? (
            <>{subtitulo_somos_ENG}</>
          ) : (
            <>{subtitulo_somos}</>
          )}{" "}
        </h3>

        {/* Text with images */}
        {texto_imagen_somos.map((item) => (
          <div className="lg:flex items-center justify-between lg:mb-20 even:flex-row-reverse">
            {/* Text */}
            {item.imagen ? (
              <p className="mb-8 lg:w-[48%]">
                {" "}
                {lang === "eng" ? (
                  <>{item.texto_ENG}</>
                ) : (
                  <>{item.texto}</>
                )}{" "}
              </p>
            ) : (
              <p className="mb-8 lg:w-[70%]">
                {" "}
                {lang === "eng" ? (
                  <>{item.texto_ENG}</>
                ) : (
                  <>{item.texto}</>
                )}{" "}
              </p>
            )}

            {/* image */}
            {item.imagen && (
              <div className="flex justify-end lg:w-[48%] imagen-intro duration-[1.5s] translate-x-[100vw] odd:translate-x-[-100vw] ">
                <img
                  className="mb-8 w-3/4 lg:w-[100%]"
                  src={item.imagen.url}
                  alt="image from the api"
                />
              </div>
            )}
          </div>
        ))}

        {/* characteristics with images */}

        <div className="mt-32 lg:flex justify-between mb-40 ">
          {imagenes_caracteristicas.map((item) => (
            <div className="lg:w-[32%]">
              <ImageWithText {...item} />
            </div>
          ))}
        </div>

        {/* buttom */}
        <div className="flex justify-end text-right lg:text-left">
          <InvitationToContact
            styles="invitation-to-contact w-3/4 lg:max-w-[50%] mb-10"
            boton_text={boton_invitacion.texto_boton}
            text={boton_invitacion.texto}
            boton_text_ENG={boton_invitacion.texto_boton_ENG}
            text_ENG={boton_invitacion.texto_ENG}
          />
        </div>
      </div>
    </section>
  );
};
