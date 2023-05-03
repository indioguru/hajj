import { useEffect } from "react";
import { SliderButtons } from "../Utils/Slider/SliderButtons";
import { useSlider } from "../Utils/Slider/useSlider";

export const BannerSlider = ({ banner, show, lang }) => {
  const { number } = useSlider(banner, "slide-banner-home");

  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <>
      <section
        className={`banner-container bg-black h-screen w-screen relative z-20 overflow-hidden`}
      >
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
            <div key={item._id} className="slide-banner-home fade">
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
                  {lang === "eng" ? (
                    <> {item.titulo_ENG}</>
                  ) : (
                    <> {item.titulo}</>
                  )}
                </p>

                {item.link_referencia && (
                  <a
                    className="block tertiary lg:w-2/3 mt-2 text-2xl group "
                    href={item.link_referencia}
                    target="_blank"
                  >
                    <span className="duration-500 group-hover:translate-x-[-3px] inline-block ">
                      {lang === "eng" ? (
                        <>Find out more about this reference</>
                      ) : (
                        <>Descubre más de esta referencia</>
                      )}
                    </span>

                    <img
                      className="w-[15px] inline-block ml-2 duration-500 group-hover:translate-x-2 "
                      src="/assets/iconos/oscuro/flecha_texto.png"
                      alt="flecha_texto_fb"
                    />
                  </a>
                )}
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
