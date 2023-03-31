export const FooterBottom = () => {
  return (
    <section className="max_width_container">
      <p>
        <a href="mailto:contacto@hajjdesignless.com.mx">
          contacto@hajjdesignless.com.mx
        </a>
      </p>
      <p>+52 55 5281.8728 - +52 55 5281.8729</p>

      <p>
        Visita nuestro Showroom <br /> Ciudad de México, México.
      </p>

      <div className="w-2/5 max-w-[250px] m-auto py-10   hover:scale-110 transition-all duration-500 z-10 ">
        <img
          className="cursor-pointer "
          onClick={() => {
            navigate("/");
          }}
          src="/assets/logo/hajj_logo_negro.png"
          alt="hajj_logo_negro"
        />
      </div>
    </section>
  );
};
