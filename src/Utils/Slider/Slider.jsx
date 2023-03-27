
import { useAnimationScroll } from "../../Hooks/useAnimationScroll";
import { SliderButtons } from "./SliderButtons";
import { SliderSlides } from "./SliderSlides";
import { useSlider } from "./useSlider";

export const Slider = ({ items, classSlides }) => {
  const { number, fullView, setFullView } = useSlider(items, classSlides);
  useAnimationScroll('slider', 'padding-top-zero')
  return (
    <div
      className={
        fullView
          ? `slider slider_${classSlides} `
          : `max_width_container slider slider_${classSlides} pt-40 duration-500`
      }
    >
      {/* BUTTONS/ARROWS */}
      <SliderButtons
        fullView={fullView}
        number={number}
        length={items.length}
        classSlides={classSlides}
      />

      {/* SLIDES */}
      <SliderSlides
        items={items}
        classSlides={classSlides}
        fullView={fullView}
        setFullView={setFullView}
      />
    </div>
  );
};
