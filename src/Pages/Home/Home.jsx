import {
  HomeFeaturedProjects,
  HomeProposal,
  HomeBrands,
  HomeFavorites,
  HomeTrends,
} from "./index";
import home from "./home.json";
import { BannerSlider } from "../../Layout/BannerSlider";

export const Home = () => {
  return (
    <main className="home overflow-hidden ">
      <BannerSlider fondo="/assets/home/banner_home.png"></BannerSlider>
      <HomeProposal {...home} />
      <HomeFeaturedProjects {...home} />
      <HomeBrands {...home} />
      <HomeFavorites {...home} />
      <HomeTrends {...home} />
    </main>
  );
};
