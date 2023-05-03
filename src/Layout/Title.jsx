import { useLanguaje } from "../Hooks/useLanguaje";

export const Title = ({ title, subtitle, title_ENG, subtitle_ENG }) => {
  const { lang } = useLanguaje();

  return (
    <div className="title duration-500 ">
      <div className="text-coffee">
        <p className="text-xl mb-1 lg:text-3xl  ">
          {lang === "eng" ? <>{title_ENG}</> : <>{title}</>}
        </p>
      </div>
      <h2 className="text-3xl lg:text-4xl lg:max-w-[50%] ">
        {lang === "eng" ? <>{subtitle_ENG}</> : <>{subtitle}</>}
      </h2>
    </div>
  );
};
