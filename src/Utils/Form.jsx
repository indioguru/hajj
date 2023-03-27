export const Form = () => {
  return (
    <form className="mt-12" action="">
      <div className="flex flex-col mb-5">
        <label className="eleanor-light ml-5">Nombre completo</label>
        <input
          className=" rounded-2xl bg-transparent border-2 h-[40px]  "
          type="text"
          name=""
        />
      </div>

      <div className="flex flex-col mb-5">
        <label className="eleanor-light ml-5">Correo</label>
        <input
          className=" rounded-2xl bg-transparent border-2 h-[40px]  "
          type="email"
          name=""
        />
      </div>

      <div className="flex flex-col mb-5">
        <label className="eleanor-light ml-5">Celular</label>
        <input
          className=" rounded-2xl bg-transparent border-2 h-[40px]  "
          type="number"
          name=""
        />
      </div>

      <div className="flex flex-col mb-5">
        <label className="eleanor-light ml-5">Comentario</label>
        <textarea
          className=" rounded-2xl bg-transparent border-2  "
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </form>
  );
};
