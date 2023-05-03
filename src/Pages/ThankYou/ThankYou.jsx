import { useNavigate } from "react-router-dom";
import { useLanguaje } from "../../Hooks/useLanguaje";
import { Button } from "../../Utils/Buttons/Button";

export const ThankYou = () => {
  const { lang } = useLanguaje();
  const navigate = useNavigate();

  return (
    <main className="invisible h-screen flex items-center justify-center max_width_container">
      <div className="text-center w-full">
        <h2>{lang === "eng" ? <>Thank you</> : <>Gracias</>}</h2>
        <p>
          {lang === "eng" ? (
            <>Soon will be in contact with you</>
          ) : (
            <>Pronto nos estaremos comunicando contigo.</>
          )}
        </p>
        <div
          onClick={() => (lang === "eng" ? navigate("/en") : navigate("/"))}
          className="text-center m-auto flex justify-center"
        >
          <Button>Go to home</Button>
        </div>
      </div>
    </main>
  );
};
