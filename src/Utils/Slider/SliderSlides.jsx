import { Link } from "react-scroll";

export const SliderSlides = ({ items, classSlides, fullView, setFullView }) => {
  return (
    <>
      {items.map((item, i) => (
        <div
          key={`slider_${classSlides}_${i + 1}`}
          className={
            fullView
              ? `slider ${classSlides} h-[40vh] lg:h-[90vh] relative transition-all duration-100`
              : `slider ${classSlides} h-[200px] lg:h-[80vh] relative transition-all duration-100`
          }
        >
          {/* Image */}
          <Link
            to={`slider_${classSlides}`}
            smooth={true}
            offset={window.innerWidth < 999 ? -100 : 0}
            duration={500}
          >
            <img
              className="h-full object-cover object-left-top brightness-75 cursor-pointer"
              src={item.imagen}
              alt="slider-imagen"
              onClick={() => setFullView(!fullView)}
            />
          </Link>
          {/* Project name */}
          <p className="absolute bottom-5 left-0 right-0 m-auto w-3/4 text-center ">
            {item.nombre}
          </p>

          {/* Close icon */}
          <img
            onClick={() => setFullView(!fullView)}
            className={
              fullView
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
