import { Loader } from "../../Common/Loader";
import { useFetch } from "../../Hooks/useFetch";
import { useLanguaje } from "../../Hooks/useLanguaje";
import { usePageTitle } from "../../Hooks/usePageTitle";
import { ButtonScrollTop } from "../../Utils/Buttons/ButtonScrollTop";
import { ProjectsAll } from "./ProjectsAll";
import { ProjectsIntro } from "./ProjectsIntro";
import { ProjectsUpcoming } from "./ProjectsUpcoming";

export const Projects = () => {
  const { data:projects, isLoading } = useFetch("proyectos");
  const { lang } = useLanguaje();
  usePageTitle(lang, 'HAJJ DESIGNLESS | PROYECTOS', 'HAJJ DESIGNLESS | PROJECTS');

  return (
    <main className="projects overflow-hidden">
      <Loader show={isLoading} />

      {!isLoading && (
        <>
          <ProjectsIntro {...projects} />
          <ProjectsAll {...projects} lang={lang} />
          <ProjectsUpcoming {...projects} lang={lang} />
          <ButtonScrollTop scrollTo="projects"  color="white" />
        </>
      )}
    </main>
  );
};
