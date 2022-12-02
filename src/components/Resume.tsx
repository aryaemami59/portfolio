import { Card, CardActions, CardMedia } from "@mui/material";
import type { AnchorHTMLAttributes, FC } from "react";
import { memo, useRef } from "react";
import links from "../data/links.json";
import DownloadButton from "./DownloadButton";
import ForwardButtonLink from "./ForwardButtonLink";
import StyledButton from "./StyledButton";

const D: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = props => {
  const { children } = props;
  return (
    <ForwardButtonLink download="AryaEmamiResume.pdf">
      {children}
    </ForwardButtonLink>
  );
};

const { href } = links[3];
const downloadLink = "/assets/images/AryaEmamiResume.pdf";

// type DownloadButtonProps = AnchorHTMLAttributes<HTMLAnchorElement>;

// DownloadButton.displayName = "DownloadButton";

const Resume: FC = () => {
  // const ref = useRef(null);
  const image = `/assets/screenshots/resume.png`;
  return (
    <Card raised>
      <CardMedia
        component="img"
        image={image}
      />
      <CardActions>
        <StyledButton
          LinkComponent={ForwardButtonLink}
          href={href}>
          VIEW PDF
        </StyledButton>
        <StyledButton
          download="AryaEmamiResume.pdf"
          // LinkComponent={DownloadButton}
          LinkComponent={ForwardButtonLink}
          href={downloadLink}>
          DOWNLOAD
        </StyledButton>
      </CardActions>
      {/* <CardContent>

      </CardContent> */}
    </Card>
  );
};

export default memo(Resume);
