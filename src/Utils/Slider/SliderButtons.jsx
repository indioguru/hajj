export const SliderButtons = ({ fullView, number, length, classSlides }) => {
  return (
    <div
      className={
        `buttons flex items-center justify-between mb-2 lg:mb-5 w-2/3 relative lg:left-0 z-10 duration-500 translate-y-1/4 max-w-[250px] m-auto`
      }
    >
      <div className={`prev_${classSlides} w-1/3 cursor-pointer duration-500 hover:-translate-x-3`}>
        <img
          src="/assets/iconos/oscuro/flechalarga_izquierda.png"
          alt="flechalarga_izquierda"
        />
      </div>

      <p className="w-1/3 text-center text-2xl eleanor-light">
        {number} <span className=" text-[10px] " >de</span> {length}
      </p>

      <div className={`next_${classSlides} w-1/3 cursor-pointer duration-500 hover:translate-x-3`}>
        <img
          src="/assets/iconos/oscuro/flechalarga_derecha.png"
          alt="flechalarga_derecha"
        />
      </div>
    </div>
  );
};
