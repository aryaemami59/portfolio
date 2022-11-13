import { Grid, Toolbar } from "@mui/material";
import { FC, memo } from "react";
import links from "../data/links.json";
import type { Links } from "../types/links";
import BottomAppBar from "./BottomAppBar";
import SocialLink from "./header_links/SocialLink";

const Footer: FC = () => (
  <footer>
    <BottomAppBar color="transparent">
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
