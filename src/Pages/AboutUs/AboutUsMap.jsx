import { MapInteractionCSS } from "react-map-interaction";
import { Title } from "../../Layout/Title";
import { InvitationToContact } from "../../Layout/InvitationToContact";

export const AboutUsMap = ({
  titulo_mapa,
  subtitulo_mapa,
  descripcion_mapa,
  imagen_mapa,
  Boton_invitacion_2,
}) => {
  return (
    <section className="max_width_container">
      <Title title={titulo_mapa} subtitle={subtitulo_mapa} />

      <p className="py-10">{descripcion_mapa}</p>

      <MapInteractionCSS
        defaultValue={{
          scale: window.innerWidth < 1024 ? 1 : 1,
          translation: {
            x: window.innerWidth < 1024 ? 0 : 0,
            y: window.innerWidth < 1024 ? 0 : 0,
          },
        }}
        translationBounds={{
          xMin: window.innerWidth < 1024 ? -500 : -1000,
          xMax: window.innerWidth < 1024 ? 100 : 1000,
          yMin: window.innerWidth < 1024 ? -500 : -1000,
          yMax: window.innerWidth < 1024 ? 100 : 1000,
        }}
        maxScale={window.innerWidth < 1024 ? 5 : 2}
        minScale={window.innerWidth < 1024 ? 2 : 1}
        disableZoom={true}
      >
        <img src={imagen_mapa.url} />
      </MapInteractionCSS>

      <div className=" mt-16">
        <InvitationToContact
          styles="invitation-to-contact w-3/4 mb-10"
          boton_text="Conocer"
          text="una experiencia **lujosa** y **única**"
        />
      </div>
    </section>
  );
};
