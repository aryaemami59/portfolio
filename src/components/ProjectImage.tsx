import { Card, CardMedia } from "@mui/material";
import type { FC } from "react";
import { memo } from "react";
import type { ProjectImageProps } from "../types/projects";

type Props = ProjectImageProps;

const ProjectImage: FC<Props> = ({ name, screenshot }) => (
  <Card raised>
    <CardMedia
      component="img"
      className="custom-image img-fluid"
      alt={name}
      image={screenshot}
    />
  </Card>
);

export default memo<Props>(ProjectImage);
