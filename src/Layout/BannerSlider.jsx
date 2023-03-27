export const BannerSlider = ({ fondo }) => {
  return (
    <>
      <section>
        <div className={` h-screen w-screen  relative  `}>
          <img
            className="absolute left-0 right-0 margin-auto top-1/3  max-w-lg max_width_container z-[1] "
            src="/assets/logo/hajj_logo_blanco.png"
            alt="hajj_logo_blanco"
          />
          <img
            className="absolute w-full h-full object-cover "
            src={fondo}
            alt="fondo extraido desde el api"
          />

          {/* Information children */}
          <div className="absolute bottom-5 z-5  w-[85%] m-auto left-0 right-0 ">
            <div className="">Soy una información</div>
          </div>
        </div>
      </section>
    </>
  );
};
