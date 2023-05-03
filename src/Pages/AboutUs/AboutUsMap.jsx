import { MapInteractionCSS } from "react-map-interaction";
import { Title } from "../../Layout/Title";
import { InvitationToContact } from "../../Layout/InvitationToContact";

export const AboutUsMap = ({
  titulo_mapa,
  subtitulo_mapa,
  descripcion_mapa,
  titulo_mapa_ENG,
  subtitulo_mapa_ENG,
  descripcion_mapa_ENG,
  imagen_mapa,
  boton_invitacion_2,
  lang,
}) => {
  return (
    <section className="max_width_container">
      <Title
        title={titulo_mapa}
        subtitle={subtitulo_mapa}
        title_ENG={titulo_mapa_ENG}
        subtitle_ENG={subtitulo_mapa_ENG}
      />

      <p className="py-10">
        {lang === "eng" ? <>{descripcion_mapa_ENG}</> : <>{descripcion_mapa}</>}
      </p>

      <div className="mb-40 ">
        <div className="map-movil  h-full w-full overflow-auto  ">
          <div className="w-[1000px] h-screen lg:m-auto lg:w-full">
            <img
              className=" h-full w-full object-contain "
              src={imagen_mapa.url}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end text-right lg:text-left">
        <InvitationToContact
          styles="invitation-to-contact w-3/4 lg:max-w-[50%] mb-10"
          boton_text={boton_invitacion_2.texto_boton}
          text={boton_invitacion_2.texto}
          boton_text_ENG={boton_invitacion_2.texto_boton_ENG}
          text_ENG={boton_invitacion_2.texto_ENG}
        />
      </div>
    </section>
  );
};
