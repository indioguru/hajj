import { BlockText } from "../../Layout/BlockText";

export const BrandsIntro = ({ titulo, info, texto_boton, url_boton }) => {
  return (
    <section className="max_width_container  mb-20 mt-20">
      <div className="lg:w-3/4">
        <BlockText
          title={titulo}
          info={info}
          url={url_boton}
          textButton={texto_boton}
        />
      </div>
    </section>
  );
};
