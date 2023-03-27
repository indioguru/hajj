import { Link } from "react-scroll";

export const SliderBrandsSlides = ({
  items,
  classSlides,
}) => {
  return (
    <>
      {items.map((item, i) => (
        <div
          key={`slider_${classSlides}_${i + 1}`}
          className={`slider ${classSlides} h-[80vh] lg:h-[90vh] relative transition-all duration-100`}
        >
          {/* Image */}
          <Link
            to={`slider_${classSlides}`}
            smooth={true}
            offset={window.innerWidth < 999 ? -70 : 0}
            duration={500}
          >
            <img
              className="h-full object-cover object-left-top brightness-50  cursor-pointer"
              src={item.imagen}
              alt="slider-imagen"
            />
          </Link>

          {/* Logo */}
          <div className="absolute w-2/4 max-w-[300px] left-0 right-0 m-auto top-1/2 -translate-y-1/2">
            <img src={item.logo} alt="logo" />
          </div>

          {/* Brand info */}
          <div className="absolute bottom-5 left-0 right-0 m-auto w-4/5 lg:left-10 lg:m-0 lg:bottom-10 ">
            <p className="eleanor-light text-xl lg:text-3xl"> {item.nombre}</p>
            <p className="text-xs lg:text-base">{item.info}</p>
          </div>

        </div>
      ))}
    </>
  );
};
