import { Loader } from "../../Common/Loader";
import { useFetch } from "../../Hooks/useFetch";
import { useLanguaje } from "../../Hooks/useLanguaje";
import { usePageTitle } from "../../Hooks/usePageTitle";
import { ButtonScrollTop } from "../../Utils/Buttons/ButtonScrollTop";
import { AboutUsBanner } from "./AboutUsBanner";
import { AboutUsBrands } from "./AboutUsBrands";
import { AboutUsIntro } from "./AboutUsIntro";
import { AboutUsMap } from "./AboutUsMap";
import { AboutUsShowroom } from "./AboutUsShowroom";
import { AboutUsTeam } from "./AboutUsTeam";

export const AboutUs = () => {
  const { data, isLoading } = useFetch("nosotros");
  const { lang } = useLanguaje();
  usePageTitle(lang, 'HAJJ DESIGNLESS | NOSOTROS', 'HAJJ DESIGNLESS | ABOUT US');

  return (
    <main className="nosotros overflow-hidden">
      <Loader show={isLoading} />
      {!isLoading && (
        <>
          <AboutUsBanner {...data} isLoading={isLoading} lang={lang} />
          <AboutUsIntro {...data} lang={lang} />
          <AboutUsTeam {...data} lang={lang} />
          <AboutUsBrands {...data} lang={lang} />
          <AboutUsMap {...data} lang={lang} />
          <AboutUsShowroom {...data} lang={lang} />
          <ButtonScrollTop scrollTo="nosotros"  color="white" />

        </>
      )}
    </main>
  );
};
