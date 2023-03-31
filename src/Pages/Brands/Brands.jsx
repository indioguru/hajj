import { Banner } from "../../Layout/Banner";
import { BrandsIntro } from "./BrandsIntro";
import { BrandsItems } from "./BrandsItems";

import { InvitationToContact } from "../../Layout/InvitationToContact";
import { useFetch } from "../../Hooks/useFetch";
import { Loader } from "../../Common/Loader";
import { ButtonScrollTop } from "../../Utils/Buttons/ButtonScrollTop";
export const Brands = () => {
  const { data: brands, isLoading } = useFetch("marcas");
  return (
    <main className="brands">
      <Loader show={isLoading} />
      {!isLoading && (
        <>
          <Banner fondo="/assets/home/banner_home.png">
            <div className="flex flex-wrap justify-between lg:justify-between mt-10 mb-10 ">
              {brands.logos_marcas.map((image, i) => (
                <img
                  key={`image_brand_home_${i + 1}`}
                  className={`imagen_brand_home w-[90px] lg:w-[150px] h-[40px] transition-all duration-500 object-contain mb-5 lg:mb-10`}
                  src={image.url}
                  alt="imagen"
                />
              ))}
            </div>
          </Banner>
          <BrandsIntro {...brands} />
          <BrandsItems {...brands} />

          <ButtonScrollTop scrollTo="brands" color="white" />
        </>
      )}
    </main>
  );
};
