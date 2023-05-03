import { useEffect } from "react";
import { Loader } from "../../Common/Loader";
import { useAnimationScroll } from "../../Hooks/useAnimationScroll";
import { useFetch } from "../../Hooks/useFetch";
import { useLanguaje } from "../../Hooks/useLanguaje";
import { usePageTitle } from "../../Hooks/usePageTitle";
import { BlockText } from "../../Layout/BlockText";
import { InvitationToContact } from "../../Layout/InvitationToContact";
import { Button } from "../../Utils/Buttons/Button";
import { ButtonScrollTop } from "../../Utils/Buttons/ButtonScrollTop";
import { Slider } from "../../Utils/Slider/Slider";
import { Video } from "../../Utils/Video";

export const Showroom = () => {
  const { data: showroom, isLoading } = useFetch("showroom");
  const { lang } = useLanguaje();
  usePageTitle(
    lang,
    "HAJJ DESIGNLESS | SHOWROOM",
    "HAJJ DESIGNLESS | SHOWROOM"
  );

  useEffect(() => {
    const video = document.querySelector(".video");
    if (video) {
      video.classList.add("translate-zero");
    }
  }, [isLoading]);

  return (
    <main className="showroom-page ">
      <Loader show={isLoading} />

      {!isLoading && (
        <>
          <div className="lg:flex lg:w-[85%] pt-60 items-center  max-w-[1500px] justify-between lg:m-auto pb-40  ">
            <div className="w-[85%] lg:w-[48%] m-auto lg:m-0 ">
              <BlockText
                title={showroom.titulo}
                subtitle={showroom.subtitlo}
                title_ENG={showroom.titulo_ENG}
                subtitle_ENG={showroom.subtitulo_ENG}
                info={showroom.descripcion}
                info_ENG={showroom.info_ENG}
                styles="false pb-5"
              />

            </div>
            <div className="video lg:w-[48%] duration-[1.5s] translate-x-[100vw] ">
              <Video
                url_video={showroom.video_url}
                portada_video={showroom.video_portada}
              />
            </div>
          </div>

          <div className="flex justify-end text-right lg:text-left max_width_container">
            <InvitationToContact
              styles="invitation-to-contact w-3/4 mb-10"
              boton_text={showroom.boton_invitacion.texto_boton}
              text={showroom.boton_invitacion.texto}
              boton_text_ENG={showroom.boton_invitacion.texto_boton_ENG}
              text_ENG={showroom.boton_invitacion.texto_ENG}
            />
          </div>

          <div className="mb-40 lg:w-[60%] m-auto  ">
            <Slider
              items={showroom.primer_slider}
              classSlides="showroom-page-slider-1"
            />
          </div>

          <div>
            {showroom.sliders.map((slider, i) => (
              <div className="mb-40 lg:w-[60%] m-auto " key={slider._id}>
                <Slider
                  items={slider.slider}
                  classSlides={`showroom-page-slider-${i + 2}`}
                />
              </div>
            ))}
          </div>

          <ButtonScrollTop scrollTo="showroom-page" color="white" />
        </>
      )}
    </main>
  );
};
