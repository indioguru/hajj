import projects from "./projects.json";
import { ProjectsAll } from "./ProjectsAll";
import { ProjectsIntro } from "./ProjectsIntro";
import { ProjectsUpcoming } from "./ProjectsUpcoming";

export const Projects = () => {
  return (
    <main className="projects">
      <ProjectsIntro {...projects} />
      <ProjectsAll {...projects} />
      <ProjectsUpcoming {...projects} />
    </main>
  );
};
