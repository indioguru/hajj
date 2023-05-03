import { useLanguaje } from "../Hooks/useLanguaje";

export const BlockText = ({
  title,
  subtitle,
  info,
  styles,
  title_ENG,
  subtitle_ENG,
  info_ENG,
  children,
}) => {
  const { lang } = useLanguaje();
  return (
    <div className={`block-text pb-20 ${styles} transition-all duration-1000`}>
      <h2>{lang === "eng" ? <>{title_ENG}</> : <>{title} </>}</h2>
      <h3 className="mb-8 lg:mb-8">
        {lang === "eng" ? <> {subtitle_ENG}</> : <> {subtitle}</>}
      </h3>
      <p>{lang === "eng" ? <>{info_ENG}</> : <>{info}</>}</p>

      {children}
    </div>
  );
};
