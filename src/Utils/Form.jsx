import { useNavigate } from "react-router-dom";
import { useForm } from "../Hooks/useForm";
import { useLanguaje } from "../Hooks/useLanguaje";
import { Button } from "./Buttons/Button";

export const Form = () => {
  const { lang } = useLanguaje();
  const navigate = useNavigate();

  const { nombre, email, telefono, message, formState, onChange } = useForm({
    nombre: "",
    email: "",
    telefono: "",
    message: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const mensaje_error = document.querySelector(".mensaje_error");

    if (nombre === "" || email === "" || telefono === "" || message === "") {
      mensaje_error.classList.add("opacity-100");
      return setTimeout(() => {
        mensaje_error.classList.remove("opacity-100");
      }, 2000);
    }

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/javialex95/google_sheets/RtXcAQMXILrWzVPX?tabId=hoja1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([[nombre, email, telefono, message]]),
        }
      );

      const final = await response.json();
      if (final.message) {
        navigate("/gracias");
      }
    } catch (error) {}
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mt-12 lg:flex justify-between items-start "
      action=""
    >
      <section className="lg:w-[48%] ">
        <div className="flex flex-col mb-5">
          <label className="eleanor-light ml-5 text-xl">
            {lang === "eng" ? <>Full name</> : <>Nombre completo</>}
          </label>
          <input
            className=" rounded-2xl bg-transparent border-2 h-[40px] px-5 "
            type="text"
            name="nombre"
            onChange={onChange}
          />
        </div>

        <div className="flex flex-col mb-5">
          <label className="eleanor-light ml-5 text-xl">
            {" "}
            {lang === "eng" ? <>Email</> : <>Correo</>}{" "}
          </label>
          <input
            className=" rounded-2xl bg-transparent border-2 h-[40px] px-5 "
            type="email"
            name="email"
            onChange={onChange}
          />
        </div>

        <div className="flex flex-col mb-5">
          <label className="eleanor-light ml-5 text-xl">
            {" "}
            {lang === "eng" ? <>Telephone</> : <>Celular</>}{" "}
          </label>
          <input
            className=" rounded-2xl bg-transparent border-2 h-[40px] px-5 "
            type="number"
            name="telefono"
            onChange={onChange}
          />
        </div>
      </section>

      <section className="lg:w-[48%] ">
        <div className="flex flex-col mb-5 lg:h-[50%] ">
          <label className="eleanor-light ml-5 text-xl">
            {" "}
            {lang === "eng" ? <>Comment</> : <>Comentario</>}{" "}
          </label>
          <textarea
            className=" rounded-2xl bg-transparent border-2 px-5 h-full "
            name="message"
            onChange={onChange}
            id=""
            cols="30"
            rows={window.innerWidth < 1000 ? "10" : "5"}
          ></textarea>
        </div>

        <div className="w-2/4 m-auto">
          <Button styles="bg-[#625350] text-crema w-full lg:w-full ga4-call_to_action-contacto-enviar_form ">
            {lang === "eng" ? <>Send</> : <>Enviar</>}
          </Button>
        </div>

        <p className="mensaje_error text-center mt-4 text-[#FF9494] opacity-0 ">
          <strong>
            {lang === "eng" ? (
              <> You must fill in all the fields </>
            ) : (
              <> Debes de llenar todos los campos </>
            )}
          </strong>
        </p>
      </section>
    </form>
  );
};
