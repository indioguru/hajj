import { useNavigate } from "react-router-dom";
import { Title } from "../../Layout/Title";
import { Button } from "../../Utils/Buttons/Button";

export const AboutUsBrands = ({
  titulo_marcas,
  subtitulo_marcas,
  logos_marcas,
  lang,
}) => {

  const navigate = useNavigate();
  return (
    <section className="home-brands mb-40 ">
      <div className="max_width_container">
        <Title title={titulo_marcas} subtitle={subtitulo_marcas} />

        <div className="flex flex-wrap justify-between  mt-20 mb-10 ">
          {logos_marcas.map((image, i) => (
            <img
              key={`image_brand_home_${i + 1}`}
              className={`imagen_brand_home w-[30%] lg:w-[150px] h-[40px] transition-all duration-500 object-contain mb-5 lg:mb-10`}
              src={image.url}
              alt="imagen"
            />
          ))}
        </div>

        {lang === "eng" ? (
          <div onClick={() => navigate('/en/brands')}>
            <Button styles="w-full lg:m-auto">
              <>Find out our brands</>
            </Button>
          </div>
        ) : (
          <div onClick={() => navigate('/marcas')}>
            <Button styles="w-full lg:m-auto">
              <>Descubre nuestras marcas</>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
