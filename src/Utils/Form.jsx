import { Button } from "./Buttons/Button";

export const Form = () => {
  return (
    <form className="mt-12 lg:flex justify-between items-start " action="">
      <section className="lg:w-[48%] ">
        <div className="flex flex-col mb-5">
          <label className="eleanor-light ml-5">Nombre completo</label>
          <input
            className=" rounded-2xl bg-transparent border-2 h-[40px] px-5 "
            type="text"
            name=""
          />
        </div>

        <div className="flex flex-col mb-5">
          <label className="eleanor-light ml-5">Correo</label>
          <input
            className=" rounded-2xl bg-transparent border-2 h-[40px] px-5 "
            type="email"
            name=""
          />
        </div>

        <div className="flex flex-col mb-5">
          <label className="eleanor-light ml-5">Celular</label>
          <input
            className=" rounded-2xl bg-transparent border-2 h-[40px] px-5 "
            type="number"
            name=""
          />
        </div>
      </section>

      <section className="lg:w-[48%] ">
        <div className="flex flex-col mb-5 lg:h-[50%] ">
          <label className="eleanor-light ml-5">Comentario</label>
          <textarea
            className=" rounded-2xl bg-transparent border-2 px-5 h-full "
            name=""
            id=""
            cols="30"
            rows={window.innerWidth < 1000 ? "10" : "5"}
          ></textarea>
        </div>
        <div className="w-2/4 m-auto">
          <Button styles="bg-[#625350] text-crema w-full lg:w-full">
            Enviar
          </Button>
        </div>
      </section>
    </form>
  );
};
