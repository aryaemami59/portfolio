import { Container } from "@mui/material";
import type { FC } from "react";
import { memo } from "react";
import type { FadeProps, SlideProps } from "react-awesome-reveal";
import CustomReveal from "./CustomReveal";
import Projects from "./Projects";

const projectsSlideProps: SlideProps = { direction: "down" };
const projectsFadeProps: FadeProps = { delay: 100 };

const ProjectsSection: FC = () => (
  <section id="projects">
    <Container>
      <CustomReveal
        slideProps={projectsSlideProps}
        fadeProps={projectsFadeProps}>
        <h1 className="text-center">PROJECTS</h1>
      </CustomReveal>
      <Projects />
    </Container>
  </section>
);

export default memo(ProjectsSection);
