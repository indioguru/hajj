import { useAnimationScroll } from "../Hooks/useAnimationScroll";

export const ImageWithText = ({ imagen, texto, nombre }) => {

  useAnimationScroll('image-with-text', 'scale-one')
  return (
    <div className="image-with-text relative mb-5 duration-1000 scale-75 ">
      <img className=" brightness-75 " src={imagen.url} alt="imagen" />
      <p className="PR-light absolute bottom-5 lg:bottom-10 w-3/4 left-0 right-0 m-auto text-center lg:text-4xl">
        {texto} {nombre}
      </p>
    </div>
  );
};
