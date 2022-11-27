import type { FC } from "react";
import { memo } from "react";
import type { SlideProps } from "react-awesome-reveal";
import CustomReveal from "./CustomReveal";
import ProjectImage from "./ProjectImage";
import ProjectText from "./ProjectText";

const projectImageSlideProps: SlideProps = { direction: "right" };

type Props = {
  name: string;
  id: number;
  description: string;
  screenshot: string;
  github: string;
  live: string;
  techStack: string[];
};

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
  // <Card raised>
  //   <CardContent>
  //     <Typography
  //       gutterBottom
  //       variant="h5"
  //       component="div">
  //       {name}
  //     </Typography>
  //     <Typography
  //       variant="body2"
  //       color="text.secondary">
  //       {description}
  //     </Typography>
  //   </CardContent>
  //   <CardActions>
  //     <StyledButton
  //       href={live}
  //       LinkComponent={forwardButtonLink}>
  //       See Live
  //     </StyledButton>
  //     <StyledButton
  //       href={github}
  //       LinkComponent={forwardButtonLink}>
  //       Source Code
  //     </StyledButton>
  //   </CardActions>
  // </Card>
);

export default memo<Props>(ProjectWrapper);
