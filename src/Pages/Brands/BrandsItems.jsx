import { InvitationToContact } from "../../Layout/InvitationToContact";
import { SliderBrands } from "../../Utils/Slider/SliderBrands";

export const BrandsItems = ({ marcas, boton_invitacion }) => {
  return (
    <>
      <section className="max-w-[1500px] lg:w-[85%] lg:m-auto pt-40">
        <SliderBrands items={marcas} classSlides="brands-page-items" />
      </section>
      <div className="flex justify-end text-right lg:text-left mt-40 max_width_container ">
        <InvitationToContact
          styles="invitation-to-contact w-3/4 mb-10"
          boton_text={boton_invitacion.texto_boton}
          text={boton_invitacion.texto}
          boton_text_ENG={boton_invitacion.texto_boton_ENG}
          text_ENG={boton_invitacion.texto_ENG}
        />
      </div>
    </>
  );
};
