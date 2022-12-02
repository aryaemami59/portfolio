import { ButtonGroup, Container } from "@mui/material";
import type { FC } from "react";
import { memo } from "react";
import type { FadeProps, SlideProps } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import anchors from "../data/anchors.json";
import AnchorButton from "./AnchorButton";
import CustomReveal from "./CustomReveal";
import StyledButton from "./StyledButton";

const buttonGroupSlideProps: SlideProps = { delay: 500 };
const buttonGroupFadeProps: FadeProps = { delay: 1200 };

const TopSection: FC = () => (
  <section id="top">
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
        <ButtonGroup className="w-100 justify-content-center my-5">
          {anchors.map(anchor =>
            anchor.internal ? (
              <StyledButton key={anchor.id}>
                <AnchorButton to={anchor.title.toLowerCase()}>
                  {anchor.title}
                </AnchorButton>
              </StyledButton>
            ) : (
              <StyledButton
                component="a"
                LinkComponent={Link}
                key={anchor.id}
                href={anchor.title.toLowerCase()}>
                {anchor.title}
              </StyledButton>
            )
          )}
        </ButtonGroup>
      </CustomReveal>
    </Container>
  </section>
);

export default memo(TopSection);
