import { MapInteractionCSS } from "react-map-interaction";

export const AboutUsMap = () => {
  return (
    <section className="max_width_container">
      <MapInteractionCSS
        defaultValue={{
          scale: window.innerWidth < 1024 ? 3 : 1,
          translation: {
            x: window.innerWidth < 1024 ? -100 : 0,
            y: window.innerWidth < 1024 ? -300 : 0,
          },
        }}
        translationBounds={{
          xMin: window.innerWidth < 1024 ? -500 : -1000,
          xMax: window.innerWidth < 1024 ? 100 : 1000,
          yMin: window.innerWidth < 1024 ? -500 : -1000,
          yMax: window.innerWidth < 1024 ? 100 : 1000,
        }}
        maxScale={window.innerWidth < 1024 ? 5 : 2}
        minScale={window.innerWidth < 1024 ? 2 : 1}
        disableZoom={false}
      >
        <img src="/assets/nosotros/map.png" />
      </MapInteractionCSS>
    </section>
  );
};
