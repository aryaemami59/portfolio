import { FC, memo } from "react";
import projects from "../data/projects.json";
import ProjectWrapper from "./ProjectWrapper";

const Projects: FC = () => (
  <>
    {projects.map(project => (
      <ProjectWrapper
        key={project.id}
        {...project}
      />
    ))}
  </>
);

export default memo(Projects);
