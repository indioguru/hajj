import { InvitationToContact } from "../../Layout/InvitationToContact";
import { SliderBrands } from "../../Utils/Slider/SliderBrands";

export const BrandsItems = ({ marcas }) => {
  return (
    <section className="mb-40 max-w-[1500px] lg:w-[85%] lg:m-auto lg:mb-40">
      <SliderBrands items={marcas} classSlides="brands-page-items" />

      <div className="flex justify-end text-right lg:text-left mt-32 mb-16">
        <InvitationToContact
          styles="invitation-to-contact w-3/4 mb-10"
          boton_text="Hablemos"
          text="de cómo podemos **construir** el espacio de tus **Sueños**."
        />
      </div>
    </section>
  );
};
