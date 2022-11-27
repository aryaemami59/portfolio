import { Link } from "@mui/material";
import { forwardRef, ForwardRefRenderFunction, memo, ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

const ButtonLink: ForwardRefRenderFunction<HTMLAnchorElement, Props> = (
  props: Props,
  ref
) => {
  const { children } = props;
  return (
    <Link
      {...props}
      target="_blank"
      rel="noreferrer"
      ref={ref}
      underline="none">
      {children}
    </Link>
  );
};

const forwardButtonLink = forwardRef(ButtonLink);

export default memo<Props>(forwardButtonLink);