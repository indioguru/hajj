import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useLanguaje = () => {
  const [lang, setLang] = useState("esp");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/en")) {
      setLang("eng");
    } else {
      setLang("esp");
    }
  }, [location]);

  return {
    lang,
  };
};
