import { useAnimationScroll } from "../../Hooks/useAnimationScroll";
import { SliderButtons } from "./SliderButtons";
import { SliderSlides } from "./SliderSlides";
import { useSlider } from "./useSlider";

export const Slider = ({ items, classSlides, children }) => {
  const { number, fullView, setFullView } = useSlider(items, classSlides);
  useAnimationScroll("slider", "padding-top-zero");
  return (
    <div
      className={
        fullView && window.innerWidth < 999
          ? `slider relative z-0 slider_${classSlides} `
          : `max_width_container z-0 lg:w-full slider slider_${classSlides} pt-0 duration-500`
      }
    >
      {/* SLIDES */}
      <SliderSlides
        items={items}
        classSlides={classSlides}
        fullView={fullView}
        setFullView={setFullView}
      >
        {children}
      </SliderSlides>
      {/* BUTTONS/ARROWS */}
      <SliderButtons
        fullView={fullView}
        number={number}
        length={items.length}
        classSlides={classSlides}
      />
    </div>
  );
};
