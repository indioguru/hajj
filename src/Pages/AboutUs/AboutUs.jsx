
import { Loader } from "../../Common/Loader";
import { useFetch } from "../../Hooks/useFetch";
import { Banner } from "../../Layout/Banner";
import { Button } from "../../Utils/Buttons/Button";
import { SocialMedia } from "../../Utils/SocialMedia/SocialMedia";
import { AboutUsBrands } from "./AboutUsBrands";
import { AboutUsIntro } from "./AboutUsIntro";
import { AboutUsMap } from "./AboutUsMap";
import { AboutUsShowroom } from "./AboutUsShowroom";
import { AboutUsTeam } from "./AboutUsTeam";

export const AboutUs = () => {
  const { data, isLoading } = useFetch("nosotros");

  return (
    <main>
      <Loader show={isLoading} />
      {!isLoading && (
        <>
          <Banner fondo="/assets/home/banner_home.png" show={isLoading}>
            <div>
              <h2>Nosotros</h2>
              <p className=" lg:max-w-[75%] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                quos est enim sequi vel ad! Praesentium alias veniam placeat
                repellendus eum adipisci labore mollitia maiores, tenetur
                itaque! Placeat, accusamus quibusdam?
              </p>

              <Button>Agende una cita</Button>
              <SocialMedia />
            </div>
          </Banner>
          <AboutUsIntro {...data} />
          <AboutUsTeam {...data} />
          <AboutUsBrands {...data} />
          <AboutUsMap {...data} />
          <AboutUsShowroom {...data} />
        </>
      )}
    </main>
  );
};
