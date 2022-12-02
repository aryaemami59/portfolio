import type { AnchorHTMLAttributes, ReactNode } from "react";
import { forwardRef, memo } from "react";
import ButtonLink from "./ButtonLink";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  children?: ReactNode;
};

const ForwardButtonLink = forwardRef<HTMLAnchorElement, Props>(
  ButtonLink
) as typeof ButtonLink;

export default memo<Props>(ForwardButtonLink);
