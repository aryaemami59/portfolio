import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import { FC, memo } from "react";
import StyledButton from "./StyledButton";

type Props = {
  name: string;
  id: number;
  description: string;
  screenshot: string;
  github: string;
  live: string;
};

const ProjectWrapper: FC<Props> = ({
  name,
  id,
  description,
  screenshot,
  github,
  live,
}) => {
  const image = `/assets/screenshots/${screenshot}`;
  return (
    <Card raised>
      <CardMedia
        component="img"
        alt={name}
        image={image}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div">
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <StyledButton
          LinkComponent={Link}
          href={live}>
          See Live
        </StyledButton>
        <StyledButton
          href={github}
          LinkComponent={Link}>
          Source Code
        </StyledButton>
      </CardActions>
    </Card>
  );
};

export default memo<Props>(ProjectWrapper);
