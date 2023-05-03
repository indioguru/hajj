import { SliderBrandsSlides } from "./SliderBrandsSlides";
import { SliderButtons } from "./SliderButtons";
import { useSlider } from "./useSlider";

export const SliderBrands = ({ items, classSlides }) => {
  const { number } = useSlider(items, classSlides);
  return (
    <div className={`slider relative z-0 slider_${classSlides}`}>

      {/* SLIDES */}
      <SliderBrandsSlides items={items} classSlides={classSlides} />
      {/* BUTTONS/ARROWS */}
      <div className="ml-5 mb-5">
        <SliderButtons
          number={number}
          length={items.length}
          classSlides={classSlides}
        />
      </div>
    </div>
  );
};
