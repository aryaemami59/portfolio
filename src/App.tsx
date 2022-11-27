import { ButtonGroup, Container } from "@mui/material";
import { FC, memo } from "react";
import "./App.css";
import CustomReveal from "./components/CustomReveal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import StyledButton from "./components/StyledButton";
import anchors from "./data/anchors.json";

const App: FC = () => (
  <div className="App">
    <Header />
    <CustomReveal>
      <section>
        <Container maxWidth="sm">
          <h1 className="text-center">
            <span className="text-main-color">Arya Emami</span>
          </h1>
          <h1 className="text-center">Full Stack Developer</h1>
          <ButtonGroup className=" w-100 justify-content-center">
            {anchors.map(anchor => (
              <StyledButton key={anchor.id}>{anchor.title}</StyledButton>
            ))}
          </ButtonGroup>
        </Container>
      </section>
    </CustomReveal>
    <CustomReveal>
      <section>
        <Container maxWidth="sm">
          <Projects />
        </Container>
      </section>
    </CustomReveal>
    <Footer />
  </div>
);

export default memo(App);
