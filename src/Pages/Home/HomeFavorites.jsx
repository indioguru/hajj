import { InvitationToContact } from "../../Layout/InvitationToContact";
import { Title } from "../../Layout/Title";
import { Button } from "../../Utils/Buttons/Button";
import { Slider } from "../../Utils/Slider/Slider";

export const HomeFavorites = ({
  titulo_favoritos,
  subtitulo_favoritos,
  slider_favoritos,
  url_boton_favoritos,
  text_boton_favoritos,
}) => {
  return (
    <section className="home-favorites mb-32">
      <div className="max_width_container mb-10">
        <Title title={titulo_favoritos} subtitle={subtitulo_favoritos} />
      </div>

      <Slider items={slider_favoritos} classSlides="slider-favoritos" />

      <div className="max_width_container">
        <Button styles="w-full lg:m-auto lg:mt-10  " url={url_boton_favoritos}>{text_boton_favoritos}</Button>

        <div className=" mt-16">
          <InvitationToContact
            styles="invitation-to-contact w-3/4 mb-10"
            boton_text="Conocer"
            text="una experiencia **lujosa** y **única**"
          />
        </div>
      </div>


    </section>
  );
};
