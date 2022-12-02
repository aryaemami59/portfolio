import type { FC } from "react";
import { memo } from "react";
import type { SlideProps } from "react-awesome-reveal";
import type { ProjectProps } from "../types/projects";
import CustomReveal from "./CustomReveal";
import ProjectImage from "./ProjectImage";
import ProjectText from "./ProjectText";

const projectImageSlideProps: SlideProps = { direction: "right" };

type Props = ProjectProps;

const ProjectWrapper: FC<Props> = props => (
  <>
    <div className="col-sm-12 col-lg-4">
      <CustomReveal>
        <ProjectText {...props} />
      </CustomReveal>
    </div>
    <div className="col-sm-12 col-lg-8">
      <CustomReveal slideProps={projectImageSlideProps}>
        <ProjectImage {...props} />
      </CustomReveal>
    </div>
  </>
);

export default memo<Props>(ProjectWrapper);
