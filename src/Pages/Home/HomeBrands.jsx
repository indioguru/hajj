import { useAnimationScroll } from "../../Hooks/useAnimationScroll";
import { Title } from "../../Layout/Title";
import { Button } from "../../Utils/Buttons/Button";

export const HomeBrands = ({
  titulo_marcas,
  subtitulo_marcas,
  info_marcas,
  logos_marcas,
}) => {
  useAnimationScroll("imagen_brand_home", "opacity-1");
  useAnimationScroll("text-right-ani", "translate-zero");
  return (
    <section className="home-brands mb-40">
      <div className="max_width_container">
        <Title title={titulo_marcas} subtitle={subtitulo_marcas} />

        <p className="text-right-ani mt-4 lg:max-w-[70%] duration-1000 translate-x-[100vw] ">{info_marcas}</p>

        <div className="flex flex-wrap justify-between lg:justify-start mt-10 mb-10 ">
          {logos_marcas.map((image, i) => (
            <img
              key={`image_brand_home_${i + 1}`}
              className={`imagen_brand_home w-[30%] lg:w-1/4 h-[50px] transition-all duration-500 object-contain mb-5 opacity-0 lg:mb-10`}
              src={image}
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
