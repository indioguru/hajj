import { Loader } from "../../Common/Loader";
import { useFetch } from "../../Hooks/useFetch";
import { ButtonScrollTop } from "../../Utils/Buttons/ButtonScrollTop";
import { ProjectsAll } from "./ProjectsAll";
import { ProjectsIntro } from "./ProjectsIntro";
import { ProjectsUpcoming } from "./ProjectsUpcoming";

export const Projects = () => {
  const { data:projects, isLoading } = useFetch("proyectos");
  return (
    <main className="projects">
      <Loader show={isLoading} />

      {!isLoading && (
        <>
          <ProjectsIntro {...projects} />
          <ProjectsAll {...projects} />
          <ProjectsUpcoming {...projects} />
          <ButtonScrollTop scrollTo="projects"  color="white" />
        </>
      )}
    </main>
  );
};
