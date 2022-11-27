import { Card, CardMedia } from "@mui/material";
import { FC, memo } from "react";

type Props = {
  name: string;
  screenshot: string;
};

const ProjectImage: FC<Props> = ({ name, screenshot }) => {
  const image = `/assets/screenshots/${screenshot}`;

  return (
    <Card raised>
      <CardMedia
        component="img"
        className="custom-image img-fluid"
        alt={name}
        image={image}
      />
    </Card>
  );
};

export default memo<Props>(ProjectImage);
