import { FC, memo, ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

const WrapperLink: FC<Props> = ({ href, children }) => (
  <a
    target="_blank"
    rel="noreferrer"
    href={href}>
    {children}
  </a>
);

export default memo<Props>(WrapperLink);
