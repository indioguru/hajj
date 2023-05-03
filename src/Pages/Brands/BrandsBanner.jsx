import { Banner } from "../../Layout/Banner";
import { BrandsIntro } from "./BrandsIntro";

export const BrandsBanner = ({ banner, brands }) => {
  return (
    <Banner fondo={banner.url}>
      <BrandsIntro {...brands} />
    </Banner>
  );
};
