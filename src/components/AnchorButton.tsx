import type { FC } from "react";
import { memo } from "react";
import type { LinkProps } from "react-scroll";
import { Link } from "react-scroll";
import type { Anchors } from "../types/anchors";
import {
  Link as RouteLink,
  LinkProps as RouteLinkProps,
} from "react-router-dom";
type AnchorProps = { anchor?: Partial<Anchors> };

type Props = Omit<LinkProps, "ref"> & AnchorProps & RouteLinkProps;

const AnchorButton: FC<Props> = props => {
  const { anchor } = props;
  return anchor?.internal ? (
    <Link
      {...props}
      spy
      activeClass="active"
    />
  ) : (
    <RouteLink {...props} />
  );
};

export default memo<Props>(AnchorButton);
