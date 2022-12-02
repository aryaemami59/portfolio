import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { Grid, IconButton, Toolbar } from "@mui/material";
import type { FC } from "react";
import { memo } from "react";
import links from "../data/links.json";
import type { Links } from "../types/links";
import AnchorButton from "./AnchorButton";
import BottomAppBar from "./BottomAppBar";
import SocialLink from "./header_links/SocialLink";

const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const Footer: FC = () => (
  <BottomAppBar
    color="transparent"
    component="footer">
    <AnchorButton
      to="top"
      className="mt-3 align-self-center">
      <IconButton
        onClick={scrollTop}
        size="large"
        className="align-self-center button-slide">
        <KeyboardArrowUpOutlinedIcon />
      </IconButton>
    </AnchorButton>
    <Toolbar>
      <Grid
        container
        justifyContent="center"
        columnSpacing={5}>
        {links.map((link: Links) => (
          <Grid
            key={link.id}
            item>
            <SocialLink
              href={link.href}
              icon={link.icon}
              key={link.id}
            />
          </Grid>
        ))}
      </Grid>
    </Toolbar>
  </BottomAppBar>
);

export default memo(Footer);
