import { useAnimationScroll } from "../Hooks/useAnimationScroll";
import { useLanguaje } from "../Hooks/useLanguaje";
import { Button } from "../Utils/Buttons/Button";

export const BlockText = ({
  title,
  subtitle,
  info,
  url,
  textButton,
  styles = "translate-x-[-100vw]",
  title_ENG,
  subtitle_ENG,
  info_ENG,
  textButton_ENG,
}) => {
  useAnimationScroll("block-text", "translate-zero");
  const { lang } = useLanguaje();

  return (
    <div className={`block-text pb-20 ${styles} transition-all duration-1000`}>
      <h2 className="leading-8 ">
        {lang === "eng" ? <>{title_ENG}</> : <>{title} </>}
      </h2>
      <h3 className="mb-8 lg:mb-16">{subtitle}</h3>
      <p>{info}</p>

      {url && <Button url={url}>{textButton}</Button>}
    </div>
  );
};
