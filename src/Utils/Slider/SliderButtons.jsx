export const SliderButtons = ({ fullView, number, length, classSlides }) => {
  return (
    <div
      className={
        fullView
          ? `buttons flex items-center justify-between mb-5 lg:mb-2 w-2/3 relative lg:left-5 z-10 duration-500 translate-y-[50px]  lg:max-w-[25%]`
          : `buttons flex items-center justify-between mb-2 lg:mb-5 w-2/3 relative lg:left-0 z-10 duration-500 translate-y-1/4  lg:max-w-[25%]`
      }
    >
      <div className={`prev_${classSlides} w-1/3 cursor-pointer`}>
        <img
          src="/assets/iconos/oscuro/flechalarga_izquierda.png"
          alt="flechalarga_izquierda"
        />
      </div>

      <p className="w-1/3 text-center text-2xl eleanor-light">
        {number} <span className=" text-[10px] " >de</span> {length}
      </p>

      <div className={`next_${classSlides} w-1/3 cursor-pointer`}>
        <img
          src="/assets/iconos/oscuro/flechalarga_derecha.png"
          alt="flechalarga_derecha"
        />
      </div>
    </div>
  );
};
