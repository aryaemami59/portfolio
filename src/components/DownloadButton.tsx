import { type AnchorHTMLAttributes, forwardRef } from "react";
import ButtonLink from "./ButtonLink";
import ForwardButtonLink from "./ForwardButtonLink";

type DownloadButtonProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const DownloadButton = forwardRef<HTMLAnchorElement, DownloadButtonProps>(
  (props, ref) => {
    console.log(props);
    return (
      <ForwardButtonLink
        // download="AryaEmamiResume.pdf"
        // ref={ref}
        {...props}>
        {props.children}
      </ForwardButtonLink>
    );
  }
) as typeof ForwardButtonLink;

DownloadButton.displayName = "DownloadButton";

export default DownloadButton;
