import type { AppBarProps, SxProps, Theme } from "@mui/material";
import { AppBar } from "@mui/material";
import type { ElementType } from "react";
import { memo } from "react";

const sx: SxProps<Theme> = { top: "auto", bottom: 0 };

const BottomAppBar = <C extends ElementType>(
  props: AppBarProps<C, { component?: C }>
) => (
  <AppBar
    sx={sx}
    position="static"
    className="mt-3"
    {...props}
  />
);

export default memo(BottomAppBar);
