import { useAnimationScroll } from "../Hooks/useAnimationScroll";
import { useLanguaje } from "../Hooks/useLanguaje";

export const ImageWithText = ({
  imagen,
  texto,
  nombre,
  texto_ENG,
  nombre_ENG,
  link,
}) => {
  // useAnimationScroll("image-with-text", "scale-75");
  const { lang } = useLanguaje();

  return (
    <div className=" relative mb-5 w-full h-full   ">
      {imagen && (
        <img
          className="h-full object-cover "
          src={imagen.url}
          alt="imagen"
        />
      )}

      <div className="gradient-black absolute bottom-0 h-[4vh] lg:h-[8vh] w-4/4 left-0 right-0 m-auto text-center ">
        <h2
          className={
            link
              ? "image-with-text text-xl duration-1000 lg:text-4xl scale-75"
              : "image-with-text text-xl duration-1000 lg:text-4xl scale-75"
          }
        >
          {lang === "eng" ? (
            <>
              {" "}
              {texto_ENG} {nombre_ENG}
            </>
          ) : (
            <>
              {" "}
              {texto} {nombre}
            </>
          )}
        </h2>
      </div>
    </div>
  );
};
