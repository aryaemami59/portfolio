import type { FC } from "react";
import { memo } from "react";
import type { LinkProps } from "react-scroll";
import { Link } from "react-scroll";

type Props = Omit<LinkProps, "ref">;

const AnchorButton: FC<Props> = props => (
  <Link
    smooth
    spy
    activeClass="active"
    {...props}
  />
);

export default memo<Props>(AnchorButton);
