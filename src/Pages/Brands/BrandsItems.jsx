import { SliderBrands } from "../../Utils/Slider/SliderBrands";

export const BrandsItems = ({ marcas }) => {
  return (
    <section className="mb-40 max-w-[1500px] lg:w-[85%] lg:m-auto lg:mb-40">
      <SliderBrands items={marcas} classSlides="brands-page-items" />
    </section>
  );
};
