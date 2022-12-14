import type { FC, ReactNode } from "react";
import { memo } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

const WrapperLink: FC<Props> = ({ href, children }) => (
  <a
    target="_blank"
    rel="noreferrer"
    className="custom-link"
    href={href}>
    {children}
  </a>
);

export default memo<Props>(WrapperLink);
