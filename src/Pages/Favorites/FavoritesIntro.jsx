import { BlockText } from "../../Layout/BlockText";

export const FavoritesIntro = ({ titulo, subtitulo, info, imagen }) => {
  return (
    <div className="max_width_container pt-40 pb-40 lg:flex items-center justify-between">
      <div className="lg:w-[48%] ">
        <BlockText
          title={titulo}
          subtitle={subtitulo}
          info={info}
          styles="false"
        />
      </div>

      <img
        className="image-right mt-20 lg:w-[48%] lg:mt-0 duration-1000"
        src={imagen.url}
        alt="imagen"
      />
    </div>
  );
};
