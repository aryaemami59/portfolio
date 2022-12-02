import { Container } from "@mui/material";
import type { FC } from "react";
import { memo } from "react";
import type { FadeProps, SlideProps } from "react-awesome-reveal";
import About from "./About";
import CustomReveal from "./CustomReveal";

const projectsSlideProps: SlideProps = { direction: "down" };
const projectsFadeProps: FadeProps = { delay: 100 };

const AboutSection: FC = () => (
  <section id="about">
    <Container>
      <CustomReveal
        slideProps={projectsSlideProps}
        fadeProps={projectsFadeProps}>
        <h1 className="text-center my-5">ABOUT</h1>
      </CustomReveal>
      <About />
    </Container>
  </section>
);

export default memo(AboutSection);
