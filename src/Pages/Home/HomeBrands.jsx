import { useNavigate } from "react-router-dom";
import { useAnimationScroll } from "../../Hooks/useAnimationScroll";
import { Title } from "../../Layout/Title";
import { Button } from "../../Utils/Buttons/Button";

export const HomeBrands = ({
  titulo_marcas,
  subtitulo_marcas,
  titulo_marcas_ENG,
  subtitulo_marcas_ENG,
  info_marcas,
  info_marcas_ENG,
  logos_marcas,
  lang
}) => {

  const navigate = useNavigate();
  return (
    <section className="home-brands mb-40 ">
      <div className="max_width_container">
        
        <Title
          title={titulo_marcas}
          subtitle={subtitulo_marcas}
          title_ENG={titulo_marcas_ENG}
          subtitle_ENG={subtitulo_marcas_ENG}
        />

        <p className="mt-4 lg:max-w-[70%]">
        {lang === "eng" ? <>{info_marcas_ENG}</> : <>{info_marcas}</>}
        </p>

        <div className="flex flex-wrap justify-between  mt-20 mb-10 ">
          {logos_marcas.map((image, i) => (
            <img
              key={`image_brand_home_${i + 1}`}
              className={`imagen_brand_home w-[30%] lg:w-[120px] h-[60px] transition-all duration-500 object-contain mb-5 lg:mb-10`}
              src={image.url}
              alt="imagen"
            />
          ))}
        </div>

        <div onClick={() => lang === "eng" ? navigate('/brands') : navigate('/marcas')}>
          <Button styles="w-full lg:m-auto">
          {lang === "eng" ? <>Find out about our brands</> : <>Descubre nuestras marcas</>}
            </Button>
        </div>
      </div>
    </section>
  );
};
