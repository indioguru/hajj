export const Banner = ({ children, fondo, show, bg_position = "center" }) => {
  return (
    <>
      <section className="relative z-20">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url("${fondo}")`,
            backgroundSize: "cover",
            backgroundPosition: bg_position,
          }}
          className={`h-screen w-screen relative`}
        >
          {/* Logo */}
          <div className={show ? "opacity-0" : "opacity-0 animation_logo"}>
            <img
              className="absolute left-0 right-0 margin-auto object-contain top-1/3 h-[25vh] max-w-lg max_width_container"
              src="/assets/logo/hajj_logo_blanco.png"
              alt="hajj_logo_blanco"
            />
          </div>

          {/* Information children */}
          <div className="banner absolute z-5 bottom-5 max_width_container  left-0 right-0 m-auto">
            <div className=" pb-5">{children}</div>
          </div>
        </div>
      </section>

      {/* BANNER WITH SCROLL */}
      {/* <section className="relative z-20">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url("${fondo}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={`h-screen w-screen relative`}
        >
          <div className={show ? "opacity-0" : "opacity-0 animation_logo"}>
            <img
              className="absolute left-0 right-0 margin-auto object-contain top-1/3 h-[25vh] max-w-lg max_width_container"
              src="/assets/logo/hajj_logo_blanco.png"
              alt="hajj_logo_blanco"
            />
          </div>

          <div className="banner relative z-5 h-screen w-screen overflow-auto">
            <div className="h-screen w-screen"></div>
            <div className="max_width_container pb-5">{children}</div>
          </div>
        </div>
      </section> */}
    </>
  );
};
