import type { FC } from "react";
import { memo } from "react";
import type { LinkProps } from "react-scroll";
import { Link } from "react-scroll";

type Props = Omit<LinkProps, "ref">;

const AnchorButton: FC<Props> = props => (
  <Link
    {...props}
    // smooth
    spy
    // duration={300}
    activeClass="active"
  />
);

export default memo<Props>(AnchorButton);
