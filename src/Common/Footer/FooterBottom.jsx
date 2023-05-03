import { Button } from "../../Utils/Buttons/Button";
import { SocialMedia } from "../../Utils/SocialMedia/SocialMedia";

export const FooterBottom = () => {
  return (
    <section className="max_width_container lg:flex items-end lg:pb-10">

      {/* Top info */}
      <div className="lg:w-full justify-between text-center">
        <p className="pb-5">
          Visita nuestro Showroom <br /> Ciudad de México, México.
        </p>

        <p>
          <a
            className="ga4-call_to_action-contacto-mailto"
            href="mailto:contacto@hajjdesignless.com.mx"
          >
            contacto@hajjdesignless.com.mx
          </a>
        </p>
        <p className="pb-6">
          <a
            className="ga4-call_to_action-contacto-telefono"
            href="tel:+525552818728"
          >
            +52 55 5281.8728
          </a>{" "}
          -{" "}
          <a
            className="ga4-call_to_action-contacto-telefono"
            href="tel:+525552818729"
          >
            +52 55 5281.8729
          </a>
        </p>


        {/* Bottom info */}
        <div className="lg:flex justify-between items-center ">
          {/* Social media */}
          <SocialMedia styles="flex justify-center lg:w-1/4 lg:mt-0" color="black" />

          {/* Newsletter */}
          <form
            action="https://hajjdesignless.us5.list-manage.com/subscribe/post?u=8c8768f036d3b5ea8cf75eee0&amp;id=62e72af08e&amp;f_id=008a09ebf0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            novalidate
            className="flex flex-col justify-center lg:justify-start py-5 lg:py-0 w-4/4 lg:w-1/4"
          >
            <div className="clear" style={{ display: "none" }}>
              <input
                type="submit"
                value="SUSCRÍBETE AL NEWSLETTER"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
            <div className="ga4-call_to_action-contacto-newsletter w-fit m-auto">
              <Button styles="lg:w-3/4 lg:my-0">Newsletter</Button>
            </div>
          </form>
          {/* Hajj logo */}
          <div className="w-2/5 lg:w-1/4 m-auto pt-5 pb-10 z-10 lg:pb-0 lg:m-[initial] ">
            <img
              className="cursor-pointer lg:m-auto max-w-[250px] "
              onClick={() => {
                navigate("/");
              }}
              src="/assets/logo/hajj_logo_negro.png"
              alt="hajj_logo_negro"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
