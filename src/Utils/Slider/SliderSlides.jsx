import { Link } from "react-scroll";

export const SliderSlides = ({
  items,
  classSlides,
  fullView,
  setFullView,
  children,
}) => {
  return (
    <>
      {items.map((item, i) => (
        <div
          key={`slider_${classSlides}_${i + 1}`}
          className={
            fullView && window.innerWidth < 999
              ? `slider  ${classSlides} h-[40vh] lg:h-[90vh] relative transition-all duration-100`
              : `slider  ${classSlides} h-[200px] lg:h-[initial] relative transition-all duration-100`
          }
        >
          {/* Image */}
          <Link
            to={`slider_${classSlides}`}
            smooth={true}
            offset={window.innerWidth < 999 ? -100 : 0}
            duration={500}
          >
            {item.imagen && (
              <img
                className="h-full object-cover lg:object-contain object-left-top brightness-75 cursor-pointer"
                src={item.imagen.url}
                alt="slider-imagen"
                onClick={() => setFullView(!fullView)}
              />
            )}
          </Link>
          {/* Project name */}
          <h2 className="absolute text-xl lg:text-4xl bottom-5 left-0 right-0 m-auto w-3/4 text-center ">
            {item.nombre}
          </h2>

          {children}

          {/* Close icon */}
          <img
            onClick={() => setFullView(!fullView)}
            className={
              fullView && window.innerWidth < 999
                ? `absolute top-5 w-1/12 max-w-[40px] right-5 lg:right-28 cursor-pointer opacity-1 `
                : `absolute top-5 w-1/12 max-w-[40px] right-5 lg:right-28 cursor-pointer opacity-0 `
            }
            src="/assets/iconos/x_white.png"
            alt="equis"
          />
        </div>
      ))}
    </>
  );
};
