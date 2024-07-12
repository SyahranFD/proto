import ProjectCard from "./project-card";
import { Project } from "../../../../lib/services/model/project";

const ProjectList = ({ projects }: { projects: Project[] }) => (
    <div className="grid grid-cols-4">
    {projects.map((project, index) => (
      <ProjectCard key={index} project={project} />
    ))}
  </div>


);

export default ProjectList;
