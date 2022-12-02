import { Card, CardActions, CardMedia } from "@mui/material";
import type { FC } from "react";
import { memo } from "react";
import links from "../data/links.json";
import StyledButton from "./StyledButton";

const { href } = links[3];
const downloadLink = "/assets/images/AryaEmamiResume.pdf";
const image = `/assets/screenshots/resume.png`;

const Resume: FC = () => (
  <Card raised>
    <CardMedia
      component="img"
      image={image}
    />
    <CardActions>
      <StyledButton
        component="a"
        target="_blank"
        rel="noreferrer"
        href={href}>
        VIEW PDF
      </StyledButton>
      <StyledButton
        download="AryaEmamiResume.pdf"
        component="a"
        target="_blank"
        rel="noreferrer"
        href={downloadLink}>
        DOWNLOAD
      </StyledButton>
    </CardActions>
  </Card>
);

export default memo(Resume);
