import { ButtonGroup, Container } from "@mui/material";
import type { FC } from "react";
import { memo } from "react";
import type { FadeProps, SlideProps } from "react-awesome-reveal";
import "./App.css";
import AnchorButton from "./components/AnchorButton";
import CustomReveal from "./components/CustomReveal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import StyledButton from "./components/StyledButton";
import anchors from "./data/anchors.json";

const buttonGroupSlideProps: SlideProps = { delay: 500 };
const buttonGroupFadeProps: FadeProps = { delay: 1200 };
const projectsSlideProps: SlideProps = { direction: "down" };
const projectsFadeProps: FadeProps = { delay: 100 };

const App: FC = () => (
  <div className="App">
    <Header />
    <div id="container">
      <section>
        <Container maxWidth="sm">
          <CustomReveal>
            <h1 className="text-center">
              <span className="text-main-color">Arya Emami</span>
            </h1>
            <h1 className="text-center">Full Stack Developer</h1>
          </CustomReveal>
          <CustomReveal
            slideProps={buttonGroupSlideProps}
            fadeProps={buttonGroupFadeProps}>
            <ButtonGroup className=" w-100 justify-content-center my-5">
              {anchors.map(anchor => (
                <StyledButton key={anchor.id}>
                  <AnchorButton to={anchor.title.toLowerCase()}>
                    {anchor.title}
                  </AnchorButton>
                </StyledButton>
              ))}
            </ButtonGroup>
          </CustomReveal>
        </Container>
      </section>
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
      <section id="resume">
        <Container>
          <CustomReveal
            slideProps={projectsSlideProps}
            fadeProps={projectsFadeProps}>
            <h1 className="text-center">RESUME</h1>
          </CustomReveal>
          <Resume />
        </Container>
      </section>
      <section id="contact">
        <Container>
          <CustomReveal />
        </Container>
      </section>
      <section id="about">
        <Container>
          <CustomReveal />
        </Container>
      </section>
    </div>
    <Footer />
  </div>
);

export default memo(App);
