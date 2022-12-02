import { Container } from "@mui/material";
import type { FC } from "react";
import { memo } from "react";
import type { FadeProps, SlideProps } from "react-awesome-reveal";
import CustomReveal from "./CustomReveal";
import Resume from "./Resume";

const projectsSlideProps: SlideProps = { direction: "down" };
const projectsFadeProps: FadeProps = { delay: 100 };

const ResumeSection: FC = () => (
  <section id="resume">
    <Container>
      <CustomReveal
        slideProps={projectsSlideProps}
        fadeProps={projectsFadeProps}>
        <h1 className="text-center my-5">RESUME</h1>
      </CustomReveal>
      <Resume />
    </Container>
  </section>
);

export default memo(ResumeSection);
