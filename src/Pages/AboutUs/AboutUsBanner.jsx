import { Link } from "react-scroll";
import { Banner } from "../../Layout/Banner";
import { Button } from "../../Utils/Buttons/Button";

export const AboutUsBanner = ({
  banner,
  titulo,
  descripcion,
  titulo_ENG,
  descripcion_ENG,
  isLoading,
  lang,
}) => {
  return (
    <>
      {banner && (
        <>
          <Banner fondo={banner.url} show={isLoading} bg_position="left">
            <h2 className="lg:text-5xl">
              {lang === "eng" ? <> {titulo_ENG} </> : <> {titulo} </>}
            </h2>
            <div className="pb-0 mt-5 lg:flex justify-between items-end">
              <p className=" lg:w-2/4 ">
                {lang === "eng" ? (
                  <> {descripcion_ENG} </>
                ) : (
                  <> {descripcion} </>
                )}
              </p>

              <Link
                to="footer"
                smooth="true"
                duration={500}
                className="ga4-call_to_action-contacto-agendar_cita"
              >
                <Button>
                  <div>
                    {lang === "eng" ? (
                      <>Make an appointment </>
                    ) : (
                      <>Agende una cita</>
                    )}
                  </div>
                </Button>
              </Link>
            </div>
          </Banner>
        </>
      )}
    </>
  );
};
