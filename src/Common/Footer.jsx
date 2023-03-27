import { Title } from "../Layout/Title";
import { Form } from "../Utils/Form";

export const Footer = () => {
  return (
    <div className="footer bg-crema text-black pt-16">
      <div className="max_width_container">
        <Title
          title="Contacto"
          subtitle="Habla con nosotros Asesoría personalizada"
        />

        <Form />
      </div>
    </div>
  );
};
