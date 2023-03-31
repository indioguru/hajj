import { useEffect } from "react";
import { SliderButtons } from "../Utils/Slider/SliderButtons";
import { useSlider } from "../Utils/Slider/useSlider";

export const BannerSlider = ({ banner, show }) => {
  const { number } = useSlider(banner, "slide-banner-home");

  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <>
      <section className={`banner-container h-screen w-screen relative overflow-hidden`}>
        {/* Logo */}
        <div>
          <img
            className={
              show
                ? "absolute left-0 right-0 margin-auto top-1/3 max-w-lg max_width_container z-[1]"
                : "absolute left-0 right-0 margin-auto top-1/3 max-w-lg max_width_container z-[1] animation_logo_home"
            }
            src="/assets/logo/hajj_logo_blanco.png"
            alt="hajj_logo_blanco"
          />
        </div>

        {/* Slides for banner */}
        <div className={!show && "animation-home-banner"}>
          {banner.map((item) => (
            <div className="slide-banner-home fade">
              <img
                className="absolute w-full h-full object-cover brightness-50 "
                src={item.imagen.url}
                alt="fondo extraido desde el api"
              />

              <div
                className={
                  show
                    ? "absolute bottom-20 w-[85%] m-auto left-0 right-0"
                    : "absolute bottom-20 w-[85%] m-auto left-0 right-0"
                }
              >
                <p className="eleanor-light text-2xl lg:text-4xl">
                  {item.titulo}
                </p>
                <a href={item.link_referencia} className="text-xs lg:text-xl">
                  Descubre más de esta referencia
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div
          className={
            show
              ? "absolute bottom-5 w-[85%] m-auto left-0 right-0 flex justify-end "
              : "absolute bottom-5 w-[85%] m-auto left-0 right-0 flex justify-end  ani-bottom-5"
          }
        >
          <SliderButtons
            fullView={false}
            number={number}
            length={banner.length}
            classSlides="slide-banner-home"
          />
        </div>
      </section>
    </>
  );
};
