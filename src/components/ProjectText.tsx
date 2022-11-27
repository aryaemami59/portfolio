import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import type { FC } from "react";
import { memo, useMemo } from "react";
import ButtonLink from "./ButtonLink";
import ProjectTextSubHeader from "./ProjectTextSubHeader";
import StyledButton from "./StyledButton";

const titleTypographyProps = { className: "mb-3" };

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
    <Card
      raised
      className="h-100 d-flex flex-row flex-wrap">
      <CardHeader
        titleTypographyProps={titleTypographyProps}
        title={name}
        subheader={subheader}
      />
      <CardContent>
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
