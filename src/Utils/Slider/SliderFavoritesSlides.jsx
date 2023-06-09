import { Link } from "react-scroll";

export const SliderFavoritesSlides = ({
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
              : `slider  ${classSlides} h-[200px] lg:h-[auto] relative transition-all duration-100`
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
                className="h-full object-cover object-left-top brightness-75 cursor-pointer"
                src={item.imagen.url}
                alt="slider-imagen"
                onClick={() => setFullView(!fullView)}
              />
            )}
          </Link>
          {/* Project name */}

          <div className="flex absolute bottom-5 w-[90%] left-0 right-0 m-auto justify-between items-end ">
            <div className="w-2/4">
              <p className="text-crema text-[16px] mb-1 lg:text-2xl">
                {item.nombre_referencia}
              </p>
              <p className="text-crema">{item.nombre_marca}</p>
            </div>

            <div className="w-1/4 lg:w-[150px] ">
              {item.logo && <img src={item.logo.url} alt="logo" />}
            </div>
          </div>

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
