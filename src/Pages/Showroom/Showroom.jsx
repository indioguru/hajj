import { BlockText } from "../../Layout/BlockText";
import { InvitationToContact } from "../../Layout/InvitationToContact";
import { Button } from "../../Utils/Buttons/Button";
import { Slider } from "../../Utils/Slider/Slider";
import { Video } from "../../Utils/Video";
import showroom from "./showroom.json";

export const Showroom = () => {
  return (
    <main className="showroom-page pt-40">
      <div className="lg:flex lg:w-[85%]  max-w-[1500px] justify-between lg:m-auto ">
        <div className="w-[85%] lg:w-[48%] m-auto lg:m-0 ">
          <BlockText
            title={showroom.titulo}
            subtitle={showroom.subtitlo}
            info={showroom.descripcion}
          />

          <Button
            styles="w-3/4 m-auto mb-14 text-2xl py-1 "
            url={showroom.url_espacio_virtual}
          >
            Ver espacio virtual
          </Button>
        </div>
        <div className="mb-40 lg:w-[48%] ">
          <Video
            url_video={showroom.video_frame}
            portada_video={showroom.video_portada}
          />
        </div>
      </div>

      <div className="max_width_container flex justify-end text-right lg:text-left mt-32 mb-16">
        <InvitationToContact
          styles="invitation-to-contact w-3/4 max-w-[75%] lg:max-w-[50%] mb-10"
          boton_text="Hablemos"
          text="de cómo podemos **construir** el espacio de tus **Sueños**."
        />
      </div>

      <div className="mb-40">
        <Slider
          items={showroom.primer_slider}
          classSlides="showroom-page-slider-1"
        />
      </div>

      <div>
        {showroom.sliders.map((slider, i) => (
          <div className="mb-40">
            <Slider
              items={slider.slider}
              classSlides={`showroom-page-slider-${i + 2}`}
            />
          </div>
        ))}
      </div>
    </main>
  );
};
