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

export const Home = () => {
  const { data: home, isLoading } = useFetch("home");

  return (
    <main className="home overflow-hidden ">
      <Loader show={isLoading} />
      {!isLoading && (
        <>
          <BannerSlider {...home} show={isLoading}></BannerSlider>
          <HomeProposal {...home} />
          <HomeFeaturedProjects {...home} />
          <HomeBrands {...home} />
          <HomeFavorites {...home} />
          <HomeTrends {...home} />
          <ButtonScrollTop scrollTo="home"  color="white" />

        </>
      )}
    </main>
  );
};
