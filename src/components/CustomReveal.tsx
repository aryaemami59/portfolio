import type { FC, ReactNode } from "react";
import { memo } from "react";
import type { FadeProps, SlideProps } from "react-awesome-reveal";
import { Fade, Slide } from "react-awesome-reveal";

type Props = {
  slideProps?: SlideProps;
  fadeProps?: FadeProps;
  children: ReactNode;
};

const CustomReveal: FC<Props> = ({ children, fadeProps, slideProps }) => (
  <Slide
    direction="left"
    triggerOnce
    {...slideProps}>
    <Fade
      delay={700}
      triggerOnce
      {...fadeProps}>
      {children}
    </Fade>
  </Slide>
);

export default memo<Props>(CustomReveal);
