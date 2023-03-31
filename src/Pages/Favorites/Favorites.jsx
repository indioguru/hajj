import { FavoritesIntro } from "./FavoritesIntro";
import { FavoritesItems } from "./FavoritesItems/FavoritesItems";
import { useFetch } from "../../Hooks/useFetch";
import { Loader } from "../../Common/Loader";
import { ButtonScrollTop } from "../../Utils/Buttons/ButtonScrollTop";

export const Favorites = () => {
  const { data: favorites, isLoading } = useFetch("favoritos");
  return (
    <main className="favoritos bg-crema text-black overflow-hidden">
      <Loader show={isLoading} />

      {!isLoading && (
        <>
          <FavoritesIntro {...favorites} />
          <FavoritesItems {...favorites} />
          <ButtonScrollTop scrollTo="favoritos"  color="black" />

        </>
      )}
    </main>
  );
};
