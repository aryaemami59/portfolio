import { FC, memo, ReactNode } from "react";
import Reveal, { Fade, FadeProps, RevealProps } from "react-awesome-reveal";

type Props = {
  revealProps?: RevealProps;
  fadeProps?: FadeProps;
  children: ReactNode;
};

const CustomReveal: FC<Props> = ({ children, fadeProps, revealProps }) => (
  <Reveal
    {...revealProps}
    duration={500}
    triggerOnce>
    <Fade
      {...fadeProps}
      delay={400}
      triggerOnce>
      {children}
    </Fade>
  </Reveal>
);

export default memo<Props>(CustomReveal);
