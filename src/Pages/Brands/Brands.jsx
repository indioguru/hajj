import { BrandsIntro } from "./BrandsIntro";
import { BrandsItems } from "./BrandsItems";
import { useFetch } from "../../Hooks/useFetch";
import { Loader } from "../../Common/Loader";
import { ButtonScrollTop } from "../../Utils/Buttons/ButtonScrollTop";
import { usePageTitle } from "../../Hooks/usePageTitle";
import { useLanguaje } from "../../Hooks/useLanguaje";
import { BrandsBanner } from "./BrandsBanner";
export const Brands = () => {
  const { data: brands, isLoading } = useFetch("marcas");
  const { lang } = useLanguaje();
  usePageTitle(lang, 'HAJJ DESIGNLESS | MARCAS', 'HAJJ DESIGNLESS | BRANDS');

  return (
    <main className="brands">
      <Loader show={isLoading} />
      {!isLoading && (
        <>   
          <BrandsBanner {...brands} brands={brands} />
          <BrandsItems {...brands} />
          <ButtonScrollTop scrollTo="brands" color="white" />
        </>
      )}
    </main>
  );
};
