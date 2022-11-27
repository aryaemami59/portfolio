import type { FC } from "react";
import { memo } from "react";
import projects from "../data/projects.json";
import ProjectWrapper from "./ProjectWrapper";

const Projects: FC = () => (
  <>
    {projects.map(project => (
      <div
        className="row my-5"
        key={project.id}>
        <ProjectWrapper {...project} />
      </div>
    ))}
  </>
);

export default memo(Projects);
