import type { FC } from "react";
import { memo } from "react";
import type { LinkProps } from "react-scroll";
import { Link } from "react-scroll";

type Props = Omit<LinkProps, "ref">;

const AnchorButton: FC<Props> = props => (
  <Link
    {...props}
    spy
    activeClass="active"
  />
);

export default memo<Props>(AnchorButton);
