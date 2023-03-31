import { Title } from "../../Layout/Title";
import { Form } from "../../Utils/Form";
import { FooterBottom } from "./FooterBottom";

export const Footer = () => {
  return (
    <div className="footer bg-crema text-black pt-16">
      <div className="max_width_container">
        <Title
          title="Contacto"
          subtitle="Habla con nosotros Asesoría personalizada"
        />

        <section className="pb-40">
          <Form />
        </section>
      </div>

      <div className="flex flex-row-reverse">
        <p className="leading-luxury eleanor-light text-coffee w-[92.5%] lg:max-w-[50%] text-[18px] lg:text-2xl duration-500">
          Leading luxury interior design company
        </p>
      </div>
      <div className="flex flex-row-reverse pb-14   ">
        <hr className="lg:max-w-[50%] border-coffee bg-coffee w-[92%] " />
      </div>

      <FooterBottom />
    </div>
  );
};
