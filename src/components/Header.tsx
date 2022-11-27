import { AppBar, Grid, Toolbar } from "@mui/material";
import type { FC } from "react";
import { memo } from "react";
import type { Links } from "../types/links";
import links from "../data/links.json";
import SocialLink from "./header_links/SocialLink";

const Header: FC = () => (
  <AppBar
    elevation={0}
    position="sticky"
    // position="fixed"
    color="transparent">
    <Toolbar className="justify-content-end">
      <Grid
        container
        justifyContent="flex-end"
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
  </AppBar>
);

export default memo(Header);
