import { useAnimationScroll } from "../Hooks/useAnimationScroll";
import { Button } from "../Utils/Buttons/Button";

export const BlockText = ({ title, subtitle, info, url, textButton, styles = 'translate-x-[-100vw]' }) => {
  useAnimationScroll("block-text", "translate-zero");

  return (
    <div className={`block-text pb-20 ${styles} transition-all duration-1000`}>
      <h2 className="leading-8 ">{title}</h2>
      <h3 className="mb-8 lg:mb-16">{subtitle}</h3>
      <p>{info}</p>

      {url && <Button url={url}>{textButton}</Button>}
    </div>
  );
};
