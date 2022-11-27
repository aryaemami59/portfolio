import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { FC, memo, useMemo } from "react";
import ButtonLink from "./ButtonLink";
import ProjectTextSubHeader from "./ProjectTextSubHeader";
import StyledButton from "./StyledButton";

type Props = {
  name: string;
  id: number;
  description: string;
  screenshot: string;
  github: string;
  live: string;
  techStack: string[];
};

const ProjectText: FC<Props> = ({
  description,
  github,
  id,
  live,
  name,
  screenshot,
  techStack,
}) => {
  const subheader = useMemo(
    () => <ProjectTextSubHeader techStack={techStack} />,
    [techStack]
  );

  return (
    <Card raised>
      <CardHeader
        className="w-auto"
        title={name}
        subheader={subheader}
        // subheaderTypographyProps={{ component: "div" }}
      />
      <CardContent>
        {/* <Typography
        gutterBottom
        variant="h5"
        component="div">
        {name}
      </Typography> */}
        <Typography
          variant="body2"
          color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <StyledButton
          href={live}
          LinkComponent={ButtonLink}>
          See Live
        </StyledButton>
        <StyledButton
          href={github}
          LinkComponent={ButtonLink}>
          Source Code
        </StyledButton>
      </CardActions>
    </Card>
  );
};

export default memo<Props>(ProjectText);
