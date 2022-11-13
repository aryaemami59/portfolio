import { ButtonGroup, Container } from "@mui/material";
import { FC, memo } from "react";
import "./App.css";
import CustomReveal from "./components/CustomReveal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import StyledButton from "./components/StyledButton";
import anchors from "./data/anchors.json";

const App: FC = () => (
  <div className="App">
    <Header />
    <CustomReveal>
      <Container maxWidth="sm">
        <h1>
          Hi my name is <span className="text-main-color">Arya.</span>
        </h1>
        <h1>I am a full stack developer. </h1>
        <ButtonGroup>
          {anchors.map(anchor => (
            <StyledButton key={anchor.id}>{anchor.title}</StyledButton>
          ))}
        </ButtonGroup>
      </Container>
    </CustomReveal>
    <Footer />
  </div>
);

export default memo(App);
