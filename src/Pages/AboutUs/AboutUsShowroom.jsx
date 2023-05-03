import { useNavigate } from "react-router-dom";
import { Title } from "../../Layout/Title";
import { Button } from "../../Utils/Buttons/Button";

export const AboutUsShowroom = ({
  titulo_showroom,
  descripcion_showroom,
  titulo_showroom_ENG,
  descripcion_showroom_ENG,
  imagen_showroom,
  lang,
}) => {
  const navigate = useNavigate();
  return (
    <section className="max_width_container mb-40 ">
      <Title
        title={titulo_showroom}
        subtitle={descripcion_showroom}
        title_ENG={titulo_showroom_ENG}
        subtitle_ENG={descripcion_showroom_ENG}
      />
      {imagen_showroom && (
        <div className="mt-10">
          <img src={imagen_showroom.url} alt="image from api" />
        </div>
      )}

      <div onClick={() => navigate("/showrooms")}>
        <Button styles="m-auto">
          {lang === "eng" ? <>Go to showroom</> : <>Ir a showroom</>}
        </Button>
      </div>
    </section>
  );
};
