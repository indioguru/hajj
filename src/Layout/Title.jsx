import { useAnimationScroll } from "../Hooks/useAnimationScroll";

export const Title = ({ title, subtitle }) => {
  useAnimationScroll("title", "translate-zero");

  return (
    <div className="title duration-500 translate-x-[-100vw]">
      <div className="text-coffee">
        <p className="text-xl mb-4 lg:text-3xl  ">{title}</p>
      </div>
      <h2 className="text-3xl lg:text-4xl lg:max-w-[50%] ">{subtitle}</h2>
    </div>
  );
};
