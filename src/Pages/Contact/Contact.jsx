import { useLanguaje } from "../../Hooks/useLanguaje";
import { usePageTitle } from "../../Hooks/usePageTitle";
import { Banner } from "../../Layout/Banner";

export const Contact = () => {
  const { lang } = useLanguaje();
  usePageTitle(lang, 'HAJJ DESIGNLESS | CONTACTO', 'HAJJ DESIGNLESS | CONTACT');

  return (
    <main>
      <Banner fondo="/assets/home/banner_home.png">
        <h2>Contacto</h2>
        <p className="pb-5">
          Lorem ipsum dolor sit amet, consetetur sadipscing
        </p>
      </Banner>

      
    </main>
  );
};
