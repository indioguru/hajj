import { Loader } from "../../Common/Loader";
import { useFetch } from "../../Hooks/useFetch";
import { Banner } from "../../Layout/Banner";
import { AboutUsIntro } from "./AboutUsIntro";
import { AboutUsMap } from "./AboutUsMap";

export const AboutUs = () => {
  const { data, isLoading } = useFetch("nosotros");

  return (
    <main>
      <Loader show={isLoading} />
      {!isLoading && (
        <>
          <Banner fondo="/assets/home/banner_home.png" show={isLoading}></Banner>
          <AboutUsIntro {...data} />
          <AboutUsMap />
        </>
      )}
    </main>
  );
};
