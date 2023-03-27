import { FavoritesItem } from "./FavoritesItem";
import { FavoritesItemDesktop } from "./FavoritesItemDesktop";

export const FavoritesItems = ({ favoritos }) => {
  return (
    <div className="favorites-items [&>*:nth-child(even)]:flex-row-reverse ">
      {window.innerWidth < 999 && (
        <>
          {favoritos.map((favorite) => (
            <FavoritesItem {...favorite} />
          ))}
        </>
      )}

      {window.innerWidth > 999 && (
        <>
          {favoritos.map((favorite) => (
            <FavoritesItemDesktop {...favorite} />
          ))}
        </>
      )}
    </div>
  );
};
