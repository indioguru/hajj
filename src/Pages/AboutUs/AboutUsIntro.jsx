import { ImageWithText } from "../../Layout/ImageWithText";
import { InvitationToContact } from "../../Layout/InvitationToContact";
import { TitleWithHr } from "../../Layout/TitleWithHr";

export const AboutUsIntro = ({
  titulo_somos,
  subtitulo_somos,
  texto_imagen_somos,
  imagenes_caracteristicas,
}) => {
  return (
    <section className="mt-40">
      <TitleWithHr />

      <div className="max_width_container">
        <h2 className="leading-8 lg:text-center lg:mt-32 ">{titulo_somos}</h2>
        <h3 className="mb-8 lg:mb-16 lg:text-center">{subtitulo_somos}</h3>

        {/* Text with images */}
        {texto_imagen_somos.map((item) => (
          <div className="lg:flex items-center justify-between lg:mb-20 even:flex-row-reverse">
            {/* Text */}
            {item.imagen ? (
              <p className="mb-8 lg:w-[48%]">{item.texto}</p>
            ) : (
              <p className="mb-8 lg:w-[70%]">{item.texto}</p>
            )}

            {/* image */}
            {item.imagen && (
              <div className="flex justify-end lg:w-[48%]">
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

        <div className="mt-32 lg:flex justify-between">
          {imagenes_caracteristicas.map((item) => (
            <div className="lg:w-[32%]">
              <ImageWithText {...item} />
            </div>
          ))}
        </div>

        {/* buttom */}
        <div className="flex justify-end text-right lg:text-left mt-32 mb-16">
          <InvitationToContact
            styles="invitation-to-contact w-3/4 lg:max-w-[50%] mb-10"
            boton_text="Hablemos"
            text="de cómo podemos **construir** el espacio de tus **Sueños**."
          />
        </div>
      </div>
    </section>
  );
};
