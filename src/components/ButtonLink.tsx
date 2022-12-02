import { Link } from "@mui/material";
import type {
  AnchorHTMLAttributes,
  ForwardRefRenderFunction,
  ReactNode,
} from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  children?: ReactNode;
};

const ButtonLink: ForwardRefRenderFunction<HTMLAnchorElement, Props> = (
  props: Props,
  ref
) => {
  const { children } = props;
  return (
    <Link
      target="_blank"
      rel="noreferrer"
      ref={ref}
      underline="none"
      {...props}>
      {children}
    </Link>
  );
};

// const forwardButtonLink = forwardRef(ButtonLink);

export default ButtonLink;
// export default memo<Props>(forwardButtonLink);
