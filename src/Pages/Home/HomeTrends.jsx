import { ImageWithText } from "../../Layout/ImageWithText";
import { Title } from "../../Layout/Title";

export const HomeTrends = ({
  titulo_tendencias,
  subtitulo_tendencias,
  galeria_tendencias,
}) => {
  return (
    <section className="max_width_container mb-40">
      <div className="mb-10">
        <Title title={titulo_tendencias} subtitle={subtitulo_tendencias} />
      </div>

      {galeria_tendencias.map((item) => (
        <ImageWithText {...item} />
      ))}
    </section>
  );
};
