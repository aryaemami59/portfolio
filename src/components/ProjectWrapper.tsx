import { FC, memo } from "react";
import ProjectImage from "./ProjectImage";
import ProjectText from "./ProjectText";

type Props = {
  name: string;
  id: number;
  description: string;
  screenshot: string;
  github: string;
  live: string;
};

const ProjectWrapper: FC<Props> = props => (
  <>
    <div className="col-sm-12 col-lg-4">
      <ProjectText {...props} />
    </div>
    <div className="col-sm-12 col-lg-8">
      <ProjectImage {...props} />
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
