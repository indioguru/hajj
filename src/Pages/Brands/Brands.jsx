import { Banner } from "../../Layout/Banner";
import { BrandsIntro } from "./BrandsIntro";
import { BrandsItems } from "./BrandsItems";
import brands from "./brands.json";
import { InvitationToContact } from "../../Layout/InvitationToContact";
export const Brands = () => {
  return (
    <main>
      <Banner fondo="/assets/home/banner_home.png">
        <div className="flex flex-wrap justify-between lg:justify-start mt-10 mb-10 ">
          {brands.logos_marcas.map((image, i) => (
            <img
              key={`image_brand_home_${i + 1}`}
              className={`imagen_brand_home w-[30%] lg:w-1/4 h-[50px]  object-contain mb-5 lg:mb-10`}
              src={image}
              alt="imagen"
            />
          ))}
        </div>
      </Banner>
      <BrandsIntro {...brands} />
      <BrandsItems {...brands} />

      <div className="max_width_container flex justify-end text-right lg:text-left mt-32 mb-16">
        <InvitationToContact
          styles="invitation-to-contact w-3/4 lg:max-w-[50%] mb-10"
          boton_text="Hablemos"
          text="de cómo podemos **construir** el espacio de tus **Sueños**."
        />
      </div>
    </main>
  );
};
