import { FavoritesIntro } from "./FavoritesIntro";
import { FavoritesItems } from "./FavoritesItems/FavoritesItems";
import favorites from "./favorites.json";

export const Favorites = () => {
  return (
    <main className="bg-crema text-black overflow-hidden">
      <FavoritesIntro {...favorites} />
      <FavoritesItems {...favorites} />
    </main>
  );
};
