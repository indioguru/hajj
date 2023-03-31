import { Title } from "../../Layout/Title";
import { Button } from "../../Utils/Buttons/Button";

export const AboutUsBrands = ({
  titulo_marcas,
  subtitulo_marcas,
  logos_marcas,
}) => {
  return (
    <section className="home-brands mb-40">
      <div className="max_width_container">
        <Title title={titulo_marcas} subtitle={subtitulo_marcas} />

        <div className="flex flex-wrap justify-between  mt-10 mb-10 ">
          {logos_marcas.map((image, i) => (
            <img
              key={`image_brand_home_${i + 1}`}
              className={`imagen_brand_home w-[30%] lg:w-[150px] h-[40px] transition-all duration-500 object-contain mb-5 lg:mb-10`}
              src={image.url}
              alt="imagen"
            />
          ))}
        </div>

        <div>
          <Button styles="w-full lg:m-auto">Descubre nuestras marcas</Button>
        </div>
      </div>
    </section>
  );
};
