import { Grid, Toolbar } from "@mui/material";
import type { FC } from "react";
import { memo } from "react";
import links from "../data/links.json";
import type { Links } from "../types/links";
import BottomAppBar from "./BottomAppBar";
import SocialLink from "./header_links/SocialLink";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { IconButton } from "@mui/material";
import AnchorButton from "./AnchorButton";

const Footer: FC = () => (
  <footer>
    <BottomAppBar color="transparent">
      <AnchorButton
        to="top"
        className="mt-3 align-self-center">
        <IconButton
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
  </footer>
);

export default memo(Footer);
