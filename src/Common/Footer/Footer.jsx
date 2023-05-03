import { useLocation } from "react-router-dom";
import { Title } from "../../Layout/Title";
import { Form } from "../../Utils/Form";
import { FooterBottom } from "./FooterBottom";

export const Footer = () => {
  const location = useLocation();

  if (
    location.pathname === "/gracias" ||
    location.pathname === "/en/thankyou"
  ) {
    return null;
  }
  return (
    <div className="footer bg-crema text-black pt-16 relative z-[50] ">
      <div className="flex flex-row-reverse">
        <p className="leading-luxury eleanor-light text-coffee w-[92.5%] lg:max-w-[50%] text-[18px] lg:text-2xl duration-500">
          Leading luxury interior design company
        </p>
      </div>
      <div className="flex flex-row-reverse pb-14   ">
        <hr className="lg:max-w-[50%] border-coffee bg-coffee w-[92%] " />
      </div>

      <div className="max_width_container">
        <div className="max-w-[1000px] ">
          <Title
            title="Contacto"
            subtitle="Descubre la esencia del lujo con nuestras soluciones de diseño a la media. "
            title_ENG="Contact"
            subtitle_ENG="Chat with us for personalized advice"
          />
        </div>

        <section className="pb-10">
          <Form />
        </section>
      </div>

  

      <FooterBottom />
    </div>
  );
};
