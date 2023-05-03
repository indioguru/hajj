import {
  HomeFeaturedProjects,
  HomeProposal,
  HomeBrands,
  HomeFavorites,
  HomeTrends,
} from "./index";
import { BannerSlider } from "../../Layout/BannerSlider";
import { useFetch } from "../../Hooks/useFetch";
import { Loader } from "../../Common/Loader";
import { ButtonScrollTop } from "../../Utils/Buttons/ButtonScrollTop";
import { useLanguaje } from "../../Hooks/useLanguaje";
import { usePageTitle } from "../../Hooks/usePageTitle";

export const Home = () => {
  const { data: home, isLoading } = useFetch("home");
  const { lang } = useLanguaje();
  usePageTitle(lang, 'HAJJ DESIGNLESS', 'HAJJ DESIGNLESS');

  return (
    <main className="home overflow-hidden ">
      <Loader show={isLoading} />
      {!isLoading && (
        <>
          <BannerSlider {...home} show={isLoading} lang={lang} ></BannerSlider>
          <HomeProposal {...home} lang={lang}  />
          <HomeFeaturedProjects {...home} lang={lang}  />
          <HomeBrands {...home} lang={lang}  />
          <HomeFavorites {...home} lang={lang}  />
          <HomeTrends {...home} lang={lang}  />
          <ButtonScrollTop scrollTo="home"  color="white" />

        </>
      )}
    </main>
  );
};
