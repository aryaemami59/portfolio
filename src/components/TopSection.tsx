import { ButtonGroup, Container } from "@mui/material";
import type { FC } from "react";
import { memo } from "react";
import type { FadeProps, SlideProps } from "react-awesome-reveal";
import { NavLink, useLocation } from "react-router-dom";
import alternateAnchors from "../data/alternateAnchors.json";
import anchors from "../data/anchors.json";
import type { Anchors } from "../types/anchors";
import AnchorButton from "./AnchorButton";
import CustomReveal from "./CustomReveal";
import StyledButton from "./StyledButton";

const buttonGroupSlideProps: SlideProps = { delay: 500 };
const buttonGroupFadeProps: FadeProps = { delay: 1200 };

const TopSection: FC = () => {
  const location = useLocation();
  return (
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
          <ButtonGroup
            fullWidth
            className="flex-md-row flex-column justify-content-center my-5">
            {location.pathname === "/"
              ? anchors.map((anchor: Anchors) =>
                  anchor.internal ? (
                    <StyledButton key={anchor.id}>
                      <AnchorButton to={anchor.link}>
                        {anchor.title}
                      </AnchorButton>
                    </StyledButton>
                  ) : (
                    <NavLink
                      key={anchor.id}
                      to={anchor.link}>
                      {({ isActive, isPending }) =>
                        isActive ? (
                          <StyledButton className="active-button">
                            {anchor.title}
                          </StyledButton>
                        ) : (
                          <StyledButton>{anchor.title}</StyledButton>
                        )
                      }
                    </NavLink>
                  )
                )
              : alternateAnchors.map((anchor: Anchors) => (
                  <NavLink
                    key={anchor.id}
                    to={anchor.link}>
                    {({ isActive, isPending }) =>
                      isActive ? (
                        <StyledButton className="active-button">
                          {anchor.title}
                        </StyledButton>
                      ) : (
                        <StyledButton>{anchor.title}</StyledButton>
                      )
                    }
                  </NavLink>
                ))}
          </ButtonGroup>
        </CustomReveal>
      </Container>
    </section>
  );
};

export default memo(TopSection);
