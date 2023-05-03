import { FavoritesIntro } from "./FavoritesIntro";
import { FavoritesItems } from "./FavoritesItems/FavoritesItems";
import { useFetch } from "../../Hooks/useFetch";
import { Loader } from "../../Common/Loader";
import { ButtonScrollTop } from "../../Utils/Buttons/ButtonScrollTop";
import { useLanguaje } from "../../Hooks/useLanguaje";
import { usePageTitle } from "../../Hooks/usePageTitle";
import { InvitationToContact } from "../../Layout/InvitationToContact";

export const Favorites = () => {
  const { data: favorites, isLoading } = useFetch("favoritos");
  const { lang } = useLanguaje();
  usePageTitle(lang, "FAVORITOS", "FAVORITES");

  return (
    <main className="favoritos bg-crema text-black overflow-hidden">
      <Loader show={isLoading} />

      {!isLoading && (
        <>
          <FavoritesIntro {...favorites} lang={lang} />
          <FavoritesItems {...favorites} lang={lang} />

          <div className="flex justify-end text-right lg:text-left max_width_container">
            <InvitationToContact
              styles="invitation-to-contact w-3/4 mb-10"
              boton_text={favorites.boton_invitacion.texto_boton}
              text={favorites.boton_invitacion.texto}
              boton_text_ENG={favorites.boton_invitacion.texto_boton_ENG}
              text_ENG={favorites.boton_invitacion.texto_ENG}
            />
          </div>
          <ButtonScrollTop scrollTo="favoritos" color="black" />
        </>
      )}
    </main>
  );
};
