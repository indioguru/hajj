import { useEffect } from "react";

export const usePageTitle = (lang, esp, eng) => {
  useEffect(() => {
    if (lang === "eng") {
      document.title = eng;
    } else {
      document.title = esp;
    }
  }, []);
};
