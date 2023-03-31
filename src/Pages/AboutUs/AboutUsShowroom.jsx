import { Title } from "../../Layout/Title";
import { Button } from "../../Utils/Buttons/Button";

export const AboutUsShowroom = ({
  titulo_showroom,
  descripcion_showroom,
  imagen_showroom,
  texto_boton_showroom,
}) => {
  return (
    <section className="max_width_container mt-32 mb-40">
      <Title title={titulo_showroom} subtitle={descripcion_showroom} />
      {imagen_showroom && (
        <div className="mt-10">
          <img src={imagen_showroom.url} alt="image from api" />
        </div>
      )}

      <div className="">
        <Button styles="m-auto">Ir a showroom</Button>
      </div>
    </section>
  );
};
