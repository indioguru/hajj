export const Banner = ({ children, fondo, show }) => {
  return (
    <>
      <section>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${fondo}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={` h-screen w-screen  relative  `}
        >
          {/* Logo */}
          <div className={show ? "opacity-0 " : "opacity-0  animation_logo"}>
            <img
              className="absolute left-0 right-0 margin-auto top-1/3  max-w-lg max_width_container"
              src="/assets/logo/hajj_logo_blanco.png"
              alt="hajj_logo_blanco"
            />
          </div>

          {/* Information children */}
          <div className="banner relative z-5 h-screen w-screen overflow-auto">
            <div className="h-screen w-screen"></div>
            <div className="max_width_container pb-5">{children}</div>
          </div>
        </div>
      </section>

      {/* <section>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${fondo}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={`banner h-screen w-screen  relative overflow-auto `}
        >
          <div className="h-screen w-screen"></div>

          <div className="max_width_container pb-5">{children}</div>
        </div>
        <img
          className="absolute left-0 right-0 margin-auto top-2/4 -translate-y-1/2  max-w-lg max_width_container"
          src="/assets/logo/hajj_logo_blanco.png"
          alt="hajj_logo_blanco"
        />
      </section> */}
    </>
  );
};
