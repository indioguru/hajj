import { useAnimationScroll } from "../../Hooks/useAnimationScroll";
import { ImageWithText } from "../../Layout/ImageWithText";
import { Title } from "../../Layout/Title";

export const HomeTrends = ({
  titulo_tendencias,
  subtitulo_tendencias,
  galeria_tendencias,
}) => {
  useAnimationScroll("imagen-trend", "translate-zero")

  return (
    <section className="max_width_container mb-40 ">
      <div className="mb-10">
        <Title title={titulo_tendencias} subtitle={subtitulo_tendencias} />
      </div>

      <div className="lg:flex justify-between flex-wrap [&>*:nth-child(even)]:translate-x-[100vw] ">
        {galeria_tendencias.map((item) => (
          <a
            className="cursor-pointer imagen-trend lg:w-[45%] h-[350px] hover:scale-100 duration-[1.5s] translate-x-[-100vw] "
            target="_blank"
            href={item.link}
          >
            <ImageWithText key={item._id} {...item} />
          </a>
        ))}
      </div>
    </section>
  );
};
