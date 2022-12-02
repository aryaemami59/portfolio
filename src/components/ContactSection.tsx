import { Container } from "@mui/material";
import type { FC } from "react";
import { memo } from "react";
import type { FadeProps, SlideProps } from "react-awesome-reveal";
import Contact from "./Contact";
import CustomReveal from "./CustomReveal";

const projectsSlideProps: SlideProps = { direction: "down" };
const projectsFadeProps: FadeProps = { delay: 100 };

const ContactSection: FC = () => (
  <section id="contact">
    <Container>
      <CustomReveal
        slideProps={projectsSlideProps}
        fadeProps={projectsFadeProps}>
        <h1 className="text-center my-5">CONTACT</h1>
      </CustomReveal>
      <Contact />
    </Container>
  </section>
);

export default memo(ContactSection);
