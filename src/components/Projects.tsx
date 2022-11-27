import { FC, memo } from "react";
import projects from "../data/projects.json";
import ProjectWrapper from "./ProjectWrapper";

const Projects: FC = () => (
  <>
    {projects.map(project => (
      <div
        className="row"
        key={project.id}>
        <ProjectWrapper {...project} />
      </div>
    ))}
  </>
);

export default memo(Projects);
