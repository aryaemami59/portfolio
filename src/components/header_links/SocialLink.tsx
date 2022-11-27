import { MDBIcon } from "mdb-react-ui-kit";
import type { FC } from "react";
import { memo } from "react";
import WrapperLink from "./WrapperLink";

type Props = {
  href: string;
  icon: string;
};

const SocialLink: FC<Props> = ({ href, icon }) => (
  <WrapperLink href={href}>
    <MDBIcon
      size="2x"
      fab
      className="text-main-color"
      icon={icon}
    />
  </WrapperLink>
);
export default memo<Props>(SocialLink);
