import { useAnimationScroll } from "../Hooks/useAnimationScroll";

export const TitleWithHr = () => {
    useAnimationScroll('hr_item', 'width-92');
    useAnimationScroll('leading-luxury', 'opacity-1');

  return (
    <>
      <div className="flex flex-row-reverse">
        <p className="leading-luxury eleanor-light w-[92.5%] lg:max-w-[50%] text-[18px] lg:text-xl duration-500 opacity-0">
          Leading luxury interior design company
        </p>
      </div>
      <div className="flex flex-row-reverse mb-14  ">
        <hr className="hr_item duration-500 w-[0.5%] lg:max-w-[50%] " />
      </div>
    </>
  );
};
