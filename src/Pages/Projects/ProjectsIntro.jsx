import { BlockText } from "../../Layout/BlockText";

export const ProjectsIntro = ({ titulo, subtitulo, info, imagen }) => {
  return (
    <section className="pt-60 max_width_container mb-40 lg:flex items-center justify-between ">
      <div className="lg:w-[48%] ">
        <BlockText
          title={titulo}
          subtitle={subtitulo}
          info={info}
          styles="false"
        />
      </div>

      <img className="lg:w-[48%] lg:max-h-[600px] " src={imagen.url} alt="imagen" />
    </section>
  );
};
